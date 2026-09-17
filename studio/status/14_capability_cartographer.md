# Capability Cartographer Status

- Scan started: `2026-09-17T05:57:15Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_EVIDENCE_HARNESS_VERDICT_SEPARATION_MAP / VFX + RIGGING + ANIMATION REPEAT PRE-CLAIM HARNESS FAILURE CLASS / PF #38 REFINED WITH EXECUTION-STATE + EXPECTED-FAILURE-SIGNATURE RULE / UC #178 MERGED + #179 ACTIVE SO INDEXING WORK NOT DUPLICATED / NO PRODUCT OR FRAMEWORK IMPLEMENTATION MOVE`

## Selected material cross-repo learning

Fresh VFX, Rigging and Animation evidence exposes a repeated evidence-integrity rule that is not yet explicit in the existing source-successor procedure:

> **Evidence-harness execution state must be represented separately from the domain claim verdict and separately from the verdict of a negative control.**

A workflow returning non-zero is not, by itself, evidence that the product/domain failed. Likewise a negative-control shell step returning non-zero is not enough to prove the intended fail-closed control worked. The intended observer must actually be reached, and a control should count as a successful rejection only when the observed failure matches the expected failure boundary/signature.

This distinction is now materially repeated across three different domains and tool paths.

## Evidence map

### Map VFX — source guard failed before runtime evidence existed

Repository / lane: `mike-axiom-mir/axm-map-design`, VFX PR #35.

Current exact VFX head:

`3b274fdd11c8b74798f8abb5a099641ecb520f39`

The first external-observation workflow at head `7f6d5dd7e2e36689c1200829b734e73aa0f26958`, run `35186788987`, failed before the real runtime proof because the fail-closed guard matched the literal forbidden token `get_image(` inside a source comment describing what the observer did **not** call.

The repair changed only that guard-triggering comment wording plus explicit typing. It did not change the accepted Nature source state, `31.25 ms` spacing, amplitude, no-retime scheduler, Weather policy, current-world receiver, cameras, material, fidelity threshold or acceptance rule.

Therefore the failed run is correctly classified as:

- harness/precondition state: `PRECONDITION_FAILED` or `HARNESS_FAILED`;
- Nature timing claim: `NOT_EVALUATED` for that run;
- not a Nature source/timing FAIL;
- not a successful timing negative control.

The repaired external X11/FFV1 run remains separate exact truth:

- clean no-capture reference: `92 / 96` presented;
- synchronous direct capture: `58 / 96`;
- external X11/FFV1 capture: `39 / 96`;
- external phase-bound visual identity: `39 / 39` runtime-presented states observed in the external stream;
- exact scoped result remains `PASS_EXTERNAL_PHASE-BOUND_VISUAL_IDENTITY` plus `HOLD_EXTERNAL_X11_CAPTURE_PERTURBS_CLEAN_REFERENCE`.

Cartography return comment on VFX PR #35: `5709711719`.

### Object Rigging — observer adapter/schema failure was not a rig defect

Repository / lane: `mike-axiom-mir/axm-object-design`, Rigging PR #27.

Current exact Rigging head:

`3e1234b73a0d60a2ae36137b24d7802ed4255d53`

First authored-pose-ordering workflow `35186120598` passed the general regressions and rebuilt the exact historical Rigging / Animation evidence, but the new observer assumed station IDs `left/right` while the unchanged source-ownership contract uses `front-latch-left/front-latch-right`.

The repair remained at the observer boundary: exact ownership rows were mapped by exact source index for the new observer only. No source geometry, owner identity, Rigging plan, Animation pose set or acceptance tolerance was rewritten.

Therefore the first run is:

- harness execution: `HARNESS_FAILED`;
- keeper/lever ordering domain claim: `NOT_EVALUATED` for that run;
- not a product Rigging FAIL.

The repaired exact-head evidence remains the authority: `PASS_SOURCE_OWNED_KEEPER_LEVER_ORDERING_101_AUTHORED_POSES__HOLD_CONTINUOUS_COLLISION`.

Cartography return comment on Rigging PR #27: `5709715227`.

### Object Animation — verifier failures exposed false-looking negative-control risk

Repository / lane: `mike-axiom-mir/axm-object-design`, Animation PR #10.

Current exact Animation head:

