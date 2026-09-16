# Building Pavilion Receiving LookDev Review 002

Date: 2026-09-16
Status: **PASS_ART_DIRECTION_BUILDING_RECEIVING_SURFACE_HIERARCHY_002 / RELEASE_SCALAR_PBR_FOCAL-WEIGHT_HOLD / RETAIN_FRONT-PANEL_PRESENTATION_CAVEAT / HOLD_FINAL_BUILDING_LOOKDEV + VISUAL_QA + UV_TEXTURE + FINAL_LIGHTING**

## Scope

This packet adjudicates one exact visual-direction question left open by `BUILDING_PAVILION_WORLD_HIERARCHY_REVIEW_001.md`:

> Does the refined source-owned Building surface family survive the exact accepted Map receiving scene without making the service panel the path-end focal point, collapsing the pavilion's manufactured hierarchy, or requiring a receiver-only cheat?

Receiving lane:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#14 — Materials: transfer pavilion surface family into exact Map scene`;
- exact reviewed head: `0e2d571af4fd5772e9d48da013dc245914654660`;
- exact receiving base: Map Environment PR #11 head `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- exact Building source: Hard-Surface PR #2 head `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- exact refined Building Materials source: PR #3 head `b08f683f1c3f75c474fb347e1d1990c1c4426a33`;
- material profile SHA-256: `e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`;
- renderer: Godot `4.7.2` GL Compatibility;
- fixed cameras: `path_eye`, `elevated_oblique`.

`axm-create-me` remains coordination-only. This packet changes no product geometry, material implementation, Map composition, lighting, renderer, runtime path or source asset.

## Exact evidence reviewed

Current receiving artifact:

- ID `10435926829`;
- archive SHA-256 `065d542b2f33ac5d85031d407376580b93b10d3347ee1551b72400cbc12aae95`;
- exact head binding `0e2d571af4fd5772e9d48da013dc245914654660`.

Current standalone Building artifact:

- ID `10435825830`;
- archive SHA-256 `645acd5ef7311ca34f0b36fd3520dcf2b57dc6a7ac0530e400ea3e3525048c92`;
- exact Building Materials head `b08f683f1c3f75c474fb347e1d1990c1c4426a33`.

The receiving lane preserves Building geometry, transform, seed, cameras, path, Nature, Weather, Object proxies and lighting. Only Building scalar material response changes.

Current refined receiving candidate versus neutral control:

- `path_eye`: `65,965 / 792,000 = 8.3289%` changed pixels;
- `elevated_oblique`: `32,304 / 792,000 = 4.0788%` changed pixels.

The materially important comparison is the earlier bright service-panel candidate against the current refined candidate, because that isolates the source-owned Art Direction repair:

- `path_eye`: `4,162 / 792,000 = 0.5255%` changed pixels;
- `elevated_oblique`: `1,371 / 792,000 = 0.1731%` changed pixels;
- on those changed pixels, mean encoded-RGB luma falls about `16.18%` / `15.66%`;
- mean saturation falls about `31.38%` / `30.15%`.

Those measurements establish localization and magnitude only. The decision below is based on direct review of the retained old/refined Map contact sheet and the refined standalone Building views.

## Source-owned repair reviewed

The first receiving candidate used the brighter `utility_panel_ochre` values:

- albedo `#9B7338FF`;
- metallic `0.28`;
- roughness `0.50`.

In the real Map context that panel became the strongest saturated path-end accent and amplified the existing triangular dark/light presentation on the front service surface.

Materials correctly repaired the source-owned surface rather than adding a Map-only override:

- albedo `#6F5A3AFF`;
- metallic `0.18`;
- roughness `0.62`.

All other five-surface roles, component mapping, geometry and receiver identities remain unchanged.

## Direct Art Director observations

### `path_eye`

The refined panel is visibly quieter than the old candidate while remaining legible as a service surface. The pavilion no longer competes with the approach primarily through one saturated yellow/orange rectangle.

The hierarchy now reads in a more useful order:

1. overall pavilion silhouette and open-bay frame;
2. cool structural frame against the dark enclosure/roof;
3. central approach and doorway/bay negative space;
4. service panel as a local functional accent rather than the scene's color destination.

The nearby orange Object proxies are now at least as assertive as the service accent, which is appropriate for this proof scene: the Building no longer steals scene focus through color alone.

The existing triangular dark/light pattern across the front panel remains visible. The refinement makes it less attention-seeking, but does **not** eliminate it. That caveat remains a presentation/lighting question, not evidence for a Building geometry rewrite.

### `elevated_oblique`

The refined service accent stays readable while the pavilion continues to separate clearly from the green Nature blocks and orange Object proxies. Frame, dark enclosure/roof and service surface remain distinguishable under the same shared scene light.

The east-facing panel remains naturally darker than the front panel. That asymmetry is acceptable and useful because it comes from one shared lighting setup rather than per-view material or lighting manipulation.

The current Materials lane is a sibling of rear-tree Environment PR #15, so the large rear/right Nature proxy remains visible here. This packet does not judge or modify that separate world-art lane.

### Standalone Building contexts

The refined standalone front/east/three-quarter renders confirm that the quieter service color did not erase the panel role at source level. The cooler frame, dark enclosure/roof and service surfaces retain distinct visual jobs across materially different views.

The east panel becoming substantially darker under the same fixed key is consistent with the receiving result and is not a reason to force equal brightness.

## Art Direction decision

