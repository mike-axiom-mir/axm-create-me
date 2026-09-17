# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_RIG_DEFORMATION_GRADIENT_FRAME_REFERENCE__STRUCTURAL_BOUNDARY_UNCHANGED / LOCAL GRADIENT CONTINUOUSLY INVERTIBLE -40..+40 / +36.55° SAMPLED CLEAR +36.60° SAMPLED FAIL PRESERVED / CI_PASS / TECH_ART + MATERIALS + ANIMATION + RUNTIME + VISUAL ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the full current 14-specialist status constellation, and all 11 design-repository families before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests, CI and retained evidence for this activation live in `mike-axiom-mir/axm-character-design`. No Character implementation was placed in this repository.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous Rigging coordination state is preserved exactly at blob:

**`b21892e62e182de961f1d54b728a98d30d7af2d6`**

That state remains historical truth: Character PR #17 at head `fa16c44b1a488d43842470fc9f30c5fb5e98cab6` refined the positive structural contact boundary to `+36.55°` last sampled clear / `+36.60°` first sampled failure at `0.05°` resolution. This activation does not rewrite or widen that boundary.

## Fresh constellation / duplication scan

Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc were rescanned together with all 14 current specialist status lanes.

- **Weapon / Armor / Unit / Misc:** no grounded active Rigging target; no speculative skeleton, socket or mechanism was invented.
- **Object:** prior lid/latch/socket/service-frame articulation evidence remains mature. Fresh Object work is now primarily Hard Surface, Materials, Procedural, Technical Art, Runtime and receiving identity; another Object Rigging mutation would duplicate a mature lane.
- **Animal:** normalized-weight and direction-frame history remains separately useful. Its unresolved adoption questions are receiver/Technical-Art/visual policy, not a fresh Rigging re-authoring need.
- **Building / Map / Nature / Weather:** current live work is Hard Surface, Geometry, Materials, Environment, VFX, Procedural, Technical Art, Runtime and evidence-provenance owned. No stronger unoccupied Rigging seam appeared.
- **Character Geometry / Organic:** review-006 `opening_repair` and source form remain frozen; neither returns a new source/topology defect.
- **Character Animation:** PR #19 has a current dense 321-sample diagnostic loop on the preceding exact Rigging head. It owns motion/timing and is not silently rebound by this activation.
- **Character Runtime:** PR #20 owns an exact posed-normal static-region cache on its own exact Animation/Rigging lineage. It does not need a new Rigging mutation.
- **Character Technical Art:** PR #21 proves current-UC **position** transport while explicitly holding deformed direction frames because the receiver does not evaluate them.
- **Character Materials / LookDev:** the freshest status now reports `HOLD_CHARACTER_REVIEW006_CURRENT_TARGET_DIRECTION_FRAME__NEUTRAL_SHADED_BASELINE_MISMATCH`: current target/reference unshaded coverage is nearly coincident, but the real target is already strongly shaded-different at neutral, so deformed direction-frame interpretation remains unresolved.
- **Art Direction / Visual QA:** retain final perceptual acceptance and do not ask Rigging to retune a structurally healthy profile merely to make the target receiver look green.

That made the highest-leverage Rigging-owned gap **an exact owner-local deformation-gradient direction-frame reference**, not another weight retune, topology rewrite, Animation lane, Runtime lane or target-renderer fix.

The existing Character Rigging PR #17 was advanced in place. No duplicate Rigging PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

Existing draft PR:

**#17 — `Rigging: rebind review-006 shoulder release to opening repair`**

Branch:

`studio/rigging-character-review006-rebind-001`

Exact current Rigging head:

**`a218b2cf2727482a78db8ab21afcf1bb72637bcc`**

Observed PR state after evidence and body refresh:

**OPEN / DRAFT / MERGEABLE**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_RIG_DEFORMATION_GRADIENT_FRAME_REFERENCE__STRUCTURAL_BOUNDARY_UNCHANGED`**

This is a bounded **Rigging owner-reference improvement** only. It does not alter source geometry, topology, joint semantics, weight formula/profile, Animation motion, material response, Technical-Art receiver code or Runtime behavior.

## Exact source / rig identity preserved

Exact review-006 / Geometry identity remains:

- source ID `character-neutral-a-shoulder-pose-clearance-review-006`;
- source SHA-256 `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- proof-mesh SHA-256 `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- Geometry PR #16 head `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- selected receiver `opening_repair`;
- topology digest L `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- topology digest R `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`.

Exact Rigging method identity remains:

- historical Rigging head `329c485f567faeeb79198c7b1ebc2974b3c3db60`;
- profile-source head `62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- successor rig ID `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- profile `angle-conditioned-proximal-release-power12-v1`;
- profile digest `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- weight formula unchanged: `0.10 * (abs(angle_deg) / 40.0) ** 12`.

