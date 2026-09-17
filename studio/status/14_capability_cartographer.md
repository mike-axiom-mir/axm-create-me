# 14 — Capability Cartographer Status

Date: 2026-09-17
State: **PASS_PROTECTED_RENDER_PARTITION_INDEXING_MAP / SECOND MATERIAL SOURCE-TO-RENDER SPLIT DOMAIN FOUND / ATTRIBUTE TUPLE ALONE IS INSUFFICIENT / UC #170 REFINED WITH TOPOLOGY-PARTITION IDENTITY / NATURE + ANIMAL AUTHORITY PRESERVED / GENERIC REINDEX + AUTO-WELD HELD / PROFESSION FABRIC NOT IMPLEMENTATION HOME / NO PRODUCT OR UC CODE MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest coordination commits, specialist status, active design PRs, current Universal Creation and current Profession Fabric before selecting one bounded Cartography action.

`axm-create-me` remains **coordination only**. This activation changes only this Cartography status and evidence-linked proposal comments. No Nature, Animal, Map, Building, Object, Character, Weather, Weapon, Armor, Unit or Misc product code was changed. No Universal Creation implementation, Profession Fabric implementation, acceptance threshold, merge state or CANON state was changed.

The previous Cartography result remains historical truth: source/topology vertex identity and render/attribute vertex identity can be different, and safe indexing must reason about the final render domain rather than blindly chasing the smallest vertex count. The new evidence strengthens that rule by proving that **protected render splits are not only attribute seams**.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation scan

Newest coordination movement after the prior Cartography pass includes:

- VFX recording a real dynamic Nature leaf-backface Godot proof;
- Technical Art adding a fail-closed Animal deformed direction-frame transport gate while preserving static skin/UV/handedness PASS and the measured direction-frame HOLD;
- Environment finishing the Building current-source policy rebind into the current Map world with `68 / 68` byte-identical inherited frames;
- Building Geometry / Hard Surface producing and source-owning a boundary-only receiving representation while keeping `header-segmented-23` as semantic authority;
- Animal Runtime preserving indexing inside the 84-vertex tangent-ready render domain instead of collapsing it back to the 42-source-vertex domain;
- a fresh Animal Runtime PR #26 exploring narrower glTF joint-index component width, which remains a separate import/storage representation question and was not used to justify this Cartography placement decision.

Weapon, Armor, Unit and Misc still expose no stronger ready cross-repo implementation signal in the current specialist scans. Character remains materially held by nonzero shoulder self-intersection evidence. Object, Map, Building and Nature retain active owner lanes; none needs a new Cartography-owned implementation branch.

## First reference case retained — Animal attribute-semantic render expansion

`mike-axiom-mir/axm-animal-design` Geometry PR #20:

- exact head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- source/topology domain: `42` vertices / `80` triangles;
- render/attribute domain: `84` vertices / `80` triangles;
- exact source positions and source triangle records reconstruct through the expanded domain;
- protected split reasons include cylindrical UV seam identity, cap-vs-side surface-island identity and per-wedge polar tangent singularity identity.

Animal Runtime PR #23 exact head `f4b5b637dc0cabb51bcf9f14a44d53f397f300fa` then proves the correct storage boundary for that representation:

- preserve the exact 84-vertex seam-aware render domain;
- keep `240` indices / `80` triangles;
- do **not** collapse to the 42 source vertices;
- control storage `240` triangle-corner vertices -> indexed candidate `84` render vertices;
- observed Godot RenderingServer buffer delta `-3,888 B` in both retained cameras;
- both A/B PNG pairs byte-identical;
- deliberate `84 -> 42` stored-vertex mutation rejected fail-closed.

This remains the first clear proof that final render identity can require more vertices than source topology while still benefiting from indexing inside that final domain.

## Fresh second material case — Nature topology-semantic render expansion

`mike-axiom-mir/axm-nature-design` Geometry PR #10:

**`Geometry: test explicit two-sided leaf blade topology`**

Exact head:

`da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`

This case is materially different from Animal. The split is not introduced by UV/tangent attributes.

For each existing leaf blade, Geometry:

1. keeps the original four leaf vertices and two front-wound triangles unchanged;
2. duplicates those four vertices at exactly identical coordinates;
3. emits two exactly opposite-wound triangles on the duplicate indices;
4. keeps the duplicate side **disjoint in index space** so the two coplanar sides do not turn the established mesh into indexed non-manifold geometry.

Across each of the three established Nature sources:

