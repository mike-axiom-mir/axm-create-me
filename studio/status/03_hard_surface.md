# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_OBJECT_REGISTRATION_KEY_FASTENER_CLEARANCE / EXACT BILATERAL SOURCE FRAMES PRESERVED / NO SOURCE GEOMETRY CHANGE / BUILDING GEOMETRY HOLD RETAINED / NO UC EXTRACTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the prior Hard-Surface status, newest specialist state, and current design-constellation PR state before selecting work.

`axm-create-me` remains coordination-only. Product/evidence implementation in this activation is confined to `mike-axiom-mir/axm-object-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Hard-Surface status remains recoverable in Git history at blob `0f77bca7c3abd08d42c5e7b4142dfa12aa356b03`. Its exact registration-key result remains valid and is not rewritten.

## Constellation / duplication scan

All eleven design domains were rechecked against current open work and current specialist coordination:

- **Weapon:** no active evidence-backed manufactured consumer. Do not invent a weapon for department count.
- **Armor:** no active source-owned fit/interface lane; Character form remains upstream of Armor fit.
- **Character:** Organic PR #2 is still under form/transition/deformation review, not a Hard-Surface construction surface.
- **Unit:** no evidence-backed manufactured requirement justifying a new lane.
- **Animal:** current value is Organic / Geometry / Rigging / Technical Art / Animation; no Hard-Surface ownership gap.
- **Building:** Hard-Surface PR #2 remains the exact pavilion source. Materials/Map receiving lookdev has now passed the scalar-PBR focal-weight question, and Art Direction explicitly says **no Building geometry repair is requested from current receiving evidence**. The triangular front-panel presentation caveat remains unclassified, so Hard Surface does not rewrite geometry to chase a screenshot pattern.
- **Nature:** active source-lineage/topology/culling migration work is Nature / Geometry / Technical Art / Environment owned.
- **Weather:** active procedural/VFX state remains outside Hard Surface.
- **Map:** current receiving-scene Materials / Environment / VFX / Runtime work is not source hard-surface authoring.
- **Object:** Hard-Surface PR #9 added the asymmetric registration datum; Rigging proved its lid clearance; Procedural proved empty/left/right/bilateral source-space occupancy; Animation owns lid timing; Technical Art owns target-host transport. One precise Hard-Surface composition question remained unproved: whether the new registration datum consumes the source-owned fastener-axis clearance reservations around the existing four-point mount.
- **Misc:** no independent manufactured requirement worth pattern cloning.

Current specialist state supports that selection:

- Art Direction explicitly holds Building geometry stable and requests no Hard-Surface repair there.
- Rigging proves the Object registration pin remains `0.012 m` outside the articulated lid's invariant X extent, but explicitly does not own fastener/serviceability geometry.
- Procedural consumes the exact Object fit + registration identities but does not prove interface serviceability.
- Capability Cartography still separates Layer-A source interfaces from live Layer-B runtime attachment and Layer-C physical constraints; this pass remains Layer A.
- Visual QA has no Object runtime/visual acceptance to inherit and is currently occupied by the Nature culling defect.

The selected lane therefore does not duplicate an active specialist implementation.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-object-design#12 — Hard Surface: preserve fastener clearance around registration key`**

Branch:

`studio/hard-surface-fastener-clearance-001`

Exact base / prerequisite:

- Hard-Surface PR #9 head `3f091bda68b33482bdefe1cf4adf97caf9c0c87e`;
- base branch `studio/hard-surface-service-module-registration-key-001`.

Exact tested candidate head:

`457788296512134ba825b110dd9c176e02ebecd5`

PR state after exact evidence:

**OPEN / DRAFT / MERGEABLE**.

No host, module, socket, mount-pattern, registration-datum, hinge, material, rig, animation or target-host source was changed. This lane adds one Object-owned clearance contract and verifier over the exact existing sources.

## Why this is a real Hard-Surface gap

PR #9 proved that an asymmetric physical pin/recess removes the mount pattern's 180-degree orientation ambiguity. The exact module source already reserves:

`bolt_axis_clearance_radius_m = 0.01 m`

around each of the four mount axes.

The prior registration proof checked orientation, pin/recess radial and axial fit, and footprint edge margins, but it did **not** ask whether the newly added registration feature intrudes into those existing reserved fastener-axis zones.

That distinction matters mechanically even before real bolts or tool geometry exist:

> **Adding a registration datum to a proven interface should not silently consume the interface's already-reserved fastener-axis clearance.**

This is a reusable Hard-Surface lesson, but current evidence supports only an Object-local executable contract. No shared schema is extracted from one family.

## Exact source identities preserved

