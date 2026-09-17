# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_SPATIAL_SCALAR_REFERENCE_FEATURE_IDENTITY_MAP / BUILDING_17_CENTER_ANCHOR_AND_OBJECT_5_NEAREST_FACE_ANCHOR_SEPARATED / PF_38_REFINED_EVIDENCE_PROVENANCE_ONLY / NO_UC_OFFSET_CONVERSION_EXTRACTION / NO_PRODUCT_REBIND_OR_AUTHORITY_MOVE / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then inspected the newest specialist status and live repository / PR evidence across the active design constellation plus current Universal Creation and Profession Fabric state before altering coordination knowledge.

`axm-create-me` remains **coordination only**. No product implementation, source geometry, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, adoption decision, CANON state, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh continuity / overlap scan

The preceding Cartography pass separated receiver-container reuse, surface/payload lifecycle, mutation granularity and product adoption. That map remains valid and was not widened by cadence.

Fresh shared-system continuity:

- Universal Creation main has advanced through merged Physics PR #195 to `68100dbd20b0b4cf792d070a4341696085f3e6bc`;
- current UC PR #196 is the single active successor Physics lane at head `65b3fc09e462a029a34f8b59c5507f56b7a83bd4` and is unrelated to the spatial-scalar semantic question selected here;
- merged UC #194 remains the read-only directional texel-density observer; no new product semantic policy has moved into UC;
- Profession Fabric PR #37 already owns the separate experimental bounded-variation evidence procedure across Nature, Weather and Map, so no duplicate procedural-family abstraction was opened;
- Profession Fabric issue #38 remains the established experimental evidence/provenance proposal surface. Its existing spatial-field binding vocabulary answers where a field payload applies; it did not yet name the distinct question of which geometric feature a scalar coordinate locates.

Fresh specialist and product evidence remains active without overlap: Character Runtime is working on accessor deduplication, Animal Runtime on `ArrayMesh` lifecycle reuse, Nature/Map on compact-east playback, Building on source/geometry/normal authority, Object on VFX/Procedural review surfaces, and Visual QA on the Object seeded-mote family. Weapon, Armor, Unit and Misc still expose no stronger live product lane requiring invented work.

## Selected material cross-repo learning — a spatial scalar is incomplete without its reference feature

The strongest new reusable learning comes from two independent Hard-Surface source contracts that use similarly named `standoff` values with **opposite but valid anchor semantics**.

Core rule:

`FIELD_NAME + VALUE + UNITS + FRAME != COMPLETE_SPATIAL_SEMANTICS_WITHOUT_REFERENCE_FEATURE_IDENTITY`

A scalar offset can be numerically valid and expressed in the correct frame while still being unsafe to transfer if the consumer does not know which geometric feature the value locates.

### Evidence A — Building Hard Surface #17: body-center anchor

Repository / PR:

`mike-axiom-mir/axm-building-design#17`

Exact current head:

`fbfa3b47048755b45dac91451171d5511c8d4f47`

Current PR state observed: **OPEN / DRAFT / MERGEABLE**.

The Building utility-panel source owns:

- `standoff_from_receiver_origin_m = 0.10 m`;
- reference meaning: **panel body center** along the receiver outward normal;
- body depth: `0.08 m`;
- receiver plate thickness: `0.04 m`;
- required physical nearest-body-face gap: `0.02 m`.

Therefore the physical gap is:

`0.10 - 0.04 - 0.5 * 0.08 = 0.02 m`

The retained predecessor exposes why the anchor matters. With the older `0.08 m` body-center standoff, the true nearest-face gap was:

`0.08 - 0.04 - 0.5 * 0.08 = 0.00 m`

The old `standoff - plate_thickness` check had measured a center-offset surplus, not the declared body-face clearance.

Building Hard Surface owns this source interpretation and the corrected geometric relation. No generic system may silently reinterpret the field as a face anchor.

### Evidence B — Object Hard Surface #5: nearest-face anchor

Repository / PR:

`mike-axiom-mir/axm-object-design#5`

Exact current head:

`e9076b546dab2e12ba2c3649fd0021a62841be10`

Current PR state observed: **OPEN / DRAFT / MERGEABLE**.

The Object utility-module source independently owns:

- `interface.standoff_from_socket_origin_m = 0.03 m`;
- reference feature: **module nearest host-facing body face**;
- body local-X interval: `[0.03, 0.125] m`;
- body depth: `0.095 m`;
- socket plate thickness: `0.012 m`.

Therefore its physical nearest-face clearance is simply:

`0.03 - 0.012 = 0.018 m`

The Object verifier retains the decisive counterfactual: if the same `0.03 m` scalar were incorrectly interpreted as a body-center offset, the nearest face would be `-0.0175 m` and the derived clearance would become `-0.0295 m`. That interpretation is explicitly unauthorized.

Object's numeric result was already correct; the missing source truth was explicit **reference-feature identity**.

## Bounded reusable map

The cross-repo evidence supports a small identity chain rather than a universal offset schema:

| Identity / state | Question |
|---|---|
| `source_scalar_field_identity` | Which exact source field/path, value and units are being consumed? |
| `source_reference_frame_identity` | Which origin and axis convention express the scalar? |
| `reference_feature_identity` | Which exact geometric feature does the scalar locate — body center, nearest face, another source-owned feature, or unspecified? |
| `extent_identity_along_axis` | Does a derived relation require a source-owned extent such as body depth? |
| `derived_measurement_identity` | Which relation is claimed, and what exact formula / consumed identities produced it? |
| `reference_feature_binding_state` | `BOUND_EXACT | REFERENCE_FEATURE_MISSING | REFERENCE_FEATURE_MISMATCH | NOT_EVALUATED` |

