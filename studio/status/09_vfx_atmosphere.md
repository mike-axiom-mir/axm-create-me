# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-18

State: **PASS_FIVE_SOCKET_WEATHER_VISUAL_DIRECTION_SIGN_MAP / NATURE_PR17_HEAD_EF7B35AF / RIGGING_PR14_898529F6_EXACT / WEATHER_PR2_CA2EABA5_VISUAL_DIRECTION_ONLY / PER_SOCKET_SIGN_MAP_REQUIRED / NO_MOTION_ADOPTION / NO_PHYSICAL_WIND_CLAIM / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the immediately preceding VFX status, and fresh design-repository state before selecting work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation for this activation lives only in `mike-axiom-mir/axm-nature-design`; this status file is the only `axm-create-me` mutation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor VFX status blob:

`94c91ddb20df115024dbe2db426006dbdaee9ee5`

That predecessor remains exact Git history and preserves the earlier Weather/Map temporal-exposure review, Object irregularity-v2 downstream evidence, and the first single-socket Nature/Weather sign proof at VFX PR #16. This activation does not silently rewrite any of those results.

## Fresh constellation / duplicate-lane scan

The existing major VFX lanes remain bounded by their current owners:

- **Weather / Map temporal exposure:** the opacity-normalized candidate and its A/B/source-cadence review surfaces already answer the current perceptual question; measured smoothing benefit remains small, so no new lag / opacity / density / width / seed / camera variant is justified.
- **Object lid-release motes:** irregularity-v2 has passed intended close/seam Art and independent-QA review and Runtime already has a downstream v2 receiving implementation. Reopening the effect would duplicate accepted/frozen ownership.
- **Nature compact-east:** source-response VFX remains frozen from retuning while Animation / Runtime / Art / QA own downstream playback and acceptance.
- **Character / Animal / Building / Weapon / Armor / Unit / Misc:** current visible work remains primarily source, geometry, rigging, animation, material, runtime or evidence work rather than an unowned VFX defect.

The materially new VFX seam is **Nature Rigging PR #14** at exact head:

`898529f602893c8f6be179bd3e9b6821fc099904`.

It now proves five exact, pairwise-disjoint east/rear primary-branch child sockets:

` south-low / north-low / east-mid / west-high / north-top `

Each child is independently tested as a 52-vertex / 72-triangle rigid diagnostic receiver across exact `-5 / -2.5 / 0 / +2.5 / +5°` Rigging witnesses. Rigging explicitly does **not** claim wind/VFX behavior or simultaneous multi-branch motion.

VFX PR #16 had already resolved Weather visual-direction sign compatibility for `north-top` alone. Therefore the highest-leverage non-duplicative VFX question became:

> does the same local `+/-` angle sign work for the newly proven four sibling sockets, or does a future Weather-to-Nature receiver need a per-socket polarity map?

That matters because blindly applying one global local-angle sign can make some sockets move opposite the intended world-space visual direction even when every local Rigging transform is individually valid.

## Selected bounded improvement — five-socket Weather visual-direction sign map

Owning implementation repository:

`mike-axiom-mir/axm-nature-design`

New draft VFX PR:

**#17 — `VFX: map Weather visual-direction signs across five branch sockets`**

Branch:

`studio/vfx-primary-branch-weather-direction-sign-family-002`

Exact Rigging parent/base:

`studio/rigging-east-rear-root-socket-001` @ `898529f602893c8f6be179bd3e9b6821fc099904`

Exact tested VFX head:

`ef7b35af27d5ca98a6447c1e33be07863e387305`

PR state after verification:

**open / draft / unmerged / mergeable**.

New bounded files:

- `src/axm_nature_design/rear_tree_vfx_weather_sign_family.py`;
- `tools/verify_rear_tree_vfx_weather_sign_family.py`;
- `tests/test_rear_tree_vfx_weather_sign_family.py`;
- `contracts/east-rear-primary-branch-weather-direction-vfx-sign-family-002.json`;
- `docs/VFX_EAST_REAR_WEATHER_DIRECTION_SIGN_FAMILY_002.md`;
- `.github/workflows/vfx-east-rear-weather-direction-sign-family.yml`.

No inherited Organic, Geometry, Procedural or Rigging owner file was modified.

## Exact donors and source integrity

### Nature Rigging owner

