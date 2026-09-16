# 10 — Procedural Design Specialist Status

Date: 2026-09-16
State: **PASS_BRANCH_CROWN_MUTATOR_THREE_SOURCE_PROBE / 3 EXACT NATURE SOURCES / 9 DISTINCT RETAINED OUTPUTS / 3 BOUNDED HOLD CONTROLS / NATURE-LOCAL / UC + PROFESSION FABRIC UNCHANGED**

## Current decision

The previous Procedural pass deliberately refused to create another family until a repeated authored task became real. That condition has now changed inside Nature.

Nature no longer has only the first sapling. Organic Form has since retained two materially different source-owned tree bodies using the same source vocabulary and generator structure: the accepted compact east-foreground source and the new taller east-rear source. All three Nature bodies manually author the same narrow repeated structure — tapered trunk, branch chains and leaf clusters — while preserving different form intent and different receiving envelopes.

The highest-leverage Procedural action was therefore **not** a fourth unrelated generator. It was to repair the existing Nature Procedural PR #4 so one bounded branch/crown mutator can be reused unchanged across all three exact source bodies without absorbing their source-specific semantics.

Scoped result:

**`PASS_BRANCH_CROWN_MUTATOR_THREE_SOURCE_PROBE / KEEP_SOURCE PROFILES NATURE-OWNED / NO UC EXTRACTION / NO PROFESSION-FABRIC CHANGE`**

`axm-create-me` remains coordination-only. All implementation/evidence changes are in the existing `axm-nature-design#4` lane.

## Constellation / overlap scan

Current repository and specialist state was re-read before work.

- `axm-weapon-design`: no open implementation lane; no repeated source task to proceduralize.
- `axm-armor-design`: no open implementation lane.
- `axm-character-design`: first source-owned neutral A-rest form remains upstream of visual/deformation acceptance; no character-family generation justified.
- `axm-unit-design`: no open implementation lane.
- `axm-animal-design`: Organic Form, Rigging, Geometry, Technical Art and Animation are active; current questions are topology/deformation/playback evidence, not repeated asset-family authoring.
- `axm-building-design`: Hard-Surface and Materials now have a real pavilion, but there is still only one bounded building source family and active Environment integration. No building generator was opened.
- `axm-nature-design`: existing Procedural PR #4 already owns branch/crown variation; Organic Form PR #6 adds `compact-east-tree-neutral-001`; Organic Form PR #8 adds `east-rear-tree-neutral-001`; Geometry PR #7 owns a separate derived cap-winding repair. This is the changed evidence that creates a real repeated Procedural need.
- `axm-weather-design`: Procedural PR #3 already owns stochastic field-layout variation. No duplicate Weather lane.
- `axm-map-design`: Procedural PR #3 already owns proxy-placement variation; Environment/VFX/Runtime lanes remain active. No duplicate Map generator.
- `axm-object-design`: Hard-Surface, Materials, Rigging and Technical Art own the current equipment-case/module chain. Attachment semantics remain source-owned and the generic runtime attachment bridge is still missing; no Object configuration generator was invented.
- `axm-misc-design`: no open implementation lane.

Relevant current coordination state also confirms:
- Art Direction has cleared the east-foreground hierarchy defect but still holds final world art and identifies the rear/right Nature mass as the next scene issue;
- Organic Form has retained the distinct east-rear source but holds Environment A/B, deformation and topology migration;
- Geometry's tapered-cap repair remains a derived candidate with source migration held;
- Environment has separately integrated the exact Building pavilion and still holds Art Direction / Visual QA / runtime acceptance;
- Capability Cartography still keeps source-owned 3D frame semantics separate from UC's current 2D physics mounts;
- Technical Art has proven an Object source-frame -> UC GLB -> Godot handoff without moving Object construction semantics into UC.

No active specialist lane was duplicated.

## Repeated pattern selected

Exact source studies:

