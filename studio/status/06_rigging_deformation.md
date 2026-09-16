# 06 — Rigging & Deformation Specialist Status

## Current state

Evidence state: **IMPLEMENTED + STRUCTURALLY TESTED + RETAINED EXACT-HEAD EVIDENCE**. No animation-performance, biological, perceptual deformation-quality, target-runtime, gameplay, or mastery claim.

## Coordination / overlap scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `06_rigging_deformation.md` role.
- Read current Art Director, Geometry & Topology, Hard-Surface and Organic Form status packets before claiming work.
- The first real riggable department candidate is Organic Form PR `mike-axiom-mir/axm-animal-design#1`, exact source head `179fc6dc1a38de477e433a3842c4793e748928fb`.
- Organic Form explicitly handed its four bend-zone reserves to this lane and kept them `DECLARED_NOT_DEFORMATION_TESTED`; that created a grounded prerequisite rather than a speculative new rig architecture.
- UC PR #133 owns general mesh topology diagnostics. UC PR #134 owns **static rigid** GLB attachment-frame evidence and deliberately HOLDs animated/skinned state. This lane does not replace either.
- A final PR search before publication found no competing open rig/deformation lane in `axm-animal-design` or Universal Creation; only this PR matched the underlying problem.

## Gap selected

The quadruped source had exact landmarks, generated triangle regions and four authored elbow/knee bend reserves, but there was still no evidence that those reserves could support even a bounded weighted articulation probe without losing basic structural invariants.

The highest-leverage move was therefore **not** a studio-wide rig framework. It was one source-bound deformation challenge on the first real organic department candidate, preserving the exact source body and making the untested bend-zone declaration falsifiable.

## Bounded improvement

Opened stacked draft PR **`mike-axiom-mir/axm-animal-design#2 — Add bounded quadruped rig/deformation probe`**.

Branch:

`studio/rig-deformation-probe-001`

Exact prerequisite/base:

- Organic Form PR #1 head: `179fc6dc1a38de477e433a3842c4793e748928fb`
- PR #2 base branch: `studio/organic-form-baseline-001`

Exact tested head:

`565eb33ea557299036a59c788eda18bc1315ed86`

New files:

- `src/axm_animal_design/rig_deformation.py`
- `examples/quadruped_rig_probe_001.json`
- `tests/test_rig_deformation.py`
- `tools/build_rig_deformation_probe.py`

Updated:

- `.github/workflows/tests.yml` to build and retain exact rig/deformation evidence on Python 3.11 while exercising the tests on Python 3.11 and 3.13.

The new local contract is `axm.animal-rig-deformation-plan/v0.1`. It consumes the existing quadruped source unchanged and binds four explicit joint probes:

- left/right front elbows;
- left/right hind knees.

Each joint declares:

- exact joint, parent and child landmarks;
- exact parent/child mesh-region IDs;
- an authored rotation axis;
- an influence radius that is forbidden to exceed the Organic Form bend reserve;
- sampled pose angles of **-60°, 0°, +60°**.

That produces **12 exact structural pose probes** over four joints.

## What is actually being deformed

The probe runs on the **actual generated child-limb triangle regions** from Organic Form PR #1 rather than on a disconnected synthetic test mesh.

For each child-region vertex it derives two normalized weights:

- parent transform = identity;
- child transform = rotation around the declared joint axis.

The child weight grows with longitudinal distance from the joint using a bounded smoothstep falloff inside the declared bend reserve. This creates a deterministic two-transform linear-blend-skinning probe: near-joint vertices blend, farther child vertices move rigidly, and vertices on/behind the joint boundary remain parent-held where the source geometry exposes them.

The exact source form digest, generated surface digest and deformation-plan digest are retained in the result packet so a later run cannot silently substitute a different body or rig intent.

## Structural evidence

GitHub Actions run **35044082379** completed **SUCCESS** for exact head `565eb33ea557299036a59c788eda18bc1315ed86`.

Both matrix jobs passed:

- Python 3.11: compile PASS, complete unit suite PASS, organic-form evidence build/upload PASS, rig-deformation evidence build/upload PASS.
- Python 3.13: compile PASS, complete unit suite PASS. Evidence-build steps are intentionally 3.11-only and were skipped there.