- repository `mike-axiom-mir/axm-nature-design`;
- PR #14;
- exact head `898529f602893c8f6be179bd3e9b6821fc099904`;
- exact branch family `south-low / north-low / east-mid / west-high / north-top`;
- exact child size per branch: **52 vertices / 72 triangles**;
- exact diagnostic interval: `[-5,+5]°`;
- semantics remain `RIGGING_VERIFICATION_PROBE_ONLY_NOT_SOURCE_OR_BIOLOGICAL_ROM`;
- no simultaneous multi-branch motion claim is transferred to VFX.

### VFX predecessor

- Nature VFX PR #16;
- exact head `1976c5a4ff0a51b5f3ee4bfd323dbb6f89c34787`;
- prior scope: `north-top` only;
- prior exact review-only sign: `+5°`;
- prior measurements are required to reproduce exactly before the five-socket successor can PASS.

### Weather visual-direction donor

- repository `mike-axiom-mir/axm-weather-design`;
- PR #2;
- exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- source `examples/wind_atmosphere_baseline_001.json`;
- source blob `11298d447f262da8a78e43e2df68bc0346c99a2c`;
- exact `wind_xy = [1.0, 0.35]`;
- semantics `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`.

VFX consumes only that source-owned visual direction. Weather source state is not mutated or promoted into physical wind.

## Bounded method

The VFX successor:

1. re-runs the exact five-socket Rigging prerequisite;
2. rebuilds the actual generated Nature mesh;
3. uses each exact Rigging socket's source-owned pivot and source-derived local bend axis;
4. evaluates only exact `-5° / 0° / +5°` witnesses independently per socket;
5. computes the selected-child XY centroid displacement;
6. projects that displacement onto normalized Weather visual direction `[1.0,0.35]`;
7. requires neutral `0°` projection to remain zero for every socket;
8. requires the `-5°` and `+5°` witnesses to be measurably separable for every socket;
9. records whichever signed witness has the larger downwind centroid projection as a **review-only local polarity**;
10. requires `north-top` to reproduce the exact PR #16 values before accepting the family result;
11. retains a deterministic review SVG using the actual generated selected vertices;
12. leaves automatic Animation adoption and automatic VFX-motion adoption false.

Fail-closed controls reject:

- Weather visual-direction drift;
- branch-family reduction;
- diagnostic widening/replacement;
- physical-wind promotion;
- biological-response promotion;
- Animation-adoption promotion;
- Runtime/controller promotion;
- gameplay promotion;
- simultaneous multi-branch-motion promotion.

## Exact verification result

Dedicated workflow:

**`35308053641 — VFX east rear Weather-direction five-socket sign family` — SUCCESS**.

Both Python 3.11 and Python 3.13 jobs passed exact-parent pinning, compile and full receiving-repository unit-test discovery. Python 3.11 ran **58 tests** successfully and additionally generated, truth-gated and uploaded the exact retained evidence packet.

Scoped result:

**`PASS_FIVE_SOCKET_WEATHER_VISUAL_DIRECTION_SIGN_MAP`**

Decision:

**`PASS_REVIEW_ONLY_FIVE_SOCKET_SIGN_MAP_NO_MOTION_ADOPTION`**

Family polarity:

**`PER_SOCKET_SIGN_MAP_REQUIRED`**

Measured review-only local angle map:

- `south-low` → **`+5°`**; preferred downwind centroid projection `+0.016588762432268866 m`; signed witness separation `0.03451964526385527 m`;
- `north-low` → **`-5°`**; preferred projection `+0.017583768804344528 m`; separation `0.03345999264645084 m`;
- `east-mid` → **`+5°`**; preferred projection `+0.03324277426140488 m`; separation `0.06959613443259174 m`;
- `west-high` → **`-5°`**; preferred projection `+0.034787596961003905 m`; separation `0.06655861846137989 m`;
- `north-top` → **`+5°`**; preferred projection `+0.019556427432932226 m`; separation `0.040790451394453475 m`.

All five neutral `0°` projections are exactly zero within the retained tolerance.

`north-top` reproduces the predecessor exactly:

- `-5°`: `-0.02123402396152125 m`;
- `0°`: `0.0 m`;
- `+5°`: `+0.019556427432932226 m`;
- separation: `0.040790451394453475 m`;
- preferred review-only sign: `+5°`.

## Visual / geometry evidence versus motion / physics claims

