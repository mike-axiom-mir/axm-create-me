# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: ACTIVE / PR OPEN / CI PARTIAL

## Bounded claim

The first useful cross-repo Materials / LookDev gap is not another material generator or a studio-wide texture policy. Universal Creation already has substantial procedural PBR/material transport machinery and retained Blender/Cycles evidence, while the first organic department proof is intentionally neutral-material pending form review. The missing reusable evidence surface was **actual exported UV scale versus actual embedded texture size**.

This activation therefore added a static GLB UV / texel-density evidence instrument to Universal Creation. It measures; it does not unwrap, repair, render, approve aesthetics, or choose a universal density target.

## Exact coordination state inspected

Read before work:
- `studio/3D_STUDIO_CAMPAIGN.md`
- `studio/specialists/05_materials_lookdev.md`
- current status from Art Direction, Geometry / Topology, Hard Surface and Organic Form
- current Universal Creation open PRs / active neighboring lanes
- Universal Creation material / geometry contracts and retained material evidence

Relevant neighboring lanes:
- UC #97 owns reusable vehicle material generation / embedded PBR-map transport / Wreckline material proof.
- UC #131 owns native visual runtime plus external visual-tool connectors; actual WebGL pixels remain explicitly unobserved there on its implementation host.
- UC #133 owns mesh topology diagnostics.
- UC #134 owns static rigid attachment-frame evidence.
- `axm-animal-design` #1 owns the first deterministic organic quadruped form proof and intentionally keeps its material neutral until form review.

Final semantic-overlap scan found no other open lane implementing UV / texel-density evidence. UC #135 is the only matching lane; adjacent material/render/topology/frame work remains separate.

## Grounded visual defect

Existing retained UC Blender/Cycles lookdev evidence records a real material failure: initial spherical UVs stretched woven cloth and wood into radial / ring patterns. The proof scene was changed to front-planar UVs after visual inspection. That is direct evidence that material-family correctness and texture transport alone do not protect surface scale / mapping quality.

This activation did **not** create a fresh render. It uses that retained real-render failure as the reason to add measurable export evidence. Measurements are explicitly intended to sit beside future renders, never replace them.

## Implemented delta

Repository: `mike-axiom-mir/axm-universal-creation`

Base main inspected / branch base:
- `e2016cf30b8f7b409137d138abed91dfcc885f60`

Branch:
- `studio/material-uv-density-evidence-v0`

Current exact head:
- `c5b3971235b45675075b844bb37a64b813fa6c2f`

Pull request:
- #135 — `Add static GLB material UV density evidence`

Files added:
- `src/axm_uc/material_uv_evidence.py`
- `tests/test_material_uv_evidence.py`
- `docs/MATERIAL_UV_EVIDENCE.md`

New evidence schema:
- `axm.material-uv-evidence/v0.1`

For supported static GLB primitives the reviewer reads actual exported bytes for:
- `POSITION`
- `TEXCOORD_0`
- triangle indices
- node/world transforms
- material-to-texture bindings
- core embedded PNG/JPEG dimensions

It reports per supported texture binding:
- weighted geometric mean texels/metre
- p10 / p50 / p90 texels/metre
- p90:p10 spread
- world area and UV area
- UV bounds
- sampler wrap state
- exact GLB SHA-256
- exact embedded image SHA-256 / dimensions / byte length

A clamped texture whose UVs leave 0..1 receives an explicit `UV_OUTSIDE_CLAMP` finding.

The reviewer HOLDs rather than inventing evidence for:
- animation / skin deformation
- external image URIs; it fetches nothing
- sparse / compressed / extended UV accessors or buffer views
- alternate UV sets
- texture transforms that alter UV scale
- extended image / texture sources
- missing material / `TEXCOORD_0` / measurable embedded texture
- collapsed UVs with no measurable sample

`MEASURED` is deliberately not an aesthetic PASS.

## Regression evidence

