# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CONNECTED_TOPOLOGY_WEIGHTING_REFINEMENT / EXACT ANIMAL PR6 + PR2 WEIGHTING DONOR IDENTITIES PINNED / -60-0-+60 DEG STRUCTURAL A-B GREEN / VISUAL ADOPTION + ANIMATION + RUNTIME HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the previous Rigging status and current specialist/design-repository state before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation in this activation is confined to `mike-axiom-mir/axm-animal-design`; this file is only the coordination/status update.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Object result remains preserved in Git history and Object PR #23. It was not rewritten or generalized in this activation.

## Fresh constellation / duplication scan

- **Character:** Organic source migration is now real at exact Character head `20f6413f1b09e32cb3667ccd01f266cd849d8e93`, but the `studio/geometry-character-connected-shoulder-001` branch still points at that same source-migration commit. No distinct connected shoulder topology identity exists yet, so Rigging correctly remains held there rather than weighting the disconnected proof surface.
- **Animal:** Rigging PR #6 is the existing connected-forelimb deformation lane. It was already green on the exact Geometry PR #4 connected candidate but explicitly held whether Rigging PR #2's `ease-out-power-0p75-v1` candidate remained beneficial on connected topology. Geometry PR #7 and Organic PR #8 are separate active shape/topology candidates and were not duplicated or consumed.
- **Object:** previous lid, module-clearance, source-latch and target-latch Rigging lanes already occupy the obvious current mechanical articulation gaps. No second Object lane was opened.
- **Weapon / Armor / Unit / Misc / Building / Nature / Weather / Map:** no stronger accepted source-owned weighting/constraint handoff displaced the Animal matrix gap. Existing work remains in its owning specialist lanes.
- **UC / Profession Fabric:** no generic weighting rule is justified from one animal source. No animal rig semantics were moved into UC or Profession Fabric.

## Selected bounded improvement

Repository:

`mike-axiom-mir/axm-animal-design`

Existing draft PR advanced rather than duplicated:

**#6 — `Rigging: prove connected forelimb deformation and weighting refinement`**

Branch:

`studio/rigging-connected-forelimb-deformation-001`

Exact current head:

**`5625c9f796a75e8b441458c51093e55519490611`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**.

Green CI or mergeability is evidence metadata only, not merge/CANON authority.

## Exact identities preserved

Connected Geometry identity:

- source Geometry PR #4 head: `feb4b24cd36bcc879173138d240754f71db34834`;
- connected candidate ID: `front-left-connected-chain-001`;
- connected candidate digest: `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- previous connected Rigging evidence head retained in ancestry: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`.

Exact source Rigging donor:

- Rigging PR #2 donor head: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- joint: `front-elbow-L`;
- axis: `+Y`;
- influence radius: `0.11 m`;
- representative poses: `-60 / 0 / +60°`.

Exact historical weighting profile reused, not reinvented:

- profile: `quadruped-weighting-refinement-001`;
- profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- baseline: `smoothstep-v0`;
- candidate: `ease-out-power-0p75-v1`;
- candidate exponent: `0.75`.

The fixed/blended/rigid vertex partition stays exactly `16 / 5 / 21`. The new comparison changes only child-weight falloff.

## Representative-pose result

Scoped result:

**`PASS_CONNECTED_TOPOLOGY_WEIGHTING_REFINEMENT`**.

At `-60°`:

- minimum triangle-area ratio: `0.404056348 -> 0.470061418` (`+0.066005070`);
- minimum edge-length ratio: `0.773457548 -> 0.791731010` (`+0.018273462`);
- maximum triangle-area ratio: unchanged at `1.208077659`;
- maximum edge-length ratio: unchanged at `1.210299453`;
- sampled non-neighbour self-intersections: `0 -> 0`;
- maximum baseline→candidate vertex delta: `0.008579573965 m`.

At `0°`:

- candidate and baseline are neutral-identical in the retained positions;
- all retained area/edge ratios are `1.0`;
- sampled non-neighbour self-intersections remain `0`;
- maximum baseline→candidate vertex delta: `0.0 m`.

At `+60°`:

- maximum triangle-area ratio: `1.241793395 -> 1.220796683` (maximum reduced by `0.020996712`);
- maximum edge-length ratio: `1.240197116 -> 1.219304492` (maximum reduced by `0.020892624`);
- minimum triangle-area ratio: unchanged at `0.499954815`;
- minimum edge-length ratio: unchanged at `0.778085958`;
- sampled non-neighbour self-intersections: `0 -> 0`;
- maximum baseline→candidate vertex delta: `0.008579574245 m`.

The gate is deliberately conservative: every nonzero pose must be non-worse on all four retained area/edge extremes and strictly improve at least one, while the candidate itself must retain the existing structural PASS invariants. Both nonzero poses satisfy that gate.

## Evidence / CI

Exact-head workflow family:

- `35102159607 — Connected topology weighting refinement evidence`: **SUCCESS** on Python 3.11 and 3.13;
- `35102159517 — Tests`: **SUCCESS**;
- `35102159525 — Connected forelimb deformation evidence`: **SUCCESS**;
- `35102159627 — Connected chain self-intersection evidence`: **SUCCESS**;
- `35102159661 — Connected chain topology evidence`: **SUCCESS**.

Retained dedicated artifact:

- ID: **`10448173105`**;
- name: `front-left-connected-chain-001-weighting-refinement-5625c9f796a75e8b441458c51093e55519490611`;
- size: **`9,446 bytes`**;
- archive SHA-256: **`eaefef163cfe102917af81a96ccf0a9692541dca57fd3673f94d69cd93d1657c`**;
- retained exact head: `5625c9f796a75e8b441458c51093e55519490611`.

The archive was downloaded during this activation and independently rehashed to the same SHA-256. Its receipt, exact head, source, donor rig plan, donor weighting profile and X/Z baseline-vs-candidate overlay were inspected directly.

The overlay confirms the expected bounded shape difference at `-60 / 0 / +60°`, but it is a wire structural aid only. It is **not** perceptual deformation-quality acceptance.

## Fail-closed repair history

Initial dedicated run `35102041446` failed. The implementation had correctly pinned the exact weighting profile to the digest of the full four-joint historical donor plan, but the new test fixture contained only the selected left-elbow joint and therefore produced a different plan/profile digest.

The repair **expanded the test fixture to the exact full donor plan**. It did not remove or weaken the identity check. The failed run remains Actions provenance.

The retained negative control changes candidate exponent `0.75 -> 0.74`; the verifier returns:

**`HOLD_WEIGHTING_PROFILE_IDENTITY_DRIFT`**.

No nearest profile, relaxed digest or fallback exponent is accepted.

## Handoffs

### Visual Observer / 3D Art Director

Review the exact retained connected-topology A/B before treating `ease-out-power-0p75-v1` as visually better or adopted. Numeric strain/extreme improvement is not a substitute for shaded/perspective judgment of pinching, volume, silhouette or anatomical plausibility.

### Animation PR #5

Comment handoff: `5698294158`.

Animation remains truthfully pinned to `smoothstep-v0`. It inherits none of this candidate automatically. If the candidate receives explicit visual/adoption approval, Animation should rebind and rerun its authored clip/playback evidence so only deformation changes.

### Geometry PR #7

Comment handoff: `5698296660`.

The PASS belongs to the exact Geometry PR #4 connected candidate. Geometry PR #7's ring-phase candidate inherits nothing by numerical similarity. If Geometry adopts an exact successor identity, Rigging should rerun the weighting comparison against that exact topology.

### Organic PR #8

Comment handoff: `5698298225`.

Organic elbow-relief geometry is a separate derived form and inherits none of this PASS. Do not silently combine the weighting and shape improvements; an adopted relief identity should return to Rigging for explicit deformation evidence.

### Character

Wait for a distinct connected shoulder topology identity. The Organic source migration alone is not enough to justify Character weighting.

### Technical Art / UC / Runtime

No transport, exported skeleton, runtime controller, engine playback or target-device acceptance transfers. No animal weighting ontology was promoted into UC.

## Truth boundary / non-claims

This activation establishes only:

> on the exact Geometry PR #4 connected left-forelimb candidate, the exact historical Rigging PR #2 `ease-out-power-0p75-v1` weight falloff is non-worse across the retained sampled area/edge extremes and strictly improves at least one structural extreme at each nonzero `-60/+60°` representative pose, while preserving neutral closure and zero sampled non-neighbour self-intersections.

It does **not** establish or authorize:

- continuous interpolation or continuous self-intersection freedom between samples;
- volume preservation, skin sliding, muscle behaviour or anatomical correctness;
- perceptual deformation quality, shaded/perspective acceptance or final Art Direction;
- adoption of the candidate weighting into canonical/source Rigging;
- adoption of Geometry PR #7 or Organic PR #8 candidates;
- Animation timing, clips, interpolation or locomotion quality;
- exported skeleton/weights/clips;
- engine/runtime/controller or target-device playback;
- gameplay/collision-system acceptance;
- performance acceptance;
- merge/CANON authority;
- production readiness or Rigging mastery.

## Four-root gate

- **Truth:** exact Geometry, Rigging donor and weighting-profile identities are pinned; a near exponent fails closed; the first failed run is preserved; numeric structural evidence is not relabelled as visual quality.
- **Agency / non-domination:** Rigging owns the deformation comparison only. Geometry, Organic, Animation, Technical Art, Runtime, Visual QA and Art Direction keep their own acceptance authority.
- **Continuity:** PR #6 was advanced rather than duplicated; predecessor `f4614ab...` remains in ancestry; PR #2 donor identities remain exact; active Geometry/Organic successors were not silently absorbed.
- **Wisdom before speed:** the smallest missing matrix cell was tested before inventing a new rig or broad UC abstraction; Character remains held for connected topology; candidate adoption remains separate from numeric success.

## Next Rigging & Deformation pass

1. Re-scan first; do not automatically extend Animal again.
2. If Character Geometry produces a distinct accepted connected shoulder identity, prioritize one bounded shoulder weighting/deformation probe.
3. If Geometry PR #7 or Organic PR #8 receives an explicit adoption identity, rerun the exact weighting comparison on that exact successor rather than assuming transfer.
4. If Visual Observer / Art Direction rejects the current weight profile perceptually, preserve this numeric PASS as historical evidence and repair only the named deformation defect.
5. Keep Animation, runtime/controller, gameplay, final visual acceptance, CANON and mastery as separate gates.
