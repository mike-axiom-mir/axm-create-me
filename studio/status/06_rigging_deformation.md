# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CHARACTER_STITCH_EDGE_RIGGING_REBIND_DENSE_SWEEP / EXACT_POSE_FIELD_CONTINUITY / GEOMETRY INTERSECTIONS HELD / VISUAL + ANIMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, current specialist status, newest design-repository work and open specialist lanes before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation stays in the owning design repository, `mike-axiom-mir/axm-character-design`; this file records scope, identities, evidence, failures, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Animal result remains preserved as historical truth: Animal Rigging PR #10 exact head `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a` remains the exact source-successor elbow proof and is not rewritten by this Character activation.

## Constellation / duplication scan

The strongest fresh Rigging dependency was Character Geometry PR #11, not another Animal or Object iteration.

- **Character:** Geometry PR #11 (`Geometry: reduce remaining shoulder intersections with stitch-edge retessellation`) created a distinct topology identity at exact head `b65d73e514c23670204915bde8ce935a3b417574`, stacked on prior Rigging PR #10. It changes exactly four triangle records while moving no vertices and explicitly requires a fresh Rigging rebind before deformation evidence can transfer.
- **Animal:** the prior source-successor Rigging rebind is already green and handed to Animation; no new Animal source/Geometry identity displaced the Character dependency.
- **Object:** current mechanical / Hard-Surface work does not supersede the existing articulation ownership with a stronger unowned Rigging dependency.
- **Building / Nature / Weather / Map / Weapon / Armor / Unit / Misc:** newest work is primarily Geometry, Materials, VFX, Runtime, Hard-Surface or source-owned; no stronger implementation-ready Rigging handoff was found.
- **Universal Creation / Profession Fabric:** unchanged. No Character-specific shoulder rig, weighting or source semantics were centralized for convenience.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

New draft stacked PR:

**#12 — `Rigging: rebind shoulder release to stitch-edge repair`**

Branch: `studio/rigging-character-shoulder-stitch-rebind-001`

Base: Geometry PR #11 exact head **`b65d73e514c23670204915bde8ce935a3b417574`**

Exact current Rigging head: **`329c485f567faeeb79198c7b1ebc2974b3c3db60`**

Observed repository state after evidence publication: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only; it is not merge/CANON authority.

## Why this was highest leverage

Geometry PR #11 keeps the exact Character shoulder vertex positions and prior Rigging pose field but changes face membership in the `ribcage_to_seam` stitch. That means the old posed positions can remain identical while triangle/edge deformation metrics change. Silently inheriting PR #10 would therefore be false even though no vertex moved.

The smallest truthful Rigging action was to preserve the existing rig/profile unchanged, bind it to the exact new topology, rerun the entire retained motion envelope, require exact pose-field continuity and recompute structural deformation metrics against the new face membership.

## Exact source / rig identity preserved

No new rig, weighting rule, joint, source form or pose semantics were authored.

Preserved exact identities:

- previous Rigging rebind head: `e5b129ba936f252946f48921be5a3096d8c2f801`;
- profile-source head: `62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- successor rig ID: `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- profile: `angle-conditioned-proximal-release-power12-v1`;
- profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- donor rig-plan digest: `e1011be035f122cdbe86a8c8cf8846499ec0148d7b4adf05605d86bfac3e1f99`;
- bounded release formula: `0.10 * (abs(angle_deg) / 40.0) ** 12`;
- neutral release: exactly `0.00`;
- `±40°` release: exactly `0.10`.

Character source identity and Geometry PR #11 topology identity are fail-closed dependencies in the evidence contract. No source or Geometry bytes are rewritten.

## Bounded proof

New Character-local evidence contract: `axm.character-stitch-edge-rigging-rebind/v0.1`.

Exact result:

**`PASS_CHARACTER_ANGLE_CONDITIONED_RELEASE_REBOUND_TO_STITCH_EDGE_REPAIR__HOLD_NONZERO_INTERSECTIONS`**

The exact `-40..+40°` one-degree envelope is rerun on both shoulders:

- `81` candidate poses per side;
- `162` total candidate poses;
- all samples finite and noncollapsed;
- all samples non-worse than the exact anchored proximal control;
- bilateral mirrored position sets retained;
- historical `-40 / 0 / +40°` position anchors retained;
- strict structural improvement at both `±40°` boundaries retained;
- all **162 / 162** posed vertex-position sets exactly match the previous Rigging PR #10 field;
- maximum fixed-socket drift: `5.900916318210353e-16 m`;
- maximum rigid-arm-radius drift: `1.6653345369377348e-16 m`.

Sweep-wide retained extrema:

- minimum triangle-area ratio: `0.7200485362566525`;
- maximum triangle-area ratio: `1.156509055609943`;
- minimum edge-length ratio: `0.8655925372711806`;
- maximum edge-length ratio: `1.1564517313638576`.

Exact pose-field identity does not erase the topology change: these deformation metrics were recomputed against Geometry PR #11's new face membership rather than copied from PR #10.

## Geometry HOLD remains explicit

Ten direct representative nonadjacent self-intersection observations were rerun on `L/R × -40/-20/0/+20/+40°`.

Per side the exact pair counts are:

- `-40°`: `6`;
- `-20°`: `6`;
- `0°`: `6`;
- `+20°`: `6`;
- `+40°`: `10`.

Representative total: **`68` nonadjacent intersection pairs**.

Geometry PR #11's full dense topology observation remains `1020` pairs across the 162-pose field, reduced from `1320`, with `150/162` samples strictly reduced, `12/162` equal and `0/162` worse. Every tested Geometry successor pose is still nonzero.

