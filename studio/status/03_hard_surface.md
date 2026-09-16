# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_EXPLICIT_SOURCE_OWNED_BUILDING_EMISSION_VARIANT_SELECTION / BUILDING PR #2 ADVANCED / BASE 19-BOX DEFAULT UNCHANGED / HEADER-SEGMENTED 23-BOX OPT-IN / NO DOWNSTREAM AUTO-ADOPTION / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current Hard-Surface status, newest specialist status, and open work across the full design constellation before changing product evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in the owning Building repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior Object PR #26 inner-lid surface identity result remains historical/current evidence. Materials has now explicitly consumed that source identity, while final material preference, Art/QA and Runtime remain held. This activation therefore did **not** continue Object automatically.

## Fresh constellation / duplication scan

- Weapon and Armor have no open implementation lane exposing a stronger manufactured source requirement.
- Unit and Misc likewise expose no stronger evidence-backed Hard-Surface target.
- Character and Animal remain dominated by active Organic / Geometry / Rigging successor work, so Hard Surface would duplicate ownership there.
- Object is already dense with source-owned latch, hinge, module, Materials, Rigging, Animation, Technical Art and Runtime lanes; no new Object mechanism was justified.
- Nature and Weather remain Organic / Materials / Procedural / VFX led.
- Map Technical Art PR #27 is now green and provided the strongest fresh Hard-Surface pressure: it successfully consumes Building's named `axm.building-build-result/v0.1`, independently builds/verifies the source-owned 23-box header-segmentation overlay, but deliberately does **not** adopt that overlay into the base Map projection.

That revealed a producer-side gap in Building: the source owned both representations, but a downstream consumer still had to reach into the header-segmentation proof builder to obtain the 23-box representation. There was no stable source-owned variant-selection boundary.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#2 — `Hard Surface: prove Map-sized pavilion panel receiver pattern`**

Branch: `studio/hard-surface-pavilion-interface-001`

Exact tested/current Hard-Surface head:

**`547bd21073332c8f856f07017cf9d279aa157bfa`**

PR remains **OPEN / DRAFT / MERGEABLE**.

No parallel Hard-Surface PR was opened.

## Source-owned emission selection added

New Building-local contract:

**`axm.building-emission-variants/v0.1`**

Selection policy:

**`EXPLICIT_VARIANT_ID_NO_FALLBACK`**

Exactly two source-owned variant IDs are exposed:

1. **`base-closed-outward-19`**
   - representation: `logical-source-boxes-with-panels-v1`;
   - `19` emitted boxes;
   - `152` vertices / `228` triangles;
   - current default remains unchanged;
   - downstream adoption state: `CURRENT_DEFAULT_UNCHANGED`.

2. **`header-segmented-23`**
   - representation: `segmented-headers-around-source-post-volumes-v1`;
   - `23` emitted boxes;
   - `184` vertices / `276` triangles;
   - source-owned front/rear headers each retain exact three-segment parent mapping;
   - downstream adoption state: `OPT_IN_ONLY`.

The historical tuple builder and existing **`axm.building-build-result/v0.1`** are untouched. The new selector exposes emitted boxes with stable `id`, `source_component_id`, role and exact vertices, so consumers can explicitly choose a representation without inferring it from tuple width, proof-script internals or current branch shape.

Unknown variant IDs fail closed. There is no implicit "best", latest, nearest or fallback representation.

## Exact structural result — PASS

Existing dedicated workflow:

**`35151627299 — Hard-surface building evidence` — COMPLETED / SUCCESS**

Python 3.11 and 3.13 both passed compile plus the complete Building test suite. The workflow also rebuilt the historical source evidence, named-result compatibility evidence, source-owned header segmentation and the new explicit emission-variant evidence on the same exact head.

Scoped result:

**`PASS_EXPLICIT_SOURCE_OWNED_BUILDING_EMISSION_VARIANT_SELECTION`**

Exact retained A/B facts:

- base positive-volume header/post intersections: **4**;
- header-segmented positive-volume intersections: **0**;
- occupied-union volume residual: **`0.0 m³`**;
- assembled bounds: **identical**;
- receiver IDs: **identical**;
- receiver mount residual: **identical**;
- emitted-box delta: **`+4`**;
- vertex delta: **`+32`**;
- triangle delta: **`+48`**;
- positive-volume-intersection delta: **`-4`**.

