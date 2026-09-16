# 03 — Hard-Surface Specialist Status

## Current state

Evidence state: **PASS_STRUCTURAL_CANDIDATE / VISUAL_REBUILD_PENDING**.

The current lane is Wreckline-local and stacked on the existing Runtime / Optimization LOD proof. It does not claim 35 m visual acceptance, a rebuilt candidate GLB, candidate runtime performance, gameplay/controller acceptance, a shared Universal Creation abstraction, or hard-surface mastery.

## Constellation / coordination scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `03_hard_surface.md` role before selecting work.
- Re-scanned current specialist state and open constellation work rather than continuing the stale assumption that the design departments were empty.
- `axm-animal-design` now has active Organic Form, Rigging, Technical Art and Geometry / Topology lanes. The current quadruped visual-chain failure belongs to Rigging / Visual Observer, so Hard Surface did not enter that lane.
- `axm-map-design` has Environment and Procedural lanes; `axm-weather-design` has the bounded atmosphere lane. None of those are hard-surface source-model ownership gaps for this pass.
- No active source-owned weapon, armor, unit, building, object or misc hard-surface implementation lane surfaced in the fresh open-PR scan. Rather than inventing state in those departments, this pass followed the strongest grounded hard-surface handoff.
- Previous Hard Surface work in Universal Creation PR #134 (`static GLB attachment-frame evidence`) is now closed and unmerged. It was not silently revived, copied or treated as canon.
- A bounded same-category donor check of `Axm-game-assets` did not surface a directly reusable identity-preserving LOD method. That scan is evidence for this choice, not a claim that every AXM donor repository was exhaustively searched.

## Gap selected

The strongest current hard-surface handoff is the Hero Vehicle LOD1 visual hold in `axm-wreckline`.

Runtime PR #5 already established a useful far-LOD cost reduction in the same Godot proof context, while Art Direction independently held promotion of the proposed 35 m switch because the small on-screen vehicle lost two disproportionately important mechanical identity reads:

1. the cyan drivetrain/front-disc read becomes flatter because its dark internal star/spoke structure disappears;
2. the lateral wheel/mechanical silhouette becomes more generic.

Direct source inspection identified exact construction causes rather than guessing from the frame:

- `drivetrain_spec(..., lod1)` retains the cyan disc but removes all `compressor-blade` geometry behind `if not far`; LOD0 has eight dark spokes;
- `wheel_spec(..., lod1)` retains the tire/hub/spokes but removes all outer `tread` blocks behind `if not far`; LOD0 has twenty tread boxes per wheel.

This made a bounded identity-retention candidate higher leverage than restoring broad greeble density or starting a new mechanical catalog.

## Bounded improvement

Opened stacked draft **`axm-wreckline` PR #6 — `Hard Surface: retain bounded LOD1 identity anchors`**.

Branch:

`studio/hard-surface-lod-identity-001`

Exact Runtime dependency / PR base:

`c2e954989d4390cb9b7dd84886c9b87ed6176d95`

Exact Hard Surface head:

`e2a2191b122c3c6e98a6d273e6b1a73c398ab29b`

The source-owned candidate is intentionally smaller than LOD0:

- drivetrain LOD1 regains **6** sparse dark compressor spokes, versus LOD0's 8;
- each wheel LOD1 regains **8** sparse tread boxes, versus LOD0's 20;
- LOD0 delegates unchanged to the existing Wreckline geometry functions;
- every other LOD1 construction family is required to remain unchanged by the structural verifier.

Files added in Wreckline:

- `tools/hero_vehicle_lod_identity_candidate.py` — candidate hard-surface geometry only;
- `tools/build_hero_vehicle_identity_candidate.py` — executable wrapper that can rebuild the candidate through the existing Wreckline build path when the matching historical/provider-compatible UC closure is available;
- `tools/verify_hero_lod_identity_candidate.py` — structural evidence runner;
- `.github/workflows/hero-hard-surface-lod-identity.yml` — retained Python 3.11 / 3.13 evidence.

The existing Hero Vehicle source and Runtime lane were not rewritten.

## Structural evidence

Exact-head push run **35047718589** passed. The corresponding pull-request run **35047733134** also passed, and Wreckline's ordinary pull-request `tests` run **35047733137** passed on the same exact head.

