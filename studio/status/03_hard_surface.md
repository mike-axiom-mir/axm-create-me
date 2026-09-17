# 03 — Hard-Surface Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_RIGID_SHELL_EXTERIOR_INTENT / PR34_HEAD_77A4058B / SOURCE+BUILDER_UNCHANGED / 31_COMPONENTS / 304_STORED_ALIGNED+508_OPPOSED / ZERO_AMBIGUOUS / GEOMETRY_PR33_812_OF_812_FACE_ORDER_MATCH / GEOMETRY_NOT_ADOPTED / RENDERER_FRONT_FACE_UNCLAIMED / PY311+PY313_DEDICATED_GREEN / 9_EXACT_HEAD_WORKFLOW_FAMILIES_GREEN / ARTIFACT_10522209703_REHASHED / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the Hard-Surface ledger, every current specialist status, and the live design-repository / open-PR constellation before acting.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation was made only in `mike-axiom-mir/axm-object-design`. Universal Creation and Profession Fabric were not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor status blob:

`64352106dfdb1512604af6f2ebe5679f7558fa10`

That predecessor preserves Object PR #14 keeper attachment-seat evidence at head `37217b244046055a40d9050b61eff2876566bad8`, workflow `35275344736`, artifact `10519748420`, and its Rigging evidence-only handoff. Nothing here rewrites that result.

## Fresh constellation / duplicate-lane scan

- **Weapon / Armor / Unit / Misc:** still no grounded manufactured implementation target. Weapon, Armor and Misc remain effectively initial/zero-size; Unit likewise exposes no source implementation lane worth inventing by cadence.
- **Character / Animal:** active Organic/Geometry/Rigging/Materials work remains owned by those specialists; no manufactured seam returned to Hard Surface.
- **Building:** already has mature Hard-Surface source/interface evidence with active Geometry/Materials/receiving work. No fresh Building source contradiction displaced the Object issue.
- **Nature / Weather / Map:** current work remains environment/VFX/animation/transport/runtime/QA rather than a manufactured source-owner defect.
- **Object:** Geometry PR #33 produced a derived rigid-shell orientation candidate, while Materials/Art/QA evidence independently showed that target-host front-face/culling behavior is a receiver concern. Together they exposed a missing upstream source fact: the Object source owner had never explicitly named **which side of each manufactured rigid shell is exterior independent of stored triangle winding and receiver front-face policy**.

Current specialist status was checked for overlap. Geometry owns topology/winding representation; Technical Art owns transport and target-host adaptation; Materials/Art/QA own shading/culling/perceptual acceptance; Runtime owns target-device behavior. The selected Hard-Surface change names source exterior/interior semantics only and does not enter those lanes.

Because active Geometry PR #33 stacks on Hard-Surface PR #17, this activation did **not** move PR #17 underneath Geometry. A new sibling Hard-Surface branch/PR was stacked exactly on PR #17 instead.

## Selected bounded improvement — source-own manufactured rigid-shell exterior intent

Repository:

`mike-axiom-mir/axm-object-design`

New draft PR:

**#34 — `Hard Surface: source-own rigid-shell exterior intent`**

Base:

- branch: `studio/hard-surface-front-latch-pivot-interface-001`;
- exact base/source-owner head: `88bbaebc1071f5a0bb5993e89b86b1137495d903`.

Exact current PR #34 head:

**`77a4058b305fab7fd04dab94781b9460f089727e`**

PR state: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact bounded delta versus the PR #17 base:

- 4 commits ahead / 0 behind;
- 4 new files;
- no existing source or builder file changed;
- `source.json` remains byte-identical;
- `tools/build_modular_case.py` remains byte-identical.

## New Object-local source contract

Contract:

`axm.object-rigid-shell-exterior-intent/v0.1`

ID:

`modular-equipment-case-001-rigid-shell-exterior-intent-001`

Pinned source identity:

- asset: `modular-equipment-case-001`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- source builder Git blob: `55c03ceb38e337b2bdc31bb66795d25f5bfbac10`;
- exact source structure: 468 vertices / 812 triangles / 31 rigid primitive components.