**`PASS_ART_DIRECTION_BUILDING_RECEIVING_SURFACE_HIERARCHY_002 / RELEASE_SCALAR_PBR_FOCAL-WEIGHT_HOLD`**

Meaning of the PASS:

> On exact Map PR #14 head `0e2d571af4fd5772e9d48da013dc245914654660`, using exact Building Materials PR #3 head `b08f683f1c3f75c474fb347e1d1990c1c4426a33`, the refined source-owned scalar-PBR family preserves the pavilion's manufactured hierarchy in both fixed receiving cameras while reducing the service panel from a dominant path-end color accent to a subordinate functional accent. No receiver-only material, camera or lighting cheat is required.

The specific Art Direction hold on **service-panel focal weight in the receiving scene** is released for this proof representation.

No further scalar-value retune is requested from Art Direction before independent Visual QA or a materially richer representation exposes a new concrete defect. Repeated micro-tuning now would be churn rather than evidence-led improvement.

## Caveat deliberately retained

**`RETAIN_FRONT_PANEL_TRIANGULAR_PRESENTATION_CAVEAT`**

The front service surface still shows a strong triangular light/dark read in the Map proof. Current evidence does not establish whether the final cause is proof-host lighting, sparse proof geometry/material interaction, face orientation/shadowing, or some combination.

Direction:

- do not reshape Building source geometry merely to erase the screenshot pattern;
- do not add a receiver-only patch or per-camera lighting cheat;
- let independent Visual QA reproduce/classify it on the exact refined head;
- if it persists into a richer normal/UV/texture/final-lighting representation, isolate that representation before changing source form.

This caveat prevents `PASS_FINAL_BUILDING_LOOKDEV`.

## Cross-lane isolation

This decision intentionally does **not** consume Map Environment PR #15, Nature Geometry's reindex candidate, VFX PR #16, or Runtime PR #17. Each owns a different variable.

In particular, rear-tree hierarchy currently passes only in a culling-disabled receiving host, while Visual QA has reproduced a baseline backface-culling defect and blocks normal-culling adoption until an isolated Map reindex-candidate A/B exists. Building lookdev should not be rebased through that unresolved renderer-integrity gate just to make one combined screenshot.

## Next Art Direction priority

The strongest unresolved scene-level question is now the rear/right Nature normal-culling receiving path, **but only after Environment/Technical Art produces the isolated Map A/B requested by Visual QA**. Art Direction should not judge a derived topology candidate from isolated Nature renders as if it were already adopted in the Map scene.

If that receiving A/B is not ready, the next independent direct-review surfaces remain:

- Animal PR #5 exact sampled playback for cadence, weight, silhouette and paw/limb read;
- Character PR #2 exact baseline versus derived shoulder-transition candidate for proportion/mass hierarchy;
- Object Materials PR #6 / Object Animation PR #10 only if no higher-level receiving evidence is ready.

## Non-claims

This decision does **not** establish:

- independent Visual Observer / QA acceptance of the refined Building receiving look;
- elimination of the triangular front-panel pattern;
- final scene lighting or cinematography;
- UV quality, textures, decals, grime, wear or weathering;
- physically measured material correctness;
- final imported normals/tangents/topology behavior;
- renderer equivalence beyond Godot `4.7.2` GL Compatibility proof evidence;
- target-device FPS, GPU time, memory, draw-call or shader budgets;
- architecture/engineering/weather sealing/manufacturing correctness;
- collision, navigation, traversal or gameplay;
- adoption of rear-tree topology migration;
- final world art;
- CANON, production readiness, game readiness or mastery of Art Direction, Materials, Building, Environment or any other domain.

## Four-root gate

- **Truth:** the earlier over-strong service accent is retained as before-evidence; the refined PASS is bound to exact source/receiving heads, exact artifact digests, fixed cameras and directly inspected old/refined renders. Pixel statistics support localization but are not substituted for visual judgment.
- **Agency / non-domination:** Building keeps source geometry ownership; Materials keeps surface implementation; Map/Environment keeps composition; Visual QA owns independent reproduction; Runtime owns cost. Art Direction makes only the bounded visual hierarchy decision. The four roots remain the merge gate.
- **Continuity:** the accepted pavilion geometry, receiving scene, cameras and source identities remain intact. The repair occurred at the source-owned material profile instead of hiding the defect in Map, and the previous Art Director packet remains historical evidence.
- **Wisdom before speed:** stop scalar-PBR micro-tuning once the evidenced focal-weight defect is resolved; preserve the remaining presentation caveat and wait for the next evidence-owning lane rather than bundling topology, lighting, texture and world-art changes together.

## Handoffs

- **Materials / LookDev:** keep refined Building PR #3 values stable for this proof representation. No further scalar retune is requested unless independent QA or a materially richer representation exposes a new localized defect.
- **Map Materials PR #14:** preserve the exact isolated receiving A/B. This Art Direction PASS is bounded to its current head and does not authorize combining rear-tree, VFX or Runtime changes into the same visual proof.
- **Visual Observer / QA:** independently review exact refined Map PR #14. Focus on the retained triangular panel presentation caveat, frame/infill separation, and whether the service accent truly remains subordinate without relying on this Art Director verdict.
- **Building / Hard Surface:** no geometry repair requested from current receiving lookdev evidence.
- **Environment / Technical Art / Geometry / Nature:** continue the rear-tree normal-culling isolated receiving gate separately. Do not infer topology adoption from this Building PASS.
- **Runtime / Optimization:** no performance acceptance transfers from visual approval; current Map Runtime proofs remain exact to their own scene ancestry.
