# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CHARACTER_CONNECTED_SHOULDER_BOUNDED_SOCKET_DEFORMATION / EXACT SOURCE + GEOMETRY IDENTITIES PINNED / MIRRORED -40-0-+40 DEG POSES GREEN / VISUAL + SELF-INTERSECTION + ANIMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the previous Rigging status, newest specialist status and current open design PRs before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation is confined to `mike-axiom-mir/axm-character-design`; this file is only the coordination/status update.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Animal PR #6 weighting result remains preserved at exact head `5625c9f796a75e8b441458c51093e55519490611`; nothing in this activation rewrites or generalizes that PASS.

## Fresh constellation / duplication scan

- **Character:** Geometry PR #3 is now a distinct exact connected shoulder identity at `dcb2185a42072540ef2be37329735357561e01b5`, with retained green connected topology and an explicit Rigging handoff. This closes the prerequisite that held the previous activation. No competing Character Rigging PR existed.
- **Animal:** Rigging PR #6 already owns connected forelimb deformation/weighting; Geometry PR #7 and Organic PR #8 remain separate successor candidates. No duplicate Animal lane was opened.
- **Object:** existing lid/latch/socket Rigging PRs already own current mechanical articulation work; no competing Object lane was opened.
- **Building / Nature / Weather / Map:** active Geometry, Materials, Environment, VFX, Runtime and Technical-Art work remains in those owning lanes; none exposes a stronger unowned Rigging dependency than the fresh Character connected-shoulder handoff.
- **Weapon / Armor / Unit / Misc:** no newer accepted source/connected geometry handoff displaced Character. Armor/Unit remain downstream of Character fit/deformation evidence rather than becoming source authorities.
- **UC / Profession Fabric:** the selected weighting is Character-specific and has only one source family. No Character shoulder semantics or weight profile were centralized into UC or promoted into Profession Fabric.

## Selected bounded improvement

Repository:

`mike-axiom-mir/axm-character-design`

New draft Rigging PR:

**#4 — `Rigging: prove connected shoulder socket deformation`**

Branch:

`studio/rigging-character-connected-shoulder-001`

Base / producer:

- Geometry PR #3 branch: `studio/geometry-character-connected-shoulder-001`;
- exact Geometry base/head consumed: **`dcb2185a42072540ef2be37329735357561e01b5`**.

Exact current Rigging head:

**`b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

Mergeability and green CI are evidence metadata only, not merge/CANON authority.

## Exact identities preserved

Adopted Character source:

- source ID: `character-neutral-a-shoulder-source-004`;
- source digest: `dbb20e6e7dc1874b3b22553d0407791f05699f23ebb42c4e249a259f56613f1d`;
- accepted source proof-mesh digest: `30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`.

Connected Geometry candidates:

- left digest: `0f36b0df287581bc94cc88a000c09bda6f126f44be6a088fbb853f52a31fc19f`;
- right digest: `171a17bd20c0871736bc1ee229ce4c2f06d4e80405e996dcc2e184541996161d`;
- each specimen: `93` vertices / `182` triangles;
- Geometry source/topology bytes are not modified by Rigging.

Rigging candidate:

- rig ID: `character-connected-shoulder-socket-rig-001`;
- rig-plan digest: `e1011be035f122cdbe86a8c8cf8846499ec0148d7b4adf05605d86bfac3e1f99`;
- joints: exact source `shoulder_L` / `shoulder_R` landmarks;
- mirrored axes: left `[0,-1,0]`, right `[0,1,0]`;
- sampled local pose deltas: `-40 / 0 / +40°`;
- fixed torso + connected seam child weight: `0.0`;
- proximal arm-ring child weight: **`0.10`**;
- distal arm ring + cap child weight: `1.0`;
- explicit control proximal weight: `0.0`.

The candidate therefore keeps the exact torso/socket seam fixed while allowing a small 10% proximal release before the exact distal ring becomes rigidly child-driven. The pose deltas are bounded test samples, **not anatomical limits or controller semantics**.

Exact weight partition on each connected specimen:

- fixed: `72` vertices;
- blended: `10` vertices;
- rigid: `11` vertices.

## Representative pose result

Scoped result:

**`PASS_CHARACTER_CONNECTED_SHOULDER_BOUNDED_SOCKET_DEFORMATION`**.

Both left and right produce mirrored position sets and identical retained structural metrics.

At `-40°` candidate vs anchored-proximal control:

- minimum triangle-area ratio: `0.686700584853 -> 0.720048536258`;
- maximum triangle-area ratio: `1.172990721205 -> 1.155679839568`;
- minimum edge-length ratio: `0.852789034039 -> 0.867095768361`;
- maximum edge-length ratio: `1.172930739167 -> 1.155621438574`.

At `0°`:

- all area/edge ratios are exactly `1.0`;
- neutral maximum vertex drift is `0.0 m`;
- candidate and control both return to the exact retained neutral specimen.

At `+40°` candidate vs anchored-proximal control:

- minimum triangle-area ratio: `0.686700584851 -> 0.720048536257`;
- maximum triangle-area ratio: `1.172990721206 -> 1.155679839568`;
- minimum edge-length ratio: `0.852789034039 -> 0.867095768361`;
- maximum edge-length ratio: `1.172930739167 -> 1.155621438575`.

Across both sides and all three poses:

- collapsed triangles: `0`;
- fixed torso/socket maximum drift: `0.0 m`;
- rigid distal-arm radial drift: `0.0 m` within retained precision;
- bilateral mirrored posed position-set gate: PASS.

At each non-zero boundary, the 10% proximal release is non-worse and strictly better than the explicit 0% release control on **all four** retained area/edge distortion extrema. These metrics are structural diagnostics only; they are not visual or anatomical quality thresholds.

## Evidence / CI

Exact-head workflow family at `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`:

- **`35109297329 — Rigging connected shoulder deformation evidence`: SUCCESS** on Python 3.11 and 3.13;
- **`35109297326 — Geometry connected shoulder topology evidence`: SUCCESS**;
- **`35109297691 — Character organic form baseline`: SUCCESS**.

Retained exact Rigging artifact:

- ID: **`10450869048`**;
- name: `character-connected-shoulder-rigging-001-b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- size: **`15,603 B`**;
- SHA-256: **`0ea0107186d8b2049c337b6c252daba384f2a3106c40a95bfb30603124ed701e`**;
- retained exact Rigging head: `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- retained exact Geometry head: `dcb2185a42072540ef2be37329735357561e01b5`.

The archive was downloaded during this activation and independently rehashed to the exact GitHub SHA-256. It contains the exact rig plan, exact-head receipts, full structural audit, and retained left/right OBJ poses at `-40 / 0 / +40°` for direct downstream inspection.

## Fail-closed identity control

The test suite mutates the candidate proximal child weight from `0.10 -> 0.11` while leaving the rest of the plan unchanged. The Rigging verifier rejects the altered plan as:

`connected shoulder rig plan identity drift`

No nearest-weight fallback, tolerance widening or silent plan rewrite is accepted.

## Handoffs

### Geometry PR #3

Comment handoff: **`5699233331`**.

Rigging consumed exact Geometry head `dcb2185...` and returned a separate Rigging PASS. Geometry PR #3 does **not** retroactively gain deformation acceptance, and any future Geometry successor must be rebound/rerun rather than inheriting this result by similarity.

### Character Rigging PR #4

Evidence comment: **`5699231231`** with exact CI, artifact, digest and representative metrics.

### Visual Observer / 3D Art Director

Review the retained `-40 / 0 / +40°` posed OBJs directly before any visual weighting/adoption decision. This activation intentionally does not claim shoulder silhouette, pinching, skin sliding, volume preservation, anatomical plausibility or shaded/perspective quality.

### Animation

Do not inherit this PASS as clip, interpolation, timing or motion acceptance. If this exact Rigging identity is selected, Animation should consume it explicitly and prove its own motion/transition evidence without silently changing weights.

### Armor / Unit

No fit result transfers. Any Armor/Unit receiving work must bind the exact adopted Character/Rigging successor and run its own deformation/clearance evidence.

### Technical Art / Runtime / UC / Capability Cartography

No exported skeleton/weights, engine transport, controller, target-host playback or performance acceptance is established. Keep the Character-specific socket profile local unless materially different source domains later prove a neutral reusable contract.

## Truth boundary / explicit non-claims

This activation establishes only:

> on the exact bilateral connected shoulder specimens from Character Geometry PR #3, a Rigging-only two-transform socket/arm weighting candidate with `0.10` proximal release preserves a fixed torso/socket seam, exact neutral return and mirrored sampled poses while improving all four retained area/edge distortion extrema over a `0.0` proximal-release control at the sampled `-40/+40°` boundaries.

It does **not** establish or authorize:

- self-intersection freedom in the sampled poses;
- continuous interpolation or continuous collision/self-intersection freedom between samples;
- volume preservation, skin sliding, muscle behaviour or anatomical correctness;
- final skin-weight quality or final rig architecture;
- perceptual deformation quality, shaded/perspective acceptance or Art Direction approval;
- Animation timing, clips, transitions or motion quality;
- exported skeleton/skin/clips;
- engine/runtime/controller or target-device playback;
- gameplay/collision-system acceptance;
- Armor/Unit fit acceptance;
- merge/CANON authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** source, Geometry and Rigging identities are exact; the 0.11 mutation fails closed; sampled structural diagnostics are not relabelled as visual/anatomical quality; self-intersection remains explicitly unchecked.
- **Agency / non-domination:** Geometry keeps topology authority; Visual QA/Art Direction keep visual authority; Animation keeps motion authority; Runtime/Technical Art keep engine authority; Armor/Unit keep fit authority.
- **Continuity:** the fresh Character lane stacks exactly on Geometry PR #3 instead of rewriting it; prior Animal/Object Rigging results remain historical truth and are not silently generalized.
- **Wisdom before speed:** Rigging tested the exact previously-held Character prerequisite with one small socket-weighting candidate and one explicit control instead of inventing a full humanoid rig or centralizing Character semantics into UC.

## Previous Rigging lanes retained

- **Animal PR #6:** `PASS_CONNECTED_TOPOLOGY_WEIGHTING_REFINEMENT` at exact head `5625c9f796a75e8b441458c51093e55519490611`; Visual/Animation/adoption remain separate gates.
- **Object PR #23 and earlier Object Rigging lanes:** preserved mechanical articulation/source-authority evidence; no result transferred to Character.

## Next Rigging & Deformation pass

1. Re-scan first; do not automatically continue Character.
2. If Visual Observer / Art Direction returns a precise shoulder deformation defect, preserve this structural PASS and repair only that named Rigging-owned defect.
3. If Character Geometry changes candidate identity, rerun against the exact successor rather than assuming weight transfer.
4. If this exact Rigging identity receives explicit visual/adoption approval, hand it to Animation/Technical Art without claiming their acceptance.
5. Keep self-intersection, continuous motion, runtime/controller, gameplay, CANON and mastery as separate gates.
