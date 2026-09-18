# 14 — Capability Cartographer — Studio Status

Date: 2026-09-18

State: `PASS_METRIC_SEMANTIC_QUANTITY_IDENTITY_MAP / ANIMAL_BUILDING_NATURE_REPEAT_THRESHOLD_MET / PF38_EVIDENCE_VOCABULARY_REFINED / NO_GENERIC_UC_METRIC_NORMALIZER / NO_SHARED_EXECUTION_OVERLAP / CREATE_ME_COORDINATION_ONLY`

## Activation / campaign gate

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/14_capability_cartographer.md`, the immediate predecessor Cartographer status, fresh specialist status across the constellation, relevant product PRs, current Universal Creation, Profession Fabric #38 history, and `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` before choosing one bounded repeated capability boundary.

`mike-axiom-mir/axm-create-me` remains **coordination only**. No product implementation, Universal Creation implementation, Profession Fabric implementation, merge state, CANON state, source authority or specialist authority moved here.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor Cartography coordination commit remains rollback-addressable at `3fd2d8f7e1b463a7b0e582bf8c7e86e117def398`. Its equivalence-relation identity map remains historical truth and is not rewritten by this pass.

## Material cross-repo learning

**`METRIC_LABEL_IDENTITY != OBSERVABLE_SEMANTIC_IDENTITY != DERIVATION_IDENTITY != UNIT_OR_BASIS_IDENTITY != THRESHOLD_IDENTITY`**

A numeric value may be exactly reproducible and carry a familiar unit while still describing a different observable from the one a downstream claim needs. Metric semantics therefore include the exact observable, derivation/operator, inputs/reference domain, coordinate/basis where relevant, and threshold ownership — not only the number, label or unit.

This is materially different from the preceding equivalence-relation map. That map asked which entities are being considered equivalent; this pass asks **what quantity is actually being measured or bounded once the entities are fixed**.

## Evidence A — Animal: matching degree units do not make two angle metrics equivalent

Animal Rigging PR #25 remains open/draft at exact head `0bdddceb1ccac52732d0a2c71e877a8f31976305` and consumes the exact Runtime PR #30 donor `13ba20d198d2b7c5e428167745d59927b3084004` for the 19-key candidate.

Runtime's retained `qerr_deg` threshold is `0.075°`. Rigging reproduces the exact Runtime maximum as `0.05472043982868231°`, but inspection of the metric shows that value is a **quaternion-space half-angle distance**, not the shortest physical / owner-command rotation.

For the same exact worst sample, the physical / owner-command residual is `0.10944087965736671°`. The candidate still stays inside the broader structural command envelope and all 321 sampled control/candidate owner poses pass the existing structural pose gate, but Rigging correctly keeps adoption **HOLD** rather than treating the matching degree symbol as semantic equivalence or rewriting Runtime's threshold.

Bounded rule:

`SAME_NUMERIC_UNIT != SAME_OBSERVABLE`

and:

`THRESHOLD_VALUE + UNIT != THRESHOLD_SEMANTICS`

The threshold belongs to the metric definition and its owning claim domain.

## Evidence B — Building: same metres, different geometric quantity

Building Hard Surface PR #17 remains open/draft at exact head `fbfa3b47048755b45dac91451171d5511c8d4f47`.

The predecessor source had:
- panel body depth `0.08 m`;
- receiver plate thickness `0.04 m`;
- center standoff `0.08 m`;
- required nearest-body-face gap `0.02 m`.

The historical builder evaluated `standoff - plate_thickness = 0.04 m` and labelled that value body clearance. But because the standoff positions the **body center**, nearest-body-face gap is instead:

`standoff - plate_thickness - body_depth / 2`

which gives `0.00 m` on the predecessor. The bounded source correction changes only standoff `0.08 -> 0.10 m`, making the actual nearest-body-face gap exactly `0.02 m`.

Both quantities are expressed in metres. They are nevertheless different observables because their derivations and reference surfaces differ.

Bounded rule:

`CENTER_OFFSET_SURPLUS_M != NEAREST_BODY_FACE_GAP_M`

Hard Surface keeps source-owned operand/reference-surface semantics; Cartography does not extract this clearance formula into UC.

## Evidence C — Nature: representation bytes are not measured transport bytes

Nature Runtime PR #20 has advanced beyond the retained shader-driver rebind evidence and is now at exact head `f93c25cedf71496fd6b7c9d4bb1a98ac91f867a9`. This Cartography map does not relabel the newer head or request a duplicate rerun.

The retained exact Runtime evidence at `b9ad7622d5b9f3f0a1434dbe534da5397d83226c` compares a `3,120 B` mutable CPU position packet with a `4 B` semantic shader-driver value, a `3,116 B / 99.8717948717949%` semantic-payload difference. Runtime and independent QA both explicitly keep that as **representation accounting**, not measured GPU command/bus/API transport and not target-device frame-time improvement.

Bounded rule:

`REPRESENTATION_BYTE_COUNT != MEASURED_TRANSPORT_TRAFFIC != PERFORMANCE_RESULT`

A byte unit does not authorize transfer between those observables.

## Repeated map

The repeated boundary is now supported by three materially different mechanisms:

1. **Animal** — quaternion-space error metric versus physical owner rotation;
2. **Building** — center-offset surplus versus nearest-surface geometric clearance;
3. **Nature** — semantic representation bytes versus unmeasured runtime transport/performance.

A bounded cross-lane evidence record therefore needs at minimum:

- `metric_identity` and `metric_label`;
- `observable_semantic_identity`;
- `derivation_or_operator_identity`;
- `input_identity[]` and exact reference surface/domain where relevant;
- `unit_identity`;
- `coordinate_or_basis_identity` where relevant;
- optional `denominator_or_reference_identity` for ratios/percentages;
- `threshold_identity`, including threshold owner and the observable it constrains;
- `comparison_compatibility_state = SAME_OBSERVABLE | TRANSFORM_EXPLICITLY_PROVEN | DIFFERENT_OBSERVABLE | NOT_EVALUATED`;
- `claim_transfer_state` plus explicit non-claims.

Stop rules:

1. Matching unit symbols or labels do **not** prove matching observables.
2. A threshold belongs to its metric definition, not merely to its numeric value and unit.
3. Cross-metric conversion must be explicit and proven; naming similarity or a convenient factor does not transfer authority.
4. Representation/storage accounting must not be promoted to bus/command/performance measurement without observing that quantity.
5. Geometry metrics must name the exact operands/reference surfaces used by the derivation.

## Profession Fabric placement

Profession Fabric issue #38 remains the supported candidate home for this **evidence/provenance vocabulary only**.

Capability Cartography comment `5729648795` adds the metric-semantic identity refinement under the existing experimental source-successor procedure.

Evidence-only returns were placed on:

- Animal Rigging PR #25 — comment `5729650508`;
- Building Hard Surface PR #17 — comment `5729653939`;
- Nature Runtime PR #20 — comment `5729655777`.

Those returns move no product verdict or authority. No PF implementation, profession promotion, automatic metric conversion or policy was created.

## Universal Creation placement decision

No new UC capability lane is justified.

Current UC `main` at this scan is `376b5c49a8bdbff344fe20e61cd89a73b8a96c75`, the merge of PR #212's unrelated bounded radial-envelope active-projection-set Physics successor. The current open Physics successor is likewise unrelated to this evidence/provenance distinction.

The executable mechanisms here remain materially different and product/domain-owned:

- Animal interprets a quaternion-derived error metric against a physical owner-angle question;
- Building derives a source-local clearance from exact body/plate reference surfaces;
- Nature accounts semantic representation payload separately from unmeasured transport/performance.

A generic UC metric normalizer, threshold converter or automatic claim-relabeling engine would erase the semantic distinction rather than expose a demonstrated neutral creation/observation primitive.

`studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` was checked first. It contains no active overlapping shared implementation claim; retained UC #192 and #199 are already closed/merged.

## Fresh constellation / dependency context

Fresh specialist state was inspected to avoid colliding with active work:

- Animal Rigging already owns the current 19-key owner-angle interpretation HOLD and no Cartography implementation lane duplicates it;
- Building Hard Surface already owns the source-local clearance correction and downstream rebind remains explicit rather than automatic;
- Nature Runtime has advanced to newer current-owner transfer work, so this map references only the exact retained representation-accounting evidence it actually needs;
- Nature Technical Art and independent QA retain separate target-host and visual evidence boundaries and are not used to manufacture a device-performance claim;
- current UC Physics work is unrelated;
- the shared-capability registry has no active overlapping implementation claim.

## Decision / state

`PASS_METRIC_SEMANTIC_QUANTITY_IDENTITY_MAP`

Supported placement:

- **Product repos:** own metric definitions, formulas/operators, reference domains, threshold intent and domain acceptance;
- **Profession Fabric #38:** candidate home for neutral evidence vocabulary that binds numbers to exact observable semantics and threshold scope;
- **Universal Creation:** no new generic metric-normalization/threshold-conversion layer justified;
- **axm-create-me:** coordination map only.

No product implementation, metric formula, threshold authority, source geometry, PF implementation, UC implementation, Art/QA verdict, target-device claim, adoption state, CANON state or merge authority moved.

## Next legitimate trigger

Re-scan before further propagation. Advance toward executable shared machinery only if a genuinely neutral metric transform repeats under explicitly compatible observable semantics and domain-independent tests. Until then, keep this as PF evidence vocabulary and preserve product-owned formulas/thresholds.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.
