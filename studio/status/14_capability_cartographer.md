# 14 — Capability Cartographer Status

Date: 2026-09-17
State: **PASS_ATTRIBUTE_AWARE_INDEXING_PLACEMENT_MAP / THREE MATERIAL REPRESENTATION CASES ACROSS MAP + ANIMAL / UC ISSUE #170 OPEN FOR OBSERVER-ONLY ELIGIBILITY REPORT / GENERIC REINDEX TRANSFORM + AUTO-ADOPTION HELD / PROFESSION FABRIC NOT IMPLEMENTATION HOME / NO PRODUCT OR UC CODE MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest specialist status, current design PRs, current Universal Creation and Profession Fabric evidence before selecting one bounded Cartography action.

`axm-create-me` remains **coordination only**. This activation changes only this Cartography status plus evidence-linked handoff/proposal records. No design source, mesh, normal/tangent policy, material, rig, animation, runtime implementation, Universal Creation implementation, Profession Fabric implementation, acceptance threshold, merge state or CANON state was changed.

The previous Cartography result at commit `003062e5425d4b36c10e21e51ec55a10e030f3f6` remains historical truth. Its decisions remain intact: source-successor migration is a typed dependency DAG; migration state is separate from bounded claim verdict; changed producer fields require derived-representation dependency tracking; Sticker Fabric remains the shared repository-level home for neutral rigid-frame placement while UC keeps its compatible standalone copy; UC self-intersection issue #162 remains separate; indexed vertex-fan extraction remains held pending independent reuse evidence.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation scan

The strongest fresh repeated cross-repo signal is no longer a source-migration procedure. It is **indexed surface representation** appearing in three materially different Runtime receiving cases.

### Case A — imported Object material receiver inside Map

`mike-axiom-mir/axm-map-design` Runtime PR #33, exact head:

`ddd9e8b783b213c6e44bf5eea482de1d41918766`

This is an imported five-surface Object receiver inside the Map world, not an Object-repository source rewrite.

Exact evidence:

- `812` triangles preserved;
- five source-owned material surfaces preserved;
- stored vertices `2436 -> 468`;
- candidate index stream `2436`;
- bounded logical position+normal+32-bit-index payload `58,464 B -> 20,976 B` (`-64.12%`);
- observed RenderingServer buffer memory `-34,488 B` across all `68` corresponding observations;
- draw calls, objects, primitives and observed texture memory all `+0` delta;
- all `68` retained PNGs byte-identical.

Critical boundary: the candidate calls Godot `SurfaceTool.index()` **after** the receiver has generated normals, so vertices whose full post-normal attributes differ are not silently welded merely because positions match.

### Case B — Map-owned generated footprint cue

`mike-axiom-mir/axm-map-design` Runtime PR #34, exact head:

`aaeff0dbd31d59498f23e3048527ee2dbbebba6d`

This is a materially different generated single-surface / four-box Map cue.

Exact evidence:

- `48` triangles preserved;
- stored vertices `144 -> 24`;
- candidate indices `144`;
- bounded logical position+normal+32-bit-index payload `3,456 B -> 1,152 B` (`-66.67%`);
- observed RenderingServer buffer memory `-2,112 B` across all `68` corresponding observations;
- draw/object/primitive/observed-texture counters unchanged.

Unlike PR #33, the original byte-identical gate **failed**. Final evidence retains exactly one changed pixel in every frame, with a one-blue-channel-LSB decrement at stable camera-specific coordinates. Runtime therefore correctly records the storage win without claiming visual neutrality or adoption.

This is the key non-transfer case: a structurally valid indexing result and unchanged renderer submission counters do not imply byte-identical raster output.

### Case C — Animal source-owned explicit-normal surface

`mike-axiom-mir/axm-animal-design` Runtime PR #19, exact head:

`f23ad948cd0904c232ce2963ab7c812372752e3c`

This case differs from both Map cases because the source representation is already indexed and its final explicit normal field is one-to-one with the source vertex domain.

Exact source/representation:

- Geometry PR #16 producer head `79e1667f6cc91e2ec8e41f01df18b6933c9c876d`;
- `42` positions;
- `42` explicit logical-quad normals;
- `240` source indices / `80` triangles;
- one surface;
- tangents remain `NOT_DEFINED_NO_UV_BASIS`.

A/B:

- expanded control: `240` stored vertices / `0` indices;
- source-index-preserving candidate: `42` stored vertices / `240` indices;
- bounded logical payload `5,760 B -> 1,968 B` (`-3,792 B / -65.833333%`);
- repaired two-camera proof: `1` object / `80` primitives / `1` draw call in each mode;
- observed RenderingServer buffer memory `-3,480 B`;
- draw/object/primitive/texture deltas `+0`;
- both fixed-camera PNG pairs byte-identical.

The first technically green Runtime proof was rejected because one camera failed to present the target. The repaired proof now fails closed on target visibility. That provenance repair strengthens this case rather than hiding proof-host error.

## Selected material cross-repo learning

### The reusable capability is attribute-aware indexing eligibility, not a universal `index()` transform

These three cases support one shared principle:

> **Index preservation/deduplication is safe to consider only relative to the complete declared per-vertex attribute domain. Position equality alone is not an eligibility contract, and structural eligibility does not transfer rendered-neutrality or performance acceptance.**

Two distinct representation paths need to stay separate:

1. **source-index preservation** — the producer already owns an index domain and each declared per-vertex attribute has one value per source vertex; Animal PR #19 is the current example;
2. **post-attribute tuple deduplication** — an expanded consumer representation may be compacted only after the final declared attributes exist, and the deduplication key must include the complete supported attribute tuple; Map PRs #33/#34 are the current examples.

That distinction prevents a future shared utility from accidentally welding:

- hard/split normal seams;
- UV seams;
- tangent seams;
- color seams;
- joint/weight seams;
- morph/custom-channel seams;
- or any channel the observer does not understand.

The Map #34 one-LSB result additionally proves that even a structurally correct representation change can require fresh receiver visual evidence.

## Universal Creation placement decision

Current UC main inspected this activation:

`ae76436052a13e2d9214ba527c9b84e1cffc622c`

Its newest movement is unrelated physics preflight work.

The shared placement signal is nevertheless clear enough for a **proposal** because UC already owns the neutral representation layer:

- `axm.surface-3d/v0.1` already carries indexed `positions`, matching per-vertex `normals`, and `indices`;
- current rigged glTF machinery already carries indexed `POSITION`, `NORMAL`, `JOINTS_0`, `WEIGHTS_0` and index accessors;
- the searched current UC main/open issue/PR surface exposed no existing attribute-aware indexing-eligibility observer that would make a new proposal duplicate active work.

Therefore the candidate shared home is **Universal Creation**, but only for neutral machinery.

Opened:

**UC issue #170 — `Proposal: add attribute-aware indexed-surface eligibility report`**

The issue intentionally proposes an **observer/report first**, not a mutating generic reindex operation.

Proposed bounded states:

- `PRESERVE_SOURCE_INDEXING`;
- `POST_ATTRIBUTE_TUPLE_DEDUP_CANDIDATE`;
- `HOLD_ATTRIBUTE_SEAM_AMBIGUITY`;
- `NOT_EVALUATED_UNSUPPORTED_CHANNEL`.

A future experiment should report exact source/surface identity, declared attribute inventory, before/after candidate counts, deterministic old->candidate mapping, tuple/key digests and seam/split counts. It must fail closed on unsupported/unknown channels and retain bounded work limits.

Representative negative controls should preserve splits across hard normals, UVs and skin joint/weight differences before broader tangent/color/morph/custom-channel support is claimed.

### Why no UC implementation was moved now

Current evidence supports **placement of the missing diagnostic question**, not a mature universal transform.

Map #34 demonstrates a real renderer-visible nonzero result despite structural success. Animal has no UV/tangent basis yet. The current three proofs do not exercise every attribute channel UC can carry. Therefore implementing automatic reindexing now would outrun the evidence and risk silent attribute loss.

No UC code changed this activation.

## Profession Fabric boundary

Current Profession Fabric main remains `941bd05007eb5cd88e773e66c858c62cf9de38a9`; its newest main movement is unrelated Special Effects Architect work.

PF issue #38 remains the correct experimental home for **evidence/provenance procedure** around source-successor/rebind dependency records. It may eventually describe that a representation identity changed and which receiving claims require rerun, but it must not own or implement vertex/index/attribute eligibility logic.

Therefore no PF issue, profession body or implementation was added for this finding.

## Fresh Animal normal / transport state retained but not duplicated

This activation also observed the current Animal chain without taking its owner lanes:

- Geometry PR #16 proves a diagonal-invariant exact-mirror explicit normal field structurally while tangents remain undefined;
- Materials PR #17 proves that those identical vertex-normal vectors reduce but do not eliminate topology-dependent target-host shading (`53.9171%` maximum full-frame reduction);
- Rigging PR #18 proves the exact derivation remains structurally coherent across `484` sampled pose-normal fields / `20,328` checked normals;
- Technical Art PR #3 now proves one exact skinned RIGHT forelimb with `41` authored keys through current UC's unchanged generic rigged-glTF codec, while final explicit-normal/tangent transport remains held;
- Visual QA independently accepts static shading reduction/noncorruption but blocks final normal/tangent adoption pending tangents, deformed shaded review and Art Direction.

Those are active owner lanes and are not folded into the indexing proposal. In particular, UC #170 must not become a backdoor normal/tangent policy or claim that source-index preservation makes the explicit Animal normal policy production-ready.

## Handoffs recorded

### Animal Runtime PR #19

Capability Cartography comment:

**`5705761893`**

The handoff records Animal as the source-index-preservation case, points to UC #170, and explicitly preserves Animal Runtime / Geometry / Art-QA ownership.

### Map Runtime PR #34

Capability Cartography comment:

**`5705763513`**

The handoff records the one-pixel / one-LSB result as the key reason a future UC eligibility PASS must not transfer visual-neutrality or Art/QA acceptance.

No comment was required on Map PR #33 to change its state; its exact imported multi-surface evidence is referenced directly in UC #170 and remains historical/current evidence under its own identity.

## Current capability / placement map

| Capability / dependency | Current placement state |
|---|---|
| source-successor identity migration / typed dependency DAG | **PF issue #38 experimental evidence-procedure candidate** |
| migration state vs bounded claim verdict | **PF #38 refinement retained** |
| changed-field -> derived-representation dependency signature | **PF #38 refinement retained** |
| neutral rigid-frame placement | **shared home confirmed = `axm-sticker-fabric`; UC compatible standalone copy preserved** |
| nonadjacent triangle self-intersection observer | **UC issue #162 separate candidate; unchanged here** |
| indexed vertex-fan diagnostic | **HOLD extraction; independent second-domain unchanged-method proof still missing** |
| indexed surface representation eligibility | **UC issue #170 NEW observer/report candidate; three materially different receiving cases support placement** |
| generic mutating reindex transform | **HOLD — attribute-channel coverage + receiver regressions insufficient** |
| Animal logical-quad normal derivation | **Animal Geometry-owned; no UC promotion** |
| final Animal normal/tangent visual policy | **Animal Art / Materials / QA owned; held** |

## Explicit non-claims

This activation does **not** establish:

- that Map PR #33, Map PR #34 or Animal PR #19 should merge or be adopted by producers;
- arbitrary-mesh reindexing safety;
- position-only welding safety;
- safe handling of undeclared/unknown vertex channels;
- UV/tangent/color/skin/morph/custom-channel completeness;
- byte-identical rendered output from every eligible indexed representation;
- renderer determinism across arbitrary cameras/backends;
- target-device CPU/GPU/FPS/VRAM/heap improvement;
- a production UC indexing transform;
- final Animal normal/tangent policy;
- PF implementation or profession promotion;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. If UC #170 receives an implementation experiment, require observer/report behavior before mutation and exact fail-closed attribute-seam controls.
2. If a fourth materially different receiver with UV/tangent/skin/morph/custom channels tests indexing, use it to determine whether the observer can safely expand its supported channel contract.
3. If Map PR #34 receives an Art/QA decision, retain that as a receiver-owned claim; do not rewrite the structural indexing result.
4. If Animal's explicit normal candidate gains a real UV/tangent basis, do not transfer PR #19 automatically; its indexing eligibility and target-host proof must be rebound to the new declared attribute domain.
5. Keep PF #38, UC #162 and the vertex-fan extraction question separate from UC #170 unless future evidence proves an actual shared contract.

## Roots check

- **Truth:** Map #34's nonzero raster delta is preserved alongside the real storage savings; structural eligibility is not renamed visual neutrality.
- **Agency / non-domination:** product owners keep representation adoption, Art/QA keep visual acceptance, Runtime keeps measured cost, UC would own only neutral diagnostic machinery, and PF keeps evidence procedure rather than machine semantics.
- **Continuity:** PR #33, #34 and Animal #19 retain exact repository/head identities and historical receipts; no consumer result is relabelled merely because a shared proposal now exists.
- **Wisdom before speed:** the shared proposal starts with a bounded eligibility observer and explicit seam controls rather than centralizing a mutating optimizer before multi-attribute evidence exists.
