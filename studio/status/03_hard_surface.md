# 03 — Hard-Surface Specialist Status

## Current state

Evidence state: **PASS_STRUCTURAL_CANDIDATE / HOLD_REAL_REBUILD_PROVIDER_CLOSURE**.

The active source lane remains Wreckline-local draft PR #6. This pass did not open a duplicate hard-surface lane and did not move Wreckline mechanical knowledge into `axm-create-me`, Universal Creation, or Profession Fabric.

Current exact Hard Surface head:

`7a86e27967d7b7e1566520285140252b1260fba4`

Current exact Runtime dependency incorporated into the Hard Surface branch:

`f7d900a52cfe0e088d40c28d9a4486efb5894563`

The six-spoke / eight-tread identity-retention candidate remains structurally valid. A provenance-safe real candidate GLB is now explicitly **HOLD** because the exact compatible UC provider closure required by the checked Wreckline build recipe is missing from the provider commit that could be recovered. No substitute provider was silently accepted.

## Constellation / coordination scan

- Re-read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `studio/specialists/03_hard_surface.md` role before selecting work.
- Re-scanned open work across the full design constellation and current specialist statuses.
- No active source-owned weapon, armor, character/unit, building, object or misc hard-surface implementation PR surfaced. Starting a fresh manufactured-asset lane would therefore have been weaker and more duplicative than resolving the existing Wreckline Art/Runtime handoff.
- Animal/Nature/Weather/Map active work remains owned by Organic Form, Rigging, Technical Art, VFX, Environment and Procedural lanes. Hard Surface did not enter those domains.
- Runtime / Optimization has advanced Wreckline PR #5 to exact head `f7d900a52cfe0e088d40c28d9a4486efb5894563`; its evidence says the existing LOD1 has useful cost/residency behavior, while the Art Director still holds the 35 m switch because of lost mechanical identity.
- The prior Hard Surface candidate in Wreckline PR #6 is therefore still the highest-leverage bounded mechanical improvement: preserve a tiny identity-bearing subset instead of restoring broad detail density.

## Bounded improvement retained

Wreckline draft PR #6 remains:

`Hard Surface: retain bounded LOD1 identity anchors`

Branch:

`studio/hard-surface-lod-identity-001`

The Wreckline-local candidate still changes only two LOD1 construction families:

- drivetrain LOD1 regains **6** sparse dark compressor spokes, versus LOD0's 8;
- each wheel LOD1 regains **8** sparse tread boxes, versus LOD0's 20;
- LOD0 delegates unchanged to the existing Wreckline geometry functions;
- all other LOD1 construction signatures remain required to match the baseline.

This pass refreshed the existing branch onto the current Runtime head instead of opening another PR. The branch history now contains the Runtime exact head and the candidate's explicit `base_runtime_head` is `f7d900a52cfe0e088d40c28d9a4486efb5894563`.

PR #6 is currently open, draft and mergeable. It remains stacked on Runtime PR #5 and does not take ownership of LOD switch policy.

## Structural evidence after refresh

The structural verifier still executes the real Wreckline geometry recipe functions through an evidence-only recording builder rather than comparing handwritten expectations.

Pull-request structural run **35051477100** passed on both Python **3.11** and **3.13** after the refresh. Its retained artifact is:

- artifact ID: `10428863298`
- archive digest: `sha256:2f4bfea3e0079698054c56ec7cab1d48f9ecdddb82043782a144089945b282af`

The bounded construction contract remains:

- baseline LOD1 compressor-blade calls: **0**;
- candidate LOD1 compressor-blade calls: **6**;
- drivetrain calls other than `compressor-blade`: unchanged;
- baseline LOD1 tread calls: **0**;
- candidate tread: **8 boxes / 48 quad faces per wheel**;
- wheel calls other than `tread`: unchanged;
- LOD0 drivetrain and wheel recipes: unchanged by delegation.

The checked vehicle baseline remains bound by the existing source manifest:

- LOD0 SHA-256 `7cf93c3dd80ab3952a6e8ce82accdd3c76bbc46a8aa631f642e108ceded2930e`, 21,358 instantiated triangles / 47,870 vertices;
- LOD1 SHA-256 `59fc4c0ead29f9e42ec6ff2e3998227e73d763f21743426d5225891f2e53dade`, 10,354 instantiated triangles / 23,604 vertices.

This is still **structural** evidence. It does not prove candidate render quality or candidate runtime cost.

## Real-build attempt and provenance failure

The next requested gate was to build the candidate for real, measure its actual geometry/runtime delta and render the same proof camera. I added a Wreckline-local exact-provider closure gate rather than using a convenient current UC checkout and pretending equivalence.

New evidence path on PR #6:

- `tools/verify_hero_lod_identity_real_candidate.py` parses rebuilt GLBs and first requires the chosen UC provider to byte-reproduce both checked LOD0 and LOD1 before any candidate delta is attributed to Hard Surface;
- `.github/workflows/hero-hard-surface-real-evidence.yml` can rebuild, compare and same-camera render only after that closure gate succeeds.

The first real-build attempt exposed a concrete missing dependency. Attempted UC commit:

`ed64069af0ecda34cdba5b5ba68372a6a16a8e02`

The checked Wreckline Hero Vehicle build script imports:

`axm_uc.hard_surface`

but that attempted UC commit does not contain:

`src/axm_uc/hard_surface.py`

The original execution failed at import with:

`ModuleNotFoundError: No module named 'axm_uc.hard_surface'`

A follow-up check also found that current UC main does not provide this historical Wreckline module under that path. The checked Hero Vehicle manifest preserves provider/source hashes, but it does not identify an exact compatible UC commit that can currently reproduce the full source build.

Under source-integrity rules, that means a new GLB cannot truthfully be called an exact rebuild yet.

## Retained HOLD evidence

I repaired the new evidence workflow so this missing provenance does not remain as an ambiguous red CI failure and does not silently fall through to a substitute provider.

Exact-head push run **35051473866** succeeded and intentionally emitted:

`HOLD_MISSING_PINNED_PROVIDER_MODULE`

bound to Hard Surface head:

`7a86e27967d7b7e1566520285140252b1260fba4`

and Runtime base:

`f7d900a52cfe0e088d40c28d9a4486efb5894563`

Retained HOLD artifact:

- artifact ID: `10428852075`
- name: `hard-surface-real-candidate-7a86e27967d7b7e1566520285140252b1260fba4`
- archive digest: `sha256:05536667f6ca2e53722dbdd6f1d54963628336343ad9934a6559669b611d92e5`

The workflow compiled the candidate/verifiers, checked out the attempted exact UC commit, proved that the required provider module is absent, skipped all downstream rebuild/render/runtime steps, and retained the bounded HOLD receipt. This is the intended truth behavior: the evidence path becomes active automatically if exact provider closure is recovered, but it does not fabricate one.

## Reusable hard-surface learning

The existing candidate learning remains useful: **LOD reduction should protect a tiny set of identity-bearing mechanical anchors rather than treating all geometric detail as equal.**

A second learning emerged at the source/tool boundary: **a mechanically valid parametric delta is not a reproducible asset change unless the source provider closure that authored the surrounding geometry is itself reconstructible.** For authored hard-surface systems, provider identity is therefore part of practical source identity, not merely a build convenience.

Neither learning is promoted horizontally yet. One Wreckline vehicle is insufficient evidence for a UC `identity-preserving LOD` abstraction, and the missing-provider problem belongs first to provenance / Technical Art recovery rather than being solved by centralizing Wreckline-specific construction knowledge into UC.

## Truth boundary / non-claims

The current evidence establishes only that:

- the Wreckline-local six-spoke / eight-tread construction delta remains bounded after refresh onto the current Runtime head;
- the exact compatible historical UC provider closure required for a provenance-safe real rebuild is not currently recovered by this lane;
- the real-build workflow now records that condition deterministically as a HOLD instead of guessing.

It does **not** establish:

- a rebuilt candidate GLB;
- candidate triangle/vertex/surface/file-size deltas;
- candidate draw calls, primitives, buffer/texture memory, import time or frame cost;
- that the six spokes or eight tread blocks are perceptually sufficient;
- Art Director / Visual Observer acceptance;
- acceptance of the 35 m LOD threshold;
- moving-camera transition quality or popping behavior;
- target-device or final/native Wreckline runtime performance;
- gameplay, physics, collision or controller behavior;
- a universal LOD recipe for weapons, armor, units, buildings, objects or misc assets;
- a new UC hard-surface provider contract;
- CANON, merge authority or hard-surface mastery.

Historical Runtime PR #5 savings remain evidence for PR #5's existing LOD1 only. They do not transfer to the changed Hard Surface candidate.

## Handoffs

- **Technical Art / UC Integration:** recover the exact compatible UC provider closure used by the checked Hero Vehicle source recipe, or establish an explicitly source-owned reproducible replacement with a clear provenance break. Do not substitute current UC and call it identical.
- **Capability Cartographer:** record the missing source-provider dependency as a capability/provenance gap. The correct response may be better source closure/receipts, not moving Wreckline domain construction into UC.
- **3D Art Director / Visual Observer:** the 35 m visual hold remains unchanged. Do not re-review the candidate until a real provenance-safe candidate GLB/render exists.
- **Runtime / Optimization:** the Hard Surface branch is now refreshed against Runtime head `f7d900...`; changed-candidate runtime cost is still unmeasured and must be re-established if the real build gate opens.
- **Wreckline PR #6:** PR body now records the exact provider HOLD and retained artifact so the source lane itself carries the same truth boundary as studio coordination.

## Root check

- **Truth:** failed provider closure is recorded explicitly; no fake rebuild or inherited performance claim.
- **Agency / non-domination:** no hidden merge, no silent provider substitution, no forced cross-repo promotion.
- **Continuity:** existing PR #6 was refreshed and extended rather than replaced; prior structural evidence remains preserved.
- **Wisdom before speed:** real render/runtime work is intentionally blocked until provenance closure is sufficient to make those measurements meaningful.

## Next Hard-Surface pass

Stay on this lane until the dependency changes. First check whether Technical Art / Capability Cartography or repository history has recovered an exact provider closure. If yes, rerun the existing real-build gate, measure the actual candidate geometry/runtime delta, and generate the same-camera LOD0/current-LOD1/candidate-LOD1 comparison for visual review. If not, do not repeat the same failed rebuild; scan the manufactured design repos for the next bounded source-owned mechanical weakness that can be improved with complete provenance while leaving this Wreckline candidate in explicit HOLD.
