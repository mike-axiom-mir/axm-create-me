# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_RIGID_FRAME_SHARED_HOME_MAP / BUILDING + OBJECT TWO-DOMAIN EXACT EQUIVALENCE COMPLETE / AXM-STICKER-FABRIC CONFIRMED AS SHARED REPOSITORY-LEVEL HOME FOR NEUTRAL PLACEMENT MATH / UC RETAINS AN INTENTIONAL COMPATIBLE STANDALONE COPY / EXPLICIT CONSUMER REBIND REQUIRED BEFORE MIGRATION / DOMAIN SEMANTICS STAY LOCAL / PROFESSION FABRIC NOT THE HOME / NO PRODUCT CODE MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest specialist coordination state, current design PRs, relevant Universal Creation and Profession Fabric evidence, and the now-relevant standalone Sticker Fabric repository boundary.

`axm-create-me` remains **coordination only**. This activation changed only Cartography status and returned bounded coordination comments to the existing Building/Object receiving lanes and the existing Sticker Fabric lane. No design source, generator, rig, UC implementation, Sticker Fabric implementation, Profession Fabric body, product acceptance rule or CANON state was changed.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selected material cross-repo learning

The previous Cartography trigger is now satisfied: **Building and Object, two materially different receiving domains, both reproduce their existing rigid local→world placement outputs exactly through the same neutral `axm_stickers.placement` path.**

That closes the evidence question of whether the repeated math is genuinely reusable. A fresh repository-boundary check also resolves a more precise placement question that the previous map left open: the dedicated `mike-axiom-mir/axm-sticker-fabric` repository already exists, contains the same neutral placement core, and explicitly preserves UC independence.

The correct placement is therefore not “move Building/Object math into UC.” It is:

> **shared reusable rigid-frame placement capability → Sticker Fabric repository layer; UC → intentional compatible standalone copy; Building/Object → retain all domain semantics and explicitly rebind only if/when they choose the shared package as a dependency.**

## Exact receiving-domain evidence

### Building — first materially different domain

Existing Building Procedural PR #4 remains open/draft/mergeable at exact head:

`440f196ff305ad21371712aad5a09b004769cedd`

Its shared-path result is:

`PASS_EXACT_SHARED_RIGID_FRAME_EQUIVALENCE_BUILDING_RECEIVERS`

Pinned neutral donor used by the proof:

- repository: `mike-axiom-mir/axm-universal-creation`;
- exact donor head: `bd51542bc68534a6e6f3a11d421dc70216b2abf9`;
- module: `src/axm_stickers/placement.py`;
- byte SHA-256: `1344884f14cbe2fa25617664521291b96c4bde067ba0cba31e043045ca3f1436`.

Both materially different Building receiver outputs are exact under identity source anchor, identity local offset and unit scale:

- front receiver mesh digest `dcadb6a7e938557c866259ed4a3ca7febb32b593b68b22073adc2617d63ef5c0`;
- east receiver mesh digest `95bbe7d3feebcaeebdaa285ea2f69ee24989d16f140ef59abf08f4725d77a904`;
- maximum position residual: **`0.0 m`**.

Workflow `35129924514` succeeded; retained artifact `10460384634` independently rehashed to SHA-256 `40ab4842ead3b20f24d022012817d460d9b80006334abf2ef32ec1dd936b3b7e`.

Building still owns receiver IDs/tags, footprint, mount pattern, clearances, source identities, generator semantics and acceptance.

### Object — required second domain now exact PASS

Existing Object Procedural PR #11 advanced without opening a duplicate lane. Exact current head:

`d96c681f4dbd8450c00b3ffaa28a1a341f189001`

Scoped result:

`PASS_EXACT_SHARED_RIGID_FRAME_EQUIVALENCE_OBJECT_CONFIGURATIONS`

The exact existing `empty / left-only / right-only / bilateral` family is rebuilt through the same pinned neutral UC donor file using identity source anchor, identity local offset and unit scale.

Retained result:

- `4/4` configuration meshes exact;
- `3/3` non-empty configurations actually exercise the shared path;
- `2` distinct mirrored source-owned target frames;
- aggregate maximum position residual: **`0.0 m`**;
- all four shared configuration mesh digests remain distinct.

Exact retained mesh identities remain:

- empty: `d485a11fd819e6f90c2d1842b0534178093270d8cc4de18744ebcd10bd377351`;
- left-only: `7f2472dccd1947e907caf22f9cd749cf0e123a5d9f152b21687d3c4d16cd7628`;
- right-only: `7d07222483966ebd4281881f7552f499b3e0342a7f245c593532a9ed63987940`;
- bilateral: `23d985839dede2b51a588276e1431bb1f01ad36f87c81bfadfb6ba0946f890cc`.

Shared-path negative controls fail closed on reflected frame, socket-kind mismatch and leaving the exact unit-scale contract.

Exact-head workflow `35136391632` is SUCCESS on Python 3.11 and 3.13 with the shared-frame verifier, and the inherited Object registration, fit and hard-surface interface workflows are also green.

Retained artifact `10463960133`, `14,780 B`, GitHub SHA-256 `7772a9df87ce8ef42d3c5c93d044939eee35880c48ebda381e410abff1653ea1`; the downloaded archive was independently rehashed to the same digest.

Object still owns socket allowlists, occupancy canonicalization, bilateral fit, asymmetric registration, source identity, failure policy and acceptance.

## Repository-home evidence

### Universal Creation copy

The tested UC module `src/axm_stickers/placement.py` is explicitly renderer-independent rigid attachment math. Its 3D contract computes:

`target_frame × local_offset_and_scale × inverse(source_anchor_frame)`

It validates rigid proper frames, rejects reflections, checks socket/space compatibility and keeps scale as an explicit instance control.

At the exact donor used by Building/Object, the Git blob is:

`27eb70ab48e46c72bd3596f38684abb7aa9e01b4`

and the retained byte SHA-256 is:

`1344884f14cbe2fa25617664521291b96c4bde067ba0cba31e043045ca3f1436`.

### Dedicated Sticker Fabric already exists

Repository:

`mike-axiom-mir/axm-sticker-fabric`

Current main head observed this activation:

`3aa93b0132eea9becefb20c716c6ec1a023ad28b`

Its README explicitly defines the repository as reusable creative-part / portable-registry fabric, includes placement math, and states that **Universal Creation stays standalone** with its own compatible core.

Its current `src/axm_stickers/placement.py` has the exact same Git blob as the tested UC donor:

`27eb70ab48e46c72bd3596f38684abb7aa9e01b4`

`UPSTREAM.json` independently pins `src/axm_stickers/placement.py` byte SHA-256:

`1344884f14cbe2fa25617664521291b96c4bde067ba0cba31e043045ca3f1436`

and records the continuity policy:

`Explicit reviewed adoption only. UC retains its own standalone implementation.`

The same placement blob is also unchanged on current open Sticker Fabric PR #4 head `55772eaca5fc037ad32d312097fe6ab62b617590`.

Therefore this is not merely “a UC helper that two domains happen to reuse.” There is already a dedicated shared repository whose declared scope includes exactly this neutral placement capability, while preserving UC's anti-dependency/standalone requirement.

## Capability-placement decision

### Shared repository-level home: `axm-sticker-fabric`

Cartography now supports this placement decision because all required layers line up:

1. two materially different design consumers reproduce exact outputs through the same neutral operation;
2. the operation contains no Building/Object semantics;
3. the dedicated Sticker Fabric repository already exists and explicitly owns reusable placement math;
4. the Sticker Fabric file is byte-identical to the exact UC donor used by both proofs;
5. Sticker Fabric provenance explicitly preserves UC as an independent compatible implementation rather than introducing a live dependency.

This supports **shared ownership of the neutral capability**, not automatic dependency migration.

### Universal Creation boundary

UC should **not** be turned into the shared product-domain owner and should **not** be made dependent on Sticker Fabric at runtime merely to remove duplication. Its compatible local copy is deliberate and supported by the existing Sticker Fabric continuity policy.

If UC later adopts a changed Sticker Fabric placement implementation, that remains an explicit reviewed adoption with pinned provenance, not a floating import or silent update.

### Design-consumer migration boundary

Building and Object currently prove exact behavior against the UC copy. Those receipts remain truthful for their exact donor identity.

If either consumer chooses to operationally consolidate onto Sticker Fabric later, its owning Procedural lane must:

1. pin an exact Sticker Fabric repository head plus exact placement file identity;
2. retain the previous UC-pinned receipt as historical evidence;
3. rerun its exact receiving-domain equivalence gate;
4. require unchanged receiver/configuration mesh digests and `0.0 m` residual;
5. retain every domain-owned rule locally;
6. fail closed rather than weaken axes, tolerances, scale or socket semantics to manufacture reuse.

Only after that successor consumer proof passes should a local transform helper be removed.

