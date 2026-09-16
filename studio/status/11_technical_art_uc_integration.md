# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **ACTIVE / OBJECT VALIDATE→COMPILE→MATERIALIZE PATH PROVEN / SOURCE PROJECTION STAYS LOCAL / UC UNCHANGED**

## Current bounded claim

This activation selected the highest-leverage current Technical Art / UC integration gap that was not already owned by another specialist:

> `axm-object-design` had proven that its source-owned equipment-case socket projection validates against Universal Creation's Asset Atom package schema, but it had **not** proven the stronger real UC path from validation through deterministic compilation and descriptor materialization.

The repair does not add Object semantics to UC. It uses UC's already-existing domain-neutral `validate_asset_package()` → `compile_asset_package()` → `materialize_asset_package()` path and adds only consumer-owned integration/evidence tooling in Object Design.

Result:

`PASS_EXACT_UC_ASSET_INSTANCE_HANDOFF`

No Universal Creation code was changed. `axm-create-me` remains coordination-only.

## Coordination / constellation scan

Read before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/11_technical_art_uc_integration.md`;
- previous Technical Art status;
- current Capability Cartographer placement decision;
- current Object Hard-Surface and Rigging lanes;
- current Animal and Nature Technical Art bridges;
- current Universal Creation main and its Asset Atom implementation;
- open current UC work to avoid colliding with profession-crew, physics, or aftertouch lanes.

Relevant active boundaries found:

- **Hard Surface / Object PR #2** owns `modular-equipment-case-001`, the physical attachment plates/frames, hinge source and the initial source → UC socket descriptor projection.
- **Rigging / Object PR #3** independently owns the 0..110° lid articulation proof. This activation does not change or inherit that motion acceptance.
- **Animal Technical Art PR #3** owns one source-owned organic surface → UC GLB bridge.
- **Nature Technical Art PR #3** owns a materially different Nature surface → UC GLB bridge, including its local leaf-backface compatibility strategy.
- **Capability Cartography** already places source semantics/adapters in design repos and generic target machinery in UC unless repeated evidence justifies a different home.
- **Wreckline Technical Art PR #8** remains a separate provider-provenance case and still has incomplete historical provider closure.

No competing Object Technical Art lane was found for UC Asset Atom compile/materialize behavior.

## Gap selected

Object Hard-Surface PR #2 exact head:

`32027eabb531dfe22668e9161506077442267099`

already generated a UC package with:

- `shape` atom;
- `part` atom;
- two `socket` atoms;
- socket names `left_service` and `right_service`;
- package id `axm.object.modular-equipment-case-001`;
- package version `0.1.0`.

Its existing verifier pinned UC donor commit `87f93e1a27b2e3414f6422cd38e31b00e89d6a56`, called `validate_asset_package()`, and proved descriptor validity. It explicitly did **not** prove 3D attachment instantiation, fit, collision, load or runtime.

Current UC main is now:

`8dd55d7186aa99911ca8d28af303f31d2c05fad4`

The Asset Atom implementation itself is unchanged between the previous Object donor pin and current main; the intervening current-main change is profession-crew machinery rather than an Asset Atom contract rewrite.

UC's existing domain-neutral path already provides the stronger integration surface:

1. `validate_asset_package()` validates exact package/reference structure;
2. `compile_asset_package()` produces `axm.asset-instance/v0.1`, retains socket atoms in the deterministic instance, computes exact digests and keeps external-resource evidence separate;
3. `materialize_asset_package()` writes validated `asset.package.json` and `asset.instance.json` into a generic descriptor project.

The missing evidence was whether the exact Object package survives that complete descriptor path without socket loss or drift.

## Bounded improvement

Opened stacked draft PR:

**`mike-axiom-mir/axm-object-design#4 — Technical Art: prove object socket package through UC compile/materialize`**

Branch:

`studio/technical-art-object-uc-instance-001`

Stacked base:

`studio/hard-surface-object-interface-001` / exact base head `32027eabb531dfe22668e9161506077442267099`

Exact final Technical Art head:

`fcd27a806e52779a195ac2ef84e56419faa36d49`

PR state at final inspection: **DRAFT / OPEN / MERGEABLE**. No merge/CANON authority is inferred.

Added only:

- `tools/verify_uc_asset_instance.py`;
- `.github/workflows/object-uc-asset-instance-integration.yml`.

The verifier:

1. verifies the checked-out UC Git HEAD equals exact expected commit `8dd55d7186aa99911ca8d28af303f31d2c05fad4`;
2. re-validates the generated Object package with real UC;
3. compiles the package twice and fails closed if the normalized compilation differs;
4. proves the two validated socket atoms are preserved **exactly** into `asset.instance.json`;
5. requires the expected socket names `left_service` / `right_service`;
6. preserves UC's explicit `DECLARED_RESOURCE_REFERENCES_NOT_FETCHED` truth boundary for the OBJ;
7. materializes the package through real UC;
8. re-opens the retained `asset.package.json` and `asset.instance.json`;
9. requires those files to equal the compiler outputs and match the compiler's package/instance digests;
10. writes a bounded integration receipt with downstream non-claims.

