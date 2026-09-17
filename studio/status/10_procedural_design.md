# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_INDEXED_SERVICE_SURFACE_UV_BINDING_FAMILY / EXISTING OBJECT PR #11 ADVANCED / 2 EXACT SOURCE SEGMENTATIONS × 2 UV VARIANTS = 4 DISTINCT BINDINGS / 4 SELECTED SOURCE TRIANGLES / 7 FAIL-CLOSED CONTROLS / ALL 10 EXACT-HEAD WORKFLOWS GREEN / NO SOURCE UV OR CURRENT-WORLD ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained evidence stayed in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no fresh implementation-backed repeated pattern worth inventing.
- **Character:** active Geometry, Organic, Materials, Rigging, Animation, Technical-Art, Runtime and Visual-QA work still owns unresolved form/deformation/shading boundaries; Procedural did not automate an unsettled target.
- **Animal:** active Geometry/Rigging/Materials/Motion/Runtime work already owns its current repeated mechanisms; no duplicate Procedural lane was opened.
- **Building:** existing Procedural PR #4 already has bounded row/stress/receiver families; this pass did not continue Building by inertia.
- **Nature:** existing Procedural PR #4 already owns bounded family/seed and downstream compatibility evidence.
- **Weather:** existing Procedural PR #3 already owns bounded seeded-field and receiver-family evidence.
- **Map:** current Environment/VFX/Technical-Art/Runtime lanes own receiving-state questions. Environment specifically still holds selected Object roughness adoption because exact current-world service-surface segmentation and UV0 identity are missing; Procedural did not implement Map receiving logic.
- **Object:** the prior Procedural chain already proves exact source-face extraction, source-frame rebinding, metric-domain rebinding and four review-UV outputs. The remaining repeated manual seam was the final exact association between source-global triangle/vertex identity and those already-proven UV coordinates. This is narrow, owner-backed and reusable without taking source, Materials or Environment authority.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — `Procedural: add bounded bilateral service-module configuration family`**

Exact tested Procedural head:

**`c3df8c774a5fdd8dd990227a1229139e9e44d818`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded family:

**`axm.object-source-box-face-indexed-uv-binding-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_SOURCE_BOX_FACE_INDEXED_UV_BINDING_FAMILY`**

Decision:

**`PASS_DERIVED_SOURCE_INDEXED_UV_BINDING_FAMILY_ONLY__NO_SOURCE_OR_CURRENT_WORLD_ADOPTION`**

## Why this deserves proceduralization

The prior Object Procedural chain had already solved three separate owner-backed pieces:

1. exact Hard-Surface-owned planar service-face extraction;
2. exact source-owned frame and physical metric-domain rebinding;
3. two retained Materials review-UV density variants per surface.

However, each downstream consumer still had to manually associate those derived UV coordinates with the original source mesh's exact global triangle and vertex identities. That same association operation exists for both materially different service surfaces and both UV variants.

The smallest reusable improvement is therefore **not** a new unwrap, atlas packer, current-world mesh splitter or material system. It is a deterministic source-index-space binding manifest: exact source triangle IDs + exact source vertex IDs + per-source-vertex/per-triangle-corner review UV coordinates, bounded to the two already-owned surfaces.

## Exact provenance / prerequisites

The family pins the exact current Procedural prerequisite profiles by Git blob:

- source-face extraction profile: `assets/modular-equipment-case-001/source-box-face-extraction-family-001.json` @ `105ea8f6e325d2ed18fe950f5158158ccf1f64e7`;
- source-frame rebind profile: `assets/modular-equipment-case-001/source-box-face-uv-source-frame-rebind-family-001.json` @ `0f57ebb01fc21e02f0d2123390e9562d39e86783`;
- metric-domain rebind profile: `assets/modular-equipment-case-001/source-box-face-uv-metric-domain-rebind-family-001.json` @ `edafbab0ae6d75caafd0022b2ca65f0974d36f89`.

The evidence workflow rebuilds those prerequisites from their exact authority donors rather than trusting stale retained output:

- Hard-Surface source-face donor `fcae744a8bdbcb765c32758e9da03fe54ffe4dbc`;
- Hard-Surface source-frame donor `6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`;
- Hard-Surface metric-domain donor `f7c64d08e4e2a0d6954291d8b4e064d7345ab658`;
- Materials review-UV donor `ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`.

Hard Surface retains authority for source segmentation, frame and physical metric domain. Materials retains authority for review UV density/origin/lookdev meaning. Procedural owns only the bounded deterministic binding handoff.

## Smallest reusable implementation

Added inside existing Object Procedural PR #11:

- `assets/modular-equipment-case-001/source-box-face-indexed-uv-binding-family-001.json`;
- `tools/build_source_box_face_indexed_uv_binding_family.py`;
- `tests/test_source_box_face_indexed_uv_binding_family.py`;
- `.github/workflows/object-source-box-face-indexed-uv-binding-family.yml`.

The generator:

- verifies exact prerequisite profile Git blobs;
- requires the two source-owned faces to remain exact 4-vertex / 2-triangle planar selections;
- preserves original source-global triangle and vertex identities rather than renumbering them;
- verifies source-frame projection topology still exactly matches the source face;
- verifies the metric-domain rebound and source-frame UV sets agree with maximum residual `<= 1e-12`;
- emits exact per-source-vertex UV bindings and per-triangle-corner UV bindings;
- requires the two service-surface triangle sets to remain disjoint;
- requires 2 distinct segmentation identities, 4 distinct UV-binding identities and 4 distinct final output identities;
- canonicalizes family digest order and verifies reversing generation order yields the exact same family digest.

## Materially different retained outputs

**Lid inner service surface**
- source-global faces: `[12, 13]`;
- source-global vertices: `[8, 9, 10, 11]`;
- basis: source X → U / source Y → V;
- physical span: `0.78 × 0.48 m`;
- isotropic UV span: `15.6 × 9.6`;
- 3×-V control UV span: `15.6 × 28.8`.

**Front service-panel outer service surface**
- source-global faces: `[28, 29]`;
- source-global vertices: `[16, 17, 20, 21]`;
- basis: source X → U / source Z → V;
- physical span: approximately `0.468 × 0.156 m`;
- isotropic UV span: `9.36 × 3.12`;
- 3×-V control UV span: `9.36 × 9.36`.

Across the family:

- exact source surface count: **2**;
- total selected source triangles: **4**;
- variant outputs: **4**;
- distinct source segmentation digests: **2**;
- distinct UV-binding digests: **4**;
- distinct final output digests: **4**;
- maximum metric↔review UV residual: **0.0**.

Canonical family digest:

`6f2b774d13b7ef3c006c6f40caddc188c354b1689250823a767772fee288d71d`

Reversed-generation family digest is exactly identical.

Summary digest:

`6237418ac8ad1dcd552a7d2233737463e6b6a0850cd55ce3cc8408be755cdf57`

## Failure bounds

Seven controls fail closed:

1. cross-surface source-global triangle overlap;
2. duplicate source-global vertex identity;
3. source-frame UV cardinality drift;
4. source-frame topology drift;
5. metric previous-UV order/value drift;
6. metric surface-identity drift;
7. any policy change enabling automatic current-world adoption.

No surface discovery, topology guessing, index rewrite, fallback, source UV authoring, current-world UV0 authoring or automatic adoption is permitted.

## Exact CI / retained evidence

Dedicated exact-head workflow:

- **`35223300791 — Object source box-face indexed UV binding family evidence` — SUCCESS**;
- Python **3.11** and **3.13** both passed compile and the complete Object repository unit suite;
- the suite now contains **63 passing tests** on the 3.11 evidence run;
- Python 3.11 rebuilt the exact source-face, review-UV, source-frame and metric-domain prerequisite chain before building the new family;
- all seven malformed/authority-drift controls held closed;
- the retained evidence assertion passed.

All **10** workflows triggered on exact head `c3df8c774a5fdd8dd990227a1229139e9e44d818` completed **SUCCESS**, including the inherited configuration, registration, fit, Hard-Surface interface, source-face extraction, UV projection, atlas-layout, source-frame and metric-domain lanes.

Retained artifact:

- artifact ID: **`10497719935`**;
- name: `object-source-box-face-indexed-uv-binding-family-001-evidence`;
- uploaded size: **42,765 B**;
- SHA-256: **`0d5ae2bb317c5e0d7537ab71abbefdc9a2688b5f0159d554872aac745b9c5387`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **38 files**, including exact-head/donor markers, prerequisite profiles and rebuilt evidence, four indexed binding outputs and the exact summary.

Evidence was returned to Object Procedural PR #11 as comment **`5714649868`**.

A downstream evidence-only note was returned to Map Environment PR #24 as comment **`5714652395`**. That note explicitly states that this closes only source-side segmentation/review-UV identity evidence; Environment still owns and must prove exact current-world correspondence before any segmentation/UV0/roughness adoption.

## Explicit non-claims

This PASS does **not** split or rewrite the production source mesh, author source UV0, adopt production UVs, create or adopt current-world segmentation, create or adopt current-world UV0, change materials, authorize roughness adoption, prove runtime/engine compatibility, establish Art Direction/Visual-QA acceptance, promote UC/Profession Fabric, establish CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact owner-backed prerequisites are rebuilt and blob-pinned; source-global identities are explicit; four materially different bindings and seven negative controls are retained; all exact-head workflows are green; the retained ZIP was independently rehashed.
- **Agency / non-domination:** Procedural does not redefine Hard-Surface source semantics, Materials review policy, or Environment receiver/adoption authority, and automatic current-world adoption is explicitly fail-closed.
- **Continuity:** existing Object Procedural PR #11 was advanced in place; prior Object families remain intact and are rebuilt as prerequisites; all inherited exact-head workflows remain green.
- **Wisdom before speed:** only the repeated source-index binding seam was automated. No generic unwrap, mesh splitter, atlas optimizer, receiver remapper or universal material pipeline was invented.

## Prior retained Procedural chain

Earlier Object, Nature, Weather and Building Procedural evidence remains intact in their existing PRs. This status compresses prior branches; it does not replace retained evidence or roots.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Object merely because PR #11 is open. Extend only if another owner-backed repeated manual pattern exists and Procedural can add leverage without taking source, material, receiver, runtime or visual authority.