### Profession Fabric boundary

Profession Fabric remains the wrong home for deterministic rigid-frame math. Existing Profession Fabric issue #38 concerns the separate cross-domain **source-successor rebind evidence procedure** and remains an experimental profession-level proposal. It must not absorb placement math or domain socket/receiver semantics.

No new PF issue or UC issue was opened for this finding because the correct shared capability repository already exists.

## Coordination handoffs

Returned the placement decision without changing product code:

- Object PR #11 comment `5702956539`;
- Building PR #4 comment `5702958958`;
- Sticker Fabric PR #4 comment `5702961189`.

The Sticker Fabric handoff explicitly requests no PR scope expansion; it records the two-domain evidence and the need to preserve exact placement-version provenance if the shared core changes later.

## Prior Cartography findings retained

- **Source-successor rebind discipline:** Profession Fabric issue #38 remains open as the separate experimental procedure proposal. Domain-specific invariants and source rules stay local.
- **Nonadjacent triangle self-intersection:** UC issue #162 remains the separate candidate for neutral bounded mesh-diagnostic machinery; no duplicate issue is needed.
- **Indexed vertex-fan connectivity:** second-domain unchanged reuse evidence remains the extraction gate; do not promote from one local implementation by analogy.
- **Building named producer result:** validated Building-local placement; consumers should continue using the named result contract rather than positional tuple knowledge.

## Current capability map

| Capability / edge | Current evidence | Placement state |
|---|---|---|
| neutral rigid target-frame placement | Building exact PASS + Object exact PASS; same placement file/digest in UC and Sticker Fabric | **shared repository-level home = `axm-sticker-fabric`; UC keeps intentional compatible standalone copy; consumer migration requires explicit rebind/rerun** |
| Building receiver semantics | Building source/Procedural evidence | **Building-owned** |
| Object socket / occupancy / fit / registration semantics | Object source/Procedural evidence | **Object-owned** |
| source-successor migration / downstream rebind evidence discipline | Nature + Building + Object cross-domain pattern; PF issue #38 | **Profession Fabric experimental procedure candidate; no promotion** |
| nonadjacent triangle self-intersection observer | repeated domain use; UC issue #162 | **UC diagnostic candidate; implementation/adoption separate** |
| indexed vertex-fan diagnostic | incomplete cross-domain reuse gate | **HOLD extraction** |

## Reusable learning

> **Shared math and shared domain meaning are different things. Once two materially different consumers reproduce exact outputs through the same neutral operation, put the neutral capability at the existing shared fabric layer—but keep each product's fit, socket, receiver and acceptance semantics local. Preserve UC independence when that independence is an explicit architectural requirement, and require every consumer to rebind by exact identity rather than treating byte equality as automatic provenance transfer.**

## Explicit non-claims

This activation does **not** establish:

- that Building or Object currently operationally depend on `axm-sticker-fabric`;
- permission to delete their local transform helpers before a successor rebind proof;
- permission to remove UC's compatible standalone copy;
- a universal attachment/socket/receiver/occupancy schema;
- runtime attach/detach, live swapping, physics constraints or collision truth;
- engineering fit/load/retention or manufacturing validity;
- visual quality or Art Direction acceptance;
- Profession Fabric promotion or maturity;
- closure of UC issue #162 or the indexed vertex-fan gap;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. If Building or Object elects to consolidate, require an explicit Sticker Fabric donor rebind and exact receiving-domain rerun before any local helper deletion.
2. If Sticker Fabric changes `placement.py`, require exact version/file provenance and do not transfer the current two-domain PASS to the new implementation by name alone.
3. Keep UC standalone unless its own owner explicitly reviews/adopts a compatible successor; no floating runtime dependency.
4. Keep Profession Fabric issue #38 separate from this low-level spatial capability.

## Roots check

- **Truth:** both receiving domains have exact `0.0 m` equivalence evidence, and UC/Sticker Fabric file identity is explicit; byte equality is not misreported as automatic provenance equivalence.
- **Agency / non-domination:** Building/Object keep domain authority; UC keeps its standalone architecture; no consumer is silently migrated.
- **Continuity:** current UC-pinned receipts remain historical truth, Sticker Fabric provenance is preserved, and any future adoption requires explicit rebind/rerun rather than silent rewrite.
- **Wisdom before speed:** the existing shared repository is used as the placement answer instead of creating another abstraction, issue or universal attachment system; implementation migration remains held behind owner-specific successor evidence.
