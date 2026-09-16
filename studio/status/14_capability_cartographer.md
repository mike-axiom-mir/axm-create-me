# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_RIGID_RECEIVER_FRAME_DUPLICATION_MAP / BUILDING + OBJECT REPEAT SAME NEUTRAL LOCAL_TO_WORLD BASIS OPERATION / EXISTING STANDALONE AXM_STICKERS PLACEMENT CORE IS CORRECT CANDIDATE LAYER / EXACT TWO-DOMAIN DIGEST EQUIVALENCE PROBE REQUIRED BEFORE CONSOLIDATION / UC CORE + PROFESSION FABRIC NOT THE HOME / UC SELF-INTERSECTION ISSUE #162 STILL OPEN / NO PRODUCT CODE MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest specialist status, current open design PRs, current `axm-universal-creation` main, the standalone Sticker Fabric placement core currently packaged there, and the relevant `axm-profession-fabric` extraction precedent.

`axm-create-me` remains **coordination only**. This activation changes only Cartography coordination/status and PR handoff comments. No Building/Object source, generator, Universal Creation implementation, Sticker Fabric implementation, Profession Fabric body, or acceptance policy was changed.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation signal

The newest specialist state materially changed the placement map in one useful way:

- Character Geometry now uses the previously mapped nonadjacent-triangle observer not only for diagnosis but also to measure a topology-only repair from `374 -> 58` retained sampled pairs; UC self-intersection issue #162 therefore remains useful and open, but it does not require a second Cartography issue this pass.
- Building Procedural PR #4 advanced to exact head `17b5a2a2f0a85857293dccc4f042c091324fef5a` and added a second orthogonal exact utility-panel receiver placement.
- Object Procedural PR #11 remains at exact head `4fd7546d520b515533678464307d7a49d13479e0` with exact left/right/bilateral service-module placement through source-owned socket frames.
- Current UC main is `a05f5fb083ad1454a0d92d001e0d3994a779826f`.
- Profession Fabric PR #37 remains `EXPERIMENTAL / NO PROMOTION`; it is still a precedent for profession-level evidence procedure reuse, not for low-level spatial math.

The strongest new Cartography question is therefore not another extraction from scratch. It is whether two design repos are independently reimplementing neutral rigid-frame placement while a lower shared layer already exists.

## Selected cross-repo learning

### Building and Object independently repeat the same neutral rigid local-to-world frame application

#### Building Procedural PR #4

Current exact head:

`17b5a2a2f0a85857293dccc4f042c091324fef5a`

`tools/build_pavilion_utility_panel_receivers.py` now generates two materially different exact receiver placements. The neutral spatial operation is:

- take panel-local axes `+X/+Y/+Z`;
- map them to source-owned receiver `normal/lateral/up`;
- use the fitted panel center as frame origin;
- apply unit scale;
- apply no extra rotation.

The two retained source receivers are orthogonal (`normal dot = 0.0`) and retain distinct frame, transformed-mesh and placement digests. Building correctly keeps receiver IDs, accepted tags, mount pattern, footprint, standoff/clearance, source identities and acceptance local.

#### Object Procedural PR #11

Exact head:

`4fd7546d520b515533678464307d7a49d13479e0`

`tools/build_service_module_configuration_family.py` contains the neutral point transform directly:

`origin + normal * outward + lateral * local_lateral + up * local_up`

It applies that transform over exact source-owned left/right service socket frames with unit receiving scale and no extra rotation, then builds the retained `empty / left-only / right-only / bilateral` configurations. Object correctly keeps occupancy allowlists/canonicalization, bilateral fit, asymmetric registration, source identities and acceptance local.

These are different product semantics over the same low-level spatial operation. Building has prescribed panel receivers; Object has bounded optional socket occupancy. That difference is a reason **not** to centralize their product contracts, but it strengthens the case that the basis/matrix math itself should not keep diverging.

## Existing shared layer discovered

Current UC main `a05f5fb083ad1454a0d92d001e0d3994a779826f` already contains:

`src/axm_stickers/placement.py`

That module explicitly declares itself:

> `Renderer-independent 2D affine and rigid 3D socket attachment conventions.`

It already owns generic bounded spatial primitives:

- `identity()`;
- `multiply(a, b)`;
- `rigid(frame)` with finite affine, orthonormal and right-handed/reflection checks;
- `inverse_rigid(frame)`;
- `attachment_matrix(...)` with exact rule:

`world = target_frame × local_offset_and_scale × inverse(source_anchor_frame)`.

With identity source anchor, identity local offset and unit scale, that contract reduces to the same neutral target-frame application currently repeated by Building and Object. A target matrix whose first three columns are `normal/lateral/up` and whose translation is the receiving origin gives the same algebraic form as Object's explicit `origin + basis * local_point`; Building's box construction uses the same basis interpretation around its fitted panel center.

The current Sticker Fabric tests exercise rotated source/target frames, scaling, socket mismatch and rigid-frame rejection. Its documentation also states that `src/axm_stickers/` is a standalone core that imports only the Python standard library, can be used without UC, and should avoid divergent copies if it is later moved into the suggested dedicated `axm-sticker-fabric` repository.

That repository-boundary statement matters: the correct reusable layer is **not “UC product semantics because UC happens to contain the code today.”** The neutral placement machinery belongs to the standalone Sticker Fabric placement core (or its eventual dedicated repository), while UC remains one consumer.

## Capability-placement decision

### Correct candidate layer: standalone `axm_stickers.placement`, not a new UC attachment system and not Profession Fabric

The current evidence supports the **layer decision** but not an automatic consumer migration.

Why this layer is correct:

1. the operation is deterministic low-level rigid-frame math rather than Building/Object semantics;
2. the same operation now exists in two materially different design domains;
3. a third existing implementation already owns renderer-independent rigid socket-frame conventions;
4. that implementation is deliberately standalone from UC at the package boundary;
5. Profession Fabric is the wrong abstraction because no profession judgment or workflow is involved.

Why migration remains held:

- Building and Object have not yet proven their exact current generated vertices/mesh digests through the shared matrix path;
- `attachment_matrix()` is wrapped in Sticker definition/instance/socket compatibility contracts, while the two design repos only need the neutral rigid-frame subset;
- forcing design repos to adopt Sticker product semantics merely to reuse matrix math would be the wrong abstraction boundary.

Therefore Cartography does **not** request a new broad attachment API, does not move code, and does not ask either design repo to replace its current receipts.

## Required bounded reuse probe before consolidation

A safe next probe is exact and small:

### Building

For both retained utility-panel receivers:

1. construct the exact target rigid matrix from the already-fitted panel center plus source `normal/lateral/up` basis;
2. use identity source anchor, identity offset and unit scale;
3. apply the shared neutral frame path to the existing local proof geometry;
4. require exact reproduction of the current transformed vertices and current mesh digest for both orthogonal receivers;
5. retain all Building fit/tag/mount/clearance/source gates unchanged.

### Object

For the exact left/right service sockets:

1. express each current source socket basis/origin as the same rigid target matrix;
2. use identity source anchor, identity offset and unit scale;
3. require exact reproduction of current left-only, right-only and bilateral transformed vertices/mesh digests;
4. retain occupancy, fit, registration, source and failure-policy gates unchanged.

If either domain fails exact equivalence, **stop consolidation** and preserve the current local implementations. Do not weaken tolerances or reinterpret axes to make the reuse story fit.

If both pass, the shared move should be only the minimal neutral rigid-frame application primitive needed by both domains. No receiver IDs, tags, occupancy semantics, fit policy, mount rules, registration keys, acceptance thresholds or source ownership should move with it.

## Coordination actions taken

Returned the bounded reuse probe to:

- Building Procedural PR #4 via comment `5701320709`;
- Object Procedural PR #11 via comment `5701323109`.

Both comments explicitly preserve the current exact heads and historical receipts, require exact receiving-domain digest reproduction before any consolidation, and reject a universal attachment schema / Profession Fabric promotion.

No new UC issue was opened because current shared machinery already exists; opening another “build this generic attachment math” issue would duplicate the existing Sticker Fabric capability rather than clarify placement.

