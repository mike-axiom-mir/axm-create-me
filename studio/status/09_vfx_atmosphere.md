# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_32HZ_POST_GEOMETRY_SUBMISSION_AND_POST_DRAW_CADENCE__REAL_HOST / RUNTIME + GAMEPLAY + PHYSICS + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, newest specialist status, open design-constellation work, Map VFX PR #25 and the active Runtime successor PR #29 before selecting work.

The highest-leverage non-duplicated VFX gap remained the existing Weather-width wall-clock receiving proof in **Map PR #25**. VFX did not open another effect lane and did not take Runtime PR #29's prebuilt-mesh/cache experiment. The bounded work was to make the wall-clock evidence itself truthful and test one small presentation hypothesis on the real Godot host.

`axm-create-me` remains coordination-only. Product/evidence changes stay in `mike-axiom-mir/axm-map-design`; Weather source semantics remain in `mike-axiom-mir/axm-weather-design`. No UC or Profession Fabric extraction was introduced.

## Preserved fixed-state visual result

The fixed-state result remains valid and separate from cadence:

- 17 retained source states;
- 2 fixed `1100x720` cameras (`path_eye`, `elevated_oblique`);
- 36 source-authored Weather streak widths per state/camera;
- **1,224** live projected-width observations;
- maximum projected-width residual **`0.00974698571769128 px`** against a `0.05 px` bound;
- exact near-plane receiving boundary: **5** clipped endpoints in `path_eye`, **0** in `elevated_oblique`;
- stable Weather and sapling resource identity.

This remains **`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE` + `PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`** for exact fixed retained states only.

## Evidence defect found

The historical wall-clock observer recorded its `submit` time before rebuilding the exact sapling and Weather geometry for the scheduled source state. That timestamp therefore measured scheduler wake timing rather than actual source-state submission.

This activation moved `submit` to **after exact source geometry materialization** and before the next Godot post-draw observation. The authored source interval remains exactly **31.25 ms / 32 Hz** and the width limit remains unchanged.

No source state, camera, Weather field, source width, opacity, sapling state, near-plane rule or timing threshold was changed.

## Bounded one-shot hypothesis — retained FAIL

A small hypothesis was tested first on exact VFX head:

`9ae094413a6c7b91487099995202453378aa371e`

The proof viewport was changed from continuous rendering to one explicit `UPDATE_ONCE` draw per source state so background proof-host rendering would not run between scheduled states.

Real Godot workflow:

`35123054653 — VFX Weather source-width wall-clock presentation evidence`

The host reached the real observer and verifier, but the hypothesis **failed materially**. Serializing each full `1100x720` draw behind the exact source schedule accumulated lateness instead of removing it. Retained diagnostics included approximately:

- `path_eye` max submit/draw lateness: **`203.804 / 238.264 ms`**;
- `elevated_oblique` max submit/draw lateness: **`145.804 / 184.162 ms`**.

Retained failed artifact:

- ID: **`10457718578`**;
- SHA-256: **`740014ba924b72f2075dc043ba55e03033bc119820b6f634c321364f03bb1f35`**.

That experiment remains historical evidence. It is not called an improvement and was not silently erased.

## Current smallest repair

Current exact Map VFX head:

`0a6eb244de656c2ba3ff24147b9942f73808004c`

The one-shot experiment was reverted to the original **pipelined `SubViewport.UPDATE_ALWAYS`** presentation behavior, while retaining the corrected post-geometry submission timestamp.

The independent verifier now explicitly records:

- viewport policy `UPDATE_ALWAYS_PIPELINED`;
- submit semantics `AFTER_STATE_GEOMETRY_UPDATE_BEFORE_POST_DRAW_OBSERVATION`;
- exact submission deadline misses per context;
- exact post-draw deadline misses per context;
- separate `submission_cadence_state` and `post_draw_cadence_state` diagnostics;
- unchanged overall PASS requirement: both submission and post-draw must remain within one authored `31.25 ms` interval.

The verifier still fails closed; no timing bound was widened.

## Real corrected wall-clock result

Dedicated exact-head workflow:

**`35123620848 — VFX Weather source-width wall-clock presentation evidence`**

Godot 4.7.2 completed the entire 17-state sequence in both fixed cameras. The independent verifier then returned **FAIL** at the unchanged cadence gate.