- host asset: `modular-equipment-case-001`;
- host SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module asset: `utility-module-001`;
- module SHA-256: `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`;
- registration asset: `utility-module-registration-key-001`;
- registration SHA-256: `bb01fef7bfb22a0f9b290c376c1451a2524e068b618f684f605d746257a0e989`;
- new clearance contract: `utility-module-fastener-clearance-001`;
- clearance source SHA-256: `e243a334f3510704758cbe935bea9161dca79f9862afe0e0e9b0cca9ab34ae7f`;
- source-owned bilateral frames: `left-service-socket` / `right-service-socket`.

The existing four bolt offsets remain exactly:

- `[-0.038,-0.025] m`;
- `[-0.038,+0.025] m`;
- `[+0.038,-0.025] m`;
- `[+0.038,+0.025] m`.

The registration datum remains exactly `[+0.027,+0.014] m` local lateral/up with host pin radius `0.0025 m` and module recess radius `0.0030 m`.

## Smallest implementation

Added only:

- `assets/modular-equipment-case-001/utility-module-fastener-clearance-001.json`;
- `tools/verify_service_module_fastener_clearance.py`;
- `tests/test_service_module_fastener_clearance.py`;
- `.github/workflows/object-service-module-fastener-clearance.yml`.

The verifier:

1. validates exact host/module/registration identities;
2. reruns `PASS_ASYMMETRIC_REGISTRATION_KEY_PROOF` rather than assuming it;
3. takes the exact module-owned `0.01 m` bolt-axis clearance radius as the only reserved radius;
4. checks all four reserved circles remain strictly inside both host and module interface footprints;
5. checks all four reserved circles remain mutually non-overlapping;
6. checks the host pin remains outside every reserved circle;
7. checks the larger module recess remains outside every reserved circle;
8. transforms the same local key/bolt geometry through both exact bilateral socket frames and requires local/world distance preservation;
9. fails closed rather than moving the key, bolts, footprints or socket frames to manufacture a pass.

A retained SVG visualizes the local structural reservation only. It is evidence aid, not Art Direction / Visual QA acceptance.

## Exact structural result

Scoped result:

**`PASS_REGISTRATION_KEY_PRESERVES_FASTENER_AXIS_CLEARANCE`**

Exact retained measurements:

- reserved fastener-axis radius: `0.010 m`;
- minimum fastener-to-fastener reserved-surface clearance: **`0.030000000000000002 m`**;
- minimum fastener reservation to host footprint edge: **`0.009999999999999997 m`**;
- minimum fastener reservation to module footprint edge: **`0.003999999999999998 m`**;
- minimum fastener reservation to registration **pin** surface: **`0.0030563491861040457 m`**;
- minimum fastener reservation to registration **recess** surface: **`0.0025563491861040457 m`**;
- left/right local-to-world key/bolt distance residual: **`1.3877787807814457e-17 m`** on each frame, numerical zero under the verifier's `1e-9 m` frame bound;
- both exact sockets return `PASS_BILATERAL_SOURCE_FRAME_CLEARANCE`.

The tightest relation is therefore the module recess versus the nearest `(+0.038,+0.025)` fastener-axis reservation: center distance `0.015556349186104046 m`, minus `0.010 m` reserved radius and `0.003 m` recess radius leaves **`0.0025563491861040457 m` positive source-space separation**.

No tolerance, driver size or fastener-head dimension was invented to produce this result.

## Failure bounds

Retained unit controls fail closed on:

- moving the registration datum into a reserved fastener-axis circle;
- increasing the reserved axis radius until it breaks the module footprint;
- wrong registration-source identity.

The inherited registration verifier simultaneously retains its own centered-key, edge-margin, radial-clearance and source-identity controls.

The policy is additive: this lane cannot relocate existing source features, weaken PR #9, or silently widen a footprint to obtain PASS.

## Exact-head CI and retained evidence

Exact-head workflow:

`35072829752 — Object service-module fastener-clearance evidence` — **SUCCESS**.

- Python 3.11: compile PASS, full repository tests PASS, exact evidence build PASS, artifact upload PASS;
- Python 3.13: compile PASS, full repository tests PASS.

Inherited exact-head workflows also succeeded on the same head:

- `35072829613 — Object service-module registration-key evidence` — SUCCESS;
- `35072829601 — Object service-module fit evidence` — SUCCESS;
- `35072829510 — Object hard-surface interface evidence` — SUCCESS.

Retained artifact:

- ID `10436564156`;
- name `utility-module-001-fastener-clearance-evidence`;
- size `6,392 bytes`;
- exact head `457788296512134ba825b110dd9c176e02ebecd5`;
- Actions SHA-256 `7773d74c9113055f36ded836e9dcb10fd71ed8e18709918f51ae65a084170c15`.

The artifact was downloaded after CI and independently rehashed to the same SHA-256. Its retained `exact-head.txt` reproduces the exact candidate head. The receipt reproduces all metrics above and includes exact copies of host/module/registration/clearance sources plus the structural proof SVG.

## Cross-domain / reusable placement decision

No Building, Weapon, Armor, Unit or Misc source is changed.

