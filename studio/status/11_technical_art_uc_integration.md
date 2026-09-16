# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **ACTIVE / EXACT OBJECT SOURCE-FRAME → UC GLB → GODOT IMPORT PROVEN / UC UNCHANGED / GENERIC SOCKET-EULER SEMANTICS STILL HELD**

## Current bounded claim

This activation closed the highest-leverage Technical Art / UC gap exposed by the current Object constellation:

> The equipment-case socket package had already crossed UC validation → deterministic compile → descriptor materialization, and Hard Surface had since added a real source-owned receiving module, but no exact target host had yet consumed the compiled socket identity, the real receiving geometry and exact UC-published GLB bytes together.

The bounded result is:

`PASS_SOURCE_FRAME_BOUND_UC_GLB_GODOT_HANDOFF`

The exact Object host + exact `utility-module-001` now cross this path:

`source-owned physical frame + module fit` → `UC Asset Atom validate/compile` → `source-owned socket-frame binding` → `UC axm.surface-3d/v0.1 publish/verify` → `exact GLB bytes` → `Godot 4.7.2 GLTFDocument import/render`.

No Universal Creation code was changed. No Object-specific physical semantics, attachment fitter or renderer interpretation was moved into UC. `axm-create-me` remains coordination-only.

## Coordination / constellation scan

Read/inspected before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/11_technical_art_uc_integration.md`;
- previous Technical Art status;
- current Object Hard-Surface, Rigging and Materials lanes;
- current Animal/Nature Technical Art bridges;
- current Wreckline provider-provenance lane;
- current Universal Creation main and the real Asset Atom + procedural-surface/GLB implementations;
- current open PRs across the design constellation to avoid lane duplication.

Relevant live boundaries:

- **Object Hard Surface PR #5** owns the exact `utility-module-001` receiving source and proves bilateral source-frame/mount-pattern fit. Exact prerequisite head: `9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`.
- **Object Technical Art PR #4** already proves the earlier descriptor-only path through UC validation → compile → materialize, but explicitly leaves target-engine import and 3D receiving-module instantiation unproven.
- **Object Materials PR #6** uses Godot 4.7.2 for a controlled functional-material A/B, but explicitly uses a procedural proof reconstruction rather than byte-identical structural/import geometry. It therefore does not duplicate this exact import lane.
- **Object Rigging PR #3** owns lid articulation. This activation does not inherit or alter its motion acceptance.
- **Animal/Nature Technical Art PRs #3** own their source-local surface adapters into UC GLB. They remain separate organic-domain evidence.
- **Wreckline Technical Art PR #8** remains a historical provider-closure case and is still held by missing authentic provider modules.

No competing lane was found that consumed the exact Object receiving module through UC and a real target-host import.

## UC state inspected

Current Universal Creation main inspected at exact commit:

`646c69df21eb3b1f85ab4b005368bda827b37a14`

The existing generic machinery already provides the needed neutral contracts:

- `validate_asset_package()`;
- `compile_asset_package()`;
- `axm.surface-3d/v0.1`;
- `publish_glb()`;
- `verify_glb()`.

The UC surface path verifies emitted GLB structure, finite geometry, index range, nondegenerate triangles and winding/normal agreement, while explicitly stating that rendered appearance and host compatibility are not proven by publication alone.

That existing boundary was sufficient. No UC edit was justified.

## Gap selected

The remaining Object pipeline gap was not “can UC hold the socket descriptor?”—PR #4 already answered that.

The missing evidence was:

1. can a **real source-owned receiving module** bind to a socket whose identity/position survived exact UC compilation;
2. can the resulting exact assembly be projected into UC's generic surface contract without moving Object construction semantics into UC;
3. can the exact UC-published GLB bytes be imported and rendered by a real target host;
4. can that be done without pretending the UC socket's `rotation_euler` already has a generic renderer-space meaning.

That last distinction is intentional. The Object source already owns an explicit physical `frame_basis` (`normal`, `up`) while the UC descriptor carries a portable Euler field whose target-renderer convention has not been established. The safe integration is therefore to consume UC's compiled socket **identity and position**, preserve its Euler unchanged, and use the source-owned frame for physical receiving-module orientation.

## Bounded improvement

Opened stacked draft PR:

**`mike-axiom-mir/axm-object-design#7 — Technical Art: prove exact UC GLB target-host handoff`**

Branch:

`studio/technical-art-object-target-handoff-001`

Stacked base:

`studio/hard-surface-service-module-fit-001` / exact base head `9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`.

Exact final Technical Art head:

`d5cd67b34996ff95dd28495d26ccb8c4a60b7dfd`

Final PR state inspected: **DRAFT / OPEN / MERGEABLE**.

Added only consumer-side Technical Art proof tooling:

- `tools/build_object_uc_target_handoff.py`;
- `tests/test_uc_target_handoff.py`;
- `target-proof/project.godot`;
- `target-proof/observe.gd`;
- `.github/workflows/object-uc-target-handoff.yml`.

No source asset was rewritten and UC was not modified.

### Exact handoff mechanics

The builder:

1. reruns the existing equipment-case structural verifier;
2. reruns the existing bilateral module-fit verifier;
3. rebuilds the exact host OBJ and source-owned UC socket package;
4. checks out/pins UC exact commit `646c69df...`;
5. validates and compiles the package through real UC twice and requires identical results;
6. requires validated socket atoms to survive UC compilation exactly;
7. selects compiled `right_service` and consumes its exact name + position;
8. verifies the source-owned socket basis is orthonormal and right-handed;
9. derives local module axes as:
   - local +X = source outward `normal`;
   - local +Y = `cross(up, normal)`;
   - local +Z = source `up`;
10. retains UC `rotation_euler=[0,90,0]` as evidence but explicitly does **not** interpret it as renderer orientation semantics;
11. places the exact receiving module through the source-owned frame and rechecks the existing body-clearance contract;
12. converts Object Z-up coordinates `[x_right,y_forward,z_up]` to UC/glTF Y-up `[x_right,z_up,y_forward]` and explicitly reverses winding because that permutation changes handedness;
13. emits two exact UC surface groups: host + right-service module;
14. publishes through real UC `publish_glb()` and re-verifies the emitted GLB with `verify_glb()`;
15. imports those exact GLB bytes with Godot 4.7.2 `GLTFDocument`;
16. requires exact mesh-instance and triangle-count preservation and retains a target-host PNG + runtime receipt.

## Exact-head evidence

Exact final Object head:

`d5cd67b34996ff95dd28495d26ccb8c4a60b7dfd`

Pinned UC commit:

`646c69df21eb3b1f85ab4b005368bda827b37a14`

Exact-head workflow:

- `35061115287 — Object UC target-host handoff evidence` — **SUCCESS**;
  - Python 3.11: full Object tests, exact UC handoff build/validation, pinned Godot download, exact GLTFDocument import, retained runtime capture and artifact upload all PASS;
  - Python 3.13: full Object tests and exact UC handoff build/validation PASS.
- inherited `Object service-module fit evidence` run `35061115183` — **SUCCESS** on this final Technical Art head.

Final retained artifact:

- ID: **10432029651**;
- name: `object-uc-target-handoff-d5cd67b34996ff95dd28495d26ccb8c4a60b7dfd`;
- reported size: **58,754 bytes**;
- exact head binding: `d5cd67b34996ff95dd28495d26ccb8c4a60b7dfd`;
- archive SHA-256: `971f32648029d90f324368c2807fda939f7e33440080fe13df8c4738b3b7a0b6`.

The retained ZIP was downloaded after CI and independently SHA-256 rehashed. The local digest matched GitHub's retained artifact digest exactly.

The artifact records both exact heads:

- Object: `d5cd67b34996ff95dd28495d26ccb8c4a60b7dfd`;
- UC: `646c69df21eb3b1f85ab4b005368bda827b37a14`.

### Source / descriptor identity

Retained exact identities:

- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module source SHA-256: `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`;
- rebuilt host OBJ SHA-256: `3e01ef3bf4935ee6aee7c56c03dc0b7f54c308e5ac2eb6a7583252a366901106`;
- UC socket package SHA-256: `41f4a16fc45fce0628567f5125e4635ca8286c74ebe7ba066b9fc1113e68ffa5`;
- UC package digest: `sha256:7246a64cdd202d1af9a02c8163aac9804d8e2479c4c74a41faf8e22e4228877d`;
- UC deterministic instance digest: `sha256:20da57396ee2c6b94c0551f9dffa26a65280c1eaafc46534c07a8b8698541392`.

Those package/instance identities match the earlier descriptor-only Technical Art PR #4 evidence, which is continuity evidence: the new target-host path did not silently change the package to make import work.