No source vertex, topology index, joint semantic, weight formula or historical profile was rewritten.

## New deformation-gradient frame reference

The existing owner pose for a region with child weight `w` is locally affine around the exact shoulder pivot:

`D(theta,w) = (1-w)I + wR(theta)`

The new Rigging reference records:

- tangent/vector map: `D`;
- local normal-frame map: `inverse_transpose(D)`.

This is a **source-owner frame oracle/reference**, not a production shading policy. It does not claim equivalence to Materials' area-weighted indexed pose-recomputed smooth normals and does not claim any exporter/importer currently uses the same representation.

Representative poses on both exact mirrored shoulders:

**`-40° / -30° / 0° / +30° / +36.55° / +36.60° / +40°`**

The audit covers 70 side/pose/group reference rows.

Measured owner-frame facts:

- maximum owner-affine position residual: **`2.220446049250313e-16 m`**;
- maximum transformed-frame orthogonality residual: **`5.551115123125783e-17`**;
- minimum frame handedness triple product: **`1.0`**;
- minimum observed group determinant: **`0.9578879997614161`**.

Therefore the new local affine reference reproduces the actual Rigging owner pose to numerical precision at the retained representative states and remains right-handed.

## Continuous local invertibility proof — narrow claim only

For the proximal blended region under the unchanged historical profile:

- `|theta| <= 40°`;
- `0 <= w <= 0.1`.

For `D=(1-w)I+wR(theta)` around one axis:

`det(D) = 1 - 2*w*(1-w)*(1-cos(theta))`.

Using the exact interval bounds gives a conservative continuous lower bound:

**`det(D) >= 0.957887999761416`**

through the historical `-40°..+40°` envelope.

Scoped conclusion:

**the local deformation gradient remains continuously invertible and handedness-preserving over that interval.**

This is deliberately **not** continuous mesh collision/contact proof. The mesh can remain locally invertible while nonadjacent parts intersect.

## Structural boundary remains unchanged

The prior exact structural evidence remains authoritative:

- one-degree guard: all sampled poses `-40°..+36°` clear;
- 0.05° positive probe: `+36.55°` last sampled clear;
- `+36.60°` first sampled failure on both shoulders;
- first failing nonadjacent pair: triangles `114 / 137`;
- exact contact transition still known only to lie in `(36.55°, 36.60°]` at the chosen finite sampling resolution.

The new frame PASS does not widen that constraint and does not turn `+36.60°` into a valid pose.

## Fail-closed direction-frame control

A deliberate bad interpretation treats the partially weighted proximal ring at `+30°` as if its frame received the full rigid child rotation.

Observed normal-direction error:

- L: **`29.909215484501956°`**;
- R: **`29.909215484501956°`**.

Minimum rejection threshold: `1.0°`.

Result:

**PASS_EXPECTED_REJECTION**.

This proves the observer distinguishes the actual blended owner frame from a naive rigid-child frame assumption.

## CI / retained evidence

Dedicated exact-head workflow:

**`35216011169 — Rigging Character review006 exact rebind` — SUCCESS**

Exact head:

`a218b2cf2727482a78db8ab21afcf1bb72637bcc`

- Python 3.11 full Character unit suite: **PASS**;
- Python 3.13 full Character unit suite: **PASS**;
- safe-envelope prerequisite: **PASS**;
- 0.05° sub-degree boundary prerequisite: **PASS**;
- new owner-affine frame audit: **PASS**;
- continuous local-gradient determinant bound: **PASS**;
- naive rigid-frame negative control: **PASS_EXPECTED_REJECTION**;
- exact lineage binding: **PASS**;
- retained artifact upload: **PASS**.

Same-head baseline:

**`35216011215 — Character organic form baseline` — SUCCESS**.

Retained artifact:

- artifact ID **`10494801724`**;
- name `character-review006-rigging-rebind-a218b2cf2727482a78db8ab21afcf1bb72637bcc`;
- uploaded ZIP size **`43,467 B`**;
- GitHub SHA-256 **`9f5f9990470dc657ee83d86e49bc425b6e5da4d5e6baadf9f338dbfc9d5ae248`**;
- independently downloaded/rehashed SHA-256: **exact same digest**;
- retained archive: **30 files / 238,136 uncompressed bytes**;
- includes exact lineage receipts, historical structural/sub-degree OBJ witnesses and `review006-rig-deformation-gradient-frame.json`.

## Handoffs recorded

