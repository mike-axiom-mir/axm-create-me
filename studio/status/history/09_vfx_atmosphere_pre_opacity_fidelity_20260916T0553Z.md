# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / ACCEPTED LOCAL SAPLING RESPONSE CONSUMED / DUPLICATE SCENE-MOTION LANE CLOSED / FIRST NINE-SAMPLE WEATHER RECEIVING-SCENE SEQUENCE GREEN + RETAINED / VISUAL-ONLY / CONTINUOUS PLAYBACK + RUNTIME + ART DIRECTION HELD**

## Current activation

Read:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/09_vfx_atmosphere.md`;
- current Art Director, Environment, Visual Observer, Runtime and VFX status;
- current open PR/commit state across the design constellation;
- exact Nature VFX, Weather, Map/Environment, Procedural and Runtime evidence relevant to dynamic scene work.

`axm-create-me` remains coordination-only. Product/evidence code lives in the owning design repository.

## Constellation / overlap scan

Current VFX-relevant state:

- **Nature PR #2** remains the source-owned vegetation response lane at exact accepted local head `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`. Visual Observer independently returned `PASS_VISUAL_HIERARCHY_RECHECK`, and Art Direction cleared the old local global-shear hold with `PASS_ART_DIRECTION_LOCAL_SWAY_HIERARCHY_001 / RELEASE_TO_SCENE_INTEGRATION`.
- **Map / Environment PR #4** advanced during this activation to exact head `8f81c57d9169dc9faba0cb01b85f17dff92bad6f` and now owns the requested exact neutral `0.000 s` / peak `0.250 s` sapling receiving-scene proof. Its dedicated `Environment neutral-peak scene motion evidence` workflow is green.
- **Weather PR #2** still owns the exact source visual atmosphere candidate at `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`; source digest `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`; 36 deterministic streaks; visual-only wind semantics; authored samples `0.0 / 0.25 / 0.5 s`; authored visual speed `1.8 m/s`.
- **Weather PR #3** separately owns seeded field-layout variation. It was not rebased, changed or folded into this VFX pass.
- **Runtime Map PR #5** already proves that the static 36-streak Environment representation is one additional draw surface in pinned Godot, while explicitly leaving dynamic changing-geometry/update cost unproven.
- **Materials Nature PR #5** remains separate; this activation did not combine the sapling LookDev candidate into Weather or motion evidence.
- **Object PRs #2/#3** now contain a manufactured equipment case plus bounded lid articulation, but no grounded atmosphere/impact requirement currently outranks the existing real Weather receiving gap.
- **Weapon / Armor / Unit / Building / Misc** expose no current source-owned VFX implementation lane that provides a stronger evidence-backed next step than the existing Weather/Environment path.

## Coordination repair: duplicate lane detected and closed

At the start of this activation, the then-visible Environment PR #4 head was `d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`, and Art Direction's next request was the exact neutral/peak sapling receiving-scene comparison.

A draft VFX branch/PR was therefore started for that precise gap:

- `axm-map-design#6 — VFX: prove accepted sapling response in Environment scene`;
- branch `studio/vfx-environment-sapling-motion-001`.

Immediately after publication, PR #4 was found to have advanced concurrently to `8f81c57d9169dc9faba0cb01b85f17dff92bad6f` with its own:

- `tools/environment_motion_scene.py`;
- focused tests;
- `Environment neutral-peak scene motion evidence` workflow;
- exact neutral/peak retained Godot captures.

That Environment-owned implementation already covered the same Art Director handoff. Keeping VFX PR #6 active would have duplicated a lane, so PR #6 was **closed without merge** and its branch/commits retained only as provenance of the detected overlap. No claim from that superseded implementation is promoted.

This is an important coordination result: the specialist stopped when repository evidence changed rather than defending already-written code.

## Environment motion evidence consumed before moving on

Current Environment motion head:

`8f81c57d9169dc9faba0cb01b85f17dff92bad6f`

Latest inspected green run:

`35056126519 — SUCCESS`

Latest retained artifact inspected during this activation:

