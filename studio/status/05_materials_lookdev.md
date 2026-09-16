# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_BUILDING_CLOSED_OUTWARD_TOPOLOGY_MATERIAL_RENDER_COMPATIBILITY / HISTORICAL CULLING DEFECT REPRODUCED / SOURCE + MAP ADOPTION + FINAL UV/NORMAL/RUNTIME/AD ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the previous Materials status, newest specialist status, and current design/UC lanes before acting.

`axm-create-me` remains coordination-only. Product/evidence implementation in this activation changed only the existing Building Materials lane. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior exact Nature leaf-sidedness result remains historical truth for its exact identity: `PASS_TARGET_HOST_LEAF_SIDEDNESS_AB_CAPTURED` at Nature Materials head `0b7fdfac3be4d9c25236fa8733108e7d32533657`, with its renderer-local preference for material-side two-sided foliage. It is not rewritten or generalized by this activation.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no stronger newly evidenced Materials-owned blocker surfaced.
- **Character:** Art Direction and Visual QA have cleared exact shoulder candidate E only as a form target; source migration / connected Geometry remains upstream of final surfacing.
- **Animal:** current locked perspective/form/deformation questions remain upstream; no material pass should hide them.
- **Nature:** the existing leaf-sidedness target-host A/B is already closed for its declared proof profile; do not extend it by inertia.
- **Weather / Map:** active lanes concern Weather/VFX, receiving composition, procedural layout and runtime. Map Materials already produced source-owned Building receiving feedback; Art Direction explicitly kept topology migration out of that isolated Map A/B.
- **Object:** newest work is articulation/rigging/animation/Technical-Art/runtime provenance and optimization. The earlier Object Materials result remains historical truth; no duplicate Object surfacing lane was opened.
- **Universal Creation:** an active UV-padding / first-mip-safe lane already exists. Do not duplicate that work or move Building-specific renderer knowledge into UC from one domain.
- **Building:** Geometry PR #6 exposed a new exact Materials dependency: its derived closed/outward shell fixes the repeated malformed 19-box face table and explicitly requires Materials to rerun culling/normal-facing evidence before any source migration. Existing Building Materials PR #3 had only proved its refined surface family on a procedural BoxMesh reference, not on the actual historical/candidate face tables. This was the highest-leverage non-duplicated gap.

No new Materials PR was opened.

## Selected bounded lane

Repository: `mike-axiom-mir/axm-building-design`

Existing draft Materials PR: **#3 — `Materials: prove pavilion functional surface hierarchy`**

Branch: `studio/materials-pavilion-surface-001`

Exact current Materials head:

`0c409a88c1952ca04934f9db47cb282db27b5c3c`

Exact Geometry donor:

- PR #6 — `Geometry: prove closed outward topology for pavilion box shells`;
- head `407d3aaf36c26829a64d964143e34587df6d8ea1`;
- state `PASS_DERIVED_CLOSED_OUTWARD_BOX_TOPOLOGY_19_REAL_COMPONENTS`;
- source owner remains Hard-Surface base `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- the Geometry candidate is derived evidence only, not source migration.

Exact refined Building material profile remains unchanged:

- profile SHA-256 `e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`;
- five Building-local scalar PBR families;
- all exact `17` pavilion components plus the `2` source-owned utility-panel placements remain explicitly mapped;
- no new UV, texture, decal, weathering or shared UC material vocabulary was introduced.

## Why this receiver proof was necessary

Building Geometry PR #6 established that the historical repeated 8-vertex / 12-triangle box face table is structurally malformed across all 19 real outputs while preserving the exact source vertices, placement and geometry budget.

Per historical box it reports:

- `6` boundary edges;
- `2` non-manifold edges;
- `4` shared-edge orientation conflicts;
- `6` outward + `6` inward triangles.

The derived candidate preserves `8` vertices / `12` triangles per box but reaches:

- `0` boundary edges;
- `0` non-manifold edges;
- `0` shared-edge orientation conflicts;
- `12` outward + `0` inward triangles.

The pre-existing Materials proof did **not** render those actual face tables. It reconstructed the exact Building component boxes as Godot `BoxMesh` instances. That was valid same-geometry material evidence for the scalar surface family, but it could not answer whether the source/candidate triangle representation itself would preserve the established material look under back-face culling.

This activation therefore added the smallest bounded receiver proof rather than changing material values.

## Implemented evidence path

Inside the existing Building Materials branch only:

- added `tools/build_building_material_topology_ab_evidence.py`;
- added `lookdev-topology-proof/project.godot`;
- added `lookdev-topology-proof/observe.gd`;
- added `.github/workflows/building-material-topology-ab.yml`.

The builder:

- checks out and pins exact Geometry donor head `407d3aaf36c26829a64d964143e34587df6d8ea1`;
- asserts the current Building historical face table still matches the donor's historical table;
- preserves the exact 19 source component identities, vertices, placements and panel receiver-frame transforms;
- preserves the exact refined five-surface material profile;
- builds three representations for the same proof contexts:
  1. exact historical malformed face table;
  2. exact Geometry PR #6 closed/outward candidate;
  3. the existing Materials `BoxMesh` reference;
- holds camera, lighting, source vertices and material values fixed within each comparison;
- renders `front_service`, `east_service`, and `three_quarter` in pinned Godot 4.7.2 GL Compatibility;
- retains all 9 PNGs, source-bound payload, build receipt and runtime receipt.

The truth boundary explicitly keeps source migration, Map receiving equivalence, final normals/tangents, UVs/textures, Runtime acceptance and Art Direction acceptance false/unclaimed.

## Proof-host repair provenance

Direct frame inspection caught renderer-observer mistakes that CI structure alone did not reveal. Those superseded runs remain Actions provenance and were **not** promoted.

### Superseded run 1

- head `e3d5cc0c55f030766845411b27e385abe7087811`;
- run `35095807338`;
- structurally green;
- direct review showed the candidate render was implausibly dark relative to the established BoxMesh reference.

### Superseded run 2

- head `98579a8c83cedcba9de830549b90961d198a66fe`;
- run `35096064238`;
- structurally green;
- the observer incorrectly treated source `(x,y,z) -> Godot (x,z,-y)` as orientation-reversing and reversed source winding for that reason.

### Superseded run 3

- head `4b54377e7c1a0dfefdf08a913938bc1f6dd944c9`;
- run `35096402933`;
- structurally green;
- source ordering was restored, but proof-host flat-normal / front-face handling still failed to reproduce the existing BoxMesh reference faithfully.

### Final repair

Exact current head:

`0c409a88c1952ca04934f9db47cb282db27b5c3c`

The final observer separates two concerns instead of silently conflating them:

- preserve the source-owned physical outward normal from the exact source triangle order;
- adapt only target-host triangle emission order so Godot `CULL_BACK` presents that same physical exterior in the proof representation.

This is a Building Materials proof-host adapter rule, **not** a new Building source rule and not a UC abstraction.

## Exact target-host result

Dedicated workflow:

**`35096754776 — Building material topology A-B evidence`**

Result:

**COMPLETED / SUCCESS**

Inherited exact-head workflows also passed on the same Materials head:

- `35096754447 — Hard-surface building evidence` — **SUCCESS**;
- `35096754587 — Building material lookdev evidence` — **SUCCESS**.

Final target-host state:

**`PASS_TARGET_HOST_BUILDING_TOPOLOGY_MATERIAL_AB_CAPTURED`**

Scoped Materials decision:

**`PASS_BUILDING_CLOSED_OUTWARD_TOPOLOGY_MATERIAL_RENDER_COMPATIBILITY`**

Pinned host:

**Godot 4.7.2 stable, GL Compatibility**.

Retained exact-head artifact:

- ID `10446740795`;
- name `building-material-topology-ab-0c409a88c1952ca04934f9db47cb282db27b5c3c`;
- size `520,099 B`;
- GitHub SHA-256 `8fd79c36567e8600d1c9decdac94f63f16b2c09c5aba86593538ef2d01479873`;
- downloaded ZIP independently rehashed to the same SHA-256.

## Real-render comparison

All frames are `900 x 650` (`585,000` pixels). Same exact source vertices, refined material profile, proof-host camera and lighting are held within each comparison.

### Geometry candidate vs existing BoxMesh Materials reference

`front_service`:

- changed pixels: `1 / 585,000`;
- changed coverage: `0.00017094%`;
- maximum RGB channel delta: `1/255`.

`east_service`:

- changed pixels: `0 / 585,000`;
- changed coverage: `0%`;
- maximum RGB channel delta: `0`.

`three_quarter`:

- changed pixels: `2 / 585,000`;
- changed coverage: `0.00034188%`;
- maximum RGB channel delta: `1/255`.

Direct inspection: the derived closed/outward face table reproduces the established scalar-PBR Building read to renderer-noise scale in these exact contexts. This is **not** called byte-identical because two contexts contain one/two threshold-level changed pixels and PNG encodings are not asserted identical.

### Historical malformed topology vs Geometry candidate

`front_service`:

- changed pixels: `194,110 / 585,000`;
- changed coverage: `33.1812%`;
- maximum RGB channel delta: `0.96470588`.

`east_service`:

- changed pixels: `107,513 / 585,000`;
- changed coverage: `18.3783%`;
- maximum RGB channel delta: `0.6627451`.

`three_quarter`:

- changed pixels: `97,467 / 585,000`;
- changed coverage: `16.6610%`;
- maximum RGB channel delta: `0.8117647`.

Direct inspection reproduces the historical visual defect rather than merely inferring it from topology metrics:

- the front ochre service panel shows a conspicuous triangular cutout / missing-face read;
- the east service panel shows the same class of triangular cutout plus broken local face/shadow structure;
- the three-quarter view preserves additional localized malformed-face artifacts;
- the closed/outward candidate restores continuous service-panel surfaces and the established frame/infill material hierarchy.

This makes the old triangular service-panel caveat materially more attributable to the malformed topology under this proof renderer. It does **not** prove the exact Map PR #14 receiving-scene caveat is solved, because that Map scene has not been rebound to a migrated Building source and rerun.

## Materials decision

The material family itself did not need another scalar/color tweak. The higher-leverage improvement was making the Materials evidence path capable of challenging the **real topology representation** instead of assuming the synthetic BoxMesh reference was sufficient.

For this exact derived candidate and renderer proof:

> The Geometry PR #6 closed/outward topology is materially compatible with the existing refined Building five-surface family. It reproduces the established BoxMesh lookdev to renderer-noise scale while the historical malformed face table independently reproduces a large, visible culling/hole defect.

This is a receiver-compatibility PASS only. Materials does not own source migration.

## Reusable discovery / placement boundary

One reusable technical-art learning is supported, but not yet promoted into UC:

> When a source topology convention and a target renderer's front-face/culling convention differ in representation details, preserve the **physical source outward normal** and the **target-host emission order** as separate pieces of evidence. Do not silently rewrite source winding just to make a proof renderer look correct.

Correct home today: the Building Materials proof harness, because evidence currently spans one Building topology family and one Godot GL Compatibility target host.

No UC change and no Profession Fabric promotion is justified from this single domain. Promotion would require materially different source domains and target-host representations with the same separation proving necessary.

## Provenance / continuity

- Building Materials PR #3 remains the sole Building Materials lane; no duplicate PR was opened.
- Geometry PR #6 remains owner of the derived closed/outward candidate and its structural evidence.
- Hard-Surface remains owner of Building source semantics and migration authority under the four roots.
- Existing refined material profile identity is unchanged.
- Historical malformed source topology remains preserved as before-evidence.
- All three superseded green observer runs remain in Actions history; none was silently rewritten into the final PASS.
- Final exact workflow/artifact/head are separately identified and rollbackable.
- Materials handoff comment on PR #3: `5697556394`.
- Geometry handoff comment on PR #6: `5697559503`.
- Map PR #14 remains untouched; its prior receiving-scene evidence is not silently relabelled as topology-migrated proof.
- UC and Profession Fabric remain unchanged.

## Renderer / evidence boundaries

This result is bounded to:

- Godot 4.7.2 stable, GL Compatibility;
- one exact Building source component/receiver identity;
- one exact Geometry PR #6 derived topology candidate;
- one exact refined scalar-PBR material profile;
- three fixed static proof cameras;
- the final Building Materials target-host face-emission adapter;
- back-face-culling behavior in this proof host.

It does **not** establish renderer equivalence across Forward+, Vulkan, mobile renderers, Blender, other engines, or imported production meshes.

## Non-claims

This activation does **not** establish:

- Building source migration/adoption of Geometry PR #6;
- that the exact Map PR #14 triangular caveat is solved;
- final authored normals, tangents, smoothing or hard-edge policy;
- UV quality, texel density, mip behavior, texture seams or first-mip-safe padding;
- final texture, decal, dirt, wear, weathering, emissive or damage response;
- physically measured concrete/steel/coating reflectance;
- hidden/interpenetrating internal-face cleanup or boolean-unioned architecture;
- runtime FPS, GPU time, draw-call, memory or target-device acceptance;
- collision, navigation, physics or gameplay behavior;
- final Art Direction or independent Visual QA acceptance;
- UC abstraction, Profession Fabric promotion or a universal renderer adapter rule;
- CANON, production readiness, game readiness or Materials mastery.

## Handoffs

- **Hard-Surface / Geometry:** the exact PR #6 derived candidate now has Materials target-host compatibility evidence. If migrated, create/identify the new source/builder identity explicitly; do not inherit this derived-candidate PASS as source authority.
- **Materials after migration:** rebind/rerun this exact proof against the new source identity. A source migration is a provenance change even if the triangle numbers are numerically equal.
- **Environment / Map:** only after explicit source migration should the exact Building receiving scene be rebound and rerun. The existing Map topology/light-shadow caveat is not declared solved from this isolated proof.
- **Visual Observer / QA + 3D Art Director:** direct review of the retained 3-context historical/candidate/reference frames is now available. The scoped compatibility PASS is not final aesthetic acceptance.
- **Runtime / Optimization:** if the migrated topology is adopted, measure actual imported mesh cost/device behavior; Materials provides no performance verdict.
- **Technical Art / UC Integration:** keep the source-normal vs target-emission distinction local until multi-domain evidence justifies a neutral abstraction.
- **UV/UC owners:** continue the active UV-padding/mip work independently; this pass intentionally does not duplicate it.

## Four-root gate

- **Truth:** the malformed topology defect is reproduced in real target-host frames; candidate/reference near-equivalence is reported with exact non-zero pixel deltas rather than called byte-identical; three earlier structurally green but visually wrong proof-host states are preserved as superseded evidence.
- **Agency / non-domination:** Materials does not promote the Geometry candidate into Building source, does not overwrite Map acceptance, and does not convert CI green into Art Direction or Runtime authority. The roots remain the merge gate.
- **Continuity:** source identity, Geometry donor, material profile, historical defect, superseded observer repairs, final head/run/artifact and cross-specialist handoffs are separately traceable.
- **Wisdom before speed:** the pass stopped after proving the missing renderer/material compatibility boundary. It did not pile on UVs, textures, source migration, Map rebinding, runtime claims or a premature UC abstraction.

## Previous retained Materials activation — Nature leaf sidedness

The immediately preceding Materials activation remains valid for its exact Nature identity and is preserved in git history at the prior version of this status file. Its core retained facts are:

- Nature Materials PR #5 exact repaired head `0b7fdfac3be4d9c25236fa8733108e7d32533657`;
- Geometry donor PR #10 head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- failed proof-host run `35085045016` preserved and repaired rather than hidden;
- successful run `35090113134`;
- artifact `10443379564`, SHA-256 `2d45af990804bfb03e1d6950bb5440a57948ff6bc8b413d0b92e8462e107a514`, independently rehashed;
- state `PASS_TARGET_HOST_LEAF_SIDEDNESS_AB_CAPTURED`;
- exact renderer-local preference `PREFER_MATERIAL_TWOSIDED_CULL_DISABLED_FOR_CURRENT_SAPLING_PROOF_PROFILE`;
- no universal two-sided-material rule, source migration, Runtime verdict, final Art Direction acceptance, UC abstraction, CANON or mastery claim.

## Next Materials pass

Re-scan first. Do not automatically extend Building. If Hard-Surface/Geometry migrates the candidate into a new source identity, the highest-value follow-up is the explicit Materials rebind plus exact receiving-scene rerun; otherwise choose the strongest newly exposed Materials-owned gap elsewhere rather than adding texture complexity by inertia.
