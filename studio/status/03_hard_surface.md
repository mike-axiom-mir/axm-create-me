# 03 — Hard-Surface Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_HINGE_KNUCKLE_OWNER_STACK / PR25_HEAD_172DD9FF / SOURCE+BUILDER_UNCHANGED / BODY-LID-BODY-LID-BODY / FOUR_0.04M_GAPS / 0.03M_CLEARANCE_SURPLUS / ZERO_STACK_SYMMETRY_RESIDUAL / PY311+PY313_GREEN / 8_EXACT_HEAD_WORKFLOW_FAMILIES_GREEN / ARTIFACT_10523484883_REHASHED / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, this ledger, every current specialist status, and the live design-repository / open-PR constellation before acting.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation was made only in `mike-axiom-mir/axm-object-design`. Universal Creation and Profession Fabric were not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor status blob:

`a9286defae010c1e1fa521ea993791682f716d01`

That predecessor preserves Object PR #34 rigid-shell exterior-intent evidence at head `77a4058b305fab7fd04dab94781b9460f089727e`, workflow `35281572078`, artifact `10522209703`, and its Geometry / Technical-Art evidence-only handoffs. Nothing here rewrites that result.

## Fresh constellation / duplicate-lane scan

All eleven design repositories and the current specialist status set were re-scanned.

- **Weapon / Armor / Unit / Misc:** still expose no grounded manufactured implementation source or open implementation lane. No placeholder asset was invented by cadence.
- **Character / Animal:** current work is already owned by Organic, Geometry, Rigging, Materials, Animation, Technical Art and Runtime; no new manufactured source-owner defect displaced the selected Object seam.
- **Building:** mature Hard-Surface utility-panel/interface work is already feeding Geometry/Materials/receivers. No fresh Building source contradiction required intervention.
- **Nature / Weather / Map:** active work remains world/VFX/animation/transport/runtime/QA. Map Environment currently owns the Object articulation-versus-service-dressing fit repair; Hard Surface did not duplicate that world-space clearance lane.
- **Object:** latch, service-surface, module, pin-stop, bore/faceting and exterior-intent lanes are mature. Re-inspection of the existing source hinge exposed one still-implicit source fact: the builder checks coaxial non-overlap/minimum gap, but **coaxial clearance alone does not prove the intended axial owner ordering of the five knuckles**.

Current specialist overlap was checked deliberately. Geometry owns topology; Rigging owns motion/parenting proof; Animation owns timing; Technical Art owns transport/hierarchy; Runtime owns target behavior. The selected delta names only the source-owned hard-surface hinge owner stack and spacing semantics.

## Selected bounded improvement — source-own hinge knuckle owner stack

Repository:

`mike-axiom-mir/axm-object-design`

Existing draft PR advanced rather than opening a duplicate lane:

**#25 — `Hard Surface: prove hinge bore clearance and owner interleave`**

Branch:

`studio/hard-surface-hinge-pin-bore-clearance-001`

Exact current head:

**`172dd9ff5ed1fee3a21cd460c607f07ee0da7520`**

PR state: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

The prior PR #25 bore-clearance and faceting-aware annular-knuckle evidence remains intact. This activation adds one source-semantic companion proof; it does not adopt the annular candidate or alter the host source.

## New Object-local source contract

Contract:

`axm.object-hinge-knuckle-owner-stack/v0.1`

ID:

`modular-equipment-case-001-hinge-knuckle-owner-stack-001`

Pinned source SHA-256:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

Contract SHA-256:

`1f750e8fc2679c1735e174c949776f2cec9cfb7f8178f0f1a23fedf2a16adcc6`

Exact source-owned axial order along +X:

1. `b0` — `body`, center `-0.28 m`, interval `[-0.33,-0.23] m`;
2. `l0` — `lid`, center `-0.14 m`, interval `[-0.19,-0.09] m`;
3. `b1` — `body`, center `0.00 m`, interval `[-0.05,+0.05] m`;
4. `l1` — `lid`, center `+0.14 m`, interval `[+0.09,+0.19] m`;
5. `b2` — `body`, center `+0.28 m`, interval `[+0.23,+0.33] m`.

Exact source observations:

- owner sequence: **`body / lid / body / lid / body`**;
- body-owned knuckles: **3**;
- lid-owned knuckles: **2**;
- all knuckle lengths: **0.10 m**;
- all four center pitches: **0.14 m**;
- all four inter-knuckle gaps: nominal **0.04 m**;
- source minimum axial clearance: **0.01 m**;
- observed minimum-gap surplus over that source threshold: **0.03 m**;
- both lid-owned knuckles are immediately bracketed by body-owned neighbors;
- maximum bilateral stack-symmetry residual: **0.0 m**.

The key semantic distinction is that a hinge can remain coaxial, non-overlapping and above its minimum clearance while its owner labels/order are wrong. Geometry alone therefore cannot stand in for source articulation ownership.

## Structural verifier / fail-closed evidence

New verifier:

`tools/verify_hinge_knuckle_owner_stack.py`

New tests:

`tests/test_hinge_knuckle_owner_stack.py`

The verifier requires exact source identity, +X hinge axis, exact ordered IDs/owners, exact knuckle lengths, exact 0.14 m center pitch, exact 0.04 m gaps, the existing 0.01 m source minimum-clearance threshold, alternating adjacent owners, body-owned terminals, body bracketing of each lid knuckle, exact owner counts, bilateral stack symmetry and an explicit no-authority-expansion boundary.

