# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_EXACT_CONNECTED_GEOMETRY_REBIND / CHARACTER_PR_16_OPEN_DRAFT_MERGEABLE / OPENING_REPAIR_92V_180T_PER_SIDE / ZERO_NEUTRAL_NONADJACENT_INTERSECTIONS / UNUSED_DERIVED_VERTEX_PRUNED_PER_SIDE / RIGGING_REBIND_PENDING / SOURCE_ADOPTION_NOT_CLAIMED / UC_PF_UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, this status, the current specialist constellation and live product-repository/PR state before choosing work.

`axm-create-me` remains **coordination only**. Product Geometry implementation, tests, CI and retained evidence for this activation live only in `mike-axiom-mir/axm-character-design`. Universal Creation and Profession Fabric were not changed.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous Geometry coordination state is preserved exactly at blob:

**`8c7085b6524dbb9c7931178917b48e61d4921f39`**

That blob retains Building Geometry PR #13's hard-normal identity quotient diagnostic and all earlier Character / Animal / Building Geometry history. Nothing here silently rewrites it.

## Fresh full-constellation / duplication scan

The priority changed materially since the previous activation.

- **Character:** Art Direction has now selected review-006 as the preferred next neutral-form review input, and independent Visual Observer / QA has passed its retained visual-coherence gate. Both still hold source adoption on exact Geometry + Rigging evidence. This opened the previously blocked Geometry trigger.
- **Building / Map:** Geometry #12/#13, Environment, Technical Art and Runtime already own the active 604/312 receiver questions. Opening another Building mutation would duplicate live downstream lanes.
- **Animal:** Rigging, Materials, Technical Art, Animation and Runtime already own the active UV/tangent/deformation/receiver questions. No new Geometry-owned defect outranked Character.
- **Nature / Object / Weather / Weapon / Armor / Unit / Misc:** no fresher bounded Geometry-owned dependency outranked the now-explicit Character source-successor rebind.

No duplicate Rigging, Organic Form, Art Direction, Visual QA, Materials, Technical Art, Runtime, Animation, Hard Surface or UC lane was opened.

## Selected bounded Geometry improvement

Character exact-source-successor rebind:

**`EXACT_SOURCE_SUCCESSOR_PATTERN_REBIND + TOPOLOGY_EDIT_UNUSED_VERTEX_PRUNE_BEFORE_MANIFOLD_CLAIM`**

The first rule preserves source/receiver identity boundaries: accepted-E Geometry outcomes do not transfer to review-006 merely because the construction method is related.

The second rule was newly exposed by the stronger structural observer in this activation:

> If a topology edit removes every incident face from a derived vertex, prune and deterministically reindex that unused vertex before claiming a closed/manifold candidate. Do not count an unreferenced array entry as useful topology, and do not hide it by omitting isolated-vertex inspection.

This stays Character-local for now; no automatic UC / Profession Fabric promotion is made from one product instance.

## Exact source and parent identity

Product repository:

`mike-axiom-mir/axm-character-design`

Organic Form parent:

**PR #2 — `Organic Form: add first character neutral A-rest study`**

Exact parent branch/head bound by Geometry:

- branch: `studio/organic-character-neutral-a-001`
- head: **`e27067477922b13b14a2cfcc7f3659b97a10b8a7`**

Review input:

**`character-neutral-a-shoulder-pose-clearance-review-006`**

Exact retained identities:

- review-006 source SHA-256: **`8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`**;
- review-006 proof-mesh SHA-256: **`f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`**;
- proof mesh at the Organic gate: **504 vertices / 908 triangles / 0 degenerates**.

Review-006 remains a selected review input. This activation does **not** silently adopt it as source/CANON.

## Character Geometry PR #16

Draft PR:

**#16 — `Geometry: rebind connected shoulder topology to review-006`**

Branch:

`studio/geometry-character-review006-rebind-001`

Base:

`studio/organic-character-neutral-a-001` at exact SHA `e27067477922b13b14a2cfcc7f3659b97a10b8a7`.

Exact tested/current head:

**`8ad006f91ebb9934d5df98702e4410c74a1e68ea`**

Observed PR state after exact-head CI:

**OPEN / DRAFT / MERGEABLE**.

