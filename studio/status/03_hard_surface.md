# 03 — Hard-Surface Specialist Status

## Current state

Evidence state: IMPLEMENTED + CI IN PROGRESS. No department asset, visual-quality, fit, runtime, material, animation, gameplay, or mastery claim.

### Constellation / coordination scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `03_hard_surface.md` role.
- A commit scan across the eleven design department repositories returned GitHub's empty-repository response; there is not yet a real department mesh/body to improve without inventing source state.
- Read the current Art Director status. Its first hard-surface request is a strong same-source comparison candidate before broad catalogs, but there is not yet a department source asset on which that visual comparison can be grounded.
- Read the Geometry & Topology status. Its active Universal Creation PR #133 owns seam/open/non-manifold topology diagnostics and deliberately avoids the active hard-surface vehicle surface.
- Re-scanned current Universal Creation PR lanes before and immediately before publication. Nearby work includes:
  - #97: reusable vehicle art/hardpoints, rounded/beveled/swept vehicle construction and Wreckline capability bridge;
  - #111: Design Workshop target-frame construction/repair;
  - #114: actual sticker geometry calipers;
  - #120: actual clearance/contact instruments;
  - #127: bounded evidence-driven Workshop candidate planner;
  - #133: raw mesh topology diagnostics.
- The lane below does not alter `procedural_3d.py`, vehicle loadout semantics, Workshop placement, geometry calipers, clearance/contact, candidate planning or topology inspection.

## Gap selected

Universal Creation already had several pieces of hard-surface attachment machinery, but they stopped at different evidence boundaries:

- Asset Atom can **describe** sockets/anchors and accepted tags.
- Static GLB review can prove a named marker's **position**.
- Workshop construction can reason about intended **target frames** in assembly state.
- Vehicle hardpoints can express compatibility constraints.
- Clearance/contact can measure actual rest-pose geometry relationships.

What was still missing was a reusable check that the **actual named rigid attachment node inside an exported GLB retained the intended orientation and handedness**. A hardpoint at the correct XYZ position can still point backward, be rolled incorrectly, be sheared, or be mirrored. Position-only evidence does not catch those failures.

This was selected because attachment-frame truth transfers directly across weapons, armor, units, buildings, objects and miscellaneous manufactured assets without importing one domain's visual identity into another.

## Bounded improvement

Opened Universal Creation PR **#134 — Add static GLB attachment-frame evidence**.

Branch:

`studio/hard-surface-frame-evidence-v0`

Exact base:

`e2016cf30b8f7b409137d138abed91dfcc885f60`

Current head:

`b2527fefca9f8cc48c3c2fdfe6639a81f1834dbc`

New files:

- `src/axm_uc/hard_surface_frames.py`
- `tests/test_hard_surface_frames.py`

The new closed contract `axm.hard-surface-frame-plan/v0.1` can require, for each named rigid frame:

- exact world position within a declared tolerance;
- expected local `+Z` forward direction;
- expected local `+Y` up direction;
- orthogonal basis evidence;
- right-handed orientation unless explicitly relaxed.

The reviewer traverses the actual GLB default scene with nested transforms and reports:

- `FRAME_IDENTITY` for missing/duplicate named nodes;
- `FRAME_POSITION`;
- `FRAME_FORWARD`;
- `FRAME_UP`;
- `FRAME_NONORTHOGONAL`;
- `FRAME_MIRRORED`.

It retains the exact artifact SHA-256 and normalized plan SHA-256. Animated/skinned/deformed GLBs remain outside this static claim and HOLD rather than receiving a partial PASS.

## Structural evidence

The focused regression file covers:

- an identity attachment frame;
- nested translation plus 90-degree Y rotation measured in world space;
- independent position and forward-axis drift;
- duplicate and missing named frames;
- a mirrored `[-1, 1, 1]` basis that still has apparently correct forward/up axes;
- a sheared/non-orthogonal frame;
- fail-closed malformed frame plans;
- source-artifact immutability during review;
- HOLD on animated GLB input.

At the time of this status write, GitHub has started five workflows for exact head `b2527fefca9f8cc48c3c2fdfe6639a81f1834dbc`:

- Workshop specialist render evidence: **SKIPPED** by workflow conditions; not required for this structural claim.
- Three workflows were still **IN PROGRESS** on the latest check, including Candidate adoption resume.
- The remaining completed workflow has not yet been promoted here to a named PASS because the full exact-head gate is still settling.

Therefore the code is **implemented**, but the specialist does **not** claim the test suite is green yet. The next activation must read #134's exact-head CI first and repair this same lane if a test exposes a bad assumption.

## Transfer map

The evidence method is potentially reusable without forcing one interface vocabulary or visual style across domains:

- **weapon-design:** muzzle, grip, optic, magazine, stock, underbarrel and mount frames can be checked after export;
- **armor-design:** plate, limb, backpack, hardpoint and accessory frames can retain intended orientation;
- **unit-design:** turret, sensor, weapon, wheel/track-module and utility frames can be verified in the artifact;
- **building-design:** door, pipe, cable, module, damage-replacement and snap-grid interfaces can use the same evidence primitive;
- **object-design / misc-design:** prop connectors, hinges, interchangeable modules and assembly anchors can use it directly.

This does **not** mean those domains should share dimensions, names, accepted tags or aesthetic rules. Only the evidence method is being proposed as transferable.

## Truth boundary / non-claims

A future PASS from this reviewer means only: the named rigid static GLB node exists exactly once and its exported position/orientation/handedness matches the declared tolerances.

It does **not** establish:

- that two parts physically mate;
- mesh clearance/contact or collision behavior;
- strength, manufacturability or real mechanical function;
- swept animation clearance or rig/deformation correctness;
- final materials or surface quality;
- renderer or target-engine import acceptance;
- gameplay behavior or balance;
- visual quality or Art Director acceptance;
- a finished Wreckline vehicle or any mastered department.

No existing Universal Creation receipt was silently strengthened, and the new reviewer is not yet registered as a live Machine capability.

## Handoffs

- **Geometry & Topology:** PR #133 topology evidence and #134 frame evidence are complementary but remain independent; do not silently combine their meanings.
- **Rigging & Deformation:** static frame evidence deliberately HOLDs on animated/skinned GLB state; moving-frame/swept evidence remains a separate specialist problem.
- **Technical Art / UC Integration:** only bind this into a live export/Machine contract after real design-repo use shows that it repeatedly catches or prevents useful failures.
- **Visual Observer / QA:** do not let a frame PASS substitute for actual rendered inspection or interface readability.
- **3D Art Director:** #134 is structural machinery, not the requested hard-surface visual comparison. The first real department candidate still needs visual evidence once a source asset exists.
- **Capability Cartographer:** track adoption across at least materially different hard-surface domains before recommending promotion as a broader studio contract.

## Next Hard-Surface pass

1. Read and, if necessary, repair PR #134 CI on the same branch rather than starting a parallel replacement.
2. If green, apply the reviewer to a real hard-surface GLB — preferably an existing Wreckline/vehicle proof or the first populated weapon/armor/unit/building/object department asset — and retain an actual PASS/FAIL artifact report.
3. Use that real failure evidence to decide the next modeling improvement. Do not manufacture another abstraction merely because the scheduled lane runs again.
