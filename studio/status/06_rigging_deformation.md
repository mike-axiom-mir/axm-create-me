# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_ANIMAL_BILATERAL_SOURCE_SUCCESSOR_RIGGING_DENSE_SWEEPS / PASS_EXACT_MIRRORED_VERTEX_DEFORMATION / HOLD_EXACT_MIRRORED_SURFACE_METRICS / ANIMATION + VISUAL + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, current specialist status and newest design-repository lanes before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation is in `mike-axiom-mir/axm-animal-design`; this file records scope, identities, evidence, failures, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Character PR #12 result at `329c485f567faeeb79198c7b1ebc2974b3c3db60` remains exact historical truth for its stitch-edge topology and is not rewritten by this Animal activation.

## Constellation / duplication scan

The strongest fresh Rigging dependency was Animal Geometry PR #11, not another Character iteration.

- **Animal:** Organic PR #8 source-owned the bilateral selected-003 elbow successors. Geometry PR #11 then explicitly rebound both successors and held the new right deforming surface for a fresh Rigging rebind rather than allowing the historical left Rigging PASS to transfer by symmetry.
- **Character:** no newer exact Geometry/source identity displaced the already-completed stitch-edge Rigging rebind.
- **Object:** current Hard-Surface changes preserve the existing host/articulation identity and do not create a stronger unowned Rigging dependency.
- **Weapon / Armor / Unit / Building / Nature / Weather / Map / Misc:** no stronger implementation-ready Rigging handoff was found in the newest claimed work.
- **Universal Creation / Profession Fabric:** no Animal-specific rig/source semantics were centralized for convenience.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Draft stacked PR:

**#12 — `Rigging: bind bilateral elbow successors to exact deformation evidence`**

Branch: `studio/rigging-bilateral-source-successor-rebind-001`

Base: Geometry PR #11 exact head **`f89af95d621c36da3994c6660552da8bbc73fd1b`**

Exact current Rigging head: **`94bc573e2e06ba7a35c9908c141e2f939d4739a8`**

Observed repository state after final evidence publication: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only; it is not merge/CANON authority.

## Why this was highest leverage

Historical Animal Rigging PR #10 directly proved only the left source-successor surface. Organic and Geometry now own a distinct right selected-003 successor. Although Organic proves that the right vertex field is an exact `Y=0` mirror of the left source form, transferring deformation acceptance by symmetry would still be an unverified claim because face/surface membership can affect strain metrics.

The smallest truthful Rigging action was therefore to reuse the exact existing rig and weighting profile, bind them to both exact Geometry successors, rerun both sides directly through the same bounded envelope, and compare the posed vertex fields and surface deformation evidence without changing source, topology, weighting or motion semantics.

## Exact source / rig identity preserved

No new rig, joint, source form, weighting rule or pose semantics were authored.

Pinned lineage:

- bilateral Organic source head: `4df3024b4c459675422565501a46f622acf229a9`;
- bilateral Geometry head: `f89af95d621c36da3994c6660552da8bbc73fd1b`;
- historical left source-successor Rigging head: `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a`;
- exact rig-plan + weighting-profile **file donor**: `04760112deb81a8d145226fe7ee02923107c9916`;
- historical connected-weighting verification head: `5625c9f796a75e8b441458c51093e55519490611`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- baseline weighting: `smoothstep-v0`;
- refined weighting: `ease-out-power-0p75-v1`, exponent `0.75`;
- joints: `front-elbow-L` and `front-elbow-R`;
- exact axis on both source joints: `+Y` / `[0,1,0]`;
- exact influence radius: `0.11 m`;
- retained historical boundary: `-60 / 0 / +60°`.

Fail-closed controls reject exponent drift `0.75 -> 0.74`, right-joint axis / rig-plan drift and right source-successor profile drift.

## Bounded proof

Each side was directly tested under both exact weighting profiles at every integer angle from `-60°` through `+60°`:

- `121` poses per side/profile;
- `484` direct structural pose observations total;
- exact `16 fixed / 5 blended / 21 rigid` weight partition on both sides;
- maximum weight-sum error `0.0`;
- zero collapsed triangles across all sampled poses;
- zero sampled nonadjacent self-intersections across all sampled poses;
- maximum fixed-weight drift `0.0 m`;
- maximum rigid-radius drift `1.6653345369377348e-16 m`;
- neutral return retained.