The rig/deformation regressions prove for the exact candidate:

1. deterministic evidence over four joints / 12 sampled poses;
2. the exact candidate gate is PASS for the implemented structural invariants;
3. two-transform weights remain normalized;
4. each sampled pose retains finite coordinates and introduces zero collapsed triangles in the deformed child region;
5. parent-held/fixed-weight vertices stay fixed within the declared numeric tolerance;
6. fully child-weighted vertices preserve radius to the joint under the rigid component of the transform;
7. each pose records minimum triangle-area ratio plus minimum/maximum edge-length ratio rather than hiding deformation stretch;
8. a probe exceeding the Organic Form bend reserve fails closed;
9. an unknown mesh region fails closed;
10. a pose request beyond the bounded ±120° guard fails closed.

Retained Actions artifact:

`quadruped-rig-probe-001-evidence`

Artifact ID: **10425834586**

Artifact ZIP digest:

`sha256:adf5c3c9b4260fea5fa569bb534a27220300680468927a6c1d126d9f3cfb21e2`

The artifact contains exact evidence JSON plus a compact summary for the tested head.

## Truth boundary / non-claims

A PASS here means only that the exact quadruped source + exact rig plan survived the sampled structural LBS probes under the checks above.

It does **not** establish:

- biological/anatomical correctness;
- production-quality skeleton design or skin weights;
- one connected production deformable skin;
- self-intersection freedom or collision clearance;
- volume preservation or muscle/skin behavior;
- perceptual deformation quality at elbows or knees;
- a natural gait, locomotion, acting, timing or animation quality;
- GLB/FBX export or target-engine playback;
- animation-controller/state-machine integration;
- runtime performance;
- gameplay behavior;
- Art Director or Visual Observer acceptance;
- animal-design, rigging or deformation mastery.

The current organic body is intentionally multi-region. Passing this probe must not be rewritten into a claim that the asset is a production skinned character.

## Root gate

- **Truth:** exact source/surface/plan identity is retained; sampled structural PASS stays separate from visual/animation/runtime claims.
- **Agency / non-domination:** no specialist rank or CI result promotes this to CANON or silently changes Organic Form ownership.
- **Continuity:** PR #2 is stacked on the exact Organic Form prerequisite instead of copying/replacing it; source body remains unchanged and the dependency is explicit.
- **Wisdom before speed:** one real bend-zone challenge was chosen over inventing a broad shared rig framework before repeated evidence exists.

## Handoffs

- **Organic Form:** the four declared bend reserves now have first bounded structural deformation evidence. Do not change the source body merely to make this probe prettier; use later visual/deformation evidence to decide whether geometry near the joint actually needs revision.
- **3D Animation & Motion:** these 12 poses are structural samples, not animation clips. Animation may now use this exact rig probe as input evidence, but owns timing, arcs, locomotion, transitions and motion quality.
- **Geometry & Topology:** apply PR #133 to the exact Organic Form surface separately. A deformation PASS does not certify manifold topology or self-intersection.
- **Visual Observer / QA:** inspect/render representative ±60° elbow/knee results before anyone makes a perceptual deformation-quality claim. Structural ratios are not visual acceptance.
- **Technical Art / UC Integration:** do not promote this animal-specific rig plan into UC yet. First prove a real export/runtime path or repeated cross-domain use.
- **Hard-Surface:** PR #134 static frame evidence remains complementary. Moving/skinned frame evidence is still outside its scope.
- **Capability Cartographer:** watch whether the explicit `source + bend reserve + bounded pose probe + exact evidence` pattern transfers to character or another deformable domain before proposing a shared horizontal contract.

## Next Rigging & Deformation pass

1. Read PR #2, its exact-head CI, and any Visual Observer / Animation response first.
2. If visual inspection exposes pinching, inversion, ugly volume loss or implausible bending, repair the same weighting/geometry relationship and preserve before/after evidence.
3. If the probe remains useful, add one **exported rig artifact** or second materially different deformable context before generalizing the contract.
4. Do not manufacture more joints or a studio-wide skeleton abstraction merely because the lane runs again.
