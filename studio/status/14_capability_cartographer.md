# Capability Cartographer Status

- Scan started: `2026-09-17T07:55:41Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_STORAGE_REPRESENTATION_IDENTITY_MAP / OBJECT RUNTIME #29 ADDS TEXTURE-ENVELOPE COMPACTION CASE / BUILDING INDEX STORAGE + ANIMAL WEIGHT WIDTH REPEAT SEMANTIC-VS-STORAGE SEPARATION / PF #38 REFINED WITH LOGICAL PAYLOAD + STORAGE IDENTITY + DECODE-ADDRESS MAPPING / GENERIC UC COMPACTOR HELD / OBJECT #29 REMAINS PRODUCT RUNTIME LANE / NO PRODUCT OR FRAMEWORK IMPLEMENTATION MOVE`

## Selected material cross-repo learning

Fresh Object Runtime evidence closes a third materially different storage-compaction class and exposes a reusable representation rule:

> **A logical / semantic payload identity and its exact storage representation identity are separate evidence identities. A compact storage realization can preserve producer-owned meaning/layout while still requiring its own decode/address mapping, runtime observation, visual obligation, transport obligation and adoption decision. Memory reduction does not imply visual neutrality or product adoption.**

This is now repeated across texture allocation, indexed mesh storage and numeric accessor width. The shared capability is therefore **identity/provenance discipline**, not one generic compaction algorithm.

## Fresh Object case — exact texture payload, smaller storage envelope

Repository / lane:

- `mike-axiom-mir/axm-object-design` Runtime PR #29 — `Runtime: right-size service-dark atlas height after padded pack`.

Exact Runtime head:

`ce23d5edeb0766201cfbaff646dda31544cd8f9c`

Exact upstream Materials head:

`4c12a0a57f6aa8778cff41efad321e13567c6c91`

The candidate preserves the exact Materials-owned surface content/layout contract:

- `500 px/m` / `0.002 m/px`;
- `16 px` dilation;
- lid-inner rect `[16,16,390,240]`;
- front-service rect `[16,288,234,78]`;
- exact surface pixel extents;
- diagnostic texels inside those rectangles;
- material scalars;
- source geometry and source surface identities.

Only the receiving texture envelope changes:

- control: `512 x 512`;
- candidate: `512 x 384`;
- maximum required padded extent: `422 x 382`;
- candidate spare extent: `90 x 2`.

Exact-head dedicated workflow:

`35197016046 — SUCCESS`

Retained artifact:

- artifact ID: `10486920335`;
- size: `1,056,605 B`;
- SHA-256: `793b9c65caae936af85bb1a2c95f7d1187e6ae44b6c386aa0ea663e47d451def`.

Retained comparison result:

`PASS_OBJECT_SERVICE_DARK_ATLAS_HEIGHT_RIGHTSIZE_REDUCES_PROOF_HOST_TEXTURE_MEMORY__HOLD_ART_QA_AND_TARGET_DEVICE`

Observed / modeled bounded facts:

- RGBA8 mip-chain: `1,398,100 B -> 1,048,572 B`;
- saved: `349,528 B` / approximately `25%`;
- real Godot 4.7.2 texture-memory delta: `-349,528 B` in each of four matched observations;
- real video-memory delta: `-349,528 B` in each matched observation;
- buffer-memory delta: `0`;
- draw calls: unchanged per matched pair;
- rendered objects: unchanged per matched pair;
- rendered primitives: unchanged per matched pair;
- four retained image pairs: `33` changed pixels total;
- pixels above `1 LSB`: `0`;
- maximum channel delta: `1 LSB`.

The important Cartography fact is not the 25% saving by itself. The intended surface texel payload remains pinned, yet texture dimensions and normalized receiving address space change. That is a new exact storage representation, not merely incidental metadata on an otherwise identical representation.

Art/QA, Technical-Art transport, target-device cost, final atlas policy and adoption remain independent obligations.

## Building / Map repeat — indexed consumer storage is not source intent

Repository / lane:

- `mike-axiom-mir/axm-map-design` Technical Art PR #40.

