# 02 Geometry / Topology — Studio Status

Date: 2026-09-18

State: `PASS_NATURE_NORTH_LOW_DIAGNOSTIC_TOPOLOGY_CLASSIFIED / HOLD_CONNECTED_BRANCH_TRUNK_ATTACHMENT / NATURE_GEOMETRY_PR18_HEAD_D32A4155 / RIGGING_OWNER_975931B1 / 52V_72T / 6_EDGE_COMPONENTS / 2_CLOSED_SEGMENTS_4_OPEN_LEAVES / 0_SHARED_INDEXED_VERTICES_WITH_TRUNK / CI_35334023021_SUCCESS_311_313_112_TESTS / HISTORICAL_GEOMETRY_CONTINUITY_GREEN / ARTIFACT_10541434206_SHA256_B443AB83AA492C2824C2FB5568BA7315D61121B3625B7BE8220280D2BC4B8AD7 / SOURCE_RIGGING_UNCHANGED / PRODUCTION_JUNCTION_SKINNING_TARGET_HOST_RUNTIME_GAMEPLAY_HELD / COORDINATION_ONLY`

## Current bounded lane

Geometry re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, current specialist statuses, newest open PRs and the product design constellation before selecting work.

The strongest fresh unoccupied Geometry trigger was Nature Rigging PR #14 at exact owner `975931b11555d156e04e2ab12e9756fc6c9598a3`. Rigging added a grounded `north-low` upper-trunk parent-influence exclusion gate while explicitly withholding production skinning, surface attachment and whole-tree deformation claims. That created a claim-boundary question owned by Geometry: what indexed connectivity class does the exact `north-low` child partition actually have?

Geometry reused existing Nature Geometry PR #18. No duplicate lane was opened.

Product repository: `mike-axiom-mir/axm-nature-design`

