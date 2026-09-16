# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **FAIL_CURRENT_WORLD_WEATHER_LATEST_DUE_TEMPORAL_RHYTHM_EQUIVALENCE / PASS_PRESENTED_EXACT_STATE_SPATIAL_NONREGRESSION / VFX FALLBACK REMAINS OPTIONAL + EXPLICIT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the immediately previous Visual QA result, newest specialist status, newest current-world Environment/VFX/Runtime work and current open PR heads before selecting one new gate.

`axm-create-me` remains **coordination only**. Visual QA changed no Map, Weather, Environment, Building, Animal, Character, Object, Nature, Runtime, Universal Creation, Profession Fabric or other product implementation. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous QA result remains historical truth:

`PASS_ANIMAL_ELBOW_SELECTED003_SOURCE_SPACE_VISUAL_NONREGRESSION_GATE`

for exact Animal Organic PR #8 head `82669bfaa81af21a157c4de253381cc8c8375980`. Art Direction has since preferred selected-003 as the next Organic source form. This activation does not reopen that closed bounded source-space gate.

## Fresh constellation / duplication scan

The strongest completed unverified visual/runtime surface is now the **Map VFX latest-due exact-state fallback**, not another static look comparison.

Why it outranks the other fresh surfaces for this activation:

- **Map VFX PR #25** now owns an optional `LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION` fallback at exact head `e95910c8c5c45cd8d51be3b259825cf85064efc2`. The owner proof correctly passes freshness/source-identity semantics while explicitly handing temporal smoothness / gust-rhythm tradeoff to Art Direction + Visual QA.
- **Runtime PR #30** independently shows that prebuilt native-mesh caching cuts update work to roughly `0.04 ms` but does not robustly recover skipped states. This makes temporal presentation, not another mesh-builder micro-optimization, the consequential unresolved visual boundary.
- **Environment PR #24** has a newer Building header-segmentation receiver at exact review head `bd065c8ee23ddee922c4aa9b4aa6e3d9504ffb06`. Its static full-world delta is real but bounded to roughly `0.21–0.38%` of the frame and remains a separate next QA/Art surface. It does not outrank a policy that changes which authored dynamic states are shown over time.
- **Animal** selected-003 already has independent QA and Art Direction acceptance for its bounded source preference.
- **Character** still carries a Geometry-owned connected-shoulder blocker; no downstream render can silently erase that source-topology hold.
- **Building / Object / Nature / Weapon / Armor / Unit / Misc / UC / Profession Fabric** expose no fresher completed perceptual claim with a larger immediate runtime-presentation consequence.

No duplicate VFX PR, timing policy, interpolation path or repair lane was opened. QA reviews the existing VFX PR #25 evidence only.

## Selected exact claim / gate

Repository: `mike-axiom-mir/axm-map-design`

PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

Exact reviewed current head:

`e95910c8c5c45cd8d51be3b259825cf85064efc2`

Owner result preserved:

`PASS_LATEST_DUE_EXACT_SOURCE_STATE_PRESENTATION_FALLBACK`

Exact fallback semantics:

- authored source interval remains `31.25 ms` / `32 Hz`;
- no interpolation or synthesized Weather/sapling state;
- when Godot returns control, select the freshest exact source state already due;
- stale intermediate states may be skipped and are recorded explicitly;
- the established source-width receiving path remains exact.

Visual QA's selected question is narrower and different from the owner proof:

> Does this latest-due fallback preserve the already-approved per-state spatial presentation while also remaining temporally equivalent enough to the authored exact-state rhythm that it could silently replace exact cadence as the normal visual presentation?

QA does **not** ask whether the fallback is useful as an emergency/degradation mode. It asks whether visual temporal equivalence is demonstrated.

## Owner evidence independently verified

VFX workflow:

**`35130300983 — VFX Weather latest-due presentation fallback evidence` — SUCCESS**

Retained artifact:

- artifact ID: `10461270622`;
- exact head: `e95910c8c5c45cd8d51be3b259825cf85064efc2`;
- expected SHA-256: `a7862ff074f63edde800682e97079483ed3ecb307c9b5180c6640de4784e75b8`;
- Visual QA independently downloaded the archive and reproduced the exact same SHA-256.

