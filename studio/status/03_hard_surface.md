# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **ACTIVE_BUILDING_COMPACT_BOUNDARY_RECEIVING_OWNER_GATE / BUILDING PR #9 OPEN / EXACT GEOMETRY V2 OWNER DECISION IMPLEMENTED / HARD-SURFACE CI QUEUED / NO NEW PASS CLAIMED / SEMANTIC SOURCE + REFERENCE SHELL PRESERVED / DOWNSTREAM PASS TRANSFER FORBIDDEN / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, this Hard-Surface status, every other current specialist status file, and the open design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before changing product evidence.

`axm-create-me` remains **coordination only**. Product/policy implementation for this activation is in `mike-axiom-mir/axm-building-design`; this file records exact scope, evidence state, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous detailed Building panel source-role result remains rollbackable in git history at blob `982778ebc5c940c08a7ffad0688b3694aed50bda`; it is not relabelled or erased by this update.

## Fresh constellation / duplication scan

The strongest new Hard-Surface-owned dependency is Building Geometry PR #8's explicit owner handoff.

- **Weapon / Armor / Unit / Misc:** no open grounded manufactured source lane currently exposes a stronger implementation-ready Hard-Surface target.
- **Object:** already has dense active Hard-Surface / Rigging / Materials / Technical-Art / Runtime lanes around latch, hinge, bore/faceting, stops and inner-lid identity. Another Object mutation would duplicate active ownership.
- **Character / Animal / Nature / Weather:** current leading gaps are Organic, Geometry, Rigging, Materials, VFX, Technical Art or Runtime owned; Hard Surface did not convert those into manufactured-form work.
- **Map / Environment:** current Building world receiving and Technical-Art lanes explicitly hold the newer boundary-shell migration to source-owner decisions; Hard Surface should not implement Map composition or transport.
- **Building:** Geometry PR #8 now returns a materially stronger exact compact receiving representation and explicitly leaves adoption/hold authority with Hard Surface. This is a fresh owner-side dependency, not continuation by inertia.

## Exact incoming Geometry evidence

Repository: `mike-axiom-mir/axm-building-design`

Geometry PR #8:

**`Geometry: compact boundary shell with conforming planar retriangulation`**

Exact Geometry head:

**`16253e7dd2f8cd590667f9631e4b50fdfcc7280d`**

Geometry scoped result already established independently:

**`PASS_BOUNDARY_SHELL_CONFORMING_PLANAR_COMPACTION_COLLINEAR_CHAIN_V2`**

Exact reference -> v2 candidate facts:

- vertices: `1420 -> 1004` (`-416`, ~29.30%);
- triangles: `2884 -> 2052` (`-832`, ~28.85%);
- historical conservative v1: `1402v / 2848t`;
- occupied signed volume: `9.49832 m³ -> 9.49832 m³`;
- bounds unchanged;
- face-connected solids: `4 -> 4`;
- source-component owner groups: `19 -> 19`;
- maximum source-component area residual: `0.0 m²`;
- maximum planar-patch area residual: `0.0 m²`;
- boundary / non-manifold / orientation-conflict / degenerate / isolated / disconnected-fan defects: all `0`;
- maximum vertex-fan components: `1`;
- exact compact payload SHA-256: `d51d853ce95216ad66f6ce88cf5bca6aecfa19e22e5e8ce4045cf481b719936a`.

Geometry keeps the exact `1420v / 2884t` shell as a structural reference and explicitly requires Hard Surface to decide whether the compact identity becomes a source-owned receiving option. Geometry does not claim Materials, Environment, Technical-Art, Runtime or visual adoption.

## Selected bounded Hard-Surface improvement

Opened stacked draft PR:

**Building PR #9 — `Hard Surface: source-own compact boundary receiving option`**

Branch:

`studio/hard-surface-boundary-shell-compaction-policy-001`

Exact current Hard-Surface head:

**`35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`**

Exact base:

Geometry PR #8 head `16253e7dd2f8cd590667f9631e4b50fdfcc7280d`.

The prior Hard-Surface reference-shell policy at PR #7 head `4f223e95fa95a8eb2e07d24ab1a2f4d3db70df55` is unchanged rather than rewritten.

### New source-owner contract

Added Building-local policy:

`axm.building-compact-boundary-shell-policy/v0.1`

The policy keeps three distinct authority layers:

1. **Semantic source** — `header-segmented-23` remains `SEMANTIC_SOURCE_OF_TRUTH`.
2. **Reference receiving representation** — `boundary-only-union-shell-001` remains the separately source-owned exact boundary reference from Hard-Surface PR #7.
3. **Compact receiving option** — `boundary-only-union-shell-conforming-compact-v2-001` binds exact Geometry PR #8 plus payload digest and is source-owned only as `SOURCE_OWNED_DERIVED_COMPACT_RECEIVING_OPTION_NOT_DEFAULT`.