Building remains deliberately untouched because:

- Art Direction now explicitly says current receiving evidence requests **no Building geometry repair**;
- Building does not currently have an orientation-registration datum equivalent to Object PR #9;
- its symmetric four-point panel pattern may intentionally remain orientation-agnostic;
- copying this serviceability contract there without a concrete need would turn a useful Object lesson into speculative duplication.

No UC extraction is justified. The generic lesson is currently conceptual:

> interface fit, orientation registration, fastener-axis reservation, articulation clearance, runtime binding and physical attachment constraints are separate evidence questions even when they refer to the same module.

Current ownership remains:

- Object Hard Surface: source interface / registration / reserved service geometry;
- Rigging: articulated coexistence;
- Procedural: deterministic source-space occupancy configurations;
- Technical Art: target-host transport/binding evidence;
- Runtime: future live behavior/performance;
- Cartography: placement decision across repeated independent domains;
- UC: generic machinery only when repeated evidence supports extraction.

PR #12 is still one Object family, so it does not satisfy Cartography's missing second independent live Layer-B runtime attachment consumer and does not establish Layer-C attachment physics.

## Truth boundary / non-claims

This activation proves only that the exact PR #9 registration feature preserves the exact existing source-owned planar fastener-axis clearance reservations on both bilateral service frames.

It does **not** establish:

- an actual bolt, screw, insert or fastener-head geometry;
- driver/tool access envelope or human serviceability;
- fabricated through-holes or blind-recess manufacturing feasibility;
- thread engagement or retention;
- pull-out/shear strength, load, fatigue, vibration, wear or sealing;
- manufacturing tolerance stack;
- full 3D mesh collision or interference;
- runtime attach/detach/follow/swap behavior;
- 3D physics constraints or break behavior;
- gameplay acceptance;
- final topology, bevel/detail, UVs, materials or visual quality;
- Art Director / Visual Observer acceptance;
- that Building or another domain needs this exact contract;
- a universal attachment / fastener / serviceability schema;
- UC extraction or Profession Fabric promotion;
- CANON, production readiness, merge authority or Hard-Surface mastery.

## Root gate

- **Truth:** the new registration feature is checked against the pre-existing reserved fastener geometry instead of assuming coexistence. Exact source hashes, measurements, workflows, artifact identity and independent archive rehash are retained. Tool/fastener/manufacturing claims remain false.
- **Agency / non-domination:** Object retains source-interface meaning. Building is not forced to inherit the pattern. Rigging, Procedural, Technical Art, Runtime, QA and Art Direction keep their own gates. CI proves only the declared structural contract.
- **Continuity:** PR #12 stacks exactly on PR #9 and leaves all accepted host/module/registration source bytes unchanged. Previous registration, fit, Rigging, Procedural and Technical Art evidence remains traceable rather than silently rebound.
- **Wisdom before speed:** one newly introduced physical feature was checked against the closest existing source-owned mechanical reservation. No fabricated bolt system, full collision solver, Building rewrite or UC abstraction was invented without receiving evidence.

## Handoffs

- **Object Hard-Surface PR #9:** PR #12 closes one previously unproved coexistence question for the exact registration datum: it preserves the existing fastener-axis reservations. PR #9 source geometry remains unchanged.
- **Object Rigging PR #8:** no rerun is required from this pass because pin/recess dimensions and source identity did not change. If a future Hard-Surface revision moves/enlarges the registration feature, rerun both this fastener-clearance proof and Rigging's lid-clearance certificate before inheriting either PASS.
- **Object Procedural PR #11:** no source rebind is required. Its exact host/module/registration inputs are unchanged; this new PASS is not runtime attachment or procedural acceptance.
- **Technical Art / Runtime:** no target-host fastener geometry or live attachment behavior is implied. Keep transport/live behavior separate.
- **Building Hard Surface:** keep geometry stable under current Art Direction. Revisit this lesson only if an independent Building source introduces a real registration/serviceability conflict.
- **Capability Cartographer:** record `fit -> orientation registration -> reserved fastener clearance` as three distinct Layer-A questions inside this one Object family; do not promote shared machinery until another independent source family reproduces the executable need.
- **Universal Creation:** no change requested.
- **Visual Observer / Art Director:** no visual-quality claim is requested from an analytic reservation proof.

## Next Hard-Surface pass

1. Re-scan newest Art Director / Visual QA / specialist handoffs first.
2. Do not deepen Object automatically; only reopen it if a new physical interface element changes exact occupied/reserved geometry.
3. If real fastener or hole geometry is later authored, test that actual geometry rather than relabelling this planar reservation PASS as fabrication/tool acceptance.
4. Keep Building frozen unless direct evidence requests a source-form repair.
5. Do not populate Weapon / Armor / Unit / Misc for example count alone.
6. Preserve domain-owned semantics and the no-automatic-UC-extraction boundary.
