# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_DIRECTION_048_ANALYTIC_RADIAL_NORMAL_REVIEW_EVIDENCE_READY / OBJECT_TA_PR16_HEAD_36F653EF_OPEN_DRAFT_MERGEABLE / RUN_35341930670_SUCCESS / GODOT_4_7_2 / FROZEN_SUCCESSOR002_CONTROL_REBUILT_BYTE_IDENTICAL / 31_NODES_1052_TRIANGLES / HINGE_480_TRIANGLES / OUTER_SIDE_120_TRIANGLES / 360_NORMAL_ENTRIES_CHANGED_ONLY / THREE_COMPLETE_OBJECT_AB_CONTEXTS / SILHOUETTE_MASKS_PIXEL_IDENTICAL / ART_ACCEPTANCE_NOT_CLAIMED / VISUAL_QA_NOT_CLAIMED / CURRENT_UC_376B5C49_UNCHANGED / ARTIFACT_10544549523_SHA_3E07517A / HOLD_ART_DIRECTION_VISUAL_QA_SOURCE_DEFAULT_FINAL_NORMAL_TANGENT_RUNTIME_DEVICE_CANON_PRODUCTION / COORDINATION_ONLY**

## Activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, this specialist status, current specialist constellation, Object owner lanes, and fresh `axm-universal-creation`.

`axm-create-me` remains **coordination only**. The four merge roots remain **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage bounded gap selected

Current Art Direction packet `studio/direction/OBJECT_HINGE_SHADING_NORMAL_DIRECTION_048.md` had one explicit unresolved Technical Art handoff: build **one review-only analytic-radial outer-cylinder hinge-normal candidate** on the already frozen Object hinge successor002, with geometry, facet phase, material values, camera/light/FOV/exposure and source/default adoption held fixed.

The existing Object Technical Art lane was reused:
- repository `mike-axiom-mir/axm-object-design`;
- PR #16;
- branch `studio/technical-art-rigid-scene-handoff-001`;
- prior green Technical Art baseline `f430d00d98e694dcf8302fd4df3c64a074f6f30e`;
- prior exact successor002 artifact `10531541834`;
- frozen successor002 control GLB SHA-256 `f81a9bccd9de1033476da4e5bbea3871b01e2ebf9fb65fcf909447fd14c43e40`.

No duplicate Hard Surface, Geometry, Materials, Rigging, Animation or Runtime lane was opened.

## Exact owner chain consumed

- Art Direction coordination packet at create-me head `f55363657ae63f88460559b3f0f210cd70a7cb57`, packet blob `910871c06902d9c5bb42a2246aa07bdfaa029045`;
- Hard Surface Direction-048 disposition at exact head `5d8f767af79b744b6f3d31ce91dc4c908b3a440b`, blob `289d7cb333ca5adb2d87e71feab451fd864249c3`;
- frozen source successor `modular-equipment-case-001/hinge-bored-knuckle-phase-invariant-source-successor-002`;
- frozen relative owner phase `SYNCHRONIZED_PREDECESSOR_PHASE`;
- Materials review owner at exact head `5509084acbaca2a7d45f072203b98174c621d5ef`, review blob `ce6c29e19967013b1eea3276e378689f926ef6e0`;
- frozen hardware steel `#7E868AFF`, metallic `0.88`, roughness `0.32`;
- exact generic UC head `376b5c49a8bdbff344fe20e61cd89a73b8a96c75`;
- UC `procedural_3d.py` blob `cdb654d4d0f68a4ca7539d98a985d7a70cf7ee36`;
- UC `rigid_scene_graph.py` blob `fada5e5e06e110b48c7c9886e6a7f73c5c3a2d44`.

**UC product code was not modified and no Object normal policy was added to UC.**

## Smallest reusable repair

Added only review/integration machinery on existing Object Technical Art PR #16:
- `contracts/object_hinge_successor002_analytic_radial_normal_review_048.json`;
- `tools/build_object_hinge_successor002_analytic_radial_normal_review.py`;
- `rigid-proof/hinge_radial_normal_review_observe.gd`;
- `.github/workflows/object-technical-art-hinge-radial-normal-review.yml`.

