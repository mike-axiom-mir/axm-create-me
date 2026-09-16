# 10 — Procedural Design Specialist Status

Date: 2026-09-16
State: **PASS_EXACT_UTILITY_PANEL_RECEIVER_PLACEMENT_FAMILY / EXISTING BUILDING PROCEDURAL PR ADVANCED / 2 ORTHOGONAL SOURCE-OWNED RECEIVER OUTPUTS / 7 NEW FAIL-CLOSED CONTROLS / BASE 17_OF_19 + SUCCESSOR 21_OF_23 PROCEDURAL BOX COVERAGE / EXACT PROCEDURAL + HARD-SURFACE CI GREEN / INDEPENDENT ARTIFACT REHASH / BUILDING_LOCAL / NO UC OR PROFESSION-FABRIC EXTRACTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/10_procedural_design.md`, then re-scanned all design repositories and current specialist status before changing product code.

`axm-create-me` remains **coordination only**. Product code/evidence changed only in `mike-axiom-mir/axm-building-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous exact Procedural head `c9c890e47ed3d95ba8c3ab5ee7b4d6ed92c240b3` remains historical truth for the five-row + source-owned header-expansion result. This pass adds a separate receiver-placement family without rewriting those outputs.

## Constellation / duplication scan

- **Weapon:** no open implementation lane exposed a stronger grounded repeated 3D source pattern.
- **Armor:** no open implementation lane exposed a stronger grounded repeated source pattern.
- **Character:** active Geometry/Rigging shoulder and deformation work is still changing connectivity/intersection ownership; no Procedural duplication opened.
- **Unit:** no open repeated source family justified a generator.
- **Animal:** active Geometry/Organic/Rigging/Animation work remains source/form/deformation ownership; no Procedural duplication opened.
- **Building:** existing Procedural PR #4 already owns the lane. Its Hard-Surface source manually repeats the exact same utility-panel placement operation across two source-owned orthogonal receiver frames. This was the selected bounded gap.
- **Nature:** existing Procedural PR #4 already owns its three-source seeded branch/crown family; current leaf-sidedness work remains Geometry/Materials/Runtime-owned.
- **Weather:** existing Procedural PR #3 already owns bounded seeded atmosphere variation.
- **Map:** existing Procedural PR #3 owns receiving placement variation; Environment/VFX/Runtime are actively converging current-world evidence and were not duplicated.
- **Object:** existing Procedural PR #11 already owns bounded bilateral service-module configurations; current hinge/latch/rig/runtime work remains separately owned.
- **Misc:** no open grounded repeated family justified a catch-all generator.

Current Art/Geometry/Hard-Surface/Organic/Materials/Rigging/Animation/Environment/VFX/Technical-Art/Runtime/Visual-QA/Cartography statuses were also read before selection. No competing specialist currently owns this exact Building-local repeated receiver-placement operation.

## Selected repeated pattern

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#4 — `Procedural: derive repeated pavilion box rows from exact source`**.

Current exact Procedural head:

`17b5a2a2f0a85857293dccc4f042c091324fef5a`

PR state after CI: **OPEN / DRAFT / MERGEABLE**.

The source-owned Hard-Surface builder already performs the same operation twice:

1. validate one exact `utility-access-panel-001` against a source-owned receiver frame by tag, footprint, exact four-point mount pattern, orthonormal/right-handed frame and standoff clearance;
2. map panel local `+X/+Y/+Z` to receiver `normal/lateral/up`;
3. place the same exact proof box with no scale and no extra rotation.

The two source receivers are materially different:

- `front-utility-bay`: outward normal `[0,-1,0]`;
- `east-utility-bay`: outward normal `[1,0,0]`.

Their normal dot product is exactly `0.0`, so this is not one lucky duplicated orientation.

## Smallest reusable generator

Added Building-local family:

`axm.building-utility-panel-receiver-placement-family/v0.1`

New files in the existing Procedural branch:

- `procedural/service_pavilion_utility_panel_receivers_001.json`;
- `tools/build_pavilion_utility_panel_receivers.py`;
- `tests/test_pavilion_utility_panel_receivers.py`.

The existing Procedural workflow was extended; no new PR or workflow family was opened.

The generator reuses the exact Hard-Surface `fit_panel`, source frame and closed/outward box helpers. It does not infer a receiver, change source geometry, add optional occupancy semantics, scale the panel, add an extra rotation, or copy attachment semantics into UC.

Authority:

`DERIVE_ONLY_EXACT_SOURCE_OWNED_RECEIVER_PLACEMENT`

Failure policy:

`FAIL_CLOSED_NO_NEAREST_RECEIVER_NO_FRAME_INFERENCE_NO_SCALE_NO_EXTRA_ROTATION_NO_SOURCE_REWRITE`

Scoped result:

**`PASS_EXACT_UTILITY_PANEL_RECEIVER_PLACEMENT_FAMILY`**

## Multiple materially different outputs

Exact retained outputs:

### Front receiver