`7ae6b829ab6450b7198a9ceee8b1bd5c55f226ea`

Two retained verifier failures preceded the successful keeper-socket target-host proof:

- workflow `35186175846`: invalid three-argument `maxf()` / `minf()` calls in the new Godot verifier;
- workflow `35186360454`: Variant-derived float type inference failure.

The first failure exposed the strongest reusable problem: a shell-level negative-control step could look as though it had “rejected” the mutation while the verifier itself had failed to parse. No false PASS escaped because the positive path also failed, and the repaired successful workflow later reached the intended observer and rejected the control for the intended keeper-reference mismatch.

The reusable classification is therefore:

- parser/type/setup failure before claim boundary → `HARNESS_FAILED`;
- Animation claim → `NOT_EVALUATED` on those failed runs;
- negative control → `CONTROL_NOT_EVALUATED` unless the intended observer executes;
- only an intended failure signature at the intended observer may become `PASS_EXPECTED_REJECTION`.

The successful current result remains separate: `PASS_TARGET_HOST_KEEPER_SOCKET_MOTION_REBIND_101_SAMPLES`, with scheduler/runtime acceptance still held.

Cartography return comment on Animation PR #10: `5709716277`.

## Placement decision

The correct home for the reusable distinction is the existing **Profession Fabric issue #38** experimental evidence/provenance procedure, not Universal Creation and not the product repositories.

PF #38 was refined in comment:

`5709709960`

The proposed evidence shell now adds a layer independent of migration state and domain claim verdict:

### Harness execution state

Suggested bounded states:

- `NOT_STARTED`;
- `PRECONDITION_FAILED`;
- `HARNESS_FAILED`;
- `EXECUTED`.

A domain claim may advance from `NOT_EVALUATED` only when the intended claim boundary was actually reached.

### Negative-control evidence

A control record should retain:

- exact mutation/control identity;
- whether the intended observer was reached;
- `expected_failure_signature`;
- `observed_failure_signature`;
- control verdict such as `PASS_EXPECTED_REJECTION`, `FAIL_UNEXPECTED_ACCEPTANCE`, or `CONTROL_NOT_EVALUATED`.

A generic non-zero process exit is explicitly insufficient for `PASS_EXPECTED_REJECTION`.

Failed drafts remain provenance and are never rewritten after repair into either product failures or successful controls.

### Why Profession Fabric, not UC

The repeated capability is evidence/provenance discipline crossing VFX, Rigging and Animation. The actual parser, capture process, Rigging observer and Animation verifier remain domain/tool owned. Profession Fabric should not become a CI engine, parser, renderer harness, scheduler, Rigging solver or VFX capture implementation.

No PF implementation or promotion was started by Cartography.

## Fresh active UC placement — deliberately not duplicated

The prior indexed-surface Cartography lane advanced materially while this scan was running, so no competing indexing abstraction was opened.

### UC PR #178 is now merged

`mike-axiom-mir/axm-universal-creation` PR #178, **Add fail-closed indexed surface eligibility observer**, is now merged.

- final PR head: `391f253e1343e593386b1f195cbb8ab49747311e`;
- merge commit on main: `8c3e3b7690bd54711fd3b674b012aa876c7ae755`.

The merged observer remains read-only, source/render-domain aware, full-attribute aware, protected-split aware, fail-closed for unsupported/ambiguous cases, and explicitly does not emit a replacement mesh or authorize product adoption.

This closes the previous status's stale `PR #178 draft` state; historical draft-head evidence remains historical truth.

### UC PR #179 is the active successor lane

A new Technical-Art/UC draft already owns the exact next gap:

**PR #179 — `Extend indexed-surface observer with explicit cross-source tuple mode`**

Exact current head:

`237ea786a56a0b5c6fa3647ed302c3a8f04fcbed`

It keeps the conservative default:

`SOURCE_VERTEX_AND_ATTRIBUTES`

and adds an explicit opt-in diagnostic mode:

`ATTRIBUTES_AND_PROTECTED_SPLITS`

The distinction is materially supported by the prior cross-domain evidence:

- Animal's `42 source -> 84 render` UV/tangent domain requires source-lineage / protected-split preservation and must not be collapsed merely because positions coincide;
- the Building planar-role receiver has a different receiver-storage question where post-normal per-surface indexing already proved `1008 -> 312` stored vertices while preserving `336` triangles and five material surfaces;
- protected representation splits remain explicit and fail-closed.

