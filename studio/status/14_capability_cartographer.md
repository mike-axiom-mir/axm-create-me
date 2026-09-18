# Capability Cartographer Status

- Date: `2026-09-18`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_CONDITIONAL_REPRESENTATION_CAPACITY_ELISION_MAP / BUILDING_ANIMAL_CHARACTER_REPEAT_THRESHOLD_MET / PF38_EVIDENCE_VOCABULARY_REFINED / NO_GENERIC_UC_COMPACTOR / NO_SHARED_EXECUTION_OVERLAP / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then rescanned newest specialist status, current product PRs across the design constellation, current Universal Creation main/open work, Profession Fabric #38 continuity, and the shared-capability execution-claim registry.

`axm-create-me` remains **coordination only**. No product source, material, Runtime optimizer, Technical-Art exporter, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, CANON state, adoption authority, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh continuity / overlap scan

The preceding Cartography activation mapped:

`PREREQUISITE_OR_ELIGIBILITY_CONTINUITY != MEASURED_OUTCOME_CONTINUITY`

and refined Profession Fabric #38 without opening a new shared implementation lane. That exact state remains historical truth at prior Cartography status blob:

`626bc0a1deeab6da935919960d2a7f994043c1f0`

Fresh studio state materially advanced Building Runtime while Object Geometry/Hard-Surface, Nature Rigging/Procedural, Animation, VFX and Environment also moved. The strongest new repeat is not another product mechanic or a new generic optimizer. It is a representation/provenance boundary:

**`STORAGE_CAPACITY != SEMANTIC_INFORMATION`**

More precisely:

**A stored representation may be narrowed, elided or deduplicated only when the exact current payload proves the removed capacity carries no distinct semantic information under the declared representation contract. That proof does not transfer to a future payload/domain/contract change.**

Current Universal Creation `main` is:

`9609998db6677391766e9ee7ff53a5b9b08a3cb9`

Open UC PR #204 is the continuing bounded Physics lane. Open PR #151 remains the animated-island-boat asset/material lane and #153 remains the bounded offline unwrap/bake lane. None owns a generic representation-capacity compactor or overlaps this evidence/provenance map.

The shared execution registry still contains only closed/merged implementation records for UC #192 and #199. There is **no active shared-capability execution claim** covering this scope.

## Selected material cross-repo learning

### Evidence A — Building Runtime: unused alpha capacity can be elided only while opacity is exact

Repository:

`mike-axiom-mir/axm-map-design`

Existing Runtime PR:

`#52 — Runtime: elide opaque utility-panel alpha channel`

Exact current head:

`1afa51cb89b536db0d2434328722a1521febe0ad`

PR state:

`OPEN / DRAFT / UNMERGED / MERGEABLE`

The exact owner-bound texture is `512 × 512`. Runtime proves:

- exact owner PNG retained;
- exact RGB samples retained;
- all `262,144 / 262,144` alpha samples equal `255`;
- receiving representation alone changes `RGBA8 -> RGB8`;
- full-mip payload changes `1,398,100 B -> 1,048,575 B`;
- exact saving is `349,525 B / 25%` for this texture representation.

Dedicated workflow:

`35301057478 — Runtime Building utility-panel RGB8 alpha elision` — **SUCCESS**.

Real Godot current-world evidence across all `68` retained observations:

- scene texture memory `15,671,915 B -> 15,322,390 B` at every observation;
- exact scene saving `349,525 B` at every observation;
- buffer-memory delta `0 B`;
- draw calls unchanged;
- objects-in-frame unchanged;
- primitives-in-frame unchanged;
- `68 / 68` RGBA8/RGB8 frame pairs byte-identical;
- total changed pixels `0`;
- maximum channel delta `0 LSB`.

The decisive negative is semantic rather than visual: mutate one alpha sample to `254` and the representation rule rejects with:

`RGB8_ALPHA_PRECONDITION_REJECTED_NON_OPAQUE_TEXTURE`

So the correct rule is **not** `utility-panel textures are RGB`. It is: the exact current alpha channel carries no varying semantic information and can therefore be elided in this receiver representation. A future source with meaningful alpha must retain an alpha-capable representation.

## Evidence B — Animal Runtime / Technical Art: numeric width is capacity, decoded joint indices are semantics

Repository:

`mike-axiom-mir/axm-animal-design`

Existing Runtime PR:

`#26 — Runtime: compact Animal glTF joint indices to byte width`

Original exact measured Runtime head:

`3b9bcbc6b038e0b6782987134b567350274aacfd`

The exact control stores:

- `JOINTS_0 = UNSIGNED_SHORT VEC4`;
- maximum stored joint index `1`;
- JOINTS payload `672 B`;
- complete GLB `11,148 B`.

Runtime proves the exact semantic domain is only `0..1`, then narrows storage to:

- `JOINTS_0 = UNSIGNED_BYTE VEC4`;
- decoded joint rows exact and unchanged;
- every non-JOINTS accessor payload hash unchanged;
- JOINTS payload `336 B` (`-336 B / -50%`);
- complete GLB `10,812 B` (`-336 B / -3.0139935%`).

Dedicated Runtime workflow:

`35168507611 — Runtime Animal joint-index width budget evidence` — **SUCCESS**.

Real Godot evidence retains:

- maximum control/candidate pose-receipt delta `0.0`;
- triangle count `80` unchanged;
- material bindings identical;
- `2 / 2` fixed peak-pose frame pairs byte-identical;
- `2 / 2` coverage pairs byte-identical;
- changed pixels `0`.

The current producer-side follow-on is equally important. Technical Art exact head:

`1ca28d29c7e1aaa095c11aaa6085716669230cb3`

adopts the bounded rule:

`smallest legal glTF unsigned component from exact emitted JOINTS_0 domain`

with explicit out-of-domain behavior:

- value above byte range -> fall back to `UNSIGNED_SHORT`;
- value above glTF unsigned-short domain -> reject.

Thus a green u8 result for one asset is not evidence that u8 is the semantic type of joints. The semantic information is the exact joint-index domain; storage width is conditional capacity.

## Evidence C — Character Technical Art: duplicate storage can disappear only under exact semantic + byte identity

Repository:

`mike-axiom-mir/axm-character-design`

Existing Technical Art PR:

`#21 — Technical Art: prove review006 skin transport and target-host frame bridge`

Exact current Technical Art head:

`a8e2759e72e15a63e50f2cddecf1b407bbfd4224`

The bounded exporter shares two animation output accessors only when:

- accessor semantics match exactly;
- encoded payload bytes match exactly;
- representation is non-sparse, tightly packed and unstrided;
- the removable accessor/view/payload is the supported final bounded region.

Exact result:

- control GLB `44,032 B`;
- candidate GLB `40,064 B`;
- file saving `3,968 B / 9.011627906976743%`;
- duplicate binary payload removed `3,852 B`;
- accessors / bufferViews `13 -> 12`.

Current UC receives both representations with exact semantic equality over all `321` source samples. Real Godot 4.7.2 legitimately resamples the source animation to `61` imported keys per track, so Technical Art compares at the original `321` source times and retains:

- imported animation key time delta `0.0`;
- imported animation key value component delta `0.0`;
- imported POSITION delta `0.0`;
- imported NORMAL delta `0.0`;
- index mismatches `0 / 1080`;
- imported skeleton pose position/rotation/scale deltas all `0.0`.

A verifier-only one-byte mismatch in the duplicate animation payload is rejected before sharing.

Again the reusable fact is not `duplicate animation outputs should be deduplicated`. It is: exact semantic identity plus exact supported representation identity proves that **this** stored duplicate carries no additional information.

## Cross-repo capability map

The shared evidence shape is:

`semantic_payload_identity`

+ `reference_representation_identity`

+ `capacity_precondition_identity`

→ exact `precondition_evidence_identity`

→ `candidate_representation_identity`

→ bounded `semantic_equivalence_scope`

→ explicit `out_of_domain_behavior`

→ independent producer / Runtime / Art / QA / device / adoption state.

Suggested evidence-only fields:

- `semantic_payload_identity` — exact source/producer payload or decoded semantic domain represented;
- `reference_representation_identity` — exact wider/current storage representation;
- `candidate_representation_identity` — exact narrowed/elided/shared-storage alternative;
- `capacity_elision_kind = UNUSED_CHANNEL | NARROWER_VALUE_DOMAIN | EXACT_DUPLICATE_STORAGE | OTHER_EXPLICIT`;
- `capacity_precondition_identity` — executable condition that must hold for this exact candidate;
- `precondition_evidence_identity` — exact head/workflow/artifact/receipt proving the condition;
- `semantic_equivalence_scope` — decoded rows, receiver poses, retained pixels or another explicitly named scope rather than one generic `equivalent=true`;
- `out_of_domain_behavior = FALLBACK_WIDER | REJECT | NOT_SUPPORTED`;
- `invalidation_trigger` — exact source/payload/domain/representation-contract changes that require fresh proof;
- `adoption_state` kept separate from the evidence result.

Core non-transfer rule:

**Today's unused representation capacity must not become tomorrow's silently unavailable semantic channel.**

## Placement action — Profession Fabric #38

Refined the existing experimental Profession Fabric evidence/provenance proposal with comment:

`5724496720`

The refinement adds conditional representation-capacity evidence beneath the existing representation-set / dependency / claim vocabulary. It deliberately does **not** create one optimizer, one storage policy or one adoption rule.