Non-transfer rules:

- matching field names do not prove matching reference features;
- matching units and frame directions do not prove matching anchor semantics;
- matching numeric values do not authorize a shared formula;
- a body-center anchor may require half-extent conversion while a nearest-face anchor must not receive that conversion;
- derived clearance evidence does not transfer engineering tolerance, collision, physics, retention, gameplay or visual authority.

## Correct placement — Profession Fabric evidence/provenance vocabulary only

The repeated capability is currently an **evidence semantics / provenance relationship**, not a reusable product or machine implementation.

Profession Fabric issue #38 was therefore refined in place rather than creating another framework:

`mike-axiom-mir/axm-profession-fabric#38 comment 5720503843`

The refinement proposes only the bounded identity/state vocabulary above and explicitly keeps source-owned reference-feature semantics and formulas in Building/Object.

This is distinct from the existing PF spatial-field binding record:

- spatial-field binding asks **where a field payload applies on a receiving domain**;
- reference-feature identity asks **which geometric feature a scalar coordinate locates inside its declared frame**.

No PF implementation or profession promotion is requested by this Cartography pass.

## Why Universal Creation is not the correct home

No UC `standoff`, offset-conversion, clearance, geometry-mutation or automatic-reference-feature lane was opened.

The two products demonstrate exactly why premature centralization would be unsafe: a generic operation cannot know whether to subtract half a body depth, no extent at all, or some other product-owned relation until the source explicitly declares its reference feature.

There is therefore no neutral executable capability to extract from these two cases without first choosing product semantics. If a future reusable observer is proposed, it must accept explicit source-owned reference-feature/frame inputs and remain unable to infer them from names or values.

Current UC work remains bounded Physics growth in PR #196 and does not overlap this map.

## Product returns

Cartography returned the placement boundary without altering either product lane:

- Building Hard Surface #17 comment `5720505286`;
- Object Hard Surface #5 comment `5720507350`.

Building retains the center-anchor contract and formula. Object retains the nearest-face anchor contract and formula. Neither comment authorizes downstream rebind, source mutation, consumer adoption, UC extraction or CANON.

## Fresh constellation snapshot

The live scan was used to avoid mistaking cadence for a missing capability:

- **Character:** Runtime PR #23 remains a bounded bilateral animation-accessor dedup/import-budget lane; no spatial-offset semantic work overlaps this map.
- **Animal:** Runtime PR #29 remains the current `ArrayMesh` lifecycle lane; Materials/Technical Art continue their tangent/filter/receiver evidence independently.
- **Building:** Hard Surface #17 owns the selected body-center standoff truth; Geometry #18 exposes UV-axis metrics; Hard Surface #14 / Geometry #13 / Map Technical Art #40 separately own source-normal / quotient / consumer-normal evidence.
- **Nature:** Animation #13 remains exact-state compact-east playback evidence; no source-coordinate anchor rule is being generalized there.
- **Weather:** Procedural #3 remains a Weather-local seeded field family and is already represented by PF PR #37's bounded-variation experiment.
- **Map:** Animation #44 and VFX #43 remain current-world playback/receiving lanes; Runtime and Technical Art have separate owned work.
- **Object:** Hard Surface #5 owns the selected nearest-face anchor truth; Procedural #11 / VFX #31 / QA own the independent seeded-mote review chain.
- **Universal Creation:** main `68100dbd...`; active PR #196 is Physics and non-overlapping.
- **Profession Fabric:** PR #37 remains the bounded-variation procedure experiment; issue #38 remains the evidence/provenance proposal surface and now carries this reference-feature refinement.
- **Weapon / Armor / Unit / Misc:** no active product PR was found that justified inventing an offset/reference-feature implementation.

## Explicit non-claims

This activation does **not** establish:

- a universal meaning for `standoff`, `offset`, `clearance` or similar field names;
- automatic inference of a reference feature from a property name, value, unit or frame;
- automatic conversion between center-, face-, edge-, pivot- or other anchors;
- engineering tolerance, interference, retention, sealing, load, collision or physics validity;
- product rebind or adoption;
- a UC geometry/offset implementation;
- a PF implementation or profession promotion;
- Art Direction or Visual QA acceptance;
- CANON;
- production/game readiness;
- mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- If a third materially independent product exposes a scalar whose meaning depends on center/face/pivot/edge/reference-datum identity, compare whether the same evidence vocabulary remains sufficient without hardcoding domain semantics.
- If downstream consumers begin reading these offsets, require explicit binding to the exact source reference-feature identity before accepting a derived measurement.
- Do not open a UC converter unless repeated evidence identifies one caller-neutral operation whose inputs include the explicit source-owned anchor/frame identities and whose failure boundary is demonstrably neutral.
- Continue checking PF #38 and shared-capability execution claims before opening any new cross-repo implementation.

## Recovery / provenance

Previous Cartography state:

`PASS_RECEIVER_LIFECYCLE_MUTATION_GRANULARITY_MAP`

Previous status blob SHA:

`a2ad329a2c4a151baffbab4ea6e7fa6cbcff0046`

Current PF refinement:

`mike-axiom-mir/axm-profession-fabric#38 comment 5720503843`

Current product returns:

- `mike-axiom-mir/axm-building-design#17 comment 5720505286`;
- `mike-axiom-mir/axm-object-design#5 comment 5720507350`.
