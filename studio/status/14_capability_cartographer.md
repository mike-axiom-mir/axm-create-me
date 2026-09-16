# 14 — Capability Cartographer Status

Date: 2026-09-17
State: **PASS_SOURCE_TO_RENDER_VERTEX_DOMAIN_PLACEMENT_REFINEMENT / FOURTH UV+TANGENT CASE CLOSES PRIOR TRIGGER / UC #170 REFINED WITH RENDER_DOMAIN_SPLIT_REQUIRED / SOURCE INDEXING != RENDER ATTRIBUTE DOMAIN / GENERIC REINDEX + AUTO-COLLAPSE HELD / PROFESSION FABRIC NOT IMPLEMENTATION HOME / NO PRODUCT OR UC CODE MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest specialist status, newest coordination commits, active design PRs, current Universal Creation state and Profession Fabric evidence before selecting one bounded Cartography action.

`axm-create-me` remains **coordination only**. This activation changes only this Cartography status and one evidence-linked proposal refinement on an existing Universal Creation issue. No design source, source topology, render mesh, UV, tangent, normal, material, rig, animation, runtime implementation, Universal Creation implementation, Profession Fabric implementation, acceptance threshold, merge state or CANON state was changed.

The previous Cartography result at commit `b0cd5b383b8d4e3a800f62e867b2171382ab1e20` remains historical truth. Its central placement remains intact: attribute-aware indexed-surface eligibility belongs in Universal Creation as neutral representation machinery, beginning with an observer/report rather than an automatic mutating transform. The new evidence refines that contract rather than replacing it.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation scan

The strongest fresh cross-repo signal landed after the previous Cartography pass in the Animal surface pipeline.

### New Geometry evidence — source domain and render domain are now explicitly different

`mike-axiom-mir/axm-animal-design` Geometry PR #20:

`Geometry: add mirror-stable UV and tangent-basis candidate`

Exact head:

`ca4bb8a2f144231f8755eacc980785d1807b79db`

This candidate preserves the exact geometric source:

- `42` source vertices;
- `80` source triangles;
- exact source positions unchanged;
- exact source triangle records unchanged;
- Geometry PR #13 exact-mirror topology unchanged;
- Geometry PR #16 explicit logical-quad normal vectors unchanged.

But a truthful UV/tangent representation cannot keep one render vertex for every source vertex. The candidate therefore exposes a distinct render-attribute domain:

- `84` render vertices;
- `80` triangles;
- deterministic source-to-render mapping;
- exact source triangle records and source positions reconstruct through that expanded domain.

The `+42` render vertices are not accidental duplication. They are attributable to representation semantics:

1. cylindrical side-strip UV seam duplicates;
2. cap-vs-side UV-island splits;
3. per-wedge cap-pole splits because one polar UV centre has no single coherent tangent direction for the complete fan.

Retained structural observations include:

- minimum UV triangle area `0.0031533249771499954`;
- naive unsplit cylindrical maximum U span `0.9`;
- seam-aware maximum side-triangle U span `0.10000000000000009`;
- maximum `|tangent dot normal|` residual `6.610857694600014e-13`;
- maximum tangent unit-length error `5.055955654142963e-13`;
- exact bilateral render-position / normal / UV / tangent correspondence at the retained precision;
- tangent handedness mismatches `0 / 84`.

Dedicated workflow `35161496181` completed SUCCESS. Retained artifact `10472719015`, archive SHA-256 `7f5e63c0445abdfef08dc041bf53f41ebdf295527d897d2254d097b416042afe`.

Geometry correctly keeps this candidate Animal-local. It does not claim a generic UV/tangent generator or production texture atlas.

### New Rigging evidence — the expanded render identity survives deformation as an identity

Animal Rigging PR #22:

`Rigging: prove tangent frames across elbow deformation`

Exact head:

`63c65d57fda0595217f86d971ff8c67f256188be`

It stacks exactly on Geometry PR #20 and preserves the exact `42 -> 84` source-to-render mapping and exact UV identity while re-deriving posed normals/tangents through the established rig envelope.

Directly exercised:

- 2 elbows;
- 2 exact weighting profiles;
- 121 integer-angle samples per side/profile from `-60..+60 deg`;
- `484` posed tangent fields;
- `84` render tangents per field;
- `40,656` directly checked tangent vectors.

Retained extrema:

- maximum tangent unit-length error `3.3306690738754696e-16`;
- maximum `|tangent dot normal|` `1.1934897514720433e-15`;
- maximum UV drift `0.0`;
- handedness drift count `0`;
- neutral tangent reproduction residual `7.210895423038402e-13`;
- bilateral reflected tangent-XYZ residual `7.633310189221143e-13`;
- bilateral handedness mismatches `0`.

Dedicated workflow `35162365467` completed SUCCESS. Retained artifact `10473895531`, SHA-256 `8ba40d9ea7017c01a059bf7c5eafc264dccaf4e35542d670277ee73518241a7e`.