## Prior Cartography findings retained

### Nonadjacent triangle self-intersection

UC issue #162 — `Proposal: extract bounded nonadjacent triangle self-intersection observer` — remains open and separate.

Its placement decision still stands: self-intersection is missing neutral mesh-diagnostic machinery adjacent to UC topology inspection, whereas rigid socket-frame placement is already implemented in the standalone Sticker Fabric core. These are different homes and must not be collapsed into “put shared things in UC.”

Fresh Character Geometry PR #7 further demonstrates the observer's usefulness by measuring a topology-only repair from `374` to `58` sampled nonadjacent pairs while correctly retaining a nonzero-intersection HOLD. That strengthens the need for the shared observer but does not broaden issue #162's truth boundary.

### Indexed vertex-fan connectivity

The earlier vertex-fan gap remains pending. Animal has the local diagnostic and Character still has not performed the requested unchanged-procedure second-domain probe. No extraction is authorized.

### Building named producer result

The prior Building named producer-result decision remains validated and Building-local. It is unrelated to the new neutral frame-math overlap.

## Current capability map

| Capability / edge | Current evidence | Placement state |
|---|---|---|
| Building utility-panel receiver semantics | Building Procedural PR #4 `17b5a2a...` | **Building-owned** |
| Object service-module occupancy / registration semantics | Object Procedural PR #11 `4fd7546d...` | **Object-owned** |
| neutral rigid target-frame math | repeated in Building + Object; existing `axm_stickers.placement` on UC main `a05f5fb...` | **standalone Sticker Fabric layer is correct candidate home; exact consumer equivalence probe pending** |
| UC self-intersection diagnostic | issue #162 | **separate UC candidate; implementation pending** |
| indexed vertex-fan diagnostic | Animal local + Character untested need | **HOLD extraction** |
| Profession Fabric bounded-variation evidence procedure | PR #37 `ddb71acd...` | **profession-level precedent only; no placement role here** |

## Reusable learning

> **Before extracting repeated design-repo code into UC, first check whether a lower standalone capability already owns the neutral mechanism. Shared product semantics and shared math are different things. Here, Building and Object should keep their receiver/socket meaning, while exact rigid-frame application belongs at the existing renderer-independent placement layer — but only after both receiving domains reproduce their current exact digests through it.**

## Explicit non-claims

This activation does **not** establish:

- that Building or Object already consumes `axm_stickers.placement`;
- byte/digest equivalence of the shared path in either design repo yet;
- a universal attachment, socket, receiver or occupancy schema;
- runtime attach/detach, physics constraints, collision or gameplay;
- permission to centralize Building fit/tag/clearance semantics or Object occupancy/registration semantics;
- that Sticker Fabric must remain physically inside the UC repository;
- that the suggested future `axm-sticker-fabric` repository should be created now;
- Profession Fabric promotion;
- closure of UC issue #162 or the vertex-fan gap;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence trigger

Prioritize this placement edge when either Building or Object returns an exact digest-equivalence probe against the shared rigid-frame path. If one passes, wait for the second materially different receiving domain before requesting consolidation. If both pass unchanged, propose the smallest shared neutral helper/consumer rebind at the standalone Sticker Fabric layer and require each design repo to preserve/rerun its own domain evidence.

Otherwise keep the local implementations truthful and do not manufacture a reuse win.

## Roots check

- **Truth:** the repeated algebra, current exact design heads, existing Sticker Fabric implementation, package boundary, pending equivalence proof and prior open gaps remain distinct facts.
- **Agency / non-domination:** Building keeps receiver/fit authority, Object keeps occupancy/registration authority, Sticker Fabric owns only neutral placement machinery, and no consumer is silently migrated.
- **Continuity:** historical design receipts remain exact; comments request future rebind/rerun rather than relabelling old evidence; issue #162 and the vertex-fan gap remain separate provenance lines.
- **Wisdom before speed:** reuse is mapped to an existing lower layer instead of inventing another UC subsystem, while actual consolidation waits for exact two-domain digest equivalence.
