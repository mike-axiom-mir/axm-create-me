# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_BILATERAL_UV_TANGENT_BASIS_CANDIDATE / SOURCE SURFACE + EXACT-MIRROR NORMALS PRESERVED / 42→84 RENDER-VERTEX SPLIT EXPLICIT / FINAL UV + TANGENT-SPACE VISUAL + DEFORMED TANGENT + TRANSPORT + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the current Geometry status, the newest specialist evidence, and the active design constellation before changing product evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation for this activation stays in `mike-axiom-mir/axm-animal-design`; this file records exact scope, evidence, limitations and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

This current-status file is intentionally compacted around the newest bounded result. The previous detailed Geometry status remains rollbackable in git history at content blob `2b08bb57b45185a08825bb6d5fe95cc48bf2446c`; no prior product evidence is relabelled or erased by this coordination update.

## Fresh constellation / duplication scan

The strongest fresh Geometry-owned dependency was the **Animal UV/tangent-basis hold** left explicitly open by Geometry PR #16, not another source-form or topology rewrite.

Current dependency chain inspected before implementation:

- **Animal Geometry PR #13** remains the exact-mirror surface-topology prerequisite at `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`. It changes only right longitudinal triangle correspondence and preserves source positions.
- **Animal Geometry PR #16** remains the explicit logical-quad smooth-normal prerequisite at `79e1667f6cc91e2ec8e41f01df18b6933c9c876d`. It deliberately held tangents as `NOT_DEFINED_NO_UV_BASIS` rather than fabricating a frame.
- **Animal Materials PR #17** at `a2cd0a6135a7c8502aef9572f7079a3dd2632103` rendered the explicit normal candidate in the bounded target-host contexts; Art Direction now prefers the explicit normal field there and explicitly does not request a topology rollback, source-position change or more static normal search merely to chase pixel identity.
- **Animal Rigging PR #18** at `91e2fd01be63df807c035b39f7ec824a4a5a60b8` re-observes the explicit logical-quad normal field under deformation. It is the exact stack base for this activation, and its dynamic normal evidence is not silently promoted into tangent evidence.
- **Animal Runtime PR #19** owns normal/index storage cost. Its 42-source-vertex result remains truthful for its exact normal-only identity, but it cannot be inherited onto a UV-seam-split tangent representation without a new measurement.
- **Character Geometry PR #11** remains structurally unresolved at `b65d73e514c23670204915bde8ce935a3b417574`: its dense sampled shoulder nonadjacent-intersection count improved `1320 -> 1020`, but every retained pose remains nonzero. No new unowned Character residual family was identified in this scan that outranked the explicit downstream Animal tangent dependency.
- **Building / Nature / Object / Map / Weather** retain bounded owner/source lanes; **Weapon / Armor / Unit / Misc** exposed no stronger implementation-ready Geometry dependency in the current scan.

Search of the current open constellation found no competing Geometry implementation lane already authoring this Animal UV/tangent basis. No duplicate Materials, Visual-QA, Rigging, Runtime, Animation or Technical-Art lane was opened.

## Donor / shared-capability boundary

The current surface is a highly specific 42-source-vertex ring/path receiver with four 10-segment rings plus endpoint poles and a source-owned bilateral segment correspondence. The new work therefore remains **Animal-local**.

No Universal Creation implementation changed. No Profession Fabric implementation changed. No generic UV/tangent generator was claimed. The reusable idea is retained as a **mesh pattern candidate** only: when a closed parametric tube needs a truthful tangent frame, UV seams, surface-island boundaries and polar tangent singularities must be represented explicitly in the render-vertex domain instead of silently averaged through one source vertex.

Promotion to UC or another shared capability requires materially different repeated-domain evidence first.

## Selected bounded improvement

Product repository:

`mike-axiom-mir/axm-animal-design`

New PR:

**#20 — `Geometry: add mirror-stable UV and tangent-basis candidate`**

Branch:

`studio/geometry-bilateral-uv-tangent-basis-001`

Exact base branch:

`studio/rigging-bilateral-deformed-logical-quad-normals-001`

Exact base / Rigging head:

`91e2fd01be63df807c035b39f7ec824a4a5a60b8`

Exact current Geometry head:

**`ca4bb8a2f144231f8755eacc980785d1807b79db`**

Observed PR state after evidence completion: **OPEN / NON-DRAFT / MERGEABLE**.

Repository metadata and green CI are evidence metadata only; they do not grant merge/CANON authority.

## Why this is Geometry-owned