The verifier stays with Object Design because the source-owned projection and expected socket set belong to that consumer. UC already owns the generic compiler/materializer and needed no Object-specific patch.

## Exact-head evidence

Exact Object Technical Art head:

`fcd27a806e52779a195ac2ef84e56419faa36d49`

Exact-head workflow results:

- `Object UC asset-instance integration evidence` run **35057089045** — **SUCCESS**;
  - Python 3.11: compile, full Object test suite, source package generation, exact UC compile/materialize, retained artifact upload all PASS;
  - Python 3.13: compile, full Object test suite, source package generation and exact UC compile/materialize all PASS;
- inherited `Object hard-surface interface evidence` run **35057089046** — **SUCCESS**, confirming the stacked Technical Art lane does not regress the existing Hard-Surface source contract.

Retained artifact:

- name: `modular-equipment-case-001-uc-instance-integration`;
- artifact ID: **10430594954**;
- exact head binding: `fcd27a806e52779a195ac2ef84e56419faa36d49`;
- archive size reported by GitHub: **12,592 bytes**;
- archive SHA-256: `8f5e3cf9c1b19567c89c51e47446852e5187262a4b9cea4a24e7c4f9457cc985`.

The retained ZIP was downloaded and independently SHA-256 rehashed during this activation. The local digest matched GitHub's retained artifact digest exactly.

The archive contains the exact source, generated OBJ, projected UC package, structural receipt, integration receipt, materialized UC package and materialized UC instance.

Exact retained integration result:

`PASS_EXACT_UC_ASSET_INSTANCE_HANDOFF`

Receipt facts:

- schema: `axm.object-uc-asset-instance-integration/v0.1`;
- expected UC commit: `8dd55d7186aa99911ca8d28af303f31d2c05fad4`;
- observed UC commit: same exact SHA;
- UC package schema: `axm.asset-atom-package/v0.1`;
- UC instance schema: `axm.asset-instance/v0.1`;
- package ref: `axm.object.modular-equipment-case-001@0.1.0`;
- generated package file SHA-256: `41f4a16fc45fce0628567f5125e4635ca8286c74ebe7ba066b9fc1113e68ffa5`;
- normalized/package digest: `sha256:7246a64cdd202d1af9a02c8163aac9804d8e2479c4c74a41faf8e22e4228877d`;
- deterministic instance digest: `sha256:20da57396ee2c6b94c0551f9dffa26a65280c1eaafc46534c07a8b8698541392`;
- socket count: **2**;
- socket names: `left_service`, `right_service`;
- socket atoms preserved exactly from validated package into compiled instance: **true**;
- materialized package SHA-256: `217a8b310192c9be31e3666aeb0ca2e2f2f08e2c9cb6ecfff1c7a52173fbf641`;
- materialized instance SHA-256: `5c8a9dece3d6d83b1d04776ff2c056b1844656c391ceb69f884b9cfc583b0eee`;
- materialized files re-open equal to compiler output: **true**;
- UC external-resource evidence for the OBJ: `DECLARED_RESOURCE_REFERENCES_NOT_FETCHED`;
- declared OBJ digest retained by UC: `sha256:3e01ef3bf4935ee6aee7c56c03dc0b7f54c308e5ac2eb6a7583252a366901106`;
- `attachment_instantiated_in_3d`: **false**;
- `physical_fit_tested`: **false**;
- `collision_or_load_tested`: **false**;
- `runtime_or_gameplay_acceptance`: **false**.

## Reusable learning / placement decision

The cross-repo pipeline distinction is now stronger:

> **Schema validation is not the whole integration path. For a source-owned descriptor projection, retain exact package identity, compile through an exact UC revision, prove descriptor preservation into the deterministic instance, materialize and re-open the descriptor project, and keep external resource, renderer, physics and runtime acceptance as separate gates.**

Current placement remains:

- **Object Design** owns physical socket plate/frame semantics and the exact source → UC projection;
- **Universal Creation** owns domain-neutral package validation, deterministic Asset Instance compilation and descriptor materialization;
- **Technical Art** proves the cross-repo path without moving source semantics into UC;
- **Capability Cartography** may record the repeated architecture, but this one Object success does not justify a universal source adapter or new socket semantics inside UC.

This pass is also a third materially different design → UC crossing after Animal and Nature:

- Animal: source-owned organic surface adapter → UC GLB publication/verification;
- Nature: source-owned organic surface adapter plus local leaf-backface compatibility → UC GLB publication/verification;
- Object: source-owned mechanical-interface projection → UC Asset Atom validation/compile/materialization.

Those three cases reinforce one architectural boundary: **source semantics/adaptation stay local; generic target machinery stays in UC**. They do not establish that the source adapters themselves should be merged.

## UC boundary / current-main observation

No UC edit was necessary.

