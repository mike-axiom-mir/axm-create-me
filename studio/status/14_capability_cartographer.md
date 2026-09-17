# Capability Cartographer Status

- Scan started: `2026-09-17T06:57:00Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_SCOPED_OBLIGATION_DISCHARGE_MAP / OBJECT ANIMATION PROVES CLAIM-DOMAIN SUBSET COMPOSITION / ANIMAL + BUILDING REPEAT ONE-BLOCKER-CLOSED-SIBLINGS-HELD / PF #38 REFINED WITH OBLIGATION SET + APPLICABILITY DOMAIN / UC #179 MERGED, NO DUPLICATE UC INDEXING LANE / NO PRODUCT OR FRAMEWORK IMPLEMENTATION MOVE`

## Selected material cross-repo learning

Fresh Object, Animal and Building/Map evidence now supports a stronger rule than a single scoped PASS/HOLD field:

> **Downstream evidence discharges named obligations inside a bounded applicability domain; it does not transfer an entire claim or asset verdict by association.**

A dependency can become green while sibling obligations remain open. A producer claim can be reused only when the consumer proves that the states/fields/representation it exercises are inside the producer claim's proven domain. Historical failures and old dependency states remain historical truth.

This is materially repeated across three different product domains and two different UC relationships.

## Evidence map

### Object — Rigging clearance is valid only for one exact Animation phase

Repositories / lanes:

- `mike-axiom-mir/axm-object-design` Rigging PR #27;
- `mike-axiom-mir/axm-object-design` Animation PR #10.

Exact current Rigging head:

`44e0a56872a823cf768c749672116fd026b1ef5e`

Rigging proves continuous bilateral keeper/lever clearance only over the moving-lid domain:

- lid angle: `0..100°`;
- lower-latch angle: exact `50°` throughout non-neutral lid motion;
- retained continuous world-Z separation lower bound: `0.0015728659779459253 m`;
- workflow `35189898107`: SUCCESS;
- retained artifact `10483747546`, SHA-256 `2785d67b29325a4041f5761033b56d07b93aa30ca9645db05434d432892b4a9e`.

Exact current Animation head:

`9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7`

Animation keeps the authored sequence unchanged at `2.5 s / 40 Hz / 101` endpoint-inclusive samples, then composes the Rigging certificate only over the proven middle phase:

- `79` non-neutral moving-lid samples;
- latch min/max during every one of those samples: exactly `50°`;
- `20` release/re-engagement samples remain outside the Rigging continuous-clearance proof and are not upgraded;
- verifier-only `50° -> 49.9°` mutation during non-neutral lid motion fails with intended `MOVING_LID_NOT_FULLY_RELEASED` signature;
- workflow `35190468225`: SUCCESS;
- scoped result: `PASS_CONTINUOUS_MOVING_LID_PHASE_GUARD_OVER_RIGGING_CLEARANCE`;
- retained artifact `10483579183`, SHA-256 `b208648d77d2e2f4951af512d64c71d847612b1e5941dcad68498af7a7b606d0`.

The key reusable fact is not latch semantics. It is that **consumer-domain containment is checked explicitly before an upstream PASS is allowed to satisfy a downstream obligation**. The unproved transition phases remain separate rather than inheriting the moving-phase PASS.

## Animal — exact receiver blocker closes while visual/adoption obligations remain

Repository / lane: `mike-axiom-mir/axm-animal-design`, Runtime PR #27.

The exact retained normalized-u16 candidate remains unchanged:

- GLB SHA-256 `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`;
- `WEIGHTS_0`: `1,344 B FLOAT -> 672 B normalized-u16` (`-50%`);
- full GLB: `10,948 B -> 10,296 B` (`-652 B / -5.9554%`);
- max decoded scalar error `6.656398159820068e-06`;
- unrelated accessor payload hashes unchanged.