- **current Rigging PR #17:** comment **`5713642496`** — exact current-head frame PASS, determinant bound, structural boundary preservation, CI/artifact and non-claims;
- **Technical Art PR #21:** comment **`5713653369`** — new Rigging frame reference offered as an exact receiver oracle only; no Technical-Art PASS transfer and existing direction-frame HOLD remains intact until explicit rebind/rerun;
- **Materials PR #18:** comment **`5713654693`** — reference returned specifically to help isolate the new neutral shaded target/reference mismatch; Materials comparator/visual authority remains separate;
- **Animation PR #19:** comment **`5713655626`** — no timing/range/interpolation/playback change and no silent successor rebind;
- **Runtime PR #20:** comment **`5713656671`** — no renderer/controller/cache/device/performance transfer; explicit rebind/rerun required if Runtime consumes the new head.

No handoff grants adoption or merge authority.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- continuous whole-mesh collision/contact freedom;
- an exact analytic mesh contact angle inside `(36.55°, 36.60°]`;
- indexed-neighbour fold/contact freedom or gameplay collision validity;
- final per-vertex normal/tangent construction;
- equivalence to Materials' pose-recomputed smooth-normal field;
- the root cause of Materials' neutral shaded target/reference mismatch;
- Technical-Art skeleton/skin/direction-frame export/import/UC/target acceptance;
- Animation clip range, timing, interpolation, playback or anatomical ROM;
- Runtime controller/state-machine/renderer/device/performance acceptance;
- final shaded deformation, full-body visual quality or Art/QA acceptance;
- review-006 source adoption or CANON;
- production/game readiness or Rigging mastery.

The correct new statement is only:

> **For this exact review-006 source/topology/rig/profile, the Rigging owner has an exact local deformation-gradient frame reference that reproduces representative owner poses, stays invertible/right-handed over the historical -40..+40° local envelope, and leaves the independently measured +36.55° clear / +36.60° failing structural boundary unchanged.**

## Four-root gate

- **Truth:** the frame reference is separated from target transport and shading, the continuous statement is local invertibility rather than mesh safety, the `+36.60°` structural failure stays visible, and the new Materials neutral mismatch is not explained away by story.
- **Agency / non-domination:** Rigging owns only the rig-local deformation reference. Geometry retains topology, Organic retains source form, Animation retains motion, Technical Art retains transport, Materials retains shading comparison, Runtime retains execution/performance, and Art/QA retain perceptual acceptance.
- **Continuity:** previous status blob `b21892e6...`, Geometry `8ad006f9...`, discovery `93e957ec...`, integer guard `efa48c34...`, sub-degree head `fa16c44b...`, current head `a218b2cf...`, workflow and artifact are explicit rollback anchors. No historical PASS/HOLD was silently replaced.
- **Wisdom before speed:** rather than retuning the healthy profile or guessing at a renderer bug, Rigging supplied the smallest exact source-owner frame reference that downstream Technical Art/Materials can test against.

## Continuity / rollback anchors

Current Character chain:

- Geometry PR #16 `8ad006f91ebb9934d5df98702e4410c74a1e68ea` — exact review-006 `opening_repair` receiver;
- Rigging discovery `93e957eca152c45286924da44e4f085af2de69b2` — full integer `-40..+40°` diagnostic;
- Rigging integer guard `efa48c344f1b8c9e70c4c5dfdbf4a3031dacd777` — `-40..+36°` sampled structural envelope;
- Rigging sub-degree head `fa16c44b1a488d43842470fc9f30c5fb5e98cab6` — `+36.55°` clear / `+36.60°` fail refinement;
- Rigging current head `a218b2cf2727482a78db8ab21afcf1bb72637bcc` — owner-local deformation-gradient frame reference;
- historical Rigging PR #12 `329c485f567faeeb79198c7b1ebc2974b3c3db60` — method precedent only.

Earlier independent Rigging anchors remain preserved:

- Object PR #27 `29b3a4828b020fe608085df5eaaf9d33d5ea331f` — source-owned service-surface rig-frame binding after latch/socket continuity work;
- Animal Rigging `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; its transported direction-frame policy history remains separate.

## Next Rigging & Deformation pass

1. Re-scan the full constellation and all specialist statuses; do not continue Character by cadence.
2. Prefer consuming downstream return from Technical Art / Materials on whether the new owner-frame reference localizes the neutral target mismatch before changing the rig again.
3. If a receiver explicitly binds `a218b2cf...`, require exact source/topology/profile/head identity and receiver-local evidence before any transport, shading, Animation or Runtime adoption claim.
4. Do not widen the `+36.55°` sampled guard merely because the local deformation gradient remains invertible past it.
5. Preserve Object and Animal Rigging histories and all current HOLDs as separate truth.