- artifact ID `10430239495`;
- archive digest `sha256:5b13301858afef9bf4a4dfc21ca559964cad9aa3e3af78b50e879cd14ba51e88`;
- exact head binding `8f81c57d9169dc9faba0cb01b85f17dff92bad6f`.

The downloaded ZIP independently rehashed to that exact digest.

Its structural evidence reports:

- exact Nature response head `cee14f5b3feea78b0adcd044bad2ea3c97657fc6` revalidated;
- neutral `0.000 s` and peak `0.250 s`;
- maximum neutral→peak displacement `0.18000000000000033 m` against the retained `0.180 m` ceiling;
- peak remains inside the old static reserved proxy footprint;
- central path unblocked;
- no peak minimum-spacing conflicts;
- both fixed cameras retained;
- Weather remains visual-only.

The four retained PNGs were directly inspected. Within this proof-material scene:

- `path_eye` keeps the central route dominant; the sapling is peripheral/cropped, so this view is weak evidence for local motion quality but does not expose a new VFX-specific scene failure;
- `elevated_oblique` shows the whole sapling and a visible neutral/peak change without introducing an obvious new scene-level break;
- the already-known large east foreground Nature proxy remains the dominant oblique hierarchy problem.

Therefore VFX did **not** retune the accepted sapling response again. Art Director / Visual Observer still own scene-motion perceptual acceptance.

## Highest-leverage distinct VFX gap selected

After the duplicate motion lane was closed, the strongest unoccupied VFX gap was the source-owned Weather field.

Before this pass, the studio had:

1. exact source-space Weather evidence at only `0.0 / 0.25 / 0.5 s`;
2. one static Environment receiving state at `0.50 s`;
3. a Runtime static batching proof showing the 36 streaks are one additional draw surface.

It did **not** have a denser retained target-host sequence showing the same source-owned Weather field moving through its already-authored no-wrap time window while every non-Weather Environment input stayed fixed.

That is a VFX/Atmosphere gap, not a new physical weather system and not a Runtime optimization task.

## New bounded implementation

Repository:

`mike-axiom-mir/axm-map-design`

Draft PR:

**`#7 — VFX: prove sampled Weather motion in the Environment scene`**

Branch:

`studio/vfx-weather-scene-sequence-001`

Stacked exact Environment base:

`8f81c57d9169dc9faba0cb01b85f17dff92bad6f`

Exact final VFX head:

`10f1152b73240d0755bb14fa1c7744da3c544355`

PR state at status write:

**DRAFT / OPEN / MERGEABLE**

Added only VFX receiving/evidence files:

- `tools/environment_weather_sequence.py`;
- `tests/test_environment_weather_sequence.py`;
- `docs/ENVIRONMENT_WEATHER_SEQUENCE_001.md`;
- `.github/workflows/vfx-environment-weather-sequence.yml`.

No existing Environment renderer, authored composition, source repo, Weather generator, Nature source, Materials lane, Runtime lane or UC code was modified.

## Sequence contract

New evidence contract:

`axm.environment-weather-sequence-proof/v0.1`

Exact Weather dependency:

- repo `mike-axiom-mir/axm-weather-design`;
- PR `#2`;
- exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- source digest `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`;
- source visual wind `[1.0, 0.35]`;
- source visual speed `1.8 m/s`;
- semantics `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`;
- source-authored proof window `0.0–0.5 s`.

The new sampling schedule is deliberately **evidence-only**:

`0.0000 / 0.0625 / 0.1250 / 0.1875 / 0.2500 / 0.3125 / 0.3750 / 0.4375 / 0.5000 s`

These extra intermediate times do not become new Weather source semantics. They are observations inside the already-authored no-wrap window.

For all nine states the tool requires:

- existing Environment source integration PASS;
- existing Weather source evaluator PASS;
- exact Weather head/digest;
- visual-only semantics unchanged;
- all 36 streak IDs and order retained;
- all nine field digests materially distinct;
- every line endpoint inside the exact `24 m × 18 m` source extent;
- adjacent displacement projected onto the exact visual-wind direction matches the exact source visual speed;
- adjacent crosswind drift remains at floating-point-zero tolerance;
- seed-29 Environment items remain unchanged;
- neutral sapling remains unchanged;
- readable path remains unchanged;
- `path_eye` and `elevated_oblique` remain unchanged;
- the existing proof-only Weather presentation remains unchanged.

