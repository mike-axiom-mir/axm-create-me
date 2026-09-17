# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_REPRESENTATION_EQUIVALENCE_RELATION_IDENTITY_MAP / BUILDING_SOURCE_604_VS_RECEIVER_312_SEPARATED / ANIMAL_SOURCE_42_RENDER_84_INDEX_240_TO_84_PRESERVED / UC_179_NEUTRAL_OBSERVER_SUFFICIENT / PF_38_REFINED_EVIDENCE_PROVENANCE_ONLY / NO_NEW_UC_OR_PRODUCT_IMPLEMENTATION / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then inspected current coordination state, specialist status, current product PRs, Universal Creation continuity and Profession Fabric evidence before altering coordination knowledge.

`axm-create-me` remains **coordination only**. No product mesh, render domain, receiver implementation, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, adoption decision, CANON state, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh continuity / overlap scan

The previous Cartography pass separated scalar field/frame/reference-feature semantics. That map remains valid and was not widened by cadence.

Fresh shared-system state:

- Universal Creation PR #196 has merged to current main `e9eed3d9eb66392992cc18c8884bfade0d3b8efd`;
- active UC PR #197 is the single successor Physics lane at `2f1521e06120bb46eb9b98ac460508fe5d40ba89` and does not overlap the representation-equivalence question selected here;
- merged UC PR #179 already provides the neutral indexed-surface observer distinction needed here: `SOURCE_VERTEX_AND_ATTRIBUTES` versus opt-in `ATTRIBUTES_AND_PROTECTED_SPLITS`;
- the current merged UC `src/axm_uc/indexed_surface_eligibility.py` still states that cross-source candidates are diagnostic only and do not authorize semantic welding or product adoption;
- Profession Fabric issue #38 remains the established experimental evidence/provenance proposal surface;
- the coordination-only shared-capability execution-claim registry contains no active claim covering a new representation-equivalence implementation, so no shared implementation lane was opened.

Fresh specialist/product state used in the scan:

- Geometry status is currently advancing Building review-atlas evidence without consuming UC GLB density evidence by analogy;
- Technical Art status has made the Building 604-source-class versus 312-consumer boundary executable on existing Map PR #40;
- Runtime status has independently completed Object VFX MultiMesh batching and retains Animal representation work as separate history;
- Map PR #45 is a new Object rigid-part receiving bridge and already owns that articulation/hierarchy problem;
- Object PR #32 owns the fresh VFX batching representation result;
- these active lanes were not duplicated.

## Selected material cross-repo learning — grouping counts do not define semantic equivalence

The strongest reusable learning is now supported by two materially different products with opposite representation shapes:

**A representation can be safely compacted only relative to an explicit equivalence relation in an explicit domain.** The same numeric act of “merging vertices/groups” may be valid inside one receiver/render domain and invalid against source semantics.

Core rule:

`GROUP_COUNT_OR_POSITION_EQUALITY != EQUIVALENCE_RELATION_IDENTITY`

The exact equality key, protected splits, dropped authoritative attributes and domain of the relation must remain explicit.

## Evidence A — Building / Map: valid receiver quotient, explicitly not source equivalence

### Building source authority

Building Hard Surface PR #14 exact head:

`7b86b1a9da1ef8dc670ca01cf4918728e68ece92`

Its source-owned planar-role policy keeps **604 source-authorized render equivalence classes** under a hard-normal-sensitive identity. Building Geometry PR #13 exact head:

`7dfb1153dc5f80bcbf1b48803f044236d4ebb030`

also exposes a smaller **312 role+position quotient**, but classifies that quotient as:

`DERIVED_ATTRIBUTE_DROPPING_PARTITION_NOT_SOURCE_EQUIVALENT`

Exact loss evidence:

- source-authorized classes: `604`;
- derived quotient groups: `312`;
- source identities removed: `292`;
- quotient groups crossing source hard-normal boundaries: `188`;
- dropped source-authoritative attribute: `EXACT_CARDINAL_HARD_NORMAL`.

So `312` is not a cheaper spelling of the same source equivalence relation.

### Real receiving representation

Map Technical Art PR #40 current exact head:

`53493eb60efec35b1756ea8ab0a7f0bee11e2003`

Exact workflow `35267127221` completed SUCCESS with:

`PASS_BUILDING_312_GODOT_CONSUMER_NORMAL_IDENTITY_BOUND_TO_SOURCE_HARD_NORMAL_AUTHORITY__HOLD_NORMAL_NUMERIC_EXACTNESS_RUNTIME_VISUAL`

The real Godot receiver truthfully uses the 312-group representation only as its **own consumer domain**. It explicitly declares:

- `EXACT_CARDINAL_HARD_NORMAL` is dropped from the source relation;
- consumer normal identity is per-material `SurfaceTool.generate_normals()` followed by `SurfaceTool.index()`;
- stored vertices `312`;
- indices `1008`;
- triangles `336`;
- material surfaces `5`;
- source-equivalence claim `false`;
- source-hard-normal-preservation claim `false`.

The measured post-index normal repack remains separately non-byte-exact at `120 / 1008` corners, maximum component delta `0.00011304020881702792`, maximum angular delta `0.006869404718583788°`, with no generic tolerance inferred.

This is a legitimate receiver-local quotient precisely because its semantic scope is named rather than smuggled back into source authority.

## Evidence B — Animal: render-domain expansion must survive later indexing

Animal supplies the complementary shape.

Geometry PR #20 exact render identity:

`ca4bb8a2f144231f8755eacc980785d1807b79db`

The geometric source remains:

- `42` source vertices;
- `80` triangles.

The UV/tangent-ready representation necessarily expands to **84 render vertices** because side UV seam, cap/side islands, polar tangent singularities and tangent handedness require explicit render-domain splits.

Animal Runtime PR #23 exact tested head:

`f4b5b637dc0cabb51bcf9f14a44d53f397f300fa`

Scoped result:

`PASS_ANIMAL_TANGENT_READY_INDEXED_PAYLOAD_REDUCTION`

Its real Godot A/B safely changes:

- control: `240` stored triangle-corner vertices, no indices;
- candidate: exact `84` seam-aware render vertices + `240` indices;
- triangles/surface remain `80 / 1`;
- modeled payload `11,520 -> 4,992 B` (`-6,528 B / -56.6667%`);
- RenderingServer buffer `6,417,912 -> 6,414,024 B` (`-3,888 B`);
- draw/object/primitive/texture deltas `0 / 0 / 0 / 0`;
- both retained `960x720` A/B PNG pairs byte-identical.

The decisive negative is explicit: a fake **`84 -> 42`** stored-vertex collapse fails closed. Source vertex identity is therefore too coarse for the final UV/tangent render domain.

Animal proves the inverse-looking rule to Building:

- first **split** source identities when render semantics require a finer relation;
- then deduplicate only inside the final attribute-complete render relation;
- never use the numerically smaller source domain as permission to erase required render splits.

## Cross-repo map

The two cases support a bounded relation model:

| Identity / state | Meaning |
|---|---|
| `representation_domain_identity` | Exact source, render or receiver domain being grouped |
| `equivalence_relation_identity` | Stable identity for the grouping relation itself |
| `equivalence_key_fields` | Exact attributes/contracts participating in equality |
| `protected_split_identity` | Caller/domain-owned split identity equality must not cross |
| `dropped_authoritative_fields` | Source-owned fields intentionally omitted by a derived quotient |
| `relation_kind` | Evidence label such as `SOURCE_PRESERVING`, `RENDER_DOMAIN_EXPANSION`, `WITHIN_DOMAIN_DEDUP`, `ATTRIBUTE_DROPPING_QUOTIENT` |
| `mapping_cardinality` | Exact source/render/receiver cardinalities and mapping shape |
| `information_loss_state` | Whether the relation drops source-authoritative meaning and whether reversal is established |
| `semantic_equivalence_scope` | `SOURCE_EQUIVALENT | RECEIVER_LOCAL_EQUIVALENT | NOT_SOURCE_EQUIVALENT | NOT_EVALUATED` |

Non-transfer rules:

1. same count does not prove the same equivalence relation;
2. same positions do not prove the same equivalence relation;
3. a valid receiver-local quotient does not become source-authoritative equivalence;
4. source-vertex identity does not authorize collapsing render-domain seams/splits;
5. successful indexing/dedup proves only the exact relation and downstream evidence actually tested;
6. changing equality key, protected splits or dropped authoritative fields creates a new consumed identity for affected claims.

## Universal Creation placement — existing neutral observer is sufficient

No new UC feature was opened.