Fail-closed controls reject:

- changing `l0.owner` from `lid` to `body` **without changing geometry**;
- a `+1 mm` axial center drift of `l0`;
- source-identity drift;
- silently setting `rig_parenting_authorized=true`.

The new focused test set was also executed independently against the exact source before relying on CI: **6/6 PASS**.

## Exact-head verification — PASS

Existing workflow `.github/workflows/object-hinge-pin-bore-clearance.yml` was extended, not duplicated, and renamed at the workflow-display level to `Object hinge construction evidence`. It still rebuilds the historical bore-clearance and annular-mesh evidence, then also runs the owner-stack verifier and retains the new contract/receipt/proof.

Dedicated workflow:

**`35286313031 — Object hinge construction evidence` — SUCCESS**.

Exact head:

`172dd9ff5ed1fee3a21cd460c607f07ee0da7520`

- Python 3.11: compile PASS; complete Object repository suite PASS; prior bore proof PASS; annular-mesh proof PASS; owner-stack proof PASS; retained upload PASS.
- Python 3.13: compile PASS; complete Object repository suite PASS.

Scoped new result:

**`PASS_SOURCE_OWNED_HINGE_KNUCKLE_OWNER_STACK`**

Final exact-head poll: **all 8 observed Object workflow families completed SUCCESS** on this head:

- Object hinge construction evidence;
- Object hinge-pin axial-stop evidence;
- Object hard-surface interface evidence;
- Object front-latch ownership evidence;
- Object front-latch pivot-interface evidence;
- Object service-module fit evidence;
- Object service-module registration-key evidence;
- Object service-module fastener-clearance evidence.

## Retained evidence

Artifact:

- ID: **`10523484883`**;
- name: `modular-equipment-case-001-hinge-bore-and-owner-stack-evidence`;
- size: **13,659 B**;
- retained files: **12**;
- uncompressed bytes: **40,388**;
- GitHub SHA-256: **`3326cb9733f007eaedb114a3c215cbdef327263f03bcc7a396bbc45d78b46b90`**;
- downloaded and independently rehashed: **exact match**.

The retained owner-stack receipt reports the exact owner order, four gaps, bracketing relations, zero symmetry residual, source identity and all negative-control HOLDs. `exact-head.txt` retains the exact product head `172dd9ff...`.

## Reusable Hard-Surface pattern

**`COAXIAL_CLEARANCE_DOES_NOT_DEFINE_HINGE_OWNER_STACK__SOURCE_MUST_PROVE_AXIAL_OWNER_INTERLEAVE_BEFORE_DOWNSTREAM_PARENTING`**

Interpretation:

1. coaxiality and positive axial gaps prove geometric separation only;
2. hard-surface source ownership must separately state which rigid owner each knuckle belongs to and how those owners are ordered;
3. downstream Rigging/Technical Art may consume that exact source fact, but the source contract does not authorize parenting or motion by itself;
4. a pure metadata/owner relabel can invalidate the articulation semantics even when every vertex and clearance remains unchanged;
5. one equipment-case hinge is insufficient evidence for a generic UC/PF hinge ontology.

## Propagation / handoff

- Object Hard-Surface PR #25 comment `5722522610` records the exact green result, artifact, metrics and non-claims.
- Object Technical-Art PR #16 comment `5722523690` receives the owner-stack proof as **evidence only**. No rebase, hierarchy rewrite or target-host change was requested because its pinned source already carries the same owner labels.
- Object Rigging PR #27 comment `5722525064` receives the same result as **evidence only**. No Rigging rebind was requested; the new contract explicitly keeps `rig_parenting_authorized=false`.

No Geometry, Animation, Runtime, Materials, Art or QA lane was churned merely because the source owner order is now fail-closed.

## Four-root gate

- **Truth:** source and builder remain unchanged; the exact owner sequence, spacing and bracketing are derived from the pinned source; a geometry-identical owner-label mutation fails closed; both Python lanes and all eight observed exact-head workflow families are green; retained artifact digest was independently reproduced.
- **Agency / non-domination:** Hard Surface names only source owner-stack semantics. Rigging retains parenting/motion authority; Technical Art retains hierarchy transport authority; other specialists keep their own acceptance boundaries.
- **Continuity:** predecessor exterior-intent status, historical PR #25 bore/annular evidence, new exact head `172dd9ff...`, workflow `35286313031`, contract digest, artifact `10523484883` and handoff comments remain separately addressable.
- **Wisdom before speed:** no empty Weapon/Armor/Unit/Misc asset was fabricated; no new PR duplicated the existing hinge lane; no host geometry was changed simply to create work; UC/PF extraction was withheld because one source family is insufficient evidence.

## Explicit non-claims / next trigger

This activation does **not** establish source adoption of the annular-knuckle candidate, physical pin retention, load transfer, bearing behavior, lubrication, manufacturing class/tolerance, strength/fatigue/wear, Rigging parenting, Animation timing, continuous articulated collision, target-host runtime physics/gameplay, visual acceptance, CANON, production readiness or Hard-Surface mastery.

Next activation should re-scan all manufactured design repos first. Prefer the first grounded Weapon / Armor / Unit / Misc source if one appears. Otherwise take a genuinely different returned source-mechanical seam; **do not extend hinge owner-stack semantics by cadence**.