Geometry PR #16 made the normal boundary explicit: the chosen smooth-normal field has no truthful tangent frame until a UV basis exists. Tangents are part of the surface/mesh representation owned by Geometry, while final texture layout, material appearance, rigged shading behaviour, transport and runtime cost remain downstream authorities.

The smallest truthful next move was therefore not to change the Animal source, topology, normal field, material values or weighting. It was to introduce one rollbackable **structural UV/tangent basis** whose seams and singularities are represented explicitly and whose bilateral correspondence can be measured.

## Bounded structural UV/tangent candidate

New Animal-local schema:

`axm.animal-bilateral-uv-tangent-basis/v0.1`

Candidate identity:

`quadruped-front-elbow-bilateral-parametric-uv-tangent-basis-001`

The candidate preserves the geometric source exactly:

- **42 source vertices**;
- **80 source triangles**;
- exact source positions unchanged;
- exact source triangle records unchanged;
- Geometry PR #13 exact-mirror topology unchanged;
- Geometry PR #16 explicit logical-quad normal vectors unchanged;
- Organic source, Rigging plan/weights, Materials values and Animation identity unchanged.

It adds one structural three-island parametric UV basis and a separate render-vertex domain:

1. **Longitudinal side strip**
   - U follows the source-owned semantic 10-segment ring parameter;
   - V follows normalized cumulative source path length, placed inside structural band `0.30..0.70`;
   - the cylindrical U wrap is split explicitly so a triangle never interpolates across the naive `0.9 -> 0.0` discontinuity.
2. **Start cap**
   - separate bounded disk island centered at `(0.13, 0.13)`, radius `0.11`.
3. **End cap**
   - separate bounded disk island centered at `(0.87, 0.87)`, radius `0.11`.
4. **Cap/side boundaries**
   - ring vertices are split between side and cap UV domains instead of pretending one vertex can carry incompatible UV coordinates.
5. **Polar cap tangent singularities**
   - each endpoint source pole is split per cap wedge in the render domain because one polar-centre UV vertex does not have one physically coherent tangent direction for the full fan.
6. **Tangent derivation**
   - triangle tangents/bitangents are derived from exact positions + candidate UVs;
   - tangent XYZ is Gram-Schmidt orthogonalized against Geometry PR #16's selected explicit logical-quad normal;
   - reflection handedness is retained explicitly in tangent `w`.
7. **Bilateral semantics**
   - right-side UV semantics use the exact Organic bilateral segment mapping rather than raw mirrored ring order;
   - left/right UVs therefore match semantically while tangent XYZ mirrors across `Y=0` and handedness changes sign under reflection.

This is deliberately a **structural parameterization**, not a final texture atlas.

## Explicit render-domain cost

The source geometric domain remains **42 vertices / 80 triangles**.

The structural UV/tangent render domain is **84 vertices / 80 triangles**.

The `+42` render vertices are explicit and attributable to:

- four cylindrical side seam duplicates, one per ring;
- cap-vs-side UV island splits for ring vertices;
- per-wedge cap-pole tangent singularity splits.

This does not change source geometry. It does change the representation that a renderer/runtime would store if this candidate is adopted, so the cost is handed to Runtime instead of being hidden inside a "same mesh" claim.

## Exact structural result

Scoped result:

**`PASS_BILATERAL_UV_TANGENT_BASIS_CANDIDATE__FINAL_UV_VISUAL_TRANSPORT_HELD`**

### Source reconstruction

Through the expanded render domain:

- source triangle records reconstruct exactly: **PASS**;
- source triangle positions reconstruct exactly: **PASS**;
- source triangle count remains **80**;
- source geometry therefore remains unchanged by the candidate.

### UV degeneracy and seam control

Minimum retained UV triangle area:

**`0.0031533249771499954`**

No retained candidate triangle is UV-degenerate under the bounded gate.

Naive unsplit cylindrical parameterization maximum side-triangle U span:

**`0.9`**

Candidate seam-aware maximum side-triangle U span:

**`0.10000000000000009`**

The naive value is retained as a negative/control comparison instead of being deleted after the repair.

### Tangent-frame structural checks

Maximum absolute tangent·normal residual:

**`6.610857694600014e-13`**

Maximum tangent unit-length error:

**`5.055955654142963e-13`**

Both pass the bounded `1e-9` structural tolerance.

### Bilateral checks

Under exact source semantics and reflection across `Y=0`:

- maximum mirrored render-position residual: **`0.0`**;
- maximum mirrored explicit-normal residual: **`0.0`**;
- maximum UV residual: **`0.0`**;
- maximum mirrored tangent-XYZ residual: **`0.0`**;
- tangent handedness mismatches: **`0 / 84`**.

The candidate therefore preserves the exact bilateral purpose of the upstream source/topology/normal chain without using raw right-ring order as a shortcut.

## CI / retained evidence

Dedicated workflow:

**`35161496181 — Geometry bilateral UV tangent basis evidence` — COMPLETED / SUCCESS**

Exact tested head:

`ca4bb8a2f144231f8755eacc980785d1807b79db`

Evidence:

- Python 3.11: exact ancestry/module-identity checks, exact Rigging donor checkout, compile, full inherited Animal suite, candidate evidence build and artifact upload all PASS;
- Python 3.13: exact ancestry/module checks, compile and full inherited Animal suite PASS;
- exact full inherited suite on Python 3.11: **59 tests / 59 PASS**.

Retained artifact:

- ID: **`10472719015`**;
- name: `animal-geometry-bilateral-uv-tangent-basis-ca4bb8a2f144231f8755eacc980785d1807b79db`;
- GitHub size: **22,110 B**;
- retained files: **13**;
- GitHub SHA-256: **`7f5e63c0445abdfef08dc041bf53f41ebdf295527d897d2254d097b416042afe`**;
- downloaded and independently rehashed in this activation: **same SHA-256**.

The packet retains machine-readable left/right UV+tangent bases, exact evidence/provenance, OBJ specimens carrying UVs/normals, exact dependency heads/module blobs, and the explicit handoff/truth boundary.

## Handoffs recorded

### Geometry PR #20

Evidence comment **`5705912614`** records exact head, 59-test CI, structural metrics, artifact identity/digest and explicit non-claims.

### Geometry PR #16

Continuity comment **`5705925454`** records that PR #20 does not change the explicit logical-quad normal vectors or upstream source/topology identity. PR #16's scoped normal PASS remains separate prerequisite truth.

### Materials PR #17

Handoff comment **`5705927040`** returns the UV/tangent basis for a fresh neutral tangent-space diagnostic if the candidate advances. The bounded static explicit-normal preference from PR #17 is **not** transferred into tangent-space visual acceptance.

### Rigging PR #18

Handoff comment **`5705930838`** explicitly prevents the static tangent-basis PASS from becoming a deformed tangent-frame PASS. If adopted, Rigging must re-observe this exact tangent identity through its established pose envelope.

### Runtime PR #19

Handoff comment **`5705932190`** records the explicit `42 -> 84` render-vertex split. PR #19's existing normal-only budget remains truthful for its own exact identity; Runtime must measure PR #20 separately before any storage/performance claim transfers.

### Technical Art / UC transport

No transport acceptance is inherited. A downstream transport proof must preserve the exact PR #20 UV + explicit normal + tangent data without regenerating normals/tangents or collapsing the intentional render-domain splits.

### Art Direction / Visual QA

Geometry does not claim that this structural UV layout is artistically preferable, nor that a tangent-space normal map looks correct. The correct next visual question is bounded: does an exact neutral tangent-space diagnostic behave coherently under this basis in the target host?

### Animation

No Animation identity or playback evidence is rebound to the tangent basis. Static tangent evidence is not an Animation or interpolation PASS.

## Reusable mesh pattern retained

A useful general pattern emerged but is **not promoted to a shared implementation**:

> Source topology identity and render-vertex identity are not always the same thing. A truthful tangent-space representation may require deterministic vertex splits at UV seams, material/surface-island boundaries and UV singularities while preserving the exact source surface.

For this Animal receiver specifically, the cap pole is the strongest example: source topology correctly uses one pole, but tangent-space rendering needs one pole render vertex per UV wedge because a polar UV centre has no single coherent tangent direction.

This is retained as a reusable Geometry pattern candidate. It becomes a UC/shared capability only after repeated evidence across materially different mesh domains.

## Truth boundary / explicit non-claims

This activation proves only that one Animal-local structural UV/tangent basis can be derived from the current exact source/topology/normal chain such that:

- source positions and triangle records remain exactly reconstructable;
- intentional UV/tangent render-domain splits are explicit and deterministic;
- retained UV triangles are non-degenerate under the scoped gate;
- the cylindrical U seam no longer creates the naive large-wrap interpolation span;
- tangents are unit and orthogonal to the selected explicit normals within bounded tolerance;
- left/right UV semantics match exactly;
- reflected tangent XYZ and handedness behave exactly under the source-owned bilateral correspondence.

