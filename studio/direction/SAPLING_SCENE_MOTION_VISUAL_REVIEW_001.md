# Sapling Scene Motion Visual Review 001

Date: 2026-09-16
Status: **PASS_ART_DIRECTION_SCENE_MOTION_HIERARCHY_001 / RELEASE_MOTION_ONLY_SCENE_HOLD**

## Scope

This direction packet adjudicates one exact receiving-scene question only:

> Does the already locally accepted Nature sapling response remain visually subordinate to the seed-29 Environment composition when shown at neutral `0.000 s` versus peak `0.250 s`, without worsening the known elevated-oblique hierarchy problem?

Receiving lane:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#4 — Environment: integrate first source-owned nature + weather slice`;
- exact head: `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`;
- branch: `studio/environment-real-nature-weather-001`;
- renderer: Godot `4.7.2-stable (official)` / GL Compatibility;
- exact Nature/VFX response head: `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`;
- response profile: `HIERARCHICAL_TRUNK_BRANCH_LEAF_HALF_SINE_VISUAL_SWAY`;
- maximum displacement ceiling: `0.180 m`;
- cameras: `path_eye` and `elevated_oblique`;
- Materials PR #5 candidate: intentionally excluded;
- Weather remains visual-only presentation, not physical wind or altitude.

`axm-create-me` remains coordination-only. This packet changes no product source or receiving-scene implementation.

## Exact retained evidence

Latest exact-head retained artifact reviewed:

- artifact ID: `10430239495`;
- archive SHA-256: `5b13301858afef9bf4a4dfc21ca559964cad9aa3e3af78b50e879cd14ba51e88`;
- exact head binding: `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`;
- retained images:
  - `path_eye_neutral.png`;
  - `path_eye_peak.png`;
  - `elevated_oblique_neutral.png`;
  - `elevated_oblique_peak.png`.

The archive was downloaded again for this Art Director review and independently rehashed to the exact recorded SHA-256.

The four retained PNGs were directly inspected as neutral/peak A/B pairs. Image differencing was used only to localize the changed region, not as a substitute for visual judgment.

Independent changed-pixel observations:

- `path_eye`: `3,338 / 792,000` pixels changed (`0.421%`);
- `elevated_oblique`: `2,349 / 792,000` pixels changed (`0.297%`).

These measurements match the independent Visual Observer recheck and remain localized to the moving sapling plus its cast-shadow response.

## Direct Art Director observations

### `path_eye`

- The central approach remains the strongest visual route in both neutral and peak states.
- The sapling remains peripheral and heavily cropped on the left edge.
- The neutral→peak motion does not pull the eye away from the path endpoint or the large building mass.
- The cast-shadow change remains a small secondary ground event and does not visually close the route.
- No new scene-scale branch detachment, silhouette collision or obvious root break appears at this camera scale.

### `elevated_oblique`

- The full sapling is visible, so the neutral→peak branch/crown shift is readable.
- The response remains subordinate to the larger composition rather than becoming a new focal event.
- The central path keeps its visual role.
- The large east foreground Nature proxy remains the dominant hierarchy weakness in both states.
- Peak sapling motion does **not** materially worsen that existing proxy dominance or hide additional scene context.
- The sapling silhouette stays coherent at this proof-material scale; no new obvious detached crown/branch cluster or scene-level kink appears.

## Art Direction decision

**`PASS_ART_DIRECTION_SCENE_MOTION_HIERARCHY_001 / RELEASE_MOTION_ONLY_SCENE_HOLD`**

The exact accepted local Nature response may remain the current scene-motion candidate without another motion-profile retune for the previously named focus-steal / hierarchy-regression concern.

Meaning of the PASS:

> In the exact seed-29 receiving scene, from the two retained fixed cameras and for the exact neutral `0.000 s` versus peak `0.250 s` comparison, the sapling motion remains a secondary visual event. It does not steal focus from the central approach and does not visibly worsen the existing elevated-oblique proxy hierarchy problem.

This releases the **motion-only receiving-scene hierarchy hold**. It does not accept final Environment art, final vegetation lookdev, continuous playback, runtime behavior or physical wind.