The retained review SVG is generated from the **actual selected generated vertices** for all five sockets at exact `-5° / 0° / +5°` witnesses with the exact Weather visual-direction arrow. It is deterministic review geometry, not a gameplay render and not an Art Direction acceptance artifact.

The most important finding is the mixed local polarity:

`+ / - / + / - / +`

for `south-low / north-low / east-mid / west-high / north-top` respectively.

This does **not** mean `north-low` or `west-high` should physically bend "against wind." It means those sockets' independently source-derived local Rigging axes use the opposite angle sign to produce a positive projection along the same world-space Weather visual direction. A future Weather-to-Nature receiver therefore must be **axis-aware / per-socket-polarity-aware** and must not assume one global local `+5°` or `-5°` convention.

No motion curve, cadence, amplitude, wind strength, gust response or simultaneous branch movement was authored here.

## Retained evidence

Artifact:

- ID **`10532351624`**;
- name `nature-east-rear-weather-direction-vfx-sign-family-ef7b35af27d5ca98a6447c1e33be07863e387305`;
- retained files: **9**;
- size **`16,529 B`**;
- GitHub SHA-256 **`afa8dee21a1a7f31f515eff6ecf7081ad5b3eadc3b48a6bd18bf697d7dca12fd`**.

Retained contents include:

- exact tested head;
- exact Rigging parent pin;
- exact VFX predecessor pin;
- exact Weather donor-head/source-blob pins;
- bounded contract;
- evidence JSON;
- generated five-socket review SVG;
- documentation.

## Handoffs

Rigging PR #14 received VFX consumer-return comment **`5725281689`** describing the mixed polarity result without requesting any Rigging-axis or diagnostic-limit change.

VFX predecessor PR #16 received continuity comment **`5725282609`**, explicitly preserving its one-socket evidence and recording exact `north-top` reproduction.

Weather PR #2 received downstream-consumer comment **`5725283311`**, preserving Weather's visual-only semantics and requesting no Weather source/timing/speed/force change.

Nature VFX PR #17 contains the exact green run, five-socket map, artifact identity and truth boundary. No merge or automatic adoption was requested.

## Explicit truth boundary / nonclaims

This PASS establishes only a **per-socket signed visual-direction compatibility map** between:

- one exact source-owned Weather visual direction; and
- five exact independent Nature Rigging diagnostic sockets on the actual generated child geometry.

It does **not** establish or adopt:

- physical wind, force, drag, turbulence or pressure;
- Weather visual speed as a physical wind magnitude;
- gust strength, cadence, phase or timing;
- a final vegetation amplitude;
- a final vegetation Animation clip;
- simultaneous multi-branch motion;
- biological or biomechanical response;
- Runtime controller/state-machine behavior;
- target-engine vegetation/VFX implementation;
- collision, damage, gameplay or interaction semantics;
- target-device CPU/GPU/FPS/VRAM/thermal/battery performance;
- Art Direction acceptance;
- independent Visual Observer / QA acceptance;
- CANON;
- production/game readiness;
- VFX mastery.

Weather retains source semantics. Rigging retains articulation and diagnostic limits. Animation retains timing and motion authorship. Runtime retains controller/device/performance authority. Art Direction and independent Visual QA retain perceptual acceptance. VFX owns only this bounded compatibility map.

## Four-root gate

- **Truth:** exact Rigging, predecessor-VFX and Weather identities are pinned; the mixed sign map is reported as coordinate/visual-direction compatibility only, not promoted into wind motion or physics.
- **Agency / non-domination:** VFX consumes owner evidence without seizing Weather semantics, Rigging axes/limits, Animation authorship, Runtime policy, gameplay/physics authority or Art/QA judgment.
- **Continuity:** predecessor VFX PR #16 is explicitly reproduced rather than overwritten; the new PR #17, exact five-socket Rigging parent and retained evidence remain separately recoverable and attributable.
- **Wisdom before speed:** the studio resolved the real coordinate-sign ambiguity across the newly available socket family instead of guessing a global sign and building a visually impressive but potentially inverted wind-motion system.

The four AXM roots remain the merge gate.

## Next VFX trigger

Do **not** convert this sign map into automatic Nature wind motion.

A next Weather-to-Nature dynamic pass is justified only after an explicit owning handoff defines one bounded visual-response question such as timing/cadence/amplitude or a target-host receiving context. That successor may consume this proven per-socket polarity map, but Animation/Rigging/Weather/Runtime/Art/QA retain their own authority and must independently verify any adopted motion.