Candidate rule is deliberately narrow:
- hinge axis remains target `+X`;
- body knuckle axis center comes from the existing receiver `lid_shell` translation;
- lid knuckle axis center remains local `[0,0,0]`;
- only outer-cylinder triangle corners are re-normalized to analytic radial direction `normalize([0, y-axis_y, z-axis_z])`;
- outer-cylinder triangle classification requires all three corners at maximum YZ radial distance and nonzero X span;
- end caps, through-bore inner walls, non-hinge normals, positions, indices, topology, node ownership, front-face/culling transport, UVs, materials, transforms, facet count, phase, roughness/metallic and review cameras/lights remain frozen.

Exact bounded scope verified:
- 5 hinge knuckles;
- 96 triangles per knuckle / 480 hinge triangles total;
- 24 outer-side triangles per knuckle / **120 total**;
- 72 changed normal entries per knuckle / **360 total**;
- maximum changed normal component versus faceted control `0.13052620172124302`.

The builder first rebuilds the prior successor002 control through the exact current UC modules and requires byte-for-byte equality with the frozen control GLB before constructing the candidate.

## Exact successful path

Exact Technical Art head:

**`36f653ef0409a66d5d00def18a8f9dccd00c3336`**

PR #16 at inspection remains **open / draft / unmerged / mergeable**.

Dedicated workflow:

**`35341930670 — Object Technical Art hinge analytic radial normal review — SUCCESS`**

Build state:

**`PASS_OBJECT_HINGE_SUCCESSOR002_ANALYTIC_RADIAL_OUTER_NORMAL_REVIEW_CARRIER_READY`**

Real-target state:

**`PASS_EVIDENCE_READY_OBJECT_HINGE_ANALYTIC_RADIAL_NORMAL_REVIEW_048`**

Decision remains explicitly:

**`EVIDENCE_READY_NOT_VISUAL_ACCEPTANCE`**

Fresh UC reproduced the frozen successor002 control byte-for-byte:
- control GLB SHA-256 `f81a9bccd9de1033476da4e5bbea3871b01e2ebf9fb65fcf909447fd14c43e40`;
- candidate GLB SHA-256 `cdf9b04de7dca8faf590c43646bd977cd35d795936f158775553462203a9a7a1`;
- receiver remained **31 mesh nodes / 1052 triangles**;
- scene ownership remained unchanged.

## Real Godot A/B evidence

Pinned target: **Godot 4.7.2 stable official, GL Compatibility**, viewport `900 x 680`.

All three Art Direction complete-object contexts were rendered as control and candidate, plus control/candidate hinge-only masks:
- `full_rear_three_quarter`;
- `full_rear_grazing`;
- `full_side_three_quarter`.

All control/candidate hinge silhouette masks are **pixel-identical**, proving the candidate changed review normals rather than geometry/silhouette.

Aggregate full-object A/B discrimination:
- raw changed pixels: **21,558**;
- changed pixels >1 LSB: **19,723**.

Per-context measured A/B differences:
- rear grazing: **5,735 pixels >1 LSB**, max RGB-channel delta `0.47450977563858`;
- rear three-quarter: **7,631 pixels >1 LSB**, max RGB-channel delta `0.560784310102463`;
- side three-quarter: **6,357 pixels >1 LSB**, max RGB-channel delta `0.164705883711576`.

Retained hierarchy metrics deliberately show the candidate is not automatically accepted. For example:
- rear grazing hinge near-white pixels move from `0` control to `473` candidate, with `4` near-white connected components;
- rear three-quarter near-white hinge pixels move from `1,625` control to `1,343` candidate, with both at `7` components;
- side three-quarter remains `0` near-white hinge pixels in both.

Those observations are evidence for Art Direction / independent Visual QA, not a Technical Art visual-quality verdict.

## Fail-closed controls

Two negatives are retained:
1. a frozen geometry position mutation is rejected before candidate publication;
2. an attempted Technical Art authority inflation to claim Art acceptance is rejected.

The contract also keeps smoothing-angle search, custom-normal sculpting, phase sweep, second phase candidate, source geometry rewrite, automatic downstream adoption and UC/PF promotion unauthorized.

## Retained evidence