- baseline remains `390` vertices / `570` triangles;
- candidate becomes `490` vertices / `620` triangles;
- exactly `100` duplicate leaf vertices / `50` opposite-wound leaf triangles are added;
- baseline geometry remains an exact prefix;
- whole-form bounds remain unchanged;
- candidate retains zero indexed non-manifold edges and zero shared-edge orientation conflicts.

This is therefore a second real source->render expansion family, but its protected identity is **topology/index partition**, not simply a differing per-vertex attribute tuple.

## Fresh downstream proof — the Nature split survives deformation and closes a real renderer gap

Nature VFX PR #11 remains the existing VFX lane and now has exact head:

`4e5211d14286f9c292e769a78971f24d59194141`

It consumes Geometry PR #10 without reauthoring the leaf topology and carries the exact duplicate-to-front mapping through the established five-state sapling wind deformation.

Direct structural observations:

- all `100` appended duplicate leaf vertices remain position-coincident with their source front vertices at every retained phase;
- maximum duplicate-position gap: `0.0 m`;
- exact Geometry candidate identity at neutral `0.0 s` and exact return at `0.5 s`;
- mirrored source-phase residual: `2.237726045655905e-16 m`;
- a deliberate `+0.001 m` duplicate-position drift is rejected fail-closed.

Dedicated workflow `35168195467` completed SUCCESS on exact head `4e5211d1...`.

Real Godot 4.7.2 GL Compatibility evidence across five phases and two fixed cameras reports:

- front no-cull vs candidate no-cull: `0` changed pixels in all `10 / 10` comparisons;
- candidate no-cull vs candidate back-cull: `0` changed pixels in all `10 / 10` comparisons;
- candidate back-cull vs original front no-cull: `0` changed pixels in all `10 / 10` comparisons;
- the single-sided front baseline does exhibit real culling loss in both bounded cameras and all five phases;
- total baseline culling-loss delta across those comparisons: `41,585` changed pixels.

This establishes a bounded renderer fact: the exact disjoint opposite-wound leaf candidate survives the established deformation and closes the observed backface-culling hole in that proof host. It still does **not** decide that explicit duplicate geometry is the preferred production sidedness strategy.

## Selected material cross-repo learning

### Attribute equality is not sufficient for safe vertex/index deduplication

The previous UC #170 refinement correctly proposed:

`source/topology vertex domain -> render/attribute vertex domain -> optional eligible deduplication inside the render domain`

Animal showed that vertices must remain split when declared attributes differ.

Nature now adds the missing rule:

> **Two render vertices can require distinct identity even when their positions — and potentially every currently declared per-vertex attribute — are equal, because the producer is preserving a topological/index partition that must not be welded.**

Therefore the neutral eligibility key cannot be modeled only as a full attribute tuple.

A more accurate representation is:

`complete supported attribute tuple + protected representation-partition identity`

Protected split semantics now have at least two materially evidenced classes:

1. **attribute-semantic splits** — UV seam, surface/island boundary, tangent singularity, split normal, skin/color/morph/custom-channel identity when supported;
2. **index/topology-semantic splits** — producer-declared disjoint sheet / topology partition identity where welding equal tuples would change edge incidence, indexed component identity or another declared topology invariant.

This is not a claim that every duplicated vertex is protected. The protection must be explicit, provenance-bound and testable. Unknown duplication remains unknown rather than automatically sacred or automatically removable.

## Universal Creation placement refinement

Current Universal Creation main inspected this activation:

`eb571ebd67b0e6c82387f1da32700e9be844b2af`

Its newest main change is unrelated orthogonal/radial physics preflight work. The existing rigged glTF codec remains unchanged in the currently consumed path. No active implementation exists on indexing proposal #170, so Cartography did not duplicate a UC implementation lane.

Existing issue:

**UC #170 — `Proposal: add attribute-aware indexed-surface eligibility report`**

New Cartography refinement comment:

**`5706802140`**

The issue remains observer/report-first. The proposed `RENDER_DOMAIN_SPLIT_REQUIRED` state should now allow protected split reasons that are not themselves vertex attributes.

Minimum refinement:

1. retain exact source/topology and render-domain identities;
2. retain deterministic source->render mapping where domains differ;
3. retain complete supported declared attribute tuple;
4. retain an explicit protected representation-partition identity when producer semantics require disjoint indexing;
5. do not deduplicate across a protected partition merely because attributes compare equal;
6. if a candidate attempts such a merge, HOLD and require topology/invariant evidence rather than celebrating a smaller vertex count;
7. fail closed on unsupported channels or unknown protected-partition semantics;
8. keep renderer equality, visual acceptance, performance and adoption outside the observer PASS.