The package retains exact head, current source-width payload, Godot 4.7.2 log, runtime receipt, independent target-host verifier and all **23 actually presented `1100×720` PNG frames**.

For exact per-state comparison, QA also rechecked the previously retained fixed-state source-width artifact:

- archive SHA-256: `c1143322dc974ad21cff4e3baa53697cc4a58fc42caf55627077703f131011b5`;
- exact earlier fixed-state head: `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`.

The two `current_world_weather_width.json` payloads are byte-semantic equals except for `receiving_head`. All source states, source-width profile, Weather seed/layout and exact source rows remain unchanged.

## Exact presented-state spatial identity check

Every one of the **23 actually presented latest-due PNGs** is pixel-identical to the corresponding exact source-state frame in the earlier fixed-state proof:

- `path_eye`: all 12 presented frames pixel-identical;
- `elevated_oblique`: all 11 presented frames pixel-identical;
- maximum shared-state pixel delta: `0`;
- changed shared-state pixels: `0`.

Therefore the fallback introduces **no per-state spatial regression** in the frames it actually shows. The established Weather ribbon widths, world composition and source-state rendering remain exact for those retained states.

Independent scoped sub-result:

**`PASS_PRESENTED_EXACT_STATE_SPATIAL_NONREGRESSION`**

This does not say anything about the visual rhythm between those states.

## Temporal presentation evidence

### `path_eye`

Actually presented source indices:

`0,1,3,4,6,7,9,10,12,13,15,16`

Dropped exact source indices:

`2,5,8,11,14`

Counts:

- presented: `12 / 17`;
- skipped: `5 / 17`.

Observed post-draw spacing is relatively steady:

- minimum interval: `47.172 ms`;
- maximum interval: `53.085 ms`;
- median interval: `47.711 ms`.

But source-time advancement between those nearly equal draw intervals alternates between one authored state (`31.25 ms`) and two authored states (`62.5 ms`). The resulting exact source-time / draw-time ratio spans:

**`0.589x .. 1.319x`**

This is not a constant playback speed relative to the authored state timeline.

Direct frame-transition diagnostics reproduce the same unevenness:

- median >1-LSB changed pixels on one-state transitions: `1,778`;
- median on two-state jumps: `2,390` = **`1.34x`** larger;
- median whole-frame mean absolute RGB delta on one-state transitions: `0.0922`;
- median on two-state jumps: `0.1401` = **`1.52x`** larger.

### `elevated_oblique`

Actually presented source indices:

`0,1,3,4,6,8,9,11,12,14,16`

Dropped exact source indices:

`2,5,7,10,13,15`

Counts:

- presented: `11 / 17`;
- skipped: `6 / 17`.

Observed post-draw spacing:

- minimum interval: `50.033 ms`;
- maximum interval: `51.728 ms`;
- median interval: `50.340 ms`.

Again, source advancement is either `31.25 ms` or `62.5 ms` between these near-uniform draw intervals. Exact source-time / draw-time ratio spans:

**`0.604x .. 1.249x`**

Direct transition diagnostics:

- median >1-LSB changed pixels on one-state transitions: `1,399.5`;
- median on two-state jumps: `2,064.5` = **`1.48x`** larger;
- median whole-frame mean absolute RGB delta on one-state transitions: `0.0602`;
- median on two-state jumps: `0.1071` = **`1.78x`** larger.

## Direct visual interpretation

The retained frames themselves are spatially clean: QA found no new giant ribbon, clipping flare, width explosion, source-state corruption, world-layout jump or per-state rendering mismatch. That is consistent with the exact pixel-identity result above.

The unresolved defect is temporal. At nearly uniform ~`48–51 ms` display intervals, the exact source sequence advances by alternating one- and two-state steps. The viewer therefore receives repeated smaller/larger authored motion changes rather than the original 31.25 ms state rhythm. The effect is a bounded **temporal stepping / velocity-modulation risk**, not a spatial corruption.

QA does not claim every user will find the stepping objectionable, and does not claim interpolation is automatically the correct repair. It does establish that visual temporal equivalence to the authored cadence is false on this exact proof host.

## QA verdict