1. `sapling-neutral-001`
   - source origin: `fbc202449981f2bac153951c561ed0ed6120c936`
   - source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`
   - receiving envelope: west-A `[2.2, 2.2, 5.2] m`.

2. `compact-east-tree-neutral-001`
   - exact source revision: `64116d63fc76daa1623b5fd5046a4e6074100bda`
   - source digest: `9c87cf26f02f7adee832908652942218ec779c9029a0611aae1fb66eb0f62f54`
   - receiving envelope: east-B `[1.6, 1.6, 4.0] m`.

3. `east-rear-tree-neutral-001`
   - exact source revision: `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`
   - source digest: `0adf2cde8cfc355ec21b6fb06c6759b753300164b5f72ba029dc1b8c6d2ef307`
   - retained seed-29 east-A envelope `[1.678837, 1.678837, 4.197092] m`.

The repeated operation is deliberately narrower than a vegetation generator: vary already-authored branch length/yaw plus leaf length/width/yaw/pitch, keep branch roots fixed, move branch-associated leaf-cluster centers with their branch tips, then rerun the exact Nature Organic Form checks and source-specific envelope.

## Smallest reusable repair

Existing lane:

`mike-axiom-mir/axm-nature-design#4 — Procedural: prove bounded branch-crown variation across Nature sources`

Branch:

`studio/procedural-sapling-family-001`

Current exact head:

`d535484d4c3623a32fc9f5dc44b0856619b9b1ec`

The historical sapling schema `axm.nature-sapling-variation-family/v0.1` remains supported for reproducibility. The repair adds generic profile schema:

`axm.nature-branch-crown-variation-family/v0.2`

Generic profiles must pin exact source repository, ref, path, study ID and digest. Compact and rear source JSON is **not copied** into the Procedural branch; CI checks out those exact revisions separately.

The earlier sapling-specific immutable-field check was also repaired. Instead of naming a small fixed list, the mutator now treats every top-level source field as immutable except the explicitly authorized procedural outputs:

- `study_id`;
- `branches`;
- `leaf_clusters`;
- `procedural_provenance`;
- appended `truth_boundary` text.

That preserves source-specific fields such as `form_intent`, as well as trunk, flex zones, design checks, donor provenance and Environment/Weather handoffs, without teaching the shared mutator those domain details.

For the two external source revisions, CI also requires their `organic_form.py` evaluator bytes to equal the receiving evaluator before cross-source evidence can run. A drifting evaluator therefore fails closed rather than silently inheriting compatibility.

## Exact multi-source evidence

Exact-head workflow:

- `35065474333 — Procedural sapling variation family`: **SUCCESS** on Python 3.11 / 3.13, including legacy evidence plus the new cross-source probe;
- `35065474446 — Nature organic form baseline`: **SUCCESS**.

Retained cross-source artifact:

- ID `10434505038`;
- name `tree-branch-crown-cross-source-001-d535484d4c3623a32fc9f5dc44b0856619b9b1ec`;
- exact head binding `d535484d4c3623a32fc9f5dc44b0856619b9b1ec`;
- size `367,425` bytes;
- SHA-256 `7098f308b63bd4b6d8e121255f67378979045d6849abd9c22370bd4d087b9102`.

The retained ZIP was downloaded and independently rehashed to that exact digest. Its `summary.json` reports:

`PASS_BRANCH_CROWN_MUTATOR_THREE_SOURCE_PROBE`

Exact retained output count: **9** — three seeds for each of three materially different exact source bodies. All **9/9 source digests are distinct** and all **9/9 mesh digests are distinct**.

Per-source retained pressure:

| source | seeds | moved branch tips | changed leaf blades | envelope |
|---|---|---|---|---|
| sapling west-A | `11 / 47 / 101` | `5 / 5 / 5` | `24 / 25 / 25` | PASS |
| compact east-B | `17 / 59 / 131` | `5 / 5 / 4` | `24 / 23 / 25` | PASS |
| east-rear A | `23 / 71 / 149` | `5 / 5 / 5` | `24 / 25 / 24` | PASS |

All retained candidates also pass the existing Nature structural/design evaluator, preserve exact branch attachments and preserve every non-authorized source field.

