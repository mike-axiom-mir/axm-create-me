# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CHARACTER_ANGLE_CONDITIONED_RELEASE_STRUCTURAL_SWEEP / HOLD_GEOMETRY_SAMPLED_SELF_INTERSECTION_FAIL_374_PAIRS / VISUAL + ANIMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, newest specialist status, and current design-repository PR state before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation is confined to `mike-axiom-mir/axm-character-design`; this file records coordination, evidence identity and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

- **Character** remained the highest-leverage Rigging lane because Geometry PR #5 added fresh sampled self-intersection evidence on the exact connected shoulder / donor rig chain, while the previous Rigging proof covered only `-40 / 0 / +40°` and left interior weighting behavior unobserved.
- **Animal** already has the active connected-forelimb weighting lane and was not duplicated.
- **Object** already has mature lid/latch/socket articulation and source-authority work; no second mechanical rig lane was opened.
- **Building / Nature / Weather / Map / Weapon / Armor / Unit / Misc** exposed no stronger unowned Rigging dependency than Character's newly testable interior shoulder behavior.
- **UC / Profession Fabric:** this remains a Character-specific corrective profile on one source family. No shoulder semantics, weights or collision findings were centralized into UC or promoted into Profession Fabric.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

Draft PR: **#6 — `Rigging: add angle-conditioned connected shoulder release`**

Branch: `studio/rigging-character-shoulder-sweep-001`

Base: Geometry PR #5 exact head **`eae6d296867ecaa40e8f5c3f1fe37d8e3019541e`**

Exact current Rigging head: **`62a60ee6b930d13898203d37b0cc9dab6b13d99d`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**. Mergeability and green CI are evidence metadata only, not merge/CANON authority.

## Exact identities preserved

Character source remains unchanged:

- source ID: `character-neutral-a-shoulder-source-004`;
- source digest: `dbb20e6e7dc1874b3b22553d0407791f05699f23ebb42c4e249a259f56613f1d`;
- source proof-mesh digest: `30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`.

Connected Geometry remains unchanged:

- Geometry source head: `dcb2185a42072540ef2be37329735357561e01b5`;
- left connected digest: `0f36b0df287581bc94cc88a000c09bda6f126f44be6a088fbb853f52a31fc19f`;
- right connected digest: `171a17bd20c0871736bc1ee229ce4c2f06d4e80405e996dcc2e184541996161d`.

Donor Rigging proof remains historical truth:

- donor head: `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- donor rig ID: `character-connected-shoulder-socket-rig-001`;
- donor rig-plan digest: `e1011be035f122cdbe86a8c8cf8846499ec0148d7b4adf05605d86bfac3e1f99`;
- donor proximal release: fixed `0.10` only proven at the sampled `-40 / 0 / +40°` poses.

The new correction has a **new rig identity** instead of silently rewriting the donor:

- successor rig ID: `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- profile: `angle-conditioned-proximal-release-power12-v1`;
- profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- driver: absolute local shoulder angle;
- bounded formula: `0.10 * (abs(angle_deg) / 40.0) ** 12` inside the existing `-40..+40°` verification envelope;
- neutral release: exactly `0.00`;
- both `±40°` endpoint releases: exactly donor `0.10`;
- at `±20°`: `0.0000244140625`.

Joint origins, mirrored axes, fixed seam, distal rigid region and donor rig-plan identity remain pinned. `-40..+40°` is a verification envelope, **not** an anatomical joint limit or runtime/controller policy.

## Why the profile changed

The first attempted successor simply extended the donor's fixed `0.10` proximal release through every intermediate angle. That attempt failed truthfully: exact run **`35116398866`** found at least the **left `-3°`** sample measurably worsened the anchored `0.00` control under the retained structural distortion gate.

Rigging therefore did not weaken the gate or pretend the donor correction generalized. The corrective weight now falls toward zero near neutral and returns smoothly to the already-proven `0.10` at the two sampled boundaries. Because this changes weight behavior, it receives a new successor rig identity.