### Owner fallback semantics — preserved PASS

`PASS_LATEST_DUE_EXACT_SOURCE_STATE_PRESENTATION_FALLBACK`

Exact meaning remains VFX-owned: the fallback truthfully selects the freshest due exact state, records drops, never invents interpolation and preserves exact source-state identities.

### Independent Visual QA spatial gate — PASS

**`PASS_PRESENTED_EXACT_STATE_SPATIAL_NONREGRESSION`**

The 23 presented frames are exact spatial matches to their prior fixed-state evidence.

### Independent Visual QA temporal gate — FAIL

**`FAIL_CURRENT_WORLD_WEATHER_LATEST_DUE_TEMPORAL_RHYTHM_EQUIVALENCE`**

Exact meaning:

> At exact Map VFX PR #25 head `e95910c8...`, the latest-due fallback is not demonstrated visually equivalent to the authored exact-state temporal rhythm. It presents only 12/17 and 11/17 states in the two fixed cameras, and near-uniform ~50 ms draw spacing is paired with alternating one- and two-state source advances, producing measurable slow/fast source-time modulation and larger two-state visual jumps.

This FAIL does **not** invalidate the fallback as an explicit degradation/emergency policy. It blocks only a stronger claim that it can silently replace exact cadence without a temporal visual tradeoff.

## Handoffs

### VFX / Map PR #25

Returned exact QA packet in PR comment **`5702112512`**.

Keep `LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION` optional and explicit. Do not relabel the exact 32 Hz cadence FAIL or the dropped-state list as solved by freshness semantics.

No interpolation implementation is requested by QA from this evidence alone. A future repair may be exact-cadence scheduling, a different presentation strategy, or an explicitly Art-approved degradation policy, but must be owner-driven and separately evidenced.

### Runtime / Optimization

Runtime PR #30's finding remains relevant: prebuilt cache sharply reduces update work but does not robustly reduce skipped states. Continue investigating renderer/presentation/post-draw scheduling or target-host behavior before spending another pass on Weather mesh-construction micro-optimization.

No target-device performance acceptance transfers from this QA result.

### 3D Art Director

If latest-due remains a deliberate fallback, review the temporal stepping as a **degradation-style choice**, not as visually equivalent playback. Spatial Weather language is unchanged; the question is whether dropped-state rhythm is acceptable under constrained presentation.

### Environment / Map PR #24

The fresh Building header-segmentation current-world delta at review head `bd065c8ee23ddee922c4aa9b4aa6e3d9504ffb06` remains a separate pending QA/Art surface. This VFX temporal result neither accepts nor rejects that static receiver change.

## Holds / explicit non-claims

This activation does **not** establish:

- authored `32 Hz` delivery;
- zero dropped source states;
- interpolation quality or a preferred interpolation method;
- that latest-due is unusable as an emergency/degradation fallback;
- final Art Direction preference for the fallback;
- target-device CPU/GPU frame time, FPS, VRAM, allocator, battery or thermal performance;
- arbitrary camera/FOV/resolution/renderer equivalence;
- physical wind/precipitation/turbulence correctness;
- gameplay visibility, damage, collision, physics or control readiness;
- Environment Building header-segmentation visual acceptance;
- UC extraction or Profession Fabric promotion;
- CANON, production/game readiness or Visual Observer / QA / VFX mastery.

## Root gate

- **Truth:** the owner fallback PASS is preserved while the stronger temporal-equivalence claim is rejected; exact artifacts were independently rehashed; all 23 shared presented frames were compared exactly rather than inferred from labels.
- **Agency / non-domination:** VFX retains presentation-policy ownership, Runtime retains performance/scheduling authority, Art Direction retains aesthetic fallback acceptance and QA changes no source or runtime implementation.
- **Continuity:** the fixed-state spatial PASS, strict exact-32-Hz cadence FAIL, latest-due semantics PASS and this temporal-equivalence FAIL remain separate evidence points rather than being collapsed into one success/failure story.
- **Wisdom before speed:** QA tested the actual temporal consequence of the new degradation policy before asking for another optimization or interpolation mechanism, and stops at the smallest defensible conclusion.

The four AXM roots remain the merge gate.