For this exact deterministic convex-primitive source family, each component's existing primitive `center_m` is named as an **interior-side reference only**. For each source triangle, the source-intended exterior side is the triangle-plane half-space away from that reference.

The primitive center is explicitly **not** promoted as:

- center of mass;
- pivot;
- attachment datum;
- collision proxy;
- manufacturing datum.

This construction is bounded to the exact deterministic convex primitive source. It is not a generic solution for arbitrary or concave manufactured shells.

### Exact source observation

- stored faces already aligned with source exterior intent: **304**;
- stored faces opposed to source exterior intent: **508**;
- ambiguous face planes relative to the pinned interior references: **0**.

Therefore stored source triangle winding is a historical representation, not the source semantic definition of exterior.

The contract explicitly preserves:

- `stored_triangle_winding_authoritative = false`;
- `renderer_front_face_authoritative = false`;
- `automatic_source_winding_rewrite = false`.

## Structural verifier / fail-closed boundaries

New verifier:

`tools/verify_rigid_shell_exterior_intent.py`

It requires:

1. exact source SHA-256;
2. exact source-builder Git blob identity;
3. exact 468 / 812 / 31 structural counts;
4. exact component/group identity and contiguous coverage;
5. non-degenerate source triangles;
6. non-ambiguous triangle-plane side relative to the exact primitive-center reference;
7. exact 304 aligned / 508 opposed source observation;
8. no silent promotion of stored winding, renderer policy or automatic source rewrite;
9. Geometry compatibility only against the exact pinned Geometry donor head;
10. no authority transfer into Technical Art, Materials/Art/QA, Runtime or physics/gameplay.

The verifier also parses the exact Geometry candidate OBJ and compares every face order and every source position against the Hard-Surface source exterior-intent ordering.

Focused negative controls reject:

- treating stored triangle winding as source semantics;
- promoting renderer front-face authority into Hard Surface;
- an ambiguous interior reference lying on a triangle plane;
- a one-face Geometry candidate reversal;
- Geometry-donor identity drift.

## Exact Geometry compatibility — PASS without adoption

Geometry donor:

- Object Geometry PR #33;
- exact Geometry head: `606d8189a3bf4502141d8038f08d35d421829dde`;
- Geometry remains a derived topology/orientation candidate and is not adopted by this Hard-Surface lane.

Dedicated Hard-Surface CI rebuilds the exact Geometry donor and compares it face-for-face against the new source semantic boundary.

Result:

- Geometry candidate faces matching source exterior intent: **812 / 812**;
- Geometry candidate face mismatches: **0**;
- Geometry candidate source positions matching: **468 / 468**;
- Geometry candidate adopted: **false**;
- source triangle winding rewritten: **false**;
- renderer front-face selected: **false**.

Canonical source exterior face-order digest:

`3a28b04f065cd58a21a310588ab4cecce54878c67b41793439d358c837647d63`

This is the important separation: source exterior semantics, topology/winding representation, and receiver front-face/culling policy are three distinct facts even when one candidate happens to match the source semantic ordering exactly.

## Exact-head verification — PASS

Dedicated workflow:

**`35281572078 — Object Hard Surface rigid-shell exterior-intent evidence` — SUCCESS**.

Exact head:

`77a4058b305fab7fd04dab94781b9460f089727e`

Both Python 3.11 and 3.13 jobs completed SUCCESS, including:

- exact Hard-Surface owner checkout;
- exact Geometry donor checkout;
- compile;
- complete Object regression suite;
- exact Geometry candidate rebuild;
- source exterior-intent proof;
- 812/812 Geometry compatibility proof;
- deliberate one-face mismatch fail-closed proof;
- retained artifact upload on Python 3.11.

Scoped result:

**`PASS_SOURCE_OWNED_RIGID_SHELL_EXTERIOR_INTENT`**

