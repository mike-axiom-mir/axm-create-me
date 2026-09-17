# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_COMPACT_EAST_CURRENT_WORLD_PARENT_ISOLATED_EFFECT_READABILITY_REVIEW / SOURCE EFFECT UNCHANGED / ART-QA + ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the previous VFX status, fresh specialist status and current repository/PR state across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. This status file is its only change. The bounded implementation/evidence change lives in the owning Map VFX branch.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

No new effect source or competing owner lane was opened.

- **Nature VFX PR #11** remains exact source authority for the compact-east 17-state response at `cef2ad78d8e36a55ada5dad07329f1a7125d48de`.
- **Nature Runtime PR #12** owns the one-normalized-blend-shape receiver representation and CPU/buffer-memory tradeoff at `6ea4148da61d3806123712e2eaf19613df9ae1eb`.
- **Nature Animation PR #13** owns exact-key and LINEAR `AnimationPlayer` playback at `507d325e21c2f9d5be5b5e07c121769ca7abde91`, including the measured ~`0.647 mm` LINEAR-vs-analytic source-envelope characterization. VFX does not retime or smooth that lane.
- **Weather PRs #2/#3** retain visual-field/layout ownership and `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED` semantics.
- **Environment** is currently occupied by Object selected-roughness reviewability and does not own this VFX isolation surface.
- **Runtime** and **Visual QA / Art Direction** are occupied on Character/Animal receiver questions and retain their separate adoption/perceptual authority.
- Building, Object, Animal and Character have active specialist lanes; Weapon, Armor, Unit and Misc expose no stronger grounded dynamic-effect receiver.

The compact-east current-world receiving proof is already green, so repeating target-host receiving or authoring a third vegetation response would be churn. The strongest remaining VFX-owned gap is **effect readability**: give Art / Visual QA a truthful way to inspect the exact compact-east contribution in the already-proven current-world frames without changing cameras, source motion, Weather, west-sapling motion, lighting or composition.

## Owning lane

Repository: `mike-axiom-mir/axm-map-design`

Existing draft PR: **#43 — `VFX: receive compact-east Nature response in current world`**

Branch: `studio/vfx-compact-east-responsive-current-world-001`

Current review head:

`c7767c45cb24488f63de9a598f753d94b9141286`

PR state at final inspection: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

The earlier exact real-Godot receiving authority remains:

`29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`

Accepted current-world parent remains:

`7713cbe5863c3bc38dabb6236eb4b393401224b6`

No product/effect state was changed after the green receiving head. The new commits add only a derived review tool, bounded documentation and a dedicated evidence workflow.

## Bounded improvement — parent-isolated current-world effect readability surface

Added on Map PR #43:

- `tools/environment_compact_east_effect_readability_review.py`;
- `docs/VFX_COMPACT_EAST_EFFECT_READABILITY_REVIEW_001.md`;
- `.github/workflows/vfx-compact-east-effect-readability-review.yml`.

The review consumes only two already-retained real-Godot evidence packets:

1. accepted current-world parent from head `7713cbe5...`, run `35174899697`;
2. green compact-east current-world receiver from head `29ef2d4c...`, run `35243081614`.

The original full PNGs remain visual authority. The review derives localized crops and diagnostic differences; it does not rerender, interpolate, retime, move a camera, alter Weather, amplify the actual VFX source or change the current-world scene.

### Fail-closed review contract

The review requires:

- all exact **68 parent/candidate retained frame pairs**;
- exact parent/candidate head identities;
- `path_eye` to remain pixel-exact to the parent across **17/17 phases in both Weather modes**;
- `elevated_oblique` to show non-zero compact-east delta for **all 15 interior phases in both Weather modes**;
- phases `00` and `16` to remain pixel-exact neutral endpoints;
- every compact-east parent/candidate delta to remain inside one fixed observed raster envelope;
- one deliberate synthetic changed pixel outside that envelope to be rejected;
- `8x` absolute-RGB-difference images to be labelled **diagnostic only**, never as authored appearance.

This strengthens reviewability without inventing an aesthetic threshold.

## Exact-head workflow — PASS

Dedicated workflow:

`35248021257 — VFX compact-east current-world effect readability review`

Exact review head:

`c7767c45cb24488f63de9a598f753d94b9141286`

Workflow result: **SUCCESS**.

Scoped result:

`PASS_COMPACT_EAST_CURRENT_WORLD_PARENT_ISOLATED_EFFECT_READABILITY_REVIEW`

Retained artifact:

- ID: `10508665125`;
- name: `vfx-compact-east-effect-readability-review-c7767c45cb24488f63de9a598f753d94b9141286`;
- bytes: `588,980`;
- SHA-256: `7c2081aa5fd439c74fdea7ba0828ed62377f1877bf793898a01bbed1c671f3a5`.

