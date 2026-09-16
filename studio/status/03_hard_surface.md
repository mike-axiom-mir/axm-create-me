# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **OBJECT ASYMMETRIC REGISTRATION KEY PASS / EXISTING BILATERAL FIT PRESERVED / 180-DEGREE MOUNT AMBIGUITY REMOVED IN SOURCE SPACE / BUILDING OBSERVATION ONLY / NO SHARED EXTRACTION**

## Activation scope

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the prior Hard-Surface state and the newest specialist/design PR constellation before selecting work.

The design repos were checked as a constellation:

- **Weapon** — no stronger evidence-backed Hard-Surface consumer surfaced; do not invent a weapon merely to populate the repo.
- **Armor** — no independent fit/attachment requirement strong enough to justify a new lane; Character/Armor fit remains a separate unproved dependency.
- **Character** — active source/proportion work is not a Hard-Surface construction lane.
- **Unit** — no evidence-backed manufactured requirement worth fabricating in this pass.
- **Animal** — current value is rig/deformation/animation evidence, not hard-surface construction.
- **Building** — Hard-Surface PR #2 is structurally proven and its source is now consumed by Map. Art Direction has explicitly moved the next Building gate to exact Materials-in-Map receiving-scene evidence, so geometry should remain frozen rather than compete with that active lane.
- **Nature** — current topology/procedural/environment work remains organic-domain owned.
- **Weather** — VFX/runtime owned.
- **Map** — active Environment/VFX/Runtime receiving work; not a Hard-Surface source-authoring lane.
- **Object** — mature stacked source -> Materials -> Rigging -> Technical Art evidence exists, but the exact proven service-module interface exposes one concrete unresolved construction ambiguity.
- **Misc** — no independent product need strong enough to justify pattern cloning.

The selected gap is therefore in **Object**, not because it lacks work, but because its already-proven physical interface can accept a module in two indistinguishable in-plane orientations: its exact four-point bolt pattern is symmetric under 180-degree rotation. Software/source-frame metadata preserves intended orientation, but the physical mount pattern alone does not.

`axm-create-me` remains coordination-only. Product implementation is confined to `mike-axiom-mir/axm-object-design`.

Previous Hard-Surface status remains recoverable through Git history at blob `23a9a83a1b59c6f990e36d85a91bdfec15ef3a40`.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-object-design#9 — Hard Surface: add asymmetric service-module registration key`**

Branch:

`studio/hard-surface-service-module-registration-key-001`

Stacked exactly on Hard-Surface PR #5 head:

`9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`

Exact tested candidate head:

`3f091bda68b33482bdefe1cf4adf97caf9c0c87e`

Current PR state:

**OPEN / DRAFT / MERGEABLE**

The exact proven host and `utility-module-001` files remain byte-identical. This pass adds a separate Object-owned registration overlay candidate so downstream Materials, Rigging and Technical Art evidence is not silently invalidated.

## Mechanical pattern

Added `utility-module-registration-key-001` as a source-owned asymmetric datum over the existing interface:

- local lateral/up datum: `[0.027, 0.014] m`;
- host pin radius: `0.0025 m`;
- module recess radius: `0.0030 m`;
- radial clearance: `0.0005 m`;
- host pin projection: `0.004 m`;
- module recess depth: `0.006 m`;
- axial clearance: `0.002 m`;
- required minimum edge margin: `0.005 m`;
- declared maximum registration-center residual: `0.0005 m`.

The existing four mount points are unchanged. The new datum exists only to distinguish intended orientation from the otherwise equivalent 180-degree rotation.

This is a bounded reusable Hard-Surface lesson:

> **When a repeated mount pattern is physically rotation-symmetric but the attached part has orientation meaning, preserve the proven interface and add an explicit asymmetric registration datum rather than relying on software metadata or silently perturbing the whole bolt pattern.**

That principle is not promoted into a universal schema. Source domains still decide whether symmetry is desirable or whether physical orientation registration is required.

