# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_FACETING_AWARE_ANNULAR_KNUCKLE_REVIEW_MESH / OBJECT PR #25 EXACT HEAD VERIFIED / CLOSED ORIENTED CANDIDATE TOPOLOGY / HOST SOURCE UNCHANGED / NO SOURCE ADOPTION / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist state, source files and open design PRs before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation remains in `mike-axiom-mir/axm-object-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Object result remains preserved in Git history: exact PR #25 head `e790eac8d9f9e40d77d7ffe944fb036ccb6cf4e5` proved the analytic `axm.object-hinge-pin-bore-clearance/v0.1` review envelope without changing the host source. This activation does not relabel or erase that result; it adds a stricter mesh-realization check on top of it.

## Fresh constellation / duplication scan

Weapon, Armor, Unit and Misc still expose no stronger implementation-ready manufactured source requirement. Character and Animal remain primarily organic/geometry/rigging owned. Building already has active Hard-Surface source topology/producer/header work with downstream Procedural, Materials and Map consumers. Nature and Weather remain procedural/VFX/runtime-led. Map is receiving those domain outputs rather than owning a new manufactured source. Object is dense, so latch, Rigging, Animation, Materials, Technical Art and Runtime lanes were not duplicated.

A concrete Hard-Surface gap did remain inside existing Object PR #25 itself: the prior `0.010 m` bore was an **analytic radius envelope**, while the exact host hinge is constructed from regular **12-segment** cylinders. A nominal `0.001 m` circumradius difference between pin and bore therefore does not automatically equal `0.001 m` of actual polygon-surface clearance.

That is a direct manufactured-modeling issue, not a reason to source-adopt the bore or invent another asset.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#25 — `Hard Surface: bound hinge pin bore-clearance envelope`**

Branch: `studio/hard-surface-hinge-pin-bore-clearance-001`

Exact base remains Hard-Surface PR #24 head:

`9582cd72d69a7fd7b7fc220f40f3d4781d9d03ed`

Exact current PR #25 head:

**`584a6b0078c7e9c60f214dc87d5427d3126421e2`**

PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

## Gap measured before changing

Exact unchanged host facts retained from the source:

- asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- hinge axis: `+X`;
- five knuckles;
- source knuckle outer circumradius: `0.021 m`;
- source pin circumradius: `0.009 m`;
- exact source segmentation: `12`;
- previous analytic review bore radius: `0.010 m`;
- previous bore contract SHA-256: `4dacff22053c39fcd037cdb568480dafdf78e52b18b9994965f1c396b344f4d7`.

For same-phase regular 12-gons, the minimum facet-normal separation from a `0.001 m` circumradius delta is:

`0.001 * cos(pi/12) = 0.0009659258262890691 m`.

So the previous `0.010 m` analytic envelope remains truthful as a radial review envelope, but if materialized directly as a 12-gon bore it would provide only about **0.966 mm** minimum mesh-surface gap, not a full `1.000 mm`.

The shortfall is about **0.034074 mm**. This is the bounded issue repaired here.

## Bounded repair performed

PR #25 now also adds Object-local:

**`axm.object-hinge-pin-annular-mesh/v0.1`**

The host source remains byte-identical and the previous analytic bore contract remains a pinned prerequisite rather than being silently replaced.

The derived review mesh uses the exact source axis, five knuckle centers/lengths/owners, outer radius and 12-segment identity, but compensates the bore circumradius for polygon faceting:

- analytic review bore radius: `0.010 m`;
- faceting-aware mesh bore circumradius: **`0.010035276180410082 m`**;
- compensation delta: **`0.00003527618041008172 m`**;
- retained minimum mesh pin-to-bore surface clearance: **`0.0009999999999999996 m`**;
- retained minimum faceted knuckle wall: **`0.010591109915468822 m`**.

The candidate is emitted as five actual annular +X knuckle shells plus retained OBJ/receipt/SVG evidence. This is still a **derived review candidate only**, not a host-source successor.

## Exact structural result — PASS

Dedicated workflow:

**`35139841030 — Object hinge-pin bore-clearance evidence` — COMPLETED / SUCCESS**

Exact checkout/head:

`584a6b0078c7e9c60f214dc87d5427d3126421e2`

Python 3.11 and Python 3.13 both passed compile plus the complete Object unittest suite. Python 3.11 ran **43 tests**, generated the historical analytic bore receipt, generated the new annular mesh candidate and retained the evidence package.

Scoped results:

**`PASS_DERIVED_ANNULAR_KNUCKLE_MESH_FACET_CLEARANCE`**

