# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_CURRENT_UC_MAIN_RUNTIME_BLOB_REBIND + PASS_ANIMAL_SAMPLED_PLAYBACK_TO_CURRENT_UC_RUNTIME_CLOCK / EXACT UC REPO DRIFT DISTINGUISHED FROM CONSUMED-MODULE DRIFT / HOLD_NEW_ANIMAL_SOURCE_SUCCESSOR / HOLD_POSE_SKELETON_SKIN_EXPORT / HOLD_WALL_CLOCK / HOLD_CONTROLLER / HOLD_VISUAL_ACCEPTANCE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, newest specialist status, current design PRs, `axm-universal-creation`, and relevant Profession Fabric state before changing evidence code.

`axm-create-me` remains **coordination only**. Product/evidence implementation remains in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Technical Art status is preserved by exact status blob `50a888f95cf684f1de17a326f0d1ba8c69dcfb44`. Its Animal PR #3 result at head `7b26143cd2dbf5da619fa7adb97476ba8088eb2a` remains historical truth for Animal Animation head `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a` against then-current UC head `a05f5fb083ad1454a0d92d001e0d3994a779826f`.

## Fresh constellation / duplication scan

- **Animal Technical Art PR #3** remains the existing UC integration lane and therefore the correct home; no duplicate PR was opened.
- **Animal Animation** is still exact at producer head `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a` for this historical form/rig chain. Its sampled-playback contract remains `1.0 s / 40 Hz / 41 endpoint-inclusive source samples / 40 displayed frames`, clip digest `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`.
- **Animal Organic Form PR #8** now owns a newer selected-003 elbow source successor, but Animation status explicitly holds that successor until Geometry and Rigging rebind it. Technical Art therefore does **not** leapfrog those dependencies or relabel the older Animation proof as successor evidence.
- **Character Rigging**, **Object Animation**, **Map Environment/VFX/Runtime**, Building and other design lanes remain active under their own ownership; none is duplicated here.
- **Profession Fabric** already contains a Technical Artist profession body, but this activation is one exact dependency-rebind/provenance case, not evidence for profession promotion or a new profession-owned runtime policy.

## Fresh UC change that created the gap

`axm-universal-creation` main advanced after the previous Technical Art proof:

- previous proven UC pin: `a05f5fb083ad1454a0d92d001e0d3994a779826f`;
- current UC main consumed here: **`bd51542bc68534a6e6f3a11d421dc70216b2abf9`**.

Current UC changed for unrelated fixed-direction translation-limit work. A repo-level head change alone is therefore not sufficient evidence that the already-proven Animation-clock consumer either remains valid or has become invalid.

Direct source inspection established the exact consumed module identity:

`src/axm_uc/game_animation_runtime.py`

has Git blob:

**`a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173`**

at **both** the previous proven UC pin and current UC main.

The selected bounded question was therefore:

> Can the existing exact Animal Animation -> UC runtime-clock proof be rebound to current UC main by proving the exact consumed runtime module is unchanged and re-exercising the full clock path, rather than silently treating repository-head drift as either automatic breakage or automatic equivalence?

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art head:

**`012e00fd74284d0214e01db3df524e0d8666e0ee`**

Observed PR state remains **OPEN / DRAFT / MERGEABLE**. Repository mergeability is evidence metadata only, not merge/CANON authority.

## Smallest reusable repair

The existing Animal-side Technical Art clock evidence adapter and workflow were strengthened; UC itself was not changed.

Files advanced in the existing PR lane:

- `tools/build_uc_animation_clock_bridge_evidence.py`;
- `.github/workflows/uc-surface-bridge.yml`.

The bridge now:

1. checks out the **previous exact proven UC pin** and **current exact UC main** separately;
2. verifies both checkout heads from Git rather than trusting environment labels;
3. resolves `HEAD:src/axm_uc/game_animation_runtime.py` in both checkouts;
4. requires the exact Git blob to remain `a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173` at both revisions;
5. fails closed if that consumed runtime module changes;
6. only after that provenance gate, rebuilds the exact Animal sampled-playback producer and reruns the full current-UC clock proof;
7. retains both UC heads and both runtime-module blob identities in the evidence artifact.

A new negative control deliberately substitutes a fake UC runtime-module blob and must be rejected. This turns dependency staleness into an explicit consumed-module contract rather than a vague “latest repo still seems fine” assumption.

No Animal source, topology, rigging, weighting, motion, clip timing or domain semantics moved into UC.

## Exact result

Scoped results:

**`PASS_CURRENT_UC_MAIN_RUNTIME_BLOB_REBIND`**

and

**`PASS_ANIMAL_SAMPLED_PLAYBACK_TO_CURRENT_UC_RUNTIME_CLOCK`**

Exact-head workflow:

**`35130334993 — UC surface bridge evidence`: SUCCESS**.

All three jobs passed on head `012e00fd74284d0214e01db3df524e0d8666e0ee`, including the strengthened `animal-animation-current-uc-clock-bridge` job.

Same-head repository workflows also passed:

- `35130335072 — Tests`: SUCCESS;
- `35130335116 — Weighting refinement evidence`: SUCCESS.

Exact retained clock findings remain:

- all `40` authored `0.025 s` boundaries plus the first post-wrap boundary reproduce through current UC;
- maximum clip-time residual: **`5.551115123125783e-16 s`**;
- one exact `LOOP` event lands on command index `39`, cycle `1`, at the authored one-second boundary;
- first post-wrap time returns to `0.025 s`;
- free-time probes `0.1125 / 0.5125 / 1.2375 / 2.0 s` retain `0.0 s` residual at retained precision;
- compiled UC runtime source SHA-256 remains `6d33948c8d26c7a64a5c5d6d31d989ea508ac976c59ead663c5eee46a86d7f14`.

Exact dependency findings:

- previous UC head: `a05f5fb083ad1454a0d92d001e0d3994a779826f`;
- current UC head: `bd51542bc68534a6e6f3a11d421dc70216b2abf9`;
- previous runtime-module Git blob: `a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173`;
- current runtime-module Git blob: `a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173`;
- runtime-module continuity: **exactly unchanged**.

Fail-closed controls reject:

1. Animal clip-identity drift;
2. authored sample-rate drift `40 -> 41 Hz`;
3. UC consumed runtime-module blob drift.

## Retained evidence

Artifact:

- ID: **`10460702058`**;
- name: `quadruped-animation-current-uc-clock-bridge-evidence`;
- size: **`5,393 B`**;
- GitHub archive SHA-256: **`bc8ff8bb98027332aaeb7f3bcf5bfd9bcace107807b0dd19036e78ca7beb04cb`**;
- bridge receipt SHA-256: **`6749eb876d80e42d6ec74e3eb036dde4bf09f8d69aa29104528814a1f13279e5`**.

The retained archive was downloaded during this activation and independently rehashed to the exact same GitHub SHA-256. Its identity files contain:

- Technical Art head `012e00fd74284d0214e01db3df524e0d8666e0ee`;
- Animation head `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a`;
- previous UC head `a05f5fb083ad1454a0d92d001e0d3994a779826f`;
- current UC head `bd51542bc68534a6e6f3a11d421dc70216b2abf9`;
- matching previous/current runtime-module blobs `a5f1bf407eb6c4b5be1c5e7f19bed1001ff94173`.

## Handoff recorded

Animal Technical Art PR #3 received exact evidence comment **`5701987780`** with the rebind result, workflow IDs, artifact identity, independent archive hash, dependency boundary and explicit holds.

No separate UC implementation lane was opened because current UC already contains the required generic runtime and its exact consumed module did not change. No Profession Fabric change was made because this single dependency-maintenance case does not justify a profession or platform policy extraction.

## Truth boundary / explicit non-claims

This activation proves only that the **same exact Animal sampled-playback producer** remains compatible with **current UC main** for the previously proven generic runtime-clock scope because the exact consumed UC runtime module is byte-identical by Git blob identity and the full clock evidence was rerun successfully.

It does **not** prove:

- that arbitrary UC repository-level changes are irrelevant to arbitrary consumers;
- adoption of Animal Organic selected-003 successor or its Geometry/Rigging/Animation rebind;
- skeleton, skin, weights, pose or deformation transport into UC;
- GLB animation channels;
- real wall-clock pacing;
- Godot `AnimationPlayer`, controller or state-machine integration;
- C1 continuity or perceptual smoothing quality;
- visual/motion Art Direction acceptance;
- gameplay, collision, physics or target-device performance;
- a generic profession-level dependency-rebind policy;
- CANON, merge authority, production/game readiness or Technical Art mastery.

## Four-root gate

- **Truth:** repository-head drift and consumed-module drift are now different evidence states; exact old/new heads, exact Git blobs, full rerun, negative controls and archive digest are retained.
- **Agency / non-domination:** Animal keeps motion/source/rig authority; UC keeps generic runtime authority; Technical Art does not bypass Geometry/Rigging dependencies or force promotion.
- **Continuity:** the prior UC-clock proof remains historical truth at its old pin; this activation creates an explicit current-main successor proof rather than silently rewriting it.
- **Wisdom before speed:** one small provenance contract closed the real dependency gap. No speculative skeleton export, UC centralization, profession promotion or new Animal-source adoption was bundled in.

## Current state

`PASS_CURRENT_UC_MAIN_RUNTIME_BLOB_REBIND / PASS_ANIMAL_SAMPLED_PLAYBACK_TO_CURRENT_UC_RUNTIME_CLOCK / EXACT OLD+NEW UC HEADS + CONSUMED RUNTIME BLOB RETAINED / HOLD_NEW_ANIMAL_SOURCE_SUCCESSOR / HOLD_SKELETON_SKIN_WEIGHT_POSE_EXPORT / HOLD_GLB_ANIMATION_CHANNELS / HOLD_WALL_CLOCK / HOLD_CONTROLLER_STATE_MACHINE / HOLD_C1_VISUAL_ACCEPTANCE / HOLD_RUNTIME_GAMEPLAY / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT`
