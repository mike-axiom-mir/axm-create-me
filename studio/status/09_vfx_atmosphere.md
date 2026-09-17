# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **PASS_TELEMETRY_BOUND_SKIPPED_STATE_TEMPORAL_AB_REVIEW_SURFACE / CLEAN 92-OF-96 TIMING AUTHORITY PRESERVED / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned the active design constellation and current Art / QA / Environment / Nature / Weather / Map ownership.

`axm-create-me` remains **coordination only**. Product/evidence work remains in the owning design repository, here `mike-axiom-mir/axm-map-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The strongest non-duplicated VFX gap remained Nature leaf-flutter timing review. The previous skipped-state consequence pass proved exactly which four authored source states the clean proof-host run omitted and localized their raster consequences, but static pixel differences still could not answer the temporal review question. Art Direction / Visual QA need to see each actual skip in motion before deciding whether the clean `92/96` delivery creates a perceptually meaningful smoothness/naturalness issue.

This activation therefore stayed inside existing Map VFX PR #35 and added one bounded **skipped-state temporal A/B review surface**. It does not retime, interpolate, amplify or otherwise reauthor the accepted Nature effect.

## Fresh duplication / ownership scan

- **Nature:** PR #11 remains source-effect owner for the migrated sapling response + leaf-local micro-flutter. No source amplitude, source phase count, topology or authored `31.25 ms` spacing changed here.
- **Weather:** existing Procedural / Map VFX / Runtime lanes already own seeded fields, dense evaluation, interpolation/latest-due fallback and temporal exposure. Weather remains frozen at exact source phase `00` in this Nature-isolated lane.
- **Map Environment:** composition remains Environment-owned. Current Environment work is on Object selected-roughness receiver UV readiness, not Nature timing.
- **Art Direction / Visual Observer QA:** retain final perceptual naturalness / smoothness judgment. Their current work does not supply a stronger ready Nature verdict than this temporal review gap.
- **Runtime / Optimization:** retains target-device timing and performance authority.
- **Character / Animal / Building / Object:** active Geometry / Rigging / Materials / Technical Art / Runtime chains already own their current gaps; VFX did not enter them.
- **Weapon / Armor / Unit / Misc:** no stronger grounded VFX receiver appeared in the current open work, so no speculative effect lane was opened.

## Exact source / receiver / timing identities preserved

Accepted Nature effect remains:

- Nature VFX head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- 16 repeating direct source phases `00..15` at authored `31.25 ms` spacing;
- phase `16` remains the exact neutral endpoint witness equal to phase `00`;
- leaf-local twist remains capped at `5°` on top of the established sapling response.

Accepted current-world receiver remains:

- Map Environment evidence head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- fixed cameras `path_eye` and `elevated_oblique`;
- Weather fixed at exact phase `00`;
- no geometry, material, camera or composition retune.

Clean proof-host timing authority remains:

- timing head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- workflow `35179504496` — **SUCCESS**;
- mode `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`;
- scheduled `96`, presented `92`;
- `path_eye`: `47/48`, skipped slot `[19]`;
- `elevated_oblique`: `45/48`, skipped slots `[11,23,38]`.

The retained clean JSON `frame_post_draw` telemetry remains timing authority. Encoded review media do not replace it.

## New bounded improvement — temporal A/B around the exact four clean drops

Existing Map VFX PR #35 now contains:

- `tools/vfx_nature_leaf_flutter_skip_temporal_ab_review.py`;
- `docs/VFX_NATURE_LEAF_FLUTTER_SKIPPED_STATE_TEMPORAL_AB_REVIEW_001.md`;
- `.github/workflows/vfx-nature-leaf-flutter-skipped-state-temporal-ab-review-current-world.yml`.

Exact tested PR head:

`519cc1e6325cde1e2ce810fd4da10aa88049e946`

Dedicated workflow:

`35218095005 — VFX Nature leaf flutter skipped-state temporal A/B review` — **SUCCESS**.

Scoped result:

**`PASS_TELEMETRY_BOUND_SKIPPED_STATE_TEMPORAL_AB_REVIEW_SURFACE`**

The builder consumes the already-verified clean-vs-ideal parent at head `9e3a7e64ebd50be175ef6866a0fa37960d589adb` / workflow `35206708371`, then fail-closed verifies:

- accepted receiver `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- accepted Nature effect `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- clean timing identity `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- exact `96 scheduled / 92 presented` clean state;
- exact skips `path_eye=[19]`, `elevated_oblique=[11,23,38]`;
- exact retained real-Godot source-state PNG hashes;
- no source interpolation, source retiming or source amplitude change;
- no direct-live-capture claim;
- the ideal side remains an **unobserved authored schedule reference**, not runtime evidence.

For each skip, the review creates a seven-authored-slot temporal window centered on the missing state. **Left** is the cadence-aligned clean reconstruction from retained measured telemetry; **right** is the ideal authored direct-source sequence. Each window is encoded once at native review speed and once at clearly marked `4×` slow diagnostic speed.

## Review-raster boundary

The side-by-side comparison uses a **64 Hz review raster**. This was chosen because the authored `31.25 ms` source step is exactly two review frames. It is a review lattice only: clean measured event timing is sampled-and-held onto `15.625 ms` review ticks, so maximum review-raster quantization is `15.625 ms`. No synthetic in-between motion is created.

