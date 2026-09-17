# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **PASS_TELEMETRY_BOUND_SKIPPED_STATE_VISUAL_CONSEQUENCE_REVIEW_SURFACE / CLEAN 92-OF-96 TIMING AUTHORITY PRESERVED / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned the current design constellation, open PRs, Art Direction, Visual Observer / QA, and the active Nature / Weather / Map evidence lanes.

`axm-create-me` remains **coordination only**. Product/evidence work remains in `mike-axiom-mir/axm-map-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The strongest non-duplicated VFX gap remained Nature leaf-flutter timing review, but **not** another source-motion retune, Weather experiment, recorder architecture, Runtime benchmark, or Art/QA verdict. The prior clean-vs-ideal review made the clean `92/96` presentation and the authored ideal schedule comparable, but the four exact authored source states skipped by the clean proof host were not yet isolated as reviewable visual consequences.

This activation therefore stayed inside existing Map VFX PR #35 and added one bounded **skipped-state visual consequence review**. It maps each exact clean dropped slot to the exact previous-presented, skipped-authored, and next-presented real-Godot source-state images, then produces deterministic pixel-difference evidence. The accepted Nature effect, scheduler, receiver, Weather state, cameras, geometry, material and authored `31.25 ms` source spacing remain unchanged.

## Fresh duplication / ownership scan

- **Weapon / Armor / Unit / Misc:** no open design PRs presented a stronger grounded VFX receiver; Weapon is still essentially initial-repo state. VFX did not invent an effect without a receiving asset/context.
- **Character:** active Geometry / Rigging / Materials / Art / QA work is centered on review-006 shoulder deformation and shaded response. VFX did not enter that chain.
- **Animal:** active Runtime / Technical Art / Rigging work is centered on normalized-u16 skin-weight representation and direction-frame boundaries. VFX did not duplicate it.
- **Building:** active Hard Surface / Geometry / Environment / Runtime work is centered on planar-role hard-normal authority and residual primitive cost. VFX did not enter it.
- **Object:** active Materials / Technical Art / Runtime work is centered on service-dark roughness transport/storage and visual acceptance. VFX did not enter it.
- **Nature:** VFX PR #11 remains source-effect owner for the migrated sapling response + leaf-local micro-flutter. No source amplitude, phase count, timing or topology was changed here.
- **Weather:** Procedural and Map VFX/Runtime lanes already cover seeded fields, dense source evaluation, interpolation/latest-due fallback and temporal-exposure candidates. No Weather semantics or presentation candidate was duplicated here.
- **Map Environment:** composition remains Environment-owned.
- **Art Direction / Visual QA:** retain final perceptual naturalness/smoothness acceptance. Current QA still holds Nature wall-clock playback on low-intrusion perceptual evidence.
- **Runtime / Optimization:** retains target-device timing/performance authority.

## Exact source / receiver / timing identities preserved

Nature source effect remains:

- repository `mike-axiom-mir/axm-nature-design`;
- accepted VFX effect head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- deterministic leaf-local twist capped at `5°` on top of the established sapling response;
- 16 repeating direct source phases `00..15` at authored `31.25 ms` spacing;
- phase `16` remains the exact neutral endpoint witness equal to phase `00`.

Accepted current-world receiving evidence remains pinned to:

- Map Environment evidence head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- fixed cameras `path_eye` and `elevated_oblique`;
- Weather fixed at exact source phase `00` for Nature timing isolation;
- no geometry, material, camera or composition retune.

Clean proof-host timing authority remains:

- exact timing head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- workflow `35179504496` — **SUCCESS**;
- mode `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`;
- scheduled `96`, presented `92`;
- `path_eye`: `47/48`, skipped `[19]`, post-draw interval min/mean/max `28.924 / 32.063 / 58.852 ms`;
- `elevated_oblique`: `45/48`, skipped `[11,23,38]`, min/mean/max `32.541 / 33.793 / 34.945 ms`.

That retained JSON telemetry remains timing authority. Neither reconstructed images, browser playback nor encoded media replace it.

## New bounded improvement — exact skipped-state consequence review

Existing Map VFX PR #35 now contains:

- `tools/vfx_nature_leaf_flutter_skip_consequence_review.py`;
- `docs/VFX_NATURE_LEAF_FLUTTER_SKIP_CONSEQUENCE_REVIEW_001.md`;
- `.github/workflows/vfx-nature-leaf-flutter-skip-consequence-review-current-world.yml`.

Exact tested PR head:

`77bae394d6cc045d97130e706b52bbc415b48786`

Dedicated workflow:

`35211360704 — VFX Nature leaf flutter skipped-state consequence review` — **SUCCESS**.

Scoped result:

**`PASS_TELEMETRY_BOUND_SKIPPED_STATE_VISUAL_CONSEQUENCE_REVIEW_SURFACE`**

The builder consumes the exact retained telemetry-bound reconstruction from workflow `35195889303` and fail-closed verifies:

- accepted receiver `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- accepted Nature effect `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- clean timing identity `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- exact `96 scheduled / 92 presented` clean state;
- exact skip sets `path_eye=[19]`, `elevated_oblique=[11,23,38]`;
- exact real-Godot source-state PNG hashes and sapling mesh digests;
- no interpolation added;
- no source retiming;
- no direct-live-capture claim;
- a deliberate wrong skipped-phase binding is rejected before PASS.

For every clean source drop the review retains the exact previous-presented state, the exact authored state that was due but skipped, and the exact next-presented state, plus raw absolute-difference images and explicitly marked `8×` brightness diagnostic aids. The `8×` images are visibility aids only and are not faithful effect amplitude.

## Exact skipped windows and deterministic raster consequence