Merged UC PR #179 already provides the right machine boundary. Current merged main `e9eed3d9eb66392992cc18c8884bfade0d3b8efd` still exposes:

- default `SOURCE_VERTEX_AND_ATTRIBUTES` — source-lineage-preserving grouping;
- opt-in `ATTRIBUTES_AND_PROTECTED_SPLITS` — render/receiver tuple grouping only with explicit caller-declared protected split identity;
- explicit non-claim that cross-source candidates authorize semantic welding or product adoption.

This is enough neutral machinery to **observe** candidate grouping. It intentionally does not own Building hard-normal semantics, Animal UV/tangent split semantics, product adoption or source equivalence policy.

Opening another UC equivalence/dedup lane would duplicate existing machinery and risk centralizing product meaning.

## Profession Fabric placement — evidence/provenance vocabulary only

Profession Fabric issue #38 was refined in place:

`mike-axiom-mir/axm-profession-fabric#38 comment 5721190963`

The refinement adds only the explicit representation-equivalence relation identity vocabulary above beneath the existing representation/storage/dependency model.

PF must not choose weld keys, define seams, generate normals, mutate topology, select product representations or authorize adoption. It records which relation a claim actually consumed.

No PF implementation or profession promotion is requested by this Cartography pass.

## Product returns

The cross-repo boundary was returned without modifying either product lane:

- Animal Runtime #23 comment `5721193053`;
- Map Technical Art #40 comment `5721197259`.

Animal keeps its 84-vertex render-domain identity and exact Runtime PASS. Building/Map keep the 604-source / 312-consumer separation and current normal-exactness/runtime/visual HOLDs.

## Fresh constellation snapshot / avoided duplication

- **Building:** Hard Surface #14 and Geometry #13 already own the source hard-normal equivalence and attribute-dropping quotient; Geometry #18 now works on review-atlas sampling, a different evidence class.
- **Map:** Technical Art #40 already owns the exact Godot/UC receiver grouping and normal-generation bridge; no sibling Technical Art lane was opened. Animation #44, VFX #43 and new Object rigid-part bridge #45 are different scopes.
- **Animal:** Geometry #20 owns the 42->84 seam-aware render split; Runtime #23 owns 240->84 indexing and the fake 84->42 negative. Current Runtime #29 and Materials #24 are different lifecycle/tangent-space lanes.
- **Object:** Runtime #32 has independently completed one-MultiMesh VFX batching; that is a representation/performance result, not an equivalence-policy implementation and was not folded into this map.
- **Nature / Weather / Character / Weapon / Armor / Unit / Misc:** no fresher lane justified replacing the selected evidence or inventing an equivalence implementation.
- **Universal Creation:** current main `e9eed3d9...`; active PR #197 is Physics and non-overlapping.
- **Profession Fabric:** PR #37 remains the distinct bounded-variation evidence experiment; issue #38 remains the correct proposal surface for this evidence vocabulary.

## Explicit non-claims

This activation does **not** establish:

- one universal vertex equivalence relation;
- automatic inference of weld/dedup keys;
- automatic collapse from render/receiver identity to source identity;
- automatic render-domain expansion from source semantics;
- arbitrary-mesh welding/indexing safety;
- byte-exact normal preservation in the Building consumer;
- final Animal UV/tangent visual acceptance;
- a new UC implementation;
- a PF implementation or profession promotion;
- product adoption;
- Art Direction / Visual QA acceptance;
- CANON;
- production/game readiness;
- mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- If a third independent product presents a different grouping relation, check whether the relation vocabulary survives without product-specific fields.
- If a consumer changes equality key, protected split declaration or dropped authoritative field, require exact claim rebind/rerun rather than count-based inheritance.
- Do not open a UC mutator/welder merely because the observer can compute a candidate; mutation authority requires materially independent safety evidence beyond diagnostic grouping.
- Continue checking `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` before any shared implementation work.

## Recovery / provenance

Previous Cartography state:

`PASS_SPATIAL_SCALAR_REFERENCE_FEATURE_IDENTITY_MAP`

Previous status blob SHA:

`ac36809ebb2b5f9a78c3339c494b5b656281dd44`

Current PF refinement:

`mike-axiom-mir/axm-profession-fabric#38 comment 5721190963`

Current product returns:

- `mike-axiom-mir/axm-animal-design#23 comment 5721193053`;
- `mike-axiom-mir/axm-map-design#40 comment 5721197259`.
