# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **MAP COMPLETE / NO STRUCTURAL MOVE / BLOCKING DEFORMATION DEPENDENCY IDENTIFIED**

## Scope inspected

This activation read the active 3D Studio campaign, the standing Capability Cartographer role, specialist status packets 01–13, active design-repository PRs, current Universal Creation specialist lanes, and relevant Profession Fabric state.

Current substantive design work is concentrated in:

- `mike-axiom-mir/axm-animal-design` PRs #1–#3;
- `mike-axiom-mir/axm-map-design` PRs #2–#3;
- `mike-axiom-mir/axm-weather-design` PR #2;
- Wreckline evidence lanes consumed by Animation / Runtime specialists.

At the latest scan, `axm-weapon-design`, `axm-armor-design`, `axm-character-design`, `axm-unit-design`, `axm-building-design`, `axm-nature-design`, `axm-object-design`, and `axm-misc-design` had no open implementation PRs. That matters for placement: the studio does not yet have a second materially different deformable design domain from which to infer a horizontal rigging contract.

Relevant shared machinery remains separate:

- Universal Creation PR #133: seam-welded topology diagnostics;
- Universal Creation PR #134: **static rigid** GLB attachment-frame evidence, explicitly HOLDing animated/skinned/deformed state;
- Universal Creation PR #135: static GLB UV / texel-density evidence;
- Profession Fabric PR #35: EXPERIMENTAL `3d-game-asset-specialist`, still NO PROMOTION and grounded primarily in one hard-surface Wreckline vehicle family.

`axm-create-me` remains coordination-only. No product implementation was added here.

## Selected material cross-repo learning

### Missing dependency: deformation evidence must be closed over the articulated subtree, not only one declared mesh region

The first organic chain now exposes a concrete evidence failure that is more important than adding another shared abstraction.

Exact evidence chain:

1. **Organic Form** — `axm-animal-design` PR #1, exact head `179fc6dc1a38de477e433a3842c4793e748928fb`, created the exact quadruped source with explicit landmarks, regions and bend reserves.
2. **Rigging / Deformation** — PR #2, exact head `565eb33ea557299036a59c788eda18bc1315ed86`, structurally passed four elbow/knee probes at -60°, 0°, +60°.
3. **Visual Observer / QA** independently reproduced the exact source and rig-plan identities and returned `FAIL_VISUAL_CHAIN_CONTINUITY`: the lower limb moves, but the downstream paw/foot remains in the neutral pose and visibly separates at nonzero angles.
4. **Animation / Motion** correctly keeps quadruped animation on HOLD pending deformation repair.
5. **Technical Art / UC Integration** PR #3, exact head `30bf8658c76402402ec4a2fbd0232bdce47e56bc`, proves only a **static** animal-surface -> UC GLB bridge. It carries no skeleton, skin weights or animation state and therefore cannot close this dependency.

The implementation explains the visual failure directly. PR #2's rig probe validates one `child_region` per joint and performs weighting/deformation only on that primitive. The distal landmark is mathematically rotated and reported, but downstream mesh primitives are not included in the pose transform. A structurally valid child-region report can therefore coexist with a visibly disconnected articulated chain.

This is not evidence that the Organic Form source itself is wrong, and it is not evidence that the existing per-region structural metrics are false. It is evidence that **their dependency scope is incomplete for an articulated-limb claim**.

## Bounded capability map

| Capability / evidence | Current exact home | What is actually proven | Missing dependency | Placement decision now |
|---|---|---|---|---|
| Organic source form + bend reserves | `axm-animal-design` PR #1 | deterministic source body, declared landmarks/proportions/bend reserves | deformation quality | stay source-owned |
| Per-region LBS probe | `axm-animal-design` PR #2 | normalized weights, finite posed child-region geometry, no collapsed child-region triangles, fixed/rigid invariants | complete downstream transform propagation | **repair same animal-design rig lane** |
| Visual articulated-chain evidence | Visual Observer status 13 | exact visible paw/foot separation reproduced from exact source/plan | repaired full-chain pose | remain QA/coordination evidence |
| Static animal -> UC GLB bridge | `axm-animal-design` PR #3 + pinned UC | exact static coordinate/material/schema conversion and GLB verification | skeleton/weights/animation export | do not widen for this failure |
| Static attachment-frame evidence | UC PR #134 | named rigid static frame position/orientation/handedness | animated/skinned hierarchy | **not the correct home**; it intentionally HOLDs this state |
| Organic motion | Animation specialist | mechanical Wreckline motion proof exists separately | visually continuous animal deformation | keep quadruped motion HOLD |
| Profession knowledge | Profession Fabric PR #35 + existing bodies | experimental broad 3D-asset evidence discipline | repeated rig/deformation work across materially different assets | **no new/promoted rigging profession yet** |

## Proposed repair contract — local first

The smallest supported next contract belongs in the existing `axm-animal-design` Rigging / Deformation lane, not in UC or Profession Fabric.

A repaired joint probe should make the articulated dependency explicit rather than infer it from one mesh region. At minimum it should:

1. declare the complete downstream region set or an explicit region hierarchy for each sampled joint;
2. propagate the joint pose through every downstream descendant that is meant to follow that joint, including the paw/foot region in the current quadruped;
3. retain the current per-region structural checks instead of replacing them;
4. add a chain-continuity evidence check that makes a detached descendant falsifiable;
5. retain exact source + rig-plan identity and preserve the current failing measurements as before-evidence;
6. rerun the same -60° / 0° / +60° representative poses;
7. require Visual Observer reinspection before Animation consumes the result.

This proposal does **not** prescribe a production skeleton format, one universal skinning algorithm, or anatomical hierarchy. It only closes the dependency exposed by the current failure.

## Placement decision

**No structural move is justified this activation.**

Do **not** move the new rule into Universal Creation yet. UC currently has useful shared static geometry/frame/material diagnostics, but the relevant static frame lane explicitly refuses animated/skinned state. One failed organic chain is insufficient evidence for a universal articulated-graph validator, skeleton representation or deformation runtime.

Do **not** create or promote a Profession Fabric rigging/deformation body yet. Profession Fabric's active 3D game-asset body remains EXPERIMENTAL and is grounded primarily in one hard-surface Wreckline family. A profession body should encode repeated craft behavior, not one fresh repair lesson.

### Promotion trigger

Reconsider horizontal placement only after both conditions exist:

1. the current quadruped repair survives exact structural evidence **and** Visual Observer full-chain review; and
2. a second materially different deformable context — preferably character work, or another genuinely articulated domain — independently exposes the same parent -> descendant propagation/evidence need.

If that repetition occurs, split the reusable learning carefully:

- **Profession Fabric candidate:** craft procedure/evidence discipline for checking complete articulated subtrees, if repeated specialist work supports it;
- **Universal Creation candidate:** only a domain-neutral executable graph/pose-validation primitive, if multiple domains truly share the same wire contract and evidence semantics;
- **domain repositories:** anatomy, region naming, hierarchy intent, bend limits and source-specific policy stay with the source owner.

## Wider candidate lesson — not promoted

Several current studio lanes now independently warn against evidence inheritance:

- a child-region deformation PASS did not imply complete articulated-chain continuity;
- Technical Art found that the same `axm.surface-3d/v0.1` label did not imply wire compatibility across repositories;
- Environment's proxy PASS explicitly does not transfer to real replacement assets;
- the donor protocol already says donor PASS does not transfer automatically to a receiving context.

This suggests a possible broader studio principle: **promotion requires dependency closure at the scope of the claim, not merely local PASSes of its ingredients.**

That is recorded here as a coordination learning only. It is **not** being added as another campaign rule or executable framework because the campaign already contains provenance/retest/non-transfer safeguards, and duplicating them now would create governance churn rather than new capability.

## Truth boundary / non-claims

This map does not establish:

- biological/anatomical correctness;
- production skeleton or skin-weight quality;
- volume preservation, self-intersection freedom or natural joint deformation;
- animation/gait/locomotion quality;
- exported rig or target-runtime readiness;
- that every deformable system must use the animal-design region model;
- that UC needs a rigging organ;
- that Profession Fabric needs or has earned a mature rigging profession;
- CANON, merge authority, production readiness or mastery.

## Root gate

- **Truth:** the structurally passing local probe and visually failing complete chain remain simultaneously recorded; neither overwrites the other's scope.
- **Agency / non-domination:** no shared repository absorbs animal-specific hierarchy or semantics merely because a reusable lesson may exist.
- **Continuity:** repair is directed back to the same source/rig lane with exact heads and failing evidence preserved; no parallel replacement lane is proposed.
- **Wisdom before speed:** one concrete dependency is closed before creating a universal rig framework or new profession from insufficient repetition.

## Handoffs

- **Rigging & Deformation:** repair PR #2 / its direct successor around complete downstream articulated-subtree propagation. Preserve the current failing Visual Observer evidence as the before-state.
- **Visual Observer / QA:** after repair, rerun the exact front/hind -60° / 0° / +60° comparisons; only then move on to pinching/volume review.
- **3D Animation & Motion:** keep quadruped motion on HOLD until the same repaired chain receives visual continuity evidence. Mechanical Wreckline motion remains independent.
- **Organic Form:** do not reshape neutral geometry merely to hide a transform-scope failure unless later deformation evidence specifically implicates the source form.
- **Technical Art / UC Integration:** keep the current animal -> UC bridge static. Treat skeleton/weights/animation export as a separate future contract after local chain continuity is repaired.
- **Universal Creation:** no change requested now. Reconsider only after a second domain demonstrates the same domain-neutral articulated dependency.
- **Profession Fabric:** no promotion requested. If repeated rig/deformation tasks emerge across domains, use this failure/repair pair as evidence when deciding whether a dedicated body is justified.

## Next Cartographer pass

First check whether Rigging repaired the exact quadruped chain and whether Visual Observer re-ran the same representative poses. If the repair survives, look for the first second-domain repetition before proposing any horizontal move. If no second domain exists, keep the lesson local and map the next material cross-repo dependency instead of manufacturing reuse.