Independent sweep extrema:

| Side / profile | Min area | Max area | Min edge | Max edge |
| --- | ---: | ---: | ---: | ---: |
| Left `smoothstep-v0` | `0.40468369813999194` | `1.2381588465715108` | `0.7776326371031861` | `1.2366381566471596` |
| Left `ease-out-power-0p75-v1` | `0.4705678532084195` | `1.2177284386821048` | `0.7820155764018331` | `1.216305580109172` |
| Right `smoothstep-v0` | `0.4174660081380639` | `1.2391864715891083` | `0.779386126254619` | `1.2366381566471596` |
| Right `ease-out-power-0p75-v1` | `0.4174660081380639` | `1.21869776832374` | `0.7798256033313999` | `1.216305580109172` |

Both left and right independently reconfirm:

**`PASS_WEIGHTING_REFINEMENT_RECONFIRMED_ON_BILATERAL_SUCCESSOR`**

The scoped Rigging result is:

**`PASS_BILATERAL_SOURCE_SUCCESSOR_RIGGING_REBIND_DENSE_SWEEPS__HOLD_EXACT_SURFACE_METRIC_MIRROR`**

## Exact mirror result: vertex PASS, surface-metric HOLD

The fresh bilateral comparison found a useful distinction that was not safe to assume from source symmetry.

Across all 121 same-angle samples under both weight profiles:

- maximum mirrored posed-vertex residual: **`0.0 m`** baseline;
- maximum mirrored posed-vertex residual: **`0.0 m`** refined.

So the rig and weights produce exact mirrored vertex deformation under the pinned correspondence.

However, the accepted triangulated surfaces do **not** produce exact mirrored deformation extrema:

- baseline maximum structural-metric residual: **`0.03453888088415491`**;
- refined maximum structural-metric residual: **`0.05310184507035559`**.

Therefore the deliberately stricter raw combined gate remains:

**`FAIL_BILATERAL_SOURCE_SUCCESSOR_RIGGING_REBIND_DENSE_SWEEP`**

That raw failure is not hidden or rewritten. Rigging accepts only the directly proven per-side dense sweeps and exact mirrored vertex deformation. Exact mirrored triangulated surface-strain equivalence remains a **Geometry / Topology HOLD**.

No source shape, weighting or rig parameter was changed to make the metric mismatch disappear.

## CI / retained failures / repair

The first dedicated run failed because the evidence workflow incorrectly treated historical verification head `5625c9f...` as the location of the weighting-profile file. The actual exact plan/profile file donor is `04760112...`. The provenance record and checkout path were repaired without changing the plan/profile digests or deformation semantics.

A later diagnostic run then correctly exposed the real mirror surface-metric mismatch. Rather than weakening the evidence or calling the strict mirror gate green, the final evidence contract records a scoped Rigging PASS plus explicit Geometry HOLD.

Final exact-head workflow:

**`35147341308 — Rigging bilateral source-successor rebind evidence` — SUCCESS**

- Python 3.11: exact lineage checkout, compile, inherited 41-test suite, bilateral evidence build and artifact upload PASS.
- Python 3.13: exact lineage checkout, compile and inherited 41-test suite PASS.
- all inherited workflows observed on the exact head are green.

The earlier provenance/setup failure and diagnostic strict-gate failure remain historical Actions evidence.

## Retained artifact

- artifact ID: **`10466713873`**;
- name: `animal-rigging-bilateral-source-successor-rebind-001-evidence`;
- size: **`42,698 B`**;
- exact head: `94bc573e2e06ba7a35c9908c141e2f939d4739a8`;
- GitHub SHA-256: **`a7792689a6ccc0e9f1c98c48558b886913af5912cc9214915d6b59037471502e`**;
- independently downloaded and rehashed in this activation: **same SHA-256**;
- retained archive: `30` files, including `20` representative OBJ specimens covering both sides, both profiles and `-60/-30/0/+30/+60°`, plus machine-readable receipts and exact plan/profile lineage.

## Handoffs recorded

### Rigging PR #12

