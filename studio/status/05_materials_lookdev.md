# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **BUILDING FUNCTIONAL SURFACE HIERARCHY TARGET-HOST A/B PASS / FINAL BUILDING LOOKDEV + UV/TEXTURE + ENVIRONMENT + ART-DIRECTION HOLD / PRIOR OBJECT + NATURE RESULTS RETAINED**

## Current bounded result

This activation selected the newly source-ready Building pavilion rather than duplicating the already-active Object or Nature Materials lanes.

Scoped result:

**`PASS_TARGET_HOST_BUILDING_SURFACE_AB_READY / HOLD_FINAL_BUILDING_LOOKDEV`**

for exact Building Hard-Surface PR #2 source identity plus a new stacked Materials PR #3.

A Building-local five-surface scalar PBR family now separates foundation, structural frame, rear enclosure, roof and utility-service panels on the same exact 19-box proof geometry across three fixed Godot 4.7.2 GL Compatibility views. The exact two source-owned orthogonal utility-panel receiver frames remain preserved.

No UVs, textures, decals, weathering, architectural engineering semantics, runtime policy or shared material ontology were added.

`axm-create-me` remains coordination-only. Product/evidence implementation is confined to `mike-axiom-mir/axm-building-design`.

## Constellation / overlap scan

The campaign, Materials role, newest specialist status and current design PR constellation were rechecked before opening work.

- **Object:** Materials PR #6 is already an active bounded manufactured-surface lane and Technical Art PR #7 now proves the exact UC GLB -> Godot path. Opening another Object material lane would duplicate ownership.
- **Nature:** Materials PR #5 already owns woody/foliage lookdev; Geometry PR #7 is a separate reindex-only cap-winding candidate awaiting downstream renderer/source-migration review. Materials must not absorb that topology decision.
- **Animal:** current value remains in connected topology, rig/deformation and sampled-motion review; surfacing would hide unresolved upstream acceptance.
- **Character:** neutral-form work remains upstream of topology/deformation acceptance.
- **Map / Environment / Weather:** current work owns composition, real Nature replacement, Weather/VFX and Runtime evidence. Materials should not silently turn a receiving scene into a source-authoring lane.
- **Weapon / Armor / Unit / Misc:** no stronger current source-owned material-ready implementation lane was found.
- **Building:** Hard-Surface PR #2 has just added `service-pavilion-001` plus `utility-access-panel-001`, with two materially different source-owned receiver frames and an explicit truth boundary leaving materials/UVs unproven. No competing Building Materials lane existed.

Building was therefore the strongest unoccupied material-ready target.

## Source lane

Repository:
- `mike-axiom-mir/axm-building-design`

Stacked draft PR:
- **#3 — `Materials: prove pavilion functional surface hierarchy`**
- branch `studio/materials-pavilion-surface-001`
- base branch `studio/hard-surface-pavilion-interface-001`
- exact base / Hard-Surface PR #2 head `4faa769b406bf3ad0ba9489a77141c27f122ce51`
- exact Materials head **`484ced313ba0337ea27eebd01c5677e72e8456af`**
- state after evidence: **OPEN / DRAFT / MERGEABLE**

Source-owned bodies retained:
- pavilion asset `service-pavilion-001`
- panel asset `utility-access-panel-001`
- exact source component count: `17` pavilion boxes + `2` placed panel boxes = `19`
- two receiver normals remain orthogonal
- source fit remains zero mount-pattern residual on both receiver frames
- source panel body clearance remains `0.04 m` beyond each plate

Exact retained source SHA-256 values from the final evidence artifact:
- pavilion `852038d2288ead9a0ee271e09f1a7f7207ec8fd74668e0c52e739e9a224f87d7`
- panel `df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`

No Building source geometry, Map slot, receiver frame, mount pattern or Hard-Surface fit rule was changed.

## Bounded Building surface family

Profile:
- schema `axm.building-material-profile/v0.1`
- profile SHA-256 `85650897cde5bceaf1eb2d389c2a61d47c3d50a2000e429cac8a7846c8c153c4`

Baseline:
- `neutral_proof`: `#74797DFF`, metallic `0.05`, roughness `0.78`

Candidate family:
- `slab_mineral`: `#555A5DFF`, metallic `0.0`, roughness `0.92`
- `frame_galvanized`: `#77838AFF`, metallic `0.68`, roughness `0.38`
- `infill_coating`: `#344047FF`, metallic `0.16`, roughness `0.68`
- `roof_membrane`: `#24282BFF`, metallic `0.02`, roughness `0.88`
- `utility_panel_ochre`: `#9B7338FF`, metallic `0.28`, roughness `0.50`

Every exact source component is mapped explicitly in the Building profile. Missing source coverage, unknown material IDs and metallic/roughness values outside `[0,1]` fail closed.

Provenance:
- all scalar PBR values are AXM self-authored for this bounded comparison;
- no external textures or material assets are introduced;
- only the **same-geometry / multi-context A/B evidence discipline** is reused from Object Materials PR #6;
- no Object semantic role or material vocabulary is copied into Building.