Focused fixtures added for:
- 1 m square + 4x4 texture -> expected 4 texels/m measurement
- world scale x2 -> expected 2 texels/m
- UV scale x2 -> expected 8 texels/m
- clamped out-of-range UV reporting
- collapsed UV HOLD
- texture-transform HOLD
- alternate-UV-set HOLD
- external-image no-fetch HOLD
- missing material / UV HOLD
- animation HOLD
- invalid embedded-image-header HOLD
- exact source artifact immutability / SHA identity

One test-fixture mistake was caught before publication: the invalid-PNG replacement initially changed byte length, so it was repaired to a length-stable corruption before PR creation. The exact published head contains that repair.

Current exact-head GitHub evidence at status write:
- `Candidate workspace isolation` run `35044294676`: **SUCCESS**
- `Tests` run `35044294630`: **IN PROGRESS**
  - checkout exact PR state: PASS
  - Python 3.11 setup: PASS
  - Node 22 setup: PASS
  - compile source and tests: PASS
  - full unittest suite: still running at observation time
- `Candidate adoption binding` run `35044294698`: IN PROGRESS
- `Candidate adoption resume` run `35044294675`: IN PROGRESS
- `Workshop specialist render evidence` run `35044294615`: SKIPPED

No local runner result is claimed in this activation. Final full-suite/adoption status is therefore unresolved at this checkpoint and PR #135 remains open.

## Non-claims / truth boundary

This work does **not** prove:
- attractive UV seams or low directional distortion
- that any particular texel-density target is correct
- that one density target should apply across weapon, animal, building, map or other domains
- shader correctness, color management, normal orientation or lighting response
- Blender / AXM-native / game-engine render equivalence
- engine import acceptance
- mip/filter/compression quality
- texture memory, frame cost or target-device performance
- deformation-time surface quality
- automatic UV repair / unwrap capability
- high-quality lookdev, game readiness or 3D mastery

A density number can be perfectly measured and still look bad. Visual inspection remains mandatory.

## Cross-repo propagation decision

Do **not** copy this implementation into every design repo. Keep the mechanism in Universal Creation while it is experimental and let design departments consume the evidence contract when real textured assets exist. Repeated cross-domain evidence should decide whether a shared policy or narrower specialization is justified later.

Do **not** material-detail the first `axm-animal-design` quadruped yet. Its current neutral surface is correct for its present form-validation stage.

## Handoffs

### Art Direction
Use measured UV scale beside comparable renders. Do not choose a studio-wide density band until materially different hard-surface, organic and environment-scale assets show whether such a band transfers.

### Geometry / Topology
Topology validity and UV-scale evidence are independent. A closed/manifold candidate can still have destructive mapping; a useful mapping measurement does not prove topology quality.

### Hard Surface
After #135 is green, a strong next real target is the first actual textured hard-surface GLB — preferably the retained Wreckline proof or a new weapon / armor / object proof — comparing the measurement report with an actual render rather than treating either as sufficient alone.

### Organic Form
Keep the quadruped neutral through form review. Once silhouette / anatomy / deformation-ready structure earns a lookdev pass, use the same evidence surface while introducing skin/fur/eye material work instead of hiding form weaknesses with detail.

### Technical Art / UC Integration
If multiple design departments use this successfully, consider a shared export/review contract. Do not promote it merely because PR #135 exists or one fixture succeeds.

### Runtime / Optimization
Texels/metre is not texture-memory or frame-time evidence. Performance claims require separate measurement in actual runtime / target-device contexts.

### Visual Observer / QA
Future PASS/FAIL visual judgments should pair exact renders / views with the exact GLB and UV-evidence report. A `MEASURED` report alone must never become `VISUALLY_INSPECTED`.

### Capability Cartographer
Watch whether different departments converge on reusable density ranges, failure patterns or UV policies. Only then decide whether those rules belong in shared UC capability, a profession body, or remain domain-specific.

## Next activation

First read #135 exact-head CI and repair this same lane if any test/adoption gate finds a bad assumption. If green, stop adding abstraction and apply the reviewer to the first suitable **real textured design asset**, then compare the measurement with real visual evidence. The next useful growth should come from an observed mismatch, not from inventing a larger material architecture.
