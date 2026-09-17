# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17
State: **PASS_BUILDING_CURRENT_SOURCE_BOUNDARY_ONLY_REFERENCE_SHELL / EXACT UNION + BOUNDS PRESERVED / 3.3168 M2 DOUBLE-SIDED HIDDEN FACE AREA REMOVED / CLOSED ORIENTED VERTEX-FAN-CONNECTED / REPRESENTATION COST + VISUAL + RUNTIME + SOURCE ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the current Geometry status, Art Direction / specialist state, and the active design constellation before changing product evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation for this activation stayed in `mike-axiom-mir/axm-building-design`; this file records the exact scope, evidence, limitations and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous detailed Animal UV/tangent status remains rollbackable in git history at content blob `f50b8be5e0f0c09527c8991784edd42f683034cf`; it is not relabelled or erased by this update.

## Fresh constellation / duplication scan

The strongest fresh Geometry-owned dependency moved from Animal to Building.

- **Animal Geometry #20** already has active downstream ownership: Rigging is observing tangent frames through deformation, Runtime is measuring the 84-render-vertex domain, and Materials owns shaded receiving evidence. Geometry did not duplicate those lanes.
- **Character Geometry #11** remains unresolved: dense shoulder intersections improved `1320 -> 1020`, but every retained sampled pose is still nonzero. That remains a real future Geometry problem, but no fresh downstream source transition made it more urgent in this scan.
- **Building Hard Surface #2** newly promoted the already-proven `header-segmented-23` representation to the explicit current source policy while preserving the historical 19-box build result for compatibility. This changed the Geometry dependency materially: the segmented form is no longer merely a Geometry-derived candidate.
- Hard Surface still explicitly held boolean/global-shell cleanup and coplanar internal-face removal. The preceding Building Geometry evidence measured `1.6584 m²` of single-sided contact area in the segmented representation.
- Nature / Object / Map / Weather retained bounded active owner lanes; Weapon / Armor / Unit / Misc exposed no stronger implementation-ready Geometry dependency.

The highest-leverage non-duplicated Geometry action was therefore to continue the **existing Building Geometry PR #6** and derive one exact boundary-only reference shell from the now-current segmented source, without changing the 23-box semantic source.

## Provenance / rollback lineage

Repository:

`mike-axiom-mir/axm-building-design`

Existing PR advanced:

**#6 — `Geometry: derive boundary-only shell from current segmented pavilion source`**

Branch:

`studio/geometry-building-box-topology-001`

A real two-parent merge preserves both current source-owner history and prior Geometry history:

- current Hard-Surface policy head: `a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`;
- prior Geometry head: `aaa987397c33f0dc9579a2ac3785ca00a5bc7402`;
- merge commit: `c39443fc8d4d38a9d272ebac10e0d286c860b4b1`.

Exact current Geometry head:

**`b6d14d48c59859ae6ff2aaed7dea86b4e00a5402`**

Observed PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

No source file in `axm-create-me` was used as a product implementation path. No Building source identity was silently replaced.

## Selected bounded improvement

Added Building-local derived contract:

`axm.building-current-source-boundary-shell/v0.1`

The candidate binds the exact current source policy and `header-segmented-23`, then:

1. verifies all 23 emitted boxes remain exact axis/cardinal geometry and volume-intersection-free;
2. partitions space only at exact source coordinates;
3. marks occupied cells and face-connected solid components;
4. emits only occupied-to-empty faces;
5. suppresses every occupied-to-occupied face;
6. shares vertex identity only inside one face-connected solid component, so unrelated edge/corner contacts cannot be silently welded;
7. retains `source_component_id` ownership on every emitted boundary triangle.

This is deliberately a **derived structural/reference mesh**. The source-authoritative representation remains the 23 named boxes.

## Exact structural result

Scoped result:

**`PASS_CURRENT_SOURCE_BOUNDARY_ONLY_UNION_SHELL_CANDIDATE`**

Current source facts:

- semantic emitted boxes: **23**;
- separate-box storage geometry: **184 vertices / 276 triangles**;
- positive-volume intersections: **0**;
- exact occupied union: **9.49832 m³**;
- bounds: **`[-3.8,-1.12,0.0] .. [3.92,1.0,3.4]`**;
- summed separate-box surface area: **144.1864 m²**.

Boundary-shell facts:

- candidate signed volume: **9.49832 m³**;
- candidate bounds: exact source match;
- exact single-sided internal contact area: **1.6584 m²**;
- partition contact patches: **140**;
- double-sided hidden area removed: **3.3168 m²**;
- exact resulting boundary area: **140.8696 m²**;
- candidate geometry: **1420 vertices / 2884 triangles**;
- face-connected solid components: **4**;
- boundary edges: **0**;
- non-manifold edges: **0**;
- orientation-conflict edges: **0**;
- degenerate triangles: **0**;
- isolated vertices: **0**;
- disconnected indexed vertex fans: **0**;
- maximum vertex-fan components: **1**;
- logical source-component owners retained on boundary triangles: **19**.

The representation-cost increase is intentionally visible: **184v / 276t -> 1420v / 2884t**. The exact global coordinate partition is useful as a structural oracle/reference shell, but it is not claimed as an efficient runtime mesh. Coplanar merging / constrained simplification remains a separate possible Geometry optimization if a real receiver needs this representation.

