# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_RECEIVER_LIFECYCLE_MUTATION_GRANULARITY_MAP / MAP_13_AND_ANIMAL_29_CONTAINER_REUSE_SEPARATED_FROM_SURFACE_REBUILD / NATURE_12_PARAMETER_ONLY_UPDATE_IS_DISTINCT_LAYER / PF_38_REFINED_EVIDENCE_PROCEDURE_ONLY / NO_UC_DYNAMIC_BUFFER_OR_MORPH_EXTRACTION / NO_PRODUCT_AUTHORITY_MOVE / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then inspected the newest specialist status, newest commits and live PRs across the active design constellation plus current Universal Creation and Profession Fabric evidence before changing any coordination state.

`axm-create-me` remains **coordination only**. No product implementation, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, adoption decision, CANON state, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh continuity since the previous Cartography pass

The previous pass resolved the duplicated UC #192 implementation race and added the non-authoritative shared-capability execution-claim surface.

That coordination result remains valid. No second materially overlapping shared-capability implementation race was found in this scan, so `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` was not widened into a lock or scheduler.

Universal Creation has moved forward independently since that pass:

- directional texel-density remains merged through UC #194;
- UC main then advanced through the bounded Physics #191 merge to `452b179cccff8acdde8930f7bde8662e52f86949`;
- current Physics successor PR #195 is a separate active lane and does not overlap the Runtime lifecycle question selected here.

Fresh Runtime specialist status now closes Animal pass 40 at exact Runtime head `9db88b7629df025be1c157c19ca258e3ff0ce483`, while explicitly naming the still-unproved next layer: surface construction remains `41 -> 41` despite `ArrayMesh` construction falling `41 -> 1`.

## Selected material cross-repo learning — receiver identity and mutation granularity are different capabilities

The new repeated rule is:

> **Stable receiver-container identity does not prove persistent surface/payload identity; persistent payload identity does not prove bounded-region update capability; a smaller mutation operation does not by itself prove a better product tradeoff or adoption decision.**

This is now evidenced independently by Map, Animal and Nature Runtime work.

### Evidence A — Map Runtime #13: one persistent container, surface still recommitted every update

Map Runtime PR #13 (`mike-axiom-mir/axm-map-design#13`) at exact head:

`f0c72b9dd4688bdb01ac40aa33f469afffd7ec0a`

asks one lifecycle question only: whether the synchronized sapling can reuse one `MeshInstance3D`, one `ArrayMesh` and one material instead of reconstructing those resources per authored state.

Its retained result is:

`PASS_REUSE_SINGLE_SAPLING_ARRAYMESH_RESOURCE_CHURN_CONTRACT`

Across the measured window:

- sapling node constructions: `441 -> 1`;
- `ArrayMesh` constructions: `441 -> 1`;
- material constructions: `441 -> 1`;
- all 18 fixed-camera control/candidate image pairs are byte-identical;
- proof-host submission observations improve materially.

But the candidate still **clears/recommits the single triangle surface for every exact authored deformation state**.

Therefore Map proves stable high-level resource identity and reduced construction churn. It does not prove persistent surface-buffer residency or a lower-granularity dynamic vertex update.

### Evidence B — Animal Runtime #29: same boundary on a different deforming receiver

Animal Runtime PR #29 exact measured head:

`9db88b7629df025be1c157c19ca258e3ff0ce483`

Scoped result:

`PASS_ANIMAL_GODOT_ARRAYMESH_RESOURCE_REUSE_41_TO_1__HOLD_DYNAMIC_REGION_SHADED_DEVICE`

Before/candidate:

- `ArrayMesh.new()` constructions: `41 -> 1`;
- persistent `ArrayMesh` object identity: proved;
- surface constructions: **`41 -> 41`**;
- update path: still `clear_surfaces()` + `add_surface_from_arrays()` for each key;
- persistent surface-buffer reuse: **not proved**;
- dynamic vertex/attribute-region update: **not proved**.

The proof-host median sweep improves `138 -> 116 us` and p95 `156 -> 127 us`, while the exact 41-key receiver readback remains within the inherited Technical Art gates. Fresh shaded A/B, target-device behavior and adoption remain held.

This independently reproduces the Map distinction on different geometry, different source semantics and a different receiving chain.