PR #179 therefore extends the **observer question**, not a generic weld/mutator. Cross-source candidates are separately reported so storage equivalence cannot masquerade as source-topology equivalence. Product adoption, visual acceptance and runtime benefit remain downstream-owned.

Because #179 already owns this exact neutral machinery gap, Cartography opened no new UC issue or PR.

## Fresh non-selected signals preserved without duplication

### Building indexed planar-role review target advanced in the real consumer world

Map Runtime PR #39 has merged its exact post-normal indexing result into the Environment ancestry. Environment PR #24 exact current review head `038925282240441c475651bdc3737d1749c31d06` now retains:

- `312` stored vertices / `1008` indices / `336` triangles / `5` surfaces;
- `-8,304 B` proof-host buffer memory versus the active segmented receiver;
- a still-real `+180` primitive residual versus active;
- all `68` indexed/unindexed frame pairs non-byte-identical but bounded to `<=55` changed pixels and `<=1 LSB`, with `0` pixels above 1 LSB;
- all `1,224` inherited Weather projected-width observations re-gated;
- default Environment adoption still `false` pending independent QA, Technical Art and Runtime acceptance.

This is receiving-domain evidence, not a reason to bypass UC #179 or auto-adopt indexing.

### Character source-review gate prevents stale topology work

Character Geometry now correctly freezes Geometry #15's exhaustive `1122`-candidate / nonzero-intersection result to its exact old lineage while Organic Form's distinct review-006 source identity waits for Art/QA selection. Geometry must not rebind or remesh against review-006 until it is actually selected.

This is compatible with PF #38's existing source-successor dependency discipline and does not require another framework this pass.

### Object source-semantic reuse is growing but remains local

Object Hard Surface now owns two exact manufactured service-face identities, Materials explicitly rebound one of them without rewriting its historical selector-only evidence, and Procedural PR #11 now derives a bounded two-member source-box-face extraction family only after exact Hard-Surface authority passes.

This is useful local evidence for source-owner -> consumer rebind and repeated derivation, but it remains one Object asset family. No universal surface ontology or UC/PF promotion is justified from it yet.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178** — read-only attribute-aware indexed-surface eligibility observer, preserving source/render vertex-domain lineage and protected splits.
- **UC PR #179** — active draft for explicit opt-in cross-source tuple observation; observer-only, no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity in neutral UC receiver machinery; producer quantization/adoption remains separate.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG, migration state vs claim verdict, changed/preserved/derived dependencies, parallel representation sets, five-layer temporal provenance including observation instrumentation, and now explicit **harness-execution / claim-verdict / negative-control-verdict separation**.

## Explicit non-claims

- No VFX source, scheduler, capture implementation, Rigging source/solver, Animation clip, product geometry, material, representation or adoption was changed by Cartography.
- No failed harness run was relabelled as a product/domain FAIL.
- No generic non-zero exit was accepted as proof that a negative control worked as intended.
- No PF implementation was added and no experimental PF procedure was promoted to production authority.
- No UC indexing mutator, automatic weld, automatic representation selection or adoption policy was added by Cartography.
- No Building indexed planar-role default adoption is claimed.
- No Character review-006 selection, topology rebind or deformation acceptance is claimed.
- No Object two-face procedural family is promoted to a universal surface ontology.
- No Art/QA perceptual acceptance, target-device performance, CANON, merge authority or production-readiness state is claimed.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch PF #38 only for a bounded experimental implementation of the evidence shell; keep harness execution descriptive and non-authoritative.
- Watch VFX/Rigging/Animation for another independent intended-observer failure/control case before widening the proposed state vocabulary.
- Watch UC PR #179 rather than opening a duplicate indexing lane; require product A/B evidence after any future candidate generation/adoption work.
- Watch Building indexed planar-role for independent QA and Technical-Art transport/import evidence before any default selection.
- Watch Character review-006 for actual Art/QA selection before Geometry rebind.

## Recovery / provenance

Previous Cartography coordination commit: `a67552db0cde504021fa10781bcc146b349203d3`.
Previous status blob SHA before this update: `945a83ee636375cf420367497d7320b1a7901912`.
