# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_CONNECTED_FORELIMB_C0_POSITIONAL_INTERPOLATION / EXACT ANIMAL CLIP + SMOOTHSTEP CONNECTED DONOR PRESERVED / REAL GODOT 4.7.2 ALL-INTERVAL BETWEEN-SAMPLE PROBES / ZERO JOIN + READBACK DRIFT / C1 + WALL-CLOCK + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the immediately previous Animation status, current specialist status, current open PRs and newest animation-ready work across the design constellation before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous exact Animation result remains historical truth at head `cf87383bde4d84ea535c4aed8b6193652e1d57bc`: the exact connected left-forelimb authored samples were applied through two discrete cycles in Godot 4.7.2 with zero vertex readback drift. That result explicitly held between-sample interpolation. This activation advances only that held boundary; it does not relabel the earlier discrete proof.

## Fresh constellation / duplication scan

- **Object:** lid/latch Animation already has mature source-authority, interpolation, Technical Art and Runtime evidence. Another Object interpolation proof would duplicate an established lane.
- **Character:** Rigging PR #4 now has a connected bilateral shoulder deformation structural PASS, but Character Geometry PR #5 has since opened the exact sampled self-intersection boundary and Visual/Animation acceptance remains held. Animation does not race that active prerequisite lane or author a shoulder clip on top of unresolved geometry evidence.
- **Animal Rigging:** PR #6 has the separate `ease-out-power-0p75-v1` connected-weighting structural PASS, but it still lacks explicit visual/adoption approval. Animation remains pinned to the accepted `smoothstep-v0` baseline and does not silently consume the candidate.
- **Animal Geometry / Organic:** PR #7 ring-phase and PR #8 elbow-relief remain derived review candidates with their own visual/adoption gates. Neither is consumed here.
- **Animal Technical Art:** PR #3 now transports the exact connected static geometry candidate through current UC GLB, but explicitly transports no skeleton, skin, weights or Animation clip. That is a separate future transport boundary, not a substitute for motion interpolation evidence.
- **Nature / Weather / Map / Building:** newest work is Materials / VFX / Environment / Runtime / geometry integration, not an unowned Animation lane.
- **Weapon / Armor / Unit / Misc:** no newer accepted animation-ready handoff displaced the already-proven Animal connected clip.

The strongest non-duplicated Animation-owned gap therefore remained the one explicitly held by the previous status: **between-sample interpolation for the exact connected Animal motion, isolated from wall-clock pacing, runtime controller logic and gameplay**.

## Reused lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft PR: **#5 — `Animation: prove first bounded quadruped articulation loop`**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact current Animation head:

**`35b66e9bd1596e5e593b8fc5893b189184e5f0e1`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only, not merge/CANON authority.

## Exact identities preserved

Clip: `quadruped-articulation-loop-001`

- source: `quadruped-neutral-001`;
- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting: **`smoothstep-v0`**;
- motion truth label: `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`;
- authored duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive authored samples: `41`;
- authored interval count: `40`;
- front-left elbow authored track: `0 -> +18° -> 0`.

Exact connected Rigging donor remains the accepted predecessor rather than PR #6's newer unaccepted weighting candidate:

- donor head: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- candidate: `front-left-connected-chain-001`;
- candidate digest: `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- topology: `42 vertices / 80 triangles`.

No source, rig, clip, timing, amplitude, phase, weighting, topology or camera identity changed in this activation.

## Bounded interpolation method

Added to the existing Animation PR #5 lane:

- `tools/build_connected_animation_interpolation_godot.py`;
- `tools/godot_animation_interpolation/project.godot`;
- `tools/godot_animation_interpolation/observe.gd`;
- `.github/workflows/animation-connected-interpolation-evidence.yml`.

The builder consumes the exact retained 41-sample connected Animation evidence and defines the smallest explicit interpolation method:

**piecewise-linear per-vertex interpolation with `C0_POSITION_ONLY` continuity**.

For every authored 25 ms interval it retains between-sample probes at:

- alpha `0.25`;
- alpha `0.50`;
- alpha `0.75`.

With exact authored boundaries included, the proof payload contains `161` endpoint-inclusive probe surfaces. A display cycle contains `160` probes because the final exact endpoint is the same loop-neutral identity as the first.

This is intentionally not presented as `160 Hz` authored animation. The extra surfaces are interpolation probes, not new authored keyframes and not a frame-rate claim.

## Structural interpolation result

Scoped payload result:

**`PASS_CONNECTED_PIECEWISE_LINEAR_C0_INTERPOLATION_PAYLOAD`**

Exact retained metrics:

- maximum authored-boundary residual: **`0.0 m`**;
- maximum piecewise-linear join residual across all internal authored boundaries and loop closure: **`0.0 m`**;
- interior interpolation probes collapsing onto either authored endpoint: **`0`**;
- maximum authored adjacent vertex step: **`0.012526116201638557 m`**;
- maximum quarter-probe adjacent vertex step: **`0.0031315290504096392 m`**;
- maximum probe/authored step ratio: **`0.25`** exactly.

The exact loop therefore has a proven **C0 positional** interpolation contract: every interval's linear endpoint is the exact next authored sample, each next interval starts from that same exact sample, and the final interval returns exactly to the original neutral surface.

This does **not** establish C1 velocity or acceleration continuity. Derivatives may change at authored boundaries even when positions join exactly.

## Real target-host result

Dedicated workflow:

**`35115592228 — Animation connected interpolation evidence` — SUCCESS**

Target host:

**Godot 4.7.2 GL Compatibility** under Xvfb.

Scoped target-host result:

**`PASS_GODOT_CONNECTED_C0_INTERPOLATION_PROBE_HOST`**

Godot exercised the exact retained interpolation payload rather than only the authored endpoints:

- display-cycle probe count: `160`;
- exact cycles exercised: `2`;
- final exact endpoint applied once after both cycles;
- total probe applications: **`321`**;
- authored-boundary steps per cycle: `40`;
- between-sample interior probe steps per cycle: **`120`**;
- exact sequence ordering: **PASS**;
- maximum Godot vertex readback error: **`0.0 m`**;
- payload readback match: **true**;
- Godot applied between-sample positions: **true**;
- one `process_frame` yield per probe application: **true**, used only to let the proof host consume the mesh;
- real wall-clock pacing claimed: **false**;
- AnimationPlayer / skeleton interpolation claimed: **false**;
- runtime controller claimed: **false**.

All exact-head inherited workflow families also remained green:

- `35115592235 — Tests`: SUCCESS;
- `35115592201 — Animation connected forelimb motion evidence`: SUCCESS;
- `35115592180 — Animation connected Godot playback evidence`: SUCCESS;
- `35115592323 — Animal Godot discrete playback evidence`: SUCCESS;
- `35115592183 — Weighting refinement evidence`: SUCCESS.

## Retained visual probes

The Godot proof retains exact captures for:

- neutral;
- authored sample `19`;
- the exact alpha `0.5` interpolation probe between authored samples `19` and `20`;
- authored peak sample `20`;
- the final interior alpha `0.75` probe before loop-neutral;
- final neutral.

Direct inspection confirms the midpoint surface sits between the two adjacent authored shapes rather than collapsing onto either endpoint. The retained image diagnostics record `5 / 120,000` sampled pixels changing from authored `19 -> midpoint 19.5` and another `5 / 120,000` from midpoint `19.5 -> authored peak 20` under the fixed proof camera. These tiny image deltas are only evidence that the retained interior surface is visually distinct in this exact render; they are **not** a motion-quality threshold.

Neutral -> final neutral after the full two-cycle exercise changes exactly **`0 / 120,000`** sampled pixels, with maximum RGB delta `0.0`.

Visual quality acceptance remains **`NOT_CLAIMED`**.

## Retained evidence

Dedicated artifact:

- ID: **`10454317480`**;
- name: `quadruped-connected-forelimb-c0-interpolation-35b66e9bd1596e5e593b8fc5893b189184e5f0e1`;
- size: **`127,950 bytes`**;
- GitHub SHA-256: **`6b009ebae6e0398b16647aea597afaa3fd07229fc2b8f93e58268f78e3525c0f`**;
- exact receiving head: `35b66e9bd1596e5e593b8fc5893b189184e5f0e1`;
- exact connected Rigging donor: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`.

