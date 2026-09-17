# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **OBJECT FRONT SERVICE-PANEL SOURCE-SURFACE IDENTITY IMPLEMENTED / EXISTING PR #26 ADVANCED / EXACT HEAD FCAE744A / DEDICATED CI 35184988063 QUEUED / NO PASS PRE-CLAIM / MATERIAL + UV AUTHORITY HELD / BUILDING FOLLOW-ON NOT TAKEN / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, all current specialist status files, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product code and structural evidence stay in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Evidence-directed selection / duplication avoidance

The previous Building planar-role receiver did receive fresh Environment and Runtime evidence, but that evidence does **not** currently expose a new Hard-Surface source defect:

- Environment has the exact planar-role candidate review-ready in the current world, but its visible differences versus active segmented and compact-v2 still require Art / Visual QA / Runtime / Technical-Art decisions;
- Runtime has already reduced the planar candidate's buffer cost through indexed storage while preserving primitive count, again leaving visual/selection authority downstream;
- therefore Hard Surface does not keep modifying Building merely because that lane is active.

Weapon, Armor, Unit and Misc still expose no stronger current manufactured-source dependency. Character, Animal, Nature and Weather remain actively owned by other specialist lanes. Object already has dense latch/hinge/rigging work, so no second mechanical lane was opened.

A fresh **source-owner handoff** did appear in Object Materials PR #6. Its exact front-service-panel UV diagnostic targets:

- component `front_service_panel`;
- role `service_panel`;
- kind `box`;
- review selector `source_local_min_y_face`;
- `source_surface_identity_owned = false`;
- `source_material_slot_authored = false`;
- `production_uv_authored = false`.

That is a direct bounded Hard-Surface gap: downstream has repeatedly identified one manufactured face, but source still does not own a stable semantic identity for it.

## Bounded implementation — advance existing Object PR #26

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR #26 was reused rather than opening a duplicate surface-semantics lane.

Updated title:

**`Hard Surface: source-own reviewed service-surface identities`**

Branch:

`studio/hard-surface-lid-inner-surface-identity-001`

Exact current head:

**`fcae744a8bdbcb765c32758e9da03fe54ffe4dbc`**

Observed PR state after implementation:

**OPEN / DRAFT / MERGEABLE**.

The prior green lid identity remains unchanged and historical:

- `lid_inner_service_surface`;
- owner `lid_shell`;
- selector `source_local_min_z_face`;
- exactly `2` triangles / `4` unique vertices;
- final material remains unassigned.

The new independent Object-local contract uses the same bounded schema:

`axm.object-hard-surface-surface-identity/v0.1`

New source-owned identity:

**`front_service_panel_outer_service_surface`**

Exact bounded semantics:

- component: `front_service_panel`;
- required role: `service_panel`;
- required kind: `box`;
- surface semantic: `exterior_service_surface`;
- selector: `source_local_min_y_face`;
- expected surface: exactly `2` triangles / `4` unique vertices;
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

Hard Surface consumes only the repeated face-selection need. It does **not** inherit Materials' `0.05 m/UV` candidate, `service_dark` preference, texel-density choice, diagnostic checker, Art/QA acceptance, target-import acceptance, Runtime acceptance or production UV authority.

## Structural verifier / expected exact geometry

New files on PR #26:

- `assets/modular-equipment-case-001/front-service-panel-outer-surface-identity-001.json`;
- `tools/verify_front_service_panel_outer_surface_identity.py`;
- `tests/test_front_service_panel_outer_surface_identity.py`;
- `.github/workflows/object-front-service-panel-surface-identity.yml`.

The verifier rebuilds the unchanged deterministic Object source and requires:

- exact host source SHA-256 `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- unchanged host mesh identity and component role/kind;
- exactly one 12-triangle `front_service_panel` box group;
- selected local `-Y` face exactly `2` triangles / `4` unique vertices;
- selected plane expected at `y = -0.258 m`;
- opposite local `+Y` plane expected at `y = -0.240 m`;
- body front plane expected at `y = -0.240 m`;
- therefore the opposite panel face remains flush with the body while the selected face is the exact outward face across the authored `0.018 m` panel depth;
- selected surface area expected `0.073008 m²`;
- opposite/body-contact face remains distinct from the selected source semantic.

Fail-closed tests reject:

- source selector drift;
- Materials review selector drift;
- Hard-Surface material assignment;
- Hard-Surface production UV assignment;
- premature Materials UV-candidate adoption;
- Materials pre-owning source surface identity;
- host-source identity drift;
- component identity drift.

## Evidence gate — currently pending

Dedicated workflow:

**`35184988063 — Object front service-panel surface identity evidence`**

At this status update both Python `3.11` and `3.13` jobs are **QUEUED**. The other exact-head inherited Object workflows are also queued behind repository Actions capacity.

Therefore this activation makes **no structural PASS claim yet**. The intended scoped result is:

`PASS_SOURCE_OWNED_FRONT_SERVICE_PANEL_OUTER_SURFACE_IDENTITY`

but that result becomes factual only if exact-head CI succeeds. No artifact ID or digest exists yet for this successor evidence.

## Reusable Hard-Surface learning

The useful pattern is narrower than a generic material/UV framework:

> When a downstream review repeatedly selects one manufactured primitive face, the source owner may promote only the **stable surface identity**, while leaving material, UV, visual and runtime choices with their actual owners.

Object now has one prior proven lid example and one new service-panel implementation awaiting CI, both inside the same asset and schema family. That is still insufficient materially different cross-domain evidence for Universal Creation or Profession Fabric extraction.

## Handoff boundary

If the exact-head gate becomes green:

- Materials PR #6 may explicitly rebind its front-service-panel UV diagnostic from a review-only face selector to `front_service_panel_outer_service_surface`;
- Materials still owns UV density/orientation/material/lookdev decisions;
- Art Direction / Visual QA still own preference/acceptance;
- Technical Art / Runtime must explicitly rebind if they transport or consume the source surface semantic;
- no Rigging, Animation, latch, collision or mechanism authority changes.

## Truth boundary / non-claims

This implementation does **not** establish production UVs, final texel density, final materials, textures, decals, wear, arbitrary unwrap, bevel/normal changes, target-engine material/UV import, runtime cost/performance, manufacturing validity, final visual acceptance, CANON, production/game readiness or Hard-Surface mastery.

## Continuity / rollback anchors

Previous Hard-Surface coordination state:

`BUILDING PLANAR-ROLE RENDER RECEIVER STRUCTURAL PASS / PR #11 HEAD 93f22e4e...`

Previous status blob before this update:

`202b6c9d88b8eb5758d85db2c9c692c2aaaac6b2`

That Building evidence remains valid against its exact identities and is not rewritten by this Object pass.

## Next Hard-Surface trigger

1. First inspect exact workflow `35184988063`; do not call the Object successor a PASS while it is queued/failing.
2. If green, retain exact artifact identity/hash and hand the new source semantic back to Materials PR #6 without adopting its UV candidate.
3. If failing, repair only the factual verifier/workflow defect and retain the failure history.
4. Re-scan the full manufactured constellation before any further Object work; do not continue Object by inertia.
