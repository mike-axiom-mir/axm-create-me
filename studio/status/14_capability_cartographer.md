# Capability Cartographer Status

- Scan started: `2026-09-17T03:55:51Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_TEMPORAL_PROVENANCE_LAYER_MAP / NATURE WALL-CLOCK DELIVERY + ANIMAL DENSE SOURCE EVALUATION PROVE FOUR DISTINCT TEMPORAL IDENTITIES / PF #38 REFINED / PRESENTATION POLICY IS NOT SOURCE SUCCESSOR / UC #176 RECEIVER PARITY MERGED BUT PRODUCER ADOPTION HELD / BUILDING COMPACT-V2 CURRENT-WORLD CONTINUITY FAILURE PRESERVED / NO PRODUCT OR FRAMEWORK IMPLEMENTATION MOVE`

## Selected material cross-repo learning

Fresh VFX and Animation evidence shows that one generic "temporal identity" is too coarse for provenance and claim invalidation. Four identities must remain distinct:

1. **Temporal source identity** — the authored clip/effect plus source-owned duration/cadence semantics.
2. **Evaluation schedule identity** — the exact times/method used to inspect or verify the source. A dense diagnostic evaluation is evidence, not automatically a shipping cadence.
3. **Presentation-policy identity** — the receiver-owned rule that decides which source states are actually presented, interpolated, exposed, skipped, cached, or otherwise scheduled.
4. **Observed-delivery receipt** — what a specific host/renderer/clock/observer actually delivered, including scheduled/presented/skipped counts and measured timing facts.

A PASS in one layer does not transfer to the others. Receiver drops, interpolation, caching, temporal exposure, or retiming must not silently rewrite source identity. Multiple presentation policies can coexist as parallel alternatives; chronology alone does not make one a successor.

## Evidence map

### Nature current-world VFX — real wall-clock delivery is not authored cadence

- Repository / lane: `mike-axiom-mir/axm-map-design`, VFX PR #35.
- Exact reviewed head: `795d9e8862e895e506c756b9ea01cd6228fa7ab7`.
- Source remains the already-selected Nature leaf-flutter effect: 16 unique repeating source phases at nominal `31.25 ms` spacing in a `0.50 s` response cycle; the neutral endpoint is retained only as a witness.
- Receiving policy: `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`.
- The receiver presents only exact source states, never interpolates or retimes them, and records stale source slots instead of hiding them.
- Real Godot 4.7.2 proof-host receipt: `92 / 96` scheduled source slots presented across the two fixed cameras (`47 / 48` and `45 / 48`), therefore 4 skipped source slots are explicit evidence.
- The authored source cadence remains unchanged. The observed host receipt is not evidence that all authored slots were delivered and is not authority to retime/interpolate the effect.
- Final perceptual naturalness and target-device timing/performance remain held.

### Animal Animation — dense diagnostic evaluation is not a playback contract

- Repository / lane: `mike-axiom-mir/axm-animal-design`, Animation PR #5.
- Exact reviewed head: `f5a4036be74737e8e427753ce40e2148963b47e4`.
- Authored motion stays the same `1.0 s`, `40 Hz`, `41-key` clip.
- The fresh proof adds a diagnostic `320 Hz / 321-sample` subframe witness with eight subframes per authored interval, plus a verifier-only between-key mutation negative control.
- This proves source-curve continuity more densely without creating a new shipping/render cadence.
- Target-engine interpolation, real wall-clock pacing, receiving/render motion, and perceptual temporal acceptance remain explicitly unproven.

### Supporting receiver precedent — Map Weather

Existing Map Weather work already separates latest-due exact-state fallback, observer/capture perturbation isolation, interpolation, and temporal exposure as receiving/presentation choices rather than source rewrites. That is supporting precedent only; this Cartography pass does not reopen or reclassify those product lanes.

## Placement decision

The correct current home for the reusable **lineage/evidence contract** is the existing experimental Profession Fabric issue #38, not product repos and not Universal Creation implementation.

PF #38 was refined in comment `5708256348` with the four temporal identities above plus the following bounded rules:

- claim records declare which temporal layer(s) they actually consume;
- each layer may PASS/HOLD independently;
- a changed layer invalidates/reruns only claims that depend on it;
- diagnostic evaluation never becomes an implied shipping cadence;
- presentation alternatives do not become successors unless authority explicitly says so;
- perceptual naturalness, target-engine interpolation, and target-device cadence are never inherited from source/evaluation PASS.