Merged UC observer lineage remains valid through merged indexing PR #179, while current UC main has since advanced through unrelated Physics work.

The real Godot Building receiver proves a storage realization of:

- `1,008` input triangle corners;
- `312` stored/index groups;
- `1,008` indices;
- `336` logical triangles;
- five material surfaces;
- exact decoded POSITION corner stream;
- exact grouping isomorphism under bijective relabeling.

But Building Hard Surface independently owns a distinct `604`-group source-intent equivalence domain. The `312` consumer storage groups therefore cannot silently become source equivalence.

The receiver also retains a real storage/transport difference:

- decoded NORMAL differs at `120 / 1,008` corners;
- maximum component delta `0.00011304020881702792`;
- maximum angular delta `0.006869404718583788°`.

Thus storage grouping/POSITION success does not automatically discharge NORMAL byte-exactness, arbitrary transport or source-intent obligations.

## Animal repeat — numeric encoding is another storage identity axis

Repository / lane:

- `mike-axiom-mir/axm-animal-design` Runtime PR #27.

The exact retained normalized-u16 candidate preserves mesh/animation/joint structure and every non-`WEIGHTS_0` accessor payload hash while changing only the weight storage encoding:

- FLOAT32 VEC4 `WEIGHTS_0`: `1,344 B`;
- normalized-u16 VEC4 `WEIGHTS_0`: `672 B`;
- accessor saving: `672 B / 50%`;
- complete GLB: `10,948 B -> 10,296 B` (`-652 B / -5.9554%`).

Merged UC now accepts the exact retained candidate, Rigging bounds all-key skinned POSITION drift to `1.4897262690003554e-07 m`, and Animation has extended that bounded comparison between authored keys without changing the source motion.

Yet the real Godot Runtime comparison still retains `224` changed pixels at maximum `1 LSB`, producer adoption remains separate, and the deformed NORMAL/TANGENT direction-frame HOLD is untouched.

Again, storage encoding eligibility closes only the obligations actually re-proved.

## Placement decision

The correct reusable home for this learning is the existing **Profession Fabric issue #38 experimental evidence/provenance procedure**, not a new product implementation and not a generic UC compactor.

PF #38 refinement added this pass:

`5711025880`

The proposal keeps the existing typed dependency DAG, representation-set and scoped-obligation model, and adds a distinct storage identity axis.

Suggested evidence-only concepts:

- `logical_payload_identity` / `semantic_representation_id`;
- `storage_representation_id`;
- domain-owned `storage_fields_changed` and `storage_fields_preserved`;
- `decode_or_address_mapping_identity`;
- exact `storage_delta` where measurable;
- producer-owned `semantic_invariants`;
- obligation-specific transport/decode, runtime-cost, visual/behavioral and adoption evidence.

Required behavior:

1. matching semantic/source intent does not automatically transfer storage-specific claims;
2. smaller storage does not imply visual neutrality, arbitrary transport equivalence, target-device benefit or adoption;
3. historical storage identities and receipts remain truthful for their exact revisions;
4. changed decode/address mapping is part of the consumed identity and must be rebound where relevant;
5. PF describes evidence only and does not choose component widths, crop textures, weld vertices, reindex meshes, pack atlases or optimize products.

## Why no UC structure move was justified

Current UC main at scan time:

`6ad6ad51e6f40a3dc1d0cccd3af7f7c7ab28fb33`

That main directly descends from merged indexing main `2295495cccf60c1fbd541b20215d17ac18e32821` through unrelated Physics PR #177. The current open UC PR #180 is the successor Physics growth lane, also unrelated to texture or representation compaction.

A targeted UC search found no existing AXM texture-envelope right-sizing / storage-envelope observer. The generic `KTX2Loader` contains ordinary texture-format memory tradeoff logic, but that is not an AXM storage-rightsizing contract and does not justify extracting Object policy into UC.

Most importantly, the three repeated product mechanisms are materially heterogeneous:

- Object: shrink a texture allocation envelope while remapping normalized addressing;
- Building/Map: index consumer vertex storage under protected attribute grouping;
- Animal: narrow numeric accessor component width with semantic decode.