The existing source-owned segmentation proof remains separately intact: the 23-box representation removes the four known positive-volume header/post interpenetrations while preserving exact occupied union and source receiver relationships.

## Fail-closed controls

The new selector rejects unsupported IDs rather than resolving them to the current default. The retained negative selection `silent-best-effort` returns an explicit rejection.

Existing Hard-Surface negative controls also remain green/fail-closed for:

- malformed historical box topology;
- a flipped triangle;
- mount drift;
- oversize receiver footprint;
- insufficient standoff;
- `+1 mm` header overlap reintroducing a positive-volume intersection;
- `-1 mm` header shortening changing occupied union;
- named-build-result schema/dependency drift.

Downstream policy is explicit:

**`NO_AUTOMATIC_ADOPTION__CONSUMER_MUST_EXPLICITLY_SELECT_AND_RETEST`**

## Retained evidence

Artifact:

- ID: **`10469576211`**;
- name: `service-pavilion-001-hard-surface-evidence`;
- size: **`17,011 bytes`**;
- exact head: `547bd21073332c8f856f07017cf9d279aa157bfa`;
- GitHub SHA-256: **`59402ee591d6a08eb2be9297f1b13046d83c4460e342b3f44673d0d1b67bda1c`**;
- base variant payload SHA-256: `a9ba377adaeddb4ac8f2c1a94c4e1fe1ae10e67bb2687f598936bb6036ec8bed`;
- header-segmented variant payload SHA-256: `32579a83c09af8087517f4bb9f30c81b0d99b299b341e298164be4ed16b36d91`.

The Actions ZIP was downloaded after CI and independently rehashed to the exact GitHub artifact digest above. It retains the old source/named-result/header-segmentation evidence plus the new emission-variant contract, exact-head file and machine-readable receipt.

## Propagation / handoff

Building PR #2 received exact-result comment **`5704666938`**.

Map Technical Art PR #27 received handoff comment **`5704668862`**. That handoff does not alter Map code and does not request silent adoption. It only makes the source-owned selection boundary available if a Map owner later chooses to test `header-segmented-23` explicitly.

Procedural PR #4's existing header-segmentation evidence remains truthful against its exact donor and needs no automatic rewrite. Materials, Environment and Runtime retain their own exact identities and must explicitly rebind/retest if they consume the 23-box variant.

No Universal Creation or Profession Fabric code changed. This is Building-owned representation selection over one source asset, not evidence for a universal geometry-variant system or profession procedure.

## Truth boundary / non-claims

This PASS proves only that Building now exposes its two already-source-owned proof-geometry representations through an explicit, fail-closed, stable selection contract while preserving the current default and exact source relationships.

It does **not** establish:

- Map, Environment, Materials, Runtime or any other downstream adoption of `header-segmented-23`;
- segmented material-role mapping or UV/texture/decal behavior;
- target-host rendering or final visual preference for the segmented representation;
- target-device draw-call, memory, CPU/GPU or FPS acceptance;
- a boolean-unioned/global-manifold pavilion shell;
- removal of coplanar internal faces at touching components;
- architectural, structural, sealing or manufacturing validity;
- collision, navigation or gameplay acceptance;
- Universal Creation or Profession Fabric promotion;
- CANON, merge authority, production/game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** both representations keep their own exact identities and measured tradeoffs; the 23-box successor is not relabelled as the default.
- **Agency / non-domination:** downstream consumers must explicitly opt in; the producer never chooses a variant for them silently.
- **Continuity:** the historical builder, named v0.1 result and prior evidence stay reproducible while the new source contract adds a stable selection boundary.
- **Wisdom before speed:** the pass solves a real receiving-pressure problem without forcing Map adoption or prematurely extracting a universal abstraction.

## Next Hard-Surface pass

Re-scan the whole constellation first. Do not automatically keep expanding Building. If a downstream owner explicitly selects `header-segmented-23`, Hard Surface should only answer source-structure questions that the receiving evidence actually exposes; Materials, Environment, Runtime and Visual QA retain their own acceptance boundaries.
