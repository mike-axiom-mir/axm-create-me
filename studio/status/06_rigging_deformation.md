# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_MINUS40_PLUS36_STRUCTURAL_SAFE_ENVELOPE / CI_PASS / +37° EXPECTED FAILURE WITNESS RETAINED / ANIMATION + RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, all current specialist status files, and the live design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests, CI and retained evidence are in `mike-axiom-mir/axm-character-design`; this file records scope, evidence, handoffs, truth boundaries and rollback identities only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous coordination state is preserved at status blob `8ba78dee4b71e947730e621a29e62768d655c54f`; its selected product anchor was Object PR #27 head `29b3a4828b020fe608085df5eaaf9d33d5ea331f` (`PASS_SOURCE_OWNED_SERVICE_SURFACE_RIG_FRAME_BINDING_111_POSES`).

## Constellation / duplication scan

Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc were rescanned together with all 14 specialist status files and current open PRs.

The previous Object and Animal Rigging lanes remain mature and were not duplicated. Character became the highest-leverage fresh lane because independent Art / Visual QA had selected review-006, and Geometry PR #16 then supplied the exact receiver Rigging had been waiting for. Geometry explicitly required a fresh deformation rebind with no accepted-E Rigging PASS transfer.

Fresh Geometry handoff:

- Character Geometry PR #16, exact head `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- selected exact stage `opening_repair`;
- review-006 source SHA-256 `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- review-006 proof-mesh SHA-256 `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- selected topology digest L `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- selected topology digest R `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`;
- neutral nonadjacent-intersection result: zero on both sides.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

New draft PR: **#17 — `Rigging: rebind review-006 shoulder release to opening repair`**

Branch: `studio/rigging-character-review006-rebind-001`

Exact current Rigging head: **`efa48c344f1b8c9e70c4c5dfdbf4a3031dacd777`**

PR state after evidence completion: **open / draft / mergeable**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_MINUS40_PLUS36_STRUCTURAL_SAFE_ENVELOPE`**

The bounded improvement is a **Rigging structural motion constraint**, not a new source, topology, joint layout or weighting profile. The exact historical angle-conditioned release method is rebound from scratch to review-006, its newly exposed boundary is retained, and the currently proven structural envelope is constrained to `-40°..+36°` rather than silently inheriting the historical `-40°..+40°` verification range.

## Exact source / rig identity preserved

Review-006 / Geometry identity:

- source ID: `character-neutral-a-shoulder-pose-clearance-review-006`;
- source SHA-256: `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- proof-mesh SHA-256: `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- Geometry PR #16 head: `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- exact selected receiver: `opening_repair`;
- topology digest L: `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- topology digest R: `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`.

Historical Rigging method identity retained as method precedent only:

- historical Rigging PR #12 head: `329c485f567faeeb79198c7b1ebc2974b3c3db60`;
- profile-source head: `62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- donor Rigging head: `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- successor rig ID: `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- release profile: `angle-conditioned-proximal-release-power12-v1`;
- profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- donor rig-plan digest: `e1011be035f122cdbe86a8c8cf8846499ec0148d7b4adf05605d86bfac3e1f99`;
- formula remains exactly `0.10 * (abs(angle_deg) / 40.0) ** 12`;
- L joint axis remains `[0,-1,0]`; R remains `[0,1,0]`; joint origins are rebuilt from the exact review-006 shoulder landmarks.

Geometry's one index-only unused-vertex prune is mapped explicitly into the Rigging vertex-role layout. Retained positions are neither moved nor silently reordered.

## Discovery retained: full -40..+40 diagnostic

The first exact review-006 rebind head `93e957eca152c45286924da44e4f085af2de69b2` tested every integer shoulder delta from `-40°` through `+40°` on both sides — **162 candidate poses**.

All 162 remained:

- finite and noncollapsed;
- within fixed-socket drift gates;
- within rigid-arm-radius drift gates;
- bilaterally mirrored;
- neutral-compatible with Geometry's zero-intersection receiver.

Full-diagnostic structural extrema:

- minimum triangle-area ratio: `0.7186088838267559`;
- maximum triangle-area ratio: `1.1713794141511422`;
- minimum edge-length ratio: `0.7789145787809656`;
- maximum edge-length ratio: `1.1578206111388558`;
- maximum fixed-socket drift: `5.900916318210353e-16 m`;
- maximum rigid-arm-radius drift: `1.6653345369377348e-16 m`.