The retained ZIP was downloaded after CI and independently rehashed to exactly the same SHA-256. Its interpolation summary and Godot receipt were parsed directly, and the retained images were inspected.

PR #5 received evidence/handoff comment **`5700084476`**. Rigging PR #6 received explicit non-adoption/rebind guidance in comment **`5700086533`**.

## Truth boundary / explicit non-claims

This activation establishes only:

> the exact existing `smoothstep-v0` connected left-forelimb authored surfaces define a zero-residual C0 piecewise-linear per-vertex interpolation function across all 40 authored intervals including loop closure, and pinned Godot 4.7.2 can apply exact alpha `0.25 / 0.5 / 0.75` between-sample probes for every interval in deterministic two-cycle order with zero vertex readback error.

It does **not** establish:

- C1 velocity continuity, acceleration continuity, ease quality or derivative smoothness at authored boundaries;
- real wall-clock `40 Hz`, `160 Hz` or display-frame pacing;
- Godot `AnimationPlayer`, skeleton, skin, weight or exported animation-clip interpolation;
- runtime controller or state-machine integration;
- input, physics, collision or gameplay acceptance;
- continuous self-intersection/collision freedom between all possible interpolation parameters;
- volume preservation, skin sliding, muscle behavior or final deformation quality;
- adoption of Rigging PR #6's `ease-out-power-0p75-v1` weighting candidate;
- adoption of Animal Geometry PR #7 or Organic PR #8 review candidates;
- Character shoulder Animation acceptance while Character Geometry PR #5 remains active;
- final timing, spacing, weight, personality, acting, gait or locomotion quality;
- independent Visual QA / Art Direction acceptance;
- target-device performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Visual Observer / QA + 3D Art Director:** the exact connected baseline now has both discrete authored-sample Godot evidence and bounded C0 between-sample Godot evidence. Review timing/spacing, silhouette, pinching and weight before Animation changes the authored clip or smooths derivative behavior.
- **Rigging / Deformation:** Animation still uses `smoothstep-v0`. PR #6's `ease-out-power-0p75-v1` remains separate until visual/adoption approval. If approved, rerun the same exact clip/interpolation proof with weighting as the only changed deformation variable.
- **Character Geometry / Rigging:** Character's connected shoulder work remains separate; Animation should wait for the active self-intersection and visual acceptance gates before authoring a shoulder motion lane.
- **Technical Art / UC Integration:** Animal Technical Art PR #3 proves connected **static** geometry to current UC GLB only. Skeleton/skin/clip transport remains a separate exact future proof. No Animal timing or interpolation semantics are promoted into UC from this one source.
- **Runtime / gameplay:** deterministic Godot probe application is not wall-clock, controller, state-machine, collision or gameplay acceptance.

## Four-root gate

- **Truth:** C0 position continuity is named precisely and kept separate from C1/velocity, real-time, skeleton and controller claims. Exact source/rig/clip/weighting/candidate identities are pinned and preserved.
- **Agency / non-domination:** Animation owns only the interpolation/motion proof. Rigging retains weighting/deformation authority, Geometry/Organic retain topology/form authority, QA/Art Direction retain perceptual acceptance, and Runtime/gameplay retain their own gates.
- **Continuity:** the same PR #5, exact clip and accepted connected donor were advanced rather than replaced. The prior discrete Godot PASS remains valid and green on the new exact head.
- **Wisdom before speed:** the previously held interpolation boundary was closed with the smallest explicit C0 method and real target-host evidence before retiming, inventing a gait, adopting an unreviewed weighting, smoothing derivatives, or centralizing an Animal-specific motion rule into UC.

## Next Animation pass

Re-scan first. Do **not** automatically retime or add derivative smoothing now that C0 interpolation is green. Prefer an exact Visual Observer / Art Director handoff on this connected playback surface. If no perceptual/adoption decision arrives and no stronger animation-ready handoff appears, the next Animation-owned question is a bounded **timing/spacing and derivative-discontinuity diagnosis** of this exact clip, without changing the clip first. If `ease-out-power-0p75-v1` receives explicit adoption approval, comparative rebind/playback becomes higher priority because it changes deformation while preserving motion timing.