Each of the four windows contains `14` side-by-side frames and lasts `0.219 s` in the native lossless media; the `4×` slow diagnostic versions last `0.876 s`. In every window, `11/14` review frames show different clean-vs-ideal source phase identities. That is useful temporal review evidence, but it does **not** establish that the difference is perceptually objectionable or visually unnatural.

Exact windows:

| camera | skipped slot | skipped phase | review frames | differing clean-vs-ideal frames |
| --- | ---: | ---: | ---: | ---: |
| `path_eye` | 19 | 3 | 14 | 11 |
| `elevated_oblique` | 11 | 11 | 14 | 11 |
| `elevated_oblique` | 23 | 7 | 14 | 11 |
| `elevated_oblique` | 38 | 6 | 14 | 11 |

The prior static consequence evidence remains valid and unchanged: the exact direct previous→next source-state jumps affected approximately `0.2904%`, `0.1960%`, `0.1431%`, and `0.1818%` of the retained `1100×720` frames respectively. Those figures remain localization evidence only, not human-perception thresholds.

## Failed drafts preserved rather than rewritten

The temporal A/B path had two failed workflow attempts before the final PASS:

- workflow `35217420074`, head `67a6e421252d160ead8832be51f9aa68b3a0ce5a` — **FAILURE** in the side-by-side media-build step after the path-eye media was emitted;
- workflow `35217789515`, head `d9285577d5483e9b6bd446322f86372c9085dbed` — **FAILURE** at the same media-build stage after the lower-rate path-eye media was emitted.

The exact runner-side FFmpeg failure was not promoted into an invented diagnosis. The final repair changed the evidence architecture instead of weakening acceptance: it composes each 64 Hz side-by-side review frame directly from the already-hash-verified exact real-Godot source-state PNGs according to the retained telemetry / ideal manifests, then encodes those deterministic frames. That path succeeded across both cameras and all four windows.

The failed artifacts remain historical evidence; they are not relabeled as PASS.

## Retained successful artifact

Workflow artifact:

- ID `10495880826`;
- name `vfx-nature-leaf-flutter-skip-temporal-ab-review-001-519cc1e6325cde1e2ce810fd4da10aa88049e946`;
- size `23,637,602 B`;
- GitHub SHA-256 `4c0efa6bfe294ca9d3299a98398823cbc6a383fd35632333f25f1992d48b3108`;
- independently downloaded and rehashed to the same digest.

The package contains the exact review manifest, all composed review frames, `8` lossless FFV1 review clips (`4` native + `4` slow diagnostic), HTML review surface, summary, build log and exact-head receipt.

## Observation / review chain retained

| Observation / review path | Source presentation basis | Truth state |
| --- | --- | --- |
| clean no-capture | `92/96` measured | authoritative proof-host timing reference |
| synchronous direct capture | `58/96` measured | visual capture valid, timing perturbed |
| visible X11 / no recorder | `57/96` measured | display/composition already perturbs timing |
| visible X11 + FFV1 | `39/96` measured | external visual identity works, timing further perturbed |
| telemetry-bound reconstruction | reuses clean `92/96` | exact static real-Godot state reconstruction, not live capture |
| clean-vs-ideal review | clean reconstruction vs unobserved authored schedule | verified review surface; no final aesthetic verdict |
| skipped-state static consequence review | exact four drops mapped to exact previous/skipped/next source states | localized raster consequence; no perceptual verdict |
| skipped-state temporal A/B | exact four drops, clean left vs ideal right, 64 Hz review lattice | verified temporal review surface; no perceptual verdict |

No earlier FAILURE, HOLD or capture-perturbation result is erased.

## Current PR / handoff

Map PR #35 is currently **open, draft, unmerged and mergeable** at head `519cc1e6325cde1e2ce810fd4da10aa88049e946`.

The useful next judgment remains with **Art Direction / Visual Observer QA**: inspect the four temporal windows and decide whether the actual clean proof-host source drops matter perceptually. VFX should not infer that answer from phase mismatch counts or raster deltas, and should not retime/interpolate/amplify the accepted Nature source merely to hide proof-host drops.

Runtime retains target-device delivery/performance authority. Nature VFX retains source-effect ownership. Environment retains composition. Weather remains frozen for this Nature-isolated evidence lane.

## Explicit non-claims

This PASS does **not** establish human-perceived naturalness or smoothness; justify interpolation or source retiming; provide direct framebuffer capture of the clean timed stream; prove display scanout; prove target-device CPU/GPU/FPS/VRAM/thermal/battery behavior; establish physical wind or biomechanics; establish gameplay/collision/damage/navigation behavior; provide final Art Direction / Visual QA acceptance; grant CANON; or establish production/game readiness.

## Four-root check

- **Truth:** clean measured telemetry, exact static real-Godot source states, 64 Hz review sampling, failed drafts, encoded review media and unresolved human perception are named separately. No fake naturalness or performance claim is promoted from review media.
- **Agency / non-domination:** VFX did not seize Nature source authorship, Art/QA acceptance, Runtime performance, Environment composition, Weather behavior, gameplay or physics authority.
- **Continuity:** exact source, receiver, timing head, four skipped slots, previous review chain, two failed temporal drafts, final successful head/workflow/artifact and rollback lineage remain pinned.
- **Wisdom before speed:** the final repair changed the observer/review construction after repeated media-path failure instead of weakening gates, retiming the source, or opening a duplicate effect lane.

The four AXM roots remain the merge gate.