That repetition supports a shared **representation identity/evidence rule**, but not one generic mutation API. No UC issue/PR was opened.

The next UC trigger should be mechanism-level repetition with a precise neutral contract, not merely the fact that multiple products can save memory.

## Return to active product lane

Object Runtime PR #29 received Cartography return comment:

`5711028336`

The return keeps the exact implementation local, records the storage-identity learning, and preserves the current HOLDs. No automatic Materials adoption, Art/QA upgrade, target-device claim or UC extraction was requested.

## Fresh non-selected signals preserved without duplication

### Environment receiving transform truth repair

Map Environment PR #24 now proves the exact Building `604` source-intent indexed receiver in the retained current world. Its first mechanically green run was rejected because source-local vertices were rendered in the wrong receiving placement. The final proof binds the exact source-to-Godot placement and world-space envelope before accepting the scene evidence.

This is a strong separate mapping/receiving lesson, but it already has an active Environment owner and does not need a competing Cartography framework this pass.

### Procedural atlas layout remains owner-bounded

Object Procedural PR #11 now deterministically derives the same two Materials-declared atlas rectangles, padded envelopes and normalized atlas coordinates across two different source-local face bases. It explicitly forbids automatic packing/search/fallback and does not choose production UVs.

That upstream bounded layout is exactly why Runtime #29 can ask the narrower storage-envelope question without Procedural or Runtime taking Materials authority. No generic atlas packer was opened.

### VFX timing reconstruction remains observation-owned

Map VFX PR #35 has already separated clean timing receipts from intrusive visual capture and is now pursuing telemetry-bound reconstruction from untimed exact source-state images. That remains within the existing observer-instrumentation provenance model from earlier Cartography passes; no duplicate temporal vocabulary is added here.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178 / merged PR #179** — read-only attribute-aware indexed-surface eligibility observation including explicit cross-source attribute/protected-split grouping; no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity in neutral UC receiver machinery; producer quantization/adoption remains separate.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG; migration state vs bounded claim verdict; changed/preserved/derived dependencies; parallel representation sets; temporal provenance + observer instrumentation; harness execution vs claim/control verdict; scoped obligations + applicability-domain coverage; and now **logical/semantic payload identity separated from exact storage representation + decode/address mapping identity**.

## Explicit non-claims

- No Object source geometry, surface identity, Materials atlas contract, Procedural atlas layout, production UV, production texture or material scalar was changed by Cartography.
- No Object Runtime #29 code or evidence was rewritten by Cartography; only a return/placement comment was added.
- No Building/Map indexing, source-intent grouping, Godot normal policy, transport tolerance or Environment representation selection was changed.
- No Animal GLB bytes, quantizer, rig, motion, producer adoption or visual acceptance was changed.
- No UC texture compactor, cropper, optimizer or new shared machinery was added; no duplicate UC lane was opened.
- No PF implementation was added. Issue #38 remains an experimental evidence/provenance proposal, not product authority.
- No storage saving is generalized into visual equivalence, target-device benefit or adoption.
- No historical evidence was relabelled or erased by a compact successor.
- No Art/QA acceptance, target-device performance, CANON, production-readiness or merge authority is claimed.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch for a **second independent texture-envelope / storage-rightsizing mechanism** before considering any neutral UC texture observer or transformer.
- Watch PF #38 only for a domain-agnostic experimental implementation that can represent storage identity without hardcoding Object/Building/Animal semantics.
- Watch Object #29 for Art Direction / Visual QA and target-device Runtime returns; do not infer adoption from proof-host memory reduction.
- Watch receiving mappings/coordinate transforms for a second material cross-domain case before extracting another PF identity axis.
- Keep UC shared machinery growth tied to precise repeated mechanisms, not to broad “optimization” similarity.

## Recovery / provenance

Previous Cartography coordination commit: `dd8c8db3e535893b6ed905fac490d43ac1c1ec27`.
Previous status blob SHA before this update: `57aa15665b583e1c57bee09a091123b24120c1b4`.