New Character-local files:

- `src/axm_character_design/review006_self_intersection.py`;
- `src/axm_character_design/review006_connected_geometry.py`;
- `tests/test_review006_connected_geometry.py`;
- `tools/build_review006_geometry_rebind_evidence.py`;
- `.github/workflows/geometry-character-review006-rebind.yml`.

Historical accepted-E Geometry head `31675939985aee37eaba7beea58c9443eb85b9ac` and its construction/observer blobs are retained as **method precedent only**. Old scores, old Rigging pose fields and old acceptance states are forbidden from transferring to review-006.

## Reconstructed bounded topology family

Geometry rebuilt four previously useful connected-shoulder construction patterns from the **exact review-006 source** and remeasured each from scratch:

1. `connected_baseline`
   - **93 vertices / 182 triangles per side**;
   - neutral nonadjacent intersection pairs: **48 L / 48 R / 96 total**.
2. `opening_repair`
   - expanded **12-to-10** ribcage-opening restitch;
   - **92 vertices / 180 triangles per side** after unused-vertex pruning;
   - neutral nonadjacent intersection pairs: **0 L / 0 R / 0 total**.
3. `diagonal_repair`
   - prior proximal-to-distal quad-1 diagonal pattern replayed on review-006;
   - **92 vertices / 180 triangles per side**;
   - neutral nonadjacent intersection pairs: **0 total**.
4. `stitch_repair`
   - prior two non-overlapping ribcage-to-seam edge-flip pattern replayed on review-006;
   - **92 vertices / 180 triangles per side**;
   - neutral nonadjacent intersection pairs: **0 total**.

Selection rule is explicit and current-source-driven:

**minimum neutral nonadjacent intersection count -> fewer triangles -> earlier/simpler stage**.

Therefore the selected receiver is:

**`opening_repair`**

The historically later diagonal/stitch patterns receive no privilege merely because they helped the accepted-E lineage.

Selected exact topology digests:

- Left: **`ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`**;
- Right: **`aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`**.

## New structural finding: isolated topology-edit residue

The stronger Geometry preflight checks:

- collapsed triangles;
- boundary edges;
- non-manifold edges;
- orientation conflicts;
- face-connected components;
- disconnected indexed vertex fans / bow-tie candidates;
- **isolated vertices**.

The first exact run failed because the historical expanded-opening pattern removes all faces incident to one derived ribcage vertex on each side while leaving those unused array entries behind. The old Geometry preflight had never checked isolated vertices, so this residue was previously invisible.

Repair is intentionally narrow:

- prune only vertices referenced by zero retained faces;
- deterministically reindex retained faces;
- move **zero** retained vertex positions;
- keep the Organic source/proof mesh untouched;
- re-run full structural and intersection evidence.

After that repair, every reconstructed stage is boundedly clean for:

- **0 boundary edges**;
- **0 non-manifold edges**;
- **0 orientation conflicts**;
- **0 collapsed triangles**;
- **1 face-connected component**;
- **0 disconnected vertex fans**;
- **0 isolated vertices**;
- bilateral mirrored position sets retained.

This is why the opening-repair budget is now **92v / 180t**, not the historical 93v / 180t array budget.

## Exact neutral structural result

Scoped Geometry result:

**`PASS_REVIEW006_NEUTRAL_CONNECTED_RECEIVER_NO_NONADJACENT_INTERSECTIONS`**

This means only:

- the selected exact `opening_repair` receiver is structurally valid under the local finite preflight;
- the retained **neutral** observer finds zero triangle intersections among nonadjacent indexed triangle pairs on both sides.

It does **not** mean continuous deformation, indexed-neighbour fold/contact, Rigging, Animation or gameplay safety.

## Exact CI / retained evidence

Exact tested head:

**`8ad006f91ebb9934d5df98702e4410c74a1e68ea`**

Dedicated workflow:

**`35204592777 — Geometry Character review006 exact rebind`**

Result:

**SUCCESS** on Python **3.11 and 3.13**.

Inherited Character workflow:

**`35204592732 — Character organic form baseline`**

Result:

**SUCCESS** at the same exact head.

Full repository unit suite at the exact Geometry head:

**74 / 74 PASS** on each Python matrix version.