The retained archive contains front/side/top wire evidence for all nine outputs. Direct inspection of the nine front views shows that each source body keeps its recognizable source silhouette while seeds visibly alter branch direction/length and leaf-fan read. This is only a non-identity sanity observation; it is not Art Direction or Visual QA acceptance.

## Failure bounds retained for every source

Each of the three source profiles receives its own synthetic impossible-envelope control:

- attempt limit: exactly `3`;
- envelope: exactly 50% of that source profile's allowed receiving envelope;
- required outcome: `HOLD_NO_VALID_VARIANT`.

All three exhaust all three attempts and HOLD. No mutation range or acceptance threshold is widened and no least-bad candidate is promoted.

This matters because the reusable value is not only deterministic generation; it is deterministic refusal when source-owned bounds cannot be satisfied.

## Placement boundary

The result supports one reusable **Nature-local branch/crown mutator**. It does not support a universal vegetation ontology or moving Nature semantics into UC.

Ownership remains:

- Nature source bodies own trunk/form intent/flex/design/handoff semantics;
- Nature procedural profiles own source-specific variation ranges and envelopes;
- the shared Nature mutator owns only the narrow branch/crown operation and bounded rejection loop;
- Environment owns whether any candidate belongs in a scene;
- Art Direction / Visual QA own perceptual acceptance;
- Geometry owns any explicit cap-winding/source-migration decision;
- VFX/Rigging own deformation/wind response;
- Universal Creation remains unchanged;
- Profession Fabric remains unchanged and EXPERIMENTAL;
- `axm-create-me` records coordination only.

The previous Profession Fabric three-domain procedure proof remains valid historical evidence at exact head `ddb71acd9c7b463088d25385d528936a074cca3c`. It pins the older Nature Procedural head `f939ae78ae6bb986aa67d557d7f8ff977abb7775`; this activation does not silently rewrite that experiment.

## Truth boundary / non-claims

This PASS does **not** establish:

- species generation or botanical/biological correctness;
- a universal vegetation generator, Geometry Nodes language or cross-domain mutation engine;
- better/final art direction;
- Environment acceptance of any generated variant;
- topology migration or Geometry PR #7 acceptance;
- deformation, wind physics, rigging or animation quality;
- materials/lookdev;
- engine/runtime performance;
- gameplay;
- production readiness or CANON;
- Procedural Design mastery;
- a reason to alter Universal Creation or promote the experimental Profession Fabric procedure.

## Four-root check

- **Truth:** exact source revisions/digests, exact procedural head, nine distinct outputs and all three bounded HOLD paths are retained; visual inspection is labelled only as non-identity evidence.
- **Agency / non-domination:** source-specific form intent, envelopes and downstream acceptance stay with their owning repos/specialists. The mutator cannot silently broaden authority.
- **Continuity:** the existing Nature Procedural PR is extended in place; legacy v0.1 remains reproducible; previous Profession Fabric evidence stays pinned to its historical Nature head.
- **Wisdom before speed:** one repeated operation is generalized only after three real source bodies expose it; UC and Profession Fabric are left unchanged rather than abstracted prematurely.

## Handoffs / next Procedural gate

- **Capability Cartography:** three exact Nature source bodies now prove literal reuse of the same mutation implementation. Treat that as evidence for Nature-local placement; do not infer UC extraction merely because the operation repeats.
- **Organic Form:** source identity is preserved. Future source bodies can opt into v0.2 only with explicit source profile/provenance; no source is automatically proceduralized.
- **Environment / Art Direction / Visual QA:** the nine variants are evidence samples, not scene candidates by default. If one is considered for Map, compose it explicitly and rerun the receiving visual gate.
- **Geometry:** the cross-source procedural probe intentionally does not consume the derived cap-winding repair. Source migration remains a separate explicit decision.
- **Procedural Design next pass:** look for another literal repeated creation operation that now appears in multiple real source families. Do not broaden this Nature mutator into species generation, buildings, objects or cross-domain mutation without independent evidence.
