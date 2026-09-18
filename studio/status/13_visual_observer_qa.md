# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-18

State: **PASS_ANIMAL_RUNTIME_19_KEY_RETAINED_VIEW_VISUAL_NONREGRESSION__WORST_SAMPLE_SILHOUETTE_DRIFT_MAX_1PX / PASS_ANIMAL_RUNTIME_19_KEY_RETAINED_PEAK_POSE_RASTER_IDENTITY__VIEW02_BYTE_IDENTICAL / BLOCKED_FINAL_ANIMAL_ANIMATION_KEY_REDUCTION_ADOPTION__ARBITRARY_CAMERA_CONTINUOUS_PLAYBACK_TARGET_DEVICE_PRODUCTION_TANGENT_SPACE_PENDING / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the preceding Visual QA status, fresh Art Direction / Runtime state, and newest open PRs across the active 3D constellation.

`axm-create-me` remains **coordination only**. QA changed no Animal source, Geometry, Rigging, weights, Animation curve/timing, Technical Art transport, Runtime reducer, material/shader, gameplay/controller logic, Universal Creation product code or CANON state. Product-repository action is limited to an independent review return on the existing Animal Runtime PR.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The strongest consequential unverified visual/runtime surface selected this activation is Animal Runtime PR #30's exact **41 -> 19 serialized animation-key** candidate at head `13ba20d198d2b7c5e428167745d59927b3084004`.

Why selected:

- the previous Map Building utility-panel current-world appearance gate is already independently reviewed and is not reopened;
- Art Direction has now separately accepted the Animal 19-key candidate only as a bounded retained-view review direction while explicitly leaving independent QA and target-device gates downstream;
- Runtime explicitly records a small nonzero shaded/silhouette tradeoff at the worst retained time rather than pixel identity, so this is a real perceptual QA question rather than a structural-only handoff;
- Map Runtime PR #52's RGB8 child has 68/68 byte-identical retained frames and remains a separate representation/device-policy question, so it is less consequential visually than the Animal candidate's measured deformation drift;
- current Nature Animation/VFX lanes are diagnostic/sign-compatibility surfaces and do not displace this already-complete real Godot A/B;
- Object VFX-v2 Runtime, Object rigid-shell winding/culling, Object latch, Map Building material, compact-east temporal delivery and prior Character/Animal review surfaces already have bounded independent QA and are not duplicated.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-animal-design`

PR: **#30 — `Runtime: reduce Animal animation key import budget`**

Exact head: **`13ba20d198d2b7c5e428167745d59927b3084004`**.

At review time PR #30 remains **OPEN / DRAFT / UNMERGED**.

Dedicated workflow: `35288829261 — Runtime Animal animation key budget evidence` — **SUCCESS** on the exact reviewed head.

Retained artifact:

- ID `10525970648`;
- expected and independently reproduced SHA-256 `ad071f58796b606d707168af9619d988a497ba1a745dda8ac62b42e7f814b996`;
- exact control and candidate GLBs;
- three shaded retained control/candidate view pairs plus three corresponding coverage-mask pairs;
- exact Godot receipts, build/runtime receipts and fail-closed source-identity negative control.

Runtime candidate facts remain owner evidence, not QA-authored policy:

- serialized animation keys: `41 -> 19` (`-53.6585%`);
- animation accessor: `820 -> 380 B`;
- complete GLB: `10,296 -> 9,852 B` (`-444 B / -4.31235%`);
- dense diagnostic samples: `321`;
- maximum retained quaternion residual: `0.05472043982868231°`;
- mean residual: `0.017652759664455314°`;
- worst retained diagnostic time: `0.475 s`;
- authored peak `0.500 s` remains an explicit retained key;
- maximum retained pose-bounds delta: `0.000406801700592041 m`.

The source-authored clip is not retimed or rewritten by this Runtime representation.

## PASS — worst-sample retained-view visual non-regression

**`PASS_ANIMAL_RUNTIME_19_KEY_RETAINED_VIEW_VISUAL_NONREGRESSION__WORST_SAMPLE_SILHOUETTE_DRIFT_MAX_1PX`**

QA independently remeasured the exact retained PNGs rather than inheriting Runtime's headline metrics.

### View 00 — `0.475 s`

- shaded raw changed pixels: `9,850`;
- shaded pixels above 1 LSB: `152`;
- coverage XOR: `59 px`;
- coverage lost/gained: `36 / 23 px`;
- largest 8-connected silhouette-XOR component: `3 px`;
- maximum control/candidate silhouette-boundary displacement: **`1.0 px`**;
- coverage centroid shift: about `0.041 px`;
- common-coverage/interior shaded pixels above 1 LSB: `93`;
- common-coverage maximum channel delta: **`5 LSB`**;
- background-only pixels above 1 LSB: `0`.

### View 01 — `0.475 s`

- shaded raw changed pixels: `8,967`;
- shaded pixels above 1 LSB: `564`;
- coverage XOR: `81 px`;
- coverage lost/gained: `32 / 49 px`;
- largest 8-connected silhouette-XOR component: `2 px`;
- maximum control/candidate silhouette-boundary displacement: **`1.0 px`**;
- coverage centroid shift: about `0.083 px`;
- common-coverage/interior shaded pixels above 1 LSB: `483`;
- common-coverage maximum channel delta: **`17 LSB`**;
- background-only pixels above 1 LSB: `0`.

Direct retained-frame inspection reproduces a real but very small worst-sample deformation/silhouette difference. QA reproduced no gross shape break, detached region, coherent multi-pixel contour jump, whole-frame shift, background corruption, missing limb mass, or unrelated render corruption.

The owner report's `244/255` maximum channel deltas are not hidden: they occur where a one-pixel silhouette sample switches background <-> model. They are therefore not relabelled as broad interior shading error. The nonzero tradeoff remains real and explicitly recorded; this PASS does **not** claim byte-equivalence at `0.475 s`.

## PASS — retained authored peak remains raster-identical

**`PASS_ANIMAL_RUNTIME_19_KEY_RETAINED_PEAK_POSE_RASTER_IDENTITY__VIEW02_BYTE_IDENTICAL`**

At retained view 02 / authored peak `0.500 s`:

- shaded control/candidate image: byte-identical;
- coverage control/candidate image: byte-identical;
- raw changed pixels: `0`;
- coverage XOR: `0`;
- maximum channel delta: `0 LSB`.

This is consistent with Runtime deliberately preserving the peak as an authored key. It is a retained-view observation only, not proof that every authored or interpolated time is visually identical.

## No new scoped FAIL reproduced

The visual delta requested for independent QA is nonzero, but within these exact retained fixed views QA did not reproduce a defect severe enough to classify as a retained-view visual regression. The silhouette displacement is bounded to one raster pixel at the measured worst time, with tiny disconnected XOR components and no gross form break.

QA therefore does **not** invent a FAIL merely because the representation is approximate. The approximation remains visible in evidence and stays inside the final-adoption HOLD below.

## BLOCKED — final Animal animation-key reduction adoption

**`BLOCKED_FINAL_ANIMAL_ANIMATION_KEY_REDUCTION_ADOPTION__ARBITRARY_CAMERA_CONTINUOUS_PLAYBACK_TARGET_DEVICE_PRODUCTION_TANGENT_SPACE_PENDING`**

This activation does **not** establish:

- arbitrary-camera, arbitrary-FOV or arbitrary-resolution visual equivalence;
- continuous wall-clock playback smoothness, frame pacing or temporal naturalness;
- target-device CPU/GPU/FPS/VRAM/heap/import-time/thermal/battery improvement;
- a generic key-reduction tolerance or policy for unrelated clips/assets;
- deformed normal/tangent direction-frame correctness or production normal-map quality;
- acceptance of every interpolated time between retained samples;
- gait, locomotion, foot planting, balance, biological or biomechanical correctness;
- gameplay/controller/state-machine/input/collision readiness;
- Technical Art producer adoption;
- CANON or production/game readiness.

The current candidate therefore remains a bounded import-budget representation with a retained-view QA PASS, not a final production animation policy.

## Independent review return

QA returned the exact result to Animal Runtime PR #30 as review **`5244083088`**, anchored to exact head `13ba20d198d2b7c5e428167745d59927b3084004`.

No Runtime threshold change, key retune, source Animation edit, Art-direction change, merge, UC mutation or CANON promotion was requested.

## Prior retained QA continuity

The immediately preceding Map Building utility-panel result remains exact historical truth and is not rewritten:

- `PASS_MAP_BUILDING_UTILITY_PANEL_CURRENT_WORLD_VISUAL_LOCALIZATION_AND_PHASE_STABILITY__68_MATCHED_PAIRS`;
- `PASS_MAP_BUILDING_UTILITY_PANEL_OWNER_BOUND_TEXTURE_READABILITY__PATH_EYE_AND_ELEVATED_OBLIQUE`;
- final production-surface / Art / Runtime-device adoption remained held at that reviewed head.

Art Direction has since separately held that exact checker as diagnostic rather than production material language and requested one Materials-owned production-surface successor. That is Art authority and does not alter the prior QA transport/readability PASS.

The earlier Object VFX source/Runtime PASSes, corrected rigid-shell culling PASS / unadapted FAIL, compact-east cadence/crest failures, Object latch proofs, Animal tangent-frame evidence, Character shaded-motion evidence and all separate HOLDs remain bound to their exact historical heads. No acceptance transfers by analogy.

## Four-root gate

- **Truth:** the 19-key candidate's tiny but nonzero worst-time silhouette/interior raster drift is preserved quantitatively; peak identity and worst-time non-identity are recorded separately.
- **Agency / non-domination:** QA judges only the retained visual evidence and does not seize Runtime optimization policy, Animation authorship, Technical Art producer adoption, Art Direction, device acceptance or CANON authority.
- **Continuity:** exact Runtime head, workflow, artifact digest, owner metrics, independent measurements and prior Map/Object/Animal evidence remain separately addressable; no historical PASS/HOLD is silently rewritten.
- **Wisdom before speed:** the retained fixed-view visual gate is closed because evidence supports it, while broader temporal/device/tangent-space adoption remains blocked instead of being inferred from one favorable A/B.

The four AXM roots remain the merge gate.
