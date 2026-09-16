# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_ANIMAL_SOURCE_SUCCESSOR_MOTION_TO_CURRENT_UC_RUNTIME_CLOCK / CURRENT_UC_RUNTIME_BLOB_UNCHANGED / HOLD_SKELETON_SKIN_WEIGHT_POSE_TRANSPORT / HOLD_GLB_ANIMATION_CHANNELS / HOLD_REALTIME_CONTROLLER / HOLD_VISUAL_GAMEPLAY / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, newest Technical Art status, current design PR/status evidence, and current `axm-universal-creation` before changing implementation evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation remains in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Technical Art proof remains historical truth: Animal's earlier sampled-playback producer was already proven through UC's generic deterministic animation clock. This activation does not rewrite that evidence. It creates a new exact successor proof because the Animal source chain has now advanced.

## Fresh constellation / duplication scan

The former Technical Art hold on Animal's selected-003 source successor is no longer valid as a current-state hold:

- Organic Form has a source-owned selected-003 elbow successor;
- Geometry has rebound that successor;
- Rigging PR #10 has rebound the successor at exact head `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a`;
- Animation PR #5 has now rebound the unchanged articulation clip to that successor at exact head `badd8574b1acb5b4adf23544a9befc7cad86d1a1` with `PASS_SOURCE_SUCCESSOR_41_SAMPLE_MOTION_REBIND` and separate Godot discrete-playback evidence.

The exact Animation successor identity consumed here is:

- source-successor candidate digest: `ace2366d8cd14c00df670b5fe1f0780ab2d01992482455ad5f7c4c9cadffeeba`;
- source-successor profile digest: `8dbab7764819ebcbf825f6d0650053b108b8773df3644934738e3ec9f4712e66`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting: `smoothstep-v0`;
- authored timing: `1.0 s / 40 Hz / 41 endpoint-inclusive samples`;
- motion semantics: `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`.

Animal Technical Art PR #3 remains the existing cross-repo/UC integration lane and is therefore the correct home. No duplicate Technical Art PR was opened. Other design lanes remain under their own specialist ownership.

## Selected bounded gap

The highest-leverage open Technical Art gap was now:

> Can the exact newly rebound Animal source-successor Animation producer cross the current UC generic runtime-clock boundary without copying Animal source, topology, rigging, weighting or clip semantics into UC?

This is narrower and more truthful than jumping immediately to skeleton/skin/pose/channel export. It also directly closes the previous Technical Art dependency hold after Organic -> Geometry -> Rigging -> Animation had all advanced in order.

## Current UC inspected

Current `axm-universal-creation` main consumed in this activation:

**`091c90047a38894ebdb88dba268f1212411a6cc4`**

That UC head advanced for unrelated fixed-direction physics work. The exact generic module consumed by this bridge remains:

`src/axm_uc/game_animation_runtime.py`

with Git blob:

**`a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173`**.

That blob is unchanged from the previous proven Technical Art runtime-clock boundary. UC already supplied the generic deterministic clip-clock/state primitive needed here, so **no UC product code was changed** and no Animal domain policy was promoted into UC.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art head:

**`a97231455e404beb7132e6b369b60b5a68a33550`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**. Mergeability remains evidence metadata, not merge/CANON authority.

## Smallest reusable repair

Technical Art added one Animal-side evidence adapter:

`tools/build_uc_source_successor_animation_clock_bridge_evidence.py`

and one additional job in the existing:

`.github/workflows/uc-surface-bridge.yml`.

The adapter:

1. checks out and verifies exact Animation head `badd8574b1acb5b4adf23544a9befc7cad86d1a1`;
2. checks out exact successor Rigging donor `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a` plus the exact historical rig/profile donor `04760112deb81a8d145226fe7ee02923107c9916`;
3. executes Animation's own `build_source_successor_animation_rebind_evidence.py` rather than copying its Animal logic;
4. requires the exact successor candidate/profile/rig/weighting/clip identities and all 41 source-owned structural samples;
5. requires motion, retime, retarget and weighting-change flags to remain false;
6. verifies current UC exact head plus exact `game_animation_runtime.py` Git blob;
7. supplies only an adapter-neutral clip-clock source to UC's existing runtime;
8. exercises all authored 0.025-second boundaries through the first post-wrap step plus independent free-time probes;
9. fails closed on successor-identity drift, `40 -> 41 Hz` drift, and a fake UC runtime-module blob;
10. explicitly records that skeleton/skin/weight/pose/channel transport and target-engine/controller playback are not proved.

Animal domain meaning remains in Animal. UC remains generic.

## Provenance defect caught and repaired

The first exact-head attempt, workflow **`35136331462`**, retained a real tooling failure in the new successor job. Technical Art had passed donor checkout paths as relative environment values, then invoked the exact Animation producer from the Animation checkout as its working directory. Those paths therefore resolved relative to the wrong repository.

The failure was not bypassed and no identity gate was weakened. The workflow now supplies exact donor checkouts through absolute `${{ github.workspace }}` paths. The failed run remains historical evidence of the harness defect.

## Exact result

Scoped result:

**`PASS_ANIMAL_SOURCE_SUCCESSOR_MOTION_TO_CURRENT_UC_RUNTIME_CLOCK`**

