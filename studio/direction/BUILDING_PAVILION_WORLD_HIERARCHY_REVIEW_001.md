# Building Pavilion World Hierarchy Review 001

Date: 2026-09-16
Status: **PASS_ART_DIRECTION_BUILDING_PAVILION_HIERARCHY_001 / RELEASE_BUILDING_PROXY_BLOCKOUT_HOLD / HOLD_FINAL_WORLD_ART / REQUIRE_RECEIVING_SCENE_LOOKDEV_TRANSFER**

## Scope

This packet adjudicates one exact visual-direction question:

> In the already accepted seed-29 Environment scene, does replacing only the Map building proxy with the exact source-owned Building pavilion improve the endpoint hierarchy and manufactured read without damaging the central approach or broader scene composition?

Receiving lane:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#11 — Environment: replace Map pavilion proxy with exact Building source`;
- exact reviewed head: `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- exact Building source head: `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- source: `service-pavilion-001` + exact `utility-access-panel-001` placements;
- renderer: Godot `4.7.2` GL Compatibility;
- retained seed: `29`;
- fixed cameras: `path_eye`, `elevated_oblique`;
- Building Materials PR #3: intentionally excluded from this proxy/source hierarchy decision.

`axm-create-me` remains coordination-only. No product geometry, scene, material, renderer or runtime implementation is changed by this packet.

## Exact evidence reviewed

Environment artifact:

- artifact ID: `10433692869`;
- archive SHA-256: `013daf43979e01ed0987cc9f34ee2fe1ce11db0ac93aa006b91391ac76ad4eb9`;
- exact Map head binding: `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`.

The archive was downloaded during this Art Director pass and independently rehashed to the exact recorded digest. All four retained baseline/candidate PNGs were directly inspected.

Independent image localization reproduced:

- `path_eye`: `80,718 / 792,000` changed pixels = `10.1917%`, bbox `x=332..767`, `y=243..438`;
- `elevated_oblique`: `39,273 / 792,000` = `4.9587%`, bbox `x=585..901`, `y=163..349`.

These numbers establish localization only; the decision below is based on the rendered hierarchy.

## Direct Art Director observations

### `path_eye`

The baseline endpoint is a broad, flat blue-grey block. It has almost no internal hierarchy and reads as temporary mass rather than a building.

The exact source pavilion materially improves that read:

- the outer frame creates a clear manufactured silhouette;
- open bays and visible depth break the endpoint into readable structure rather than one slab;
- the path still terminates cleanly at the Building slot and remains visually open;
- the pavilion remains an endpoint landmark without becoming a wider or more opaque barrier;
- the surrounding Object, Nature and Weather context remains visually stable outside the localized Building region.

### `elevated_oblique`

The baseline building contributes another large proof-box mass to an already blockout-heavy composition. The source pavilion instead reads as a porous manufactured structure with frame/bay rhythm and depth.

The replacement improves category separation from the remaining green Nature proxy boxes and orange Object proxies, and it preserves the previously accepted east-tree improvement. No new scene-scale occlusion or competing foreground wall is introduced in this fixed view.

The separate rear/right green Nature proxy remains the strongest obvious blockout mass in the scene. This Building decision does not clear that independent issue.

## Localized caveat retained

The front service-panel area in the neutral Environment proof shows a strong triangular dark/light pattern. Direct comparison with the standalone Building evidence confirms the panel source is still a complete rectangle, so this is treated as a receiving-lighting / proof-material presentation issue rather than a missing-geometry defect.

Do not rewrite Building geometry merely to remove this proof appearance.

## Art Direction decision

**`PASS_ART_DIRECTION_BUILDING_PAVILION_HIERARCHY_001 / RELEASE_BUILDING_PROXY_BLOCKOUT_HOLD / HOLD_FINAL_WORLD_ART`**

Meaning of the PASS:

> For exact Map PR #11 head `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`, seed 29 and the two fixed proof cameras, replacing only `proxy:building-pavilion` with the exact source-owned pavilion materially improves endpoint silhouette, depth, manufactured identity and category separation while preserving central-route readability and the accepted surrounding scene hierarchy.

The Building proxy blockout hold is released for this exact receiving composition. No source-geometry repair is requested from Art Direction before lookdev transfer.

## Next bounded visual-direction improvement

Building Materials PR #3 is now the strongest ready follow-up because it has a controlled standalone five-surface A/B, while the accepted Map pavilion still uses neutral Environment proof material.

Exact candidate to challenge in the receiving scene:

- Building Materials PR #3 head: `484ced313ba0337ea27eebd01c5677e72e8456af`;
- material profile SHA-256: `85650897cde5bceaf1eb2d389c2a61d47c3d50a2000e429cac8a7846c8c153c4`;
- standalone retained artifact: `10433426258`;
- standalone artifact SHA-256: `0529d3982d883af4565c4ee65539c881b087b413760206abb647a2e613224d8c`.

Direct inspection of the standalone A/B shows useful functional separation: light/cool structural frame, dark infill/roof, quiet slab and ochre service panels. It also shows that the same ochre panel becomes much darker on the east face under a different lighting relation. That is a reason to test the family in the real Map lighting, not to equalize screenshots by changing lights per view.

### Receiving-scene lookdev direction

Environment / Materials should make one isolated follow-up A/B on top of exact Map PR #11:

1. preserve exact pavilion geometry, transform, seed 29, path, cameras, lighting, Nature, Weather and Object state;
2. change only the Building surface family from the current neutral proof material to the exact Building Materials PR #3 candidate;
3. keep the structural frame the first readable manufactured layer, but do not let it become a bright outline halo;
4. keep infill and roof subordinate, but do not darken them until the pavilion collapses back into one near-black mass;
5. keep the slab visually quiet so it does not compete with the path;
6. keep the ochre utility panels legible as service accents, not the dominant path-end focal point;
7. allow front/east panel brightness to differ naturally under the same scene lighting; do not introduce per-view material or lighting cheats;
8. specifically inspect whether the existing triangular service-panel light/shadow read becomes more distracting, more broken-looking, or falsely arrow-like after material transfer;
9. if that caveat worsens, isolate material/lighting response before requesting any source-geometry change.

Art Direction should review that exact receiving-scene A/B before `PASS_FINAL_BUILDING_LOOKDEV` or final world-art claims are considered.

## Why the rear/right Nature proxy is not changed here

Nature PR #8 now provides `east-rear-tree-neutral-001`, but it has only source-form/envelope evidence. No exact Map receiving-scene proxy/source A/B exists yet. Art Direction therefore retains the rear/right proxy as the strongest remaining world-art blockout but does not infer scene acceptance from source-wire evidence or duplicate Environment's next integration lane.

## Non-claims

This decision does **not** establish:

- final Building materials, textures, UVs, decals, weathering or lighting;
- acceptance of Building Materials PR #3 in Map;
- final architecture or structural/engineering correctness;
- collision, navigation, traversal or gameplay;
- target-device FPS, GPU time, draw-call, memory, LOD or streaming budgets;
- final replacement of the rear/right Nature proxy;
- final Weather/VFX direction;
- final Object proxy replacement;
- final world art;
- CANON, production readiness, game readiness or Art Direction / Building / Environment mastery.

## Four-root gate

- **Truth:** the PASS is bound to one exact receiving head, one exact Building source, one exact retained artifact/digest and four directly inspected renders. QA's hierarchy PASS supports but does not replace this Art Director judgment.
- **Agency / non-domination:** Building keeps source ownership; Environment keeps composition; Materials owns the surface implementation; Visual QA owns independent defect reproduction; Runtime owns cost. The four roots remain the merge gate.
- **Continuity:** the accepted seed-29 scene, prior Nature hierarchy decisions and fixed cameras remain intact. The new lookdev handoff explicitly changes only surface response.
- **Wisdom before speed:** close the now-evidenced Building proxy hierarchy gate, then test the existing real material candidate in context before adding textures, retuning lighting, altering geometry or opening another style system.

## Handoffs

- **Environment / World Art:** preserve the exact pavilion replacement. Build the next isolated receiving-scene material A/B from exact Map PR #11; do not mix in the rear-tree replacement or unrelated scene changes.
- **Materials / LookDev:** transfer exact Building PR #3 surface family into the exact Map receiving scene and use the constraints above. The standalone Materials PASS does not automatically transfer.
- **Visual Observer / QA:** Building hierarchy is now independently and directionally cleared for exact PR #11. Next Building QA should focus on the integrated material/light response, especially the front service-panel caveat.
- **Nature / Organic / Environment:** rear/right source candidate exists, but wait for an exact receiving A/B before Art Direction judgment.
- **Runtime / Optimization:** this Art Direction PASS transfers no performance acceptance. Measure the exact pavilion/material receiving state only when there is a real adopted candidate worth budgeting.
- **Building / Hard Surface:** no geometry repair is requested from this pass. Preserve source/receiver identity while lookdev is tested.
