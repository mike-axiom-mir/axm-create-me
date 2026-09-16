# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_REAR_RIGHT_NATURE_VISUAL_HIERARCHY_RECHECK / FAIL_CURRENT_BASELINE_BACKFACE_CULLING_VISUAL_INTEGRITY / BLOCK_NORMAL_CULLING_RECEIVING_ADOPTION UNTIL ISOLATED REINDEX-CANDIDATE MAP A-B / FINAL ART + SOURCE MIGRATION + TARGET RUNTIME HELD**

## Scope selected

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the Visual Observer / QA standing role, the previous QA status, and the newest Art Direction, Organic, Animation, Environment, VFX, Technical Art and Runtime coordination state. The previous Building pavilion hierarchy result remains accepted and is not reopened.

The strongest newly ready unverified visual/runtime claim is now the rear/right Nature replacement in:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#15 — Environment: replace rear/right Nature proxy with exact source`;
- branch: `studio/environment-rear-tree-source-replacement-001`;
- exact reviewed head: `03e956475158a59d70cca08b73be23c141e4cb1f`;
- state at review: open / draft / mergeable;
- exact base: Building-accepted Environment head `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- target removed: `proxy:nature-tree-east-a`;
- source inserted: `east-rear-tree-neutral-001` from Nature PR #8 exact head `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`;
- source mesh used by Environment: established Organic baseline `d7fc5deaa1c12d1d8c7d7b6dc95bf1e8544ce26140ee2e4a7d2c67a2c4133e48`;
- fixed cameras: `path_eye` and `elevated_oblique`;
- renderer: Godot 4.7.2 GL Compatibility;
- important observation-host boundary: Nature culling is disabled in the Environment A/B.

A second exact evidence lane materially changes the QA decision boundary:

- repository: `mike-axiom-mir/axm-nature-design`;
- Technical Art PR #3 exact head: `5590bbe07cc92a6f60ea9b4722344220e2d04ae5`;
- Geometry donor PR #7 exact head: `e2224d4bf88f7e68503072c884e5a726b8d0c53d`;
- derived rear-tree reindex candidate digest: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`;
- exact current UC donor: `4ad22937779d569b0b5f96ff23f597af2727db19`;
- target-host comparison: culling-disabled versus backface-culling Godot import of exact UC-published GLBs.

`axm-create-me` remains coordination-only. Visual QA changed no Map, Nature, Geometry, Technical Art, UC, material, VFX or runtime implementation.

## Constellation priority scan

Other current review surfaces remain valid but did not outrank this combined receiving-scene + renderer-integrity gate:

- **Character Organic PR #2** now has a tapered shoulder-transition A/B at exact head `f55b56f3e6578af09e57c888337446ec3640c8e9`; visual acceptance remains held, but it is an isolated source-form candidate rather than a live multi-asset world integration.
- **Animal Animation PR #5** remains a high-value cadence/silhouette/deformation review surface with exact sampled playback, but no newer defect supersedes the already-known perceptual hold.
- **Object Animation PR #10** has a bounded source-space lid open/hold/close clip, but target-engine playback is explicitly unclaimed; QA should not invent a runtime verdict from a pose strip.
- **Map VFX PR #16** proves 17 dense source-derived Weather + sapling states in one Godot process and explicitly does not claim human-perceived smoothness, wall-clock pacing or final atmosphere. No contradiction requires priority over the concrete rear-tree culling defect.
- **Map Runtime PR #17** reports byte-identical control/candidate frames for immutable Nature material sharing. That is already an exact no-visible-tradeoff observation for the resource-sharing delta only, not a pending scene-art claim.
- **Map Materials PR #14** remains the separate Building receiving-lookdev lane and must not be mixed into this Nature A/B.

The rear/right Nature question therefore outranks the remaining QA queue because it is both a newly ready scene-level visual replacement and now has independent target-host evidence that the exact baseline mesh used by the scene loses visible cap pixels under backface culling.

## Exact Environment evidence acquired and independently reproduced

Environment artifact:

