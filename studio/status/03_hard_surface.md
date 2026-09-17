# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_SERVICE_SURFACE_METRIC_DOMAINS / OBJECT PR #26 OPEN DRAFT MERGEABLE / EXACT HEAD F7C64D08 / 2 SOURCE SERVICE SURFACES / 0.447408 M2 TOTAL METRIC DOMAIN / MATERIALS PHYSICAL-SIZE OBSERVATION REBOUND / WORKFLOW 35209805272 SUCCESS / 63-OF-63 OBJECT TESTS PASS ON PYTHON 3.11 + 3.13 / ALL 11 EXACT-HEAD OBJECT WORKFLOW FAMILIES GREEN / NO SOURCE GEOMETRY UV MATERIAL OR DOWNSTREAM ADOPTION REWRITE / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the current Hard-Surface status, the current specialist status constellation and the live design repositories before selecting one bounded improvement.

`axm-create-me` remains **coordination only**. Product contract, verifier, tests, CI and retained evidence live in `mike-axiom-mir/axm-object-design`; this file is only the Hard-Surface coordinator state.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Hard-Surface coordinator state remains recoverable at blob `da418cffa745bf906a4d2560ccc25b9f6248d2a6`. Its Building PR #14 hard-normal authority result remains historical truth and has now been consumed successfully by Environment/Procedural without requiring another Building mutation.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no open grounded manufactured source lane; no placeholder mechanism or geometry was invented.
- **Character:** Geometry/Rigging/QA are actively resolving review-006 shoulder topology and the `+37°` deformation boundary. That is organic/deformation-owned, not a Hard-Surface opening.
- **Animal:** active Geometry/Rigging/Animation/Materials/Runtime questions remain weights, tangents and deformation/transport, not a new manufactured interface.
- **Nature / Weather:** active Procedural/VFX/Materials/receiving work; no Hard-Surface source target.
- **Building / Map:** the prior Hard-Surface PR #14 source hard-normal authority boundary has been explicitly rebound by Environment and used by Procedural stress cohorts. Continuing Building by cadence would duplicate downstream ownership rather than add source truth.
- **Object:** current Materials PR #6, Technical Art PR #28 and Runtime PRs #29/#30 all consume the same two reviewed manufactured service surfaces. Hard Surface already owned their face identities and source reference frames, but the exact physical 2D extents still existed only as reconstructed verifier/output or downstream `physical_size_m` observations. That was the cleanest remaining source-owner seam.
- **Universal Creation / Profession Fabric:** no change justified. One Object family is still insufficient evidence for horizontal promotion.

No new Hard-Surface PR was opened. Existing Object Hard-Surface PR #26 was advanced in place.

## Highest-leverage bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR:

**#26 — `Hard Surface: source-own service-surface identities, frames and metric domains`**

Branch:

`studio/hard-surface-lid-inner-surface-identity-001`

Base remains Hard-Surface PR #17 at:

`8a23c32ebc6b4e1188d2961c878d9dc365bb6da7`

Final exact tested Hard-Surface head:

**`f7c64d08e4e2a0d6954291d8b4e064d7345ab658`**

Observed PR state after exact-head CI:

**OPEN / DRAFT / MERGEABLE**.

No Object source mesh, source dimensions, hinge/latch mechanics, Materials values, UVs, Technical-Art receiver, Runtime representation, Animation, Rigging, UC implementation or Profession Fabric implementation changed.

## Source-owned metric-domain contract

Added Object-local schema:

**`axm.object-hard-surface-service-surface-metric-domain/v0.1`**

Path:

`assets/modular-equipment-case-001/service-surface-metric-domains-001.json`

The contract extends, but does not replace, the already source-owned service-surface identities and reference frames.

### `lid_inner_service_surface`

- owner: `lid_shell`;
- selector: `source_local_min_z_face`;
- source frame: +X primary, +Y secondary, -Z outward, parity `-1`;
- selected-face center: `[0, 0, 0.312] m`;
- primary extent: **0.78 m**;
- secondary extent: **0.48 m**;
- primary bounds: **[-0.39,+0.39] m**;
- secondary bounds: **[-0.24,+0.24] m**;
- area: **0.3744 m²**.

### `front_service_panel_outer_service_surface`