Therefore self-intersection / collision freedom remains a **Geometry HOLD**, not a Rigging PASS.

## CI / retained failure / repair

First dedicated workflow run:

**`35140462548` — retained FAILURE at lineage binding**

The full Character test suite and the new evidence build were already green, including the scoped PASS and representative count `68`, but the workflow incorrectly required historical profile-source head `62a60ee6...` to be a Git ancestor of the current Geometry stack. Git comparison showed the historical profile lane is intentionally divergent.

The repair did not weaken content identity or alter rig/topology semantics:

- exact Geometry PR #11 ancestry remains required;
- exact previous Rigging PR #10 ancestry remains required;
- the named historical profile-source commit must exist;
- exact profile content remains fail-closed through pinned canonical profile digest `49e59bfd...`.

Final dedicated workflow:

**`35140836519 — Rigging Character shoulder stitch-edge rebind evidence` — SUCCESS**

- Python 3.11: checkout, compile, full Character suite, exact evidence build, repaired lineage binding and artifact upload PASS.
- Python 3.13: checkout, compile and full Character suite PASS.

The failed first run remains historical Actions evidence rather than being hidden or relabelled.

## Retained artifact

- artifact ID: **`10465725493`**;
- name: `character-shoulder-stitch-rigging-rebind-001-329c485f567faeeb79198c7b1ebc2974b3c3db60`;
- size: **`150,838 B`**;
- GitHub SHA-256: **`456cad545f9ec53765be1f9e7caa8477ef17b795665a8ffb8545f3d94522c1c1`**;
- exact head binding: `329c485f567faeeb79198c7b1ebc2974b3c3db60`;
- independently downloaded and rehashed in this activation: **same SHA-256**.

The archive retains exact lineage receipts, the rebind contract, exact successor rig profile, machine-readable audit and ten representative OBJ specimens.

## Handoffs recorded

### Rigging PR #12

Evidence comment **`5703399130`** records exact head, workflow, 162-pose result, nonzero-intersection HOLD, artifact digest and the retained lineage-repair history.

### Geometry PR #11

Handoff comment **`5703401024`** records that the exact existing rig/profile survives the four-face topology successor, while all remaining nonzero intersections stay Geometry-owned.

### Historical Rigging PR #10

Continuity comment **`5703402620`** preserves PR #10 as exact historical truth for Geometry PR #9. PR #12 is an explicit successor rebind, not a retroactive relabel.

### Animation

No current Character Animation acceptance is created here. Any Character clip/playback lane must explicitly bind its own evidence to this exact successor before claiming timing, interpolation, motion quality or playback acceptance.

### Visual Observer / Art Direction

Structural strain metrics and exact pose-field continuity are not visual seam, silhouette, volume, anatomy, skin-slide or deformation-quality acceptance. The retained OBJ poses are valid review surfaces only.

### Technical Art / Runtime

No exported skeleton/skin, engine import, controller, target-host playback, FPS/memory or target-device acceptance is established.

## Truth boundary / explicit non-claims

This activation proves only that the exact existing Character angle-conditioned shoulder rig/profile can be explicitly rebound to Geometry PR #11's exact four-face stitch-edge topology successor and remain structurally valid across the tested **discrete one-degree** `-40..+40°` envelope, while reproducing the previous posed vertex-position field exactly.

It does **not** establish:

- mathematical continuous safety for every real-valued intermediate angle;
- nonadjacent or adjacent self-intersection freedom;
- collision-system safety;
- anatomy, volume preservation, skin sliding or muscle behavior;
- final visual deformation quality or final production skin weights;
- Animation timing, interpolation, clip, playback or motion acceptance;
- exported skeleton/skin or engine/controller support;
- runtime/target-device playback or performance;
- gameplay or Armor/Unit fit acceptance;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the old Rigging PASS was not inherited across changed face membership; the exact new topology was rebound and directly re-measured, and the first lineage failure remains visible.
- **Agency / non-domination:** Geometry keeps topology/intersection authority, Visual QA / Art Direction keep perceptual authority, Animation keeps motion authority, and Technical Art / Runtime keep engine/playback authority.
- **Continuity:** Geometry PR #11, historical Rigging PR #10 and successor Rigging PR #12 remain distinct exact rollback/evidence points; no ancestor or prior result was rewritten.
- **Wisdom before speed:** the existing exact rig/profile was reused and tested before inventing another weighting rule, moving source form or centralizing Character semantics into UC.

## Previous Rigging lanes retained

- **Animal PR #10:** `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a`, exact source-successor elbow rebind remains historical truth.
- **Character PR #10:** `e5b129ba936f252946f48921be5a3096d8c2f801`, exact diagonal-repair rebind remains historical truth for Geometry PR #9.
- **Character PR #8:** `ef73f87e0ebe4ce101b2fe25a92441ada7837b83`, opening-repair rebind remains historical truth for its exact topology.
- **Character PR #6:** `62a60ee6b930d13898203d37b0cc9dab6b13d99d`, angle-conditioned profile source remains preserved as a divergent historical lane.
- **Object Rigging:** mechanical articulation/source-authority evidence remains separate; no semantics transfer automatically to Character.

## Next Rigging & Deformation pass

1. Re-scan the full constellation; do not automatically continue Character.
2. If Character Geometry identity changes again, preserve PR #12 and explicitly rebind rather than assuming equivalence.
3. If Visual Observer / Art Direction names one precise deformation defect on the retained PR #12 poses, alter only the smallest Rigging-owned variable with PR #12 retained as control.
4. If a Character Animation lane consumes this successor, keep Animation acceptance separate and require explicit exact-head binding.
5. Keep continuous-motion proof, visual quality, runtime/controller behavior, gameplay, CANON and mastery as independent gates.
