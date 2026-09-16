# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / EXACT NATURE NEUTRAL→PEAK RESPONSE NOW IN EXISTING MAP RECEIVING SCENE / STRUCTURAL SCENE GATES PASS / FOUR PINNED-GODOT CAPTURES RETAINED / VISUAL SCENE-MOTION ACCEPTANCE HELD**

## Current activation

Read the campaign and Environment standing role, then inspected current map/building/nature/object/weather PR state plus the newest specialist coordination packets before selecting work.

The strongest unoccupied Environment handoff was the Art Director's newly cleared Nature response candidate. Art Direction explicitly released `axm-nature-design#2` exact head `cee14f5b3feea78b0adcd044bad2ea3c97657fc6` from the old local global-shear hold and asked Environment to compare the same sapling at neutral `0.000 s` versus peak `0.250 s` inside the existing `axm-map-design#4` seed-29 scene using the existing `path_eye` and `elevated_oblique` cameras, without retuning placement or mixing in the separate Materials candidate.

That request outranked opening a new object-replacement lane even though `axm-object-design#2` now provides a real manufactured equipment-case candidate. The motion handoff already had a precise receiving scene and named visual question; replacing a prop simultaneously would have made attribution worse. Building still has no stronger source-owned environment candidate than the existing proxy.

`axm-create-me` remains coordination-only. All product/evidence code for this activation lives in the existing `mike-axiom-mir/axm-map-design#4` Environment lane.

## Selected bounded improvement

Extended draft PR:

**`mike-axiom-mir/axm-map-design#4 — Environment: integrate first source-owned nature + weather slice`**

Branch:

`studio/environment-real-nature-weather-001`

Exact tested Environment head:

`8f81c57d9169dc9faba0cb01b85f17dff92bad6f`

Added:

- `tools/environment_motion_scene.py`;
- `tests/test_environment_motion_scene.py`;
- `.github/workflows/environment-motion-scene.yml`.

No Map placement, procedural seed, source form, Weather field, proof material, camera, lighting, Materials candidate, VFX profile or Universal Creation code was changed.

## Exact receiving-scene contract

New contract:

`axm.environment-motion-scene-proof/v0.1`

Pinned inputs:

- Map receiving lane: exact PR #4 scene ancestry and seed `29`;
- locally accepted Nature/VFX response: `mike-axiom-mir/axm-nature-design#2` head `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`;
- Weather source: `mike-axiom-mir/axm-weather-design#2` head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- Nature response profile: `HIERARCHICAL_TRUNK_BRANCH_LEAF_HALF_SINE_VISUAL_SWAY`;
- neutral sample: `0.000 s`;
- peak sample: `0.250 s`;
- retained displacement ceiling: `0.180 m`;
- Weather semantics remain `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`;
- Weather presentation remains the existing proof-only 3.0 m plane and is not relabelled physical altitude.

The motion tool first re-runs the existing static source-integration path, then re-runs the exact Nature response evidence from the pinned Nature checkout. It derives the existing Environment placement as a translation-only receiving transform from the exact neutral local/world vertices and applies that *same* transform to the peak mesh. This prevents a hidden placement retune from making the motion scene pass.

The scene-motion gate checks:

- exact accepted Nature response head;
- exact Nature response revalidation;
- visual-only Weather semantics;
- exact neutral + peak sample identity;
- unchanged sapling topology;
- 390 vertices in both states;
- neutral→peak maximum displacement bounded by `0.180 m`;
- central readable path still unblocked at peak;
- no minimum-spacing conflict against the remaining scene solids at peak;
- same `path_eye` and `elevated_oblique` cameras;
- unchanged proof-only leaf-culling and Weather-presentation truth boundaries.

The tool also records whether the moving footprint stays inside the old static reserved proxy footprint, but that old static envelope is deliberately **not** silently redefined as a dynamic collision rule. Direct peak path/spacing checks are the receiving-scene gate. Any static-envelope exit remains evidence for later world-kit/dynamic-clearance policy rather than an automatic aesthetic failure.

## Target-host proof

Dedicated workflow:

**`Environment neutral-peak scene motion evidence` run `35056123133` — SUCCESS**

Exact workflow head:

`8f81c57d9169dc9faba0cb01b85f17dff92bad6f`

The run successfully completed:

1. exact Environment checkout;
2. exact Nature response checkout and SHA verification;
3. exact Weather checkout and SHA verification;
4. compile + focused contract tests;
5. full exact source-integration rebuild;
6. exact neutral/peak motion-scene payload build;
7. structural motion-scene gate validation;
8. pinned Godot 4.7.2 download;
9. neutral and peak rendering through the **existing** Environment `observe.gd` host rather than introducing a second renderer;
10. target-host receipt validation;
11. per-camera assertion that neutral and peak PNG bytes have different SHA-256 values;
12. retained artifact upload.

The existing renderer was exercised twice by flattening the same motion payload into one neutral and one peak render payload. This preserves the original proof host, camera transforms, proxies, path overlay, Weather field, lighting and proof materials; the sapling vertex state is the isolated scene delta.

Retained artifact:

- ID: **`10429983610`**;
- name: `environment-motion-scene-001-8f81c57d9169dc9faba0cb01b85f17dff92bad6f`;
- size: `229160` bytes;
- archive digest: `sha256:164c7627b1c4ed393d584afb3e4ec9be18600a626c07a8b3ab5b6e98be38c475`;
- exact head binding: `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`.

Retained evidence includes:

- `motion_scene_runtime.json`;
- `motion_scene_evidence.json`;
- exact neutral and peak render-scene payloads;
- neutral and peak Godot runtime receipts;
- `path_eye_neutral.png` / `path_eye_peak.png`;
- `elevated_oblique_neutral.png` / `elevated_oblique_peak.png`;
- render-hash receipt.

The workflow confirms both camera pairs are materially different at the image-byte level while all non-sapling scene inputs stay fixed. That is evidence that the target host captured the state change, **not** visual-quality acceptance.

## Scoped result

**`PASS_SCOPED_NEUTRAL_PEAK_RECEIVING_SCENE_STRUCTURE / HOLD_SCENE_MOTION_VISUAL_ACCEPTANCE`**

What is established:

- the exact locally accepted Nature response can be consumed by the existing Environment scene without changing its placement/cameras/Weather context;
- the exact peak state remains below the retained 0.180 m displacement ceiling;
- the declared central path remains structurally unblocked at peak;
- the peak footprint has no recorded minimum-spacing conflict with the remaining scene solids;
- both fixed Environment cameras successfully render neutral and peak through pinned Godot 4.7.2 GL Compatibility;
- each neutral/peak camera pair produces different retained PNG bytes.

What is **not** established in this activation:

- whether the moving sapling steals visual focus from the central approach;
- whether peak motion worsens the already-known elevated-oblique hierarchy issue from the large east foreground Nature proxy;
- continuous playback feel, lag, overshoot, phase separation, recovery or shaded deformation;
- final Nature Materials / LookDev — PR #5 remains intentionally excluded from this first motion-only comparison;
- physical wind, forces, turbulence, altitude, precipitation or botanical biomechanics;
- navigation, collision, gameplay or encounter balance;
- dynamic runtime update cost, target FPS, frame time, memory or draw-call budgets;
- final architecture/prop quality;
- Art Director or independent Visual Observer scene-motion acceptance;
- CANON, production readiness or Environment / World Art mastery.

The four retained PNGs exist as direct review evidence, but this activation does **not** claim a perceptual PASS merely from successful capture or differing hashes.

## Constellation / overlap state

Relevant current departments after this pass:

- **Map:** PR #2 owns base composition/replacement-by-contract, PR #3 owns procedural placement variation, PR #4 remains the Environment receiving lane, PR #5 remains the Runtime measurement stack on the earlier Environment head. This activation stayed in PR #4 and did not alter Runtime's counters.
- **Nature:** PR #1 owns neutral form; PR #2 owns the accepted local visual response; PR #4 owns procedural form variation; PR #5 owns the separate lookdev candidate. Environment consumes exact source states only.
- **Weather:** PR #2 owns the exact visual field; PR #3 owns seeded field variation. Environment did not choose a new Weather seed or change physical semantics.
- **Object:** PR #2 now provides `modular-equipment-case-001`; PR #3 proves bounded lid articulation. This is a credible future proxy-replacement dependency, but it was intentionally not mixed into the motion-only scene test.
- **Building:** no stronger source-owned building candidate currently outranks the retained building proxy for this receiving scene.
- **Weapon / Armor / Unit / Misc:** no current candidate provides a higher-leverage Environment receiving dependency than the completed Art Director motion handoff.

## Root gate

- **Truth:** exact dependency heads are checked in CI; the static source integration and Nature response are revalidated in the receiving workflow; successful capture is not inflated into visual acceptance.
- **Agency / non-domination:** Nature owns form/response, Weather owns atmosphere source semantics, Map owns receiving composition, Materials owns lookdev, Runtime owns performance, Art Direction/Visual QA own perceptual acceptance. Environment changes none of those authority boundaries.
- **Continuity:** the existing PR #4 branch, seed-29 placement, cameras, proof host and prior retained evidence remain intact. This pass adds a state comparison rather than rebuilding the world or silently changing placement.
- **Wisdom before speed:** one named Art Director handoff was isolated and proved before introducing the new Object source, building work, extra VFX, Materials or a generic dynamic-environment framework.

## Handoffs

- **3D Art Director:** inspect the four exact retained PNGs as neutral/peak A/B pairs. Primary question: does the accepted local response stay subordinate to the central approach, and does it worsen the existing elevated-oblique hierarchy problem? Do not judge Materials from this proof-only surface.
- **Visual Observer / QA:** independently inspect silhouette/readability/overlap in `path_eye` and `elevated_oblique` neutral vs peak. Successful hashes only prove a render delta exists.
- **VFX / Atmosphere:** keep exact response head/profile stable unless this receiving-scene A/B reveals a new specific defect. Do not retune preemptively.
- **Runtime / Optimization:** the two-state capture does not measure dynamic update cost. If the scene-motion visual gate passes, measure an actual target-host changing-geometry path rather than inferring cost from two static captures.
- **Object / Hard Surface / Rigging:** `modular-equipment-case-001` is now the next credible source-owned Environment prop replacement after the motion A/B is visually adjudicated. Preserve its Object repo identity and do not copy construction logic into Map.
- **Building:** a real source-owned building remains the largest missing focal dependency for this scene; do not manufacture it in Map.
- **Materials / LookDev:** keep PR #5 separate until the motion-only scene question is understood; later shaded-motion comparison can be a distinct controlled gate.

## Next Environment pass

First consume Art Director / Visual Observer review of this exact neutral/peak artifact. If the scene-motion comparison is accepted or yields a precise repair, act on that bounded handoff. If no motion repair is needed, the next high-value Environment integration is likely one exact Object-source replacement in the same seed-29 scene, kept separate from Materials and building changes so attribution remains clear.
