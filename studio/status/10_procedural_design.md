# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_UTILITY_PANEL_SERVICE_SURFACE_RECEIVER_FAMILY / EXISTING BUILDING PR #4 ADVANCED / 2 ORTHOGONAL RECEIVER OUTPUTS / 1.10 × 1.50 M SOURCE DOMAIN / 1.65 M² / 8 FAIL-CLOSED CONTROLS / ALL 16 EXACT-HEAD WORKFLOWS GREEN / NO UV MATERIAL ENVIRONMENT OR RUNTIME ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product and evidence work stayed in the existing `mike-axiom-mir/axm-building-design` Procedural PR #4. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon:** no active implementation-backed Procedural target worth inventing.
- **Armor:** no active implementation-backed Procedural target worth inventing.
- **Character:** active Geometry, Materials, Rigging, Animation, Technical-Art, Runtime and Visual-QA lanes are still resolving deformation/shading boundaries; Procedural did not automate unresolved form.
- **Unit:** no active implementation-backed Procedural target worth inventing.
- **Animal:** active Geometry/Rigging/Materials/Motion/Runtime work already owns the current repeated mechanisms; no duplicate lane was opened.
- **Building:** Hard Surface PR #15 freshly source-owns an exact manufactured service-surface identity/frame/metric domain for the same utility panel already placed by the existing Procedural receiver family. This created a real new authority-backed repeated pattern.
- **Nature:** existing Procedural PR #4 already owns bounded family/seed variation and downstream compatibility evidence.
- **Weather:** existing Procedural PR #3 already owns bounded seeded-field and receiver-family evidence.
- **Map:** active Environment/VFX/Technical-Art/Runtime lanes own current receiving and transport questions; their logic was not copied into Procedural.
- **Object:** prior Procedural metric-domain UV rebind remains intact, but this pass did not continue Object by inertia.
- **Misc:** no active implementation-backed Procedural target worth inventing.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#4 — `Procedural: derive repeated pavilion box rows from exact source`**

Exact tested Procedural head:

**`0b1521548e5c6a55def1af3490bc5e4724ff1219`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

Fresh source-owner lane:

Hard Surface PR **#15 — `Hard Surface: source-own utility panel service-surface metric domain`** at exact head **`97120eb78a72b0a07aff1c65b9b92229d0a42aff`**, also observed **OPEN / DRAFT / MERGEABLE**.

New bounded family:

**`axm.building-utility-panel-service-surface-receiver-family/v0.1`**

Scoped result:

**`PASS_SOURCE_OWNED_UTILITY_PANEL_SERVICE_SURFACE_RECEIVER_FAMILY`**

Decision:

**`PASS_DERIVED_SPATIAL_SURFACE_PARAMETERIZATION_FAMILY_ONLY__NO_UV_MATERIAL_ENVIRONMENT_OR_RUNTIME_ADOPTION`**

## Why this deserves proceduralization

Building already had one exact utility-panel source and a Procedural family that places that panel into two materially different source-owned receiver frames:

- `front-utility-bay`;
- `east-utility-bay`.

Hard Surface PR #15 then made a previously implicit source fact explicit: the exact panel outer service face now source-owns its manufactured surface identity, local planar frame, physical metric extent and outward orientation.

Without a bounded rebind, each downstream placed panel would have to rediscover that surface plane and its dimensions independently. The smallest reusable improvement is therefore not a generic UV/atlas/material system. It is a deterministic family that carries the exact source-owned service-surface contract through the already-proven two-receiver placement family.

## Exact provenance / authority

True two-parent provenance merge:

**`cc9b4bbb80455b23615fef5b952d27e197b16ed3`**

Parents:
- previous Procedural head: `7b8919dac11b62afebb3c4a1f055b6f6d7796de3`;
- Hard Surface PR #15 owner head: `97120eb78a72b0a07aff1c65b9b92229d0a42aff`.

Pinned source-surface contract:
- path: `assets/utility_access_panel_001_service_surface_domain.json`;
- Git blob: `14037a0fb939104ea319c9ac96fbe9fdaa949a18`;
- schema: `axm.building-utility-panel-service-surface-domain/v0.1`;
- surface ID: `utility_panel_outer_service_surface`;
- local selector: exact +X outer panel face;
- local primary: +Y;
- local secondary: +Z;
- local outward: +X;
- physical domain: **1.10 × 1.50 m = 1.65 m²**;
- face structure: **4 vertices / 2 triangles**.

Pinned existing Procedural receiver-family profile:
- path: `procedural/service_pavilion_utility_panel_receivers_001.json`;
- Git blob: `1554fbd63f2896ec213142e7374f56d6a57070ea`;
- result: `PASS_EXACT_UTILITY_PANEL_RECEIVER_PLACEMENT_FAMILY`.

Hard Surface remains source authority for surface identity/frame/physical extent/outward orientation. Procedural owns only deterministic bounded spatial derivation through the already-owned receiver placements.

## Smallest reusable implementation

Added inside existing Building Procedural PR #4:

- `procedural/service_pavilion_utility_panel_service_surface_receivers_001.json`;
- `tools/build_pavilion_utility_panel_service_surface_receivers.py`;
- `tests/test_pavilion_utility_panel_service_surface_receivers.py`;
- `.github/workflows/procedural-building-utility-panel-service-surface-receivers.yml`.