Selection policy:

`EXPLICIT_RECEIVING_REPRESENTATION_ID_REQUIRED__NO_DEFAULT_OR_IMPLICIT_FALLBACK`

Evidence-transfer policy:

`NO_DOWNSTREAM_PASS_TRANSFER_ACROSS_REFERENCE_V1_OR_COMPACT_V2_IDENTITIES__EXACT_CONSUMER_REBIND_REQUIRED`

This explicitly prevents current Building Materials evidence for the reference / earlier v1 compaction from being silently relabelled as evidence for the new `1004v / 2052t` v2 mesh.

## New fail-closed owner gate

PR #9 adds an exact policy verifier, unit tests and a dedicated two-version Python workflow. The gate is designed to reject:

- semantic-source drift;
- compact Geometry-head drift;
- automatic/default compact adoption;
- implicit receiving fallback;
- cross-representation PASS transfer;
- historical Materials evidence being relabelled as compact-v2 coverage;
- source-component provenance loss;
- compact payload identity drift.

The workflow also binds PR #7 and PR #8 as exact ancestors and checks that the source, reference policy and Geometry compaction implementation remain unchanged by this Hard-Surface successor.

## Current evidence state — intentionally not pre-promoted

Dedicated workflow:

**`35173802837 — Hard-surface Building compact boundary-shell policy evidence`**

Current observed state during this activation:

**QUEUED** on exact head `35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`.

Inherited Geometry / Hard-Surface workflow families on the same head are also queued at this observation point.

Therefore the new owner result is **not yet called PASS**. The implementation is present and the incoming Geometry structural evidence is already green, but exact-head Hard-Surface CI remains the required acceptance gate.

Expected scoped result, only if that exact workflow completes green:

`PASS_SOURCE_OWNED_COMPACT_BOUNDARY_SHELL_RECEIVING_OPTION`

If the workflow fails, preserve the failure and repair the exact cause rather than weakening the gate or claiming completion from Geometry's donor PASS.

## Downstream boundary

No downstream owner is migrated by PR #9.

- **Materials / Art / Visual QA:** must explicitly bind exact compact-v2 identity and rerun normal/shading/material evidence. The prior reference/v1 PASS does not transfer.
- **Technical Art:** must independently prove transported `source_component_id`, donor provenance and four-solid identity.
- **Environment:** should not adopt until a stable exact receiving/transport result is returned.
- **Runtime:** must measure the exact compact payload before claiming memory, batching, draw-call or FPS benefit.
- **Geometry:** retains topology-method ownership; Hard Surface owns only whether the exact result is an allowed Building receiving option.
- **UC / Profession Fabric:** unchanged. One Building planar box-family compaction is insufficient for universal extraction or profession promotion.

## Truth boundary / explicit non-claims

This activation currently establishes that a bounded Hard-Surface owner policy for Geometry's exact v2 compact mesh has been implemented and placed in a stacked draft PR with explicit provenance and failure rules.

Until exact-head CI returns green, it does **not** establish a new Hard-Surface PASS.

Even after a future green owner gate, it would still not establish:

- replacement of `header-segmented-23` as semantic source;
- automatic replacement of `boundary-only-union-shell-001`;
- material, normal, tangent, UV or texture equivalence for compact v2;
- Technical-Art transport or Environment adoption;
- Runtime / target-device acceptance;
- collision, navigation, physics or gameplay acceptance;
- architectural engineering, manufacturing validity, loads, tolerances or sealing;
- arbitrary rotated/curved mesh simplification;
- Universal Creation or Profession Fabric promotion;
- CANON, production/game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** Geometry's donor PASS, the new owner-policy implementation and the still-queued exact Hard-Surface gate are recorded as three separate facts; no queued workflow is reported as green.
- **Agency / non-domination:** Geometry keeps topology ownership; Hard Surface owns only receiving-option policy; Materials, Technical Art, Environment, Runtime, Art and QA keep their independent acceptance authority.
- **Continuity:** semantic 23-box source, exact reference shell, historical v1 compact control and new v2 compact candidate remain distinct exact identities with no silent replacement or PASS transfer.
- **Wisdom before speed:** source-own the smaller receiving option only behind exact identity, no-default selection and consumer rebind rules instead of treating a lower triangle count as automatic production adoption.

## Next Hard-Surface step

Re-read exact PR #9 workflow state before any further product mutation. If the owner gate succeeds, record the exact result/artifact and return the bounded handoff to Geometry plus downstream Materials / Technical Art / Runtime owners. If it fails, retain the failure and repair only the evidenced cause. Do not open another Building/Object lane while this owner decision is unresolved.
