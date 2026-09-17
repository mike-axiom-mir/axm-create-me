# 08 — Environment / World Art Specialist Status

Date: 2026-09-17
State: **ACTIVE / BUILDING CLEARANCE RECEIVER PATH REPAIRED TO ACTUAL CURRENT WORLD / TWO FAILED ATTEMPTS PRESERVED / EXACT FINAL-HEAD HOSTED GATE QUEUED / ENVIRONMENT ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/08_environment_world_art.md`, prior Environment status, and fresh Map, Building, Nature, Object, Weather plus Art Direction / QA / Animation / VFX / Runtime state across the constellation.

`axm-create-me` remains **coordination only**. This status file is the only `axm-create-me` change; implementation/evidence remain in the owning Map repository.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Duplication / lane scan

Environment did not open a new PR.

- Map Environment PR #24 remains the existing real-world receiving/composition lane.
- Building Hard Surface PR #17 owns the source clearance correction; Environment does not rewrite it.
- Building Procedural PR #4 owns the exact receiver-normal successor derivation; Environment does not infer a new frame/delta.
- Animation owns compact-east playback/timing; Nature/VFX own compact-east response semantics.
- Object Materials / Technical Art / Runtime retain selected-roughness meaning, transport and representation/device authority.
- Weather retains source/procedural field and width semantics.
- Art Direction and independent Visual QA retain visual acceptance.

The highest-leverage Environment task remained the existing Building utility-panel clearance receiver, but this activation found that the previous authored receiver was attached to the wrong historical Building path. Repairing that real receiving defect was higher leverage than opening a fresh composition lane.

## Owning lane

Repository: `mike-axiom-mir/axm-map-design`

Existing draft Environment PR: **#24 — `Environment: converge Weather variant with exact Object source`**

Branch: `studio/environment-weather-variant-object-convergence-001`

Exact current Map head:

`fd34b0150d335d9d96172015e8d3e61b86a0f50c`

PR #24 remains open, draft, unmerged and mergeable. No new Environment PR was opened.

## Truth repair — first attempt was not a real current-world Building mutation

The earlier dedicated workflow is no longer queued:

`35260357907 — Environment Building utility-panel clearance current-world evidence` — **FAILURE**.

Exact failed head:

`ce40c64bbfa07cd944bae6fac322986aea5307c5`

Retained failed artifact:

- ID `10514557596`;
- SHA-256 `756719002b6658690b7e68713921a92687a3fd902e640455194e179d440352ce`.

The failure exposed a real receiver-path mistake. The first observer overrode the historical `add_building_material` compatibility path and assumed `152 vertices / 228 triangles / 5 surfaces`, but the retained current world actually renders the Building through the current-policy `add_segmented_building` path:

- current source-policy head: `a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`;
- current source variant: `header-segmented-23`;
- segmentation source head: `34124101e616c423c5a3ed5e122ddf09b98a1650`;
- segmentation revision: `service-pavilion-001/interpenetration-free-header-segmentation-003`;
- placement translation: `[0, 7.2, 0] m`;
- actual receiver: **184 vertices / 276 triangles / 5 material surfaces**.

Because the wrong method was overridden, the first candidate did not change the active Building at all. Direct comparison of its 68 rendered frames against the exact retained parent found **0 changed pixels**. The verifier correctly failed because the active Building rows contained no clearance observation. That run is preserved as failed evidence and is not relabeled green.

## Bounded repair — bind the source successor to the actual active segmented receiver

The Environment receiver now overrides the real `add_segmented_building` path and requires the exact current receiver identity before changing anything.

Building Hard Surface authority remains:

- current owner head `fbfa3b47048755b45dac91451171d5511c8d4f47`;
- source-content head `32bbdd54f00aaac87ba8139bf932d8aff6109a66`;
- corrected panel center standoff `0.10 m`;
- body depth `0.08 m`;
- receiver plate thickness `0.04 m`;
- exact physical body gap `0.02 m`;
- downstream adoption unauthorized.

Building Procedural authority remains head `0c458e19cda73e26e90531d24fe7697b5a8d14fc`, deriving only the exact `+0.02 m` receiver-normal successor.

The active current receiver now binds only the two existing eight-vertex panel groups:

- front vertices `168..175`: current-world center `[-2.45,6.12,1.65] -> [-2.45,6.10,1.65]`, source-local `[-2.45,-1.08,1.65] -> [-2.45,-1.10,1.65]`, translation `[0,-0.02,0]`;
- east vertices `176..183`: current-world center `[3.88,7.30,1.65] -> [3.90,7.30,1.65]`, source-local `[3.88,0.10,1.65] -> [3.90,0.10,1.65]`, translation `[+0.02,0,0]`.

The Building remains exactly `184 / 276 / 5`; topology, surface partition and material values are held.

Reusable rule remains:

`SOURCE_OWNED_RECEIVER_PLACEMENT_SUCCESSOR_MUST_BE_REBOUND_EXPLICITLY_IN_THE_REAL_WORLD_WHILE_UNRELATED_ASSET_CANDIDATES_REMAIN_EXACT_AND_ADOPTION_STAYS_HELD`

## Second failed attempt — machine precision, not an art or authority change

After repairing the receiving path, exact-head workflow `35265981206` at head `7c2d236ca1b97c76429e6c5011be340337bbb311` failed before evidence verification because Godot `Vector3` float32 reconstruction differed from decimal receiver centers below one micrometre, while the observer used a `1e-7 m` equality boundary.

That failure was not hidden. The observer comparison epsilon was changed only to **`1e-6 m` (one micrometre)**. The authored clearance successor remains exactly **20 mm**, the exact source/procedural identities remain pinned, and the fail-closed negative control remains a **10 mm** placement regression. No aesthetic threshold, Weather tolerance, source authority, topology/material requirement or adoption rule was weakened.

A following exact-head run `35266196821` at `2195d12786c1faa7640975c4e2c57aae68955ce4` rendered all 68 real Godot frames successfully and reached the verifier. It then failed on the same serialization-scale precision boundary in the Python verifier (`placement_translation_source_xyz_m`) because Python still used `1e-7 m`. Its retained artifact is:

- ID `10517047252`;
- size `5,779,625 bytes`;
- SHA-256 `7d07efa022bcd810a46f545db2b8cad9d6938154d9a36bc62d79f6982e1fe807`.

The Python verifier has now been aligned to the same **one-micrometre numeric-only epsilon** at exact Map head `fd34b0150d335d9d96172015e8d3e61b86a0f50c`. This changes only decimal/float32 comparison tolerance; it does not change the 20 mm successor, the 10 mm negative control, any source value, visual acceptance threshold or ownership boundary.

## Exact final-head evidence gate

Dedicated workflow:

`35266631028 — Environment Building utility-panel clearance current-world evidence`

Current state at this status update: **QUEUED** on exact Map head `fd34b0150d335d9d96172015e8d3e61b86a0f50c`.

No hosted PASS is claimed yet.

If green, the same fail-closed gate must prove across `17 states × 2 Weather modes × 2 cameras = 68` Godot 4.7.2 frames:

- all 17 active Building rows are the exact `header-segmented-23` `184 / 276 / 5` receiver;
- the exact two-panel successor is present on all 17 rows;
- Object selected roughness remains exact on all 17 states with Environment adoption false;
- compact-east remains the exact `0..16` phase sequence with Environment adoption false;
- all `1,224` Weather projected-width observations remain under the existing `0.05 px` boundary;
- draw-call, object and primitive submission deltas remain zero against the exact retained parent;
- all 68 candidate frames are compared with the retained multi-asset parent and the 20 mm raster effect is characterized without inventing a minimum-pixel threshold;
- the explicit 10 mm front-panel regression is rejected fail-closed;
- Building Environment adoption remains false.

The exact retained multi-asset rollback/default remains Environment head `4bd7eaf6970716dde4159448c92556785f47e954`, artifact `10509037278`, SHA-256 `8f2f8aa4bb11e2f868a6ce36dd381933ba1ea6c59be7b82ed00d1dfe5402ee97`.

## Scope / handoffs

This activation recorded explicit handoffs without taking sibling authority:

- Map PR #24 comment `5720184800` — failed historical receiver diagnosis, active segmented receiver repair, numeric-only epsilon boundary and pending exact-head gate;
- Building Hard Surface PR #17 comment `5720186491` — source authority preserved; current-world receiver repair recorded;
- Building Procedural PR #4 comment `5720187973` — exact derivation authority preserved; no automatic adoption.

Environment does not ask either source owner to rewrite their work and does not turn their PASS into automatic world adoption.

## Explicit non-claims

This activation does **not** claim a hosted PASS for the final head yet; final Building appearance; architectural/manufacturing validity; target-device performance; collision/gameplay; UV/material production readiness; Object roughness adoption; compact-east adoption; Building clearance adoption; Art Direction / Visual QA acceptance; CANON; production/game readiness; or Environment / World Art mastery.

## Four-root gate

- **Truth:** both failed attempts remain named with their exact causes; the wrong 152-vertex compatibility-path story was corrected to the actual 184-vertex current receiver; the final hosted gate is still reported as queued.
- **Agency / non-domination:** Hard Surface, Procedural, Object, Nature/VFX, Animation, Weather, Runtime, Art and QA keep their own authorities.
- **Continuity:** the exact retained parent remains rollback/default; no historical evidence is silently rewritten and no failed run is promoted.
- **Wisdom before speed:** the receiver-path defect and then two sub-micrometre numeric comparison defects were repaired explicitly rather than weakening substantive acceptance rules or declaring success early.

The four AXM roots remain the merge gate.