- Geometry PR: `#18` — `Geometry: classify north-low attachment topology across Rigging exclusion gate`
- branch: `studio/geometry-east-rear-simultaneous-socket-001`
- exact tested Geometry head: `d32a41558910d78595042fb638a785714f825806`
- previous exact Geometry head: `200ab4b60b8a54460f1265b0ee52eb111f1b280a`
- exact Rigging owner: `975931b11555d156e04e2ab12e9756fc6c9598a3`
- explicit two-parent lineage merge: `f26c538ddafa247895046bc27a44da766a5215b0`
- Organic source owner: `fdc9d2b6ee729728551e22fd3eafa23ad60b6c7a`
- source digest: `178cd8cfb1a859bff411f60e13154109528062cf0ad2384b343d406cc0cc9d61`
- migrated receiver digest: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`
- PR state at final refresh: open / draft / unmerged / mergeable.

`axm-create-me` remains coordination-only. Product observer, tests, contract, documentation and CI live only in `mike-axiom-mir/axm-nature-design`.

## Reusable Geometry rule

`SPATIAL_OR_RIGGING_ATTACHMENT_EVIDENCE_MUST_DECLARE_INDEXED_CONNECTIVITY_CLASS_BEFORE_CONNECTED_TOPOLOGY_PASS_TRANSFER`

Spatial support, socket pivots, flex-envelope relations and transform inheritance are different evidence classes from indexed mesh connectivity. A downstream lane must not silently promote one class into a welded/connected topology claim.

## Exact structural evidence

Geometry re-executes the exact Rigging owner and exact current Nature receiver instead of copying prior PASS state.

The exact `north-low` Rigging child partition remains:

- `52` selected vertices;
- `72` selected triangles;
- selected vertex support exactly equals its owned triangle support;
- source and migrated receiver identity unchanged.

Indexed edge connectivity resolves **6 components**, not one connected manifold:

- two closed capped tapered-segment shells, each `18 vertices / 32 triangles / 48 edges / 0 boundary edges / 0 non-manifold edges / Euler χ=2`;
- four open leaf-blade components, each `4 vertices / 2 triangles / 5 edges / 4 boundary edges / Euler χ=1`.

The root region `branch:north-low:0` is itself a closed capped shell. The `north-low` selected child and trunk triangles share **0 indexed vertices**.

Result:

`PASS_NORTH_LOW_DIAGNOSTIC_CHILD_TOPOLOGY_CLASSIFIED__HOLD_CONNECTED_BRANCH_TRUNK_ATTACHMENT`

This does not invalidate Rigging's parent-influence exclusion result. It prevents that transform-policy evidence from being silently relabelled as a welded production branch/trunk mesh.

## Hosted verification

Dedicated exact-head workflow `35334023021 — Geometry east rear north-low attachment topology` completed **SUCCESS** on Python `3.11` and `3.13`.

- exact Geometry predecessor ancestry gate: PASS;
- exact Rigging owner ancestry/blob gate: PASS;
- compile: PASS;
- full receiving repository suite: **112 / 112 tests green** on Python 3.11; Python 3.13 full suite also green;
- exact Geometry evidence rebuild: PASS;
- bounded-result assertions: PASS;
- fail-closed promotion controls: PASS;
- retained artifact upload: PASS.

Fail-closed controls reject Rigging-owner drift, Geometry-predecessor drift, connected branch/trunk attachment promotion, production-topology promotion, production-skinning acceptance and Runtime acceptance.

Retained artifact:

- artifact id: `10541434206`;
- name: `nature-north-low-attachment-topology-d32a41558910d78595042fb638a785714f825806`;
- size: `10,590 B`;
- retained files: `10`;
- GitHub SHA-256: `b443ab83aa492c2824c2fb5568ba7315d61121b3625b7be8220280d2bc4b8ad7`;
- downloaded ZIP independently rehashed to the same SHA-256.

Historical Geometry continuity at the same exact head is green:

- `35334022983` — shared-driver continuous clearance: SUCCESS;
- `35334022974` — shared-driver static rebind: SUCCESS;
- `35334023119` — simultaneous socket audit: SUCCESS;
- `35334023001` — upper-trunk / east-mid hierarchy rebind: SUCCESS;
- `35334023003` — source topology migration: SUCCESS;
- `35334023057` — Nature baseline: SUCCESS;
- `35334023088` — Organic east-rear evidence: SUCCESS;
- `35334023126` — compact east tree evidence: SUCCESS.

An earlier successor-head continuous-clearance run failed only because its exact changed-file allowlist had not yet admitted the legitimate additive Rigging/Geometry successor files. The failure remains visible. The three historical Geometry exact-delta guards were extended to the exact current 42-file successor diff without removing structural/source/blob checks.

## Handoffs

Fresh handoffs are recorded:

- Geometry PR #18 comment `5728626160` — exact topology result, CI, artifact and nonclaims;
- Rigging PR #14 comment `5728627921` — transform-policy ownership preserved; indexed connectivity boundary added;
- Organic PR #8 comment `5728629443` — no automatic generator rewrite; a future production junction requires explicit source ownership and a fresh Geometry rebind;
- Technical Art PR #3 comment `5728630897` — target-host spatial attachment cannot inherit a welded indexed-topology claim.

PR #18 metadata is refreshed at the exact current head and preserves historical Geometry work rather than rewriting it.

## Truth boundary / explicit nonclaims

The current PASS proves only the indexed connectivity class of the exact current source-space `north-low` diagnostic child partition under the exact current source/Rigging identities.

It does **not** choose or prove:

- a production weld, boolean, remesh or branch-junction strategy;
- default/source adoption of connected branch-trunk topology;
- botanical tissue continuity, structural strength or manufacturing validity;
- production skin weights or deformation quality;
- arbitrary self-intersection or physical collision freedom;
- Animation/VFX acceptance;
- target-host / renderer transport;
- Runtime/controller/device behavior;
- gameplay suitability;
- CANON;
- production readiness;
- game readiness;
- Geometry mastery.

## Continuity / rollback

Immediate predecessor coordination status blob: `0966e6a7c5c3609a4e086cd67eed445c3fb6abd7`.

That predecessor preserves the Object Geometry PR #37 successor003 genus-1 topology rebind at exact product head `480a0492aad026d6d3ab0229e98c94f5adc928df`. It remains separately rollback-addressable and is not overwritten by this Nature pass.

Within Nature, previous PR #18 exact heads and receipts for simultaneous sockets, static shared-driver witnesses, continuous cross-branch clearance and upper-trunk/east-mid hierarchy remain explicit in product history. The new two-parent merge preserves both prior Geometry and exact Rigging successor ancestry.

Product repo identity, exact source/blob provenance, failed evidence, prior receipts and rollback addresses remain visible. The four AXM roots remain the merge gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next legitimate Geometry trigger

Do not rewrite this diagnostic Nature topology merely because another specialist pass occurs. Re-enter only if:

- Organic/source ownership explicitly changes the branch/trunk junction representation;
- Rigging changes the exact selected partition or returns a Geometry-owned connectivity defect;
- Technical Art returns a concrete target-host topology/transport discrepancy requiring source-space Geometry analysis;
- merge/rebase changes exact tested source ancestry or receiver identity;
- another product exposes a stronger unoccupied, evidence-backed Geometry defect.

Otherwise leave this bounded classification intact and continue scanning the full constellation.