### `path_eye`

- maximum post-geometry submit lateness: **`83.939 ms`**;
- submission deadline misses: **11 / 17** (`6..16`);
- maximum post-draw lateness: **`118.929 ms`**;
- post-draw deadline misses: **17 / 17**.

### `elevated_oblique`

- maximum post-geometry submit lateness: **`165.350 ms`**;
- submission deadline misses: **13 / 17** (`4..16`);
- maximum post-draw lateness: **`204.127 ms`**;
- post-draw deadline misses: **17 / 17**.

At the same time, all non-cadence receiving checks remain true:

- exact 17 source states in both contexts;
- exact 0.03125 s source schedule;
- all **1,224** width observations within the existing projection tolerance;
- maximum width residual **`0.00974698571769128 px`**;
- stable Weather and sapling resource identities;
- exact near-plane clip totals **5 / 0**;
- preserved rear-tree culling state.

Scoped result:

**`PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_32HZ_POST_GEOMETRY_SUBMISSION_AND_POST_DRAW_CADENCE_IN_THIS_PROOF_HOST`**

This stronger failure is useful: the corrected measurement shows that the current per-state materialization path itself is already late on this exact proof host, before a target-device or gameplay claim can be made. VFX stops at that boundary rather than optimizing meshes inside the VFX lane.

## Retained evidence

Current retained artifact:

- ID: **`10457529701`**;
- exact head: `0a6eb244de656c2ba3ff24147b9942f73808004c`;
- size: **1,760,520 bytes**;
- SHA-256: **`30315bc095ea65d44717751c63f70fc12d4a35ea00d8df45ba336ede19b04b80`**;
- GitHub artifact digest and independently downloaded archive digest agree.

The package contains the exact-head receipt, parent Weather-variant evidence, current source-width payload, complete Godot log, complete runtime timing receipt and independent verifier result.

## Duplication boundary / handoff

### Runtime PR #29

Map Runtime PR **#29 — `Runtime: compare prebuilt Weather mesh swaps against 32 Hz rebuilds`** already owns the performance representation experiment. Its current comparison branch was stacked on the older VFX head `bbc8721...`, so VFX returned a handoff requesting that Runtime rebase/re-run against the corrected **post-geometry submission** semantics before using its timing deltas.

VFX does **not** absorb the prebuilt mesh cache, frame dropping, state coalescing, memory tradeoff or resource-identity tradeoff into this lane.

### Technical Art

If Runtime establishes a reusable representation that preserves exact source identity and cadence without unacceptable tradeoffs, Technical Art can decide whether a cross-repo receiving contract is warranted. VFX does not centralize Weather semantics for convenience.

### Visual QA / Art Direction

The fixed-state visual source-width evidence remains the appropriate aesthetic review surface. This activation changed evidence timing and proof-host scheduling behavior only; it makes no new final visual-preference claim.

## Explicit non-claims

This activation does **not** prove:

- exact authored 32 Hz wall-clock cadence in the current proof host;
- interpolation quality between retained source states;
- target-device CPU/GPU/frame-time/FPS/VRAM/overdraw behavior;
- arbitrary camera or resolution source-width fidelity;
- renderer-independent line/ribbon equivalence;
- physical wind, precipitation, force, turbulence, collision or volumetric weather;
- gameplay visibility, damage, hit logic, input or runtime-controller authority;
- final atmosphere quality or Art Direction / Visual QA acceptance;
- UC extraction, Profession Fabric extraction, CANON, production readiness or VFX / Atmosphere mastery.

## Four-root check

**Truth:** corrected the submit measurement boundary, retained the failed one-shot hypothesis, and keeps the exact 31.25 ms gate red rather than weakening it.

**Agency / non-domination:** no hidden source rewrite, automatic promotion, gameplay authority, forced aesthetic choice or silent Runtime adoption was introduced.

**Continuity:** Weather keeps source authority; Map keeps receiving evidence; the fixed-state PASS, one-shot failed experiment and corrected wall-clock FAIL remain distinct provenance facts; `axm-create-me` only records coordination/status.

**Wisdom before speed:** tested the smallest presentation hypothesis, preserved its failure, repaired the evidence semantics, and stopped at the Runtime boundary instead of duplicating the active cache lane.

The four AXM roots remain the merge gate.
