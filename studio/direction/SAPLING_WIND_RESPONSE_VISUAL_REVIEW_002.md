# Sapling Wind Response Visual Review 002

Date: 2026-09-16
Role: 3D Art Director
Scope: coordination-only visual direction

## Exact lane reviewed

Repository: `mike-axiom-mir/axm-nature-design`
PR: `#2 — VFX: prove first bounded sapling wind response`
Exact repaired head: `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`
Exact Nature source head: `fbc202449981f2bac153951c561ed0ed6120c936`
Exact Weather source head: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`
Retained artifact: `sapling-wind-response-001-evidence`, ID `10429159566`
Archive SHA-256: `59a6bb0c8f4f117e26e2880066debee740ee12120e730c21ef7a81feb4ae1f7c`
Profile: `HIERARCHICAL_TRUNK_BRANCH_LEAF_HALF_SINE_VISUAL_SWAY`
Samples: `0.000 / 0.125 / 0.250 / 0.375 / 0.500 s`
Peak displacement ceiling: `0.180 m`

This review supersedes only the local response-profile hold in `SAPLING_WIND_RESPONSE_VISUAL_REVIEW_001.md`. It does not supersede that packet's truth boundaries or the separate Wreckline LOD hold.

## Why this review was selected

The previous Art Director pass held the first sapling response because the upper trunk, branches and leaf fans read too much like one globally height-sheared body. VFX repaired exactly that defect in place, retained the old artifact as before-evidence, and Visual Observer independently returned `PASS_VISUAL_HIERARCHY_RECHECK` on the repaired exact artifact.

Other current high-value visual surfaces are less ready for a truthful Art Director decision:

- Wreckline Hard Surface still lacks an exact rebuilt/rendered LOD1 candidate because the historical provider closure is incomplete;
- Animal Rigging's `t^0.75` weighting candidate has stronger numeric deformation metrics but still lacks the requested matched shaded/perspective A/B evidence;
- Animal Animation has sampled wire evidence but no richer continuous/shaded motion acceptance surface;
- Environment has real eye-level/oblique evidence, but its moving-vegetation test was intentionally waiting on this local response decision.

Clearing or retaining this exact hold was therefore the smallest non-duplicative decision that unlocks the next real scene-level proof.

## Direct visual observation

The retained ZIP was downloaded and independently rehashed to the recorded archive digest. Its exact front, side and top five-panel SVG boards were rasterized and directly inspected.

Observed within those retained wire views:

- the lower trunk remains visually anchored;
- broad upper-trunk carry is materially quieter than in the held profile;
- branch and crown tips now show a visible attachment-to-tip progression rather than simply riding the same global height field;
- leaf fans remain attached to their support tips and add only a smaller local tip response;
- the top view makes the hierarchy especially clear: branch arms and crown endpoints separate progressively from their roots while the source silhouette remains recognizable;
- the side view shows a subtler change, consistent with the declared response direction rather than evidence of a contradictory second motion;
- no new obvious detached cluster, branch-root kink or silhouette break is visible in these retained projections;
- `0.000 s` and `0.500 s` return to the same neutral visual read, consistent with the retained byte-identical endpoint evidence.

The structural evidence reports the same maximum displacement ceiling and an increase in mean branch/crown support-root-to-tip displacement differential from about `0.04544 m` to `0.07529 m` (~`+65.7%`). That measurement supports but does not replace the visual judgment above.

## Art Direction decision

**`PASS_ART_DIRECTION_LOCAL_SWAY_HIERARCHY_001 / RELEASE_TO_SCENE_INTEGRATION`**

The specific `HOLD_ART_DIRECTION_SWAY_PROFILE_001` is cleared for this exact repaired local candidate.

Meaning of this PASS:

> The repaired local profile now has enough visible internal hierarchy between primary trunk response, branch/crown give and leaf-tip response to stop iterating the isolated wire-profile solely for the original global-shear defect.

This is not a declaration that the motion is final. It only says another local profile tweak is lower value than testing the same exact response inside the real receiving scene.

## Next bounded visual gate

Use the existing `mike-axiom-mir/axm-map-design#4` environment scene and preserve its exact seed-29 placement, cameras and source identities. Add a receiving-scene comparison of the exact sapling at:

- neutral `0.000 s`;
- peak `0.250 s`.

Prefer the existing `path_eye` and `elevated_oblique` cameras so the new evidence is directly comparable with the retained Environment proof.

For this first scene-level motion gate:

- do not retune placement to make the motion look better;
- do not change the `0.180 m` displacement ceiling;
- do not add gusts, turbulence, inertia, physical wind or a new response system;
- do not silently swap in the Materials PR #5 candidate at the same time; keep material/lighting changes separate so motion hierarchy remains attributable;
- preserve the Environment proof host's explicit renderer-only leaf/backface and Weather-presentation limitations;
- specifically inspect whether the moving real sapling steals attention from the readable central approach or worsens the already-observed oblique hierarchy issue caused by the large east foreground Nature proxy.

The east foreground proxy is a separate composition question. Do not move it merely to make this motion test pass.

## Non-claims

This decision does not establish:

- physical wind speed, force, drag, turbulence, stiffness or botanical biomechanics;
- production trunk/branch deformation, volume preservation or self-intersection freedom;
- continuous playback feel, lag, phase offset, overshoot, inertia or recovery quality;
- shaded bark/leaf deformation quality;
- final Nature materials, foliage density, species correctness or leaf thickness;
- final Environment composition, eye-level motion readability or world-art hierarchy;
- target-engine dynamic vegetation implementation or runtime cost;
- gameplay, collision or simulation authority;
- a reusable UC deformation system;
- CANON, production readiness or mastery of Nature, VFX, Animation, Rigging, Environment or Art Direction.

## Root gate

- **Truth:** the decision is bound to one exact repaired head/artifact and to direct retained-view observation; unobserved continuous/runtime/shaded behavior stays unclaimed.
- **Agency / non-domination:** Art Direction clears only the visual hierarchy hold. Nature retains source authority, VFX retains response implementation, Environment retains composition, Runtime retains cost certification, and no specialist PASS grants merge/CANON authority.
- **Continuity:** the original held artifact and direction packet remain preserved as before-evidence; the repair stays in the same VFX PR; no source history is rewritten.
- **Wisdom before speed:** stop tuning the isolated profile once the named defect is visibly repaired and spend the next evidence budget on the real receiving scene before adding complexity.

## Handoffs

- **VFX / Atmosphere:** preserve exact head/profile as the locally accepted candidate. Do not retune it unless scene evidence reveals a new specific defect.
- **Environment / World Art:** own the next neutral/peak receiving-scene comparison in the existing PR #4 context without changing placement for the sake of the test.
- **Visual Observer / QA:** after the scene comparison exists, judge scene-level silhouette/readability and whether the motion creates new overlap or hierarchy defects; do not re-open the already-cleared local global-shear defect without new evidence.
- **Materials / LookDev:** keep PR #5 separate from the first scene-motion comparison. A later controlled shaded-motion pass can combine them after the motion-only receiving gate is understood.
- **Runtime / Optimization:** current Map PR #5 is a static source-slice baseline only. Measure dynamic cost only after an actual target-host dynamic implementation exists.
- **Capability Cartographer / Technical Art:** record the failure→repair→independent-QA→Art-Direction acceptance sequence as evidence discipline only. One sapling does not justify a shared deformation engine.
