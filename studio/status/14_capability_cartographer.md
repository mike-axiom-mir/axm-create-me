# Capability Cartographer Status

- Scan started: `2026-09-17T09:54:01Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_SOURCE_VERTEX_LIVENESS_OBSERVER_PLACEMENT_MAP / CHARACTER #16 EXPOSES ONE UNREFERENCED DERIVED VERTEX PER SIDE AFTER TOPOLOGY EDIT / CURRENT UC MESH_TOPOLOGY DOES NOT REPORT SOURCE-VERTEX LIVENESS / TWO UC BLENDER TOOLS DUPLICATE MUTATING LOOSE-VERTEX DELETE / UC #183 OPENED FOR READ-ONLY LIVENESS EVIDENCE ONLY / GENERIC PRUNE MUTATOR HELD / PF #38 NOT IMPLEMENTATION HOME / UC #182 NOW MERGED ON MAIN / NO PRODUCT OR UC CODE MOVE`

## Selected material cross-repo learning

Fresh Character Geometry evidence exposes a structural fact that should be separated from repair policy:

> **A source-position entry can become unreferenced after a topology edit while every retained indexed face remains structurally valid. Vertex liveness is therefore an independently observable topology fact. Detecting an unreferenced source vertex can be neutral shared machinery; deciding that it may be deleted is a source/lineage-owned mutation decision.**

This is materially different from the earlier indexed-render-domain work. The issue is not whether two render vertices may share an attribute tuple or whether a representation may be compacted. The issue is whether every exact source-array vertex participates in at least one retained triangle at all.

The strongest supported placement is a **read-only Universal Creation topology-observer refinement**. A generic prune/cleanup transform is not supported yet.

## Exact receiving-domain trigger — Character Geometry PR #16

Repository:

- `mike-axiom-mir/axm-character-design`.

PR:

- **#16 — `Geometry: rebind connected shoulder topology to review-006`**.

Exact current Geometry head:

`8ad006f91ebb9934d5df98702e4410c74a1e68ea`

The lane reconstructs the connected shoulder topology from the exact Art/QA-selected review-006 source successor rather than transferring the historical accepted-E result. During the expanded opening edit, the stronger structural preflight found **one previously hidden unreferenced derived ribcage vertex per side**.

Character's repair is deliberately local and provenance-aware:

- remove only source positions referenced by zero retained faces;
- deterministically reindex retained faces;
- move no retained vertex position;
- rerun the complete structural and neutral nonadjacent-intersection evidence;
- preserve historical topology methods and receipts as historical provenance rather than relabeling them current.

The selected `opening_repair` receiver is `92 vertices / 180 triangles` per side and reports zero boundary, non-manifold, shared-edge-orientation, collapsed-triangle, disconnected-fan and isolated-vertex defects plus zero neutral nonadjacent intersections.

Reusable local pattern name retained by Geometry:

`TOPOLOGY_EDIT_UNUSED_VERTEX_PRUNE_BEFORE_MANIFOLD_CLAIM`

Cartography extracts only the **liveness observation** from this event. Character keeps authority for the actual prune because it can prove the affected entries are derived edit residue rather than source-significant data.

## Current UC gap — shared topology observer sees indexed faces, not unused source entries

Current UC main at scan:

`8eb2fafb329369588198033ea4e14cca4451a6aa`

Current shared observer:

`src/axm_uc/mesh_topology.py::inspect_mesh_topology()`

It already provides bounded deterministic evidence for:

- finite source positions and in-range triangle indices;
- seam-clustered source/welded vertex counts;
- collapsed triangles after positional seam clustering;
- boundary and non-manifold edge incidence;
- shared-edge orientation conflicts;
- edge-connected triangle-component count.

Its current truth boundary explicitly does not establish vertex-manifoldness, self-intersection freedom, deformation quality, collision suitability or visual quality.

The missing fact is narrower: the observer never reports whether each exact source position appears in the validated source triangle index stream. A valid finite position entry with zero triangle references is therefore invisible to the structural report even though `source_vertex_count` includes it.

That matters because `inspect_mesh_topology()` is already shared across several UC fabrication/cutter paths. The gap is in shared observation, not just one Character verifier.

## Internal UC duplication signal — mutation exists locally without a shared truth contract

Fresh code search found at least two independent UC Blender tools that already perform mutating loose-vertex cleanup after deleting bad faces:

- `tools/blender/axm_hero_motion.py` deletes vertices for which `not v.link_faces`;
- `tools/blender/axm_rts_workshop.py` independently performs the same `not v.link_faces` deletion pattern.

This duplication strengthens the case that **vertex liveness is a shared neutral fact**. It does **not** prove that deletion is universally safe: those scripts own their local generated-mesh context, while an arbitrary product/source mesh may intentionally preserve data that the index stream does not currently consume.

A fresh UC issue search found no existing lane owning this exact unreferenced/loose source-vertex observation gap, so Cartography did not duplicate active work.

## Correct shared machinery proposal — UC issue #183

Opened:

- `mike-axiom-mir/axm-universal-creation` **issue #183 — `Proposal: expose unreferenced source-vertex liveness in mesh topology observer`**.

The proposed first shared contract is observer/report-only and preserves current status semantics. Suggested exact evidence fields are:

- `referenced_source_vertex_count`;
- `unreferenced_source_vertex_count`;
- `all_source_vertices_referenced`;
- bounded deterministic `examples.unreferenced_source_vertices` containing exact source indices.

The calculation should operate on the validated source index stream **before positional welding**, so seam duplicates are not mistaken for unused source positions.