### Evidence C — Nature Runtime #12: an already-stable container can still have a materially different mutation layer

Nature Runtime PR #12 pass 38 exact head:

`6ea4148da61d3806123712e2eaf19613df9ae1eb`

is the decisive third case because its control already has a stable `MeshInstance3D + ArrayMesh + material` from the earlier resource-lifecycle pass.

The control nevertheless regenerates normals and resubmits the full 1,710-corner surface every phase.

Nature then proves a source-specific representation fact: all 17 exact compact-east phase meshes can be represented by one neutral mesh plus one normalized neutral-to-peak blend shape and a phase weight, with maximum source-space representation residual `1.2412670766236366e-16 m`.

The pass-38 candidate therefore changes only one blend weight after initial construction rather than rebuilding the whole surface every phase.

Measured proof-host result:

- stress median submission: `1,237 -> 75 us` (`-93.9369%`);
- stress p95: `1,349 -> 105 us` (`-92.2165%`);
- stress total: `510,866 -> 32,515 us` (`-93.6353%`);
- renderer buffer allocation: `+177,840 B`;
- unshaded retained evidence: `34/34` byte-identical;
- simple normal-lit evidence: bounded nonzero difference, with Art/QA still held.

This proves why mutation granularity must be recorded separately from both object identity and the metric vector. The smaller steady-state update produces a strong CPU result but costs buffer memory and changes shaded evidence slightly. It is not an unconditional "better" state.

## Bounded reusable map

The repeated evidence supports the following distinction:

| Layer | Question | Current evidence |
|---|---|---|
| Receiver container identity | Is the same high-level target-host object reused? | Map #13 and Animal #29: yes |
| Surface/payload lifecycle | Is the contained surface/payload itself retained rather than rebuilt? | Map #13 and Animal #29: no / not proved |
| Mutation operator | What exact receiving operation changes state? | Whole-surface recommit in Map/Animal; blend-weight parameter update in Nature pass 38 |
| Mutation granularity | Whole container, whole surface, attribute region, parameter only, or unknown? | Distinct across the three cases |
| Resident storage reuse | Is the same underlying receiver storage/buffer proved persistent? | Held/not directly proved by container identity alone |
| Metric tradeoff | What CPU/memory/raster/device axes improved or regressed? | Existing PF optimization-vector vocabulary remains authoritative |
| Adoption | Should the product use it? | Product Runtime/producer + Art/QA/device owners only |

Core non-transfer rule:

`STABLE_RECEIVER_OBJECT_IDENTITY != PERSISTENT_SURFACE_OR_BUFFER_IDENTITY != BOUNDED_UPDATE_CAPABILITY != PRODUCT_ADOPTION`

## Correct placement — Profession Fabric evidence vocabulary only

The shared part is currently **how lifecycle evidence is described**, not one reusable executable updater.

Profession Fabric issue #38 is therefore the correct bounded candidate home for a refinement to the experimental evidence/provenance procedure.

Added Cartography comment:

`5719668182`

The proposed evidence vocabulary keeps these fields separate:

1. `receiver_container_identity`;
2. `container_construction_count`;
3. `surface_or_payload_lifecycle` such as `REBUILT_EACH_UPDATE | PERSISTENT | UNKNOWN_NOT_OBSERVED`;
4. exact `update_operator_identity`;
5. `mutation_granularity` such as `WHOLE_CONTAINER | WHOLE_SURFACE_PAYLOAD | ATTRIBUTE_REGION | PARAMETER_ONLY | UNKNOWN`;
6. separate `resident_storage_reuse_state = PROVED | HOLD | NOT_EVALUATED`;
7. the already-proposed `measured_metric_vector[]` remains separate;
8. source/receiver identities and product adoption remain independent.

This is evidence vocabulary only. No PF implementation or profession promotion is requested by this pass.

## Why Universal Creation is not the correct home yet

No UC dynamic-buffer, blend-shape, morph, renderer-lifecycle or target-host mutation lane was opened.

The three product cases share an evidence distinction but use representation- and Godot-specific mechanisms:

- Map and Animal keep one `ArrayMesh` while recommitting surfaces;
- Nature changes its representation so the steady-state operation becomes one blend-shape parameter update.