The nonadjacent self-intersection observer exposed the important new boundary instead of allowing a historical PASS transfer:

- `+37°`: **1 pair per side**;
- `+38°`: **5 pairs per side**;
- `+39°`: **8 pairs per side**;
- `+40°`: **8 pairs per side**;
- total across both sides: **44 pairs**;
- nonzero sampled poses: **8**;
- maximum in one sampled pose: **8 pairs**;
- every sampled pose from `-40°` through `+36°`: **0 pairs**.

The discovery result is preserved as evidence; it was not rewritten into a fake full-envelope PASS.

## Bounded successor: -40..+36 structural safe envelope

Rather than alter source form, topology, joint semantics or the exact historical weighting formula, Rigging added the smallest bounded constraint:

- safe sampled local-delta envelope: **`-40°..+36°` inclusive**;
- step: **1°**;
- 77 angles per side / **154 posed samples**;
- all 154: structural PASS;
- all 154: zero nonadjacent-triangle intersections;
- first outside-envelope positive witness: **`+37°`**, one pair on each side, intentionally retained as expected failure.

Representative retained safe poses: `-40 / -20 / 0 / +20 / +36°`, plus explicit failing `+37°` specimens.

Safe-envelope extrema:

- minimum triangle-area ratio: **`0.7192381442967123`**;
- maximum triangle-area ratio: **`1.1713794141511422`**;
- minimum edge-length ratio: **`0.8641792313518996`**;
- maximum edge-length ratio: **`1.157820611138732`**;
- maximum fixed-socket drift: **`5.900916318210353e-16 m`**;
- maximum rigid-arm-radius drift: **`1.6653345369377348e-16 m`**.

At `+36°`, the unchanged release profile yields proximal weight `0.028242953648100012`, remains non-worse than the anchored-proximal control and strictly improves it. Both safe boundaries, `-40°` and `+36°`, are non-worse than and strictly improve that control on both shoulders.

This is a Rigging structural guard only. It is **not** an anatomical range-of-motion definition and does not grant Animation authority over the range.

## CI / retained evidence

Current exact-head dedicated workflow **`35205701479`** completed **SUCCESS** at `efa48c344f1b8c9e70c4c5dfdbf4a3031dacd777`.

- Python 3.11 full Character suite: **PASS**;
- Python 3.13 full Character suite: **PASS**;
- exact Geometry ancestry: **PASS**;
- exact discovery-head ancestry: **PASS**;
- historical Rigging/profile-source identity gates: **PASS**;
- 154-pose structural safe-envelope proof: **PASS**;
- 154-pose nonadjacent-intersection gate: **PASS**;
- `+37°` expected-failure witness: **PASS_EXPECTED_FAILURE**;
- evidence upload: **PASS**.

Repository baseline workflow **`35205701487`** also completed **SUCCESS** at the same exact head.

Retained exact-head artifact:

- artifact **`10489662362`**;
- uploaded size **`21,463 B`**;
- GitHub Actions SHA-256 **`b2bd5aafabf535196743386ee62efef78f427d4feba06257d50c120def6c93ad`**;
- independently downloaded/rehashed SHA-256 **`b2bd5aafabf535196743386ee62efef78f427d4feba06257d50c120def6c93ad`**;
- retains exact current head, Geometry head, discovery head, historical Rigging head, profile-source head, machine-readable structural-safe-envelope contract/audit, representative safe OBJ specimens and the explicit `+37°` failing witnesses.

The earlier full-diagnostic artifact is also retained separately at discovery head `93e957ec...`: artifact `10489631921`, 141,899 B, independently rehashed SHA-256 `9f6b285cb101be256dabf1a34bb92387a20e1ff879f9d192a50e35c7b891605f`.

## Handoffs recorded

- current Rigging PR #17: comment `5712177742` — exact PASS/HOLD split, current CI/artifact and non-claims;
- Geometry PR #16: comment `5712178896` — exact receiver survives the constrained envelope; `+37°` remains first deformation witness; no topology rewrite requested;
- historical Rigging PR #12: comment `5712180322` — exact profile reused as method identity only; no historical source/PASS transfer;
- Organic PR #2: comment `5712181421` — source/proof identity unchanged; no source-owned defect returned within the bounded structural envelope.