Every sample is then rendered through the **existing Environment `observe.gd` Godot 4.7.2 GL Compatibility host**. VFX did not build a second scene renderer merely to own the evidence.

## Exact final evidence

Dedicated workflow:

`VFX Environment Weather sequence evidence`

Exact final run:

**`35056735296 — SUCCESS`**

Same-head neighboring workflows:

- Environment composition baseline `35056735295` — SUCCESS;
- Procedural environment variation `35056735294` — SUCCESS.

Retained artifact:

- ID **`10431375080`**;
- name `environment-weather-sequence-001-10f1152b73240d0755bb14fa1c7744da3c544355`;
- size `1,028,562` bytes;
- archive digest **`sha256:34bdce487e9b8a2512294e40d73b27bb7eb3f28df1138c0c2d954fa39ac8330e`**;
- exact head binding `10f1152b73240d0755bb14fa1c7744da3c544355`;
- sequence digest **`773492e0fad91f6f0e9a528f5504f787a8526ea1f27b24d17824851facf6c5ad`**.

The retained ZIP was downloaded and independently rehashed; local SHA-256 exactly matches the Actions artifact digest.

Retained sequence measurements:

- all 12 contract checks: PASS;
- nine sampled fields: all exact digests distinct;
- 36/36 streak identities retained in every state;
- maximum adjacent projected-displacement error: **`1.2212453270876722e-15 m`**;
- maximum adjacent crosswind residual: **`7.563394355258879e-16 m`**;
- all sampled endpoints remain inside the source scene extent;
- non-Weather receiving-scene digest remains fixed across all states.

Retained target-host evidence includes:

- `weather_sequence.json`;
- nine exact scene payloads;
- nine exact Godot runtime receipts;
- **18 PNGs** — both fixed Environment cameras for all nine samples;
- render-evidence receipt with nine unique image hashes for each camera.

Result:

`PASS_NINE_DISTINCT_TARGET_HOST_SAMPLED_STATES`

## Direct retained visual inspection

The 18 exact PNGs were downloaded and inspected as ordered nine-frame comparisons for each camera.

Observed within this sampled, proof-material scope:

- the streak field visibly advances in a consistent downwind direction across the ordered samples;
- streak orientation remains stable; no sampled flip or source-identity jump is visible;
- the visual field stays sparse rather than accumulating or wrapping in the 0.5 s window;
- `path_eye` keeps the central route visually legible throughout the sampled sequence;
- `elevated_oblique` retains the same overall hierarchy, including the already-known dominance of the large east foreground Nature proxy;
- no other scene body visibly moves because the non-Weather scene state is intentionally frozen.

This is direct VFX observation of exact retained evidence, **not** Art Director or Visual Observer acceptance of final atmosphere quality.

## Retained failure / repair history

Initial workflow run:

`35056656966 — FAILURE`

The failure happened before sequence generation because `_motion_metrics` looked for `weather_lines` directly on the sample wrapper instead of under its exact `scene` payload.

That was an implementation/evidence-access defect, not a Weather failure. Final head `10f115...` changed only that access path:

`sample -> scene -> weather_lines`

The Weather source, Environment scene, nine-sample schedule, visual-speed contract and truth boundary were **not** weakened or changed to obtain PASS.

The failed run remains in Actions history.

## Scoped VFX result

**`PASS_SAMPLED_WEATHER_RECEIVING_SEQUENCE / HOLD_CONTINUOUS_PLAYBACK_RUNTIME_AND_ART_DIRECTION`**

What is now established:

- the exact source-owned Weather field can be deterministically sampled at nine states inside its existing authored no-wrap time window;
- particle/streak identity and order stay stable;
- sampled displacement follows the exact authored visual direction/speed contract;
- no sampled endpoint leaves the bounded source scene extent;
- all non-Weather Environment state remains fixed;
- all nine samples render successfully through both existing fixed Environment cameras in pinned Godot 4.7.2;
- every retained target-host sample is visually distinct by exact image digest.

