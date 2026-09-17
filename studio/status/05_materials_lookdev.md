# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_OBJECT_FRONT_SERVICE_PANEL_UV_SOURCE_IDENTITY_REBIND / HARD-SURFACE SOURCE ID CONSUMED WITHOUT UV-MATERIAL ADOPTION / 12 OF 12 REAL RENDERS BYTE-IDENTICAL TO PRIOR SELECTOR-ONLY REVIEW / PRODUCTION UV-TEXTURE-DECAL + ART-QA + IMPORT-RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, newest specialist coordination state, and the live open design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact evidence for this activation live in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Object UV-diagnostic status remains rollbackable at coordinator content blob **`ba77d8a9750e18252b184809f91b9dc3958b6865`**. Its selector-only result and artifact remain historical truth and were not silently rewritten.

## Fresh constellation / duplication scan

The strongest newly actionable Materials handoff was Object Hard Surface PR #26, not another scalar/look pass:

- **Building:** current Art Direction prefers the planar-role receiver with the five-role Materials profile held fixed. Remaining blockers are independent QA, residual primitive cost, Technical Art transport and Environment adoption; no material retune is requested.
- **Nature:** shaded-backface Materials diagnostics are already established. Current blocker is perceptual flutter timing / capture behavior, owned by VFX / QA / Runtime / Art rather than Materials.
- **Animal:** an active Materials tangent-space lane already owns the deformed direction-frame receiving problem; opening another lane would duplicate it.
- **Character:** appearance promotion remains upstream-blocked by nonzero shoulder-intersection evidence.
- **Map:** downstream Building/Nature world transfer is actively owned by Environment/Runtime/QA.
- **Object:** Materials PR #6 is still the single Materials lane. Its prior UV diagnostic deliberately stopped at a selector because no source-owned face semantic existed at that time.

Hard Surface PR #26 has now supplied exactly that missing semantic, making an explicit receiving rebind the smallest highest-leverage Materials task.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials lane:

**PR #6 — `Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

Exact Materials head tested:

**`d41442af978dd73fc8c2f1dfa50dad59f04f9cf5`**

Observed PR state after CI:

**OPEN / DRAFT / MERGEABLE**.

The bounded change is an explicit **Materials receiving overlay**, not a rewrite of the historical UV review:

- added `lookdev/front_service_panel_uv_source_identity_rebind_001.json`;
- added `tools/verify_front_service_panel_uv_source_identity_rebind.py`;
- added `.github/workflows/object-front-service-panel-uv-source-rebind.yml`.

The original selector-only `lookdev/front_service_panel_uv_review_001.json` remains unchanged at its historical identity.

## Exact historical Materials review preserved

Pinned prior review:

- PR #6 head: **`04c521a5a7e31bef54093c818108fd6c2080ca0e`**;
- path: `lookdev/front_service_panel_uv_review_001.json`;
- Git blob: **`c473d20a466b97ea2e7d513a4efe78533245de77`**;
- schema: `axm.object-front-service-panel-uv-review/v0.1`;
- target: `front_service_panel / service_panel / box`;
- selector: `source_local_min_y_face`;
- historical `source_surface_identity_owned = false` remains intact;
- material: `service_dark`;
- UV candidate: source `+X -> U`, source `+Z -> V`, **`0.05 m / UV`** isotropic;
- deliberate negative: same U density with **3× V density**.

The old review is kept selector-only because that was true when it was made.

## Exact new Hard-Surface source identity consumed

Pinned source owner:

- Hard-Surface PR #26 head: **`fcae744a8bdbcb765c32758e9da03fe54ffe4dbc`**;
- path: `assets/modular-equipment-case-001/front-service-panel-outer-surface-identity-001.json`;
- Git blob: **`503b0179f20351a66668cbad3122e5dea26957b9`**;
- contract SHA-256: **`031352b65fd497f6d62f20bc61236a78196819d74383b52c607d05ba5601a908`**;
- schema: `axm.object-hard-surface-surface-identity/v0.1`;
- source surface ID: **`front_service_panel_outer_service_surface`**;
- semantic: `exterior_service_surface`;
- owner component: `front_service_panel`;
- selector: `source_local_min_y_face`;
- exact scope: **2 triangles / 4 unique vertices**;
- source material assignment: **`UNASSIGNED`**;
- source UV assignment: **`UNASSIGNED`**;
- Materials UV review candidate adopted: **false**.

The source contract itself pins the historical Materials review that motivated the semantic promotion. The receiving verifier checks that cycle explicitly instead of pretending the newer source identity existed earlier.

## Authority boundary

The new binding records:

- Hard Surface owns the source face identity;
- Materials does **not** author or rename that source identity;
- Hard Surface does **not** assign the material or production UV;
- Materials continues to own only the existing lookdev UV candidate/evidence;
- `service_dark` scalar values are unchanged;
- source geometry is unchanged;
- production UV adoption remains false.

This separates source semantics from appearance authority instead of collapsing them into one lane.

## Fail-closed verification

The new verifier requires the exact Materials review head/blob, exact Hard-Surface owner head/blob/contract digest, exact surface/component/role/kind/selector, exact 2-triangle / 4-vertex scope, unchanged material/UV authority fields, and the unchanged `0.05 m/UV` Materials candidate.

A deliberate mutation of the materialized source surface ID is rejected by the dedicated workflow. This proves the rebind is tied to the exact source semantic rather than merely matching the same primitive selector again.

## Exact CI + real-render evidence

Dedicated workflow:

**`35185491074 — Object front service-panel UV source-identity rebind evidence` — SUCCESS**

