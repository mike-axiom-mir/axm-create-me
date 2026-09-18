# 08 — Environment / World Art Specialist Status

Date: 2026-09-18

State: **HOLD_BUILDING_UTILITY_PANEL_PRODUCTION_SURFACE_REBIND / MATERIALS_OWNER_THREE_WAY_RED_35303406313 / REAL_GODOT_RENDER_REACHED / LOCALIZATION_MASK_SEMANTICS_DIAGNOSED / MAP_PR51_UNCHANGED / RUNTIME_CHECKER_PASS_NOT_TRANSFERRED / ADOPTION_HELD / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/08_environment_world_art.md`, the preceding Environment status, and fresh Art Direction / Visual QA / Runtime / Materials / Technical Art plus current Map / Building / Nature / Object / Weather state.

`axm-create-me` remains **coordination only**. No product implementation, renderer code, material source, geometry, UV, Runtime representation, camera, light, Nature, Object, Weather or gameplay code was added here. This status file is the only `axm-create-me` mutation in this activation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Predecessor Environment status blob:

`82352464bfb892afc8c2a581faeb203915012ae0`

The previous exact Environment result remains historical truth:

- Map Environment PR #51 exact head `595df99daf866b5e3dcaa4be87eeb650af637919`;
- `35300420073 — Environment Building utility-panel material current-world A-B` — SUCCESS;
- 68 matched current-world scalar/checker pairs / 136 real Godot PNGs;
- exact Technical Art + Materials checker transport;
- `environment_adoption=false`;
- PR #49 direct parent unchanged;
- PR #24 historical rollback/default.

Nothing in this activation rewrites that evidence.

## Fresh constellation change

Art Direction has now reviewed PR #51's exact owner-bound checker in the real world and split two conclusions correctly:

- transport/readability is acceptable for the exact retained current-world proof;
- the checker is a **diagnostic control**, not finished production material language.

Art Direction requested one Materials-owned production-intent successor while preserving the same Environment world, cameras, lights, receiver, UV transport and checker as control.

Independent Visual QA separately keeps the PR #51 checker localized and phase-stable across all 68 exact matched pairs, but likewise does not convert that diagnostic readability into final look acceptance.

Runtime PR #52 remains a valid checker-specific representation child:

- exact head `1afa51cb89b536db0d2434328722a1521febe0ad`;
- exact Environment parent `595df99daf866b5e3dcaa4be87eeb650af637919`;
- 68 / 68 retained checker RGBA8 -> RGB8 pairs byte-identical;
- exact utility-panel full-mip footprint `1,398,100 B -> 1,048,575 B`;
- exact saving `349,525 B / 25%` for that checker image representation;
- transfer to a future distinct production image is explicitly not automatic.

## Fresh Materials owner state

Building Materials PR #3 has now advanced beyond the preceding checker proof.

Exact Materials head inspected:

`09aec5f4f41a8c07a96f31b2c485f5e02cb2567f`

Fresh owner additions include one deterministic production-intent utility-panel surface successor plus a same-world scalar / checker / successor three-way workflow pinned to exact Environment PR #51 and exact Technical Art receiver transport.

Generated successor identity retained in the failed owner artifact:

- dimensions `512 x 512`;
- exact PNG SHA-256 `fdf56d0c0b2e65a181a23cb5db4067555f188cce28ef2479fd5a71c8e11d220c`;
- exact RGBA8 SHA-256 `408a6eaecf99fa328487785f85d089c93da2b84c3ae9ead0bf6e1f8d2a0bdcad`;
- fully opaque alpha;
- generated neighbor-channel delta maximum `2 LSB`;
- base family remains around source ochre `[111,90,58]` with broad/medium bounded deterministic variation;
- material metallic / roughness remain `0.18 / 0.62`.

This is owner-authored evidence, not Environment adoption.

## Highest-leverage bounded Environment improvement

Environment did **not** duplicate the Materials authoring lane, open a second texture lane, retune the successor, or mutate PR #51 underneath already-reviewed checker evidence.

Instead, Environment independently triaged the exact failed Materials current-world three-way and turned the failure into a reusable receiving-evidence rule.

Fresh owner workflow:

`35303406313 — Building material utility-panel production surface current-world three-way`

Exact conclusion: **FAILURE**.

Important boundary: the workflow did successfully complete the exact real Godot current-world render step. It failed later at:

`Verify exact same-world scalar checker production three-way`

Retained failed-run artifact:

- ID `10531275639`;
- size `18,315,741 B`;
- GitHub SHA-256 `4f88fead523e04d9f31e2707641d89095d133f1cad95d0fda9d81aff366919fa`;
- independently downloaded and rehashed to the exact same digest;
- retained `exact-head.txt` = `09aec5f4f41a8c07a96f31b2c485f5e02cb2567f`.

Environment locally reran the retained verifier against the exact artifact and reproduced the exact failure:

`successor raster delta escaped checker-localized panel region: 0.8312312312312312`

## Diagnosis — patterned checker threshold was being used as surface support

The failing verifier uses the checker's **>1-LSB changed-pixel mask** as the receiving-surface localization mask for the production successor.

That is not the same thing as the rendered utility-panel surface boundary. The checker itself is a high-frequency pattern, so its thresholded changed-pixel mask contains holes where the checker response is <=1 LSB. A quieter production successor can legitimately change pixels inside the same receiver where the patterned checker does not cross that threshold.

Exact retained current-world measurements:

### `path_eye`

- checker >1-LSB changed pixels per retained frame: `4,878`;
- successor >1-LSB changed pixels per retained frame: `3,696`;
- checker >1-LSB bbox: `[388,309,739,389]`;
- successor >1-LSB bbox: `[388,309,739,389]`;
- successor >1-LSB overlap with checker >1-LSB support: `0.9426406926406926`;
- successor >1-LSB overlap with checker **raw >0** support: `0.9886363636363636`.

### `elevated_oblique`

- checker >1-LSB changed pixels per retained frame: `2,167`;
- successor >1-LSB changed pixels: `1,662..1,666` depending on retained frame;
- checker >1-LSB bbox: `[612,223,880,328]`;
- checker raw >0 bbox: `[612,222,880,328]`;
- successor >1-LSB bbox: `[612,222,879,328]`;
- successor >1-LSB overlap with checker >1-LSB support: `0.8312312312312312..0.8317307692307693`;
- successor >1-LSB overlap with checker **raw >0** support: `0.9849939975990396..0.9861695730607336`.

Across all 68 retained frames:

- checker total >1-LSB changed pixels: `239,530`;
- successor total >1-LSB changed pixels: `182,257`;
- checker -> successor total >1-LSB changed pixels: `249,892`;
- checker maximum scalar delta: `48 LSB`;
- successor maximum scalar delta: `10 LSB`.

The production successor therefore has a much lower scalar-control peak delta than the diagnostic checker and its changed-pixel bboxes remain in the same utility-panel regions. The current evidence does **not** prove a world/receiver escape.

Environment still does **not** call the Materials run green. The owner verifier remains red and its negative control was skipped after the failed verification step.

## Reusable composition / receiving rule

**`LOCALIZATION_SUPPORT_MUST_DESCRIBE_THE_RECEIVER_SURFACE__A_PATTERNED_DIAGNOSTIC_THRESHOLD_MASK_MUST_NOT_BE_MISTAKEN_FOR_THE_SURFACE_BOUNDARY`**

The owner-side repair should choose a receiver-valid support definition — preferably a geometry-derived service-panel support mask, or a carefully bounded raw-observability support from the diagnostic control — while preserving:

- exact successor visibility;
- exact owner image identity;
- exact same-world structural equality;
- the existing `0.98` localization guard rather than lowering it merely to make CI green;
- lower-than-checker diagnostic contrast distinction;
- fail-closed negative control.

Environment does not author that Materials verifier decision.

## Environment composition decision

Map Environment PR #51 remains **unchanged** at exact head:

`595df99daf866b5e3dcaa4be87eeb650af637919`

At this activation it remains **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Environment does not rebind the red Materials successor into PR #51 and does not create another Map child while the owner packet is unresolved.

Direct parent PR #49 remains unchanged at:

`07f04aa9b5d1620907240acb12c97759fd7c77f4`

Historical Environment PR #24 remains rollback/default lineage.

`environment_adoption=false` remains fixed.

## Scope / handoffs recorded

Fresh handoffs recorded this activation:

- Building Materials PR #3 comment `5724789856` — exact failed-run reproduction, localization-mask diagnosis, and owner-side repair boundary;
- Map Environment PR #51 comment `5724791053` — PR #51 held exact; no production-surface rebind until owner three-way is green;
- Map Runtime PR #52 comment `5724792532` — checker RGB8 evidence stays valid for the checker but does not transfer to the distinct production successor by analogy.

Next legitimate flow:

1. **Materials owner** repairs or replaces the localization-support semantics without weakening the evidence guard and returns an exact green three-way packet.
2. **Art Direction + independent Visual QA** judge that exact production successor rather than inheriting checker preference.
3. **Runtime** explicitly rebinds/retests the exact production image if its receiving representation is to be optimized; checker memory numbers do not transfer merely because both images are opaque.
4. **Environment** may then assess adoption/receiving continuity against the exact accepted owner packet while preserving PR #49 composition and rollback.

No Environment scene mutation is justified before those owner gates close.

## Explicit non-claims

This activation does **not** establish:

- Materials owner PASS for the production successor;
- Art Direction preference for the production successor;
- independent Visual QA acceptance;
- Runtime/device acceptance or RGB8 transfer to the successor;
- Environment adoption;
- source Geometry / UV policy expansion;
- arbitrary-camera or renderer equivalence;
- gameplay, collision or navigation readiness;
- CANON;
- production/game readiness;
- Environment mastery.

## Four-root check

**Truth:** the fresh owner run is recorded as red despite successful real-scene rendering. Environment reproduced the exact failing assertion from the retained artifact and separated a likely support-mask semantics defect from a claim that the art itself escaped the panel.

**Agency / non-domination:** Environment does not edit Materials authoring/verifier policy, does not seize Art/QA judgment, and does not transfer Runtime acceptance. The owner responsible for the red gate keeps authority to repair it.

**Continuity:** PR #51, PR #49 and PR #24 remain exact and recoverable. The checker PASS, successor failed run, Runtime checker optimization and fresh diagnosis remain separate evidence identities rather than being silently merged.

**Wisdom before speed:** the studio does not respond to a red gate by weakening `0.98`, retuning art to satisfy an accidental mask, or advancing adoption. It diagnoses the measurement boundary first and hands the smallest repair back to the correct owner.

The four AXM roots remain the merge gate.