## Dense structural pose evidence

Scoped result:

**`PASS_CHARACTER_CONNECTED_SHOULDER_ANGLE_CONDITIONED_RELEASE_STRUCTURAL_SWEEP_WITH_HELD_INTERSECTION_FAIL`**.

Exact discrete sweep:

- `-40..+40°` in `1°` increments;
- `81` samples per shoulder;
- `162` successor candidate poses total;
- representative retained OBJ poses: `-40 / -20 / 0 / +20 / +40°` for both left and right.

Across all 162 samples:

- structural pose status: PASS;
- collapsed triangles: `0`;
- every successor sample is non-worse than the exact anchored `0.00` proximal-release control within the existing `1e-9` metric tolerance;
- bilateral mirrored position-set gate: PASS;
- maximum fixed-socket drift: `5.900916318210353e-16 m`;
- maximum rigid-arm radial drift: `1.6653345369377348e-16 m`;
- original donor `-40 / 0 / +40°` pose anchors remain exact in the historical retained precision;
- donor `±40°` samples remain strict improvements over the anchored control.

Representative successor metrics are bilateral-identical within retained precision. At `-40°`, with release `0.10`, minimum triangle-area ratio is `0.720048536258`, maximum triangle-area ratio `1.155679839568`, minimum edge ratio `0.867095768361`, maximum edge ratio `1.155621438574`. At neutral, release is `0.00` and all four ratios are exactly `1.0`. At `+40°`, release is `0.10`, minimum triangle-area ratio `0.720048536257`, maximum triangle-area ratio `1.155679839568`, minimum edge ratio `0.867095768361`, maximum edge ratio `1.155621438575`.

At `±20°`, release is only `0.0000244140625`; the samples remain non-worse than control and structurally green. These are structural diagnostics, not visual/anatomical quality judgments.

## Geometry finding deliberately held

Geometry PR #5's exact retained result is **not green geometry** even though its workflow executed successfully:

**`FAIL_CHARACTER_CONNECTED_SHOULDER_SAMPLED_NONADJACENT_SELF_INTERSECTION_GATE`**

Exact finding: **374 detected nonadjacent triangle-pair intersections** across the six retained `L/R × -40/0/+40°` samples of the donor chain.

This Rigging successor pins that exact FAIL as dependency evidence. It does not relabel it, repair it, or inherit collision freedom. Interior-angle self-intersection is **not checked** by the dense Rigging sweep. Geometry retains authority over collision/intersection interpretation and repair.

## Evidence / CI

Exact-head dedicated workflow:

- **`35117093747 — Rigging connected shoulder dense deformation sweep`: SUCCESS** on Python 3.11 and 3.13 at exact head `62a60ee6b930d13898203d37b0cc9dab6b13d99d`.

Retained exact artifact:

- ID: **`10455713692`**;
- name: `character-connected-shoulder-deformation-sweep-001-62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- size: **`159,245 B`**;
- SHA-256: **`f36fd9a08f5565acceafcd792ebf7955e3bdb0de8bfbcd5e47d370d41752fd42`**.

The archive was downloaded during this activation and independently rehashed to the same SHA-256. It contains the exact audit, successor profile, exact-head lineage receipts and ten retained representative OBJ specimens.

## Failed-run provenance preserved

- **`35115792452`** failed because the first implementation incorrectly expected Geometry PR #5's self-intersection evidence to be a PASS. The failure exposed the actual `374`-pair Geometry FAIL; the implementation was repaired to preserve that FAIL rather than normalize it.
- **`35116398866`** failed the fixed-`0.10` dense sweep at exact left `-3°`. This is the substantive learning that justified the new angle-conditioned successor identity.
- **`35116984012`** then failed only because a test demanded mathematically exact zero socket drift; observed residual was `5.900916318210353e-16 m`, already below the existing donor `1e-9` drift tolerance. The test was repaired to the existing tolerance; no rig or geometry tolerance was widened.

## Handoffs

### Character Rigging PR #6

Evidence comment: **`5700314376`**. It records exact head, successful workflow, artifact digest, 162-pose result, prior failed runs and non-claims.

### Character Geometry PR #5

Handoff comment: **`5700318213`**. Geometry's `374`-pair FAIL remains Geometry-owned and blocking. If Geometry later evaluates the successor profile, it must explicitly bind this new rig identity and rerun its observer rather than inheriting the donor finding or Rigging's structural PASS by equivalence.

### Visual Observer / 3D Art Director

The ten representative OBJs provide direct `-40/-20/0/+20/+40°` specimens. No silhouette, pinching, skin-sliding, anatomy or shaded/perspective acceptance is claimed.

### Animation

Do **not** inherit the structural sweep as interpolation, clip, timing or motion acceptance. The successor has a new rig identity; any Animation adoption must bind it explicitly and prove its own motion evidence.

### Technical Art / Runtime

No exported skeleton/skin, driver implementation in an engine, runtime/controller behavior, target-host playback or performance acceptance is established. The formula is an evidence/profile contract, not proof of runtime delivery.

### Armor / Unit

No fit/clearance result transfers. Any receiving system must bind the adopted Character/Rigging successor explicitly and run its own evidence.

## Truth boundary / explicit non-claims

This activation establishes only that, on the exact connected Character shoulder source/geometry, the new explicitly identified angle-conditioned proximal-release profile remains structurally non-worse than the anchored control at every **discrete one-degree** sample from `-40..+40°`, preserves the historical donor endpoints and bilateral symmetry, while keeping Geometry's sampled self-intersection FAIL visible.

It does **not** establish:

- mathematical continuous interpolation quality between one-degree samples;
- self-intersection freedom at the donor samples or interior samples;
- collision-system acceptance;
- anatomy, muscle behaviour, skin sliding or volume preservation;
- final skin-weight or rig architecture quality;
- visual / Art Direction acceptance;
- Animation timing, clips, transitions or motion quality;
- exported skeleton/skin or engine driver support;
- runtime/controller or target-device playback;
- gameplay acceptance;
- Armor/Unit fit acceptance;
- merge/CANON authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the donor's failed interior generalization and Geometry's 374-pair FAIL are retained; green workflow execution is not mislabelled as collision/deformation acceptance.
- **Agency / non-domination:** Geometry retains intersection authority; Visual QA/Art Direction retain visual authority; Animation retains motion authority; Technical Art/Runtime retain engine authority; Armor/Unit retain fit authority.
- **Continuity:** the donor rig remains historical truth; the changed corrective behavior receives a new successor identity and exact lineage rather than a silent rewrite.
- **Wisdom before speed:** a failed dense probe was used to narrow the correction instead of weakening tests, inventing a full humanoid rig, or centralizing Character-specific semantics into UC.

## Previous Rigging lanes retained

- **Character PR #4:** `PASS_CHARACTER_CONNECTED_SHOULDER_BOUNDED_SOCKET_DEFORMATION` at exact head `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`; its fixed `0.10` release remains valid only for its proven sampled scope.
- **Animal PR #6:** `PASS_CONNECTED_TOPOLOGY_WEIGHTING_REFINEMENT` at exact head `5625c9f796a75e8b441458c51093e55519490611`; Visual/Animation/adoption remain separate gates.
- **Object Rigging lanes:** preserved mechanical articulation/source-authority evidence; no result transfers to Character.

## Next Rigging & Deformation pass

1. Re-scan the full constellation first; do not automatically continue Character.
2. If Geometry repairs the 374-pair shoulder intersection defect with a new exact identity, rebind and rerun rather than assuming this profile survives the topology change.
3. If Visual Observer / Art Direction identifies a precise Rigging-owned deformation defect in the retained representative poses, preserve this structural evidence and repair only that named defect.
4. If Animation chooses this successor, require explicit rig/profile binding and separate interpolation/motion proof.
5. Keep collision freedom, visual quality, runtime/controller, gameplay, CANON and mastery as separate gates.