The four exact windows are:

| camera | skipped slot | skipped phase | previous -> next presented phases | prev→skipped changed px | skipped→next changed px | direct prev→next changed px |
| --- | ---: | ---: | --- | ---: | ---: | ---: |
| `path_eye` | 19 | 3 | `2 -> 4` | 1,761 | 1,646 | 2,300 |
| `elevated_oblique` | 11 | 11 | `10 -> 12` | 1,193 | 1,318 | 1,552 |
| `elevated_oblique` | 23 | 7 | `6 -> 8` | 1,071 | 722 | 1,133 |
| `elevated_oblique` | 38 | 6 | `5 -> 7` | 1,199 | 1,071 | 1,440 |

At the retained `1100×720` frame size, the direct previous→next source-state jumps change approximately:

- `0.2904%` of pixels for `path_eye` slot 19;
- `0.1960%` for elevated slot 11;
- `0.1431%` for elevated slot 23;
- `0.1818%` for elevated slot 38.

Direct inspection of representative exact previous / skipped / next images and the raw / amplified diagnostics shows the differences are localized to the dynamic Nature receiver region rather than a broad unrelated scene rewrite. This is a **visual-integrity / consequence-localization observation only**. Pixel counts and diagnostic visibility do not establish whether a human perceives the skip as natural, smooth, objectionable or irrelevant.

## Retained artifact

Workflow artifact:

- ID `10492111888`;
- name `vfx-nature-leaf-flutter-skip-consequence-review-001-77bae394d6cc045d97130e706b52bbc415b48786`;
- size `1,197,228 B`;
- GitHub SHA-256 `e0c6d351ab005b4bde7d15df95c3e5b6ca40759814aed6b3a8612fe5f9901162`;
- independently downloaded and rehashed to the same digest.

The retained package contains `review.html`, `skip-consequence-manifest.json`, `summary.json`, exact previous/skipped/next source-state images for all four windows, 12 raw diff PNGs, 12 explicitly amplified diagnostic PNGs, build log and exact-head receipt.

## Observation / review chain retained

| Observation / review path | Source presentation basis | Truth state |
| --- | --- | --- |
| clean no-capture | `92/96` measured | authoritative proof-host timing reference |
| synchronous direct capture | `58/96` measured | visual capture valid, timing perturbed |
| visible X11 / no recorder | `57/96` measured | display/composition path already perturbs timing |
| visible X11 + FFV1 | `39/96` measured | external visual identity works, timing further perturbed |
| telemetry-bound reconstruction | reuses clean `92/96` | exact static real-Godot state reconstruction, not live capture |
| clean-vs-ideal review | clean reconstruction vs unobserved authored schedule | verified review surface; no final aesthetic verdict |
| skipped-state consequence review | exact four clean drops mapped to exact previous/skipped/next source states | verified localized visual consequence surface; no perceptual verdict |

No earlier FAILURE, HOLD or perturbed-capture result is erased.

The telemetry-bound reconstruction implementation at `05ca6fbc93e9aa8f130d3d7066975bcdf6940f86` / workflow `35195889303` remains historically recorded as **FAILURE** because its final validator parsed `duration=1.840000` incorrectly, even though the real-Godot image bank and binding steps completed. The separate fail-closed retained-artifact validator repair at head `79fb8260c898171ce7c6357d1cbd4a5f69bc231a`, workflow `35200830432`, remains **SUCCESS** with `PASS_RETAINED_REAL_GODOT_TELEMETRY_BOUND_RECONSTRUCTION_AFTER_VALIDATOR_PARSER_REPAIR`.

The clean-vs-ideal review at head `9e3a7e64ebd50be175ef6866a0fa37960d589adb`, workflow `35206708371`, remains **SUCCESS** with `PASS_TELEMETRY_BOUND_CLEAN_VS_IDEAL_REVIEW_SURFACE`.

## Current handoff

The useful next owner is **Art Direction / Visual Observer QA**: review the four exact skip windows together with the clean-vs-ideal timing surface and decide whether the actual source drops create a perceptually meaningful naturalness/smoothness concern. VFX should not infer that answer from pixel counts and should not retime, interpolate or amplify the accepted Nature source merely to hide proof-host drops.

Runtime retains any target-class delivery/performance question. Nature VFX retains source-effect ownership. Environment retains composition. Weather remains frozen for this Nature-isolated evidence lane.

## Truth boundary

This PASS does **not** establish:

- human-perceived naturalness or smoothness;
- that any skipped source state is important enough to justify interpolation, retiming or source redesign;
- direct framebuffer capture of the clean timed stream;
- monitor/display scanout timing;
- target-device CPU, GPU, FPS, VRAM, thermal or battery behavior;
- physical wind or biomechanics;
- gameplay, collision, damage, navigation or simulation behavior;
- final Art Direction / Visual QA acceptance;
- automatic equivalence to unrelated future Environment receiver changes;
- CANON, production readiness or VFX mastery.

## Four-root check

- **Truth:** measured clean telemetry, reconstructed exact source states, skipped authored states, diagnostic amplification and perceptual unknowns remain explicitly separated. No naturalness or runtime-performance conclusion is invented from raster metrics.
- **Agency / non-domination:** VFX does not retime the source or take Art, QA, Runtime, Environment, Weather, gameplay or physics authority.
- **Continuity:** exact source, receiver, timing head, prior failure, repair PASS, clean-vs-ideal PASS, new head/workflow/artifact and all four clean drops remain pinned and rollbackable.
- **Wisdom before speed:** the activation answered the exact remaining review question with retained evidence instead of opening another recorder, another source-effect variant or a duplicate Weather/Runtime lane.

The four AXM roots remain the merge gate.
