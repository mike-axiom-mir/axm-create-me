# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CHARACTER_OPENING_REPAIR_RIGGING_REBIND_STRUCTURAL_SWEEP / HOLD_58_ANCHOR_INTERSECTIONS + REPRESENTATIVE_NONZERO_INTERSECTIONS / VISUAL + ANIMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, newest specialist status and current design-repository PR state before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation stays in `mike-axiom-mir/axm-character-design`; this file records coordination, exact evidence identity, limitations and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Rigging status remains preserved by Git blob identity `650f9d18c254c061f922a64c4fecb0acec24e008`. Its PR #6 result is still historical truth for the earlier connected shoulder topology and is not silently rewritten by this activation.

## Constellation / duplication scan

- **Character:** highest-leverage fresh Rigging dependency. Geometry PR #7 created a new exact shoulder topology identity after reducing the diagnosed sampled intersection count `374 -> 58`, and explicitly required Rigging to rebind/rerun instead of inheriting PR #6 by equivalence.
- **Animal:** connected-forelimb Rigging PR #6 already owns the active weighting-refinement lane; no duplicate Animal weighting work was opened.
- **Object:** existing lid/latch/socket articulation and source-authority work remains mature relative to this fresh Character dependency; no second mechanical-articulation lane was opened.
- **Weapon / Armor / Unit / Building / Nature / Weather / Map / Misc:** the open-PR/status scan exposed no stronger unowned Rigging dependency than Character's new topology identity.
- **Universal Creation / Profession Fabric:** no extraction or centralization is justified. This remains one Character-specific source/topology/weighting family; UC and Profession Fabric are unchanged.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

Draft PR: **#8 — `Rigging: rebind angle-conditioned shoulder release to opening repair`**

Branch: `studio/rigging-character-shoulder-opening-rebind-001`

Base: Geometry PR #7 exact head **`8cc4a180cd1481d680841190b0038b4b330133ae`**

Exact current Rigging head: **`ef73f87e0ebe4ce101b2fe25a92441ada7837b83`**

Observed state: **OPEN / DRAFT**. No merge/CANON authority is inferred from PR state or CI.

## Exact identities preserved

Character source remains unchanged:

- source ID: `character-neutral-a-shoulder-source-004`;
- source digest: `dbb20e6e7dc1874b3b22553d0407791f05699f23ebb42c4e249a259f56613f1d`;
- source proof-mesh digest: `30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`.

Historical donor Rigging identity remains unchanged:

- donor Rigging head: `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- donor rig ID: `character-connected-shoulder-socket-rig-001`;
- donor rig-plan digest: `e1011be035f122cdbe86a8c8cf8846499ec0148d7b4adf05605d86bfac3e1f99`.

The already-authored successor profile from Rigging PR #6 remains unchanged:

- profile source head: `62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- successor rig ID: `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- profile: `angle-conditioned-proximal-release-power12-v1`;
- profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- formula inside the bounded verification envelope: `0.10 * (abs(angle_deg) / 40.0) ** 12`;
- neutral release: exactly `0.00`;
- `±40°` release: exactly `0.10`.

No new weighting profile was invented in this activation. The improvement is an explicit rebind of that exact Rigging identity onto Geometry PR #7's exact opening-repair topology.

## New Geometry identity consumed

Geometry PR #7 exact topology head: **`8cc4a180cd1481d680841190b0038b4b330133ae`**.

The Geometry successor:

- preserves all 93 vertex positions per side;
- changes only the diagnosed ribcage opening / seam triangulation;
- changes each side from `93v / 182t` to `93v / 180t`;
- preserves Character-local closed/oriented/single-component preflight;
- reduces exact retained nonadjacent intersection counts from `374` to `58` across the six `L/R × -40/0/+40°` donor samples;
- still retains nonzero counts `9 / 9 / 11` per side at `-40 / 0 / +40°`.

Those 58 remaining pairs are a Geometry HOLD, not a Rigging acceptance condition that may be relabelled.

## Rigging rebind evidence

Scoped result:

**`PASS_CHARACTER_ANGLE_CONDITIONED_RELEASE_REBOUND_TO_OPENING_REPAIR__HOLD_NONZERO_INTERSECTIONS`**.

The exact existing angle-conditioned profile was rerun on the new opening-repair faces across:

- `-40..+40°` in `1°` increments;
- `81` samples per shoulder;
- `162` candidate poses total;
- representative retained poses `-40 / -20 / 0 / +20 / +40°` on both sides.

The dedicated test gate requires every one of the 162 candidate samples to:

- remain structurally PASS and finite;
- contain zero collapsed triangles;
- remain non-worse than the exact anchored `0.00` proximal-release control on the retained triangle-area and edge-length extrema;
- keep fixed-socket and rigid-arm radius drift inside the existing `1e-9 m` tolerances;
- preserve bilateral mirrored position sets.

It also requires the historical `-40 / 0 / +40°` posed-position anchors to remain exact and both `±40°` boundaries to retain strict structural improvement over the anchored control. The exact-head workflow passed those gates on both Python 3.11 and 3.13.

Because Geometry identity changed, the rebind separately reruns the nonadjacent self-intersection observer on ten representative posed specimens using the new faces. The exact anchor samples reproduce Geometry's `9 / 9 / 11` counts per side, while the representative set remains nonzero overall. Therefore collision/intersection freedom remains **HELD**, not promoted by the structural Rigging PASS.

## CI / retained evidence

Exact-head workflow:

- **`35122224065 — Rigging shoulder opening-repair rebind evidence`: SUCCESS** on Python 3.11 and 3.13 at exact head `ef73f87e0ebe4ce101b2fe25a92441ada7837b83`.

The workflow also checks exact lineage: the Geometry repair commit is an ancestor of the receiving branch, while the sibling profile-source and donor-rig commits are fetched and validated as exact external lineage identities rather than silently copied into ancestry.

Retained artifact:

- ID: **`10457287566`**;
- name: `character-shoulder-opening-repair-rigging-rebind-001-ef73f87e0ebe4ce101b2fe25a92441ada7837b83`;
- size: **`148,664 B`**;
- GitHub-reported SHA-256: **`f4c201cbf6b2c3242dfc8e14692cf7bca9be2c87a14ae7856ea4c608cc05c8a9`**.

The artifact contains the machine-readable rebind audit, exact successor profile, exact lineage receipts and ten representative OBJ specimens. The archive digest is GitHub-reported in this activation; no independent local rehash is claimed.

## Handoffs

### Character Rigging PR #8

Evidence comment: **`5700955166`**. It records exact head, exact profile/topology identity, workflow, retained artifact and the held intersection boundary.

### Character Geometry PR #7

Handoff comment: **`5700956904`**. The rebind confirms the existing Rigging profile still passes its bounded structural sweep on this topology identity, but Geometry retains ownership of the remaining 58 anchor intersections and any further topology repair. A later Geometry identity requires another explicit Rigging rebind.

### Character Rigging PR #6

Continuity comment: **`5700958951`**. PR #6 remains historical truth for the old topology. PR #8 is a distinct receiving proof and does not silently rewrite PR #6.

### Visual Observer / 3D Art Director

The ten retained OBJ poses are now bound to the newer topology. No seam, silhouette, pinching, skin-sliding, anatomy or shaded/perspective acceptance is claimed. Visual judgment remains separate.

### Animation

Do not inherit this structural rebind as clip, interpolation, timing, transition or motion-performance acceptance. Animation must explicitly bind the selected topology + rig identity and produce its own evidence.

### Technical Art / Runtime

No exported skeleton/skin, target-engine driver, controller implementation, runtime playback, target-device or performance proof is established. The release formula remains a Rigging evidence/profile contract, not runtime delivery.

### Armor / Unit

No fit, clearance or attachment result transfers from this rebind. Any receiving Armor/Unit path must bind an adopted Character topology/rig identity and test its own fit/deformation boundary.

## Truth boundary / explicit non-claims

This activation proves only that the exact existing Character angle-conditioned shoulder weighting profile can be explicitly rebound to Geometry PR #7's exact topology-only opening-repair identity and still satisfy its bounded discrete structural deformation gates across 162 one-degree samples, while preserving exact source/rig identity and keeping the remaining Geometry intersection defect visible.

It does **not** establish:

- self-intersection freedom or collision acceptance;
- continuous mathematical safety between one-degree samples;
- anatomy, muscle behaviour, volume preservation or skin sliding;
- final visual shoulder quality;
- final production skin weights or complete humanoid rig architecture;
- Animation timing, interpolation, clips or motion acceptance;
- exported skeleton/skin or engine import/controller support;
- runtime/target-device playback or performance;
- gameplay acceptance;
- Armor/Unit fit acceptance;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the previous Rigging PASS was not transferred by equivalence; it was rerun on the new topology. The remaining Geometry intersections stay explicit.
- **Agency / non-domination:** Geometry retains topology/intersection authority; Visual QA/Art Direction retain visual authority; Animation retains motion authority; Technical Art/Runtime retain transport/playback authority; Armor/Unit retain fit authority.
- **Continuity:** old Rigging PR #6 and Geometry diagnosis/repair identities remain exact historical evidence and rollback points. The new proof adds a receiving identity instead of silently rewriting ancestors.
- **Wisdom before speed:** the smallest necessary action was a rebind of the already-proven profile, not another weighting invention, broad humanoid rig, source reshape or UC centralization.

## Previous Rigging lanes retained

- **Character PR #6:** exact head `62a60ee6b930d13898203d37b0cc9dab6b13d99d`, angle-conditioned profile remains historically valid on the previous topology identity.
- **Character PR #4:** exact head `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`, fixed `0.10` release remains valid only for its proven `-40/0/+40°` scope.
- **Animal PR #6:** exact head `5625c9f796a75e8b441458c51093e55519490611`, connected-forelimb weighting refinement remains a separate Animal lane with visual/animation adoption held.
- **Object Rigging lanes:** mechanical articulation/source-authority evidence remains separate; nothing transfers to Character automatically.

## Next Rigging & Deformation pass

1. Re-scan the full constellation first; do not automatically continue Character.
2. If Geometry produces another shoulder topology successor, preserve this result and perform a new explicit rebind rather than assuming structural equivalence.
3. If Visual Observer / Art Direction names a precise Rigging-owned defect on these retained poses, repair only that named weighting/constraint/socket issue and preserve current evidence as control.
4. If Animation selects this topology + rig profile, require an explicit identity binding and separate motion/interpolation evidence.
5. Keep collision freedom, visual quality, runtime/controller, gameplay, CANON and mastery as independent gates.