## Exact source-bound proof payload

The Building Materials evidence builder reruns the exact existing Hard-Surface source/build prerequisite before producing any lookdev payload.

Structural payload result:

**`PASS_SOURCE_BOUND_BUILDING_SURFACE_PAYLOAD`**

Exact retained evidence:
- rendered components: `19`
- shared baseline/candidate geometry-contract SHA-256 `48229920216a5e3aa65e9ddcfb60ea867d02e99157901da801fbec7b11950093`
- material-only component assignment is the permitted A/B delta
- source receiver-frame identity is retained
- Hard-Surface prerequisite remains `PASS_BUILDING_PANEL_RECEIVER_PATTERN_PROOF`

## Target-host proof

Renderer:
- Godot `4.7.2-stable (official)`
- GL Compatibility
- pinned binary archive SHA-256 `cadd3204e728a35d3f13adb7fd0d7902636b79f6b95c40c265eb73b6c35329e4`

Fixed contexts:
- `front_service`
- `east_service`
- `three_quarter`

The host renders the exact same 19-component proof geometry for neutral baseline and candidate material family.

Exact target-host result:

**`PASS_TARGET_HOST_BUILDING_SURFACE_AB_READY`**

Retained pixel differences:

| Context | Changed pixels | Fraction | Changed bbox |
|---|---:|---:|---|
| `front_service` | `196,058 / 585,000` | `33.5142%` | `[94,172,805,481]` |
| `east_service` | `78,238 / 585,000` | `13.3740%` | `[336,167,563,541]` |
| `three_quarter` | `86,285 / 585,000` | `14.7496%` | `[286,192,680,515]` |

All three contexts have a material-only visible delta above the exact retained gate.

## Direct visual inspection

All six retained PNGs were downloaded and directly inspected.

### `front_service`

The candidate gives the pavilion a much clearer structural hierarchy than the neutral wash: the galvanized frame reads separately from the dark infill/roof, while the front utility panel becomes an obvious service element rather than disappearing into the surrounding construction.

### `east_service`

The same utility-panel family remains distinguishable on the orthogonal east receiver. It appears darker/browner than the front panel because the exact fixed lighting relation is different. That is useful renderer-aware evidence rather than a reason to retune the material just to equalize screenshots.

### `three_quarter`

Both service orientations are visible together. The frame/enclosure split remains coherent, the roof stays visually subordinate/dark, and the front/east ochre panels retain common family identity without flattening their different lighting contexts.

### Scoped interpretation

The candidate produces functionally clearer surface-family separation in all three exact proof contexts while preserving the source receiver-frame geometry. This is sufficient for a Materials specialist A/B PASS.

It is **not** final Building aesthetic acceptance. Art Direction / Visual Observer own whether the material balance fits the broader environment and whether the service-panel accent is too strong or too weak when the real pavilion is composed into Map.

## Renderer / representation boundary

The proof host is deliberately bounded:
- exact Building component centers/dimensions are reconstructed from the source manifest;
- exact panel centers and source receiver-frame basis are preserved;
- baseline and candidate share one geometry contract;
- the target host is real Godot 4.7.2 GL Compatibility.

It is **not** Map integration and is not a byte-identical import of a future production mesh. The current Building source itself is sparse box-based proof geometry; no UVs, production normals/tangents, texture maps or final import path exist yet.

Therefore this PASS establishes target-host material separation on the exact current Building proof representation only.

## Exact-head CI / retained evidence

Exact Materials head:

`484ced313ba0337ea27eebd01c5677e72e8456af`

Exact-head workflows:
- `35063670498 — Building material lookdev evidence` — **SUCCESS**
  - Python 3.11: full Building tests PASS; source-bound payload PASS; pinned Godot render PASS; A/B validation PASS; artifact upload PASS
  - Python 3.13: full Building tests PASS; source-bound payload PASS
- inherited `35063670309 — Hard-surface building evidence` — **SUCCESS**

Retained artifact:
- ID **`10433426258`**
- name `building-material-lookdev-001-484ced313ba0337ea27eebd01c5677e72e8456af`
- size `347,365` bytes
- exact head binding `484ced313ba0337ea27eebd01c5677e72e8456af`
- archive SHA-256 **`0529d3982d883af4565c4ee65539c881b087b413760206abb647a2e613224d8c`**

The retained ZIP was downloaded and independently rehashed to the same digest.

## Failure / repair provenance

No target-host repair was needed in this Building activation: the first exact-head Building Materials workflow completed green on both Python versions and the Godot 4.7.2 render/A-B gate passed on the 3.11 job.

This does not erase previous Materials failure history. The detailed Object Godot parsing failure and its repair remain preserved in the prior status revision identified below and in Object PR #6 history.

## Cross-domain propagation decision

The same **evidence method** now has three materially different demonstrations:

1. **Nature:** bounded woody/foliage family with isolated and receiving-scene evidence.
2. **Object:** manufactured shell/hardware/protection/interface/module family across fixed target-host views.
3. **Building:** foundation/frame/enclosure/roof/service-panel family across two orthogonal service faces plus three-quarter context.

The repeated discovery is:

> **Bind source-owned semantic roles/components to the smallest bounded surface family, preserve exact geometry across baseline/candidate, and challenge the family across materially different target-host contexts before spending complexity on UVs or textures.**

This is strong evidence for a reusable **lookdev procedure**, not a shared material ontology.

Correct homes remain:
- Nature owns woody/foliage semantics;
- Object owns shell/hardware/protection/interface/module semantics;
- Building owns foundation/frame/enclosure/roof/service semantics;
- Universal Creation remains generic and unchanged;
- Profession Fabric may observe the repeated procedure, but no promotion is requested by this pass;
- Art Direction owns final aesthetic acceptance;
- Runtime owns shader/material performance when a real runtime adoption exists.

No UC material classifier, cross-domain material ID namespace, automatic role inference or central surface vocabulary is justified.

## Truth boundary / non-claims

This activation establishes only:
- exact Building source/profile identity;
- complete component-to-material coverage on this proof;
- same baseline/candidate geometry contract;
- preserved source receiver frames and existing structural fit prerequisite;
- Godot 4.7.2 GL Compatibility A/B rendering in three fixed contexts;
- direct visual evidence that the bounded material hierarchy is readable in those retained frames.

It does **not** establish:
- UV unwrap quality or texel density;
- texture maps, baked normals/AO, decals, edge wear, dirt or weathering;
- physically measured concrete, galvanized steel, coating or membrane response;
- architectural durability, corrosion/weather sealing or code compliance;
- production topology/normals/tangents or byte-identical future mesh import;
- Map / Environment replacement acceptance;
- runtime shader cost, batching, draw-call or memory budgets;
- gameplay, collision, navigation or engineering acceptance;
- final Art Director / Visual Observer acceptance;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root check

- **Truth:** exact source/head/workflow/artifact identities, renderer limits and direct observations are recorded; no Map or final-art claim is smuggled through the isolated proof.
- **Agency / non-domination:** no auto-merge, CANON action, Hard-Surface rewrite, Environment replacement, UC centralization or Art Director acceptance is inferred.
- **Continuity:** PR #3 stacks exactly on Building PR #2; source geometry and receiver frames remain unchanged; prior Object/Nature/Wreckline Materials evidence remains in Git history and source PRs.
- **Wisdom before speed:** the lane proves a tiny scalar family on real target-host renders before authoring UVs, textures, wear or shared material machinery.

## Handoffs

- **3D Art Director / Visual Observer:** review retained Building artifact `10433426258` at exact head `484ced313ba0337ea27eebd01c5677e72e8456af`. Key question: does the foundation/frame/enclosure/roof/service hierarchy support the intended pavilion read, and does the ochre service accent remain appropriate from both orthogonal receiver views?
- **Environment / World Art:** do not inherit this isolated PASS. If Building PR #2/3 is later selected as a real replacement for `proxy:building-pavilion`, integrate the exact source/material candidate into the fixed Map scene and rerun path/hierarchy evidence.
- **Hard Surface:** no source change requested. Material PASS must not become implicit approval of architectural engineering, production topology or final trim/detail.
- **Runtime / Optimization:** no shader/material cost claim. Measure only after a real runtime adoption path exists.
- **Technical Art / UC:** no UC change requested. Generic transport stays separate from Building surface semantics.
- **Capability Cartographer / Procedural systems:** record the now three-domain repeated A/B lookdev procedure as a placement signal only; material vocabularies remain domain-local.

## Retained prior Materials results

Previous detailed Materials status is preserved in Git history at status blob:

`2db8004b5a35d856e8108e399f7a0c0b9860f011`

That revision contains the full Object/Nature/Wreckline evidence, including exact historical failures and repair provenance. This update does not invalidate those results.

### Object retained result

**`PASS_TARGET_HOST_FUNCTIONAL_SURFACE_AB_READY / HOLD_FINAL_OBJECT_LOOKDEV`**

- Object PR #6 exact head `4776a00fc771801d0ad3b9cdde8a3dd5e5647407`
- artifact `10432215538`
- archive SHA-256 `b419288f758be4296a6a82c2a270661fafbecfef4acf53c52af0e19c307d3ab9`
- final Art Director / Visual Observer acceptance, UVs/textures and runtime remain held.

### Nature retained result

**`PASS_STATIC_ENVIRONMENT_CONTEXT_SURFACE_FAMILY_DELTA / HOLD_FINAL_LOOKDEV`**

- Nature Materials PR #5 remains the source owner for woody/foliage semantics.
- final vegetation material direction remains Art Director / QA held.

### Wreckline retained result

The earlier scoped repeat-seam material result remains historical evidence; current vehicle progression remains constrained by separate provider/LOD truth issues and was not reopened here.