Profession Fabric remains evidence/provenance procedure only. It must not become a scheduler, interpolator, VFX system, Animation system, Runtime policy engine, or perceptual authority.

No current UC code-search evidence supports moving these receiving policies into a new shared temporal runtime capability. Universal Creation should only be considered if later evidence isolates genuinely neutral temporal machinery independently of product/presentation policy. No UC issue was opened for this finding.

Cartography return comments were posted to Map VFX PR #35 and Animal Animation PR #5 so the local lanes retain their exact source/evaluation/presentation/non-claim boundaries. No product implementation was changed.

## Fresh closure / placement confirmation outside the selected finding

UC normalized skin-weight receiver parity has progressed from proposal to merged machinery:

- UC PR #176 is merged at `9332e3455092cf8b0011fd69607d99a1e82a2dc8`.
- Animal Technical Art reran the exact Runtime #27 normalized-u16 candidate against merged UC main and confirmed the receiver now accepts the exact asset while preserving the expected structural/animation bindings.
- That closes the **receiver-contract parity** placement only. Producer weight-width adoption, the measured visual delta, and the separate deformed-direction-frame problem remain held.
- No generic weight quantizer or automatic producer adoption is implied.

## Fresh non-selected signal preserved without opening a duplicate lane

The repaired Building compact-v2 current-world Environment proof now exposes a real receiving-context HOLD rather than the earlier setup failure:

- Map Environment PR #24 exact repaired head: `ef2cb9cc84edc10ab66c2230daca625623e0b00d`.
- Structural build / donor checks pass and the real Godot receiver runs.
- The current-world continuity check fails the exact Materials significant-pixel guard: observed `0.03204040404040404` versus allowed `0.001`.
- Therefore standalone Materials continuity does not transfer into the current-world receiving scene, and compact-v2 adoption remains held.
- The name `compact-v2` is source/reference-relative, not an intrinsic promise that it is smaller than every receiving representation: the current segmented receiver and the compact-v2 candidate remain distinct representations with consumer-specific cost/visual evidence.

This is intentionally recorded as a guarded follow-up signal, not promoted into a second framework proposal in this pass. The existing representation-set / explicit consumer-selection rule already prevents silent adoption or PASS transfer.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; UC intentionally keeps a compatible standalone copy; consumer migration requires explicit rebind and rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170** — proposed attribute-aware indexed-surface eligibility observer, including source→render vertex-domain expansion and protected representation partitions; generic reindex/weld remains held.
- **UC #174 / PR #176** — normalized integer `WEIGHTS_0` receiver parity belongs in neutral UC receiver machinery; parity is merged, producer quantization/adoption remains separate.
- **PF #38** — experimental evidence/provenance procedure: source-successor typed dependency DAG, migration state vs claim verdict, changed/preserved/derived-field dependencies, parallel representation sets with explicit consumer selection, and now four-layer temporal provenance.

## Non-claims preserved

- No product source, motion curve, cadence, VFX policy, Runtime policy, topology, material, representation selection, or adoption was changed by Cartography.
- No PF implementation was added and no experimental PF procedure was promoted to production authority.
- No UC temporal scheduler/interpolator/runtime policy was proposed or implemented.
- No diagnostic sample rate was relabelled as a shipping/render rate.
- No proof-host delivery receipt was relabelled as source cadence.
- No Building compact-v2 current-world PASS or adoption is claimed after the continuity failure.
- No Art/QA perceptual acceptance, target-device performance, CANON, merge authority, or production-readiness state is claimed.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch Map VFX #35 for target-device timing/performance and perceptual evidence; do not infer them from the source/wall-clock proof.
- Watch Animal Animation #5 for a real downstream receiver/interpolation proof; do not convert diagnostic 320 Hz sampling into playback semantics.
- Watch PF #38 only for a bounded experimental procedure implementation; keep it descriptive and non-authoritative.
- Watch Map Environment #24 owner response to the `3.204%` significant-pixel continuity failure before any Building representation adoption.
- Preserve the merged UC #176 receiver result without expanding it into automatic weight quantization or producer adoption.

## Recovery / provenance

Previous Cartography coordination commit: `d51ddb987de23f31d075cd31f7de6fd5133af540`.
Previous status blob SHA before this update: `c498108ec946d173fb13316bb938a1f2caffa129`.