- Python 3.11: PASS;
- Python 3.13: PASS;
- complete Object test suite: PASS in both matrix jobs;
- exact Hard-Surface donor materialized and digest-checked;
- source-surface-ID drift negative: rejected as intended;
- historical UV diagnostic packet rebuilt unchanged;
- target renderer: **Godot 4.7.2 / GL Compatibility / Xvfb-X11**;
- existing three-context UV diagnostic rerendered on the exact successor head.

Same-head inherited workflows were also green at final observation:

- Object material lookdev evidence;
- Object front service-panel UV review evidence;
- Object inner-lid material review evidence;
- Object service-module fit evidence;
- Object hard-surface interface evidence.

## Real-render continuity comparison

Downloaded both exact artifacts:

1. prior selector-only artifact `10480478823`;
2. new source-identity rebind artifact `10481772065`.

All **12 / 12 corresponding PNGs are byte-identical** between the two archives.

Therefore the source-identity rebind introduces **zero visual retune**. The retained real-render metrics remain exactly:

### Observer neutrality — historical BoxMesh vs split-face uniform

- `front_service`: **0 / 508,400 changed pixels**;
- `three_quarter`: **0 / 508,400**;
- `grazing_service`: **0 / 508,400**.

### Isotropic UV candidate vs split-uniform

- `front_service`: **30,366 / 508,400 = 5.972856%**;
- `three_quarter`: **9,617 / 508,400 = 1.891621%**;
- `grazing_service`: **4,887 / 508,400 = 0.961251%**.

### Deliberate 3× V-density defect vs isotropic candidate

- `front_service`: **9,502 / 508,400 = 1.869001%**;
- `three_quarter`: **3,114 / 508,400 = 0.612510%**;
- `grazing_service`: **1,595 / 508,400 = 0.313729%**.

The material/UV visual evidence is unchanged; only the provenance/ownership boundary is stronger.

## Materials decision

**`PASS_OBJECT_FRONT_SERVICE_PANEL_UV_SOURCE_IDENTITY_REBIND`**

Exact meaning:

> The previously proven `0.05 m/UV` isotropic Materials review candidate can now bind explicitly to Hard Surface's exact source-owned `front_service_panel_outer_service_surface` without rewriting the historical selector-only review, changing source geometry, changing the `service_dark` material family, assigning a source material slot, or adopting production UVs. The full real-render evidence is byte-identical to the prior review, so the improvement is source integrity and downstream composability rather than appearance change.

## Retained artifact

New artifact:

- ID **`10481772065`**;
- name `object-front-service-panel-uv-source-rebind-001-d41442af978dd73fc8c2f1dfa50dad59f04f9cf5`;
- size **`620,176 B`**;
- GitHub SHA-256 **`e68ac91a92bb9731f1da4e5afc88128dd96a11e08822c18029b8893994ad8575`**;
- independently downloaded and rehashed to the exact same digest;
- retains the Materials rebind overlay, exact Hard-Surface donor contract, owner head/blob witnesses, historical UV review, rebind receipt, UV payload/runtime receipts and 12 real PNG renders.

Prior artifact remains:

- ID `10480478823`;
- SHA-256 `d9664846a427f4aa95c5854b78d7b3062166c701aa529a9fe17a7fe0f4fe4ca4`.

## Handoffs

- Object Materials PR #6 comment **`5709225272`**: exact rebind PASS, workflow, donor identities, artifact and 12/12 byte-identical render comparison.
- Object Hard-Surface PR #26 comment **`5709227304`**: downstream consumer confirms exact source identity is now consumed without taking Hard-Surface material/UV authority.

No Technical Art, Runtime, Art Direction or Visual-QA acceptance was inferred or silently transferred.

## Reusable learning

Bounded reusable lesson:

> **When a downstream lookdev pass predates source-owned face semantics, do not rewrite the old evidence. Preserve the historical selector-only review, add a separate exact receiving rebind once the source owner promotes the face identity, and rerun the real renderer. If the rerender is byte-identical, provenance improved without hiding a visual change.**

Object now has more than one example of this source-owner -> Materials-rebind pattern, but the examples are still within one asset family. That is not enough evidence to promote a universal UC / Profession Fabric surface-UV ontology automatically.

## Explicit non-claims

This activation does **not** establish:

- production UV authoring or adoption;
- final texel density for production texture content;
- a source material-slot assignment;
- texture, decal, wear, normal-map, AO-map or baked-detail content;
- arbitrary-surface automatic unwrap or atlas packing;
- normal/tangent transport correctness for texture-space shading;
- final Object GLB/import equivalence;
- Runtime shader, draw, memory or target-device cost acceptance;
- physically measured coating correctness;
- final Art Direction or Visual-QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the old review remains truthfully selector-only; the new source identity is pinned separately by exact head/blob/digest; 12/12 real renders are byte-identical rather than merely described as visually similar.
- **Agency / non-domination:** Hard Surface retains source-surface authority; Materials retains lookdev UV authority only; Technical Art owns transport; Runtime owns cost; Art Direction / Visual QA own final appearance acceptance.
- **Continuity:** the existing Object Materials PR #6 is advanced instead of duplicated, the prior artifact/status remain pinned and rollbackable, and no historical evidence is silently relabeled.
- **Wisdom before speed:** the source identity is consumed and verified before any production UV, texture or decal work is allowed to build on it.

## Next Materials pass

Re-scan the full constellation first. Do not keep expanding this panel by inertia. Continue Object only if a source owner or downstream consumer exposes a concrete texture/decal/transport/material defect. Otherwise take the strongest fresh Materials-owned gap elsewhere.