Current UC main already exposes the exact neutral capability needed here. Open current UC work is focused on separate concerns such as physics growth, evolution/aftertouch and profession-crew evidence routing; this activation did not duplicate or modify those lanes.

The important UC truth boundary is retained rather than worked around: the Asset Atom compiler carries the declared OBJ URI/digest into resource evidence, but explicitly does not fetch or verify those external bytes. This Object PASS therefore cannot be inflated into a rendered/imported/physical attachment claim.

## Previous Technical Art evidence retained

### Wreckline provider provenance

Previous exact Technical Art lane remains valid and separate:

- `mike-axiom-mir/axm-wreckline#8`;
- exact head `ba7f49da25711ec6412d054a108c0001316961ae`;
- artifact `10429588319`;
- archive SHA-256 `0a2914792550e77503994cc168bda87d9f99378575f54365afa0189d9913b079`;
- result `PASS_CONSUMER_OWNED_PROVIDER_IMPORT_CONTRACT / HOLD_HISTORICAL_PROVIDER_INCOMPLETE`.

That retained receipt proves the attempted historical UC provider commit `ed64069af0ecda34cdba5b5ba68372a6a16a8e02` is missing two direct Wreckline provider modules:

- `axm_uc.hard_surface`;
- `axm_uc.vehicle_hardpoints`.

No historical provider implementation was guessed or restored. Wreckline provider closure remains one-consumer evidence and is not promoted into UC.

### Animal / Nature bridges

The earlier Animal and Nature source-owned bridges also remain valid and separate. Their source coordinate/material/sidedness semantics remain in their design repos; UC provides portable target machinery. This Object pass does not rewrite those contracts.

## Truth boundary / non-claims

This activation proves only that the exact generated Object Asset Atom package can be re-validated, deterministically compiled, socket-preserved, descriptor-materialized and re-opened through exact UC commit `8dd55d...` while retaining UC's explicit external-resource limitation.

It does **not** prove:

- renderer meaning of the socket Euler transforms or frame axes;
- target-engine import of the Object asset;
- that UC fetched or rehashed the OBJ bytes;
- 3D module attachment instantiation;
- physical fit or compatibility of a real module;
- collision, load-bearing, latch or full hinge engineering;
- animation/controller behavior;
- runtime cost or performance;
- gameplay acceptance;
- Art Director / Visual Observer acceptance;
- production readiness, CANON or Technical Art / UC mastery.

## Root gate

- **Truth:** validation, deterministic compilation, materialization, external-resource verification and 3D/runtime acceptance remain separate facts. The green UC compiler path is not described as a rendered attachment.
- **Agency / non-domination:** Object retains its physical/interface semantics; UC gains no domain authority and was not modified for convenience; Hard Surface, Rigging, Runtime and Art Direction keep their own acceptance gates.
- **Continuity:** the new lane stacks on exact Object Hard-Surface head `32027e...`, preserves source/package identity, pins exact UC head `8dd55d...`, retains digests and leaves the sibling Rigging lane untouched.
- **Wisdom before speed:** existing neutral UC machinery was exercised before inventing new shared code. The smallest missing evidence contract was added at the consumer boundary.

## Handoffs

- **Hard Surface / Object:** PR #4 proves the existing exact socket projection survives UC's complete descriptor path. It does not change the source asset or make physical-fit claims.
- **Rigging / Object:** PR #3 remains the separate lid-articulation proof. Do not inherit UC runtime or controller acceptance from this descriptor PASS.
- **Capability Cartographer:** there are now three materially different design → UC crossings supporting the same source-local / UC-generic boundary. Record the repeated architecture, but do not centralize source adapters unless executable duplication actually appears.
- **Runtime / Optimization:** no renderer/runtime attachment was instantiated. There is no new draw-call, residency or target-host result to inherit.
- **Visual Observer / Art Director:** no new render was produced. This pass makes no aesthetic claim.
- **Universal Creation:** no code change requested. Its existing Asset Atom validation/compile/materialization behavior is sufficient for this bounded Object handoff; preserve the explicit external-resource truth boundary.
- **Wreckline:** historical provider HOLD remains unchanged and must not be confused with this current-UC descriptor success.

## Next Technical Art / UC Integration pass

Prefer one of these evidence-triggered gaps rather than adding abstraction for its own sake:

1. a real target-engine/import consumer needs to take the retained Object instance beyond descriptor materialization, while keeping source/socket semantics traceable;
2. a second independent design source uses Asset Atom sockets/interfaces and exposes literal reusable adapter/tooling duplication;
3. another design source crosses UC through a materially different target contract and challenges the current source-local / UC-generic placement;
4. a second independent consumer reproduces the Wreckline provider-closure need, allowing comparison before any shared provider-provenance helper is proposed;
5. authentic historical Wreckline provider source is recovered and can be immutably bound and re-tested.

If none of those exists, do not manufacture a UC integration layer. Re-scan the constellation and keep proven domain machinery where its evidence says it belongs.
