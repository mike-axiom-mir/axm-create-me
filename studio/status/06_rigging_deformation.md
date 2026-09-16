# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **REPAIRED + EXACT-HEAD STRUCTURAL PASS + RETAINED EVIDENCE / VISUAL RECHECK REQUIRED**

## Current state

The highest-leverage Rigging task was to repair the exact articulated-chain failure reported by Visual Observer / QA on `mike-axiom-mir/axm-animal-design` PR #2. The repair remains in the **same source-owned rig lane**; no replacement PR, UC rig framework, Profession Fabric promotion, or `axm-create-me` product code was created.

The repaired exact head is:

`eea127689635e1a6c85bc08940a59ee0cdbe6685`

GitHub Actions and retained evidence now structurally PASS the repaired downstream transform propagation. The earlier visual FAIL is **not silently cleared**: Visual Observer must re-render/reinspect the same representative poses before animation may consume the quadruped.

No animation-quality, biological/anatomical, production-skinning, visual deformation-quality, exported-rig, target-runtime, gameplay, performance, CANON or mastery claim is made.

## Coordination / constellation scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`, including the Donor Discovery Protocol;
- `studio/specialists/06_rigging_deformation.md`;
- current Rigging status;
- Visual Observer / QA status 13;
- Geometry & Topology status 02;
- Animation & Motion status 07;
- Capability Cartographer status 14;
- current `axm-animal-design` PR/source state.

The full design constellation remains the campaign surface: weapon, armor, character, unit, animal, building, nature, weather, map, object and misc design repositories. Current evidence still makes `axm-animal-design` the only active source-owned organic rig/deformation blocker with a concrete failing handoff. Geometry PR #4 is a separate derived connected-left-forelimb topology candidate and explicitly does not repair this transform-propagation defect. Character/unit/etc. still do not provide a second materially different deformable-domain proof that would justify horizontal promotion.

Animation correctly keeps quadruped motion on HOLD. Technical Art's animal -> UC bridge remains static and does not carry skeletons, weights or animation. Capability Cartography explicitly placed this repair back in the same animal-design Rigging lane rather than UC or Profession Fabric.

## Failure preserved as before-evidence

Visual Observer independently reproduced the old PR #2 head `565eb33ea557299036a59c788eda18bc1315ed86` and returned:

`FAIL_VISUAL_CHAIN_CONTINUITY`

Cause: each sampled elbow/knee pose deformed only its declared lower-leg `child_region`; the downstream paw/foot primitive stayed in the neutral source pose.

Measured old chain separation at nonzero poses:

- front lower leg -> paw: neutral about `0.014279514 m`, but `-60°` about `0.190046802 m` and `+60°` about `0.200826912 m`;
- hind lower leg -> paw: neutral about `0.013889875 m`, but `-60°` about `0.090776547 m` and `+60°` about `0.152372612 m`.

The old local child-region structural PASS remains true inside its original scope. The repair closes the missing dependency rather than rewriting that history.

## Bounded repair

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

The source body and neutral Organic Form intent were not rewritten.

The repair extends the local rig evidence contract without changing the existing child-region LBS method:

- every elbow/knee joint now explicitly declares its downstream paw region;
- `front-elbow-L/R` propagate to `front_paw_L/R`;
- `hind-knee-L/R` propagate to `rear_paw_L/R`;
- the existing lower-leg smoothstep two-transform LBS remains unchanged;
- each declared downstream descendant inherits the sampled joint rotation rigidly;
- evidence now records the complete declared articulated region chain;
- downstream geometry is checked for finite coordinates, collapsed triangles, rigid-radius drift and edge-length preservation;
- a new chain-continuity gate compares source and posed minimum vertex gaps between each lower-leg/paw pair and fails if absolute drift exceeds `1e-9 m`;
- unknown, duplicate, parent/child-reused or malformed downstream-region declarations fail closed.

The repaired rig-plan digest is:

`b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`

The evidence schema is now:

`axm.animal-rig-deformation-evidence/v0.2`

## Exact-head structural evidence

GitHub Actions run **35048148913** completed **SUCCESS** for exact repaired head:

`eea127689635e1a6c85bc08940a59ee0cdbe6685`

Both matrix jobs passed:

- Python 3.11: compile PASS, unit suite PASS, exact Organic Form evidence build/upload PASS, repaired rig-deformation evidence build/upload PASS;
- Python 3.13: compile PASS, unit suite PASS.

Retained rig artifact:

`quadruped-rig-probe-001-evidence`

Artifact ID:

`10428395074`

Artifact ZIP digest:

`sha256:571ff19c61d53c831ff31e49377d4453397bdd5c8b2bbc957ae4b1a6792c24f3`