The first pass should not silently turn an existing `CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE` receipt into a stronger or weaker historical verdict. A consumer that requires full source-array liveness can explicitly gate on the new evidence and rerun against the successor UC identity.

### Mutator deliberately held

Cartography did **not** propose or author a generic `prune_unreferenced_vertices()` transform.

The current evidence supports observation more strongly than mutation. A future shared mutator should require at least one more materially independent product/receiver case plus an explicit authority/lineage contract proving which unreferenced entries may be removed without changing source meaning.

No UC branch or PR was opened by Cartography; #183 is a placement proposal only.

## Profession Fabric boundary

Profession Fabric issue #38 remains the experimental evidence/provenance procedure home for consumed identities, migration/rebind state, scoped obligations, representation/storage identities, temporal/instrumentation identity and harness-vs-claim verdict separation.

Source-vertex liveness itself is not a profession workflow or provenance judgment. It is deterministic indexed-mesh structural observation and therefore belongs beside UC topology machinery if implemented.

PF does not need another abstraction for this pass. Product/source ownership determines whether a liveness finding authorizes mutation; PF can later record that dependency/decision without becoming the geometry implementation.

## Return to active Character lane

Cartography returned the placement boundary to Character Geometry PR #16 in comment:

`5712458091`

The return preserves the exact `opening_repair`, topology digests, retained CI/artifact and downstream Rigging handoff. It explicitly prevents a future UC observer from retroactively relabeling the current Character receipt as UC-backed.

## Fresh continuity changes preserved without duplication

### UC #182 is now merged

The previous Cartography status recorded UC #182 as draft/unmerged. Fresh scan shows it merged to UC main at:

`8eb2fafb329369588198033ea4e14cca4451a6aa`

The established boundary remains unchanged: UC now supports explicit rectangular verified material bundles as receiver representability machinery; it does not own Object atlas right-sizing, packing, visual acceptance or adoption.

This continuity change does not require a new rectangular-material lane.

### Character Rigging consumes the exact pruned receiver without hiding a new motion boundary

Character Rigging PR #17 explicitly maps Geometry #16's one index-only unused-vertex prune into its vertex-role layout while moving/reordering no retained positions. Its fresh full `-40..+40°` diagnostic then finds nonadjacent intersections beginning at `+37°`, so it truthfully constrains the current sampled structural envelope to `-40..+36°` and keeps `+37°` as an expected-failure witness.

This confirms the Geometry repair did not magically transfer historical Rigging acceptance. It is a downstream rebind, not extra evidence for a generic UC prune transform.

### Building hard-normal quotient remains a different identity problem

Building Hard Surface #14 and Geometry #13 now make the `604` source-authorized hard-normal classes vs `312` attribute-dropping quotient boundary explicit, while Procedural stress evidence covers the single/two/three-normal quotient cohorts. That work concerns which representation identities may be merged; it is not the same as a source vertex with zero face references. Cartography therefore opened no competing indexing/quotient lane.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178 / merged PR #179** — read-only attribute-aware indexed-surface eligibility observation including explicit cross-source attribute/protected-split grouping; no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity; producer quantization/adoption remains separate.
- **UC #182 / merged main `8eb2fafb...`** — explicit rectangular verified material-bundle representability; receiver capability only, not atlas right-sizing/packing/adoption.
- **UC #183 (open proposal)** — source-array vertex-liveness observation in mesh topology; **observer only**, generic pruning/repair held.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG; migration state vs bounded claim verdict; changed/preserved/derived dependencies; parallel representation sets; temporal provenance + observer instrumentation; harness execution vs claim/control verdict; scoped obligations + applicability-domain coverage; logical/semantic payload identity separated from exact storage representation + decode/address mapping identity.

## Explicit non-claims

- No Character source, topology, Rigging or review-006 adoption state was changed by Cartography.
- No Character Geometry PR #16 code/evidence was rewritten; its local prune remains product-owned.
- No UC mesh-topology code was changed by Cartography.
- UC #183 is an open proposal, not implemented machinery.
- No generic source-vertex pruner, mesh cleanup pass, automatic reindexer or repair policy was opened.
- No existing UC manifold-candidate receipt is retroactively upgraded to include source-array liveness.
- No isolated/unreferenced vertex is assumed removable merely because it has zero current triangle references.
- PF #38 remains evidence/provenance procedure only; no geometry logic moved into PF.
- UC #182's merge does not transfer Object Runtime #29 adoption, Art/QA, target-device or product policy.
- No Art/QA verdict, CANON state, production readiness or merge authority moved.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch UC #183 for implementation. If a PR appears, require observer-only scope, source-index-stream liveness before welding, bounded examples, backward-compatible status semantics and explicit regressions for seam duplicates vs truly unused vertices.
- If #183 merges, require exact Character #16 rebind before saying its liveness coverage is UC-backed; preserve current local receipt as historical truth.
- Do not extract a generic prune transform until another materially independent receiving/product case demonstrates safe deletion with explicit lineage/authority.
- Continue watching Object Runtime #30 for a second independent scalar-channel-width case before any shared channel-width transformer.
- Continue watching Object/Building coordinate-reference-frame evidence and prefer PF #38's existing consumed-identity model if it already expresses the dependency cleanly.

## Recovery / provenance

Previous Cartography coordination commit: `d60b7d8d1c512a31296e6b4dcf71db4931506565`.
Previous status blob SHA before this update: `7d3c34213291e2cea49610a1d35c13a8af5afd5b`.