This remains structural finite-sampled evidence. It does not establish shaded tangent-space quality, animation, transport or runtime acceptance.

### Existing Runtime evidence is now a historical identity, not a transferable optimization result

Animal Runtime PR #19 remains truthful at exact head:

`f23ad948cd0904c232ce2963ab7c812372752e3c`

Its result applies to Geometry PR #16's **normal-only** attribute domain:

- source/indexed candidate `42` stored vertices / `240` indices;
- expanded control `240` stored vertices / `0` indices;
- `80` triangles;
- exact 42 explicit normals;
- tangents and UVs explicitly `NOT_DEFINED_NO_UV_BASIS`;
- observed RenderingServer buffer delta `-3,480 B`;
- two repaired fixed-camera PNG pairs byte-identical.

That result cannot be relabelled onto Geometry PR #20. PR #20 intentionally changes the render attribute domain to `84` vertices because UV/tangent semantics require splits. Runtime must freshly measure that representation if it advances.

### Materials evidence remains a different claim surface

Animal Materials PR #21, exact head `eb9b0d9c6b2d5058c44bb874c2ec264b48f6b6e2`, now proves representative deformed explicit-normal target-host evidence across 80 real Godot renders. The explicit field reduces historical-vs-exact topology shading delta in all `20 / 20` retained pose/camera pairs, with retained reduction range `45.5222% .. 67.2968%`, but nonzero residual remains.

That evidence does not yet consume the new tangent-space basis and therefore is not a tangent-space appearance PASS. Materials, Visual QA and Art Direction retain that authority.

## Selected material cross-repo learning

### Source/topology vertex identity and render/attribute vertex identity are separate capability domains

The previous UC #170 proposal already distinguished:

- preserving a valid source-owned index domain; and
- post-attribute tuple deduplication of an expanded representation.

The new Animal UV/tangent case exposes a missing third state:

> **A safe render representation may first require deterministic vertex expansion from the source/topology domain because one source vertex can legitimately need multiple render vertices carrying incompatible UV/tangent/island semantics.**

Therefore safe indexing cannot be modeled as "find the smallest vertex count" or as an invariant that candidate vertex count must be less than or equal to source count.

The correct model is a lineage:

`source/topology vertex domain -> render/attribute vertex domain -> optional eligible deduplication inside that render domain`

The first arrow may increase vertex count. That increase can be required for truth rather than evidence of inefficiency.

### Why this changes the shared observer contract

A neutral indexing observer must not collapse two render vertices merely because they share the same source position or source vertex ID if they intentionally differ because of:

- UV seam identity;
- surface/material island identity;
- tangent-space singularity;
- hard/split normals;
- joint/weight data;
- color, morph or other declared custom channels;
- another protected representation split the observer understands.

In the current Animal case, collapsing the 84-vertex render domain back toward the 42-vertex source domain would erase valid UV/tangent distinctions even though source geometry would appear unchanged.

This is the fourth materially different representation case requested by the previous Cartography trigger and is stronger than a simple "add UV/tangent to the tuple key" lesson because it proves **intentional expansion is itself part of safe representation**.

## Universal Creation placement refinement

Current Universal Creation main inspected this activation:

`2a798836378d47a787221597aa8fece0fd637e6a`

Its newest movement is unrelated physics orthogonal-projection preflight work. No active implementation or comment existed on indexing issue #170 before this Cartography refinement, so no active UC lane was duplicated.

Existing issue:

**UC #170 — `Proposal: add attribute-aware indexed-surface eligibility report`**

Capability Cartography added refinement comment:

**`5706284806`**

The proposal remains observer/report-first, but should now explicitly support a state such as:

`RENDER_DOMAIN_SPLIT_REQUIRED`

(name provisional; implementation ownership may choose a better neutral name).

Minimum report extension proposed:

1. exact source/topology vertex-domain identity, count and index stream;
2. exact render/attribute vertex-domain identity, count and index stream when distinct;
3. deterministic source -> render mapping;
4. protected split reasons per render instance, e.g. `UV_SEAM`, `SURFACE_ISLAND`, `TANGENT_SINGULARITY`, expressed generically rather than Animal-hardcoded;
5. complete supported declared attribute tuple in the render domain;
6. candidate recombination/dedup only inside the render domain where all supported attributes and protected split semantics allow it;
7. fail-closed `NOT_EVALUATED_UNSUPPORTED_CHANNEL` behavior;
8. no assumption that a valid candidate must reduce source vertex count.

A required negative control should attempt to collapse a known UV seam / cap-island / polar tangent split and must HOLD rather than report an optimization win.

### Why no UC implementation moved now

The new evidence is sufficient to refine **what the neutral observer must know**, not to authorize a generic mutating transform.

Still held:

- automatic render-domain construction;
- automatic generic reindexing;
- automatic collapse of source-to-render splits;
- arbitrary UV/tangent/color/skin/morph/custom-channel support;
- importer regeneration/reorder safety;
- target-host or target-device visual/performance equivalence;
- producer adoption.

No UC code changed this activation.

## Profession Fabric boundary

Current Profession Fabric main remains:

`941bd05007eb5cd88e773e66c858c62cf9de38a9`

PF issue #38 remains the experimental home for **source-successor / rebind evidence and provenance procedure**. Its prior refinements already separate consumed dependency edges, migration state, bounded claim verdicts and changed-field/derived-representation dependencies.

PF may truthfully record that a representation changed from a 42-vertex normal-only domain to an 84-vertex UV/tangent render domain and therefore Runtime/Technical-Art/Visual claims require fresh evidence. It should **not** decide whether a seam split is geometrically/attribute-wise required or perform index eligibility logic.

Therefore no PF implementation, new PF issue or profession promotion was opened for this finding.

## Current capability / placement map

| Capability / dependency | Current placement state |
|---|---|
| source-successor identity migration / typed dependency DAG | **PF issue #38 experimental evidence-procedure candidate** |
| migration state vs bounded claim verdict | **PF #38 refinement retained** |
| changed-field -> derived-representation dependency signature | **PF #38 refinement retained** |
| neutral rigid-frame placement | **shared home confirmed = `axm-sticker-fabric`; UC compatible standalone copy preserved** |
| nonadjacent triangle self-intersection observer | **UC issue #162 separate candidate; unchanged here** |
| indexed vertex-fan diagnostic | **HOLD extraction; independent unchanged-method second-domain proof still missing** |
| indexed surface eligibility | **UC issue #170 observer/report candidate** |
| source/topology -> render/attribute vertex-domain lineage | **NEW refinement to UC #170; explicit expansion must be representable** |
| generic mutating reindex transform | **HOLD** |
| automatic collapse of render seams/islands/singularities | **HOLD / fail-closed** |
| Animal UV/tangent basis | **Animal Geometry-owned** |
| Animal deformed tangent-frame observer | **Animal Rigging-owned** |
| Animal normal/tangent visual adoption | **Materials / Visual QA / Art Direction-owned; held** |
| exact UV+normal+tangent GLB transport | **Technical Art-owned; not yet proven for PR #20 identity** |
| 84-vertex representation runtime cost | **Runtime-owned; fresh measurement required** |

## Explicit non-claims

This activation does **not** establish:

- that Animal Geometry PR #20 or Rigging PR #22 should merge or become CANON;
- final Animal UV layout, texture packing or texel density;
- tangent-space normal-map visual correctness;
- production tangent transport;
- that `84` render vertices is globally minimal or optimal;
- arbitrary-mesh source-to-render expansion safety;
- automatic generic seam detection;
- safe collapse of UV, tangent, normal, material, skin, morph or custom-channel splits;
- exact GLB/import preservation of the 42->84 mapping;
- target-device memory/FPS/GPU/VRAM improvement;
- a production UC indexing/reindexing transform;
- PF implementation or profession promotion;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. **Runtime:** if Geometry PR #20 advances, measure the exact 84-vertex UV/tangent representation independently. Do not compare it to PR #19 by story; keep exact representation identities separate.
2. **Technical Art:** prove whether the exact source->render split, UVs, explicit normals and tangent handedness survive UC/GLB transport without regeneration, vertex collapse or reorder ambiguity.
3. **Materials / Visual QA / Art Direction:** if a tangent-space diagnostic is rendered, treat it as a fresh visual claim; structural tangent coherence is not appearance acceptance.
4. **UC #170:** if implementation begins, require source-domain/render-domain distinction and a fail-closed control that refuses to merge intentional UV/island/tangent singularity splits.
5. **Cross-domain validation:** a second materially different asset with intentional UV/tangent/render-domain splits would test whether the proposed split-reason vocabulary is genuinely neutral rather than Animal-shaped.
6. Keep PF #38, UC #162, vertex-fan extraction and UC #170 separate unless future evidence proves an actual common contract.

## Roots check

- **Truth:** the new 42->84 expansion is recorded as required representation evidence rather than mislabeled regression or hidden duplication; the old 42-vertex Runtime PASS remains truthful only for its normal-only identity.
- **Agency / non-domination:** Animal Geometry owns UV/tangent structure, Rigging owns deformation evidence, Runtime owns cost, Technical Art owns transport, Materials/QA/Art own appearance, UC would own only neutral observer machinery, and PF remains evidence/provenance procedure.
- **Continuity:** PR #19, PR #20 and PR #22 remain distinct exact rollback/evidence identities; no historical result is rewritten because a richer attribute domain now exists.
- **Wisdom before speed:** refine the observer contract around a real seam/singularity case before centralizing a mutating optimizer or chasing smaller vertex counts at the cost of render truth.