The retained artifact was downloaded and inspected in this activation. It reports:

- gate: **PASS**;
- 4 joints;
- 12 sampled poses;
- 4 declared downstream paw regions;
- all four joint statuses: PASS;
- all downstream region statuses: PASS;
- downstream collapsed triangles: `0`;
- downstream rigid-radius drift: `0.0`;
- downstream minimum/maximum edge-length ratios: `1.0 / 1.0` under the rigid inherited transform;
- chain-continuity gap drift: `0.0` to the retained 12-decimal evidence precision for all sampled poses.

Exact retained lower-leg -> paw gap evidence:

- front source gap: `0.014279514356 m`; every `-60° / 0° / +60°` repaired pose retains `0.014279514356 m`;
- hind source gap: `0.013889875403 m`; every `-60° / 0° / +60°` repaired pose retains `0.013889875403 m`.

The original child-region deformation stress remains visible in the receipt rather than hidden. For example, the front ±60° probes still reach maximum edge-length ratios near `1.698` and minimum triangle-area ratios down to about `0.312`. Those values are not converted into a separate visual-quality judgment here.

## What is proven now

For the exact quadruped source, repaired rig plan and sampled -60° / 0° / +60° elbow/knee poses, the declared paw descendants now follow the sampled joint transform and the source-relative lower-leg/paw gap no longer grows. The existing lower-leg LBS structural invariants also remain passing.

That is enough to close the **specific structural transform-scope defect** that caused the earlier detached-paw evidence.

It is not enough to clear the earlier perceptual FAIL by itself.

## Truth boundary / non-claims

This activation does **not** establish:

- biological or anatomical correctness;
- production-quality skeleton hierarchy or skin weights;
- one connected production deformable skin;
- self-intersection freedom or collision clearance;
- volume preservation, muscle/skin behavior, pinching quality or attractive joint deformation;
- Visual Observer or Art Director acceptance;
- gait, locomotion, acting, timing, arcs or animation quality;
- GLB/FBX skeleton/weight/clip export;
- target-engine playback or controller/state-machine integration;
- gameplay behavior;
- runtime performance or resource lifecycle;
- that Geometry PR #4 should replace the current source topology;
- a universal articulated-subtree contract in UC;
- Profession Fabric promotion;
- rigging/deformation mastery or CANON.

A structural PASS cannot substitute for direct visual inspection.

## Root gate

- **Truth:** the old Visual Observer FAIL is retained as before-evidence; the new claim is limited to exact-head structural subtree propagation backed by retained evidence.
- **Agency / non-domination:** animal-specific hierarchy and region semantics remain in `axm-animal-design`; no CI result or specialist rank grants merge/CANON authority.
- **Continuity:** the same PR/branch/source body was repaired in place, preserving exact prerequisite identity, rollback path and the historical failing evidence.
- **Wisdom before speed:** the blocking articulated-chain defect was closed before adding more joints, creating a universal skeleton framework, exporting animation, or expanding into a second problem.

## Handoffs

- **Visual Observer / QA:** rerun the exact front and hind `-60° / 0° / +60°` comparisons on repaired head `eea127689635e1a6c85bc08940a59ee0cdbe6685`. First test whether paw/foot visual attachment is genuinely repaired. Only after that should the review move to pinching, volume loss, silhouette or other local deformation-quality questions.
- **3D Animation & Motion:** keep quadruped motion on HOLD until Visual Observer clears the repaired chain. These remain structural pose samples, not animation clips.
- **Geometry & Topology:** PR #4 remains a separate connected-topology candidate. Do not inherit this rig PASS as deformation acceptance for that different mesh. If PR #4 receives visual acceptance later, it should be deform-tested independently with this same representative pose discipline.
- **Organic Form:** no neutral-source reshaping was needed to close this defect. Preserve source form unless later visual/deformation evidence specifically implicates it.
- **Technical Art / UC Integration:** keep the current bridge static. Do not widen UC into skeleton/weight/animation transport solely because local subtree propagation now works.
- **Capability Cartographer:** this failure -> repair pair is useful evidence for dependency closure, but horizontal promotion still requires a second materially different deformable domain showing the same reusable need.

## Next Rigging & Deformation pass

1. Read Visual Observer's recheck of this exact repaired head first.
2. If visual chain continuity still fails, repair this same lane and preserve the new before/after evidence.
3. If continuity passes but pinching/volume problems appear, address only that bounded weighting/geometry relationship next.
4. If the repaired poses survive visual review, the next meaningful rigging step may be either deform-testing an accepted connected-topology candidate or proving one real exported rig artifact — not a studio-wide rig abstraction from one animal.
