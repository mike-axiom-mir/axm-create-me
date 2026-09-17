# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **HOLD_CHARACTER_REVIEW006_CONTINUOUS_VERTEX_ONLY_NEIGHBOR_CONE_MINUS40_TO_PLUS3655__EXACT_HEAD_CI_QUEUED / EXACT SOURCE-RIG IDENTITY PRESERVED / EXISTING PR #17 ONLY / +36.60° FAILURE BOUNDARY RETAINED / ANIMATION + TECHNICAL-ART + RUNTIME + VISUAL ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, this specialist status, all current specialist status files, and the live open-PR state of every design repository before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests and workflow changes in this activation live only in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the internal merge gate: **Truth; Agency / non-domination; Continuity; Wisdom before speed**.

Immediate predecessor coordination blob: **`b7ebdfee9cb44e3dfaeab15eed87889cce25bfff`**.

That predecessor remains rollback-addressable and records the dense `0.05°` sampled vertex-only observer at Character head `735df38e0fb4a38886da940a2de7045cc4321a28`, plus the previous fully green continuous nonadjacent / continuous edge-adjacent boundary at head `7d37903ee34c0a78d5d04ec22d7095d14bebeb3b`. This activation extends that history; it does not silently replace it.

## Constellation / duplication scan

The highest-leverage unclosed Rigging-owned gap remained Character review-006 **between-sample continuity for the 845 face pairs per shoulder that meet only at one indexed vertex**.

- **Character:** existing draft Rigging PR #17 remains the single owning lane. Continuous nonadjacent-triangle and continuous edge-adjacent same-ray fold predicates were already green through `+36.55°`; the remaining vertex-only class had only sampled evidence. This activation stays in PR #17 and adds only a continuous certificate attempt for that same predicate.
- **Animal:** current Rigging / Technical-Art / Runtime / Materials lanes already own direction-frame transport and target-host questions. No duplicate Animal rigging lane opened.
- **Object:** mature Rigging PR #27 already owns latch/socket/service-frame articulation. No stronger new owner-local gap displaced Character.
- **Building:** active Hard-Surface, Geometry, Materials and Procedural lanes own the current utility-panel work; Rigging did not seize it.
- **Nature / Weather / Map:** current world/effect/playback/receiver work remains owned by Environment, VFX, Animation, Technical Art and Runtime.
- **Weapon / Armor / Unit:** no current implementation-backed articulated source justified inventing a rig. Their current scan exposed no stronger grounded Rigging defect.
- **Misc / shared UC:** no source-local articulation defect justified generic machinery or UC policy transfer.

## Owning lane / exact identity

Repository: `mike-axiom-mir/axm-character-design`

Existing draft PR: **#17 — `Rigging: rebind review-006 shoulder release to opening repair`**

Branch: `studio/rigging-character-review006-rebind-001`

Base: `studio/geometry-character-review006-rebind-001`

Exact current head after this activation: **`201960f5faca931a878adf4b236193b2a2ed7a09`**.

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

**`axm.character-review006-continuous-vertex-only-neighbor-cone/v0.1`**

Added on the existing Character Rigging branch:

- `src/axm_character_design/review006_shoulder_continuous_vertex_only_cone.py` — commit `51a2ab8357ad99e3c8c293a0d1472ece39e633cb`;
- `tests/test_review006_shoulder_continuous_vertex_only_cone.py` — commit `cab2a569da7299ca23b0f4d1f3556ca85acff477`;
- `.github/workflows/rigging-character-review006-continuous-vertex-only.yml` — current head `201960f5faca931a878adf4b236193b2a2ed7a09`.

The observer keeps the exact existing vertex-only positive spherical-cone predicate and closes only the mathematical gap between sampled owner poses. For each adaptive angular interval:

1. pose the unchanged owner rig at the interval midpoint;
2. compute the exact midpoint cone separation for every one of the **845 vertex-only neighbouring face pairs per shoulder**;
3. derive conservative outgoing-edge direction motion bounds from the unchanged owner per-vertex speed bounds and a lower-bounded edge length;
4. lift those endpoint bounds to a conservative whole-cone-arc angular bound using the positive-blend normalization lower bound `cos(alpha/2)`;
5. require midpoint cone separation to remain greater than both cone-motion bounds plus the existing contact epsilon and strict numerical margin;
6. fail closed and subdivide any interval that cannot be certified.