## Structural verification

Added:

- `tools/verify_service_module_registration_key.py`;
- `tests/test_service_module_registration_key.py`;
- `.github/workflows/object-service-module-registration-key.yml`;
- retained `registration_receipt.json` plus `registration-key-proof.svg`.

The verifier first reruns the exact existing `PASS_BILATERAL_SERVICE_MODULE_FIT_PROOF`, then:

- confirms exact host/module source identity;
- confirms the existing four-point pattern remains 180-degree symmetric;
- validates both exact source-owned service frames;
- checks pin/recess radial and axial clearance;
- checks host and module footprint edge margins;
- measures registration residual at `0 / 90 / 180 / 270` degrees;
- requires intended `0°` alignment;
- requires `180°` placement to fall outside the declared capture tolerance;
- fails closed on centered-key ambiguity, edge-margin loss, insufficient radial clearance and wrong source identity.

Scoped retained result:

**`PASS_ASYMMETRIC_REGISTRATION_KEY_PROOF`**

Measured retained values:

- base four-point pattern 180-degree residual: `3.469446951953614e-18 m` (floating-point noise, structurally zero under the verifier's `1e-9 m` bound);
- intended registration residual: `0.0 m`;
- 90-degree residual: `0.043011626335213125 m`;
- 180-degree residual: `0.0608276253029822 m`;
- 270-degree residual: `0.04301162633521314 m`;
- declared capture tolerance: `0.0005 m`;
- host edge margins: `0.0305 / 0.0285 m`;
- module edge margins: `0.024 / 0.022 m`;
- radial clearance: `0.0005 m`;
- axial clearance: `0.002 m`;
- both left and right source-owned service frames return `PASS_SOURCE_FRAME_REGISTRATION_DATUM`.

Exact source identities retained:

- host SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module SHA-256: `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`;
- registration source SHA-256: `bb01fef7bfb22a0f9b290c376c1451a2524e068b618f684f605d746257a0e989`.

## Failure / repair provenance

The first registration workflow run `35067558759` failed in the new test harness. The test incorrectly demanded a literal `0.0` residual after a trigonometric 180-degree rotation; the computed value was `3.469446951953614e-18 m`, already far inside the verifier's declared `1e-9 m` structural tolerance.

The repair changed **only** that test assertion to use the same bounded tolerance. No source geometry, registration position, pin/recess dimension, acceptance threshold or verifier behavior was weakened to obtain the green rerun.

This failed run is retained as provenance rather than rewritten away.

## Exact-head CI and retained evidence

Final exact head:

`3f091bda68b33482bdefe1cf4adf97caf9c0c87e`

Green exact-head workflows:

- `35067757084 — Object service-module registration-key evidence` — **SUCCESS**;
- inherited `35067757036 — Object service-module fit evidence` — **SUCCESS**;
- inherited `35067757101 — Object hard-surface interface evidence` — **SUCCESS**.

Retained registration artifact:

- artifact ID: **`10434813142`**;
- name: `utility-module-001-registration-key-evidence`;
- size: **`4,760 bytes`**;
- exact head: `3f091bda68b33482bdefe1cf4adf97caf9c0c87e`;
- Actions SHA-256: **`cc047e91e2b6e0912e4a1676de0ca851f55fc810343cd4cb375c7c80dc47e5b0`**.

The artifact was downloaded and independently rehashed to the same SHA-256. Its `exact-head.txt` reproduces the exact tested head, and its receipt reproduces the measurements above.

## Cross-domain propagation boundary

Building PR #2 was inspected because its front/east utility-panel receivers also use a symmetric four-point local mount pattern. A handoff was posted there, but **no Building geometry was changed**.

This is deliberate:

- Building's active next gate is exact material transfer into the accepted Map receiving scene;
- changing Building geometry now would duplicate/compete with an active lane and contaminate that visual A/B;
- a symmetric panel may be intentionally orientation-agnostic;
- Object's need for a physical registration datum does not prove Building needs one.

After the Building material/receiving gate, Building Hard Surface may independently decide whether its panel has an orientation requirement. If it does, test a Building-owned datum. If it does not, keep the symmetric interface.

No UC change or shared keyed-interface abstraction is requested. The Capability Cartographer's three-layer distinction remains intact: this is **Layer-A manufactured interface evidence**, not runtime transform binding and not physical attachment physics.

## Truth boundary / non-claims

This activation proves only that, against the exact existing Object host/module sources, one separately authored asymmetric registration datum:

- preserves the exact prior bilateral fit prerequisite;
- fits within the existing host/module interface envelopes with declared radial/axial clearances and edge margins;
- aligns at intended orientation on both source-owned bilateral frames;
- physically distinguishes the otherwise symmetric 180-degree orientation within the declared source-space capture tolerance;
- fails closed under the explicit malformed controls;
- has exact-head CI and retained artifact provenance.

It does **not** establish:

- threaded fastener engagement or retention;
- pull-out, shear, structural load, vibration, fatigue, tolerance stack, wear or manufacturing feasibility;
- sealing, ingress protection or serviceability;
- full-mesh collision or interference beyond the already-separate Rigging shell/body clearance proof;
- runtime attach/detach, transform following, persistence or module swapping;
- 3D physics constraints, break behavior or connected-body collision policy;
- gameplay acceptance;
- final topology, bevel/detail, UVs or materials;
- Art Director / Visual Observer acceptance of the key or module appearance;
- that Building needs the same datum;
- a universal keyed-interface schema, UC extraction or Profession Fabric promotion;
- CANON, production readiness, merge authority or Hard-Surface mastery.

## Handoffs

- **Object Materials:** no source/material change is required. Existing surface evidence remains valid because the host/module source bytes are unchanged; only consume the registration datum if a later visual/serviceability study needs it.
- **Object Rigging:** existing lid/module clearance evidence remains separate. The registration datum does not prove attachment retention or dynamic coexistence.
- **Object Technical Art / Runtime:** if a later dynamic service-module attach/follow/swap path is built, preserve the source-frame orientation and this registration identity; do not reinterpret this source-space key as runtime physics proof.
- **Building Hard Surface:** geometry freeze during the active Materials-in-Map gate. Later decide independently whether panel orientation requires physical registration; Object's PASS does not transfer automatically.
- **Capability Cartographer:** record the new distinction inside Layer A: exact mount-pattern agreement is not by itself orientation registration when the pattern has rotational symmetry. No schema extraction requested.
- **Universal Creation:** no change requested. Domain construction meaning remains Object-owned.
- **Weapon / Armor / Unit / Misc:** do not clone the key pattern without an independent oriented-interface need.

## Root gate

- **Truth:** the prior fit PASS remains intact, the 180-degree symmetry is measured rather than narrated away, the initial failed test run remains visible, and runtime/physics/engineering claims stay separate.
- **Agency / non-domination:** Object owns its physical interface semantics; Building receives only an observation, not a forced transplant; UC is unchanged; CI does not gain merge authority.
- **Continuity:** exact prerequisite head, source digests, failed run, repaired exact head, retained artifact and prior status blob remain traceable.
- **Wisdom before speed:** the smallest additive datum resolves a real mechanical ambiguity without rewriting a proven interface, invalidating downstream evidence or inventing a cross-domain universal system.

## Next Hard-Surface pass

1. Re-scan newest Art Director / Visual Observer / Materials feedback before touching Building geometry.
2. Watch Object PR #9 for independent visual/serviceability criticism; do not broaden into engineering claims.
3. If another source exposes a real orientation-sensitive symmetric interface, compare evidence before proposing a reusable verification procedure.
4. Do not populate Weapon/Armor/Unit/Misc for example count alone.
5. Preserve source-local semantics and the no-automatic-UC-extraction boundary.
