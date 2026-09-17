# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_INDEXED_DECLARED_ATLAS_UV_BINDING_FAMILY / EXISTING OBJECT PR #11 ADVANCED / 2 MATERIALLY DIFFERENT SOURCE SURFACES / 2 EXACT SOURCE-INDEX→ATLAS BINDINGS / 4 SELECTED SOURCE TRIANGLES / 7 FAIL-CLOSED CONTROLS / ALL 11 EXACT-HEAD WORKFLOWS GREEN / SOURCE UV0 + CURRENT-WORLD UV0 HELD / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained evidence stayed in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Procedural status is preserved in Git history at blob **`0387569a5d398782667aa42a6eff9cd5205747d2`**. That status proved source-global triangle/vertex → review-UV binding for the two exact Object service surfaces while explicitly leaving production/source/current-world UV0 adoption held. This activation advances only the next owner-backed source-side handoff.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no implementation-backed repeated pattern worth inventing.
- **Character:** active Geometry, Organic, Materials, Rigging, Animation, Technical-Art, Runtime and Visual-QA lanes continue to own current form/deformation/shading/transport work; Procedural did not automate an unsettled target.
- **Animal:** active Geometry/Rigging/Materials/Motion/Runtime work already owns its current repeated mechanisms; no duplicate Procedural lane was opened.
- **Building / Nature / Weather:** existing Procedural PRs already retain bounded row/stress/receiver, seeded-nature and seeded-weather families; this pass did not continue them by inertia.
- **Map:** Environment now proves the two exact Object service-surface segments are independently addressable in the current receiver, but its current status still holds UV0/TEXCOORD_0 and selected roughness adoption. Procedural did not implement Map receiving logic.
- **Object:** two existing owner-backed source-side families now describe the same repeated final handoff from opposite sides: the indexed family binds exact source-global triangle/vertex identities to exact review UVs, while the atlas family binds those review UVs to the exact Materials-declared atlas rectangles. The missing repeated operation was the deterministic composition of those two exact facts into source-global index → declared atlas UV bindings.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — `Procedural: add bounded bilateral service-module configuration family`**

Exact tested Procedural head:

**`f6e45358a7a2f11e9646479fd4ade82d72ac7990`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded family:

**`axm.object-source-box-face-indexed-atlas-uv-binding-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_SOURCE_BOX_FACE_INDEXED_ATLAS_UV_BINDING_FAMILY`**

Decision:

**`PASS_DERIVED_SOURCE_INDEXED_ATLAS_UV_BINDING_FAMILY_ONLY__NO_SOURCE_OR_CURRENT_WORLD_UV0_ADOPTION`**

## Why this deserves proceduralization

The prior indexed family already proved exact source-global identity for both service faces and attached the Materials-reviewed UV coordinates. The existing atlas-layout family already proved exact Materials-declared pixel rectangles and normalized atlas coordinates for those same two isotropic candidates. A downstream consumer still had to manually join those facts to know which original source-global vertex and triangle corner owns which atlas coordinate.

That operation repeats across two materially different source surfaces, different source index sets, different source-frame basis planes, different physical spans, and different atlas rectangles. The smallest reusable improvement is therefore a deterministic composition manifest, not a new unwrap system, atlas search, mesh rewrite, material authoring system, or Map receiver implementation.

The exact owner-declared atlas exists only for `materials_candidate_isotropic`, so the family deliberately emits **two** retained outputs rather than inventing atlas placement for the existing 3×V diagnostic controls.

## Exact provenance / prerequisites

The family pins both predecessor profiles **and their builders** by exact Git blob:

- indexed review-UV family profile `assets/modular-equipment-case-001/source-box-face-indexed-uv-binding-family-001.json` @ **`37ba5191ae3ce79714736a2ab197b487dd18dd62`**;
- indexed review-UV builder `tools/build_source_box_face_indexed_uv_binding_family.py` @ **`c7d925c37154aa10db964f2770db637e7e0850eb`**;
- declared atlas-layout family profile `assets/modular-equipment-case-001/source-box-face-atlas-layout-family-001.json` @ **`27e5a05af153d432f6d84b73d6215a71b530e1a1`**;
- declared atlas-layout builder `tools/build_source_box_face_atlas_layout_family.py` @ **`9d29da35dc3e44cc19060025541188c0d3b20eb9`**.

The evidence workflow rebuilds the exact prerequisite chain from its authority donors:

- Hard-Surface source-face donor **`fcae744a8bdbcb765c32758e9da03fe54ffe4dbc`**;
- Hard-Surface source-frame donor **`6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`**;
- Hard-Surface metric-domain donor **`f7c64d08e4e2a0d6954291d8b4e064d7345ab658`**;
- Materials review-UV donor **`ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`**;
- Materials atlas donor **`4c12a0a57f6aa8778cff41efad321e13567c6c91`**;
- exact Materials atlas contract blob **`2b95fcc1fcc523576eca08dbf47a140a727ab598`**.

Hard Surface retains source segmentation/frame/physical-domain authority. Materials retains review-UV density/origin and declared atlas-layout authority. Procedural owns only the bounded deterministic composition handoff.

## Smallest reusable implementation

Added inside existing Object Procedural PR #11:

- `assets/modular-equipment-case-001/source-box-face-indexed-atlas-uv-binding-family-001.json`;
- `tools/build_source_box_face_indexed_atlas_uv_binding_family.py`;
- `tests/test_source_box_face_indexed_atlas_uv_binding_family.py`;
- `.github/workflows/object-source-box-face-indexed-atlas-uv-binding-family.yml`.

The generator validates exact predecessor profile/builder blobs, exact source-global face and vertex identities, exact two-triangle topology, exact review-UV reconstruction from the declared pixel coordinates, exact normalized atlas UV reconstruction from the declared rectangles, disjoint source-face ownership and deterministic order-independent family identity. It emits per-source-global-vertex and per-source-global-triangle-corner review/pixel/atlas bindings without renumbering source indices.

## Materially different retained outputs

**Lid inner service surface**

- source-global faces `[12,13]`;
- source-global vertices `[8,9,10,11]`;
- basis source X → U / source Y → V;
- physical span `0.78 × 0.48 m`;
- atlas pixel size `390 × 240`;
- declared atlas rect `[16,16,390,240]`;
- padded rect `[0,0,422,272]`;
- indexed-atlas binding digest **`e2784e200639f9cd3d85f2ac4b28b15a88f0d38743fad289b3c35f4a19562e32`**;
- output digest **`5a9fe19ff1fa5cb26c446f1991fc646b56016f9517ff7c28377eb4053a0417d6`**.

**Front service-panel outer service surface**

- source-global faces `[28,29]`;
- source-global vertices `[16,17,20,21]`;
- basis source X → U / source Z → V;
- physical span approximately `0.468 × 0.156 m`;
- atlas pixel size `234 × 78`;
- declared atlas rect `[16,288,234,78]`;
- padded rect `[0,272,266,110]`;
- indexed-atlas binding digest **`0182c5c8aad269b3abe6f16af361da534bc012e02f3893699f576e15bf4bd356`**;
- output digest **`6ffcf2e20e2601ccf4596476fc567a94b54666943003c026de543c131028e594`**.

Across the family:

- exact source-surface count **2**;
- total selected source triangles **4**;
- distinct source segmentation identities **2**;
- distinct basis planes **2**;
- distinct declared atlas rectangles **2**;
- distinct indexed-atlas binding identities **2**;
- distinct final output identities **2**;
- maximum review-UV reconstruction residual **`8.881784197001252e-16`**;
- maximum normalized atlas-UV reconstruction residual **`0.0`**.

Canonical family digest and reversed-generation family digest are exactly identical:

**`14e8994d2f40a25f8ea48311dc6e613bd72094faa9a392d2800cce521e5fe795`**

Summary digest:

**`ff5c2409f235873d11b883b374ee8ad07ae9246a18d491d40a193e7efa2a71b0`**

## Failure bounds

Seven controls fail closed:

1. atlas predecessor profile-blob drift;
2. duplicate retained surface identity;
3. source-global vertex identity drift;
4. atlas local-pixel cardinality drift;
5. one-pixel indexed → atlas review-UV mismatch;
6. indexed → atlas topology drift;
7. any policy change enabling automatic current-world UV0 adoption.

No source surface discovery, topology guessing, source-index rewrite, fallback, source UV authoring, current-world UV0 authoring, atlas search/repack or automatic adoption is permitted.

## Exact CI / retained evidence

Dedicated exact-head workflow:

**`35229700111 — Object source box-face indexed atlas UV binding family evidence` — SUCCESS**.

Python **3.11** and **3.13** both passed compile and the full Object repository unit suite. The Python 3.11 evidence lane ran **68 passing tests**, rebuilt the full exact owner-backed prerequisite chain, built both materially different indexed-atlas bindings, exercised all seven fail-closed controls and passed retained-evidence assertions.

All **11 workflows** triggered on exact head `f6e45358a7a2f11e9646479fd4ade82d72ac7990` completed **SUCCESS**, including the inherited Object configuration, registration-key, fit, Hard-Surface interface, source-face extraction, UV projection, atlas-layout, source-frame, metric-domain and indexed review-UV lanes.

Retained artifact:

- artifact ID **`10500966363`**;
- name `object-source-box-face-indexed-atlas-uv-binding-family-001-evidence`;
- uploaded size **52,467 B**;
- SHA-256 **`7e27ab31b960429342993a721e599d8154460cee45d576fb73237bf6a981b38c`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **45 files**, including exact-head/donor markers, predecessor profiles, rebuilt prerequisites, both final bindings and the exact summary.

Evidence was returned to Object Procedural PR #11 as comment **`5715535063`**.

A source-side evidence-only note was returned to Map Environment PR #24 as comment **`5715538185`**. It explicitly does not request adoption: Environment still owns proof that the exact source-index mapping corresponds to its current receiving vertex/index stream before any current-world UV0/TEXCOORD_0 or selected roughness adoption.

## Explicit non-claims

This PASS does **not** author or adopt production/source UV0, create or adopt Map/current-world UV0, rewrite the source mesh, change source indices, search or optimize atlas packing, adopt the Materials atlas, authorize selected roughness/material state, prove target-engine/runtime compatibility, establish Art Direction/Visual-QA acceptance, promote UC/Profession Fabric, establish CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact owner-backed prerequisites are rebuilt and blob-pinned; exact source-global identities and exact declared atlas locations are explicit; two materially different outputs, seven negative controls, 68 tests and all 11 exact-head workflows are retained green; the artifact was independently rehashed.
- **Agency / non-domination:** Procedural does not redefine Hard-Surface source semantics, Materials atlas policy or Environment receiver/adoption authority, and automatic current-world UV0 adoption is explicitly fail-closed.
- **Continuity:** existing Object Procedural PR #11 was advanced in place; prior source-face/review-UV/frame/metric/indexed/atlas families remain intact and are rebuilt as prerequisites.
- **Wisdom before speed:** only the exact repeated source-index → owner-declared-atlas handoff was automated. No generic unwrap, atlas optimizer, receiver remapper or universal material pipeline was invented.

## Prior retained Procedural chain

Earlier Object, Nature, Weather and Building Procedural evidence remains intact in their existing PRs. This status compresses prior branches; it does not replace retained evidence or roots.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Object merely because PR #11 is open. Extend only if another owner-backed repeated manual pattern exists and Procedural can add leverage without taking source, material, receiver, runtime or visual authority.