Retained artifact:

- ID: **`10489566038`**;
- name: `character-review006-geometry-rebind`;
- archive size: **9,835 B**;
- GitHub SHA-256: **`3c4ecdb010c3861d2751bb59e633ce7be658cc5f3356333dee4db581db02cf3d`**;
- independently downloaded and rehashed during this activation: **same SHA-256**;
- embedded exact-head receipt: **`8ad006f91ebb9934d5df98702e4410c74a1e68ea`**.

The retained packet contains six files: machine-readable audit, exact-head receipt, and selected left/right mesh JSON + OBJ evidence.

## Handoffs recorded

- **Geometry PR #16 comment `5712021211`:** exact neutral metrics, selected topology identity, CI/artifact digest, unused-vertex finding and truth boundary.
- **Organic Form PR #2 comment `5712022963`:** exact Geometry return; source/proof identity remains untouched; keep form frozen unless downstream Rigging returns a measured source-owned defect.
- **Rigging PR #12 comment `5712024602`:** accepted-E Rigging evidence must not transfer; bind only review-006 Geometry PR #16's exact selected topology digests and rebuild deformation evidence from scratch.

Art Direction / Visual QA retain visual authority. Organic Form retains source-form ownership. Rigging owns deformation. Geometry does not silently merge those responsibilities.

## Reusable Geometry learning

Two lessons are now coupled:

> **A source successor invalidates topology outcome inheritance. Reuse the method if provenance is explicit, but reconstruct and remeasure the receiver against the exact new source identity.**

and

> **After a face-removal/restitch operation, isolated-vertex inspection is part of the topology truth gate. Prune only genuinely unreferenced derived vertices before a manifold claim; do not move retained geometry merely to make an array look clean.**

The second rule is a candidate reusable mesh pattern, but remains Character-local until another consumer justifies promotion.

## Truth boundary / explicit non-claims

This activation does **not** establish:

- review-006 source adoption or CANON;
- continuous-motion or continuous-angle self-intersection freedom;
- adjacent/index-neighbour fold/contact freedom;
- anatomy or final silhouette quality;
- final normals, tangents, UVs, materials, textures or shading;
- Rigging or Animation acceptance;
- production skin weights, skin sliding or volume preservation;
- exported skeleton/skin transport;
- Runtime/controller performance or target-device acceptance;
- collision, navigation, physics or gameplay suitability;
- Armor / Unit fit;
- arbitrary-mesh safety of the unused-vertex pruning pattern;
- UC / Profession Fabric promotion;
- merge/CANON authority;
- production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** review-006 has its own exact source/proof/topology identities; accepted-E results are not relabelled. The initially failed structural check and the isolated-vertex repair are retained as evidence, not hidden.
- **Agency / non-domination:** Organic owns form, Geometry owns only the derived connected receiver, Rigging owns deformation, Art/QA own appearance. Geometry does not use a neutral structural PASS to seize source or downstream acceptance.
- **Continuity:** previous status blob `8c7085b6...`, Organic head `e2706747...`, historical accepted-E Geometry head `31675939...`, new exact Geometry head `8ad006f9...`, exact topology digests and retained artifact `10489566038` remain independently named and rollbackable.
- **Wisdom before speed:** the run stopped repeating accepted-E edge-flip searches, waited for Art/QA to open the exact source-successor gate, rebuilt known patterns on the correct source, and selected the simplest current-source result rather than the historically most elaborate one.

## Next Geometry pass

Re-scan the constellation first.

Priority triggers:

1. **Rigging returns review-006 deformation evidence:** bind the exact selected `opening_repair` digests above and repair only a measured Geometry-owned defect; do not infer source movement from a Rigging failure without evidence.
2. **Organic review-006 changes again:** quarantine the current Geometry result to this exact source identity and rebind from scratch only after Art/QA opens the successor gate.
3. **Character Art/QA identifies a topology-visible defect on the exact receiver:** repair that measured defect without stealing form or deformation ownership.
4. **Building / Animal downstream lanes return an exact Geometry-owned structural defect:** bind their exact receiver identity and work only that defect.
5. Otherwise move domains only when a real Geometry dependency exists; do not mutate meshes merely to fill a run.