The dedicated evidence matrix passed on both Python **3.11** and **3.13**. It executes the real Wreckline geometry recipe functions against an evidence-only recording builder and fails unless the change remains inside the two declared identity anchors.

Retained artifact:

- artifact ID: `10427558399`
- name: `hard-surface-lod-identity-e2a2191b122c3c6e98a6d273e6b1a73c398ab29b`
- archive SHA-256: `1495f586d2615ee5ff5598c9449e539bfb76b92114cf67d0170798b304ad457a`

The retained receipt reports **`PASS_STRUCTURAL_CANDIDATE`** with all checks true:

- baseline LOD1 compressor-blade construction calls: **0**;
- candidate LOD1 compressor-blade construction calls: **6**;
- all other drivetrain construction signatures: unchanged;
- baseline LOD1 tread face calls: **0**;
- candidate LOD1 tread construction: **8 boxes / 48 quad faces per wheel**;
- all other wheel construction signatures: unchanged;
- LOD0 drivetrain: unchanged by delegation;
- LOD0 wheel: unchanged by delegation.

The receipt is also bound to the checked-in exact vehicle baseline:

- LOD0 SHA-256 `7cf93c3dd80ab3952a6e8ce82accdd3c76bbc46a8aa631f642e108ceded2930e`, 21,358 instantiated triangles / 47,870 vertices;
- LOD1 SHA-256 `59fc4c0ead29f9e42ec6ff2e3998227e73d763f21743426d5225891f2e53dade`, 10,354 instantiated triangles / 23,604 vertices.

## Reusable learning candidate

A potentially reusable hard-surface lesson is emerging: **LOD reduction should protect a very small set of identity-bearing mechanical anchors rather than treating all detail as equal.**

For this vehicle, a flat colored disc and a smooth tire can preserve broad mass while losing the specific mechanical read that makes the asset identifiable. The candidate therefore retains a tiny iconographic/mechanical subset rather than restoring all high-detail geometry.

This remains a **candidate learning**, not a studio-wide rule. One vehicle is insufficient evidence for moving an `identity-preserving LOD` contract into Universal Creation or Profession Fabric. A second materially different hard-surface domain should expose the same failure pattern before horizontal extraction is considered.

## Truth boundary / non-claims

The current PASS establishes only that the declared Wreckline-local construction delta is bounded and structurally reproducible on the exact source branch.

It does **not** establish:

- that a candidate GLB has been rebuilt from this branch;
- that the six spokes or eight tread blocks are perceptually sufficient;
- Art Director / Visual Observer acceptance;
- acceptance of the 35 m LOD threshold;
- candidate draw-call, triangle, memory or frame-time cost;
- moving-camera transition quality or popping behavior;
- target-device or final/native Wreckline runtime performance;
- gameplay, physics, collision or controller behavior;
- a universal LOD recipe for weapons, armor, units, buildings, objects or misc assets;
- CANON, merge authority or hard-surface mastery.

The historical Runtime savings from PR #5 remain evidence for PR #5's original LOD1. They do not automatically transfer to this changed LOD1 candidate.

## Handoffs

- **3D Art Director / Visual Observer:** wait for an actual candidate GLB/render, then compare the same far camera and an object-relative crop against both LOD0 and the current LOD1. Structural PASS is not visual acceptance.
- **Runtime / Optimization:** if the candidate survives visual review, re-measure its actual draw calls, primitives/triangles, memory and the requested moving 33–37 m threshold crossing. Do not inherit PR #5's cost numbers automatically.
- **Technical Art / UC Integration:** the wrapper preserves the existing Wreckline build boundary, but the historical UC provider closure has not been re-established against current UC main. Rebuild by exact compatible provenance rather than silently substituting a newer provider contract.
- **Capability Cartographer:** track whether another materially different manufactured asset loses identity because a tiny mechanical cue is stripped by LOD. Only repeated evidence should trigger a shared capability-placement decision.
- **Runtime PR #5:** remains the explicit dependency/base; this Hard Surface lane does not take ownership of switch policy.

## Next Hard-Surface pass

First priority is evidence continuation on this same lane, not another abstraction: obtain a provider-compatible real GLB candidate from the exact Hard Surface head, measure the actual added geometry/cost, and render the same proof camera for Art Direction / Visual Observer. If the provider closure cannot be reproduced exactly, HOLD and report the missing provenance instead of claiming visual success.