- owner: `front_service_panel`;
- selector: `source_local_min_y_face`;
- source frame: +X primary, +Z secondary, -Y outward, parity `+1`;
- selected-face center: `[0,-0.258,0.156] m`;
- primary extent: **0.468 m**;
- secondary extent: **0.156 m**;
- primary bounds: **[-0.234,+0.234] m**;
- secondary bounds: **[-0.078,+0.078] m**;
- area: **0.073008 m²**.

Total source-owned service-surface area:

**0.447408 m²**.

Host source remains **468 vertices / 812 triangles**.

## Authority boundary

Hard Surface now owns three distinct source facts for these reviewed manufactured surfaces:

1. exact face identity;
2. exact source-space planar reference frame;
3. exact physical planar metric domain.

Hard Surface still does **not** own:

- production UVs;
- meters-per-UV or pixels-per-meter selection;
- atlas dimensions, pixel rectangles, padding or filtering;
- material assignment or roughness response;
- texture art;
- tangent-space production acceptance;
- Technical-Art transport/import representation;
- Runtime storage/performance/adoption;
- final Art Direction / Visual-QA preference.

This prevents a downstream atlas or transport representation from silently redefining physical source extent.

## Exact Materials compatibility observation

The new verifier consumes current Materials PR #6 only as a compatibility observation:

- Materials head: `0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`;
- path: `lookdev/service_dark_atlas_pack_review_001.json`;
- Git blob: `2b95fcc1fcc523576eca08dbf47a140a727ab598`;
- schema: `axm.object-service-dark-atlas-pack-review/v0.1`.

Its `physical_size_m` values match the source metric domains exactly within the verifier's `1e-12` numeric tolerance.

The Materials review's `0.05 m/UV`, `500 px/m`, atlas size, pixel rectangles, padding, filtering, roughness identity and visual preference remain Materials/downstream facts. Hard Surface inherits none of them.

## Smallest implementation

Added only to Object PR #26:

- `assets/modular-equipment-case-001/service-surface-metric-domains-001.json`;
- `tools/verify_service_surface_metric_domains.py`;
- `tests/test_service_surface_metric_domains.py`;
- `.github/workflows/object-service-surface-metric-domains.yml`.

The verifier rebuilds the exact Object source and requires the existing surface-identity and source-reference-frame contracts. It computes selected-face origins, cardinal frame parity, extents, symmetric source bounds and areas from the actual box components, then checks the current Materials physical-size observation without transferring Materials authority.

Fail-closed controls reject:

1. 1 mm source metric-extent drift;
2. asymmetric source-domain bounds;
3. source reference-frame axis drift;
4. downstream Materials physical-size redefinition;
5. Hard-Surface UV authority expansion;
6. Hard-Surface atlas-placement authority expansion;
7. source/surface identity drift;
8. unowned Technical-Art or Runtime adoption promotion.

## Preserved failure history

Two exact runs remain visible rather than being rewritten:

- **`35209515257` — FAILURE**: the new source-domain verifier and all negative controls were structurally valid, but the positive unit test compared the binary float `0.23399999999999999` with literal `0.234` using raw list equality.
- **`35209722625` — FAILURE**: after the unit test was repaired to numeric tolerance, all **63** Object tests passed and the exact PASS receipt was generated; the workflow's final retained-receipt validator repeated the same raw-equality mistake.

Only those equality assertions were changed to the already-intended `1e-12` metric tolerance. Source geometry, source contract values, frame semantics, Materials donor identity, negative controls and authority boundaries were not weakened.

## Exact CI / retained evidence

Final dedicated workflow:

**`35209805272 — Object service-surface metric-domain evidence` — SUCCESS**.

Python **3.11**:

- compile PASS;
- complete Object suite **63/63 PASS**;
- exact Materials head/blob fetch PASS;
- source-owned metric-domain evidence rebuild PASS;
- retained receipt validation PASS;
- artifact upload PASS.

Python **3.13**:

- compile PASS;
- complete Object suite **63/63 PASS**.

Scoped result:

**`PASS_SOURCE_OWNED_SERVICE_SURFACE_METRIC_DOMAINS`**

