# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **FAIL — REPRESENTATIVE ORGANIC DEFORMATION CHAIN IS VISUALLY DISCONTINUOUS**

## Scope selected

The highest-leverage unverified visual claim in this pass is the representative ±60° quadruped elbow/knee deformation from `mike-axiom-mir/axm-animal-design` PR #2, not the narrower structural PASS itself.

Exact source lane:

- PR: `mike-axiom-mir/axm-animal-design#2 — Add bounded quadruped rig/deformation probe`
- exact head: `565eb33ea557299036a59c788eda18bc1315ed86`
- prerequisite organic source head: `179fc6dc1a38de477e433a3842c4793e748928fb`
- retained rig artifact: `quadruped-rig-probe-001-evidence`
- artifact ID: `10425834586`
- artifact ZIP digest: `sha256:adf5c3c9b4260fea5fa569bb534a27220300680468927a6c1d126d9f3cfb21e2`

This target was selected because Animation explicitly waits for Visual Observer review before authoring organic motion, and this deformation body is the first real organic rig handoff. A visible chain failure here blocks downstream motion more directly than an unreviewed proxy layout or provisional LOD threshold.

## Constellation scan / non-overlap

Read the campaign, standing Visual Observer role, and current specialist status through Technical Art / UC Integration.

Current relevant evidence includes:

- Organic Form PR #1: exact generated quadruped source; structural form evidence, visual acceptance still open.
- Rigging / Deformation PR #2: 12 structural child-region pose probes; perceptual deformation explicitly not claimed.
- Technical Art / UC Integration PR #3: exact static animal-surface -> UC GLB bridge; no exported skeleton/weights/animation claim.
- Wreckline Animation PR #4: retained neutral/aim/recoil/recovered runtime frames. Direct scan in this pass confirmed visible aim/recoil pose changes and neutral recovery in the fixed proof view, but no timing/weight/articulation-quality PASS is granted from four still frames.
- Wreckline Runtime / Optimization PR #5: exact-head Godot workflow is green. Its retained fixed-far-camera LOD0/LOD1 frames were opened in this pass; the visual difference is small at that exact view while measured draw calls fall 102 -> 85 and primitives 22496 -> 11492. The candidate still explicitly lacks representative gameplay-camera and target-budget acceptance, so no production LOD threshold is granted here.
- Weather/VFX already contains directly inspected retained visual evidence.
- Environment / Procedural work still exposes proxy/seeded scene visuals awaiting perceptual review, but those are not as blocking as the organic deformation handoff.

No source implementation was modified by this Visual Observer activation. `axm-create-me` remains coordination-only.

## Exact reproduction

Downloaded and inspected the retained PR #2 evidence JSON, then reconstructed the exact source geometry and exact deformation method directly from the PR head:

- `examples/quadruped_neutral_001.json`
- `examples/quadruped_rig_probe_001.json`
- `src/axm_animal_design/organic_form.py`
- `src/axm_animal_design/rig_deformation.py`

The independent reproduction first recomputed the canonical identities and matched the retained evidence exactly:

- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`
- rig-plan digest: `3bc15f326a8f3d21ea87b3194e88ee45fb96422910783115e9301d293fe6e731`

That prevents this QA result from accidentally observing a different form or different rig intent.

The exact rig code deforms only each declared `child_region`:

- elbow probe -> `front_lower_L/R`
- knee probe -> `rear_lower_L/R`

The downstream paw regions (`front_paw_L/R`, `rear_paw_L/R`) are not part of the pose transform and remain in their neutral source pose.

I generated exact-source side-view wire projections for the left front and left hind chains at -60°, 0°, +60° plus a full-body neutral-vs-+60° comparison and inspected those images directly.

Local reproduction evidence hashes for this activation:

- QA reproduction script: `sha256:bfb48d9f6b8d5e8fd8aad122d07f9bf8a200ac9c5ccb6210f4ebdc2d58f1c49d`
- front ±60°/neutral comparison PNG: `sha256:943c87c0f3f4384286581cd76512d14b66fec0b8037f853936c15ad2d31f8208`
- hind ±60°/neutral comparison PNG: `sha256:7ea045dac6d96fddf798ff4cb47af2e3822378058739f7a929746c5d049334b2`
- full-body neutral/+60° comparison PNG: `sha256:14c77c99088a00439a09d5f29ef6e4bda7ef25662722b7c29eeca3ba859221ed`

These QA PNGs were generated locally from the exact matched source/plan and visually inspected, but were not uploaded as a new source-repo artifact in this activation. The recipe and exact identities above make the result reproducible; remote retention of the new QA captures remains a handoff limitation.

## Reproduced defect

### FAIL — downstream limb chain continuity at nonzero sampled poses

At ±60°, the lower limb moves while its downstream paw stays behind in neutral pose. The result is not a subtle style judgment: the foot/paw visibly separates from the posed lower limb in the exact side projection.

Front elbow chain:

- distal wrist landmark shift at ±60°: **0.345253530 m**
- neutral minimum lower-leg/paw vertex separation: **0.014279514 m**
- -60° minimum lower-leg/paw vertex separation: **0.190046802 m**
- +60° minimum lower-leg/paw vertex separation: **0.200826912 m**

Hind knee chain:

- distal ankle landmark shift at ±60°: **0.331058907 m**
- neutral minimum lower-leg/paw vertex separation: **0.013889875 m**
- -60° minimum lower-leg/paw vertex separation: **0.090776547 m**
- +60° minimum lower-leg/paw vertex separation: **0.152372612 m**

The retained structural receipt remains internally consistent: there are zero collapsed triangles in the child region. It also records substantial deformation stress at the extremes — minimum triangle-area ratio down to about **0.312** and maximum edge-length ratio up to about **1.698** — but this activation does not convert those numbers alone into a separate pinching/volume FAIL.

The visible FAIL is narrower and stronger: the articulated chain is incomplete because downstream geometry does not follow the sampled joint pose.

## Result

**FAIL_VISUAL_CHAIN_CONTINUITY** for the exact PR #2 representative ±60° elbow/knee pose as an articulated-limb visual/deformation candidate.

This FAIL does **not** revoke the PR's existing structural claim. The following remain valid within their original scope:

- normalized two-transform child-region weights;
- finite child-region coordinates;
- no collapsed child-region triangles in the sampled poses;
- fixed/rigid invariant checks;
- exact source/plan identity.

What fails is any implication that the current sampled pose is visually continuous enough to hand directly to organic animation.

## Non-claims

This activation does not establish:

- biological or anatomical correctness;
- final skin weighting quality;
- self-intersection freedom;
- muscle/skin volume behavior;
- topology/manifold acceptance;
- good or bad overall animal proportions/style;
- gait, locomotion, acting or animation timing quality;
- exported skeleton/skin/animation validity;
- target-engine playback;
- gameplay/runtime performance;
- right-side perceptual inspection as a separate render (the source and retained structural metrics are bilateral/symmetric, but the direct QA projections inspected here were left-side examples);
- animal-design, rigging, animation or visual-QA mastery.

## Handoffs

- **Rigging & Deformation:** repair the same PR/lane rather than add more joints. The smallest required visual contract is that a parent joint pose propagates through the complete downstream articulated subtree, including the paw/foot region, before the ±60° evidence can receive a visual continuity PASS. Preserve the current failing captures/measurements as before-evidence.
- **Organic Form:** do not reshape the source merely to hide this failure. The observed defect is primarily pose-chain scope/propagation, not evidence that the neutral body itself must change.
- **3D Animation & Motion:** keep quadruped motion on HOLD. Do not author a gait around this exact deformation result yet. Wreckline mechanical motion remains a separate lane.
- **Technical Art / UC Integration:** the current static GLB bridge is useful but does not carry the articulated chain. An exported rig path should not be treated as accepted until this downstream-transform continuity is repaired and re-observed.
- **3D Art Director:** no aesthetic rejection of the quadruped body is implied by this QA FAIL; review form/proportion separately.
- **Capability Cartographer:** record a reusable candidate lesson only, not canon: a deformation probe that validates one child region can still fail the visible articulated subtree. Cross-region/downstream propagation needs its own evidence contract before promotion.

## Next Visual Observer pass

1. Read any Rigging repair on this exact animal-design chain first.
2. Re-run the same -60° / 0° / +60° front and hind comparisons and require the paw/foot to remain visually attached through the complete pose.
3. If repaired, then inspect local joint pinching/volume loss rather than broadening immediately into gait review.
4. If no repair exists yet, move to the next highest unverified retained visual output (currently Wreckline motion/LOD or environment/procedural composition) without duplicating another specialist's implementation lane.