The generator executes, rather than copies, the existing utility-panel receiver-placement family and the exact Hard-Surface service-surface verifier. It transforms the exact four local service-surface corners with each already-proven receiver frame, requires unit/orthogonal/right-handed frames, forbids scale and extra rotation, checks that every transformed service-surface corner remains an exact corner of the placed panel box, preserves physical span/area and verifies outward triangle winding.

Canonical output ordering is explicit and reversing iteration must reproduce the same family digest.

## Materially different outputs

The exact source domain is carried into two orthogonal world-space placements:

**Front utility bay**
- world origin: `[-2.45, -1.12, 1.65]`;
- outward axis: `[0, -1, 0]`;
- primary axis: `[1, 0, 0]`;
- secondary axis: `[0, 0, 1]`;
- world-surface digest: `116d126a0e31d330bebbe6a86e9243d61cc784ba10047c8e88323478072726b2`.

**East utility bay**
- world origin: `[3.92, 0.1, 1.65]`;
- outward axis: `[1, 0, 0]`;
- primary axis: `[0, 1, 0]`;
- secondary axis: `[0, 0, 1]`;
- world-surface digest: `710e9090f22b3920e0c36a671882419aa795fbdc2fc01a9167b2a0c5796a6c6`.

Both preserve **1.10 × 1.50 m**, **1.65 m²**, **4 corners / 2 triangles**. Their outward-axis dot product is exactly **0.0**, proving materially different orientation rather than one lucky repeated pose.

Canonical family digest:

`20b64a108630549c2b312c9b37df5968f16d2b219222345581292000a08d1f0c`

Reverse-iteration family digest is exactly identical.

## Failure bounds

Eight controls fail closed:

1. Hard-Surface source-owner head drift;
2. source-surface contract blob drift;
3. previous Procedural placement-profile blob drift;
4. duplicate receiver identity;
5. source-surface identity drift;
6. source outward-axis drift;
7. source metric-extent drift;
8. receiver scale injection.

No surface discovery, frame inference, physical-extent rediscovery, hidden fallback, UV/material authoring, source rewrite or downstream adoption is permitted.

## CI repair discovered during verification

The first exact-head pass exposed one harness-only problem in unrelated shallow-checkout workflows: the new unit-level profile verifier attempted `git merge-base --is-ancestor` even when those workflows deliberately fetched depth 1, so they could not resolve the known donor commit and falsely failed one otherwise-green test.

This was repaired at final exact head `0b152154...` by keeping exact donor-head identity and exact owner-contract blob checks inside the generator while keeping **ancestry proof in the dedicated full-history workflow gate**, where the history actually exists. This does not weaken source provenance; it removes a checkout-depth dependency from ordinary unit tests.

After the repair, every exact-head workflow triggered on the final Procedural head completed **SUCCESS**.

## Exact CI / retained evidence

Dedicated exact-head workflow:

- **`35217548024 — Procedural Building utility-panel service-surface receiver family evidence` — SUCCESS**;
- Python **3.11** and **3.13** both passed compile and the complete Building repository unit suite;
- Python 3.11 executed the exact Sticker Fabric shared-placement prerequisite, built the two receiving surfaces, ran all eight fail-closed controls, truth-gated the exact output and retained evidence.

All **16** workflows triggered on exact final head `0b1521548e5c6a55def1af3490bc5e4724ff1219` completed **SUCCESS**, including the inherited Procedural row/stress families and all triggered Building Hard-Surface/Geometry evidence workflows.

Retained artifact:

- artifact ID: **`10495629463`**;
- name: `service-pavilion-utility-panel-service-surface-receivers-001-0b1521548e5c6a55def1af3490bc5e4724ff1219`;
- uploaded size: **8,718 B**;
- GitHub SHA-256: **`13eead56f0936c182d9d50cafc83b9e23cca86ed09f1dc801b6f2ae29548b42e`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **9 files**: exact-head marker, previous/head provenance markers, source contract/receipt, prior placement prerequisite summary, family profile, two-output payload and exact summary.

Evidence was returned to Procedural PR #4 as comment **`5713838391`** and Hard Surface PR #15 as downstream compatibility comment **`5713840615`**, without transferring source authority.

## Explicit non-claims

This PASS does **not** author or adopt UVs, texel density, atlas placement, textures/materials, alter panel or pavilion source geometry, choose Environment/Map adoption, prove Runtime attachment/storage/performance, establish final Art Direction/Visual-QA acceptance, promote UC/Profession Fabric, establish CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact source-owner head/blob and previous Procedural profile blob are pinned; exact source-domain verifier is re-executed; two materially different outputs and eight negative controls are retained; artifact hash was independently reproduced; the shallow-checkout false failure was repaired rather than hidden.
- **Agency / non-domination:** Procedural does not redefine source surface meaning, choose UV/material policy, take receiver semantics from Hard Surface, or force Environment/Runtime adoption.
- **Continuity:** existing Building Procedural PR #4 was advanced in place through a true two-parent provenance merge; previous families remain intact; all exact-head workflows are green after repair.
- **Wisdom before speed:** only the newly source-owned repeated spatial parameterization seam was automated; no generic surface/UV/universal attachment framework was invented.

## Prior retained Procedural chain

Earlier Object, Nature, Weather and Building Procedural evidence remains intact in their existing PRs. This status compresses prior branches; it does not replace retained evidence or roots.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Building merely because PR #4 is open. Extend only when another owner-backed repeated manual pattern exists and Procedural can add leverage without taking source, material, receiver, runtime or visual authority.