Animation has **not** adopted this range. The PR and this status carry an explicit Animation handoff without inventing a current Animation acceptance lane. Technical Art / Runtime likewise have no transport/controller acceptance from this result.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- mathematical continuous-motion freedom between the one-degree samples;
- indexed-neighbour fold/contact freedom or gameplay collision freedom;
- anatomy or anatomical shoulder range of motion;
- Animation clip timing, interpolation, wall-clock playback, acting/style or Animation acceptance;
- Technical-Art skeleton/skin export/import or target-engine transport;
- Runtime importer/controller/state-machine/input/device/performance acceptance;
- silhouette, volume, anatomy or final deformation visual quality;
- review-006 source adoption, CANON, production readiness, game readiness or Rigging mastery.

The `+37..+40°` positive-side findings remain visible, rollback-addressable evidence. They are not erased by the safe-envelope constraint.

## Four-root gate

- **Truth:** no historical accepted-E PASS was inherited. The full 162-pose diagnostic exposed `+37..+40°` failures and retained them; the successor claims only the exact 154 sampled poses that actually pass.
- **Agency / non-domination:** Rigging consumes Geometry's exact receiver and historical method without taking Organic source ownership, Geometry topology authority, Animation motion authority, Technical-Art transport authority, Runtime authority or visual acceptance authority.
- **Continuity:** the exact discovery head `93e957ec...`, current successor `efa48c34...`, Geometry head, historical Rigging/profile identities, earlier Object status and retained artifacts remain explicit rollback anchors.
- **Wisdom before speed:** rather than retune weights to force a broader claim or ignore the positive-side failure, Rigging chose the smaller measured structural constraint and preserved the failing boundary for downstream decision-making.

## Continuity / rollback anchors

Current Character chain:

- Geometry PR #16 `8ad006f91ebb9934d5df98702e4410c74a1e68ea` — exact review-006 `opening_repair` receiver;
- Character Rigging discovery PR #17 `93e957eca152c45286924da44e4f085af2de69b2` — full `-40..+40°` diagnostic exposing `+37..+40°` nonadjacent intersections;
- Character Rigging PR #17 `efa48c344f1b8c9e70c4c5dfdbf4a3031dacd777` — `-40..+36°` structural safe-envelope constraint;
- historical Character Rigging PR #12 `329c485f567faeeb79198c7b1ebc2974b3c3db60` — accepted-E method precedent only.

Earlier independently meaningful Rigging anchors remain:

- Object PR #3 `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775` — historical lid articulation;
- Object PR #20 `a1acd2bcb2074f41e536562f2673508e2cb0a4d5` — source-owned lower latch lever Rigging rebind;
- Object PR #23 `9556308c9986f71519bc488badc1b1a63e855e7e` — lower-lever target hierarchy binding;
- Object PR #27 `3e1234b73a0d60a2ae36137b24d7802ed4255d53` — finite 101-authored-pose ordering;
- Object PR #27 `44e0a56872a823cf768c749672116fd026b1ef5e` — continuous moving-lid keeper/lever clearance;
- Object PR #27 `ab0391f2e85ba80c8731af118bcfda2424215f9c` — continuous neutral-lid proof-volume exit/re-entry classification;
- Object PR #27 `29b3a4828b020fe608085df5eaaf9d33d5ea331f` — source-owned service-surface rig-frame binding;
- Animal Rigging `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; its historical transported static direction-frame HOLD remains separate.

## Next Rigging & Deformation pass

1. Re-scan the constellation and current specialist status; do not automatically continue Character.
2. If a downstream Character Animation or Technical-Art receiver explicitly binds PR #17, require exact source/topology/profile/envelope identity and its own acceptance evidence.
3. Do not silently turn `-40..+36°` into anatomy, an Animation ROM, continuous collision freedom or Runtime enforcement.
4. If Geometry or visual review returns a measured defect near the `+37°` boundary, preserve the current safe-envelope evidence and open/advance the correct owning lane rather than silently retuning the rig.
5. Keep prior Object/Animal evidence, exact rollback identities and the four AXM roots explicit.