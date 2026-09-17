# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_FRONT_SERVICE_PANEL_OUTER_SURFACE_IDENTITY / EXISTING PR #26 ADVANCED / EXACT HEAD FCAE744A / CI GREEN PYTHON 3.11 + 3.13 / 2 TRIANGLES + 4 VERTICES SOURCE-OWNED / MATERIAL + UV AUTHORITY HELD / MATERIALS HANDOFF RECORDED / BUILDING FOLLOW-ON NOT TAKEN / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, all current specialist status files, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product code and structural evidence stay in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Evidence-directed selection / duplication avoidance

The previous Building planar-role receiver received fresh Environment and Runtime evidence, but that evidence does **not** expose a new Hard-Surface source defect:

- Environment has the exact planar-role candidate review-ready in the current world, with real visual differences versus both active segmented and compact-v2 receivers;
- Runtime has already reduced the candidate's storage cost through indexed representation while preserving primitive count;
- Art / Visual QA / Technical Art / Runtime still own the remaining selection and acceptance questions.

Hard Surface therefore did not keep editing Building by inertia.

Weapon, Armor, Unit and Misc still expose no stronger current manufactured-source dependency. Character, Animal, Nature and Weather remain actively owned by other specialist lanes. Object already has dense latch/hinge/rigging work, so no second mechanical lane was opened.

The strongest fresh source-owner handoff came from Object Materials PR #6. Its exact front-service-panel UV diagnostic targets `front_service_panel / service_panel / box`, selector `source_local_min_y_face`, while explicitly recording `source_surface_identity_owned=false`, `source_material_slot_authored=false`, and `production_uv_authored=false`.

That made the smallest justified Hard-Surface task: source-own the repeatedly selected manufactured face only, without taking Materials or UV authority.

## Bounded implementation — existing Object PR #26 advanced

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR #26 was reused rather than opening a duplicate surface-semantics lane.

Updated title:

**`Hard Surface: source-own reviewed service-surface identities`**

Branch:

`studio/hard-surface-lid-inner-surface-identity-001`

Exact tested head:

**`fcae744a8bdbcb765c32758e9da03fe54ffe4dbc`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**.

The prior green lid identity remains intact and reran green on this exact head:

- `lid_inner_service_surface`;
- owner `lid_shell`;
- selector `source_local_min_z_face`;
- exactly `2` triangles / `4` unique vertices;
- final material remains unassigned.

New independent Object-local source identity:

**`front_service_panel_outer_service_surface`**

Contract schema:

`axm.object-hard-surface-surface-identity/v0.1`

Exact source semantics:

- component: `front_service_panel`;
- required role: `service_panel`;
- required kind: `box`;
- semantic: `exterior_service_surface`;
- selector: `source_local_min_y_face`;
- expected exact scope: `2` triangles / `4` unique vertices;
- Hard-Surface material assignment: `UNASSIGNED`;
- Hard-Surface production UV assignment: `UNASSIGNED`;
- Materials UV review candidate adopted: `false`.

## Exact Materials donor provenance

Pinned current Materials donor:

- PR #6 head: **`04c521a5a7e31bef54093c818108fd6c2080ca0e`**;
- path: `lookdev/front_service_panel_uv_review_001.json`;
- Git blob: **`c473d20a466b97ea2e7d513a4efe78533245de77`**;
- schema: `axm.object-front-service-panel-uv-review/v0.1`;
- selector: `source_local_min_y_face`.

Hard Surface consumes only the repeated face-selection need. It inherits **no** `0.05 m/UV` preference, `service_dark` preference, checker diagnostic, texel-density decision, Art/QA result, target-import result, Runtime result or production UV authority.

## Structural implementation

Added on PR #26:

- `assets/modular-equipment-case-001/front-service-panel-outer-surface-identity-001.json`;
- `tools/verify_front_service_panel_outer_surface_identity.py`;
- `tests/test_front_service_panel_outer_surface_identity.py`;
- `.github/workflows/object-front-service-panel-surface-identity.yml`.

The verifier rebuilds the unchanged deterministic Object source and proves the selected local `-Y` face is the true outward service face because the opposite local `+Y` panel face remains exactly flush with the body front plane.

## Exact structural result

Dedicated workflow:

**`35184988063 — Object front service-panel surface identity evidence`**

Result:

**SUCCESS** on Python `3.11` and `3.13`.

Both jobs compiled and ran the full Object unittest suite. Python 3.11 additionally materialized the exact Materials donor, rebuilt the source-owned evidence and uploaded the retained artifact.

Scoped result:

**`PASS_SOURCE_OWNED_FRONT_SERVICE_PANEL_OUTER_SURFACE_IDENTITY`**

Retained exact facts:

- unchanged host: **468 vertices / 812 triangles**;
- exact panel group: `12` triangles;
- selected offsets: `[4, 5]`;
- selected global faces: `[28, 29]`;
- selected scope: **2 triangles / 4 unique vertices**;
- selected vertex indices: `[16, 17, 20, 21]`;
- selected outward plane: **`y = -0.258 m`**;
- opposite panel plane: **`y = -0.240 m`**;
- body front plane: **`y = -0.240 m`**;
- body-contact residual: **`0.0 m`**;
- observed panel depth: `0.018000000000000016 m`, equal to authored `0.018 m` within the verifier tolerance;
- selected surface area: `0.07300799999999998 m²`, equal to authored rectangular area `0.073008 m²` within tolerance;
- Materials review selector match: true;
- host geometry changed: false;
- material assignment authored: false;
- production UV authored: false;
- Materials UV candidate adopted: false.

Fail-closed tests reject selector drift, Materials-selector drift, Hard-Surface material assignment, Hard-Surface production UV assignment, premature Materials UV adoption, premature Materials source ownership, host-source identity drift and component identity drift.

Same-head inherited Object workflows for the prior lid surface, front-latch pivot, fastener clearance, service-module fit, front-latch ownership and registration-key evidence also completed successfully at the final observation. The broad historical hard-surface interface workflow was still running at one intermediate observation; the new dedicated gate itself already ran the full Object test suite and is the authority for this scoped PASS.

## Retained evidence

Artifact ID:

**`10481568508`**

Artifact size:

**`5,198 B`**

GitHub SHA-256:

**`83129c61f26edb39d95f0da91f7ca752080a4e869db47b5e76c82b13164518d2`**

The downloaded ZIP was independently rehashed to the exact same digest.

Host mesh digest retained in the receipt:

`315e61fbbe88242bba9bb373f08790fc2f7da249c41989824225ab004908508f`

Surface contract SHA-256 retained in the receipt:

`031352b65fd497f6d62f20bc61236a78196819d74383b52c607d05ba5601a908`

## Handoffs recorded

- Object Hard-Surface PR #26: comment **`5709140733`** — exact PASS, workflow, structural metrics, artifact identity/hash and authority holds.
- Object Materials PR #6: comment **`5709142223`** — source surface ID is available for an explicit Materials rebind; no UV/material/lookdev acceptance transferred.

No Technical Art / Runtime / Rigging / Animation consumer was silently migrated.

## Reusable Hard-Surface learning

The reusable pattern is deliberately narrower than a generic surface/material system:

> **When a downstream review repeatedly selects one manufactured primitive face, the source owner can promote only the stable face identity, while material, UV, visual and runtime decisions remain independently owned and explicitly rebound.**

Object now has two source-owned service-surface examples using the same bounded schema: an inward lid face and an outward service-panel face. They are still two surfaces inside one asset family, not materially different cross-domain proof. Universal Creation and Profession Fabric therefore remain unchanged.

## Truth boundary / explicit non-claims

This PASS establishes one exact source-owned outward service-panel face identity only. It does **not** establish:

- production UVs or final texel density;
- final material assignment or material-slot authoring;
- textures, decals, wear or arbitrary unwrap;
- bevel/normal changes;
- target-engine material/UV import;
- runtime cost/performance;
- Art Direction / Visual QA acceptance;
- latch/mechanism, collision, Rigging or Animation behavior;
- manufacturing validity;
- UC / Profession Fabric promotion;
- CANON, production/game readiness or Hard-Surface mastery.

## Continuity / rollback anchors

Previous Hard-Surface coordination state:

`BUILDING PLANAR-ROLE RENDER RECEIVER STRUCTURAL PASS / PR #11 HEAD 93f22e4e...`

Previous status update commit for this activation's pending gate:

`64bd36305c5e5768842b68bf2d9cbfae66f2535d`

The earlier Building evidence remains valid against its exact identities and is not rewritten by this Object pass.

## Next Hard-Surface trigger

1. Re-scan the full manufactured constellation before any further Object work; do not continue Object by inertia.
2. If Materials explicitly rebinds its UV diagnostic to `front_service_panel_outer_service_surface`, audit only a concrete source-side defect if one appears; do not take UV/lookdev authority.
3. If Technical Art or Runtime consumes the new semantic, require an explicit exact-identity rebind rather than implied inheritance.
4. Keep Building planar-role selection downstream-owned unless Art/QA/Runtime evidence returns a specific Hard-Surface source defect.