## Failure provenance and CI

The first workflow at head `ef079b56835b4c8929dcc1488acdcb98b8f13a4d` built the candidate successfully and passed the full repository tests, but final workflow `35165620009` failed its truth-gate because the gate used strict serialized floating-point equality for boundary area (`140.869599999998` vs rounded exact evidence `140.8696`). That failed run remains preserved.

The truth-gate was repaired to the same `1e-9` tolerance used by the geometry verifier. No mesh, source, provenance or structural acceptance gate was weakened.

Exact-head workflows at `b6d14d48c59859ae6ff2aaed7dea86b4e00a5402`:

- **`35165684360 — Geometry building topology evidence` — SUCCESS** on Python 3.11 and 3.13;
- **`35165684340 — Hard-surface building evidence` — SUCCESS**;
- **`35165684296 — Hard-surface Building current-source policy evidence` — SUCCESS**.

Fail-closed structural controls retain:

- removing one boundary triangle produces **3 boundary edges**;
- flipping one triangle produces **3 orientation-conflict edges**;
- occupied-to-occupied faces remain outside the allowed union-boundary contract.

## Retained evidence

Artifact:

- ID: **`10475121158`**;
- name: `service-pavilion-boundary-shell-001-b6d14d48c59859ae6ff2aaed7dea86b4e00a5402`;
- size: **57,424 B**;
- GitHub SHA-256: **`87ed1c108447496d1bd391303af83a77e504220104b6cb136c4e182223c0bd06`**;
- downloaded and independently rehashed in this activation: **same SHA-256**.

The retained archive includes the boundary-shell OBJ, machine-readable shell/evidence, exact-head binding, the predecessor interpenetration evidence, and the current-source policy receipt.

## Reusable mesh pattern retained

One useful Geometry pattern is now explicit but remains **Building-local**:

> For exact face-contacting axis/cardinal box assemblies, preserve source boxes as semantic authority while deriving a separate boundary-only mesh from the exact occupied solid union; suppress occupied-to-occupied faces, weld only inside face-connected solids, and carry source-component ownership onto every boundary surface.

The current implementation prioritizes exact structural truth over geometry economy. A single Building family is not enough evidence for Universal Creation or Profession Fabric promotion.

## Handoffs

### Hard Surface

Keep the 23-box current-source policy authoritative. Any adoption of the boundary-only derived mesh as a source or compatibility representation is a separate Hard-Surface decision and requires a new exact identity.

### Materials / Environment / Visual QA

Equal occupied union does not imply equal shading. If this candidate is rendered, rebind material roles through retained `source_component_id` ownership and inspect the exact target-host result before any visual acceptance transfers.

### Runtime / Optimization

Measure the actual **1420v / 2884t** payload, indexing, surface grouping, memory and draw strategy before runtime use. Geometry makes no FPS, memory, batching or draw-call claim.

### Technical Art

If transported, prove that exact source-component/material ownership survives and that import/export does not regenerate the removed hidden faces or collapse distinct solid-component identities.

### Capability Cartography / UC

Do not promote this one Building-specific axis/cardinal union-shell mechanism yet. Look for materially different domains that demonstrate the same source/derived-boundary contract before shared extraction.

### Character

The nonzero sampled shoulder-intersection family remains unresolved and should stay visible as a future Geometry lane; this Building result does not supersede it.

## Truth boundary / non-claims

This activation proves only that the exact current segmented Building source can produce one closed, consistently oriented, indexed-vertex-fan-connected **derived boundary-only reference mesh** that preserves exact occupied volume and bounds, carries source-component provenance, and removes every occupied-to-occupied partition face.

It does **not** establish:

- replacement of the source-owned 23-box semantic representation;
- replacement of the historical 19-box compatibility API;
- minimum triangle count or optimal vertex indexing;
- coplanar face merging, LOD quality or production retopology;
- final normals, tangents, UVs, materials or visual quality;
- architecture, structural engineering, weather sealing, manufacturing validity or tolerances;
- target-device runtime, memory, batching or draw-call acceptance;
- collision, navigation, physics or gameplay acceptance;
- a general boolean union for rotated, curved, overlapping or arbitrary meshes;
- Universal Creation or Profession Fabric promotion;
- CANON or merge authority;
- production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** the remaining internal-face problem was measured against the newly current source, and the large reference-shell geometry cost plus the first failed truth-gate run are both retained instead of hidden.
- **Agency / non-domination:** Geometry supplies a derived structural option; Hard Surface keeps source authority, Materials/Visual QA keep appearance authority, Runtime keeps performance authority, Technical Art keeps transport authority, and the constitutional process keeps CANON/merge authority.
- **Continuity:** current Hard-Surface policy history and prior Geometry history are joined through an explicit two-parent merge; the 19-box compatibility API, 23-box source policy, earlier segmentation proof and new boundary shell remain distinct rollback/evidence identities.
- **Wisdom before speed:** the exact structural oracle was proven first and its `1420v / 2884t` cost exposed before attempting optimization, source migration or a premature generic UC boolean/union abstraction.

## Next Geometry pass

Re-scan the full constellation first. Do not automatically optimize this Building shell. Prefer either a receiver-backed need for a lower-cost conforming boundary mesh, a fresh Geometry-owned failure in another domain, or the unresolved Character shoulder family if downstream evidence makes it the strongest dependency.