- receiver: `front-utility-bay`;
- center: `[-2.45,-1.08,1.65] m`;
- normal: `[0,-1,0]`;
- frame digest: `97a615819005818aadbf2b5a66dd9f5232919b03134d6a2a837a6e3964495f22`;
- transformed mesh digest: `dcadb6a7e938557c866259ed4a3ca7febb32b593b68b22073adc2617d63ef5c0`;
- placement digest: `5112bd9921f962eff1fdca4b64217794f23c29ae1c11d5cfd9d638f0be60e8e3`.

### East receiver

- receiver: `east-utility-bay`;
- center: `[3.88,0.10,1.65] m`;
- normal: `[1,0,0]`;
- frame digest: `22268500b7f803effe69eba1ec4819dff2ed5600678ac44b9dc962da4c3ee626`;
- transformed mesh digest: `95bbe7d3feebcaeebdaa285ea2f69ee24989d16f140ef59abf08f4725d77a904`;
- placement digest: `ac54a347b7a6dbe876cf6f48ac3984a9aff66a887afe4d088f306f2a9666276b`.

Exact pressure:

- `2/2` distinct receiver-frame digests;
- `2/2` distinct transformed-mesh digests;
- `2/2` distinct placement digests;
- exact receiver-normal dot `0.0`;
- exact mount-pattern residual remains `0` at both receivers;
- no receiving scale or extra rotation.

Combined bounded coverage now becomes:

- existing five-row family: `15/17` logical pavilion components;
- new receiver-placement family: `2/2` exact Hard-Surface panel placements;
- therefore exact base-builder Procedural coverage: **`17/19` real box outputs**;
- with the already source-owned header expansion, bounded successor composition coverage: **`21/23` boxes**;
- only `slab` and `roof` remain intentionally outside the Procedural families.

The previous five-row generated subset digest and header-expansion evidence are unchanged and still re-run in the same workflow.

## Failure bounds

Seven new controls fail closed:

- duplicate receiver ID;
- unknown receiver ID;
- pavilion source SHA identity drift;
- panel source SHA identity drift;
- panel orientation-contract drift;
- non-orthogonal receiver frame;
- panel/receiver tag mismatch.

No nearest receiver, fallback receiver, inferred frame, hidden scale, extra rotation, alternate panel source or source rewrite is substituted.

## Exact CI and retained evidence

Exact-head workflows on `17b5a2a2f0a85857293dccc4f042c091324fef5a`:

- **`35123789088 — Procedural building symmetric-row evidence` — SUCCESS** on Python 3.11 and 3.13; evidence build/summary/artifact PASS on 3.11;
- inherited **`35123789085 — Hard-surface building evidence` — SUCCESS** on the same exact head.

Retained combined artifact:

- ID `10457829783`;
- name `service-pavilion-procedural-001-17b5a2a2f0a85857293dccc4f042c091324fef5a`;
- uploaded size `14,185 bytes`;
- GitHub SHA-256 `8026b165db236dee2ef9e4dce50e4f61b3918b2625a0435d60ab7d94a35c4363`;
- downloaded ZIP independently rehashed to the exact same SHA-256.

The artifact retains all prior row/header evidence plus the new receiver-placement profile, both generated placements, exact-head/source-head receipts and receiver-family summary.

## Placement / capability boundary

Correct home remains **Building**. Universal Creation search shows generic spatial/static-asset contract inspection exists, but there is no justification to move Building receiver semantics or this source-specific two-receiver placement family into UC. UC remains unchanged.

Profession Fabric search found no existing receiver-placement profession procedure and this one Building family does not justify promotion. Profession Fabric remains unchanged.

This is deliberately distinct from Object Procedural PR #11: Object already owns optional left/right module configuration over Object sockets; Building here only derives the two exact source-prescribed panel placements and does **not** invent optional occupancy semantics.

## Handoffs

- Procedural PR #4 exact-result comment: `5701141583`.
- Hard-Surface source-owner PR #2 downstream handoff: `5701143250`.

Hard Surface remains source/interface authority. No source adoption request is needed because this family consumes only already source-owned receiver frames and panel semantics.

## Explicit non-claims

This activation does **not** establish:

- arbitrary procedural building or attachment generation;
- optional panel occupancy or runtime attach/detach;
- a universal receiver/attachment schema;
- source/interface rewrite;
- physical fastener/retention/sealing/load/manufacturing validity;
- collision, physics, navigation or gameplay;
- final normals, tangents, UVs, materials or visual quality;
- Map adoption or target-device runtime fitness;
- UC extraction or Profession Fabric promotion;
- CANON, production readiness, game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** the family consumes exact source identities, exact receiver frames and exact existing Hard-Surface fit checks; seven deliberate drifts fail closed.
- **Agency / non-domination:** Hard Surface keeps all source/interface meaning; Procedural only derives deterministic placements and does not overwrite other specialist lanes.
- **Continuity:** the same existing PR/workflow retains and reruns the previous five-row and header-expansion evidence; the new family is additive and provenance-bound.
- **Wisdom before speed:** one manually repeated, already source-supported operation was compressed; no broad attachment framework or premature UC/PF abstraction was introduced.

## Next Procedural pass

Re-scan the constellation. Prefer another target unless new source/evidence creates a real dependency in Building. Do not proceduralize `slab` or `roof` merely to reach 100% coverage; they currently lack a repeated pattern and should remain explicit until evidence justifies otherwise.
