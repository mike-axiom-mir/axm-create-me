# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_SOURCE_OWNED_LID_INNER_SURFACE_IDENTITY / OBJECT PR #26 EXACT HEAD VERIFIED / MATERIAL UNASSIGNED / HOST GEOMETRY UNCHANGED / MATERIALS REBIND AVAILABLE / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist status, newest design PRs/status, the Object source builder, Materials review evidence and current Art/QA boundaries before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation is in `mike-axiom-mir/axm-object-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior Object PR #25 annular-hinge PASS remains preserved in Git history. This activation did **not** source-adopt the bore candidate or continue hinge work automatically.

## Fresh constellation / duplication scan

Weapon and Armor currently have no open implementation lane exposing a stronger manufactured source requirement. Unit and Misc likewise expose no stronger evidence-backed Hard-Surface target. Character and Animal are dominated by active Organic / Geometry / Rigging successor work; Hard Surface would duplicate ownership there. Building already has source-owned topology, producer-interface and header-segmentation work with downstream consumers still rebinding. Map, Nature and Weather remain receiving/procedural/VFX/runtime-led.

Object is busy, but Materials PR #6 exposed a new **source-ownership handoff** rather than another competing mechanism lane: its current real-Godot inner-lid review deliberately targets `lid_shell / source_local_min_z_face`, while explicitly stating that the review face split is not source-owned and that Hard Surface must author the production surface identity if the candidate ever advances.

Art Direction and Visual QA have **not** approved the `service_dark` material choice. Therefore the correct Hard-Surface action was not material adoption. The bounded gap was the missing manufactured **surface semantic** itself.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

New draft PR: **#26 — `Hard Surface: source-own lid inner surface identity`**

Branch: `studio/hard-surface-lid-inner-surface-identity-001`

Exact base: Hard-Surface PR #17 head:

`6086f39a3da344c57a68653f90d040e03e04cec2`

Exact current PR #26 head:

**`e67353416209604aa50ad3ba57f71336f4384349`**

PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

## Source-owned semantic added

Object-local contract:

**`axm.object-hard-surface-surface-identity/v0.1`**

Exact identity:

- asset: `modular-equipment-case-001`;
- unchanged host-source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- surface ID: `lid_inner_service_surface`;
- owner component: `lid_shell`;
- required role: `lid_shell`;
- required kind: `box`;
- exact selector: `source_local_min_z_face`;
- semantic: `interior_service_surface`;
- Hard-Surface material assignment: **UNASSIGNED**;
- Materials review candidate adopted: **false**.

The contract pins the exact Materials review provenance instead of pretending Hard Surface discovered the need independently:

- Materials PR #6 head: `8e92324648d837a92b7c3e0b1107df1f58f9aa61`;
- path: `lookdev/inner_lid_surface_review_001.json`;
- Git blob: `cc90cd2c4c0f8eaf6b93d190436bc278c0fa1c83`;
- review selector: `source_local_min_z_face`.

That donor supplies the repeated need only. No material preference, Art/QA acceptance or runtime claim is inherited.

## Exact structural result — PASS

Dedicated workflow:

**`35145723350 — Object lid inner-surface identity evidence` — COMPLETED / SUCCESS**

Python 3.11 and 3.13 both passed compile and the complete Object unit-test suite. All inherited Hard-Surface/Object workflow families on the same exact head also completed SUCCESS:

- Object hard-surface interface evidence;
- Object service-module fit evidence;
- Object service-module registration-key evidence;
- Object service-module fastener-clearance evidence;
- Object front-latch ownership evidence;
- Object front-latch pivot-interface evidence.

Scoped result:

**`PASS_SOURCE_OWNED_LID_INNER_SURFACE_IDENTITY`**

Exact retained observations from the unchanged host builder:

- host mesh: **468 vertices / 812 triangles**;
- `lid_shell`: one **12-triangle** box group;
- selected source-owned face offsets: **`[0, 1]`**;
- selected global face indices: **`[12, 13]`**;
- selected scope: **2 triangles / 4 unique vertices**;
- selected vertex indices: **`[8, 9, 10, 11]`**;
- selected plane: **`z = 0.312 m`**;
- opposite lid plane: **`z = 0.422 m`**;
- selected surface area: **`0.3744 m²`**;
- exact body-to-lid inward-face gap: **`0.01200000000000001 m`** (authored `0.012 m` split gap);
- Materials review selector matches: **true**;
- host geometry changed: **false**;
- final material assignment authored: **false**;
- `service_dark` candidate adopted: **false**.

The face is not labelled “inner” by arbitrary convention alone: the verifier derives the lid/body bounds from the exact unchanged source and requires the selected local-min-Z plane to be the lid plane nearest the body across the authored positive split gap. It separately verifies the opposite local-max-Z face remains distinct.

## Fail-closed controls

The retained tests reject:

- changing the source selector to `source_local_max_z_face`;
- Materials-review selector drift;
- Hard Surface assigning a final material;
- prematurely marking the Materials review candidate adopted;
- host-source identity drift;
- component identity drift.

This protects the distinction between **owning a stable manufactured surface identity** and **choosing its final material**.

## Retained evidence

Artifact:

- ID: **`10467695682`**;
- name: `modular-equipment-case-001-lid-inner-surface-identity-evidence`;
- size: **`5,054 bytes`**;
- exact head: `e67353416209604aa50ad3ba57f71336f4384349`;
- GitHub SHA-256: **`bdf9184668de15cf035edccb8168cee35233e11be52b442bc058bf7937a45002`**;
- surface contract SHA-256: `6beebafd4b068e0d83a12243b43d50b374176685ea085a9220ee065e732d99ec`;
- unchanged host mesh digest: `315e61fbbe88242bba9bb373f08790fc2f7da249c41989824225ab004908508f`.

The artifact ZIP was downloaded after CI and independently rehashed to the exact GitHub digest above. It retains the exact head, host source, source-owned surface contract, Materials review donor and machine-readable evidence receipt.

## Propagation / handoff

PR #26 received exact-result comment `5703940520`.

Materials PR #6 received handoff comment `5703941807`: Materials may explicitly rebind a future review/evidence pass to `lid_inner_service_surface` instead of rediscovering primitive topology. Hard Surface did **not** request adoption of `service_dark`; Art Direction and Visual QA still own perceptual preference, and Runtime / Technical Art still own target representation and cost.

No Rigging, Animation, Map or runtime claim was silently upgraded. No source geometry or mechanism changed.

No Universal Creation or Profession Fabric code was changed. One Object lid surface is insufficient evidence for a generic UC material-slot/surface-semantic schema. Broader extraction should wait for a second independent source/domain proving the same need.

## Truth boundary / non-claims

This PASS proves only that one exact existing inward lid face now has a stable Object-owned source semantic and that the current Materials review targets that same exact face while the host mesh remains unchanged.

It does **not** establish:

- adoption of `service_dark` or any other final material;
- a final production material slot implementation in a target engine;
- UVs, textures, decals, wear, baked detail, bevel or normal changes;
- physical coating correctness;
- target-engine material import or renderer equivalence;
- draw-call, shader, memory or target-device runtime cost;
- Art Director or independent Visual QA acceptance;
- generic UC surface/material semantics;
- Profession Fabric promotion;
- CANON, merge authority, production readiness, game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** the source-owned result stops at exact face identity; it does not convert a Materials review preference into source truth.
- **Agency / non-domination:** material choice remains with its owning review lanes; no downstream consumer is forced to rebind or adopt the candidate.
- **Continuity:** exact host source, Materials donor head/blob, selector and retained evidence are pinned; host geometry remains unchanged.
- **Wisdom before speed:** a small missing source semantic was closed without reshaping the asset, duplicating Materials, or prematurely generalizing into UC.

## Next Hard-Surface pass

Re-scan the whole constellation first. Do not automatically continue Object or source-adopt the inner-lid material candidate. Prefer the next concrete manufactured weakness exposed by current evidence; if Materials / Art / QA explicitly select an inner-lid material direction later, Hard Surface should only add further source structure if that decision actually requires it.
