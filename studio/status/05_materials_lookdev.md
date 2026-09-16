# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: ACTIVE / PR OPEN / CI PARTIAL

## Bounded claim

The first useful cross-repo Materials / LookDev gap is not another material generator or a studio-wide texture policy. Universal Creation already has substantial procedural PBR/material transport machinery and retained Blender/Cycles evidence, while the first organic department proof is intentionally neutral-material pending form review. The missing reusable evidence surface was **actual exported UV scale versus actual embedded texture size**.

This activation added a static GLB UV / texel-density evidence instrument to Universal Creation. It measures; it does not unwrap, repair, render, approve aesthetics, or choose a universal density target.

## Coordination / overlap

Read before work:
- `studio/3D_STUDIO_CAMPAIGN.md`
- `studio/specialists/05_materials_lookdev.md`
- Art Direction, Geometry / Topology, Hard Surface and Organic Form status
- current Universal Creation open PRs / neighboring lanes
- Universal Creation material / geometry contracts and retained material evidence

Neighboring lanes remain separate:
- UC #97: vehicle material generation / embedded PBR-map transport / Wreckline material proof
- UC #131: native visual runtime and external visual connectors
- UC #133: mesh topology diagnostics
- UC #134: static rigid attachment-frame evidence
- `axm-animal-design` #1: first quadruped form proof, intentionally neutral-material pending form review

Final semantic-overlap scan found no competing open UV / texel-density evidence lane. UC #135 is the only matching lane.

## Grounded visual defect

Retained UC Blender/Cycles evidence records a real failure: spherical UVs stretched woven cloth and wood into radial / ring patterns, after which the proof scene was repaired to front-planar UVs following visual inspection. That demonstrates that material-family correctness and texture transport alone do not protect mapping quality.

No fresh render was created in this activation. The retained real-render failure grounds the instrument; future measurements must be used beside renders, never instead of them.

## Implemented delta

Repository: `mike-axiom-mir/axm-universal-creation`

Base main:
- `e2016cf30b8f7b409137d138abed91dfcc885f60`

Branch:
- `studio/material-uv-density-evidence-v0`

Exact head:
- `c5b3971235b45675075b844bb37a64b813fa6c2f`

Pull request:
- #135 — `Add static GLB material UV density evidence`

Files:
- `src/axm_uc/material_uv_evidence.py`
- `tests/test_material_uv_evidence.py`
- `docs/MATERIAL_UV_EVIDENCE.md`

Schema:
- `axm.material-uv-evidence/v0.1`

For supported static GLB primitives, the reviewer reads actual exported `POSITION`, `TEXCOORD_0`, indices, world transforms, material-to-texture bindings and core embedded PNG/JPEG dimensions. It reports weighted geometric mean plus p10/p50/p90 texels/metre, p90:p10 spread, world/UV area, UV bounds, wrap state, exact artifact SHA-256 and exact embedded-image SHA-256/dimensions.

It reports `UV_OUTSIDE_CLAMP` when clamp-to-edge textures use UVs outside 0..1. It HOLDs instead of guessing through animation/skins, external images, sparse/compressed/extended UV data, alternate UV sets, texture transforms, extended texture/image sources, collapsed UVs with no measurable sample, or missing UV/material/embedded-texture evidence.

`MEASURED` is explicitly not aesthetic PASS.

## Regression evidence

Fixtures cover:
- 1 m square + 4x4 texture -> 4 texels/m
- world scale x2 -> 2 texels/m
- UV scale x2 -> 8 texels/m
- clamp + out-of-range UV reporting
- collapsed UV HOLD
- texture-transform HOLD
- alternate-UV HOLD
- external-image no-fetch HOLD
- missing material / UV HOLD
- animation HOLD
- invalid embedded-image-header HOLD
- source-artifact immutability / exact SHA identity

A fixture error was caught before PR publication: the invalid-PNG mutation initially changed byte length, so it was corrected to a length-stable corruption. The published head includes that repair.

Exact-head GitHub evidence at latest refresh:
- Candidate workspace isolation `35044294676`: **SUCCESS**
- Candidate adoption resume `35044294675`: **SUCCESS**
- Tests `35044294630`: **IN PROGRESS**; exact PR checkout, Python setup, Node setup and compile source/tests passed; full unittest suite was still running at observation time
- Candidate adoption binding `35044294698`: **IN PROGRESS**
- Workshop specialist render evidence `35044294615`: **SKIPPED**

No local-run result is claimed. Final full-suite/adoption-binding state remains unresolved; PR #135 stays open.

## Non-claims

This does not prove attractive seams, low directional distortion, a correct density target, a universal cross-domain target, shader/color/normal response, renderer equivalence, engine import, mip/compression quality, texture memory/frame cost, deformation-time surface quality, automatic UV repair, high-quality lookdev, game readiness or 3D mastery.

A density number can be correctly measured and still look bad. Visual inspection remains mandatory.

## Propagation decision

Do not copy this implementation into every design repo. Keep the mechanism in Universal Creation while experimental and let real design departments consume it. Repeated cross-domain evidence should decide whether a shared policy or narrower specialization deserves promotion later.

Do not surface-detail the first `axm-animal-design` quadruped yet; its neutral material is correct for its present form-validation stage.

## Handoffs

- **Art Direction:** pair measurements with comparable renders; choose density bands only after cross-domain evidence.
- **Geometry / Topology:** topology validity and UV scale are separate evidence dimensions.
- **Hard Surface:** once #135 is green, apply it to the first real textured hard-surface GLB, preferably retained Wreckline or a new weapon/armor/object proof, and compare measurement with an actual render.
- **Organic Form:** keep the quadruped neutral until form review; only then introduce skin/fur/eye lookdev with the same evidence surface.
- **Technical Art / UC Integration:** consider a shared export/review contract only after repeated design-repo use.
- **Runtime / Optimization:** texels/metre is not memory/frame-time evidence.
- **Visual Observer / QA:** a `MEASURED` report must never be promoted to `VISUALLY_INSPECTED` without actual image evidence.
- **Capability Cartographer:** watch for repeated density ranges/failure patterns before deciding shared policy placement.

## Next activation

Read #135 exact-head CI first and repair this same lane if any gate exposes a bad assumption. If green, stop adding abstraction and apply the reviewer to the first suitable **real textured design asset**, pairing the measurement with real visual evidence. Let an observed mismatch choose the next material capability.
