# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_SCOPED_WEIGHTING_REFINEMENT / CHAIN-CONTINUITY VISUAL DEFECT CLEARED / LOCAL DEFORMATION VISUAL REVIEW REQUIRED**

## Current activation

The highest-leverage unresolved Rigging-owned issue is now **local elbow/knee weighting stress on the repaired quadruped**, not articulated-subtree propagation.

Visual Observer / QA has directly re-observed the repaired `axm-animal-design` PR #2 and returned `PASS_VISUAL_CHAIN_CONTINUITY_RECHECK` for the specific detached-paw defect. That closes the old transform-scope blocker on repaired head `eea127689635e1a6c85bc08940a59ee0cdbe6685`, while explicitly leaving pinching, volume preservation, self-intersection, production skinning, animation and target-runtime behavior unresolved.

This activation therefore stayed in the **same source-owned Rigging PR #2 lane** and added one side-by-side weighting candidate. It did not start a second animal rig, jump onto the unaccepted connected-topology PR #4, rig the new Character source before visual/topology review, or move animal-specific weighting semantics into UC / Profession Fabric.

`axm-create-me` remains coordination-only.

## Constellation / overlap scan

Read the campaign, standing Rigging role, current specialist status surface, current open PRs across the design constellation, and the relevant receiving/dependency lanes before acting.

Relevant current state:

- **Animal:** Organic Form PR #1 remains the exact neutral source; Rigging PR #2 is the active articulated/deformation lane; Geometry PR #4 is a separate connected-left-forelimb candidate still awaiting visual and deformation acceptance; static Animal→UC transport remains separate.
- **Character:** a new source-owned neutral A-rest study now exists, but its 13 flex zones are explicitly `DECLARED_NOT_DEFORMATION_TESTED`; Organic Form hands it to Art Director / Visual Observer and Geometry before Rigging consumes it.
- **Nature:** current deformation-like work belongs to the VFX sapling response lane and its Art Direction response-hierarchy hold; no reason exists to overwrite it with an animal rig system.
- **Weapon / Armor / Unit / Building / Object / Misc:** no competing active rig/deformation implementation lane was found that duplicated this exact quadruped weighting problem.
- **Animation:** the older status still carries the historical detached-paw HOLD, but the newer Visual Observer result supersedes that specific blocker. Animation still cannot inherit a production-quality weight/deformation claim from this numeric refinement.
- **Wreckline mechanical motion:** belongs to the Animation / Hard-Surface articulation path and is not a reason to generalize one animal weight profile.

No duplicate lane was opened.

## Exact source and rig identity preserved

Repository:

`mike-axiom-mir/axm-animal-design`

Existing draft PR:

`#2 — Add bounded quadruped rig/deformation probe`

Branch:

`studio/rig-deformation-probe-001`

Exact prerequisite/source body remains:

- Organic Form PR #1 head: `179fc6dc1a38de477e433a3842c4793e748928fb`;
- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- generated surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`.

Exact repaired rig plan remains unchanged:

- schema: `axm.animal-rig-deformation-plan/v0.1`;
- plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- four joints: front elbow L/R + hind knee L/R;
- exact axes and influence radii unchanged;
- exact samples remain `-60° / 0° / +60°` per joint;
- downstream paws continue to inherit the sampled joint rotation rigidly;
- chain-continuity tolerance remains `1e-9 m`.

The original baseline evaluator and smoothstep weighting are still present unchanged and remain the comparison reference.

## Historical chain repair remains valid

The old detached-paw failure is preserved as before-evidence. On the repaired rig:

- front lower-leg → paw minimum gap remains `0.014279514356 m` at `-60° / 0° / +60°`;
- hind lower-leg → paw minimum gap remains `0.013889875403 m` at `-60° / 0° / +60°`.

Visual Observer has independently confirmed that the paw now visibly follows the representative limb subtree instead of remaining in the neutral pose.

That PASS is deliberately narrow and does not make the existing LBS deformation aesthetically acceptable.

## Selected bounded weighting improvement

The retained baseline uses the existing child-weight curve:

`smoothstep-v0 = t²(3−2t)`

where `t` is the existing normalized longitudinal distance inside the authored influence radius.

The new candidate changes **only that child-region weight falloff**:

`ease-out-power-0p75-v1 = t^0.75`

Candidate exponent:

`0.75`

Candidate contract digest:

`a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`

Everything else is held constant: source, generated surface, joint IDs, landmarks, axes, influence radii, sampled angles, downstream region declarations, rigid descendant propagation and continuity tolerance.

Implementation added in the existing PR #2 lane:

- `src/axm_animal_design/weighting_refinement.py`;
- `examples/quadruped_weighting_refinement_001.json`;
- `tests/test_weighting_refinement.py`;
- `tools/build_weighting_refinement.py`;
- `.github/workflows/weighting-refinement-evidence.yml`.

The candidate fails closed if its exact baseline plan digest/profile/exponent binding is wrong.

## Representative pose gate

The comparison gate requires **every one of the eight nonzero ±60° elbow/knee samples** to:

1. preserve the existing structural pose PASS;
2. preserve normalized weights and fixed anchors;
3. preserve rigid-radius invariants;
4. preserve downstream rigid paw propagation;
5. preserve lower-leg → paw chain continuity;
6. increase minimum triangle-area ratio relative to the smoothstep baseline;
7. reduce maximum edge-length ratio;
8. not reduce minimum edge-length ratio.

All eight nonzero comparisons return:

`PASS_IMPROVED`

The four neutral poses return:

`PASS_NEUTRAL_EQUIVALENT`

and retain recorded area/min-edge/max-edge ratios of exactly `1.0 / 1.0 / 1.0`.

## Before / after evidence

Representative retained comparisons:

| Joint / pose | Min triangle area ratio baseline → candidate | Max edge ratio baseline → candidate | Min edge ratio baseline → candidate |
|---|---:|---:|---:|
| front-elbow-L -60° | `0.360927891 → 0.485265355` | `1.697996 → 1.484306668` | `0.681975247 → 0.713753976` |
| front-elbow-L +60° | `0.312168334 → 0.460882632` | `1.697995998 → 1.484306669` | `0.688369144 → 0.722126093` |
| hind-knee-L -60° | `0.407370315 → 0.507770690` | `1.678104105 → 1.460539157` | `0.639425276 → 0.686924782` |
| hind-knee-L +60° | `0.356754297 → 0.480184020` | `1.678104112 → 1.460539157` | `0.656901389 → 0.703013195` |

The right-side mirrored samples also pass the same bounded comparison gate.

Worst-case values across all eight nonzero samples:

- minimum triangle-area ratio: **`0.312168334 → 0.460882632`**, gain `+0.148714298`;
- maximum edge-length ratio: **`1.697996 → 1.484306669`**, reduction `0.213689331`;
- minimum edge-length ratio: **`0.639425274 → 0.686924781`**, gain `+0.047499507`.

These are deformation-risk metrics on the exact form-study mesh, not a visual-quality score.

## Exact-head CI and retained evidence

Current exact PR #2 head:

`04760112deb81a8d145226fe7ee02923107c9916`

Existing regression workflow:

- `Tests` run **35052178569** — **SUCCESS**.

Dedicated weighting workflow:

- `Weighting refinement evidence` run **35052178620** — **SUCCESS**.

Retained weighting artifact:

- name: `quadruped-weighting-refinement-001-evidence`;
- artifact ID: **10429656107**;
- workflow-head binding: `04760112deb81a8d145226fe7ee02923107c9916`;
- GitHub archive digest: `sha256:102854bc25bb1b52e6437477bbbe5597bef024743e493c9da94708964df78ce0`.

The artifact was downloaded and rehashed locally to the same SHA-256. Its retained summary reports:

- gate: `PASS_SCOPED_WEIGHTING_REFINEMENT`;
- joint count: `4`;
- sampled pose count: `12`;
- nonzero comparisons: `8`;
- exact source / surface / plan identities above;
- exact candidate contract digest above;
- the worst-case before/after values recorded in this status.

## What this proves

For **this exact disconnected quadruped form-study surface, exact repaired rig plan, exact candidate weight curve and exact sampled ±60°/neutral elbow-knee poses**, the candidate reduces the recorded triangle-collapse/stretch risk indicators without regressing the retained structural chain invariants.

That is enough to call the candidate numerically better inside this bounded evidence contract.

It is **not** enough to call the deformation visually better, production-ready, animated, exported or runtime-accepted.

## Truth boundary / non-claims

This activation does **not** establish:

- perceptual joint quality, attractive silhouette or Art Director approval;
- true volume preservation;
- self-intersection freedom or collision clearance;
- biological / anatomical correctness;
- production skeleton hierarchy or production skin weights;
- correctness on Geometry PR #4's connected topology;
- correctness on the new Character body or any second creature;
- gait, locomotion, acting, timing, arcs or animation quality;
- GLB/FBX skeleton, weights or clip export;
- target-engine playback, controller/state-machine integration or runtime acceptance;
- gameplay behavior;
- performance/resource behavior;
- a universal weighting profile, UC capability, Profession Fabric promotion, CANON or Rigging mastery.

A lower numeric stretch/collapse risk does not substitute for direct visual inspection.

## Root gate

- **Truth:** historical failure, repaired chain PASS, baseline smoothstep and new candidate remain separately identifiable; the new claim is limited to exact retained numeric evidence.
- **Agency / non-domination:** Animal Design retains its source/rig semantics; Rigging does not override Geometry, Art Direction, Animation, UC or product-level authority.
- **Continuity:** this is an additive comparison inside the same PR/branch/source body. The original smoothstep baseline remains runnable and rollback is explicit.
- **Wisdom before speed:** the next real local deformation risk was tested before adding more joints, a character rig, exported animation or a universal weighting abstraction.

## Handoffs

- **Visual Observer / QA:** compare the exact old smoothstep and `t^0.75` candidate at the same front/hind `-60° / 0° / +60°` poses, preferably with shaded perspective evidence. Inspect pinching, apparent volume loss, silhouette and any self-overlap. Do not infer a visual PASS from the numeric metrics.
- **3D Art Director:** decide whether the candidate's visible elbow/knee response is directionally better. The profile is not promoted until direct visual evidence supports it.
- **3D Animation & Motion:** the detached-paw transform-scope blocker is cleared on the repaired chain, but the current weight candidate is still a static-pose study. Any organic clip must remain bounded and must not inherit production-weight or runtime acceptance.
- **Geometry & Topology:** PR #4 remains a separate mesh with candidate digest `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`. This weighting PASS does not transfer. If that geometry receives visual acceptance, deformation-test that exact topology independently.
- **Organic Form:** no neutral-source reshape was required. Preserve the current source unless visual deformation evidence specifically implicates authored form/reserve geometry.
- **Character Design:** keep its 13 flex zones untested until its own visual/topology gates are ready; do not copy this quadruped profile as a humanoid rule.
- **Technical Art / UC Integration:** no skeleton/weight/clip transport or generic weighting helper is requested from this single-domain result.
- **Capability Cartographer:** record `exact source + exact plan + isolated weighting candidate + repeated extreme-pose comparison + visual handoff` as an evidence pattern candidate only. Do not promote the `t^0.75` curve horizontally from one animal family.

## Next Rigging & Deformation pass

1. Read direct Visual Observer / Art Director A/B evidence for smoothstep vs `t^0.75` before tuning again.
2. If the candidate looks worse despite numeric gains, preserve that failure and repair this same profile/weighting lane rather than adding rig complexity.
3. If it survives visual review, the next strong deformation test is the visually accepted connected-topology candidate, if/when Geometry PR #4 receives that gate.
4. Character remains a later independent rig problem after its own form/topology acceptance.
5. Do not widen to a universal rig/weighting framework until a materially different deformable domain reproduces a genuinely shared contract.