**`PASS_CLOSED_ORIENTED_ANNULAR_KNUCKLE_TOPOLOGY`**

Exact retained candidate facts:

- five intended disconnected annular knuckle shells;
- `240` vertices total;
- `480` triangles total;
- each knuckle: `48` referenced vertices / `96` triangles / one edge-connected shell;
- aggregate boundary edges: `0`;
- aggregate non-manifold edges: `0`;
- aggregate orientation conflicts: `0`;
- aggregate degenerate triangles: `0`;
- aggregate triangle components: `5`, matching the five separate knuckles;
- host source geometry changed: `false`;
- source adoption: `false`.

## Fail-closed controls

The retained proof rejects:

- the uncompensated `0.010 m` 12-gon bore because its observed minimum surface gap is only `0.0009659258262890691 m`;
- a single reversed candidate triangle, which produces orientation conflicts;
- bore-contract identity drift;
- host-source identity drift and source segmentation/knuckle-count drift through the prerequisite and mesh validation path.

This protects the distinction between an ideal-radius review envelope and a real faceted mesh realization.

## Retained evidence

Artifact:

- ID: **`10464194086`**;
- name: `modular-equipment-case-001-hinge-pin-bore-clearance-evidence`;
- size: **`10,978 bytes`**;
- exact workflow head: `584a6b0078c7e9c60f214dc87d5427d3126421e2`;
- GitHub SHA-256: **`60ac218a679ec7d8fd62690d96b20c39dc37b31f84abed5723f8d2ba180c7dba`**;
- annular-mesh contract SHA-256: `29dded2a32239bec9d46142965174725ad5f5310d0f59644c458d29ab20cf093`;
- prerequisite bore contract SHA-256: `4dacff22053c39fcd037cdb568480dafdf78e52b18b9994965f1c396b344f4d7`.

The ZIP was downloaded after CI and independently rehashed to the exact GitHub digest above. It contains nine retained files including the exact head, host source, both contracts, both receipts, both SVG proofs and the generated annular-knuckle OBJ.

## Provenance / handoff

PR #25 received exact-result comment `5703220472` with the new mesh result, workflow, artifact and non-claims.

No existing Rigging, Animation, Materials, Technical Art, Runtime or Map claim was silently upgraded. Their current source evidence remains truthful because the host source did not change. If a bored-knuckle source successor is intentionally adopted later, consumers that depend on actual knuckle geometry must explicitly rebind/rerun.

No Universal Creation or Profession Fabric code was changed. The reusable lesson — regular-n-gon faceting can make nominal radius clearance larger than the actual minimum surface clearance — remains Object-local because only one retained source currently demonstrates the need. A second independent domain occurrence would be stronger evidence for generic extraction.

## Truth boundary / non-claims

This PASS proves only that one exact source-bound derived annular knuckle mesh can preserve at least the declared `1 mm` geometric pin-to-bore surface gap under the exact 12-segment same-phase construction while retaining more than the declared `10 mm` minimum faceted knuckle wall, and that the five candidate shells pass the stated edge/topology checks.

It does **not** establish:

- host-source adoption of bored knuckles;
- source pin topology repair or pin production geometry;
- manufacturing tolerance, class of fit or tolerance stack;
- bearing behavior, friction, lubrication or damping;
- retention force, strength, fatigue, wear, sealing or service procedure;
- CAD/boolean validity or machinability;
- full articulated collision freedom;
- runtime physics, gameplay or controller behavior;
- final bevels, normals, UVs, materials or visual acceptance;
- a generic UC hinge/bearing/faceting contract;
- Profession Fabric promotion, CANON, merge authority, production readiness, game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** the prior analytic PASS remains valid in its exact scope, while the newly exposed 12-gon realization shortfall is measured explicitly rather than hidden by the nominal radius delta.
- **Agency / non-domination:** host source remains unchanged; the annular mesh is a review candidate only; no downstream source migration is forced.
- **Continuity:** the new mesh contract pins both the exact host source and the previous bore contract, so the proof extends lineage instead of silently replacing it.
- **Wisdom before speed:** one small but real manufactured-geometry discrepancy was corrected with retained evidence without broad UC abstraction, source churn or speculative new assets.

## Next Hard-Surface pass

Re-scan the full constellation first. Do **not** automatically source-adopt this annular bore or continue Object just because the derived mesh is green. Prefer a different concrete manufactured weakness when current evidence exposes one. A bored-knuckle source successor should happen only when an actual downstream visual, target-host, collision or production need justifies the provenance fan-out and explicit consumer rebinding.
