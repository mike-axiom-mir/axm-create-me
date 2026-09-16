# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE + PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST / EXACT WEATHER WIDTH PRESENTATION PROVED IN TWO FIXED CAMERAS / FIVE NEAR-PLANE ENDPOINT CLIPS EXPLICIT / FINAL ART + ARBITRARY-CAMERA + PHYSICAL-WEATHER + GAMEPLAY + TARGET-DEVICE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, current specialist status, open constellation work, current Map VFX work and Weather source evidence before selecting the next bounded VFX improvement.

The highest-leverage non-duplicated lane was the already-open Map **PR #25 — `VFX: carry source-authored Weather width into current-world proof`**. Its structural source binding was already truthful, but the real Godot target-host proof was failing. Opening a new particle, impact, fog or reactive-effect lane would have left a known receiving gap unresolved and would have overlapped other specialists' current work.

`axm-create-me` remains coordination-only. Product/evidence changes stay in `mike-axiom-mir/axm-map-design`; Weather semantic/source authority remains in `mike-axiom-mir/axm-weather-design`. No Universal Creation or Profession Fabric extraction was introduced.

## Constellation / duplication scan

- **Map VFX PR #25** already owns source-authored Weather width receiving, so this activation repaired that exact lane rather than creating a parallel atmosphere branch.
- **Map Environment / Materials / Runtime / Visual QA** currently own the Building five-surface world-integration hierarchy and submission-cost questions; VFX did not alter those surfaces, lighting decisions or performance policy.
- **Weather PR #3** remains the source-local seeded visual-field/width authority. VFX consumes the exact retained source identity rather than copying generator semantics into Map.
- **Nature** retains geometry/material/sidedness ownership; no new vegetation deformation rule was introduced.
- **Object / Character / Animal / Building** did not expose a stronger grounded reactive-event surface that outweighed fixing the known real-host Weather failure.
- No repeated cross-domain evidence currently justifies moving this camera-projection receiving method into UC or Profession Fabric.

## Bounded improvement selected

Owning repository: `mike-axiom-mir/axm-map-design`

Existing draft PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Branch: `studio/vfx-weather-source-width-current-world-001`

Exact base / parent VFX head:

`e482d003853e52fc835f1797ddfb6506a50083ef`

Exact final tested head:

`15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`

PR state after this activation: **OPEN / DRAFT / MERGEABLE**.

Exact Weather variation source identity remains:

`05b26c4e82bbe0a4de0ee7bee34179efc58b9719`

Selected source-owned seed remains:

`44021`

Exact retained particle-layout digest remains:

`7ed55e93ea9445345016685320716006bc52960b33784cb620ca5670a74cc26f`

All **36** source-authored streak widths remain source-owned and are bound by exact streak identity/order. Their authored range remains approximately **1.024–2.386 px** inside the source contract's `1.0..2.4 px` bound.

## Failure diagnosis preserved

The previous target-host failure was not hidden or re-labelled as success.

At earlier PR head `9cbdfdf8e0d96199c717a66355ea298216647ee5`, the structural binding passed but the Godot observer failed before a valid live receipt/frame set existed.

This activation first repaired evidence retention on head:

`8fa3383d21ff76b714d5a026d2f29487873c444d`

The workflow now preserves Godot stdout/stderr and any partial runtime receipt even when the real-host stage fails. Exact retained diagnostics then exposed a parser failure in the projection observer rather than leaving the failure opaque.

After explicit projection-variable types repaired that parser issue at head:

`c01c9e35499b68d413c5a4cc048bc91332290be7`

the real host progressed far enough to expose the actual geometry boundary:

`wind-streak-001` crossed the fixed `path_eye` camera near plane in the first retained state. Godot correctly rejected the previous attempt to project the behind-near-plane endpoint.

The final receiving repair does **not** discard that source streak. A crossing endpoint is clipped to `camera.near + 0.001 m` before constructing the fixed-screen-width ribbon, and the clip is recorded in the runtime receipt. A streak fully behind the near plane still fails closed.

## Structural proof

Scoped structural result:

**`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE`**

The exact receiving path still proves:

- exact parent VFX identity `e482d003...`;
- exact Weather variation head, seed `44021` and retained layout digest;
- all **17** inherited current-world states;
- all **36** source streak identities at every state;
- all non-width Weather line fields preserved;
- the same Weather-field and sapling sequence identities;
- source widths retained unchanged and materially non-uniform;
- no Weather generator/source rewrite.

## Real target-host proof

Scoped target-host result:

**`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`**

Dedicated exact-head workflow:

**`35104171193 — VFX current-world Weather source-width target-host evidence: SUCCESS`**

Target host:

**Godot 4.7.2 GL Compatibility**

Measured exact scope:

- **17 states**;
- **2 fixed 1100×720 cameras**: `path_eye` and `elevated_oblique`;
- **36 source widths per state/camera**;
- **1,224 live projected-width measurements**;
- maximum projected-width residual: **`0.00974698571769128 px`**;
- acceptance bound: **`0.05 px`**;
- **68 retained A/B PNGs**: 34 inherited line-control frames + 34 source-width ribbon frames;
- all control/candidate frame pairs differ by bytes;
- Weather and sapling resource identities remain stable through the sequence;
- inherited rear-tree `CULL_BACK` review state remains preserved.

