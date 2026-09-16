# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **OBJECT INTERFACE STRUCTURAL PASS / PINNED UC SOCKET DESCRIPTOR PASS / VISUAL + ARTICULATION + FIT + RUNTIME HOLD / WRECKLINE PROVIDER HOLD RETAINED**

## Current activation

This activation followed the previous Hard-Surface stop condition instead of repeating the blocked Wreckline rebuild. The exact historical Wreckline provider closure is still incomplete: Technical Art's current provider-import receipt proves that attempted UC commit `ed64069af0ecda34cdba5b5ba68372a6a16a8e02` lacks both `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`. No authentic replacement provider has appeared, so Wreckline PR #6 remains in explicit HOLD and its 35 m visual gate remains unchanged.

The manufactured design scan still showed no competing Hard-Surface implementation lane in Weapon, Armor, Unit, Building, Object or Misc. Character now has an Organic Form body, but that lane is not Hard-Surface and has no accepted Armor/Unit fit target yet. Starting an attachment/armor shell against it would therefore have been premature.

The highest-leverage unoccupied source-owned target was Object Design. I opened one bounded first manufactured object there rather than inventing a broad hard-surface framework or moving Wreckline construction semantics into Universal Creation.

`axm-create-me` remains coordination-only. Product/source implementation in this activation is confined to `mike-axiom-mir/axm-object-design`.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-object-design#2 — Hard Surface: add first explicit object interface proof`**

Branch:

`studio/hard-surface-object-interface-001`

Exact base:

`de0cff81709f7329d6afb9b8c0c4678824523246`

Exact tested PR head:

`32027eabb531dfe22668e9161506077442267099`

PR state at the end of this activation: **OPEN / DRAFT / MERGEABLE**. No merge/CANON authority is inferred.

The source-owned asset is:

`modular-equipment-case-001`

Its scope is deliberately small:

- one primary case body;
- one lid body with an explicit split gap;
- one sparse front service panel;
- two front latch assemblies;
- four feet;
- sparse corner protection;
- one rear five-knuckle coaxial hinge plus pin;
- two bilateral side attachment plates with explicit local normal/up frames and four-bolt plate patterns.

The bounded reusable question is not "can AXM make a box?" It is whether a manufactured source can keep **mechanical interface identity** explicit and testable instead of hiding attachment meaning in incidental mesh coordinates.

## Donor discovery / capability boundary

Before inventing a socket grammar, I searched the wider AXM donor surface because this task exposed an attachment-interface need.

Universal Creation already has a real domain-neutral descriptor contract in its Asset Atom Fabric:

- donor repository: `mike-axiom-mir/axm-universal-creation`;
- exact donor commit: `87f93e1a27b2e3414f6422cd38e31b00e89d6a56`;
- schema: `axm.asset-atom-package/v0.1`;
- donor implementation: `src/axm_uc/asset_atoms.py`;
- atom kind: `socket`;
- socket payload: owner part, name, transform, accepted tags and required flag.

That donor explicitly describes attachment compatibility but does **not** instantiate or prove physical 3D fit. The Object source therefore owns its real plate geometry, local basis vectors, bolt pattern and physical source position, while a derived evidence package projects only the already-existing descriptor fields into the pinned UC validator.

This avoids two opposite errors:

1. creating another generic socket schema in Object Design even though UC already has one;
2. moving equipment-case construction geometry or interface policy into UC merely because UC can validate the descriptor.

No UC file was changed.

## Exact structural source contract

Source schema:

`axm.object-hard-surface/v0.1`

Source SHA-256:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

Declared primary dimensions:

- width: `0.78 m`;
- depth: `0.48 m`;
- body height: `0.30 m`;
- lid height: `0.11 m`;
- body/lid split gap: `0.012 m`.

The two source-owned attachment frames are bilateral:

- `left_service` at X `-0.39 m`, outward normal `[-1, 0, 0]`;
- `right_service` at X `+0.39 m`, outward normal `[+1, 0, 0]`;
- both use up `[0, 0, 1]`;
- both accept descriptor tags `utility-module`, `sensor`, `handle`;
- the plate source carries a `0.12 x 0.09 m` footprint, `0.012 m` thickness and four explicit bolt offsets.

The rear hinge source declares:

- X-axis articulation line;
- 5 alternating body/lid knuckles;
- knuckle radius `0.021 m`;
- pin radius `0.009 m`;
- pin length `0.70 m`;
- minimum required axial knuckle clearance `0.010 m`.

These are authored structural/interface values, not engineering certification.

## Structural evidence

The Object-local generator constructs the exact source into deterministic OBJ geometry and front/side structural proof views. The verifier checks face bounds, degenerate triangles, hinge axial spacing, socket frame normalization/orthogonality and bilateral mirroring.

Exact retained structural result:

**`PASS_STRUCTURAL_INTERFACE_PROOF`**

Measurements:

- vertices: **468**;
- triangles: **812**;
- degenerate triangles: **0**;
- generated components: **31**;
- sockets: **2**;
- hinge knuckles: **5**;
- measured minimum knuckle axial clearance: **0.040 m**;
- required minimum: **0.010 m**;
- generated bounds:
  - X `[-0.435, +0.435] m`;
  - Y `[-0.285, +0.285] m`;
  - Z `[0, 0.422] m`;
- exact hinge-axis evidence origin `[0, 0.252, 0.306] m`, axis `[1, 0, 0]`.

Generated identities:

- OBJ SHA-256: `3e01ef3bf4935ee6aee7c56c03dc0b7f54c308e5ac2eb6a7583252a366901106`;
- front/side proof SVG SHA-256: `de6dc1841c71167c2790e35ee6d6d7a87a254b91a06235b562aaa04c465f52e6`;
- derived UC socket package SHA-256: `41f4a16fc45fce0628567f5125e4635ca8286c74ebe7ba066b9fc1113e68ffa5`.

Negative controls prove that the tests reject:

- a non-orthogonal socket frame;
- overlapping hinge knuckles that violate the minimum axial-clearance contract.

A determinism test independently regenerates OBJ and SVG proof bytes and requires identical hashes.

## Pinned UC descriptor evidence

The CI evidence path checks out the exact donor UC commit and invokes its real `validate_asset_package()` implementation against the Object-derived package.

Exact result:

**`PASS_PINNED_UC_SOCKET_DESCRIPTOR_VALIDATION`**

The normalized package contains:

- one `shape` atom;
- one `part` owner atom;
- two `socket` atoms;
- exact normalized socket names `left_service` and `right_service`.

The validator's observed UC Git head equals the expected pinned donor head:

`87f93e1a27b2e3414f6422cd38e31b00e89d6a56`

The retained validation receipt explicitly keeps all of the following **false**:

- 3D attachment instantiation;
- physical fit testing;
- load testing;
- collision testing;
- runtime testing;
- gameplay acceptance.

Therefore descriptor compatibility is not silently promoted into mechanical fit.

## Exact-head CI and retained evidence

Exact PR head:

`32027eabb531dfe22668e9161506077442267099`

Workflow:

`35055104202 — Object hard-surface interface evidence`

Conclusion: **SUCCESS**.

All three jobs completed successfully:

- structural — Python 3.11;
- structural — Python 3.13;
- pinned-UC socket descriptor validation — Python 3.11.

Retained artifact:

- name: `modular-equipment-case-001-evidence`;
- artifact ID: **10430277734**;
- size: **10,457 bytes**;
- exact head binding: `32027eabb531dfe22668e9161506077442267099`;
- archive SHA-256: `7ac41f95bdbaf900b8903337d33fe1f3420ca400ef606ae6743511a31fd87238`.

The artifact ZIP was downloaded in this activation and independently SHA-256 rehashed; it matched GitHub's retained digest exactly.

Retained evidence contains the exact source JSON, OBJ, structural SVG, structural receipt, derived UC socket package and pinned-UC validation receipt.

## Direct proof-view observation

The exact retained SVG was rasterized and directly inspected after download.

Within this structural line-proof scope:

- body and lid remain visually separable;
- the broad front service panel and two latch regions are readable;
- the rear hinge line/knuckle construction is visible as a separate mechanical assembly;
- feet and side attachment plate masses remain distinguishable from the primary shell;
- the visible side plate exposes the intended four-bolt pattern;
- the front view shows the two declared socket-normal directions pointing outward bilaterally.

This is **not** an aesthetic PASS. The line proof is useful for structural legibility only; it does not establish final silhouette quality, bevel language, manufactured plausibility under shading, material hierarchy or Art Director / Visual Observer acceptance.

## Reusable hard-surface learning

A bounded new pattern is now evidenced:

> **For manufactured modular assets, source-owned interface geometry and local coordinate identity should remain explicit, while generic compatibility descriptors may be projected into an existing shared contract without surrendering source ownership.**

This pattern is intentionally narrower than a universal hard-surface framework. One equipment case is not enough evidence to promote a new helper, Profession Fabric method or UC construction organ.

The next legitimate horizontal test would be a materially different manufactured family — for example a building module, armor mount, unit module or another object — independently needing the same physical-source-frame -> descriptor-projection boundary. Until then, the implementation stays Object-local.

The previous Wreckline learning also remains valid and separate: LOD simplification should protect a tiny set of identity-bearing mechanical anchors. The Object interface proof does not clear or replace Wreckline's LOD evidence.

## Wreckline HOLD retained

Wreckline draft PR #6 remains the prior bounded LOD identity candidate:

- branch `studio/hard-surface-lod-identity-001`;
- exact Hard-Surface head `7a86e27967d7b7e1566520285140252b1260fba4`;
- six LOD1 compressor spokes and eight sparse tread boxes per wheel remain structurally verified;
- real rebuild/render/runtime evidence remains blocked by incomplete historical provider closure;
- Technical Art's newer exact receipt proves **two** unresolved direct historical providers at the attempted UC commit: `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`;
- the Art Director's 35 m LOD visual hold remains unchanged.

No current Object result transfers a rebuild, visual or runtime PASS to Wreckline.

## Truth boundary / non-claims

This activation proves only that, for exact Object PR #2 head `32027e...`:

- one deterministic manufactured case proof mesh is reproducible from exact source;
- its tested triangles are nondegenerate and bounded by valid indices;
- the authored five-knuckle hinge layout has at least the declared axial gap in neutral construction state;
- its two local attachment frames are orthonormal and bilaterally mirrored;
- the same exact source can project its two compatibility descriptors into the pinned existing UC Asset Atom socket schema;
- the exact pinned UC validator accepts that descriptor package;
- retained evidence is bound to exact head/artifact identity and independently rehashed.

It does **not** prove:

- hinge articulation, range of motion, pin capture, sweep clearance or self-collision freedom;
- engineering load capacity, wall thickness, stress, fastening strength or waterproofing;
- physical compatibility with a real module placed on either socket;
- collision or physics behavior;
- final normals, UVs, bevels, topology quality for production shading or manufacturing;
- final materials, lookdev, texture quality or wear treatment;
- engine import, draw calls, residency, frame cost or target-device performance;
- gameplay semantics for accepted socket tags;
- that Weapon, Armor, Units, Buildings or Misc should adopt this pattern yet;
- Art Director / Visual Observer acceptance;
- a shared UC hard-surface constructor or socket-fit runtime;
- CANON, production readiness, merge authority or Hard-Surface mastery.

## Handoffs

- **3D Art Director / Visual Observer:** inspect Object PR #2 exact retained proof/OBJ for construction readability and silhouette weaknesses before this asset receives styling density. Do not infer visual acceptance from structural CI.
- **Rigging / Deformation / Animation:** no action requested yet. The hinge is a structural articulation interface only. If Art Direction retains the object and motion becomes useful, test this exact hinge source through one bounded open/close range rather than inheriting an articulation PASS.
- **Materials / LookDev:** do not use surfacing to rescue weak form. Wait for source-form/visual review before adding material hierarchy.
- **Technical Art / UC Integration:** the existing UC `socket` descriptor was sufficient; no UC edit is requested. If another independent design repo requires the same source-frame -> Asset Atom projection, compare the adapters before extracting any shared helper.
- **Capability Cartographer:** record this as one explicit manufactured-interface consumer of the existing UC socket descriptor, not as evidence that a universal mechanical-interface engine is solved. Promotion requires a second materially different receiving domain plus actual fit/runtime evidence if those claims are desired.
- **Runtime / Optimization:** no runtime action yet. Measure only after a real engine/import representation exists and the asset is visually worth retaining.
- **Building / Armor / Unit / Weapon / Misc:** possible future receiving families only; no propagation is authorized from one Object example.
- **Wreckline / Technical Art:** keep PR #6 provider HOLD unchanged until authentic provider closure or an explicitly provenance-breaking replacement route exists.

## Root gate

- **Truth:** structural, descriptor, visual-observation and untested physical/runtime claims are kept separate; the retained ZIP and exact outputs were independently rehashed.
- **Agency / non-domination:** Object Design owns its source geometry and interface meaning; UC only validates the already-existing generic descriptor; no source repo is absorbed and no merge authority is inferred.
- **Continuity:** Wreckline's blocked lane is preserved rather than silently abandoned or falsified; this activation follows its explicit stop condition by moving to an unoccupied manufactured repo with complete provenance.
- **Wisdom before speed:** one physical-interface example is tested deeply enough to expose the source/shared-contract boundary before attempting weapons, armor, units, buildings or a universal hard-surface abstraction.

## Next Hard-Surface pass

1. First inspect Art Director / Visual Observer feedback on Object PR #2 and any new Wreckline provider-recovery evidence.
2. If Object form/interface readability is rejected, repair this same Object lane with matched before/after evidence rather than opening a second prop family.
3. If retained and a motion requirement becomes real, hand the exact hinge identity to the appropriate articulation specialist; Hard Surface should not silently certify motion itself.
4. If a materially different manufactured repo independently needs explicit interface frames, test the same source-owned interface principle there before proposing any shared helper or profession procedure.
5. If authentic Wreckline provider closure appears, return to PR #6's already-built real-candidate gate rather than rebuilding the lane from scratch.
