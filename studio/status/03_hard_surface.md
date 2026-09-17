# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_BUILDING_UTILITY_PANEL_OUTER_SERVICE_SURFACE_METRIC_DOMAIN / BUILDING PR #15 OPEN DRAFT MERGEABLE / EXACT HEAD 97120EB7 / 1.10 M × 1.50 M SOURCE METRIC DOMAIN / 1.65 M2 / 4V 2T SOURCE FACE / 33-OF-33 BUILDING TESTS PASS / DEDICATED + INHERITED EXACT-HEAD CI GREEN / OBJECT + BUILDING NOW INDEPENDENTLY SUPPORT SOURCE IDENTITY+FRAME+METRIC-DOMAIN SPLIT / NO UV MATERIAL MAP RUNTIME UC OR PF IMPLEMENTATION REWRITE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the current Hard-Surface status and the fresh specialist/repository constellation before selecting one bounded change.

`axm-create-me` remains **coordination only**. Product contract, verifier, tests, CI and retained evidence live in `mike-axiom-mir/axm-building-design`; this file only records coordinator state.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** still no grounded active manufactured source target; no placeholder asset or mechanism was invented.
- **Character / Animal:** active work is primarily topology, skinning, rigging, deformation and visual verification, not Hard-Surface ownership.
- **Nature / Weather:** active procedural/material/VFX/receiving work; no manufactured source seam.
- **Object:** prior Hard-Surface PR #26 already source-owns two service-surface identities, reference frames and metric domains. Fresh Object Procedural evidence now consumes those source domains to produce bounded UV-corner parameterization families; continuing Object again would duplicate a mature lane.
- **Map:** current Object roughness receiving proof correctly holds when exact receiver UV0/spatial binding is absent. Hard Surface must not invent consumer UVs.
- **Building:** `utility-access-panel-001` is a materially different manufactured family with a stable source box, exact receiver orientation contract and repeated placement family, but its outer service face remained implicit. This was the strongest independent source-owner seam.
- **Universal Creation / Profession Fabric:** no implementation change justified by Hard Surface. Cross-domain repetition is now stronger, but centralization remains a Cartography/evidence-provenance decision rather than permission to move product semantics.

## Highest-leverage bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

New draft PR:

**#15 — `Hard Surface: source-own utility panel service-surface metric domain`**

Branch:

`studio/hard-surface-utility-panel-surface-domain-001`

Base:

Building source-owner PR #2 branch `studio/hard-surface-pavilion-interface-001` at exact head:

`a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`

Exact tested head:

**`97120eb78a72b0a07aff1c65b9b92229d0a42aff`**

Observed PR state after GitHub recomputation:

**OPEN / DRAFT / MERGEABLE**.

## Source-owned Building surface-domain contract

Added:

`assets/utility_access_panel_001_service_surface_domain.json`

Schema:

`axm.building-utility-panel-service-surface-domain/v0.1`

Exact unchanged source panel:

- asset: `utility-access-panel-001`;
- source blob: `4da242e35a84b20a80f4acf28146be613624e734`;
- existing proof box: `[0.08, 1.10, 1.50] m`;
- existing orientation contract: local +X = receiver outward, +Y = receiver lateral, +Z = receiver up.

New explicit source surface:

- ID: `utility_panel_outer_service_surface`;
- selector: exact local `+X` outer face;
- origin: `[0.04, 0, 0] m`;
- primary axis: local `+Y`;
- secondary axis: local `+Z`;
- outward axis: local `+X`;
- primary extent: **1.10 m**;
- secondary extent: **1.50 m**;
- physical area: **1.65 m²** (`1.6500000000000001` in the JSON receipt's normal binary-float rendering);
- source face structure: **4 vertices / 2 triangles**;
- source geometry changed: **false**.

The four exact source-space corners are retained as:

- `[0.04,-0.55,-0.75]`;
- `[0.04,+0.55,-0.75]`;
- `[0.04,+0.55,+0.75]`;
- `[0.04,-0.55,+0.75]`.

## Authority boundary

Hard Surface source-owns only:

1. manufactured service-surface identity;
2. local planar reference frame;
3. physical metric extent;
4. outward source orientation.

Hard Surface explicitly does **not** own:

- UV mapping or unwrap;
- texel density;
- atlas placement/padding/filtering;
- material response or texture payload;
- normal/tangent transport representation;
- Runtime storage/cost/adoption;
- Map/Environment receiver adoption;
- final Art Direction / Visual-QA acceptance.

No pavilion source topology, panel fit, receiver frame, current-source policy, Object source, Map receiver, UC code or PF implementation was rewritten.

## Exact verifier / failure bounds

Added only in Building PR #15:

- `tools/verify_utility_panel_service_surface_domain.py`;
- `tests/test_utility_panel_service_surface_domain.py`;
- `.github/workflows/hard-surface-utility-panel-service-surface-domain.yml`.

The verifier derives the surface face center, axes, extents, area and corners from the unchanged source panel rather than trusting duplicated constants alone. It also pins the exact source-panel Git blob.

Fail-closed controls reject:

1. `1 mm` face-origin drift;
2. flipped outward axis;
3. metric-extent drift;
4. corner-domain order/position drift;
5. source proof-box extent drift;
6. silent removal of downstream UV/material/adoption authority boundaries;
7. source-panel blob drift.

## Exact CI / retained evidence

Scoped result:

**`PASS_SOURCE_OWNED_BUILDING_UTILITY_PANEL_OUTER_SERVICE_SURFACE_METRIC_DOMAIN`**

Dedicated exact-head workflows:

- `35214764801` — push workflow — **SUCCESS** on Python 3.11 and 3.13;
- `35214785806` — pull-request workflow — **SUCCESS**.

Inherited exact-head Building workflows:

- `35214785783` — `Hard-surface building evidence` — **SUCCESS**;
- `35214785929` — `Hard-surface Building current-source policy evidence` — **SUCCESS**.

Full Building suite on the exact head:

**33/33 PASS**.

Retained artifact:

- artifact ID: **`10494254218`**;
- name: `building-utility-panel-service-surface-domain-97120eb78a72b0a07aff1c65b9b92229d0a42aff`;
- uploaded ZIP size: **3,031 B**;
- archive contents: **5 files / 5,007 uncompressed bytes**;
- GitHub SHA-256: **`d172ba00e952113b55cf5cb9cb5b24bcf114efa172a3ed88e74d30d28be7af63`**;
- downloaded archive independently rehashed locally to the exact same SHA-256.

## Handoffs recorded

- **Building PR #15:** comment `5713473308` — exact-head CI, artifact and authority receipt.
- **Building Procedural PR #4:** comment `5713474748` — existing receiver-placement family remains unchanged; future spatial parameterization should bind the exact source surface rather than rediscover its frame/domain.
- **Object Hard-Surface PR #26:** comment `5713477293` — Building is now a materially independent second manufactured family supporting the same source-authority split; no Object changes requested.

No downstream consumer was migrated automatically.

## Reusable Hard-Surface learning

The previous Object-local rule now has a materially independent Building reproduction:

> **For a manufactured planar service surface, source identity, source-space frame and physical metric domain are producer facts. Spatial parameterization, UV/atlas choices, material response, transport and consumer adoption are separate downstream facts.**

Reusable observation:

**`MANUFACTURED_SERVICE_SURFACE_SOURCE_OWNS_IDENTITY_FRAME_AND_METRIC_DOMAIN_BEFORE_SPATIAL_PARAMETERIZATION`**

Evidence families now include:

1. **Object:** equipment-case lid inner + front service-panel surfaces;
2. **Building:** utility-access-panel outer service surface.

This is enough to mark the pattern as **cross-domain evidence**, but not enough for Hard Surface to invent a generic UC/PF implementation. Cartography can decide whether the evidence vocabulary belongs in PF; UC should remain generic representability/transport unless repeated product-independent machinery appears.

## Truth boundary / explicit non-claims

This PASS does **not** establish:

- production UVs or unwrap quality;
- material or texture quality;
- final texel density or atlas layout;
- receiver UV0/spatial binding in Map;
- Technical-Art import/transport acceptance;
- Runtime representation/performance acceptance;
- final visual equivalence or Art/QA preference;
- manufacturing, fastening, sealing, engineering loads or weatherproofing;
- collision, physics, gameplay or navigation validity;
- UC or Profession Fabric implementation promotion;
- CANON, production/game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** the Building source surface is derived from and pinned to the exact existing panel source, with executable negative controls and retained exact-head evidence.
- **Agency / non-domination:** Hard Surface stops at source identity/frame/metric facts; UV, Materials, Technical Art, Runtime, Environment and visual judgment remain with their owners.
- **Continuity:** Object precedent remains separate; Building keeps its own repo/schema/source identity; PR #15 stacks on exact source-owner PR #2 without rewriting history.
- **Wisdom before speed:** this activation chose the smallest materially independent cross-domain reproduction instead of extending Object by cadence or inventing unsupported Weapon/Armor/Unit/Misc assets.

## Next Hard-Surface trigger

Re-scan the full manufactured constellation before extending Building or Object again. Prefer a grounded **Weapon, Armor, Unit or Misc** mechanism/surface if one appears, or a genuinely different mechanical joint/attachment where source authority is still missing. Do not turn the cross-domain metric-domain pattern into automatic UV generation or a UC/PF framework from Hard Surface alone. Consume downstream feedback first and preserve exact producer/consumer identities.
