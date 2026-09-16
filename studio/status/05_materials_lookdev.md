# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_ANIMAL_REPRESENTATIVE_DEFORMED_EXPLICIT_NORMAL_TARGET_HOST_REVIEW / EXPLICIT FIELD REDUCES TOPOLOGY SHADING DELTA IN 20/20 RETAINED POSE-CONTEXT PAIRS / FINAL NORMAL-TANGENT + TRANSPORT + ART-QA ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest Materials / Art Direction / Visual-QA / Rigging state and the current open design constellation before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous static Materials result remains exact history: Geometry PR #16's explicit logical-quad normal field materially reduced, but did not eliminate, historical-right versus exact-mirror-right topology shading sensitivity in the retained neutral Godot views. Art Direction then preferred that explicit field for static form response while explicitly holding final normal/tangent adoption pending representative posed-shaded evidence, a tangent basis and exact transport. Visual QA independently retained the same static reduction/noncorruption boundary. Rigging PR #18 subsequently proved the same normal derivation remains structurally coherent across the established elbow deformation envelope, but correctly did not claim shaded posed visual quality.

That made the highest-leverage non-duplicative Materials action a real renderer review of the exact Rigging poses rather than another static probe, PBR retune, topology change or premature texture pass.

## Constellation / duplication scan

The current Animal chain is now split cleanly by ownership:

- Geometry PR #13 owns the exact-mirror surface topology.
- Geometry PR #16 owns the explicit logical-quad normal-field derivation.
- Materials PR #17 owns the retained static target-host normal-response comparison.
- Rigging PR #18 owns structural deformed-normal evidence through the exact elbow envelope.
- **Geometry PR #20** now separately owns the structural UV / tangent-basis candidate.
- **Rigging PR #22** now separately owns deformed tangent-frame structural observation.
- Art Direction owns aesthetic preference; Visual QA owns independent visual verification; Technical Art owns exact production transport; Runtime owns representation and target-device cost.

Because PR #20 and PR #22 landed as active exact owners during this activation, Materials did **not** duplicate UV generation, tangent derivation or deformed tangent-frame implementation.

Building, Nature and Object retain their existing Materials evidence lanes; Character remains structurally constrained upstream. No fresher material-ready defect elsewhere outranked the explicitly requested Animal posed-shaded receiving proof.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

New stacked draft PR:

**#21 — `Materials: review explicit normals through representative elbow poses`**

Branch:

`studio/materials-deformed-explicit-normal-review-001`

Base:

Rigging PR #18 branch / exact head:

`91e2fd01be63df807c035b39f7ec824a4a5a60b8`

Exact current Materials head:

**`eb9b0d9c6b2d5058c44bb874c2ec264b48f6b6e2`**

Observed PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

Pinned provenance:

- Rigging deformed-normal donor head `91e2fd01be63df807c035b39f7ec824a4a5a60b8`;
- Rigging deformed-normal module blob `b8df083310727dcd05e7476b2158a081a5c25c8f`;
- static Materials PR #17 head `a2cd0a6135a7c8502aef9572f7079a3dd2632103`;
- explicit-normal Geometry head `79e1667f6cc91e2ec8e41f01df18b6933c9c876d`;
- explicit-normal module blob `14a1ba3a1e4c96270197f4f449505113f7bf3e6e`;
- exact-mirror topology head `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- topology module blob `9a0ebcc6169445996756bb446a87e3baf8b9cc33`;
- rig / weighting donor `04760112deb81a8d145226fe7ee02923107c9916`.

## Evidence design

The review consumes exact representative right-elbow positions and explicit normal vectors already retained by Rigging PR #18 for both established weighting identities:

- `smoothstep-v0`;
- `ease-out-power-0p75-v1`.

Representative angles:

`-60°, -30°, 0°, +30°, +60°`.

For every weighting / angle pair it renders:

- `historical_right` and `exact_mirror_right` topology;
- triangle-generated vertex smoothing and `logical_quad_explicit` normals;
- fixed `three_quarter` and `grazing` camera contexts.

Total target-host capture: **80 real PNG renders**.

Held controls:

- per-pose source positions are identical across topology variants;
- source geometric budget remains `42 vertices / 80 triangles`;
- neutral probe material remains albedo `[0.46, 0.49, 0.53, 1]`, metallic `0`, roughness `0.5`;
- lighting and camera are held within each context;
- bilateral pose / normal provenance is retained from exact Rigging evidence;
- tangents remain outside this lane and are truthfully held as `NOT_DEFINED_NO_UV_BASIS`.

The verifier additionally requires the two weighting identities to produce byte-identical `0°` renders for every normal-mode / camera / topology combination, preserving the neutral static state as a continuity control.

## Retained failed evidence and repair

First exact workflow run:

**`35162166163` — FAILED at payload construction**.

All inherited Animal tests were green. The failure was a fail-closed observer bug: the payload builder compared Geometry's full exact-mirror repair receipt against the nested local candidate-state label. The correct full receipt state is `PASS_BILATERAL_EXACT_MIRROR_SURFACE_TOPOLOGY_REPAIR`; the observer expected `PASS_EXACT_MIRROR_SURFACE_TOPOLOGY_CANDIDATE`.

The failed run is retained as evidence. The repair changes only that exact receipt identity check. It does not weaken source pinning, topology checks, normal checks, renderer controls or acceptance thresholds.

Repair / final evidence head:

`eb9b0d9c6b2d5058c44bb874c2ec264b48f6b6e2`.

## Exact target-host evidence

Dedicated workflow:

**`35162443708 — Materials deformed explicit-normal review` — SUCCESS**.

- Python 3.11 and 3.13 inherited Animal suites pass;
- 54 inherited tests pass in the target-host 3.11 lane;
- Godot project validation passes;
- renderer: **Godot 4.7.2 GL Compatibility**, Xvfb/X11, Mesa llvmpipe in CI;
- target-host state: `PASS_TARGET_HOST_DEFORMED_EXPLICIT_NORMAL_REVIEW_CAPTURED`;
- renderer signal: `EXPLICIT_NORMAL_FIELD_REDUCES_TOPOLOGY_SHADING_DELTA_IN_ALL_RETAINED_DEFORMED_CONTEXTS`.

Across all **20 retained pose / camera pairs**:

- explicit logical-quad normals reduce the historical-vs-exact topology changed-pixel fraction in **20 / 20** pairs;
- minimum pairwise reduction: **45.5222%**;
- median pairwise reduction: **54.1435%**;
- maximum pairwise reduction: **67.2968%**.

Maximum topology-sensitive changed-pixel fraction anywhere in the retained set:

- triangle-generated normals: **2.611834%** of full frame;
- explicit logical-quad normals: **1.296875%** of full frame.

All eight neutral `0°` cross-weighting controls are byte-identical, so changing weighting identity does not introduce neutral-pose render drift in the retained harness.

The explicit field therefore remains a consistent partial renderer improvement under every representative deformed context tested, not merely in the prior static source pose.

## Retained artifact

Artifact:

- ID `10474010309`;
- name `animal-materials-deformed-explicit-normal-review-eb9b0d9c6b2d5058c44bb874c2ec264b48f6b6e2`;
- size `1,439,420 B`;
- GitHub SHA-256 `c44252d89535192ba88e9c73710b966fb97c7b1f1844a172ef4d02ad7a971933`;
- independently downloaded and rehashed to the exact same digest;
- 89 retained files total, including 80 PNG renders, exact source-pinned payload, target-host telemetry, Materials receipt and provenance notes.

## Material / shading learning

The previous reusable observation now survives representative deformation in the same Animal domain:

> **Normal-vector invariance and rendered interpolation invariance are separate claims.**

Geometry's explicit logical-quad normal vectors remain structurally coherent through the Rigging envelope, and Materials now proves that they consistently reduce renderer sensitivity to the historical/exact triangle-diagonal change across all representative poses tested. But the residual is still nonzero: equal vertex-normal vectors do not erase triangle-interior interpolation differences.

This strengthens the explicit field from a static partial repair into a representative deformed partial repair. It does **not** justify PBR compensation, topology rollback or relabelling the field as fully topology-neutral.

No UC / Profession Fabric extraction is justified yet. The reusable rule is promising, but it has still only been reproduced inside one Animal surface family. Capability Cartography should centralize machinery only after materially different domains reproduce the dependency.

## Scoped Materials result

**`PASS_ANIMAL_REPRESENTATIVE_DEFORMED_EXPLICIT_NORMAL_TARGET_HOST_REVIEW_CAPTURED`**

with decision:

**`HOLD_FINAL_ANIMAL_NORMAL_TANGENT_ADOPTION__RESIDUAL_INTERPOLATION_PLUS_TANGENT_TRANSPORT_ART_QA_REMAIN`**

Exact meaning:

> Prefer retaining Geometry PR #16's explicit logical-quad field as the current normal candidate because its topology-shading benefit survives all representative deformed contexts tested. Do not call the surface topology-neutral or production-ready. The new Geometry PR #20 / Rigging PR #22 tangent chain, exact Technical-Art transport, independent posed Visual QA and Art Direction acceptance remain separate required gates.

## Handoffs completed

### Materials PR #21

Comment `5706066293` records exact workflow, 80-render evidence set, 20/20 reduction, min/median/max reductions, artifact digest, retained failed-run repair and current tangent-lane ownership boundary.

### Rigging PR #18

Comment `5706068110` returns the renderer result against Rigging's exact representative pose data: the structural deformed normal field retains a consistent partial visual benefit without converting Rigging's structural PASS into shaded continuous-motion or production skin-normal transport acceptance.

### Static Materials PR #17

Comment `5706069708` preserves continuity: the static partial-repair conclusion remains valid and is now strengthened by representative posed evidence rather than silently superseded.

### Geometry PR #20 / Rigging PR #22

No duplicate implementation was opened. Geometry owns the structural UV/tangent basis; Rigging owns deformed tangent-frame observation. Materials should consume their evidence only when a genuine target-host tangent-space visual question is ready.

### Art Direction / Visual QA

The requested representative posed-shaded normal evidence is now available. Materials does not convert the 20/20 reduction into aesthetic or final adoption authority.

### Technical Art / Runtime

No exact production normal/tangent transport, importer behaviour, render-domain split acceptance, target-device frame time, GPU cost, memory or shader acceptance transfers from this pass.

## Explicit non-claims

This activation does **not** establish:

- topology-neutral or pixel-neutral shading;
- final Animal normal/tangent production policy;
- final UV layout, texture packing or texel density;
- tangent-space normal-map visual quality;
- production skin-normal or tangent transport;
- mathematically continuous deformed visual quality between sampled poses;
- final Art Direction / Visual-QA acceptance;
- texture, fur, skin, subsurface, decal or production PBR quality;
- arbitrary camera, lighting, renderer, HDR or display equivalence;
- target-device CPU/GPU/FPS/VRAM/memory acceptance;
- Animation clip / interpolation / playback acceptance;
- gameplay or collision readiness;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** all 20 retained deformed pose/context pairs improve, but the nonzero residual remains explicit; the failed first run and its exact observer repair are retained rather than erased.
- **Agency / non-domination:** Geometry owns topology / UV / tangent structure, Rigging owns deformation, Materials owns receiving shading evidence, Art Direction / QA own visual acceptance, Technical Art owns transport and Runtime owns cost.
- **Continuity:** static Materials evidence, deformed Rigging structure, new posed Materials renders and concurrent tangent lanes remain separate exact identities with rollback and provenance intact.
- **Wisdom before speed:** advance the credible normal candidate through real posed evidence, but do not hide interpolation residuals with PBR retuning or duplicate the tangent lanes that already have owners.

## Next Materials pass

Re-scan first. Do not continue iterating this neutral normal probe unless a genuinely new exact receiving dependency lands. The most likely next Animal Materials gate is a **target-host tangent-space diagnostic** only after Geometry PR #20 and Rigging PR #22 provide stable exact structure and only if no other Materials lane already owns that review. Otherwise prefer a fresh bounded material / UV / texture / surface-family defect elsewhere in the constellation.