Final exact-head workflow:

**`35136465202 — UC surface bridge evidence`: SUCCESS**.

All four jobs passed on exact Technical Art head `a97231455e404beb7132e6b369b60b5a68a33550`, including the new `animal-source-successor-current-uc-clock-bridge` job and the retained historical Technical Art bridge jobs.

Same-head repository workflows also passed:

- `35136465188 — Tests`: SUCCESS;
- `35136465212 — Weighting refinement evidence`: SUCCESS.

Exact retained runtime-clock findings:

- `41` authored-boundary commands exercised;
- authored interval: `0.025 s`;
- exact one-second `LOOP` event at command index `39`, cycle `1`;
- first post-wrap clip time: `0.025 s`;
- maximum boundary clip-time residual: **`5.551115123125783e-16 s`**;
- free-time probes `0.1125 / 0.5125 / 1.2375 / 2.0 s`: **`0.0 s` residual** at retained precision;
- compiled generic UC runtime source SHA-256: `e8d2163a1aae3f05992ba1e9aaa88d90fc0b8893a998406daa3bead7df9c3510`;
- source-successor producer retained `PASS_SOURCE_SUCCESSOR_41_SAMPLE_MOTION_REBIND`, all 41 structural samples green, exact neutral return and `0.0 m` visible-wrap residual.

Exact retained identities:

- Technical Art: `a97231455e404beb7132e6b369b60b5a68a33550`;
- Animation: `badd8574b1acb5b4adf23544a9befc7cad86d1a1`;
- successor Rigging: `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a`;
- historical rig/profile donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- current UC: `091c90047a38894ebdb88dba268f1212411a6cc4`;
- current UC runtime-module blob: `a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173`.

Fail-closed controls reject:

1. selected-003 successor candidate identity drift;
2. authored sample-rate drift `40 -> 41 Hz`;
3. UC runtime-module blob drift.

## Retained evidence

Final artifact:

- ID: **`10463545521`**;
- name: `quadruped-source-successor-current-uc-clock-bridge-evidence`;
- size: **`36,328 B`**;
- GitHub archive SHA-256: **`a582f0d24ffc479e8d28def01c8142c750da5d0a4f97c9bfc472ffee4444cc13`**;
- bridge receipt SHA-256: **`55928f6bd0a9af0a6a65edd33bf8ef7d47f72e8bc0a525832bfd0055d60b4960`**.

The archive was downloaded during this activation and independently rehashed to the exact same GitHub SHA-256. Its retained identity files independently contain the Technical Art, Animation, Rigging, historical donor, UC and UC runtime-module identities listed above.

## Handoffs recorded

- Animal Technical Art PR #3 received exact evidence comment **`5702793857`**.
- Animal Animation PR #5 received downstream return-handoff comment **`5702798481`**, explicitly preserving Animation ownership and noting that Technical Art changed no motion values.

No separate UC lane was opened because current UC already contains the necessary generic clock primitive. No profession/platform extraction was justified by this one domain-specific rebind.

## Truth boundary / explicit non-claims

This activation proves only that the **exact source-successor Animal Animation producer** can be executed from its owning repository and its unchanged 1.0 s / 40 Hz timing can be represented and replayed through the **current generic UC deterministic animation clock** with exact dependency identities and retained evidence.

It does **not** prove:

- static selected-003 surface/GLB adoption in this activation;
- skeleton transport;
- skin or weight transport;
- pose/deformation transport;
- GLB animation channels;
- interpolation or C1 quality;
- real wall-clock frame pacing;
- Godot `AnimationPlayer`, controller or state-machine integration;
- final visual/motion Art Direction acceptance;
- gameplay, collision, physics or target-device performance;
- UC promotion of Animal-specific semantics;
- CANON, merge authority, production/game readiness or Technical Art mastery.

## Four-root gate

- **Truth:** old and successor Animation chains remain separate; exact producer, donor, UC, consumed-module and artifact identities are retained; the failed relative-path harness run is preserved rather than hidden.
- **Agency / non-domination:** Animal keeps source/geometry/rigging/weighting/motion authority. UC supplies only a generic runtime clock. Technical Art does not force successor adoption or merge.
- **Continuity:** the historical clock proof remains valid at its old source chain; this activation adds an explicit successor proof rather than relabelling old evidence.
- **Wisdom before speed:** one bounded timing/integration contract closed the real dependency gap. Skeleton/skin/channel transport, visual judgment and runtime controller work remain separate gates.

## Current state

`PASS_ANIMAL_SOURCE_SUCCESSOR_MOTION_TO_CURRENT_UC_RUNTIME_CLOCK / CURRENT_UC_RUNTIME_BLOB_UNCHANGED / EXACT SUCCESSOR ANIMATION + RIGGING + UC IDENTITIES RETAINED / HOLD_STATIC_SELECTED003_UC_SURFACE_ADOPTION / HOLD_SKELETON_SKIN_WEIGHT_POSE_TRANSPORT / HOLD_GLB_ANIMATION_CHANNELS / HOLD_INTERPOLATION_C1 / HOLD_WALL_CLOCK / HOLD_CONTROLLER_STATE_MACHINE / HOLD_VISUAL_ACCEPTANCE / HOLD_RUNTIME_GAMEPLAY / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT`