It does **not** establish:

- final texture UV packing;
- texel density or texture-resolution policy;
- material-island or paint placement quality;
- tangent-space normal-map visual correctness;
- Art Direction / Visual-QA acceptance of tangent-space appearance;
- deformed tangent-frame quality or continuity under Rigging;
- mathematical continuous-motion safety;
- anatomy, biology, skin sliding, muscle or volume-preservation quality;
- final PBR/fur/subsurface quality;
- Animation clip/interpolation/playback acceptance;
- exact UC/GLB transport of UV + explicit normal + tangent identity;
- importer regeneration/vertex-reorder safety;
- engine/controller/runtime/target-device storage or performance acceptance;
- collision, physics or gameplay suitability;
- CANON or merge authority;
- production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** the previous `NOT_DEFINED_NO_UV_BASIS` hold was not overwritten as if tangents had always existed. A separate candidate now provides structural evidence, while final UV/visual/deformed/transport/runtime gates stay open.
- **Agency / non-domination:** Geometry owns the structural basis; Materials / Visual QA / Art Direction keep appearance authority; Rigging keeps deformed-frame authority; Technical Art keeps transport authority; Runtime keeps representation-cost/performance authority; Mike / the constitutional process retain CANON/merge authority.
- **Continuity:** Geometry #13, Geometry #16, Materials #17, Rigging #18, Runtime #19 and Geometry #20 remain distinct exact rollback/evidence points. The old generated-normal failure, the explicit-normal repair and the new tangent basis are not collapsed into one story.
- **Wisdom before speed:** one explicit local basis was measured before claiming generic UV generation, before changing source topology again, and before pushing an Animal-specific rule into UC.

## Previous Geometry lanes retained

These remain historical/current truth under their exact identities and are not rewritten by PR #20:

- **Animal PR #16:** `79e1667f6cc91e2ec8e41f01df18b6933c9c876d` — diagonal-invariant / exact-mirror explicit logical-quad normal candidate; previous detailed status remains in coordination history blob `2b08bb57b45185a08825bb6d5fe95cc48bf2446c`.
- **Animal PR #13:** `bdbb51303bd1b96866b06a71730ccc328bf4f2f6` — exact bilateral reflected surface-topology repair.
- **Animal PR #11:** `f89af95d621c36da3994c6660552da8bbc73fd1b` — exact bilateral source-successor local topology rebind.
- **Animal PR #7:** `95b53572037ca3de98811db52beb4262a34b7d42` — bounded `4.5°` ring-phase experiment, still separate from the selected successor chain.
- **Character PR #11:** `b65d73e514c23670204915bde8ce935a3b417574` — dense sampled shoulder intersections `1320 -> 1020`; every retained tested pose remains nonzero.
- **Character PR #9:** `fa69eea233a56dc7e09b22c62a9e37bfa97bc994` — bounded 1,024-mask arm-strip diagonal search; best family exhausted without cleaning the shoulder.
- **Character PR #7:** `8cc4a180cd1481d680841190b0038b4b330133ae` — topology-only shoulder opening repair `374 -> 58` sampled intersections; still nonzero.
- **Character PR #5:** original sampled shoulder self-intersection diagnosis remains the root structural blocker.
- **Building PR #6:** `aaa987397c33f0dc9579a2ac3785ca00a5bc7402` — positive-volume header/post interpenetration repair, preserving its exact source identity and face-contact limitations.
- **Nature:** corrected cap winding/source migration and explicit leaf-sidedness topology remain separate historical/current evidence with downstream authority intact.

## Next Geometry / Topology pass

1. Re-scan the full constellation first; do not automatically keep extending Animal.
2. Keep PR #20 as a **structural UV/tangent candidate**, not a final texture/render contract, until Materials / Visual QA / Art Direction and downstream owners produce direct evidence.
3. If PR #20 advances, require Rigging to re-observe deformed tangent frames, Technical Art to prove exact attribute transport, and Runtime to measure the explicit 84-render-vertex representation before any cross-domain claim transfers.
4. Do not convert the structural three-island atlas into final UV/texel-density acceptance without the appropriate owner evidence.
5. If Character becomes the strongest Geometry blocker again, return to the nonzero shoulder intersections only after identifying a new bounded residual-pair family; do not repeat the exhausted arm-strip diagonal search.
6. Preserve repo identity, provenance, rollback, explicit non-claims and the four AXM roots.