What remains explicitly unproven:

- continuous live playback or interpolation quality between samples;
- a same-process changing-mesh/particle update path;
- dynamic update cost, frame time, target FPS, memory churn or draw-call behavior while changing;
- physical wind speed, force, drag, pressure, turbulence or aerodynamic coupling;
- precipitation, volumetric fog/clouds/smoke or wetness;
- gameplay, collision, damage, visibility mechanics or simulation authority;
- final material/lighting/transparency/overdraw quality;
- final Environment hierarchy or atmosphere balance;
- Art Director / independent Visual Observer acceptance;
- UC/general VFX abstraction;
- CANON, production readiness or VFX mastery.

## Why this does not become a generic particle system

This pass proves one source-owned Weather representation surviving a denser receiving-scene sample sequence. It does not yet prove that Nature sway, Weather streak translation, mechanical trails, impacts, smoke or other future effects share one useful mutation/update engine.

The correct reuse signal at this point is procedural/evidence discipline:

- exact source identity;
- explicit visual-only semantics;
- bounded time window;
- stable element identity;
- deterministic sampling;
- receiving-scene state isolation;
- retained target-host evidence;
- explicit separation of visual proof from physics/gameplay/runtime claims.

No UC move is justified from this one Weather sequence.

## Root gate

- **Truth:** the duplicate PR #6 was closed when concurrent repository evidence made it redundant; the failed first Weather-sequence run remains visible; exact heads, digests, sample schedule and non-claims are retained; sampled renderability is not relabelled live playback.
- **Agency / non-domination:** Weather owns source atmosphere semantics, Map/Environment owns composition and cameras, Runtime owns cost, Art Direction/Visual QA own perceptual acceptance, and VFX changes only this bounded receiving evidence lane.
- **Continuity:** source Weather PR #2 and Procedural PR #3 remain untouched; Environment PR #4 remains the base; existing renderer/cameras are reused; closed duplicate work is retained for provenance rather than silently erased.
- **Wisdom before speed:** after discovering the neutral/peak gap was already solved, VFX moved to one distinct measured Weather gap instead of merging competing implementations, adding turbulence/particles/volumetrics, or inventing a generic dynamic-effects framework.

## Handoffs

- **3D Art Director / Visual Observer:** inspect PR #7 retained nine-state camera sequences for atmosphere balance, streak readability and any sampled visual discontinuity. Do not infer final-quality acceptance from unique hashes or source-space motion math.
- **Environment / World Art:** PR #7 preserves PR #4 scene state exactly; no composition move is requested. The large east foreground Nature proxy remains a separate hierarchy issue.
- **Weather / Procedural Design:** source Weather PR #2 and seeded PR #3 remain authoritative. The nine intermediate times are receiving evidence only, not a new source-family definition.
- **Runtime / Optimization:** if the studio wants actual moving Weather in the target host, the next useful Runtime gate is a **same-process changing-field implementation** measured for update/frame cost while preserving the existing one-surface batching property. Do not infer dynamic cost from these nine fresh-process captures.
- **Nature / VFX:** keep the accepted sapling hierarchy stable unless Art Director/QA scene evidence names a new defect. Do not retune it merely because a VFX specialist lane is active.
- **Materials / LookDev:** this sequence retains proof materials. Any shaded/transparency Weather or combined moving-sapling LookDev needs its own controlled A/B.
- **Technical Art / UC / Capability Cartography:** record the repeated exact-source/bounded-sampling/receiving-host evidence shape if useful, but do not centralize a generic effect engine from one Weather family.

## Next VFX / Atmosphere pass

Read new Art Director / Visual Observer reviews of:

1. Environment neutral/peak sapling scene motion;
2. PR #7 nine-sample Weather receiving sequence.

If either yields a precise visible defect, repair that same owning lane with retained before/after evidence.

If both are visually accepted, the next VFX step should be a **materially different** grounded effect primitive — for example a real source-owned impact/trail/reactive cue only where a current weapon/object/mechanical candidate provides an explicit need — rather than adding more samples to Weather or generalizing prematurely.