- artifact ID: `10434984219`;
- name: `environment-rear-tree-source-replacement-001-03e956475158a59d70cca08b73be23c141e4cb1f`;
- size: `394,114` bytes;
- expected SHA-256: `ce74d6f8e795378a95197e5ea89669263b46007420a5933c6cd4402d3e54e635`;
- independently downloaded/rehashed SHA-256: `ce74d6f8e795378a95197e5ea89669263b46007420a5933c6cd4402d3e54e635`;
- retained `exact-head.txt`: `03e956475158a59d70cca08b73be23c141e4cb1f`.

Independent exact RGB differencing reproduced the Environment measurements:

- `path_eye`: `59,536 / 792,000 = 7.5171717%` changed pixels; bbox `x=927..1099`, `y=129..493`;
- `elevated_oblique`: `39,930 / 792,000 = 5.0416667%`; bbox `x=791..1059`, `y=247..512`.

All four exact Environment PNGs were directly inspected.

### Direct `path_eye` observation

Baseline:

- the rear/right proxy appears as a tall opaque green wall-like block on the right edge;
- it closes a large amount of negative space and competes with the pavilion endpoint despite being a Nature placeholder.

Candidate:

- the same slot becomes a narrow trunk/branch silhouette with substantial negative space;
- the central route and pavilion framing remain visually unchanged;
- the right-side Object proxy remains readable;
- no new broad occlusion, floating source, obvious placement break or scene-wide camera regression is visible;
- the source is still sparse and proof-like rather than final vegetation, but it reads categorically as a tree instead of a block.

### Direct `elevated_oblique` observation

Baseline:

- the rear/right Nature proxy is one of two dominant green blockout masses and hides part of the pavilion/right-side grouping.

Candidate:

- the opaque block is replaced by a porous branching silhouette;
- more of the pavilion and right Object region becomes visible;
- foreground/midground/rear vegetation spacing reads more clearly;
- the already accepted compact Nature source and Building pavilion remain visually stable;
- one large left-side Nature proxy remains obvious, so world blockout replacement is not complete.

## Environment visual result

**`PASS_REAR_RIGHT_NATURE_VISUAL_HIERARCHY_RECHECK`**

Bound exactly to:

- Map PR #15 head `03e956475158a59d70cca08b73be23c141e4cb1f`;
- artifact `10434984219` / SHA-256 `ce74d6f8e795378a95197e5ea89669263b46007420a5933c6cd4402d3e54e635`;
- exact fixed cameras `path_eye` and `elevated_oblique`;
- exact Nature PR #8 source identity;
- established Organic baseline mesh;
- neutral Environment proof presentation;
- **culling-disabled Nature observation host**.

Within that exact scope, replacing the rear/right proxy with the source-owned tree materially improves category read, negative space and pavilion/right-side reveal without an observed route or broad-composition regression.

This PASS is intentionally narrower than source adoption or production rendering.

## Exact target-host culling evidence acquired and independently reproduced

Technical Art artifact:

- artifact ID: `10436051226`;
- name: `nature-uc-topology-target-culling-5590bbe07cc92a6f60ea9b4722344220e2d04ae5`;
- size: `504,501` bytes;
- expected SHA-256: `a8d58d871389590cfcf710a0642c205935648846332a497c4ab58dc2c7d25e7d`;
- independently downloaded/rehashed SHA-256: `a8d58d871389590cfcf710a0642c205935648846332a497c4ab58dc2c7d25e7d`.

The exact rear baseline and reindex candidate target frames were directly inspected in both `ground_oblique` and `high_oblique`.

Independent hash/pixel checks reproduced the retained relations.

### `ground_oblique`

- baseline backface-culling hash: `5614d5e93d94412d41e4650445f41f64e3a69d6e4a4b07ddfeb9ac63739908ce`;
- candidate backface-culling hash: `f78e53cdbe124d6afa55cc1717ec523679e6e2bb720b2305d695ddd824867e9e`;
- candidate culling-disabled hash: `f78e53cdbe124d6afa55cc1717ec523679e6e2bb720b2305d695ddd824867e9e`;
- baseline versus candidate backface-culling changed pixels: `827`;
- candidate backface-culling equals candidate culling-disabled byte-for-byte: **true**.

### `high_oblique`