All **11** exact-head Object workflow families on `f7c64d08...` completed **SUCCESS**, including inherited interface, module fit/registration/fastener-clearance, latch ownership/pivot/mechanical-state, lid/front surface identities and service-surface reference-frame evidence.

Retained artifact:

- artifact ID: **`10491348995`**;
- name: `modular-equipment-case-001-service-surface-metric-domains-f7c64d08e4e2a0d6954291d8b4e064d7345ab658`;
- uploaded size: **10,031 B**;
- GitHub SHA-256: **`bc27c92c965897b2115422921819e9b6074280f3add8c735a72ce96d4cc0201c`**.

Metric-domain contract canonical digest recorded by the receipt:

`237aaaf694168806a5643a457743cf56bd4c46ba065225f75ca61417fbc44383`.

No independent local archive rehash is claimed in this activation because the local container hash tool was unavailable after download. The GitHub artifact digest remains the reported archive identity.

## Handoffs recorded

- **Object Hard Surface PR #26:** comment `5712745949` — exact head, green workflow, artifact identity, preserved failure history and authority boundary.
- **Object Materials PR #6:** comment `5712748029` — current `physical_size_m` is now explicitly source-bound while UV/atlas/material/lookdev authority remains Materials-owned.
- **Object Technical Art PR #28:** comment `5712750127` — physical source extent can be consumed without rediscovering box dimensions; transport/import/adoption remains Technical-Art-owned.

No Runtime implementation was changed and no storage choice was forced. Runtime may consume the source metric domain only if a future optimization actually needs physical extent as an explicit provenance input.

## Reusable Hard-Surface learning

New bounded manufactured-surface rule:

> **A manufactured surface's identity, source-space reference frame and physical metric domain are source facts. UV mapping, texel density, atlas packing, material response, transport and storage are separate downstream facts. Establish the source metric domain before consumers turn physical extent into texture or transport coordinates.**

Reusable pattern identifier:

**`SOURCE_SURFACE_IDENTITY_FRAME_AND_METRIC_DOMAIN_PRECEDE_UV_ATLAS_PACKING`**

This sharpens the earlier Object frame work: matching orientation is not enough when several downstream systems also rely on exact physical dimensions. The metric domain gives them a source authority without letting Hard Surface absorb their own policies.

The pattern remains **Object-local**. One manufactured asset family with two related surfaces is not sufficient evidence for a generic UC or Profession-Fabric surface-domain ontology. A materially different Weapon, Armor, Unit, Building or Misc family should reproduce the need before horizontal promotion.

## Truth boundary / explicit non-claims

This PASS does **not** establish:

- production UVs or unwrap quality;
- final texel density;
- atlas layout/adoption;
- final materials, textures, roughness or decals;
- tangent-space production quality;
- Technical-Art engine/UC transport acceptance;
- Runtime representation, device/performance or storage acceptance;
- Art Direction or independent Visual-QA acceptance;
- bevel/normal edits;
- arbitrary manufactured-surface parameterization;
- manufacturing validity;
- collision, physics, gameplay or navigation validity;
- Universal Creation or Profession Fabric promotion;
- CANON, production/game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** physical extents are now executable source evidence rather than repeated downstream reconstruction; both float-assertion failures remain recorded and the final green run is separately identified.
- **Agency / non-domination:** Hard Surface owns only identity/frame/metric source semantics; Materials keeps UV/lookdev, Technical Art keeps transport, Runtime keeps storage/cost, and Art/QA keep visual judgment.
- **Continuity:** prior Object identity/frame work, prior Building hard-normal authority work, exact Materials donor, final Object head, failed runs and retained artifact all remain independently named and rollbackable; no history was force-rewritten.
- **Wisdom before speed:** the pass closed the smallest repeated source-authority gap used by several downstream lanes instead of inventing a new asset, duplicating Building, or promoting a generic framework from one Object family.

## Next Hard-Surface trigger

Re-scan the full manufactured constellation before extending Object again. Prefer a materially different Weapon, Armor, Unit, Building or Misc mechanism/surface if grounded enough to test whether source-owned metric domains transfer beyond this Object family. Do not use the new source metric contract as permission to take UV, Materials, Technical-Art or Runtime authority. Keep Universal Creation and Profession Fabric unchanged until genuine cross-domain repetition exists.
