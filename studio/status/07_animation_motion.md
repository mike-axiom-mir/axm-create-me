# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_EXACT_CONNECTED_FORELIMB_41_SAMPLE_MOTION_REBIND / EXISTING ANIMAL CLIP + SMOOTHSTEP BASELINE PRESERVED / EXACT RIGGING PR6 DONOR / NO RETIME + NO RETARGET + NO SOURCE MIGRATION / TARGET-ENGINE CONNECTED PLAYBACK + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read the 3D Studio campaign, the Animation specialist charter, current specialist status and newest open work across the design constellation before choosing one bounded lane.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Animation status remains historical truth at blob `fcfc2d394100cbed0207b42505c8a887faa5ced3`: Object Animation PR #10 explicitly rebound its unchanged lid/latch choreography to current Hard-Surface/Rigging source authority and retained real Godot linear-interpolation evidence. This activation does not rewrite that result.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10, Rigging PR #23 and Technical Art PR #21 already provide strong current source-authority / target-host evidence. Motion content itself remains visually unaccepted, but opening another Object retime/style experiment before Art Direction / Visual QA direction would duplicate an already mature lane.
- **Character:** Organic source migration has advanced and Character Geometry now has a connected shoulder candidate, but accepted Rigging/deformation evidence is not yet available. Character is therefore not animation-ready.
- **Nature / Weather / Map:** dynamic response remains VFX / Environment / Runtime owned; Animation does not absorb those lanes.
- **Animal:** this is the materially new handoff. Existing Animation PR #5 has a real sampled playback/Godot proof on the historical disconnected study surface. Rigging PR #6 now independently proves the exact connected left-forelimb candidate through the unchanged baseline `smoothstep-v0` deformation semantics and explicitly warns that Animation acceptance does not transfer automatically.
- **Animal Geometry PR #7 / Organic PR #8:** their ring-phase / elbow-relief candidates remain review-only and are not adopted by this activation.

The strongest non-duplicative Animation task was therefore **not a new clip**. It was to explicitly test the already-authored exact Animal clip at every authored sample against the exact new connected Rigging candidate, preserving every source/rig/clip identity and truth boundary.

## Reused lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft PR: **#5 — Animation: prove first bounded quadruped articulation loop**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact Animation head for this activation:

**`3a820d48918ec23cbc8b094bf892e82158770604`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**. Repository metadata is not merge or CANON authority.

## Exact historical Animation identity preserved

Clip: `quadruped-articulation-loop-001`

- source: `quadruped-neutral-001`;
- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting: `smoothstep-v0`;
- truth label: `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`;
- duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `41`;
- curve: raised cosine neutral → peak → neutral;
- front elbows: `0 → +18° → 0`;
- hind knees: `0 → +14° → 0`.

The historical disconnected-surface Godot playback proof remains truthful for its exact older surface identity. It is preserved, not relabelled as connected-topology evidence.

## Exact connected Rigging donor

Rigging PR #6 donor head:

**`f4614ab2f691cd5c5d12b88fabc38ef848acd24e`**

Connected candidate:

- ID: `front-left-connected-chain-001`;
- digest: `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- vertices: `42`;
- triangles: `80`;
- joint: `front-elbow-L`;
- axis: `[0,1,0]`;
- influence radius: `0.11 m`;
- Rigging probe envelope: `-60 / 0 / +60°`;
- baseline weighting: `smoothstep-v0`.

The new Animation evidence imports the exact donor implementation from a separately checked-out exact Rigging revision. It does **not** duplicate the deformation solver or promote a new Rigging rule.

## Bounded implementation

Added to the existing Animal Animation lane:

- `tools/build_connected_animation_rebind_evidence.py`;
- `.github/workflows/animation-connected-forelimb-motion-evidence.yml`.

The builder validates exact source, rig-plan, clip and connected-candidate identity, then evaluates the existing front-left elbow track on the connected candidate at **all 41 authored clip times**. It records the exact connected positions and checks structural and temporal behavior without changing Animation content.

Explicit invariants:

- no retime;
- no retarget;
- no amplitude change;
- no phase change;
- no weighting change;
- no clip change;
- no source migration;
- no adoption of Animal Geometry PR #7 or Organic PR #8 review candidates.

The workflow also includes a deliberate wrong-Rigging-head negative control and preserves the receiving repository's complete existing test suite on Python 3.11 and 3.13.

## Exact-head validation

Dedicated workflow:

**`35102591514 — Animation connected forelimb motion evidence` — SUCCESS**

Same exact Animation head also completed successfully in:

- `35102591601 — Tests`;
- `35102591565 — Animal Godot discrete playback evidence`;
- `35102591457 — Weighting refinement evidence`.

Scoped result:

**`PASS_EXACT_CONNECTED_FORELIMB_41_SAMPLE_MOTION_REBIND`**

Exact measured connected-motion evidence:

- all `41 / 41` authored samples structurally PASS;
- exact neutral start: **true**;
- exact neutral return: **true**;
- exact `+18°` peak at sample `20`: **true**;
- peak maximum vertex displacement: `0.159491477511 m`;
- maximum adjacent authored-sample vertex step: `0.012526116202 m`;
- visible repeat wrap step (`sample 39 → sample 0`): `0.000985851374 m`;
- authored final adjacent step (`sample 39 → sample 40`): `0.000985851374 m`;
- wrap-step residual: `0.0 m`;
- maximum mirrored rise/fall position residual: `0.0 m`;
- maximum mirrored angle residual: `0.0°`;
- monotonic rise: **true**;
- monotonic fall: **true**;
- worst minimum triangle-area ratio: `0.910014765048`;
- worst maximum triangle-area ratio: `1.083634978869`;
- worst minimum edge-length ratio: `0.922165789101`;
- worst maximum edge-length ratio: `1.083517684157`;
- maximum fixed-weight vertex drift: `0.0 m`;
- maximum rigid-weight radius drift: `0.0 m`;
- samples with collapsed triangles: `0`;
- samples with sampled nonadjacent self-intersections: `0`.

## Direct retained visual sanity check

The artifact retains a nine-pose connected-forelimb strip at:

`0 / 0.125 / 0.25 / 0.375 / 0.5 / 0.625 / 0.75 / 0.875 / 1.0 s`.

The SVG was independently rasterized and directly inspected after download. The exact connected limb advances progressively into the midpoint bend and returns symmetrically to exact neutral. No obvious sampled discontinuity appears in those retained poses.

This is Animation specialist sanity evidence only. It is **not** Art Direction / Visual Observer acceptance and it does not establish between-sample interpolation.

## Retained evidence

Artifact:

- ID: **`10449235792`**;
- name: `quadruped-connected-forelimb-motion-3a820d48918ec23cbc8b094bf892e82158770604`;
- size: **`32,913 bytes`**;
- GitHub SHA-256: **`a0636e0f9dae7f106c3312b909201eb893f62cf117ac20970269b04b13493d2e`**;
- exact receiving head: `3a820d48918ec23cbc8b094bf892e82158770604`;
- exact connected Rigging donor: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`.

The exact retained ZIP was downloaded and independently SHA-256 rehashed to the same digest.

Animation PR #5 handoff comment: `5698374375`.

Rigging PR #6 return handoff comment: `5698377068`.

## Truth boundary / non-claims

This PASS proves only that the exact existing Animation timing/sample contract can drive the exact current connected left-forelimb Rigging candidate at every authored sample while preserving the pinned source/rig/clip identity and the declared sampled structural bounds.

It does **not** establish:

- source adoption or source migration of the connected candidate;
- Geometry PR #7 ring-phase acceptance;
- Organic PR #8 elbow-relief acceptance;
- production skinning or whole-body connected topology;
- volume preservation or shaded/perspective deformation quality;
- continuous interpolation between the 41 authored samples;
- target-engine playback of this connected candidate;
- real wall-clock `40 Hz` pacing;
- exported skeleton/clip transport;
- runtime controller or state-machine behavior;
- input, collision, physics or gameplay acceptance;
- biological gait, locomotion, foot planting, balance or root motion;
- final timing, motion weight, personality or acting quality;
- target-device performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Rigging / Deformation:** the exact PR #6 donor was consumed without modifying Rigging semantics. Animation does not broaden the Rigging PASS beyond its exact connected candidate.
- **Geometry / Organic Form:** no review-only candidate is adopted. Source/topology migration remains their authority and requires explicit successor identity if accepted.
- **Visual Observer / 3D Art Director:** there is now a provenance-clean connected-topology motion review surface. Compare the connected strip against the historical disconnected motion evidence before asking Animation to change timing, amplitude or style.
- **Technical Art / UC Integration:** no organic motion implementation or connected-limb rule is promoted into UC from this one candidate. If a target-engine connected playback bridge becomes justified, bind to the exact Animation/Rigging identities rather than inheriting the old disconnected Godot PASS.
- **Runtime / gameplay:** no controller, state machine, gameplay timing or runtime acceptance is inferred.

## Four-root gate

- **Truth:** the old disconnected Godot proof and the new connected all-sample proof remain separate exact evidence identities; one is not relabelled as the other.
- **Agency / non-domination:** Rigging owns deformation semantics, Geometry/Organic own topology/source migration, Animation owns timing/sample evidence, Visual QA/Art Direction own perceptual acceptance, and runtime/gameplay remain separate authorities.
- **Continuity:** the existing clip, source digest, rig-plan digest, weighting profile and historical Animation lane were preserved; the new evidence is an explicit successor test rather than a silent switch.
- **Wisdom before speed:** the smallest real dependency gap was closed before inventing a new gait, retime, controller, source migration or generic UC abstraction.