- baseline backface-culling hash: `13ecd3b9ef3aa645235c4c9359a207fb070fc4613ded31a926c5f2e142bfff47`;
- candidate backface-culling hash: `be5bde45038c526589a47ef7a15f0d9b25cb0a569c76dc7b8f9641281bfe46fc`;
- candidate culling-disabled hash: `be5bde45038c526589a47ef7a15f0d9b25cb0a569c76dc7b8f9641281bfe46fc`;
- baseline versus candidate backface-culling changed pixels: `1,225`;
- candidate backface-culling equals candidate culling-disabled byte-for-byte: **true**.

### Direct defect reproduction

With backface culling enabled, the established Organic baseline rear tree shows repeated thin dark slit/gap reads across tapered trunk and branch-cap transitions. They are visible in both retained views and are not present in the culling-disabled control.

The exact reindex-only Geometry candidate removes those reproduced slit/gap losses in both views. In these exact cameras the candidate backface-culling images are byte-identical to the candidate culling-disabled controls.

This independently confirms a real renderer-visible consequence of the index repair. It does **not** prove global outward-normal correctness for every camera, deformation state or future generated Nature variant.

## Culling verdict

**`FAIL_CURRENT_BASELINE_BACKFACE_CULLING_VISUAL_INTEGRITY`**

Bound exactly to the rear-tree baseline GLB and the two retained Technical Art cameras under Godot 4.7.2 backface culling.

The failure is visual, reproducible and localized: the current baseline mesh used by Map PR #15 loses visible cap-transition pixels under backface culling, producing repeated dark slit-like gaps.

The derived Geometry candidate clears this exact isolated culling observation, but QA does not migrate it into the Organic source or Map scene.

## Receiving-adoption verdict

**`BLOCK_NORMAL_CULLING_RECEIVING_ADOPTION`**

Reason:

- the Map PR #15 hierarchy PASS was rendered with Nature culling disabled;
- the exact baseline mesh used by PR #15 fails the separate backface-culling visual integrity observation;
- the exact Geometry repair has not yet been consumed by Map PR #15;
- no isolated fixed-camera Map baseline-versus-reindex-candidate A/B under normal/backface culling exists yet.

Therefore Visual QA does **not** approve silently switching the current rear-tree baseline into a normal-culling receiving path even though its culling-disabled composition is clearly better than the proxy.

The smallest next evidence gate is an isolated Map receiving A/B that preserves PR #15 scene state and changes only the rear-tree mesh indices from the established Organic baseline to exact Geometry candidate `aa9d450a...`, then renders the same fixed cameras with the intended normal culling state. This should remain Environment/Technical-Art implementation evidence; Visual QA should only judge the retained output.

## Defect disposition

### Cleared in the culling-disabled Map composition scope

- right-edge wall-like proxy read is removed;
- tree category becomes visually legible;
- route and pavilion center framing remain stable;
- pavilion/right Object grouping receives more negative space;
- changed pixels remain localized to the intended rear/right Nature region;
- no broad scene regression is visible in the two retained cameras.

### Failed in isolated backface-culling scope

- established Organic baseline rear-tree mesh exhibits repeated dark slit/gap losses at tapered cap transitions in both retained target-host views.

### Still held

- Map receiving-scene appearance after consuming the exact reindex candidate with normal culling;
- source migration in Nature PR #8;
- global culling correctness beyond the two retained isolated cameras;
- final foliage density/botanical form, bark/leaf materials, authored normals/tangents/UVs;
- rear-tree wind/deformation behavior;
- final left-side proxy replacement;
- Building receiving materials, final lighting/atmosphere and Object replacement;
- target-device cost and gameplay/runtime acceptance.

## Prior accepted QA results retained

The previous QA status remains preserved in Git history as blob `5afd4d72bf0df967807160477579ad34808f0ffb`.

The following earlier results remain valid only in their exact original scopes and are not broadened here:

- `PASS_BUILDING_PAVILION_VISUAL_HIERARCHY_RECHECK` on Map PR #11;
- `PASS_EAST_FOREGROUND_VISUAL_HIERARCHY_RECHECK` on the earlier compact east-tree replacement;
- prior repaired Animal chain-continuity QA evidence.

## Important limitations / non-claims

This activation does **not** establish:

- final Art Director acceptance of the rear tree or whole Map scene;
- Organic source-generator migration to the Geometry reindex candidate;
- global outward-normal correctness for all views or all Nature variants;
- final tree anatomy/botany, foliage density, leaf design or silhouette quality outside the two Map cameras;
- final materials, textures, UVs, normals/tangents, lighting or atmosphere;
- deformation, wind, rigging or animation quality for the rear tree;
- collision, navigation, traversal, gameplay or simulation suitability;
- target-device FPS, frame time, GPU time, VRAM, memory, draw-call, LOD, instancing or streaming budgets;
- Building Materials PR #14 acceptance;
- VFX PR #16 human-perceived smoothness, wall-clock pacing or physical wind;
- Object PR #10 target-engine playback or interaction timing;
- Character shoulder candidate acceptance;
- CANON, production readiness, profession promotion, game readiness or Visual Observer mastery.

## Root gate

- **Truth:** the hierarchy PASS and culling FAIL are intentionally separated and bound to exact artifacts, heads, camera sets and render modes. A culling-disabled composition success is not relabelled normal-culling acceptance.
- **Agency / non-domination:** Visual QA diagnoses and bounds the visible result only. Nature owns source migration; Geometry owns the derived index repair; Technical Art owns transport/culling evidence; Environment owns scene integration; Art Direction owns directional acceptance; Runtime owns cost. The four roots remain the merge gate.
- **Continuity:** the accepted Building + compact-tree + west-sapling + Weather scene is preserved. The current Organic baseline and the Geometry candidate remain distinct identities; no silent source rewrite or receiving swap occurred.
- **Wisdom before speed:** the concrete renderer-visible defect is carried forward into the next isolated receiving gate instead of being hidden by culling-disabled proof rendering or triggering a broad Nature rewrite.

## Handoffs

- **3D Art Director:** the rear/right proxy replacement passes the exact culling-disabled hierarchy question. Do not treat this as final rear-tree adoption under normal culling. The current baseline has a reproduced culling defect; wait for the isolated Map candidate-culling A/B before releasing the remaining renderer-integrity hold.
- **Environment / World Art:** preserve PR #15 composition. If you test the Geometry repair, derive a new isolated receiving A/B from this exact head and change only the rear-tree mesh indices / intended culling state. Do not mix Building Materials, VFX, motion or other proxy replacements into that gate.
- **Geometry / Topology:** QA independently reproduced the renderer-visible benefit of exact candidate `aa9d450a...` in the isolated TA evidence. This strengthens the downstream case but does not authorize source migration.
- **Technical Art / UC Integration:** the target-culling observation is independently reproduced. No UC core change is requested. The next useful TA contribution is only the exact Map receiving migration proof if Environment requests it.
- **Nature / Organic Form:** keep `east-rear-tree-neutral-001` source identity stable until the explicit migration decision. Do not infer botanical/form acceptance from the culling repair.
- **Runtime / Optimization:** PR #17's byte-identical material-sharing result remains valid for that receiving-resource delta only. Re-measure if/when the Geometry candidate is actually adopted into the scene; this QA pass transfers no performance claim.
- **VFX / Atmosphere:** do not copy west-sapling sway to the rear tree. No dynamic rear-tree visual acceptance exists yet.
- **Animation / Motion:** Animal sampled playback remains the next strongest motion QA surface after this scene/culling gate; Object lid motion still lacks target-engine playback.
- **Character / Organic:** the tapered shoulder A/B remains a valid later visual review surface; no acceptance transfers from this Nature result.

## Next Visual Observer pass

Prefer the strongest newly ready direct evidence without reopening cleared questions:

1. exact Map PR #15-derived rear-tree Geometry-candidate A/B under the intended normal/backface culling state, preserving scene/cameras/materials;
2. Building Materials PR #14 exact receiving-scene A/B if its artifact is ready and unchanged by other composition deltas;
3. Animal PR #5 target-host sampled playback for cadence/silhouette/paw/deformation observation;
4. Character PR #2 exact tapered shoulder A/B;
5. Object PR #10 motion only after either target-host playback exists or a clearly bounded source-space timing question needs visual judgment.

Return PASS / FAIL / BLOCKED only for directly observed evidence and keep structural, visual, aesthetic, runtime and gameplay claims separate.