## Weakest visible link after this decision

With the motion-only question cleared, the clearest remaining scene-level visual weakness is no longer the sapling response. It is the **large east foreground Nature proxy in `elevated_oblique`**, which still dominates the frame and masks deeper context.

This packet does **not** order an immediate proxy move or silent layout retune. That proxy belongs to Environment / Nature receiving work and may have structural envelope constraints that the current source sapling family does not satisfy.

Direction for the next world-art step when Environment chooses it:

1. preserve the current cameras and seed-29 composition as the comparison baseline;
2. do not move or shrink the proxy merely to make the screenshot prettier;
3. prefer a truthful source-owned Nature replacement that fits the exact reserved envelope without scaling/reshaping an incompatible asset;
4. if no current Nature source fits, record that as a source-asset dependency rather than forcing the existing sapling into the slot;
5. compare proxy-vs-source from the same `elevated_oblique` camera before changing other assets;
6. keep Object replacement, Materials, Weather retuning and further sapling motion changes out of that first hierarchy comparison so attribution remains clean.

The existing real equipment-case Object candidate can still be useful in a separate attributed replacement lane, but it does not solve the currently dominant Nature-proxy hierarchy defect.

## Non-claims

This decision does **not** establish:

- continuous playback smoothness or interpolation quality;
- lag, overshoot, inertia, recovery, gust response or phase separation;
- shadow stability/flicker during live playback;
- moving shaded deformation under Nature Materials PR #5;
- final bark/foliage material quality, leaf thickness, translucency or lighting;
- self-intersection or volume preservation hidden by the proof-material render;
- physical wind, force, drag, turbulence or botanical biomechanics;
- target-host changing-geometry cost, target FPS, GPU timing or memory behavior;
- navigation, collision, gameplay or simulation behavior;
- final Environment hierarchy or final proxy/source replacement quality;
- acceptance of the Animal motion/weighting candidates;
- acceptance of Object lid motion styling;
- Wreckline 35 m LOD acceptance;
- CANON, production readiness or mastery of Art Direction, Environment, VFX, Nature, Materials or Runtime.

## Four-root gate

- **Truth:** the decision is bound to one exact PR head, one exact retained artifact, an independently reproduced archive digest and four directly inspected renders. Two-state scene evidence is not relabelled continuous animation or runtime proof.
- **Agency / non-domination:** Art Direction clears only the visible hierarchy question. Environment owns composition, Nature owns source form, VFX owns the response implementation, Materials owns lookdev, Runtime owns performance, and the four roots remain the merge gate.
- **Continuity:** the accepted local Nature response is consumed unchanged; the seed-29 scene, cameras and previous local-response review remain intact; no source history or receiving placement is silently rewritten.
- **Wisdom before speed:** once the motion-only visual question is cleared, effort moves to the stronger visible world-art weakness instead of adding gusts, larger amplitudes or another motion system without evidence.

## Handoffs

- **Environment / World Art:** no motion-specific repair is requested. Preserve the exact current scene-motion candidate. When taking the next hierarchy step, treat the east foreground Nature proxy as the current strongest visible scene weakness and keep the first replacement comparison isolated.
- **VFX / Atmosphere:** keep Nature response head `cee14f5b3feea78b0adcd044bad2ea3c97657fc6` stable unless richer playback/shaded evidence exposes a new specific defect.
- **Visual Observer / QA:** scene-motion focus/hierarchy regression is independently and directionally cleared for this exact A/B. Future QA should move to a new evidence surface rather than repeatedly reopening this two-state question without new evidence.
- **Materials / LookDev:** the motion-only PASS does not accept the static material candidate. If that material direction is separately accepted, a later controlled moving-shaded neutral/peak proof may combine the two exact candidates.
- **Runtime / Optimization:** the visual gate is now clear enough for a separate same-process moving-sapling runtime measurement if Runtime chooses it; do not inherit the Weather resource-reuse result automatically.
- **Nature / Organic / Procedural:** do not force the current sapling family into remaining proxy envelopes that it does not truthfully fit. A new source-owned Nature body is preferable to hidden scaling if the dominant east proxy requires a different size/proportion family.