### Exact right-service binding

Retained binding:

- socket name: `right_service`;
- compiled socket position: `[0.39, 0.0, 0.16]`;
- source normal: `[1.0, 0.0, 0.0]`;
- source lateral: `[0.0, 1.0, 0.0]`;
- source up: `[0.0, 0.0, 1.0]`;
- compiled Euler retained: `[0.0, 90.0, 0.0]`;
- compiled Euler interpreted as generic renderer semantics: **false**;
- measured body clearance after binding: `0.018000000000000026 m` — floating representation of the existing `0.018 m` structural contract.

The socket atom is retained exactly through UC compilation.

### Exact UC GLB result

Assembly GLB SHA-256:

`c84a57cc4591bfda6a37d05fe64ba95f31ac7a0ae7bd3f918caf9a34b432e68d`

UC verification records:

- glTF 2.0 GLB: PASS;
- primitives: **2**;
- nodes: **2**;
- materials: **2**;
- triangles: **824**;
- finite positions/normals: PASS;
- indices in range: PASS;
- nondegenerate triangles: PASS;
- winding matches normals: PASS;
- exact UC surface specification digest: `190d61d7622f81aeef15fa1f0c100a0a8a6d5ab9e038a4043fa6f05ebaca3d8a`.

### Exact Godot target-host result

Retained runtime state:

`PASS_SOURCE_FRAME_BOUND_UC_GLB_GODOT_HANDOFF`

Godot exact host:

`4.7.2-stable (official)`, GL Compatibility.

The runtime imported the exact GLB SHA-256 above and observed:

- MeshInstance3D count: **2**;
- mesh names: `equipment-case-host`, `utility-module-right-service`;
- surfaces: **2**;
- triangles: **824** exactly;
- target capture: **820 × 620**;
- retained PNG size: **19,103 bytes**;
- non-background pixels: **92,985**;
- changed/visible coverage: **18.2897%**;
- visible bbox: `[180,187,622,475]`.

The retained engine capture was directly inspected during this activation. The equipment case and a distinct receiving module are visibly present in the target host. That observation is evidence that actual imported geometry rendered; it is **not** final Materials or Art Direction acceptance.

## Exact-head provenance repair retained

The first workflow run, `35061022828`, was functionally green, but default `actions/checkout` behavior on a pull request checked out GitHub's synthetic merge ref. Its internal source receipt therefore recorded merge SHA `e9bd207a...`, not the candidate PR head.

That artifact is **not** the final exact-head evidence.

The workflow was repaired to explicitly checkout:

`${{ github.event.pull_request.head.sha || github.sha }}`

and was rerun at final head `d5cd67b...`.

No host source, module source, socket placement, UC pin, GLB geometry, Godot proof logic or acceptance threshold was changed to obtain the final exact-head PASS. The repair strengthens provenance/binding only.

## Reusable learning / placement decision

The strongest cross-repo learning is now:

> **A generic descriptor compiler does not need to own physical frame semantics to participate in a real target-host handoff. Preserve the compiled descriptor identity, bind physical orientation from the source-owned frame where that meaning is authoritative, publish through generic UC geometry machinery, and prove the exact target-host import separately.**

Current home remains:

- **Object Design:** source geometry, socket physical frame, attachment plate semantics, receiving-module geometry, fit policy and source→target assembly adapter;
- **Universal Creation:** domain-neutral Asset Atom validation/compile and domain-neutral surface/GLB publication/verification;
- **Technical Art:** explicit cross-repo contract, exact revision binding and target-host import evidence;
- **Materials / Art Direction / Runtime / Physics:** their own later acceptance gates.

No universal attachment fitter is justified from one manufactured family. No generic UC socket-Euler renderer convention is invented from this proof.

## Relationship to prior Technical Art evidence

### Object descriptor-only PR #4

Still valid and now extended rather than replaced:

- PR #4 head `fcd27a806e52779a195ac2ef84e56419faa36d49`;
- artifact `10430594954`;
- result `PASS_EXACT_UC_ASSET_INSTANCE_HANDOFF`.

It proves validation → compile → descriptor materialization. PR #7 proves one real target-host continuation using the same package/instance digests plus a later source-owned receiving module.

### Animal / Nature UC surface bridges