Evidence comment **`5704142668`** records exact head, 484-pose result, per-side metrics, strict mirror HOLD, exact artifact identity, fail-closed controls and the retained provenance-repair history.

### Geometry PR #11

Handoff comment **`5704144263`** records that posed vertices mirror exactly while triangulated surface deformation extrema do not. Geometry owns the decision whether exact mirrored face/surface deformation correspondence is required; no blind topology change is requested.

### Animation PR #5

Handoff comment **`5704145780`** records that the new right source-successor now has direct Rigging deformation evidence, while Animation must still explicitly bind and rerun its own clip/playback evidence. No Animation acceptance transfers from Rigging.

### Historical Rigging PR #10

Continuity comment **`5704147001`** preserves the historical left-only result as exact truth. The bilateral result extends scope and exposes a new topology surface-metric fact; it does not retroactively invalidate the old left PASS.

### Visual Observer / Art Direction

The retained structural evidence is a review surface, not final silhouette, anatomy, volume, skin-slide or visual deformation acceptance.

### Technical Art / Runtime

No exported skeleton/skin, engine import, controller, target-host playback, FPS/memory or target-device acceptance is established.

## Truth boundary / explicit non-claims

This activation proves only that the exact historical Animal rig and weighting identities can be explicitly applied to both exact selected-003 source successors and remain structurally valid across the tested **discrete one-degree** `-60..+60°` envelope, with exact mirrored posed vertex fields.

It does **not** establish:

- mathematical continuous safety for every real-valued intermediate angle;
- exact mirrored triangulated surface-strain equivalence;
- anatomy, muscle behavior, volume preservation, skin sliding or production skin quality;
- final visual deformation quality;
- Animation timing, interpolation, clip, playback or motion acceptance;
- exported skeleton/skin or engine/controller support;
- runtime/target-device playback or performance;
- gameplay acceptance;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the historical left PASS was not transferred to the new right surface by symmetry; both sides were rerun directly, and the discovered surface-metric mismatch remains visible.
- **Agency / non-domination:** Organic keeps source-form authority, Geometry keeps topology/surface authority, Visual QA / Art Direction keep perceptual authority, Animation keeps motion authority, and Technical Art / Runtime keep engine/playback authority.
- **Continuity:** Organic PR #8, Geometry PR #11, historical Rigging PR #10 and bilateral Rigging PR #12 remain distinct exact evidence/rollback points. Earlier failed runs are retained rather than rewritten.
- **Wisdom before speed:** the existing exact rig/profile was reused and measured before inventing new weighting, reshaping source form or centralizing Animal semantics into UC.

## Previous Rigging lanes retained

- **Character PR #12:** `329c485f567faeeb79198c7b1ebc2974b3c3db60`, stitch-edge shoulder rebind remains historical truth for its exact Character topology.
- **Animal PR #10:** `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a`, left source-successor elbow rebind remains historical truth.
- **Character PR #10:** `e5b129ba936f252946f48921be5a3096d8c2f801`, diagonal-repair rebind remains historical truth.
- **Character PR #8:** `ef73f87e0ebe4ce101b2fe25a92441ada7837b83`, opening-repair rebind remains historical truth.
- **Character PR #6:** `62a60ee6b930d13898203d37b0cc9dab6b13d99d`, angle-conditioned profile source remains preserved.
- **Object Rigging:** mechanical articulation/source-authority evidence remains separate; no semantics transfer automatically to Animal.

## Next Rigging & Deformation pass

1. Re-scan the full constellation; do not automatically continue Animal.
2. If Geometry changes the Animal bilateral topology identity, preserve PR #12 and explicitly rebind rather than assuming equivalence.
3. If Geometry resolves or intentionally accepts the exact mirrored surface-metric HOLD, consume that exact identity on a later Rigging pass rather than editing topology from Rigging.
4. If Animation consumes the new right deforming surface, require its own exact-head clip/playback rebind before any motion claim.
5. If Visual Observer / Art Direction identifies one precise deformation defect on retained poses, alter only the smallest Rigging-owned variable with this exact evidence retained as control.
6. Keep continuous-motion proof, visual quality, runtime/controller behavior, gameplay, CANON and mastery as independent gates.
