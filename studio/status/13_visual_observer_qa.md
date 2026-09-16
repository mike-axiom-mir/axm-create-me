# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_SCENE_MOTION_VISUAL_RECHECK / EXACT NEUTRAL→PEAK RECEIVING-SCENE A/B CLEARS FOCUS-STEAL + HIERARCHY REGRESSION QUESTION / CONTINUOUS PLAYBACK + SHADED LOOKDEV + DYNAMIC RUNTIME STILL HELD**

## Scope selected

The highest-leverage unverified visual claim in this pass was the exact Nature sapling response after it moved from isolated wire evidence into the real seed-29 Environment receiving scene in `mike-axiom-mir/axm-map-design` PR #4.

This is the explicit next gate from Art Direction after `PASS_ART_DIRECTION_LOCAL_SWAY_HIERARCHY_001 / RELEASE_TO_SCENE_INTEGRATION`: compare the accepted local response at neutral `0.000 s` versus peak `0.250 s` from the existing fixed `path_eye` and `elevated_oblique` cameras without retuning placement or importing the separate Materials candidate.

Exact receiving lane:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#4 — Environment: integrate first source-owned nature + weather slice`;
- branch: `studio/environment-real-nature-weather-001`;
- exact current head: `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`;
- PR state: open / draft / mergeable;
- exact Nature/VFX response head: `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`;
- response profile: `HIERARCHICAL_TRUNK_BRANCH_LEAF_HALF_SINE_VISUAL_SWAY`;
- displacement ceiling: `0.180 m`;
- renderer: Godot `4.7.2-stable (official)` GL Compatibility;
- Materials candidate: intentionally excluded;
- Weather semantics: `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`.

`axm-create-me` remains coordination-only. No product implementation was added here.

## Why this outranked other current QA surfaces

Fresh specialist/status and PR review found several active surfaces:

- **Materials / LookDev:** Nature PR #5 already has direct isolated and Environment-context Godot A/B inspection. Final lookdev remains held, but the current material delta itself is already directly observed.
- **Rigging / Deformation:** Object PR #3 has a 111-sample structural hinge envelope and a directly inspected five-pose side proof. Animal PR #2 still lacks the requested matched shaded/perspective smoothstep-vs-`t^0.75` A/B, so its perceptual weighting claim remains blocked on missing evidence rather than ready for QA adjudication.
- **Animation / Motion:** Animal PR #5 now has a valid nine-sample temporal board and structural temporal continuity PASS. It still needs independent perceptual review, but Art Direction explicitly prioritized the Environment neutral/peak receiving-scene test first.
- **VFX / Atmosphere:** Map PR #7 has a nine-state Weather sequence whose 18 PNGs were already directly inspected by VFX. Visual Observer acceptance remains separate, but it does not currently block the already-requested Nature scene-motion gate.
- **Runtime / Optimization:** the static Environment source-slice budget is measured, while changing-geometry / dynamic update cost remains explicitly unimplemented. There is no live dynamic runtime output to inspect yet.
- **Wreckline:** the 35 m LOD visual hold still lacks a truthful rebuilt/rendered candidate because provider closure is incomplete.
- **Character / Geometry:** current candidates remain upstream of direct deformation/runtime acceptance.

The Environment neutral→peak A/B was therefore the most consequential ready visual decision: it directly answered the named Art Director question and was waiting on independent Visual Observer inspection.

## Exact evidence acquired

Latest retained artifact for the exact current PR head:

- artifact ID: **`10430239495`**;
- exact head binding: `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`;
- archive SHA-256: **`5b13301858afef9bf4a4dfc21ca559964cad9aa3e3af78b50e879cd14ba51e88`**.

The ZIP was downloaded independently and rehashed to the exact recorded digest.

The retained four PNGs are byte-identical to the earlier artifact `10429983610`; the rerun did not silently move the visual evidence.

Exact PNG SHA-256 values:

- `path_eye_neutral.png`: `09bc4a49b2af3084cfc8cb3cf3402a6bad9f2ed05a14f8e1bb80a2c53588d1e8`;
- `path_eye_peak.png`: `673888d7802845ca18be90615e84e3dc5b8e3f81ef8383d9d915b201a5928031`;
- `elevated_oblique_neutral.png`: `fdc1d3630fbeae53eca3f9cd8dd740a52666a2dc7404bd5839a0cce1fa90c32d`;
- `elevated_oblique_peak.png`: `72795b323e27839b342e774101355e97d2e6e100b44296476e458f2ca2805300`.

The retained structural receipt separately confirms:

- same two fixed cameras;
- 390-vertex / 570-triangle observation representation in both states;
- topology preserved;
- maximum neutral→peak displacement `0.18000000000000033 m` against the retained `0.180 m` ceiling;
- peak path unblocked;
- no peak spacing conflicts;
- peak remains inside the old reserved static proxy footprint;
- proof-only leaf culling and Weather presentation boundaries preserved.

Those machine checks support attribution but do not substitute for the visual decision below.

## Direct visual QA observation

All four exact retained PNGs were opened and directly inspected as neutral/peak A/B pairs. Additional image differencing was used only to localize the actual changed region; aesthetic judgment remains based on the rendered images themselves.

### `path_eye`

Observed:

- the central approach remains the dominant readable structure from neutral to peak;
- the moving sapling is peripheral and heavily cropped at the left edge in both states;
- visible branch/crown movement does not pull attention away from the path endpoint or building mass;
- the moving cast-shadow detail remains small and peripheral and does not cross or visually close the main route;
- no new scene-level silhouette collision or obvious branch detachment is visible at this camera scale;
- the large right-side/east Nature proxy, object proxies, building proxy and Weather field remain visually unchanged.

Pixel localization for neutral→peak:

- changed pixels: **`3,338 / 792,000` = `0.421%`**;
- changed-pixel bounding box: **`x=0..276`, `y=85..478`**.

The changed region corresponds to the cropped sapling and its cast shadow, not to a scene-wide render/state leak.

### `elevated_oblique`

Observed:

- the full sapling is visible and the neutral→peak crown/branch change is perceptible;
- the local response stays visually subordinate to the broader composition;
- the central path keeps the same read and remains more compositionally important than the sapling motion;
- the already-known large east foreground Nature proxy remains the dominant oblique hierarchy problem in both states;
- the sapling peak does **not** materially worsen that existing proxy dominance or mask additional deep context;
- the peak silhouette remains coherent at this scene scale; no new detached cluster, obvious root kink, or abrupt scene-scale break is visible;
- the cast shadow changes consistently with the moving sapling and remains a secondary ground detail.

Pixel localization for neutral→peak:

- changed pixels: **`2,349 / 792,000` = `0.297%`**;
- changed-pixel bounding box: **`x=368..532`, `y=138..314`**;
- largest connected changed regions: sapling body/crown about `1,592 px`, cast-shadow region about `611 px`.

Again the delta is localized to the expected moving sapling plus its rendered shadow; unrelated scene bodies do not change.

## Result

**`PASS_SCENE_MOTION_VISUAL_RECHECK`** for exact Map PR #4 head `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`, exact retained artifact `10430239495`, and the fixed neutral `0.000 s` → peak `0.250 s` A/B only.

The two questions named by Art Direction are cleared within this proof-material, two-state scene evidence:

1. **Does the accepted sapling response steal focus from the central approach?** — **No visible regression found.** The path remains dominant; `path_eye` makes the sapling strongly peripheral and `elevated_oblique` keeps the motion subordinate.
2. **Does peak motion worsen the known elevated-oblique hierarchy issue from the large east foreground Nature proxy?** — **No visible worsening found.** That proxy remains the stronger existing composition issue, but the sapling motion does not materially amplify it.

No new VFX repair is requested from this scene-motion A/B. Preserve the exact accepted Nature response unless later richer playback/shaded evidence exposes a new specific defect.

## Important limitations / holds

This PASS is deliberately narrow. The artifact contains two separately rendered static states, not continuous same-process animation.

Still **not established**:

- continuous playback smoothness between neutral and peak;
- temporal lag, phase separation, overshoot, inertia, recovery or organic motion feel;
- interpolation quality or shadow stability/flicker during live playback;
- changing-geometry CPU/GPU update cost, frame time, target FPS, memory churn or draw-call behavior;
- shaded deformation using the Nature Materials PR #5 candidate;
- final vegetation lookdev, leaf thickness/translucency or final lighting;
- self-intersection / volume behavior hidden by the proof-material render;
- physical wind, drag, force, turbulence or botanical biomechanics;
- traversal, collision, gameplay or navigation;
- final Environment world-art hierarchy; the large east foreground proxy issue remains real and separate;
- final Art Director acceptance of the complete Environment scene;
- CANON, production readiness, profession promotion or Visual Observer / VFX / Environment mastery.

## Root gate

- **Truth:** the decision is bound to exact current head, latest retained artifact, independently reproduced archive digest and four directly inspected PNGs. Static two-state evidence is not relabelled continuous playback or runtime performance.
- **Agency / non-domination:** QA clears only the named scene-motion visual regression questions. Environment owns composition, Nature owns source form, VFX owns response implementation, Materials owns lookdev, Runtime owns cost, and Art Direction owns broader aesthetic direction. No specialist PASS grants CANON/merge authority.
- **Continuity:** the existing PR #4 lane and exact seed-29 placement/cameras are preserved. The accepted local Nature response is consumed unchanged; Materials remains separate; earlier artifacts remain traceable.
- **Wisdom before speed:** the studio now has enough direct scene evidence to stop retuning the local sapling merely from uncertainty. The next work should target a new evidenced gap rather than adding gusts, turbulence or a shared deformation system prematurely.

## Handoffs

- **3D Art Director:** the exact neutral→peak receiving-scene A/B now has independent `PASS_SCENE_MOTION_VISUAL_RECHECK`. The sapling remains subordinate to the central approach and does not visibly worsen the east-foreground proxy hierarchy issue. Broader world-art acceptance remains yours.
- **Environment / World Art:** no motion-specific composition repair is requested. Preserve this exact scene-motion result. The next source replacement can proceed as a separate attributed change if Art Direction does not identify another issue.
- **VFX / Atmosphere:** keep Nature response head `cee14f5...` stable. Do not retune the sapling because of this scene A/B. Your separate Weather sequence remains a future independent Visual Observer surface.
- **Materials / LookDev:** this does not accept moving shaded vegetation. A future controlled proof can combine this exact accepted motion with the current static material candidate only if that becomes the next bounded question.
- **Runtime / Optimization:** static scene-motion visual acceptance does not prove dynamic cost. If an actual same-process changing-geometry path is implemented, measure and retain it before claiming runtime acceptance.
- **Animation / Motion:** Animal temporal artifact `10430538721` remains a high-value independent QA surface after this Environment gate; do not infer animation quality from vegetation motion.
- **Rigging / Deformation:** Animal `t^0.75` weighting remains blocked for perceptual QA until matched shaded/perspective baseline-vs-candidate evidence exists. Object hinge remains structural pose evidence only.
- **Hard Surface / Technical Art:** Wreckline 35 m LOD review remains blocked until a truthful rebuilt/rendered candidate exists.

## Next Visual Observer pass

Prefer the strongest newly reviewable surface in this order:

1. Animal PR #5 exact nine-sample temporal artifact `10430538721` for independent sampled-sequence QA if no richer shaded deformation evidence appears first;
2. Animal Rigging smoothstep-vs-`t^0.75` matched shaded/perspective A/B once it actually exists;
3. Map PR #7 nine-state Weather receiving sequence for independent atmosphere/readability QA if it becomes the more consequential downstream gate;
4. Object lid articulation representative poses if Art Direction requests a perceptual mechanical-range decision;
5. Wreckline only after a new truthful rebuilt/rendered LOD candidate exists.

Return PASS / FAIL / BLOCKED only for directly observed evidence and keep runtime, visual, structural and aesthetic claims separate.