Successful artifact **`10544549523`**:
- name `object-technical-art-hinge-radial-normal-review-36f653ef0409a66d5d00def18a8f9dccd00c3336`;
- GitHub payload size **546,554 B**;
- **74 files**, **3,507,597 B uncompressed**;
- SHA-256 **`3e07517a8cd390e68c032d6e8dd78bcd593c801cecc549ba64f2e68f0fa0b2ce`**;
- downloaded ZIP independently reproduced the exact digest.

It retains owner pins, prior exact Technical Art evidence, control/candidate surfaces and GLBs, build/runtime receipts, both negatives, exact three-context control/candidate PNGs, hinge masks, workflow/tool source and retained index.

## Current CI truth / inherited historical guard

The new Direction-048 workflow is green, but same-head historical workflow `Object Technical Art hinge successor002 transport` run **`35341930680`** is red at its initial bounded-delta guard on both Python 3.11 and 3.13. It did not reach owner/UC/Godot execution.

That red check is an inherited proof-lane bookkeeping issue: the older workflow compares the **entire cumulative PR diff** against the five files that existed at its prior exact proof, so the newly added Direction-048 review files make that historical equality guard fail even though those prior five proof files were not changed by this activation.

This status does **not** relabel that red check as green or hide it. The prior exact successor002 proof remains retained at head `f430d00d...` / artifact `10531541834`; the new Direction-048 path has its own exact successful proof at head `36f653ef...` / artifact `10544549523`.

## Prior retained activation

The previous Nature `north-low` parent-exclusion target-host proof remains retained in Git history and artifact `10542513318` at Technical Art PR #3 head `02c5223d...`. This Object activation does not rewrite or promote that separate Nature lineage.

## Authority boundary / next HOLDs

This activation does **not** prove or adopt:
- Art Direction acceptance of the analytic-radial candidate;
- independent Visual-QA acceptance;
- Object source/default normal adoption;
- final owner-authoritative normal/tangent basis;
- any additional smoothing-angle/custom-normal/phase/material search;
- Rigging/Animation behavior changes;
- Runtime/device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- CANON;
- production/game readiness;
- Technical Art mastery.

## Four-root check

**Truth:** exact owners, UC blobs, successful and red same-head workflows, measured A/B deltas, silhouette invariance, negatives and non-claims are explicit.

**Agency / non-domination:** Hard Surface keeps source geometry/phase authority, Materials keeps lookdev values, Art Direction and Visual QA keep visual acceptance, Technical Art owns only receiver/review transport, and UC remains generic.

**Continuity:** prior successor002 control is rebuilt byte-identically before candidate construction; exact heads, GLB digests, receipts, target renders and retained artifact are pinned.

**Wisdom before speed:** built one requested review candidate on the existing lane instead of opening a new normal-search family, mutating source geometry, weakening evidence, or centralizing Object policy in UC.

## Current state

`PASS_OBJECT_DIRECTION_048_REVIEW_EVIDENCE_READY_NOT_VISUAL_ACCEPTANCE / TA_PR16_HEAD_36F653EF_OPEN_DRAFT_MERGEABLE / RUN_35341930670_SUCCESS / SAME_HEAD_HISTORICAL_RUN_35341930680_RED_BOUNDED_CUMULATIVE_DIFF_GUARD / GODOT_4_7_2 / CONTROL_GLB_F81A9BCC / CANDIDATE_GLB_CDF9B04D / 31_NODES_1052_TRIANGLES / HINGE_480_TRIANGLES / OUTER_SIDE_120_TRIANGLES / 360_NORMAL_ENTRIES_CHANGED_ONLY / THREE_CONTEXTS / 19723_PIXELS_GT_1LSB / SILHOUETTE_MASKS_PIXEL_IDENTICAL / ARTIFACT_10544549523_546554B_74_FILES_SHA_3E07517A / UC_376B5C49_BLOBS_CDB654D4_FADA5E5E_UNCHANGED / HOLD_ART_DIRECTION_VISUAL_QA_SOURCE_DEFAULT_FINAL_NORMAL_TANGENT_RUNTIME_DEVICE_CANON_PRODUCTION / COORDINATION_ONLY`