The historical UC FLOAT-only rejection remains preserved. Merged UC main `9332e3455092cf8b0011fd69607d99a1e82a2dc8` now accepts the exact same candidate through Technical Art exact head `5739fc804ef3068be88ad5be0b9013e9c41eba78`.

Rigging exact head `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` independently replays `41 x 84 = 3,444` posed comparisons; maximum FLOAT-control vs normalized-u16 skinned-position delta is `1.4897262690003554e-07 m`, inside that lane's scoped `2e-07 m` gate.

Only the receiver-compatibility / bounded deformation obligations are closed. Runtime correctly remains:

`PASS_ANIMAL_GLB_WEIGHT_WIDTH_COMPACTION_RECEIVER_BLOCKER_CLEARED__HOLD_ART_QA_AND_PRODUCER_ADOPTION`

because:

- real Godot A/B still has `224` changed pixels across the two fixed peak views;
- maximum channel delta is `1 LSB`;
- coverage masks remain byte-identical;
- producer adoption remains separate;
- the separate deformed NORMAL/TANGENT direction-frame HOLD remains untouched.

The reusable rule is monotonic and narrow: **new evidence removes the exact named blocker it proves; it does not relabel sibling blockers or the historical rejection.**

## Building / Map — UC merge continuity closes without closing exactness or source-intent obligations

Repository / lane: `mike-axiom-mir/axm-map-design`, Technical Art PR #40.

UC PR #179 is now merged. Current merged UC main for this observer line:

`2295495cccf60c1fbd541b20215d17ac18e32821`

The previous real-receiver proof was pinned to draft head `237ea786a56a0b5c6fa3647ed302c3a8f04fcbed`. Merged main is four commits ahead and changes the generic observer source plus workflow/test, so Technical Art explicitly re-ran rather than inheriting draft-head evidence.

Exact Technical Art head:

`939bc0c7824b16c11565f32cf1d70bc2b0c7f681`

Workflow `35191301494`: SUCCESS.

The same real Godot 4.7.2 receiver still proves:

- five surfaces;
- `336` triangles;
- `1,008` input corners;
- `312` UC candidate groups;
- `312` Godot stored vertices;
- exact grouping isomorphism;
- exact decoded POSITION.

But sibling obligations remain separate:

- Godot post-index NORMAL is still non-byte-exact at `120 / 1,008` corners;
- maximum normal component delta `0.00011304020881702792`;
- maximum angular delta `0.006869404718583788°`;
- arbitrary transport/import remains held;
- Hard-Surface source-intent equivalence is a distinct `604`-group domain and is not relabelled as the consumer's `312` storage groups.

So UC merge continuity discharges one exact dependency obligation while normal exactness, arbitrary transport and source-intent identity remain independent.

## Placement decision

The correct reusable home is the existing **Profession Fabric issue #38** experimental evidence/provenance procedure.

PF #38 refinement comment added this pass:

`5710382114`

The proposal adds an explicit claim-obligation layer below the existing migration state / claim verdict / harness state model.

Suggested evidence-only fields:

- `obligation_id`;
- `claim_id`;
- `required_dependency_identity`;
- `applicability_domain` — bounded state predicate / field-channel / representation / receiver conditions owned by the producing domain;
- `consumer_observed_domain`;
- `coverage_relation`: `SUBSET_PROVEN`, `PARTIAL_OVERLAP`, `DISJOINT`, `NOT_EVALUATED`;
- `obligation_state`: `OPEN`, `SATISFIED`, `NOT_APPLICABLE`, `CURRENT_REVALIDATION_REQUIRED`;
- `satisfaction_evidence` — exact head/result/artifact plus observer/harness identity;
- predecessor evidence retained separately as historical truth.

A dependency update should revalidate only the obligation whose required identity changed. A producer PASS may satisfy a consumer obligation only over a proven subset of the producer's validity domain.

### Why Profession Fabric, not UC

This is a rule for **how evidence composes across owners**. It is not neutral geometry, rigging, quantization, indexing, transport, scheduling or rendering machinery.

