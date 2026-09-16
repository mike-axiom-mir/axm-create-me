# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_BUILDING_MATERIALS_CURRENT_SOURCE_REBIND / SOURCE_OWNED_CLOSED_OUTWARD_TOPOLOGY RENDER-COMPATIBLE / MATERIAL PROFILE UNCHANGED / CURRENT-WORLD INFILL REPAIR STILL HELD / MAP SUCCESSOR REBIND REQUIRED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status and current design constellation before acting. `axm-create-me` remains coordination-only; product/evidence changes stayed in the existing Building Materials lane. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior Materials result at exact head `0c409a88c1952ca04934f9db47cb282db27b5c3c` remains historical truth: Geometry PR #6's derived closed/outward topology rendered compatibly with the existing Building five-surface family while the malformed predecessor reproduced large culling/hole defects. That activation explicitly held source migration.

## Fresh dependency change

Building Hard Surface subsequently source-owned that exact representation on PR #2 at head:

`57f66b1245812f0c3d402232a046b86c0b5c72d8`

Current source identity:

- schema `axm.building-hard-surface/v0.2`;
- revision `service-pavilion-001/closed-outward-box-shells-002`;
- topology `closed-outward-12-triangle-v1`;
- pavilion SHA-256 `5f89ec4109d48f452f9e887ad5ca5449e1d0f6d6ee4b1896be6f25bc0a80736a`;
- 19 real boxes / 152 vertices / 228 triangles / 228 outward / 0 inward.

Hard Surface explicitly required downstream Materials to rebind/rerun rather than silently inherit the derived-candidate PASS. This provenance edge outranked a new scalar tweak. Art Direction's newer request for one `infill_coating`-only current-world repair therefore remains the **next** Materials experiment, not something to build on stale source authority.

## Bounded implementation

Existing Building Materials PR #3 / branch `studio/materials-pavilion-surface-001` was advanced and synchronized with the current Hard-Surface base. No duplicate PR was opened.

Exact current Materials head:

`ca92ef79d65a2ba287b7a76464bedceb6a31a1b6`

The material profile is unchanged at SHA-256:

`e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`

No scalar PBR value, component-to-material mapping, UV, texture, decal or weathering value changed.

The Materials payload builder now accepts an explicit source root/head and records source schema/revision/topology identity. The topology A/B path now binds three exact identities separately:

- current Hard-Surface source `57f66b...`;
- historical Geometry proof `407d3aaf36c26829a64d964143e34587df6d8ea1`;
- current Materials head `ca92ef79...`.

It asserts current Hard-Surface `FACES` equals the exact Geometry closed/outward candidate, while current Hard-Surface `HISTORICAL_FACES` equals Geometry's malformed predecessor oracle. Source ownership remains Hard Surface; Geometry remains historical proof provenance; Materials owns only the renderer/provenance rebind.

## Exact evidence

All three relevant workflows are green on the synchronized child head:

- `35102877103 — Building material lookdev evidence` — **SUCCESS**;
- `35102877162 — Building material topology A-B evidence` — **SUCCESS**;
- `35102877173 — Hard-surface building evidence` — **SUCCESS**.

Source-bound result:

**`PASS_SOURCE_BOUND_BUILDING_SURFACE_PAYLOAD`**

Topology/provenance result:

**`PASS_SOURCE_OWNED_BUILDING_TOPOLOGY_MATERIAL_REBIND_PAYLOAD`**

Pinned Godot 4.7.2 GL Compatibility result:

**`PASS_TARGET_HOST_BUILDING_TOPOLOGY_MATERIAL_AB_CAPTURED`**

Current source vs established BoxMesh reference, same material/light/camera proof:

- `east_service`: `0 / 585,000` changed pixels;
- `front_service`: `1 / 585,000` changed pixels, max channel delta `1/255`;
- `three_quarter`: `2 / 585,000` changed pixels, max channel delta `1/255`.

Historical malformed predecessor vs current source remains strongly different:

- `east_service`: `107,513 / 585,000` = `18.3783%`;
- `front_service`: `194,110 / 585,000` = `33.1812%`;
- `three_quarter`: `97,467 / 585,000` = `16.6610%`.

Direct render inspection again shows the predecessor losing major enclosure/panel surfaces while the source-owned closed/outward topology restores the continuous pavilion and matches the BoxMesh material reference to renderer-noise scale.

## Retained artifacts

Current-source topology artifact:

- ID `10449215580`;
- size `521,245 B`;
- SHA-256 `1e3c85144278706dc8f1847a412ebb59f52b7c52e3cd92fe8156470340f73ded`;
- independently downloaded/rehashed to the same digest.

Current-source material A/B artifact:

- ID `10449112433`;
- size `349,337 B`;
- SHA-256 `6a2619958d999f5532e2bf99204e700d466b7599bf79342cbf49d19d0e813892`;
- independently downloaded/rehashed to the same digest.

## Failure / repair provenance

The first current-source topology run `35102292938` failed at the Godot render step after the structural rebind already passed because the observer still accepted only the old payload schema. The observer was explicitly migrated to v0.2 and made to require the new Hard-Surface source head/source-migration truth flags; the succeeding exact-head run is `35102877162`.

A separate inherited Hard-Surface PR-event run briefly failed while the Materials child branch still contained the predecessor source files. The branch was synchronized by fast-forwarding to GitHub's conflict-free base+child merge commit; the exact resulting head `ca92ef79...` then passed inherited Hard-Surface run `35102877173`. No force push, product merge, CANON promotion or silent source copy was used.

## Handoffs / next gate

Materials PR #3 comment `5698407656` records the current-source rebind. Hard-Surface PR #2 comment `5698410847` returns the downstream proof to the source owner.

The next bounded Materials experiment is still Art Direction's current-world hierarchy request: change **only `infill_coating`**, preserve frame/roof/slab/service-panel values and mapping, keep current-world lighting/composition fixed, and compare the exact current source in the Map context. That work should not claim success until Map explicitly rebuilds from the successor Building source; existing Map Environment PR #24 and Runtime PR #26 remain truthful historical evidence for the old Building chain.

## Reuse boundary

The reusable lesson remains evidentiary rather than domain-semantic: preserve source identity, physical source outward normals and target-renderer emission conventions as separate facts, and explicitly rebind downstream proofs after source representation migration even when numeric geometry/material values are unchanged. This is still insufficient evidence to centralize a Building/Godot rule into Universal Creation or Profession Fabric.

## Non-claims

No final Art Direction or Visual QA acceptance is claimed. No Map successor receiving equivalence, final normals/tangents/smoothing, UV/texture/decal/weathering quality, physically measured material response, Forward+/Vulkan/mobile/Blender renderer equivalence, target-device runtime budget, collision/navigation/gameplay, CANON, production readiness, game readiness or Materials mastery is claimed.