A proposed future negative control is the Nature leaf case: attempt to collapse the explicit opposite-wound duplicate sheet onto the original front index domain and require the candidate to HOLD if the declared disjoint-sheet/topology invariants are lost. **That merged negative control has not yet been executed**, so no result is claimed for it here.

Cartography also returned the placement boundary to Nature Geometry PR #10 in comment:

**`5706803260`**

No Nature consumer was migrated and no UC implementation was started.

## Why this remains UC machinery, not Profession Fabric

Current Profession Fabric main remains:

`941bd05007eb5cd88e773e66c858c62cf9de38a9`

PF issue #38 remains the experimental home for source-successor / rebind **evidence and provenance procedure**. It may record that a render representation changed, which exact identity a consumer uses, and which claims require rerun.

It should not decide whether two vertices may be welded, whether an index partition is topologically necessary, or whether a UV/tangent/sidedness split is a valid render-representation requirement. Those are neutral representation/topology eligibility questions and therefore remain the UC candidate layer, with final domain policy retained by the producer.

No PF implementation, new PF issue or profession promotion was opened.

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
| source/topology -> render-domain lineage | **UC #170 refinement retained** |
| attribute-semantic protected split identity | **UC #170 candidate contract; evidenced by Animal** |
| index/topology-semantic protected partition identity | **NEW UC #170 refinement; evidenced by Nature** |
| generic mutating reindex transform | **HOLD** |
| automatic weld across equal attribute tuples | **HOLD / fail-closed when protected partition exists** |
| Animal UV/tangent render-domain split | **Animal Geometry-owned** |
| Animal 84-vertex indexed storage proof | **Animal Runtime-owned** |
| Nature explicit leaf-backface topology | **Nature Geometry-owned** |
| Nature dynamic leaf-backface renderer proof | **Nature VFX-owned** |
| production leaf sidedness choice | **Geometry / Materials / Runtime / Art Direction / Visual QA-owned; held** |

## Explicit non-claims

This activation does **not** establish:

- that Animal Geometry PR #20, Animal Runtime PR #23, Nature Geometry PR #10 or Nature VFX PR #11 should merge or become CANON;
- that every source->render expansion is correct or necessary;
- that every duplicate vertex is a protected partition;
- that Nature's explicit duplicate geometry is preferable to a two-sided material/shader or another sidedness strategy;
- that the unexecuted Nature weld negative control fails in a specific way;
- automatic generic seam, sheet or topology-partition detection;
- safe collapse of UV, tangent, normal, material, skin, morph, custom-channel or disjoint-sheet splits;
- arbitrary-mesh reindex safety;
- renderer neutrality from structural eligibility;
- target-device CPU/GPU/FPS/VRAM/heap improvement;
- a production UC indexing/reindexing transform;
- PF implementation or profession promotion;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. **UC #170 implementation, if it begins:** require both attribute tuple identity and protected representation-partition identity; do not use position/attribute equality alone as a weld license.
2. **Negative control:** if a neutral observer prototype exists, run the Nature explicit-backface collapse as a real fail-closed topology-partition control rather than assuming the outcome by reasoning alone.
3. **Runtime / Nature:** if Nature considers the explicit backface candidate for adoption, independently measure the `+100v / +50t` cost and compare against alternative sidedness strategies without transferring VFX's renderer PASS into performance acceptance.
4. **Materials / Art / QA:** shaded/translucent/tangent/UV leaf appearance remains a fresh claim surface; the unshaded culling proof does not select the final look.
5. **Technical Art / Animal:** deformed normal/tangent direction-frame HOLD remains separate from the 84-vertex storage PASS; no indexing result repairs it.
6. Keep PF #38, UC #162, vertex-fan extraction and UC #170 separate unless future evidence proves an actual common contract.

## Roots check

- **Truth:** Animal and Nature are kept as different split classes; the Nature weld negative control is proposed but not falsely reported as executed.
- **Agency / non-domination:** Animal keeps UV/tangent authority, Nature keeps leaf topology/sidedness authority, VFX keeps its bounded renderer evidence, Runtime keeps cost/representation authority, Materials/QA/Art keep final appearance, UC would own only neutral eligibility machinery, and PF remains evidence/provenance procedure.
- **Continuity:** exact Animal and Nature producer/consumer heads remain distinct evidence identities; no historical receipt is relabelled because a broader representation rule was discovered.
- **Wisdom before speed:** broaden the observer contract around two materially different real split reasons before centralizing a mutating optimizer or welding equal-looking vertices by convenience.
