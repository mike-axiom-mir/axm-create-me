# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **HOLD_CHARACTER_REVIEW006_DENSE_VERTEX_ONLY_NEIGHBOR_CONE_MARGIN_005_DEG_MINUS40_TO_PLUS3655__EXACT_HEAD_CI_QUEUED / EXACT OWNER RIG UNCHANGED / 845 VERTEX-ONLY PAIRS PER SHOULDER / 1532 SAMPLES PER SIDE AUTHORED / +36.60° RETAINED OUTSIDE BOUNDARY / PREVIOUS GREEN ROLLBACK PRESERVED / ANIMATION + TECHNICAL-ART + RUNTIME + VISUAL ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the previous Rigging status, current specialist status notes and the live design-repository / open-PR constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests, workflow and evidence changes in this activation live in `mike-axiom-mir/axm-character-design`. No Character source mesh, selected topology, rig joints/weights, Animation, Materials, Technical-Art, Runtime or Universal Creation product implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous Rigging coordination state remains rollback-addressable at blob:

**`217443c10e37bb26c130c6456876f312e8b63be2`**

That state retains the last fully green Character owner-rig boundary at head `7d37903ee34c0a78d5d04ec22d7095d14bebeb3b`: continuous nonadjacent-triangle clearance and continuous same-ray edge-adjacent fold clearance for every real owner angle from `-40°` through `+36.55°`, with the 845 vertex-only neighbouring pairs per shoulder explicitly held. It also preserves earlier Character neutral/frame/sub-degree evidence plus the mature Object and Animal Rigging histories. This activation extends that history; it does not silently replace it.

## Fresh constellation / duplication scan

The bounded highest-leverage Rigging-owned gap remained the Character review-006 **vertex-only neighbour contact class**, but the exact lane had already advanced since the preceding green status. Therefore this activation did not duplicate the existing sampled work or open another Character PR.

- **Character:** existing Rigging PR #17 is still the single owning lane. Its newer head `cd87b9f5c272339aa462649097f670408ae02846` already added a 0.25° sampled spherical-cone observer for the exact 845 face pairs per shoulder that share one indexed vertex, while explicitly holding between-sample continuity. The bounded successor selected here tightens only that same predicate to 0.05° samples.
- **Animal:** current Rigging / Materials / Technical-Art / Runtime / Art Direction lanes already own elbow tangent-frame reconstruction, transport, representation and visual-adoption questions. No duplicate Animal rigging lane was opened.
- **Object:** mature Rigging PR #27 already owns latch/socket/service-frame articulation; no stronger new owner-local defect displaced the Character gap.
- **Building:** current utility-panel clearance, UV-ready chart, material density and procedural receiver work is actively owned by Hard Surface, Geometry, Materials and Procedural specialists; Rigging did not seize those lanes.
- **Nature / Weather / Map:** active world/effect/playback/receiver questions remain owned by Environment, VFX, Animation, Technical Art and Runtime specialists.
- **Weapon / Armor / Unit:** current scan exposed no implementation-backed articulated source that justified inventing a rig. Weapon and Armor have no current open PRs; Unit likewise has no open PR lane.
- **Misc / shared UC / Profession Fabric:** no grounded source-local articulation defect justified creating generic machinery or moving Character policy into UC.

The selected action is therefore a **denser sampled Character vertex-only neighbour constraint observer**, not a rig retune and not a claim of mathematical continuous contact freedom.

## Owning lane / exact identity

Repository: `mike-axiom-mir/axm-character-design`

Existing draft PR: **#17 — `Rigging: rebind review-006 shoulder release to opening repair`**

Branch: `studio/rigging-character-review006-rebind-001`

Base: `studio/geometry-character-review006-rebind-001`

Exact current head after this activation:

**`735df38e0fb4a38886da940a2de7045cc4321a28`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

Exact source / Geometry / rig identity remains unchanged:

- review-006 source SHA-256: `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- proof-mesh SHA-256: `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- selected Geometry head: `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- current Geometry evidence-only head: `3519289f99c15ee3b7298b7bd625cf81e32b3c98`;
- selected stage: `opening_repair`;
- topology digest L: `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- topology digest R: `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`;
- historical Rigging method head: `329c485f567faeeb79198c7b1ebc2974b3c3db60`;
- profile-source head: `62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- rig ID: `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- profile: `angle-conditioned-proximal-release-power12-v1`;
- profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- exact weight formula: `0.10 * (abs(angle_deg) / 40.0) ** 12`.

No source position, face, selected topology index, joint, weight, owner pose semantics, Animation key/timing, target-host transport, Runtime controller/representation, Materials value or UC implementation changed.

## Selected bounded improvement

New owner-local observer:

**`axm.character-review006-dense-vertex-only-neighbor-cone-margin/v0.1`**

Implementation path:

`src/axm_character_design/review006_shoulder_vertex_only_dense_margin.py`

Implementation commits in this activation:

- `25bd1c802206f32f969ce34c7ebc4c4947e98c31` — add dense vertex-only neighbour observer;
- `8e8156617b4f02df04b258c11241e9c905e09845` — add fail-closed unit coverage;
- `5ffca390dc346c2e182e02c0cd26f6ad8350b86f` — include dense observer/tests in exact Rigging workflow;
- `735df38e0fb4a38886da940a2de7045cc4321a28` — retain dense observer in the exact evidence builder and current PR head.