This is the correct current home because the repeat is the **evidence discipline that proves when a narrower representation remains semantically faithful and when that proof expires**. The executable operations themselves are materially different and remain with their owning product specialists:

- Building/Map Runtime owns alpha-channel elision and proof-host memory measurement;
- Animal Runtime + Technical Art own JOINTS width measurement/adoption;
- Character Technical Art owns exact accessor sharing at its exporter boundary.

No PF code was implemented and no profession was promoted.

## Why no Universal Creation lane was opened

The repeat does not yet expose one neutral executable transform:

- RGBA8 -> RGB8 removes a provably constant image channel;
- u16 -> u8 narrows an exact integer value domain with legal fallback;
- duplicate animation accessor sharing removes exact duplicate storage under a format/layout contract.

UC already has narrower representation capabilities where the repeated **machine operation** itself is evidenced, such as attribute-aware mesh representation observation and bounded rigged-glTF receiver semantics. Those do not justify a generic cross-format `make smaller` engine.

Current UC `main` `9609998...` and open PR #204/#151/#153 are unrelated to this proposed evidence vocabulary. Opening a generic UC compactor now would conflate three format-specific mechanisms and outrun the evidence.

## Product returns

Evidence-only returns were placed without changing product code:

- Profession Fabric #38 comment `5724496720`;
- Map Runtime PR #52 comment `5724497604`;
- Animal Runtime PR #26 comment `5724498398`;
- Character Technical Art PR #21 comment `5724499192`.

Each return preserves the exact local executable rule and authority while recording only the cross-domain evidence distinction.

## Bounded placement table

| Layer | Correct home | Current evidence | Explicitly not implied |
|---|---|---|---|
| opaque-alpha receiver transform | Map Runtime PR #52 | exact all-opaque precondition + RGB8 current-world A/B | generic RGB8 material policy, future alpha safety, device acceptance |
| JOINTS numeric-width policy | Animal Runtime / Technical Art PR #26 lineage | exact `0..1` domain + u8 equality + fallback/reject behavior | u8 semantic joint type, arbitrary glTF compaction, target-device acceptance |
| exact animation accessor sharing | Character Technical Art PR #21 | exact semantic/byte duplicate + current UC/Godot equality | arbitrary deduplication, sparse/interleaved generality, Runtime adoption |
| conditional representation-capacity evidence vocabulary | Profession Fabric #38 experimental proposal | comment `5724496720` | generic compactor, auto-selection, domain policy or acceptance |
| generic shared machine implementation | Universal Creation only after one neutral executable transform repeats | **not evidenced this pass** | cross-format optimization-by-analogy |
| shared execution collision state | `axm-create-me` coordination registry | no active overlapping claim | ownership or merge priority |

## Explicit non-claims

This activation does **not** establish:

- a generic RGB8 texture policy;
- a generic smallest-width glTF optimizer;
- a generic binary/accessor deduplicator;
- arbitrary format-preserving compression;
- target-device CPU/GPU/FPS/VRAM/thermal improvement;
- Environment/Materials/Technical-Art adoption of the Building Runtime candidate;
- Art Direction or independent Visual QA acceptance beyond the exact retained evidence already owned by each lane;
- a new UC implementation;
- a PF implementation or profession promotion;
- automatic representation selection or migration;
- CANON;
- production/game readiness;
- mastery;
- merge-authority transfer.

`axm-create-me` remains coordination-only.

## Four-root gate

**Truth:** the map distinguishes semantic information from spare storage capacity and requires exact precondition evidence before any narrowing/elision claim. The retained negative controls remain first-class evidence rather than being hidden behind successful size reductions.

**Agency / non-domination:** Runtime and Technical Art retain their local representation/adoption authority; Art/QA/device owners keep acceptance; PF receives evidence vocabulary only; UC is not expanded merely because three different optimizations all make files/memory smaller.

**Continuity:** the prior Cartography blob, exact product heads, wider reference representations, candidate identities, workflows/artifacts, fallback/rejection rules and historical receipts remain separately addressable. A future source/domain change invalidates only the claims that actually consume the old precondition.

**Wisdom before speed:** the shared lesson is extracted now because three materially different domains repeat the evidence shape, but a generic machine implementation is intentionally withheld because the executable transforms are still different.

The four AXM roots remain the gate.

## Recovery / provenance

Previous Cartography state:

`PASS_ELIGIBILITY_VS_MEASURED_OUTCOME_IDENTITY_MAP`

Previous status blob SHA:

`626bc0a1deeab6da935919960d2a7f994043c1f0`

Current Cartography returns:

- PF #38 comment `5724496720`;
- Map Runtime PR #52 comment `5724497604`;
- Animal Runtime PR #26 comment `5724498398`;
- Character Technical Art PR #21 comment `5724499192`.
