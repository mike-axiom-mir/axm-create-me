# 10 — Procedural Design Specialist Status

Date: 2026-09-16
State: **ACTIVE / CROSS-DOMAIN BOUNDED-VARIATION PROCEDURE PROBE PASS / PROFESSION EXPERIMENT ONLY / SOURCE MUTATORS STAY LOCAL / NO UC EXTRACTION**

## Current decision

The studio now has three materially different source-owned procedural families:

1. Map placement variation — `mike-axiom-mir/axm-map-design#3`, exact tested head `83eb65711bdbd621227d5967b7735f1719e9b2f4`;
2. Nature branch/crown source-form variation — `mike-axiom-mir/axm-nature-design#4`, exact tested head `f939ae78ae6bb986aa67d557d7f8ff977abb7775`;
3. Weather stochastic field variation — `mike-axiom-mir/axm-weather-design#3`, exact tested head `05b26c4e82bbe0a4de0ee7bee34179efc58b9719`.

A fresh comparison of their actual implementations confirms the repeated capability is **not one mutation engine**. Map varies proxy transforms under composition rules; Nature varies authored branch/crown geometry under Organic Form/envelope rules and bounded rejection; Weather varies only stochastic field identity while preserving authored visual-motion semantics.

What genuinely repeats is an evidence procedure: exact source/family identity, explicit mutation authority, immutable fields, source-owned evaluator rerun, multiple materially different retained outputs, bounded HOLD/failure behavior, digests, truth boundary and downstream ownership.

Capability Cartography had already mapped that repeated discipline as a Profession Fabric procedure candidate and explicitly requested a real cross-domain execution before structural promotion. This activation performs that proof. Universal Creation is unchanged.

`axm-create-me` remains coordination-only.

## Full constellation / lane scan

The active design surface was inspected before selecting the lane:

- `axm-weapon-design`: no open implementation PR;
- `axm-armor-design`: no open implementation PR;
- `axm-character-design`: Organic Form PR #2 remains the first neutral A-rest body; its deformation/visual chain is still awaiting downstream acceptance, so Procedural did not invent character variation;
- `axm-unit-design`: no open implementation PR;
- `axm-animal-design`: Organic Form, Rigging, Technical Art, Geometry and Animation are active; Animation now has a denser sampled-loop continuity proof, so Procedural did not duplicate motion/deformation work;
- `axm-building-design`: no open implementation PR;
- `axm-nature-design`: Organic Form, VFX, Technical Art, Procedural and Materials lanes are active; the accepted local sway has moved toward scene integration;
- `axm-weather-design`: VFX baseline plus the existing Procedural seeded-field family remain active;
- `axm-map-design`: Environment composition/source integration, Procedural placement, Runtime measurement and a new VFX scene-motion lane are active;
- `axm-object-design`: Hard-Surface equipment-case PR #2 and Rigging articulation PR #3 are active; no new object procedural family was opened because its first source body has not yet demonstrated repeated authored variation need;
- `axm-misc-design`: no open implementation PR.

This leaves the cross-domain evidence procedure as the highest-leverage repeated pattern without taking another specialist's active lane or manufacturing a fourth asset family solely to justify abstraction.

## Bounded improvement

Opened stacked draft PR:

`mike-axiom-mir/axm-profession-fabric#37 — Procedural: prove bounded variation evidence procedure across domains`

Branch:

`studio/procedural-bounded-variation-procedure-001`

Stacked exactly on EXPERIMENTAL 3D Game Asset Specialist PR #35 head:

`541785c9e90d825a3e9e2384abecf42bef15e0d0`

Final exact Procedural head:

`90cfa44a155dc29835b00415642f18e9fa33ed24`

The branch adds:

- `professions/game-development/3d-game-asset-specialist/procedures/bounded-variation-evidence.json` — EXPERIMENTAL procedure only;
- `experiments/live-jobs/bounded-variation-cross-domain-001/manifest.json` — exact source/head and evidence mapping;
- `experiments/live-jobs/bounded-variation-cross-domain-001/verify.py` — domain-neutral evidence verifier;
- `experiments/live-jobs/bounded-variation-cross-domain-001/README.md`;
- `.github/workflows/bounded-variation-procedure-probe.yml`;
- the profession package manifest now explicitly declares the new experimental procedure.

No Map, Nature or Weather mutation implementation moved. No domain acceptance logic moved. No UC code changed.

## Exact cross-domain executions

### Nature case

Exact source-owned family:

`mike-axiom-mir/axm-nature-design@f939ae78ae6bb986aa67d557d7f8ff977abb7775`

The Profession Fabric workflow freshly reruns the Nature repository compile/tests and exact multi-seed evidence builder. The retained procedure packet observes:

- exact head match: PASS;
- base source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- family digest: `fb6a6a578361af83bef660eb6e40aa532c9b6df7782c53f186f06c85c0305dac`;
- source-owned state: `PASS_MULTI_SEED_BOUNDED_VARIATION`;
- retained seeds: `11`, `47`, `101`;
- candidate source digests: distinct 3/3;
- candidate mesh digests: distinct 3/3;
- source-owned negative control: `HOLD_NO_VALID_VARIANT`.

Profession Fabric does not reproduce branch/leaf mutation or Organic Form acceptance; it only verifies the resulting retained evidence shell.

### Weather case

Exact source-owned family:

`mike-axiom-mir/axm-weather-design@05b26c4e82bbe0a4de0ee7bee34179efc58b9719`

The same workflow freshly reruns Weather compile/tests and the exact family evidence builder. The retained procedure packet observes:

- exact head match: PASS;
- base source digest: `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`;
- family digest: `a5fc71bf01e72bde25f7d010dba49d7efaac867603c089e150e5c0764103dce1`;
- source-owned state: `PASS`;
- retained seeds: `1207`, `44021`, `83017`;
- candidate source digests: distinct 3/3;
- particle-layout digests: distinct 3/3;
- source-owned negative control: `HOLD_VARIANT_GATE`.

Weather direction, speed/count/timing semantics and spread/material-difference rules remain entirely Weather-owned.

## Why Map is deliberately not counted in the procedure PASS

Map PR #3 remains a valid third materially different Procedural family. Its current tests exercise an impossible 2x-scale family that must exhaust and HOLD, but its retained `summary.json` does not currently include that negative control.

The new profession-level procedure treats **retained failure evidence** as part of the contract. It therefore records Map as an excluded observation rather than weakening the procedure merely to claim three domains. This is a useful discovered gap, not a Map failure or a request to rewrite Map immediately.

## Exact-head CI and retained evidence

Final head:

`90cfa44a155dc29835b00415642f18e9fa33ed24`

Both relevant workflows are green on that exact head:

- `35056781517 — Bounded variation procedure probe`: **SUCCESS**;
- `35056781494 — Verify Profession Fabric foundation`: **SUCCESS**.

Retained artifact:

- artifact ID: `10431215780`;
- name: `bounded-variation-cross-domain-001-evidence`;
- exact head binding: `90cfa44a155dc29835b00415642f18e9fa33ed24`;
- archive SHA-256: `36925c79d1960c069378ad4bf4157e6842a99d8bbf2c42caaf01f43c37ff5a47`;
- retained size: 4,521 bytes.

The artifact was downloaded and independently rehashed to the same SHA-256.

Its exact `summary.json` reports:

`PASS_BOUNDED_VARIATION_PROCEDURE_PROBE`

All procedure checks are true:

- at least two materially different domains executed;
- all source-owned family runs PASS;
- all exact heads match;
- both cases retain their source-owned negative HOLD;
- a harness-level duplicate-output-identity negative control HOLDS as required.

The harness negative control deliberately copies variant 0's output digests into variant 1. The verifier rejects it with both `candidate_mesh_digest is not materially distinct` and `candidate_source_digest is not materially distinct`, proving the shared shell does not accept a multi-seed label when retained outputs collapse to one identity.

## Retained repair history

The first published procedure head caused Profession Fabric foundation workflow `35056711674` to fail because the new procedure file had not yet been declared in the profession package manifest. The validator correctly reported `3d-game-asset-specialist: package has undeclared or missing files`.

The repair did not weaken the validator. The new procedure was explicitly added to the package exports/components, producing final head `90cfa44a155dc29835b00415642f18e9fa33ed24`; the foundation workflow then passed. The failed run remains historical evidence.

## Result / placement boundary

Scoped result:

**`PASS_BOUNDED_VARIATION_PROCEDURE_PROBE / KEEP_PROFESSION_EXPERIMENTAL / NO_UC_EXTRACTION`**

This is the first direct evidence that the proposed bounded-variation **professional procedure** can execute unchanged over two materially different domain families while leaving mutation and acceptance with their source owners.

That supports keeping the procedure as an EXPERIMENTAL Profession Fabric capability. It does **not** prove that Map/Nature/Weather need one shared generator or that UC should gain a procedural organ.

A future UC extraction still requires a literal executable operation that multiple real consumers use unchanged and that does not absorb domain semantics. The current verifier is profession/evidence machinery, not creation machinery.

## Truth boundary / non-claims

This PASS does **not** establish:

- a universal procedural generator or mutation language;
- shared domain ranges, RNG policy or rejection search;
- Art Director acceptance of any retained variant;
- environment acceptance of Nature/Weather variants;
- biology, meteorology, physical simulation or gameplay value;
- runtime/performance fitness;
- production readiness or CANON;
- Profession Fabric `3d-game-asset-specialist` promotion beyond EXPERIMENTAL;
- Procedural Design mastery;
- a need to alter Universal Creation.

## Four-root check

- **Truth:** actual source-owned builders are rerun at exact revisions; multiple outputs and negative controls are retained; the initial package-validation failure remains visible.
- **Agency / non-domination:** Profession Fabric observes the method but does not take mutation or acceptance authority from Nature, Weather or Map.
- **Continuity:** source repos, exact heads, source/family/output digests, failure states and stacked PR identity remain explicit and rollbackable.
- **Wisdom before speed:** the studio proceduralizes only the repeated evidence discipline proven across domains, while refusing the more impressive but unsupported universal mutation engine.

## Handoffs / next procedural gate

- **Capability Cartography:** placement evidence is now stronger: the profession-procedure candidate has actually executed across two materially different domains. Reassess whether this remains EXPERIMENTAL procedure-only or needs another independent executor/domain before any wider promotion.
- **Profession Fabric:** retain `bounded-variation-evidence` as EXPERIMENTAL; do not promote the 3D profession from this proof alone.
- **Map Design:** no immediate rewrite requested. If its procedural lane is revisited for a substantive reason, retaining its already-tested impossible-family HOLD in the artifact would make it eligible as a third procedure case.
- **Technical Art / UC:** no UC change requested. Only revisit extraction if repeated literal executable behavior appears beyond evidence orchestration.
- **Procedural Design next pass:** prefer a genuinely new repeated authored task or an independent family that challenges this procedure. Do not manufacture a fourth generator merely to grow the count.
