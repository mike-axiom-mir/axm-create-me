# 10 — Procedural Design Specialist Status

Date: 2026-09-17  
State: **PASS_OBJECT_SERVICE_MODULE_STANDOFF_SEMANTIC_GUARD / EXISTING PARAMETRIC FAMILY REPAIRED / FOUR MATERIAL OUTPUTS PRESERVED / SIX FAIL-CLOSED CONTROLS / EXACT CI GREEN / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and live repository/PR state across all eleven design repositories: Character, Animal, Nature, Object, Building, Weapon, Armor, Unit, Weather, Map and Misc.

`axm-create-me` remains coordination-only. Product implementation, tests and retained evidence remain in the owning design repository. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no current implementation-backed repeated pattern strong enough to justify inventing a Procedural lane.
- **Character:** current Geometry/Rigging/Animation/Materials/Technical-Art/Runtime work owns the active deformation and transport boundaries; no Procedural takeover.
- **Animal:** current Organic/Geometry/Rigging/Materials/Runtime work owns source, tangent, deformation and representation questions. Runtime's payload/resource reuse is a Runtime representation problem, not a new Procedural family.
- **Nature:** existing bounded variation and owner-response families already cover the current repeated creation surface.
- **Weather:** existing bounded seeded field family remains sufficient.
- **Map:** current Environment/Animation/VFX/Runtime/Art/QA lanes own receiver/playback/acceptance work; Procedural does not enter those lanes.
- **Building:** existing placement, clearance-rebind and seam-component families remain sufficient. The newest Hard-Surface standoff work is source-owner semantics and does not justify another Building generator.
- **Object:** the previous seeded-mote family is closed at its declared scope. A different, fresh issue is now owner-backed: Hard Surface PR #5 explicitly identifies the service-module standoff scalar's reference feature as the **nearest host-facing module body face**, while the older Procedural service-module configuration family had consumed the same module geometry without pinning that newly explicit semantic identity.

The selected work is therefore a **repair of the existing Object configuration family**, not another generator or seed family.

## Selected bounded repeated pattern

Repository: `mike-axiom-mir/axm-object-design`  
Existing Procedural draft PR: **#11 — `Procedural: bounded Object procedural and seeded variation families`**  
Exact Procedural head: **`4aa6dedd0ab5c5477e8175bc28cb200d59df901a`**

Existing parametric family retained:

**`axm.object-service-module-configuration-family/v0.1`**

New bounded semantic guard:

**`axm.object-service-module-standoff-reference-guard/v0.1`**

The repeated pattern is the same exact module being generated across the existing `empty`, `left-only`, `right-only` and `bilateral` configuration cases. Those outputs all depend on the same source standoff scalar. Hard Surface has now made the scalar's reference feature explicit, so Procedural must fail closed if that semantic identity drifts rather than continuing to place geometry from a field name alone.

## Exact source-owner provenance

Hard Surface remains the source owner.

Exact owner head:

**`e9076b546dab2e12ba2c3649fd0021a62841be10`**

Exact owner policy:

`assets/modular-equipment-case-001/utility-module-001-standoff-reference.json`

Exact policy Git blob:

**`d8e3b9bbc4157b7f3c7f750f19e58de470b8f1ea`**

Pinned source semantics:

- field: `interface.standoff_from_socket_origin_m`;
- reference feature: `module_nearest_host_facing_body_face`;
- module local +X maps to each socket outward normal;
- standoff: **0.03 m**;
- body depth: **0.095 m**;
- generated body local-X interval: **[0.03, 0.125] m**;
- socket plate thickness: **0.012 m**;
- physical nearest-body-face clearance beyond plate: **0.018 m** on both `left_service` and `right_service`.

Procedural does not copy ownership of these semantics. The guard consumes the exact owner head/policy identity and checks the existing generated geometry against it.

## Smallest repair

Added only the bounded consumer-side pieces needed to make the existing family semantically explicit:

- `assets/modular-equipment-case-001/service-module-standoff-reference-guard-001.json`;
- `tools/verify_service_module_configuration_standoff_guard.py`;
- `tests/test_service_module_configuration_standoff_guard.py`;
- `.github/workflows/object-service-module-standoff-reference-guard.yml`.

The repair reuses the existing Procedural configuration builder and the exact shared Sticker Fabric rigid-frame placement dependency. It does not fork the assembler, create a second attachment system, change the source module, or change retained geometry.

## Multiple materially different outputs

The exact existing configuration pressure remains intact:

| configuration | instances | exact mesh digest |
|---|---:|---|
| `empty` | 0 | `d485a11fd819e6f90c2d1842b0534178093270d8cc4de18744ebcd10bd377351` |
| `left-only` | 1 | `7f2472dccd1947e907caf22f9cd749cf0e123a5d9f152b21687d3c4d16cd7628` |
| `right-only` | 1 | `7d07222483966ebd4281881f7552f499b3e0342a7f245c593532a9ed63987940` |
| `bilateral` | 2 | `23d985839dede2b51a588276e1431bb1f01ad36f87c81bfadfb6ba0946f890cc` |

Evidence proves **4/4 distinct configuration digests**, **4/4 distinct mesh digests**, and exact retained historical mesh identities. Requesting bilateral occupancy in reverse parameter order reproduces the same canonical bilateral configuration and mesh.

## Failure bounds

Six retained controls fail closed as `HOLD_STANDOFF_SEMANTIC_GUARD`:

1. Hard Surface owner-head drift;
2. owner policy-blob drift;
3. reference-feature relabel to body-center semantics;
4. declared body-interval drift;
5. downstream-rebind authority expansion;
6. source standoff scalar drift.

Failure policy:

**`FAIL_CLOSED_ON_OWNER_HEAD_OR_POLICY_IDENTITY_DRIFT__NO_SEMANTIC_GUESSING__NO_FALLBACK_REFERENCE_FEATURE__NO_OUTPUT_REWRITE`**

## Exact verification

Workflow:

**`35272886987 — Object service-module standoff reference guard evidence`**

Result: **SUCCESS**.

- Python 3.11: exact donors PASS; compile PASS; full repository suite PASS; bounded guard evidence PASS; retained artifact upload PASS.
- Python 3.13: exact donors PASS; compile PASS; full repository suite PASS.
- **All 13 pull-request workflows** associated with exact Procedural head `4aa6dedd0ab5c5477e8175bc28cb200d59df901a` completed **SUCCESS**, including the new guard plus every inherited service-module, hard-surface, source-face, UV, atlas and seeded-mote evidence lane.

Machine-readable result:

**`PASS_PROCEDURAL_CONFIGURATION_STANDOFF_SEMANTIC_GUARD`**

Decision:

**`PASS_EXISTING_CONFIGURATION_FAMILY_WITH_EXPLICIT_HARD_SURFACE_STANDOFF_REFERENCE_GUARD__NO_SOURCE_REWRITE_OR_ADOPTION`**

Retained artifact:

- ID **`10519228462`**;
- name `object-service-module-standoff-reference-guard-001-evidence`;
- size **6,820 B**;
- SHA-256 **`4b3666f5dd2bd1e16e732704f57c7647803c5c7b0be3f5e92517f300f1b0dabb`**;
- independently downloaded and rehashed to the exact same digest;
- **7 retained files**.

## Coordination return

Procedural PR #11 activation comment: **`5721015487`**.  
Hard Surface PR #5 downstream compatibility comment: **`5721016769`**.

No authority was transferred by either comment.

## Ownership / non-overlap

- **Hard Surface:** owns source module geometry, standoff field meaning, reference feature and physical source-space clearance semantics.
- **Procedural Design:** owns only the bounded deterministic configuration family and this consumer-side semantic guard.
- **Sticker Fabric:** remains the exact shared rigid-frame placement helper dependency.
- **Rigging / Animation / Runtime / Art / QA:** retain their existing receiving, motion, runtime and acceptance authorities.

## Explicit non-claims

This PASS does **not** prove engineering tolerance, fasteners/tooling, retention/load, wear/sealing, full-mesh collision, physics, Runtime attach/detach, gameplay, final Materials/Art acceptance, target-device performance, automatic downstream rebind, UC/Profession Fabric promotion, CANON, production readiness, or Procedural Design mastery.

## Four-root check

- **Truth:** a previously implicit semantic dependency is now explicit and pinned to exact owner head + policy blob; exact geometry identities did not change.
- **Agency / non-domination:** Procedural consumes Hard Surface semantics but cannot rewrite or reinterpret them, and cannot auto-adopt into downstream lanes.
- **Continuity:** the existing Object Procedural PR and existing configuration family remain the lane; historical mesh identities are preserved rather than silently regenerated under a new meaning.
- **Wisdom before speed:** no duplicate generator was created. The smallest useful repair was a source-owner semantic guard across the already-existing materially different outputs.

## Next Procedural pass

Re-scan the full constellation first. Do not extend this guard unless Hard Surface changes the owner policy or source geometry. Prefer a genuinely different repeated creation problem over further Object service-module layering.