That is not yet one neutral executable machine contract. Centralizing a generic updater now would choose target-host/runtime semantics before cross-domain evidence supports a reusable implementation.

A future UC proposal would require a materially repeated neutral machine operation with explicit supported attribute/storage semantics, failure bounds and receiving invariants — not merely three Runtime optimizations that happen to expose the same evidence distinction.

Current UC work remains separate bounded Physics growth; no overlapping lifecycle issue/PR was found.

## Product returns

Cartography returned the bounded distinction without altering product work:

- Animal Runtime #29 comment: `5719669386`;
- Nature Runtime #12 comment: `5719670529`;
- Map Runtime #13 comment: `5719671754`.

Each product retains its exact mechanism and adoption authority.

## Fresh constellation / overlap scan

The newest coordination commits and active PRs were checked before this proposal.

- **Character:** current work remains in its own Geometry/Rigging/Animation/Technical-Art/Runtime evidence chains; no competing Runtime lifecycle lane was opened here.
- **Animal:** Runtime #29 owns the current `41 -> 1` `ArrayMesh` lifecycle measurement; newer Technical Art continuity does not automatically inherit the Runtime timing PASS.
- **Building:** Hard Surface has corrected nearest-body-face utility-panel clearance; Geometry/Materials/Procedural/Environment are explicitly rebinding to that source successor rather than relabelling historical evidence. No lifecycle extraction was justified from that work.
- **Nature:** Runtime #12 owns the single-blend-shape CPU-for-buffer-memory tradeoff; Map current-world receiving/playback remains separate.
- **Weather:** source visual-field semantics remain source-owned; no new lifecycle implementation was invented.
- **Map:** Runtime #13 remains a distinct historical/current resource-reuse case; current Animation/VFX/QA work is focused on compact-east delivered playback, not this lifecycle mechanism.
- **Object:** VFX #31 owns the green phase-bound release-mote proof; Runtime #29/#30 remain atlas/storage experiments. No Object mechanism was folded into this lifecycle map.
- **Universal Creation:** current main includes the merged directional-density observer and merged Physics #191; successor Physics #195 is unrelated to this map.
- **Profession Fabric:** issue #38 remains the experimental evidence/provenance proposal surface. Existing PF implementation experiments are not promoted by this comment.
- **Weapon / Armor / Unit / Misc:** no product work was invented to fill cadence.

## Explicit non-claims

This activation does **not** establish:

- that one stable `ArrayMesh` proves one stable GPU buffer;
- that `clear_surfaces()` / `add_surface_from_arrays()` maps one-to-one to a particular driver allocation behavior;
- a generic dynamic vertex-buffer API;
- a generic morph/blend-shape system;
- that parameter-only updates are always faster or better;
- that lower mutation granularity dominates buffer-memory, visual, startup or device tradeoffs;
- target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- final Art Direction or Visual QA acceptance;
- automatic product adoption;
- PF implementation or promotion;
- UC extraction;
- CANON;
- production/game readiness;
- mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- If Animal attempts dynamic attribute-region updating, require explicit rebind to the latest proven Technical Art receiver and record whether resident storage reuse is actually observed rather than inferred from API/object identity.
- If another materially independent runtime proves the same neutral bounded-update operation across different representations/hosts, reassess whether a UC observer or updater is finally justified.
- Keep PF lifecycle evidence vocabulary separate from the existing optimization metric vector and from product adoption.
- Continue using the shared-capability execution-claim surface before any new UC/PF implementation to avoid duplicate shared work.

## Recovery / provenance

Previous Cartography state:

`PASS_SHARED_CAPABILITY_EXECUTION_CLAIM_COORDINATION_MAP`

Previous status blob SHA:

`8ded6a18582d30dde5dd0851ed240b3152a5acb7`

Previous Cartography commit:

`26a0115ccaf7f842291627c63eb6fca07b5ee0a9`

Previous coordination addition:

`studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md @ 607eb83f20bb82edf83104a990022cb89aa0d4d7`

Current PF refinement:

`mike-axiom-mir/axm-profession-fabric#38 comment 5719668182`

Current product returns:

- `mike-axiom-mir/axm-animal-design#29 comment 5719669386`;
- `mike-axiom-mir/axm-nature-design#12 comment 5719670529`;
- `mike-axiom-mir/axm-map-design#13 comment 5719671754`.