Observed renderer submission counters remain stable within each presentation mode/camera. The candidate adds triangle geometry for the screen-width ribbons, so primitive counts differ from the inherited line control; that observation is not a target-device performance verdict.

### Explicit near-plane boundary

The exact runtime receipt records **5 clipped endpoints**, all in the `path_eye` camera:

- `wind-streak-001`: **2** clipped endpoint occurrences;
- `wind-streak-005`: **3** clipped endpoint occurrences.

No source streak is silently dropped. The clipping is a receiving-camera boundary needed to represent the renderer-visible portion of a source line that crosses the camera near plane. This result must not be broadened to arbitrary camera positions or resolutions.

## Retained evidence / provenance

Successful exact artifact:

- ID: **`10449666486`**;
- name: `environment-weather-source-width-current-world-001-15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`;
- size: **7,745,715 bytes**;
- GitHub archive SHA-256: **`c1143322dc974ad21cff4e3baa53697cc4a58fc42caf55627077703f131011b5`**;
- independently downloaded/rehashed SHA-256: **`c1143322dc974ad21cff4e3baa53697cc4a58fc42caf55627077703f131011b5`**.

The retained package includes exact structural payload, exact-head receipt, Godot log, runtime receipt, target-host verification receipt and all 68 control/candidate frames.

The earlier failed exact-head artifacts remain historical evidence rather than being silently replaced. In particular, the retained `c01c9e...` artifact captured the exact near-plane failure and the partial control frame/runtime receipt that led to the bounded repair.

## Direct visual observation

All **34 matched control/candidate camera-state pairs** were compared from the successful retained artifact.

The source-width change is visible but tightly localized in this proof world:

- mean changed-pixel coverage across all matched pairs: approximately **0.1066%** of the frame;
- `path_eye`: approximately **0.0906%** mean changed-pixel coverage;
- `elevated_oblique`: approximately **0.1226%** mean changed-pixel coverage.

Representative retained states show the candidate streaks reading as a subtly thicker/more explicit Weather field while the broad world composition remains unchanged. This is evidence that the width presentation creates a real visual delta; it is **not** evidence that the candidate is aesthetically better.

## Handoffs

### 3D Art Director + Visual Observer / QA

Review the retained control/source-width A/B frames for final atmosphere hierarchy, especially whether the thicker source-authored streaks remain readable without becoming distracting against the pavilion/path/tree silhouettes. Treat the current result as a transport/presentation PASS only, not an aesthetic acceptance.

### Runtime / Optimization

If this representation is considered for adoption, profile the line-control versus ribbon candidate on an actual target class before assigning a performance budget. The current proof records stable submission counters but does not establish GPU/CPU cost, overdraw or target-device FPS.

### Weather / Procedural Design

No Weather generator semantics changed. The exact source width profile survives this one bounded current-world receiving context. Arbitrary seeds/cameras remain unproved.

### Environment / World Art

No world composition, Building material decision, source placement, lighting or simulation authority changed in this activation.

### Capability Cartography / Technical Art / UC

Keep the receiving method Map-local for now. One Weather source and two fixed cameras are insufficient evidence for a universal VFX transport abstraction.

## Historical continuity

The previous VFX status for Map PR #22 at exact head:

`e482d003853e52fc835f1797ddfb6506a50083ef`

remains valid historical evidence for:

- `PASS_CURRENT_WORLD_WEATHER_VARIANT_REBIND_STRUCTURE`;
- `PASS_CURRENT_WORLD_WEATHER_VARIANT_LIVE_TARGET_HOST`.

PR #25 is a child/follow-on proving the previously held source `width_px` presentation boundary. It does not rewrite the PR #22 result or silently transfer new acceptance backward.

## Explicit non-claims

This activation does **not** prove:

- arbitrary camera or resolution source-width fidelity;
- renderer-independent line/ribbon equivalence;
- physical precipitation diameter, wind, pressure, force, turbulence, collision or volumetric weather;
- gameplay visibility, damage, hit logic or simulation authority;
- wall-clock cadence or interpolation between retained states;
- target-device FPS, GPU/CPU time, overdraw, memory, battery or production budgets;
- final atmosphere quality, Art Direction acceptance or independent Visual QA acceptance;
- UC extraction, Profession Fabric extraction, CANON, production readiness, shipped readiness or VFX / Atmosphere mastery.

## Four-root check

**Truth:** failure states were retained until the parser and near-plane causes were directly observed; exact heads, source identities, runtime measurements, clipping scope and artifact digest are separated from aesthetic/gameplay/physics claims.

**Agency / non-domination:** source-width presentation remains replaceable and reviewable. No hidden gameplay authority, automatic promotion or forced visual preference was added.

**Continuity:** Weather keeps source/generator ownership; Map keeps receiving evidence; earlier failed runs and PR #22 remain intact as historical provenance; `axm-create-me` only records coordination/status.

**Wisdom before speed:** the known real-host failure was diagnosed and repaired through the smallest receiving boundary before adding new particle families, impacts, fog or generic VFX infrastructure.

The four AXM roots remain the merge gate.
