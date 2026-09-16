# 02 — Geometry & Topology Specialist Status

## Current state

Evidence state: IMPLEMENTED + STRUCTURALLY TESTING; no game-ready, visual-quality, rig, collision or mastery claim.

### Constellation scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `02_geometry_topology.md` role.
- The eleven design department repositories are currently empty starting bodies (`size: 0` in repository metadata), so there is no truthful department mesh to retopologize yet.
- Read the current Art Director status and `studio/direction/VISUAL_BASELINE_001.md`. The geometry lane is therefore preserving silhouette/proportion/hierarchy as a later visual handoff rather than inventing a house topology style before assets exist.
- Universal Creation main already has bounded procedural/surface GLB generation and structural triangle validation. Its published capability explicitly states that its current `topology-validator` does **not** prove manifoldness; `verify_glb()` checks finite geometry, index bounds, non-degenerate triangles and winding/normal agreement, but does not report open seams or non-manifold shared edges.
- UC also already has `ClosedTriangleSurface` for point classification, but that helper requires callers to provide an already welded closed surface. It is therefore downstream of the missing diagnostic rather than a replacement for it.
- Active UC lanes were checked before claiming work. The hard-surface vehicle lane touches `procedural_3d.py` / `test_procedural_3d.py`; the clearance/contact lane owns collision/contact semantics. This activation deliberately avoided both surfaces and created only new topology-diagnostic files.

## Bounded improvement

Opened Universal Creation PR **#133 — Add seam-welded mesh topology diagnostics** from exact main `e2016cf30b8f7b409137d138abed91dfcc885f60`.

New files:

- `src/axm_uc/mesh_topology.py`
- `tests/test_mesh_topology.py`
- `docs/MESH_TOPOLOGY_INSPECTOR.md`

The reusable Python primitive `inspect_mesh_topology()` now reports, without rewriting source geometry:

- source vs positional-seam-clustered vertex counts;
- triangle collapse caused by the declared weld tolerance;
- boundary/open edges;
- edges with more than two incident faces;
- two-face shared edges with inconsistent direction/winding;
- edge-connected triangle components;
- bounded deterministic examples for repair.

Statuses stay conservative:

- `CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE`
- `OPEN_EDGE_MANIFOLD_CANDIDATE`
- `INVALID_EDGE_TOPOLOGY`

The word **candidate** is intentional: v0 does not prove vertex-neighborhood manifoldness or freedom from self-intersection.

## Evidence

Direct GitHub workflow evidence on PR head `982523abbbb03e7fcb3d7fb5438bc107ab587874` at this status write:

- checkout/setup: PASS;
- Python source + tests compile step: PASS;
- Candidate workspace isolation workflow: PASS;
- Workshop specialist render evidence: SKIPPED by workflow conditions and not required for this structural claim;
- full UC unittest suite: IN PROGRESS;
- Candidate adoption binding/resume: IN PROGRESS.

The focused regression file is designed to exercise UC's existing box, pyramid and cylinder generators, including duplicated hard-normal/cap seam positions, plus explicit open-surface, non-manifold-edge, winding-conflict, tolerance-collapse, disconnected-component and malformed-input fixtures. Do not convert that design intent into PASS until CI returns it.

## Truth boundary / non-claims

This activation does **not** establish:

- a department asset is visually good or game-ready;
- topology is fully manifold at vertex neighborhoods;
- self-intersection freedom;
- UV/tangent quality;
- rig/deformation quality;
- collision/physics suitability;
- LOD quality or runtime performance;
- target-engine import compatibility;
- artistic acceptance.

The new inspector is deliberately not registered as a live Machine capability yet and does not alter existing `VALIDATED_DETERMINISTIC_GLB_ASSET` receipt semantics. Existing receipts therefore retain their original evidence scope.

## Handoffs

- **3D Art Director:** when first department meshes exist, compare topology cleanup against silhouette/proportion/large-medium-small read; structural cleanup must not silently become visual acceptance.
- **Hard-Surface / Organic Form / Environment:** use the topology report on first serious meshes and retain before/after evidence when cleanup changes form.
- **Rigging & Deformation:** treat closed edge topology as input evidence only; deformation-ready edge flow remains a separate gate.
- **Technical Art / UC Integration:** if repeated design-repo evidence shows this report is useful, bind it into an explicit machine/export contract rather than silently strengthening old receipts.
- **Runtime / Optimization:** boundary/manifold evidence is not an LOD/performance certificate; consume it only as structural input.
- **Visual Observer / QA:** topology PASS must never substitute for rendered inspection.
- **Capability Cartographer:** watch whether this diagnostic transfers across hard-surface, organic and environment meshes before proposing promotion beyond a reusable UC library primitive.

## Next Geometry / Topology pass

First, read PR #133 CI and repair the same lane if any fixture exposes a false assumption. If green, do not manufacture another topology abstraction. Re-scan the newly active department/specialist outputs and apply the inspector to the first real mesh where it can produce actionable repair evidence. Promotion into a stronger shared acceptance gate requires repeated real cross-domain evidence, not this one implementation pass.