Base interval width is `0.5°`, with adaptive subdivision. The intended guard is every real-valued owner angle from **`-40°` through `+36.55°`**. The existing dense `0.05°` observer is retained as a predecessor rather than rewritten.

The retained `[+36.55°, +36.60°]` extension is an explicit negative control: the new observer must reject promotion through the known outside-boundary state rather than smoothing over it.

If exact-head CI eventually validates this observer, the three indexed face-pair contact classes will have separate continuous structural certificates over their stated predicates: nonadjacent, edge-adjacent same-ray fold, and vertex-only cone contact. That stronger statement is **not promoted yet**.

## Validation state — HOLD, not PASS

Exact current-head workflow state observed after authoring:

- `35253264571` — **Rigging Character review006 continuous vertex-only evidence** — QUEUED;
- `35253264253` — **Rigging Character review006 exact rebind** — QUEUED;
- `35253264314` — **Character organic form baseline** — QUEUED.

All three target exact head `201960f5faca931a878adf4b236193b2a2ed7a09`.

Therefore this activation does **not** promote the continuous vertex-only result to PASS and does not invent minimum certificate slack, subdivision depth, bilateral residuals or artifact metadata before CI/evidence completes.

Previous fully green rollback remains authoritative:

- head: `7d37903ee34c0a78d5d04ec22d7095d14bebeb3b`;
- workflow: `35240911127` — SUCCESS;
- artifact ID: `10505493672`;
- files: 37;
- size: 56,022 B;
- SHA-256: `01cf4f933ce02e36fa81e73b86ef27b5797f414b64175b54ac021525d59de2f1`.

That green rollback already retains continuous nonadjacent-triangle clearance and continuous edge-adjacent same-ray fold clearance for every real owner angle from `-40°` through `+36.55°`. `+36.60°` remains outside the guard with the retained bilateral nonadjacent triangle pair `114 / 137` failure. No exact first-contact angle is claimed.

## Handoffs recorded

- **Rigging PR #17:** comment `5718639925` — exact current head, new continuous vertex-only scope, queued exact-head CI, previous green rollback and strict non-claims.
- **Geometry PR #16:** comment `5718641294` — exact `opening_repair` topology consumed unchanged; no Geometry edit requested; HOLD does not transfer as PASS.
- **Animation PR #22:** comment `5718643235` — no anatomy/ROM, amplitude, timing, interpolation, playback, clip or visual-motion authority transfers.
- **Technical Art PR #21:** comment `5718644298` — no target-host skin/inverse-bind/direction-frame/tangent/contact/controller/performance acceptance transfers.

No Runtime handoff implies acceptance. Runtime/controller/device/performance behavior was neither changed nor tested by this activation.

## Truth boundary / explicit non-claims

This activation does **not** establish:

- a PASS for the new continuous vertex-only certificate before exact-head CI completes;
- the exact first-contact angle;
- anatomy or human shoulder range of motion;
- Animation amplitude, timing, interpolation, playback, looping or clip acceptance;
- Technical-Art target-host skin, inverse-bind, direction-frame, tangent-space or contact equivalence;
- Runtime controller, state-machine, renderer, device or performance acceptance;
- gameplay collision suitability;
- final Materials / Art Direction / Visual QA acceptance;
- source adoption or CANON;
- production or game readiness;
- Rigging mastery.

## Four-root gate

- **Truth:** current work is recorded as HOLD while exact-head CI is queued; no certificate metrics or artifact evidence are fabricated.
- **Agency / non-domination:** Rigging does not seize Geometry topology, Animation motion, Technical-Art transport, Runtime behavior, Materials shading, Art preference or QA acceptance.
- **Continuity:** predecessor status blob `b7ebdfee...`, green rollback `7d37903e...`, exact source/topology/profile identities and earlier Character/Object/Animal evidence remain rollback-addressable.
- **Wisdom before speed:** the rig was not retuned to force a pass. The remaining mathematical gap was attacked with a narrow fail-closed observer on the existing owner lane, preserving the known `+36.60°` failure instead of hiding it.

The four AXM roots remain the merge gate.

## Next Rigging trigger

Re-scan the full constellation first. For Character, consume the exact-head result of workflow `35253264571` before promoting this certificate. If it fails, preserve the failure and repair only the observer/math unless evidence proves the source rig itself is wrong. If it passes, retain exact metrics/artifact identity and then reassess whether any higher-leverage rig, weighting, constraint, socket or articulation gap exists elsewhere before extending Character further.