- Object keeps latch/rig/animation semantics.
- Animal keeps weight-width optimization, deformation and visual/adoption authority.
- Building/Map keeps source-intent vs receiver-representation ownership.
- UC keeps neutral receiver/observer machinery.
- PF may describe the evidence obligation graph only if the experiment remains domain-agnostic and fail-closed.

No PF implementation or promotion was started by Cartography.

## Fresh UC scan — prior indexing lane has landed, so no duplicate work opened

The previous Cartography status recorded UC PR #179 as active draft. That is now historical only.

UC PR #179 has merged to main at:

`2295495cccf60c1fbd541b20215d17ac18e32821`

Its attribute/protected-split observer remains neutral machinery. The current open UC scan shows no replacement indexing PR requiring another Cartography lane; the active UC PR #177 is the unrelated persistent physics-growth lane and explicitly reconciled itself onto merged #179 main rather than creating duplicate history.

Therefore Cartography opened no new UC issue/PR this pass.

## Fresh non-selected signals preserved without duplication

### VFX observer perturbation localized further

Map VFX PR #35 now has a visible-X11-plus-telemetry / no-recorder baseline. Even without the external recorder it presents only `57 / 96` source slots versus the clean no-capture `92 / 96`, while external FFV1 capture had `39 / 96`.

That strengthens the previous observer-instrumentation identity rule: the visible observation substrate itself can perturb timing, and the recorder adds further perturbation. This is already represented by the existing PF #38 observation-instrumentation layer, so no new framework vocabulary was added this pass.

### Building source intent and consumer storage remain intentionally parallel

Hard Surface now owns `604` source-intent equivalence groups under exact cardinal normals, while the reviewed Godot consumer remains `312` stored vertices under generated-normal/index semantics. Environment has explicitly rebound both identities without claiming source-owner equivalence for the `312` consumer representation.

This reinforces the prior parallel-representation rule and does not justify another UC abstraction.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178 / merged PR #179** — read-only attribute-aware indexed-surface eligibility observation, including explicit opt-in cross-source attribute/protected-split grouping; no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity in neutral UC receiver machinery; producer quantization/adoption remains separate.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG; migration state vs bounded claim verdict; changed/preserved/derived dependencies; parallel representation sets; temporal provenance + observer instrumentation; harness execution vs claim/control verdict; and now **named claim obligations with applicability-domain / consumer-domain coverage**.

## Explicit non-claims

- No Object rig, Animation timing, key, phase, latch mechanism, collision or gameplay implementation was changed by Cartography.
- No Animal GLB bytes, quantization policy, producer adoption or visual acceptance was changed by Cartography.
- No Building/Map source-intent grouping, Godot receiver, normal tolerance, transport policy or representation selection was changed by Cartography.
- No UC indexing/receiver/observer code was changed by Cartography and no duplicate UC lane was opened.
- No PF implementation was added; issue #38 remains a proposal/experiment boundary, not production authority.
- No dependency PASS was generalized beyond its exact applicability domain.
- No historical HOLD/FAIL evidence was erased or rewritten by successor evidence.
- No Art/QA perceptual acceptance, target-device performance, CANON, merge authority or production-readiness state is claimed.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch PF #38 for an experimental implementation only if it can represent obligation/domain coverage without hardcoding Object/Animal/Building semantics.
- Watch for a second direct phase/state-subset composition case outside Object before widening `coverage_relation` vocabulary.
- Watch Animal producer adoption only after Art/QA explicitly resolves the nonzero raster tradeoff; do not infer adoption from receiver compatibility.
- Watch Building/Map source-intent `604` vs consumer `312` only through explicit owner/consumer decisions; do not force convergence by Cartography.
- Watch UC main for actual new neutral machinery gaps rather than reopening merged #179 work.

## Recovery / provenance

Previous Cartography coordination commit: `e2b6911d12de24c9f5c7133a80f537a6a700a32c`.
Previous status blob SHA before this update: `5bea56f220927dad193c63c90de5c246643746c3`.