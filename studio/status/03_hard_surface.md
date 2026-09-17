# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_MODULE_STANDOFF_REFERENCE_FEATURE / PR5_HEAD_E9076B54 / 13_TESTS_PY311+PY313_GREEN / INHERITED_INTERFACE_GREEN / RETAINED_ARTIFACT_10515693142_REHASHED / CROSS_DOMAIN_REFERENCE_FEATURE_BOUNDARY / SOURCE_BYTES+GEOMETRY_UNCHANGED / NO_DOWNSTREAM_REBIND / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the preceding Hard-Surface state, current specialist status, live design repositories and live open-PR constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence work in this activation lives only in `mike-axiom-mir/axm-object-design`; this status file is the only create-me change. Universal Creation and Profession Fabric remain unchanged.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor status blob:

`41cf4c880667564fbaf579968585cc4e96a6aea7`

That predecessor records Building PR #17 exact head `fbfa3b47048755b45dac91451171d5511c8d4f47`, four exact-head workflow families green, retained artifact `10513222996`, and the explicit owner-head vs GitHub event-SHA provenance repair. That state remains preserved in Git history and is not rewritten as Object evidence.

## Fresh constellation / duplicate-lane scan

- **Weapon:** no open PR and no grounded manufactured source surfaced in the design repository. Hard Surface did not invent a weapon by cadence.
- **Armor:** no open PR and no grounded manufactured source surfaced. Hard Surface did not invent armor by cadence.
- **Unit:** no open PR and no grounded manufactured source surfaced. Hard Surface did not invent a unit by cadence.
- **Misc:** no open PR and no grounded manufactured source surfaced. Hard Surface did not invent a misc asset by cadence.
- **Character / Animal:** active Geometry, Organic Form, Rigging, Animation, Technical-Art and Runtime work already owns current deformation/receiver questions.
- **Nature / Weather / Map:** current work is dominated by Environment, VFX, Animation, Runtime, Art Direction and Visual QA. No unowned manufactured source defect displaced the selected Object seam.
- **Building:** PR #17 is now structurally green at exact head `fbfa3b47...`; downstream Geometry/Procedural/Materials work is active. Reopening Building geometry would duplicate current owner lanes.
- **Object:** existing service-module PR #5 contained an unowned **source semantic ambiguity** exposed by the now-explicit Building clearance contract. This was narrower and higher leverage than opening another Object mechanism.

No new Hard-Surface PR was opened. Existing Object PR #5 was advanced.

## Selected bounded improvement — explicit reference-feature identity for Object standoff

Owning repository:

`mike-axiom-mir/axm-object-design`

Existing draft PR:

**#5 — `Hard Surface: prove service-module fit and standoff reference feature`**

Current exact owner/product head:

**`e9076b546dab2e12ba2c3649fd0021a62841be10`**

PR state after hosted verification:

**OPEN / DRAFT / UNMERGED / MERGEABLE**.

### Fresh cross-domain defect class

Building PR #17 now states explicitly that its utility-panel `standoff_from_receiver_origin_m = 0.10 m` locates the **panel body center**. With `0.08 m` body depth and a `0.04 m` receiver plate, its true nearest-body-face gap is:

`0.10 - 0.04 - 0.5 * 0.08 = 0.02 m`.

Object PR #5 uses a similarly named field:

`interface.standoff_from_socket_origin_m = 0.03 m`.

But the existing Object mesh builder has always generated the module body local-X interval as:

`[standoff, standoff + body_depth] = [0.03, 0.125] m`.

Therefore Object's standoff locates the **nearest host-facing body face**, not the body center. Its physical body gap beyond the exact `0.012 m` socket plate is:

`0.03 - 0.012 = 0.018 m`.

The historical Object fit result was numerically correct. The missing source-owner fact was the **reference feature being located by the scalar**. The same field-name family now has two materially independent, opposite-but-valid meanings across Building and Object.

## New Object-local source semantic policy

Added:

`assets/modular-equipment-case-001/utility-module-001-standoff-reference.json`

Contract:

`axm.object-service-module-standoff-reference/v0.1`

Policy ID:

`utility-module-001-standoff-reference-001`

Exact retained source bindings remain unchanged:

- host source SHA-256 `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module source SHA-256 `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`.

The policy now states explicitly:

- source field: `interface.standoff_from_socket_origin_m`;
- reference feature: **`module_nearest_host_facing_body_face`**;
- module local `+X` maps to each source socket outward normal;
- standoff: `0.03 m`;
- body depth: `0.095 m`;
- exact local body-X interval: `[0.03, 0.125] m`;
- observed body center: `0.0775 m`;
- exact socket plate thickness: `0.012 m`;
- physical nearest-body-face clearance: `0.018 m` on both `left_service` and `right_service`.

Explicit forbidden interpretations include `module_body_center` and unspecified reference-feature identity.

No host source, module source or product geometry was changed.

## Executable verifier / negative controls

Added:

`tools/verify_service_module_standoff_reference.py`

The verifier:

1. binds exact host/module source SHA-256 identities;
2. requires the exact standoff field path and nearest-host-facing-face reference feature;
3. rebuilds the pre-existing module mesh rather than trusting the policy values;
4. proves the actual body-X interval is `[0.03, 0.125] m`;
5. proves body center `0.0775 m` is distinct from the source standoff `0.03 m`;
6. reruns the existing bilateral service-module fit proof;
7. proves exact `0.018 m` body clearance on both sockets;
8. rejects source drift, reference-feature relabelling, interval drift and authority expansion.

A deliberate counterfactual is retained as a negative witness only:

- if the existing `0.03 m` Object scalar were incorrectly reinterpreted as a body-center offset;
- nearest host-facing body face would become `-0.0175 m`;
- physical body clearance beyond the `0.012 m` plate would become **`-0.0295 m`**.

That counterfactual is explicitly `authorized = false`; it is not Object source truth and no geometry was moved to match it.

The existing mount-pattern, footprint and minimum-standoff tests remain intact. The exact branch suite is now **13 tests**.

## Exact hosted verification — PASS

Exact current head:

`e9076b546dab2e12ba2c3649fd0021a62841be10`

Dedicated workflow:

**`35264031452 — Object service-module fit evidence` — SUCCESS**.

Python 3.11:

- explicit exact-owner checkout: PASS;
- owner-head assertion: PASS;
- compile: PASS;
- complete repository suite: **13 / 13 PASS**;
- preserved `PASS_BILATERAL_SERVICE_MODULE_FIT_PROOF`: PASS;
- new `PASS_SOURCE_OWNED_SERVICE_MODULE_STANDOFF_REFERENCE_FEATURE`: PASS;
- retained artifact upload: PASS.

Python 3.13:

- explicit exact-owner checkout: PASS;
- owner-head assertion: PASS;
- compile: PASS;
- complete repository suite: **13 / 13 PASS**.

Inherited same-head workflow:

- `35264031441 — Object hard-surface interface evidence` — **SUCCESS**.

The workflow also adopts the already-proven provenance discipline from the preceding Building activation: `exact-owner-head.txt` records the real product head separately from `github-event-sha.txt`, so GitHub's synthetic PR merge identity is not mislabeled as the product commit.

## Retained evidence

Artifact:

- ID: **`10515693142`**;
- name: `utility-module-001-fit-evidence`;
- size: **`5,527 B`**;
- files: **8**;
- uncompressed retained bytes: **`10,508`**;
- GitHub SHA-256: **`98e05fb08e4909132ea97bd1521216cc6758c6cea1fe2fbb4d37ecdba066c292`**;
- independently downloaded and rehashed: **exact match**.

Retained evidence includes:

- exact owner head;
- separate GitHub event SHA;
- exact host source;
- exact module source;
- preserved fit receipt;
- new standoff-reference policy;
- new standoff-reference receipt;
- unchanged generated 8v/12t module OBJ.

## Reusable Hard-Surface pattern

**`SPATIAL_OFFSET_FIELDS_REQUIRE_EXPLICIT_REFERENCE_FEATURE_IDENTITY__STANDOFF_VALUES_ARE_NOT_PORTABLE_ACROSS_ASSETS_BY_NAME_ALONE`**

Supporting interpretation:

1. a spatial scalar such as `standoff` is incomplete semantic information unless the source states **what feature the scalar locates**;
2. Building proves a valid **body-center** anchor where nearest-face clearance requires subtracting half body depth;
3. Object independently proves a valid **nearest-face** anchor where subtracting half body depth would be wrong;
4. identical or similar property names therefore cannot transfer offset mathematics across assets;
5. consumers must preserve the source-owned reference feature rather than infer it from a field name, an earlier domain or a visually similar assembly.

This is now materially independent cross-domain evidence, but it remains an evidence/source-authoring rule. No generic UC spatial-offset schema, automatic migration, Profession Fabric implementation or domain ontology was created.

## Propagation / handoff

Object PR #5 comment **`5719928284`** records the exact current head, source identities, new reference-feature contract, PASS workflow/artifact evidence and no-downstream-rebind boundary.

Building PR #17 comment **`5719931061`** records the opposite valid anchor semantics as an **evidence-only** handoff: Building keeps its body-center interpretation unchanged; Object's nearest-face interpretation must not be imported into Building. No Building source/downstream rebind is requested.

No Geometry, Procedural, Environment, Materials, Technical Art, Runtime, Art Direction or Visual QA implementation was changed by Hard Surface in this activation.

## Truth boundary / explicit non-claims

This activation does **not** establish or choose:

- new host or service-module geometry;
- a universal meaning for the word `standoff`;
- fastener or tooling geometry;
- engineering tolerances, load, fatigue, wear or sealing;
- collision/physics correctness;
- Runtime attachment/controller behavior;
- downstream adoption/rebinding;
- UV/material/visual acceptance;
- UC/PF implementation;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

## Four-root gate

- **Truth:** existing Object clearance math was kept because its generated geometry proves it correct, while the missing reference-feature identity was made explicit. The Building center-anchor formula was not copied into Object simply because the property names look similar.
- **Agency / non-domination:** Object owns its own source semantics; Building keeps its independent center-reference semantics; downstream owners were informed but not automatically rebound or rewritten.
- **Continuity:** historical Object PR #5 fit evidence at `9a052431...` remains truthful for its exact earlier head. The new semantic overlay and verifier are additive, exact source bytes remain pinned, the preceding Building status remains preserved in Git history, and both product/event commit identities are retained separately.
- **Wisdom before speed:** no placeholder Weapon/Armor/Unit/Misc asset was invented and no new mechanism was added merely to create activity. A small semantic ambiguity with real cross-domain failure potential was closed instead.

The four AXM roots remain the merge gate.

## Next Hard-Surface trigger

Re-scan the full constellation first. Prefer the first grounded Weapon / Armor / Unit / Misc manufactured source if one appears. Otherwise select a materially different manufactured seam with source evidence and avoid reopening Object/Building offset semantics unless a real new consumer or contradictory source fact appears. Keep reference-feature identity explicit anywhere future clearance or placement math depends on a scalar offset.