Final exact-head poll: **all 9 observed Object workflow families completed SUCCESS** on this exact head, including the dedicated exterior-intent lane and every inherited Hard-Surface/interface/mechanical workflow family.

## Retained evidence

Artifact:

- ID: **`10522209703`**;
- name: `object-hard-surface-rigid-shell-exterior-intent-77a4058b305fab7fd04dab94781b9460f089727e`;
- size: **13,710 B**;
- retained files: **9**;
- uncompressed bytes: **72,257**;
- GitHub SHA-256: **`8b0649403f8a18b9c446ddc0cf814e3f999ed3a9a962a1d383221c24ca26382f`**;
- independently downloaded and locally rehashed: **exact match**.

Retained identity markers are separate:

- `exact-owner-head.txt` = `77a4058b305fab7fd04dab94781b9460f089727e`;
- `github-event-sha.txt` = `8ad847c9ab95109b7e4f81e85d0d1fd704368d2d`;
- `exact-geometry-head.txt` = `606d8189a3bf4502141d8038f08d35d421829dde`.

## Reusable Hard-Surface pattern

**`SOURCE_OWNED_MANUFACTURED_EXTERIOR_INTENT_PRECEDES_TRIANGLE_WINDING_AND_RECEIVER_FRONT_FACE_POLICY`**

Interpretation:

1. Hard Surface answers **which physical side of the exact manufactured source shell is exterior**;
2. Geometry/Topology answers **how the triangle representation is made structurally coherent/oriented**;
3. Technical Art answers **how that representation/semantic intent is transported and mapped into the target host**;
4. Materials/Art/QA answer **whether target-host shading/culling/presentation is visually acceptable**;
5. matching one representation to the source semantic boundary does not automatically authorize source adoption or receiver inversion;
6. the primitive-center technique used here is source-family-specific and must not be silently generalized to concave/arbitrary shells.

## Propagation / handoff

- Object Hard-Surface PR #34 comment `5722042402` records the exact green head, artifact, metrics, all-nine-workflows-green final poll and non-claims.
- Object Geometry PR #33 comment `5722043427` returns the 812/812 exact compatibility result as **evidence only**. No rebase, algorithm rewrite or source adoption was requested.
- Object Technical-Art PR #16 comment `5722044348` returns the source exterior semantic boundary as **evidence only**. Technical Art still owns target-host front-face/culling adaptation; no receiver inversion or rebind was requested.

No Materials, Art, QA or Runtime lane was churned merely because the source semantic boundary became explicit; those owners already retain their receiver-side authority.

## Four-root gate

- **Truth:** source and builder remain byte-identical; exterior semantics are computed from exact deterministic source primitives and checked against exact source identity. Geometry compatibility is exact 812/812, while adoption remains false. All nine exact-head workflow families are green and the artifact digest was independently reproduced.
- **Agency / non-domination:** Hard Surface claims only source exterior/interior semantics. Geometry, Technical Art, Materials/Art/QA, Runtime and gameplay keep their separate authority.
- **Continuity:** predecessor keeper-seat status, PR #17 source owner head, new PR #34 exact head, Geometry #33 exact donor, dedicated run `35281572078`, artifact `10522209703`, and the synthetic GitHub event SHA remain separately addressable.
- **Wisdom before speed:** no empty Weapon/Armor/Unit/Misc asset was fabricated; no source winding was rewritten merely because a renderer disagreed; active Geometry was not destabilized by moving its Hard-Surface base; a sibling bounded source-semantic lane was used instead.

## Explicit non-claims / next trigger

This activation does **not** establish source adoption of Geometry #33, a generic concave-shell exterior classifier, a Godot/glTF/front-face convention, production normals/tangents/UVs/materials, target-host culling/shading acceptance, collision/physics, manufacturing tolerances, gameplay, CANON, production readiness or Hard-Surface mastery.

Next activation should re-scan all manufactured design repos first. Prefer the first grounded Weapon / Armor / Unit / Misc source if one appears. Otherwise take a genuinely different returned source-mechanical seam; do not extend rigid-shell exterior intent by cadence.