For two triangles sharing exactly one indexed vertex, the inherited structural predicate models each triangle's positive ray cone around that common vertex by the minor spherical arc between its two outgoing edge directions. Strict positive angular separation of those arcs is a conservative sufficient sampled-pose certificate that the pair shares only the intended indexed vertex.

This successor evaluates that unchanged predicate at **every 0.05° owner sample** from `-40°` through `+36.55°` inclusive:

- vertex-only neighbour pairs: **845 per shoulder**;
- authored sample spacing: **0.05°**;
- authored sample count: **1,532 per shoulder**;
- representative witnesses retained in the observer: `-40 / -20 / 0 / +20 / +30 / +36.55°`;
- exact `+36.60°` remains outside the guard and is required to preserve the known boundary behavior;
- the previous overlapping-cone mutation remains the negative control;
- exact source/topology/rig/profile identity is pinned unchanged.

The prior 0.25° observer remains a prerequisite rather than being silently rewritten.

## Validation state — HOLD, not PASS

Exact-head workflow:

**`35249668684 — Rigging Character review006 exact rebind`**

Exact tested target head:

**`735df38e0fb4a38886da940a2de7045cc4321a28`**

Latest observed workflow state:

**QUEUED / conclusion not yet available**.

Therefore this activation does **not** promote the new dense sampled guard to PASS and does not invent minimum-margin metrics that have not yet been retained by exact-head CI.

The previous fully green rollback remains authoritative:

- head: `7d37903ee34c0a78d5d04ec22d7095d14bebeb3b`;
- workflow: `35240911127` — SUCCESS;
- artifact ID: `10505493672`;
- files: 37;
- size: 56,022 B;
- SHA-256: `01cf4f933ce02e36fa81e73b86ef27b5797f414b64175b54ac021525d59de2f1`.

The already-retained representative source-identical evidence from the preceding sampled vertex-only step remains useful context but is not promoted as exact-head dense evidence: at `+36.55°` the earlier representative cone margin was `3.0382103319609285e-05 rad` (`0.00174076629294402°`) for pair `115 / 137`, shared vertex `65`; at `+36.60°` vertex-only cone pairs were uncertified and the separate known nonadjacent pair `114 / 137` remained intersecting. The current 0.05° successor is specifically intended to tighten the sampled interval without changing those ownership boundaries.

## Handoffs recorded

- **Rigging PR #17:** comment `5718193980` — exact head, dense 0.05° scope, queued CI, previous green rollback and strict non-claims.
- **Geometry PR #16:** comment `5718195392` — exact `opening_repair` topology consumed unchanged; no Geometry edit requested; HOLD does not transfer as PASS.
- **Animation PR #22:** comment `5718197084` — structural owner-rig observation only; no anatomy/ROM, amplitude, timing, interpolation, looping or playback authority transfers.
- **Technical Art PR #21:** comment `5718198606` — no target-host contact preservation, skin/direction-frame/tangent-space equivalence, Runtime/device behavior or visual acceptance transfers.

No Runtime handoff implies acceptance. Runtime/controller/device/performance behavior was neither changed nor tested by this activation.

## Interpretation / current blocker

The strongest truthful statement at this activation is:

> The exact unchanged review-006 Character owner rig now has an implementation and exact-CI lane for a denser 0.05° sampled vertex-only-neighbour cone guard covering all 845 single-vertex neighbouring face pairs per shoulder from `-40°` through `+36.55°`. Exact-head CI is still queued, so the new dense guard remains HOLD. Continuous between-sample vertex-only contact freedom is still unproven, and `+36.60°` remains outside the safe guard with the prior nonadjacent failure boundary retained.

## Truth boundary / explicit non-claims

This activation does **not** establish:

- a PASS for the new dense observer before exact-head CI completes;
- mathematical continuous vertex-only neighbour contact/fold freedom between the 0.05° samples;
- an exact first-contact angle;
- anatomy or human shoulder range of motion;
- Animation amplitude, timing, interpolation, playback, looping or clip acceptance;
- Technical-Art target-host skin/direction-frame/tangent-space/contact equivalence;
- Runtime controller, state-machine, renderer, target-device or performance acceptance;
- gameplay collision suitability;
- final Materials / Art Direction / Visual QA acceptance;
- source adoption or CANON;
- production/game readiness;
- Rigging mastery.

## Four-root gate

- **Truth:** the new implementation is recorded as HOLD while exact-head CI is queued; the previous green rollback remains authoritative and new numeric outcomes are not fabricated.
- **Agency / non-domination:** Rigging does not seize Geometry topology, Animation motion, Technical-Art transport, Runtime behavior, Materials shading, Art preference or QA acceptance.
- **Continuity:** previous status blob `217443c1...`, previous green Character head `7d37903e...`, exact source/topology/profile identities and earlier Character/Object/Animal evidence remain rollback-addressable.
- **Wisdom before speed:** the rig was not retuned to force a result. The already-existing vertex-only observer was tightened in its own lane with explicit exact-CI gating rather than opening a duplicate branch or claiming continuity from denser samples.

The four AXM roots remain the merge gate.

## Next Rigging trigger

Re-scan the full constellation before the next change.

For Character, first consume the exact-head result of workflow `35249668684`. Only if the dense sampled guard becomes evidence-backed and the constellation still leaves it as the highest-leverage Rigging-owned gap should a later pass consider a conservative **continuous** vertex-only cone-separation certificate. Do not infer continuity merely from 0.05° density, and do not continue Character by cadence if another design repository exposes a stronger grounded rig, weighting, constraint, socket or articulation defect.