Remain valid separate examples. They keep coordinate/material/sidedness conversion semantics in their source repos and use UC as generic output machinery. This Object pass reinforces that placement rather than merging adapters.

### Wreckline provider provenance

Remains unchanged:

- PR #8 head `ba7f49da25711ec6412d054a108c0001316961ae`;
- result `PASS_CONSUMER_OWNED_PROVIDER_IMPORT_CONTRACT / HOLD_HISTORICAL_PROVIDER_INCOMPLETE`;
- historical UC provider gap still includes `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`.

No historical provider implementation was guessed from the new Object success.

## Truth boundary / non-claims

This activation proves only that the exact Object host/module sources can cross the exact retained source-frame → UC compile → UC GLB → Godot import/render path described above.

It does **not** prove:

- a generic target-renderer interpretation for UC socket `rotation_euler`;
- dynamic runtime attach/detach or socket discovery/controller behavior;
- arbitrary module families or arbitrary socket bases;
- full-mesh collision freedom;
- physics, engineering load, fastener retention, fatigue or manufacturing tolerances;
- lid articulation combined with the attached module;
- Material PR #6 appearance on the exact imported GLB;
- final lookdev, Visual Observer or Art Director acceptance;
- runtime performance, residency, draw-call or device budgets;
- gameplay/controller acceptance;
- CANON, production readiness or Technical Art / UC mastery.

## Root gate

- **Truth:** the pipeline names each boundary separately. UC compile, source-frame placement, UC GLB verification, Godot import and direct render observation are proven; Euler renderer semantics, physics, runtime controller and aesthetic acceptance remain explicit non-claims.
- **Agency / non-domination:** Object retains authority over its physical frame meaning. UC is not widened to reinterpret domain semantics for convenience, and downstream specialists keep their own gates.
- **Continuity:** PR #7 stacks on exact Hard-Surface PR #5, preserves the same host/module sources, reproduces the same package/instance identities from PR #4, pins exact UC, retains exact GLB/runtime evidence and keeps the first merge-ref artifact as provenance rather than silently rewriting history.
- **Wisdom before speed:** the activation reused existing source and UC machinery, closed one real target-host gap, and refused to create a generic attachment abstraction before repeated independent evidence exists.

## Handoffs

- **Hard Surface / Object:** the exact PR #5 receiving module now survives one source-frame-bound Technical Art handoff into a real target host. This does not add engineering acceptance.
- **Materials / LookDev:** PR #6 remains a separate procedural material A/B. If Materials later needs byte-identical import proof, use this exact GLB/import path rather than reconstructing geometry silently; do not inherit its aesthetic PASS here.
- **Rigging / Object:** if the lid articulation is later combined with an attached module, test that combined moving assembly separately. This static right-service import does not prove articulation clearance with attachments.
- **Visual Observer / Art Director:** artifact `10432029651` contains a real Godot render of exact imported GLB geometry and is now a truthful visual QA surface. The Technical Art observation is not aesthetic acceptance.
- **Runtime / Optimization:** a real imported two-mesh target-host surface now exists, but no frame time, draw-call, residency or target-device performance gate was run. Runtime may use this exact path if a bounded performance question becomes highest-risk.
- **Capability Cartographer:** the source-local / UC-generic boundary now has a stronger target-host continuation. Do not promote a universal socket-frame adapter until another independent domain reproduces the same executable need.
- **Universal Creation:** no code change requested. Existing Asset Atom + surface/GLB machinery is sufficient for this bounded crossing. The missing semantics belong at the consumer/source boundary until repeated evidence says otherwise.

## Next Technical Art / UC Integration pass

Prefer one of these evidence-triggered gaps:

1. a **second independent manufactured/source family** uses a UC socket/interface and independently needs the same source-frame → target-host attachment bridge; compare literal duplication before proposing shared tooling;
2. an engine/runtime consumer needs **dynamic** socket discovery/attach-detach from UC instance descriptors, with renderer-space frame semantics made explicit rather than guessed;
3. exact Object Materials need to cross this **same imported GLB** rather than a procedural proof reconstruction, creating a real material/import contract question;
4. another design source exposes a materially different UC target contract that challenges the current source-local / UC-generic placement;
5. authentic Wreckline historical provider sources are recovered and can be immutably bound/retested.

If those triggers do not exist, do not manufacture a broader UC integration layer. Re-scan the constellation and keep proven domain knowledge where its evidence says it belongs.