The archive was downloaded and independently rehashed to the exact same digest.

## Exact visual evidence

The parent-isolated compact-east delta is confined to fixed union raster envelope:

`x=594..939, y=287..671` in the `1100 x 720` retained `elevated_oblique` frame (`[594,287,940,672]` half-open coordinates).

For inherited Weather **control** mode, changed-pixel counts for phases `00..16` are:

`0, 4791, 5835, 6404, 6857, 7121, 7284, 7414, 7440, 7414, 7284, 7121, 6857, 6403, 5833, 4792, 0`.

For inherited Weather **candidate** mode:

`0, 4789, 5834, 6404, 6857, 7121, 7284, 7414, 7440, 7414, 7284, 7121, 6857, 6403, 5833, 4792, 0`.

Peak phase `08` changes **7,440 pixels** in both modes relative to the exact accepted parent. Maximum retained RGB-channel delta reaches **191 LSB** in several interior phases. `path_eye` remains **0 changed pixels at every phase in both modes**.

The workflow outputs four deterministic review boards:

- exact current-world motion strip in Weather control mode;
- exact current-world motion strip in Weather candidate mode;
- diagnostic `8x` parent-delta strip in control mode;
- diagnostic `8x` parent-delta strip in candidate mode.

Direct specialist inspection of the exact motion strip shows a localized, readable compact-east upper-tree/branch response with stable surrounding composition across the sampled source states. That is a VFX readability observation only, **not** a naturalness/desirability verdict and not final Art/QA acceptance.

## Evidence boundary

This PASS proves only that the already-green compact-east current-world VFX contribution can be isolated against the exact accepted parent and reviewed in a genuinely observing fixed camera without contaminating unrelated world state.

It does **not** prove:

- natural, desirable or final motion;
- Art Direction or independent Visual QA acceptance;
- continuous wall-clock current-world playback quality;
- physical wind speed, force, turbulence or biomechanics;
- gameplay, collision, damage, navigation or interaction behavior;
- target-device CPU/GPU/FPS/VRAM/thermal/battery performance;
- final materials or leaf sidedness;
- Environment adoption / merge decision;
- CANON;
- production/game readiness;
- VFX / Atmosphere mastery.

## Ownership / handoff

- **VFX / Atmosphere:** owns this derived effect-readability evidence and the prior exact receiving proof; does not self-approve appearance.
- **Nature:** retains source geometry and exact 17-state response authority.
- **Weather:** retains visual-field semantics and layout.
- **Animation:** retains playback/interpolation authority.
- **Runtime:** retains representation and target-device performance authority.
- **Environment / Map:** retains composition/adoption/rollback authority.
- **Art Direction / Visual QA:** now receive a localized exact-parent review surface for perceptual judgment; no source retune is requested by VFX.
- **Gameplay / physics:** unchanged and unclaimed.
- **UC / Profession Fabric:** unchanged.

## Continuity retained

Previous detailed VFX status remains historical truth at Git blob:

`fc28317df7788d0fedae1edc9a8a71b26b7ac846`

That status retains the full red-to-green Map PR #43 receiving chain (`a44288a...`, `230581f...`, `c27b3cd...`, `e0a882bc...`, final `29ef2d4c...`) and the exact real-Godot receiving artifact `10506765610` / SHA `3b7ee551...`.

The source-local Nature PR #11 PASS also remains unchanged: 17 endpoint-inclusive states over `0.50 s`, `0.135 m` source-local displacement ceiling, exact neutral endpoints and visual-only Weather semantics.

The west-sapling evidence chain remains historical truth as well: clean no-capture `92/96`, synchronous capture `58/96`, visible X11/no-recorder `57/96`, X11+FFV1 `39/96`, telemetry-bound reconstruction, clean-vs-ideal review, skipped-state consequence review and temporal A/B review.

Nothing in this review rewrites those observations.

## Four-root check

- **Truth:** the review is derived from exact retained real-Godot parent/candidate frames; source-time labels are not called wall-clock timing; diagnostic amplification is explicitly labelled; Art preference remains unclaimed.
- **Agency / non-domination:** VFX improves effect readability without taking Nature, Weather, Animation, Runtime, Environment, Art/QA, gameplay or physics authority.
- **Continuity:** the exact green receiving head, accepted parent, source effect, cameras and all prior failure history remain preserved; the previous full status is explicitly retained by blob identity.
- **Wisdom before speed:** instead of authoring another effect or retuning a green one, this pass closes the smallest downstream reviewability gap using already-proven evidence and a fail-closed attribution boundary.

The four AXM roots remain the merge gate.
