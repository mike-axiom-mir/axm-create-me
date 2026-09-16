# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_GODOT_DISCRETE_SAMPLE_PLAYBACK_PROOF_HOST / EXACT ANIMAL HEAD + SOURCE/RIG/CLIP IDENTITY RETAINED / TWO REAL GODOT SAMPLE CYCLES + WRAP / AESTHETIC + INTERPOLATION + REAL-TIME PACING + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Animation stayed inside the existing source-owned Animal PR #5 rather than opening a duplicate lane or retiming an unreviewed clip.

The current constellation still has two materially different Animation lanes:

- **Mechanical — Wreckline PR #4:** a Godot proof host already exercises bounded harpoon aim / recoil / recover transforms over exact geometry. It supplied a useful donor pattern for pinned-engine observation, but no Wreckline motion semantics were copied into Animal.
- **Organic — Animal PR #5:** the exact repaired quadruped rig carries the existing `quadruped-articulation-loop-001` pulse. Art Direction and Visual Observer still list this as a ready review surface but have not yet accepted its timing, weight or motion direction.

Other motion-adjacent work did not justify a new Animation lane:

- **Object Rigging PR #3** proves structural hinge clearance, not clip timing/style or visual usefulness;
- **Character** still has no accepted animation-ready rig;
- **Animal Geometry PR #4** remains a separate connected-topology candidate with its own deformation/visual gates;
- **Nature / Weather / Map** dynamic behavior is already owned by VFX / Environment / Runtime lanes;
- **Rigging's `ease-out-power-0p75-v1`** remains visually unaccepted and was not silently adopted.

The highest-leverage unresolved Animation claim was therefore the previous explicit **target-engine playback HOLD**. The bounded improvement was to prove that the exact already-authored 40 visible samples can be applied and observed inside a pinned Godot host without changing the clip.

`axm-create-me` remains coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`.

## Exact lane and preserved identity

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#5 — Animation: prove first bounded quadruped articulation loop**

Branch: `studio/animation-quadruped-articulation-loop-001`

Stacked base: Rigging PR #2 exact head `04760112deb81a8d145226fe7ee02923107c9916`.

Current exact Animation head: **`9928680758b0c44435dd83eb4a8e537aacd42c9c`**

PR state at end of activation: **OPEN / DRAFT / MERGEABLE**.

Exact preserved source identities:

- Organic source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- neutral surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting profile: `smoothstep-v0`;
- motion truth label: `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`.

The authored clip remains unchanged:

- duration `1.0 s`;
- authored sample rate `40 Hz`;
- `41` endpoint-inclusive source samples;
- visible repeated cycle samples `0..39`;
- raised-cosine `neutral -> peak -> neutral`;
- front elbows `0 -> +18° -> 0`;
- hind knees `0 -> +14° -> 0`;
- bilateral pairs matched.

No second deformation solver, retime, phase offset, amplitude change, new weighting profile, source rewrite or connected-topology substitution was introduced.

## Prior Animation gates retained

The existing source-local evidence remains unchanged and traceable:

- **`PASS_LOOP_TEMPORAL_CONTINUITY`** — all 41 exact sampled surfaces, uniform `0.025 s` spacing, exact neutral closure and bounded adjacent steps;
- **`PASS_DISCRETE_SAMPLED_PLAYBACK_SEAM`** — endpoint-inclusive source samples map to a 40-frame repeated display cycle by omitting the duplicate endpoint; exact wrap `0.975 -> 0.000 s` equals the authored final adjacent step `0.975 -> 1.000 s` with `0.0 m` residual against `1e-12 m` tolerance;
- retained prior sampled-playback artifact `10431893686`, SHA-256 `290b0725f3fca44c68581ec58de0c4d9aef8850695d97fb6d03eb677934fdc68`.

Those gates did **not** previously prove target-engine geometry application or rendering.

## Selected improvement — pinned Godot exact-sample playback proof

Added a bounded Animal-local target-host path rather than a generic animation engine:

- `tools/build_animation_godot_playback.py` builds an exact payload from the existing source/rig/clip functions;
- `tools/godot_animation_playback/project.godot` is a minimal proof-only host;
- `tools/godot_animation_playback/observe.gd` applies the exact authored surfaces as real Godot `ArrayMesh` triangle geometry;
- `.github/workflows/animation-godot-playback-evidence.yml` pins and verifies Godot `4.7.2` before exercising the proof.

The proof intentionally preserves the existing discrete mode:

`DISCRETE_AUTHORED_SAMPLES_NO_INTERPOLATION`

and names its runtime mode:

`DETERMINISTIC_AUTHORED_SAMPLE_STEPPING_NOT_REALTIME_PACING`.

The Animal -> Godot proof presentation uses the already-established explicit axis bridge:

`[-source_y, source_z, source_x]`

for the source convention `+X forward, +Y left, +Z up`. This is proof-host presentation only; source geometry is not rewritten.

The target-host payload is bound to the exact receiving Git head so a pull-request synthetic merge ref cannot masquerade as source-head evidence.

## Exact final CI and retained evidence

Exact head: **`9928680758b0c44435dd83eb4a8e537aacd42c9c`**

Exact-head workflows:

- `Animal Godot discrete playback evidence` run **35064557194** — **SUCCESS**;
- `Tests` run **35064557215** — **SUCCESS**;
- inherited `Weighting refinement evidence` run **35064557201** — **SUCCESS**.

Retained final artifact:

- name: `quadruped-articulation-loop-001-godot-playback-9928680758b0c44435dd83eb4a8e537aacd42c9c`;
- artifact ID: **10433418841**;
- exact workflow-head binding: `9928680758b0c44435dd83eb4a8e537aacd42c9c`;
- size: **584,180 bytes**;
- archive SHA-256: **`a615e1133dbc15047b5cbefac6f33613c2b43d334507b9857c556de554ca20af`**.

The artifact was downloaded after CI and independently rehashed to that exact digest.

The generated exact-sample payload itself has SHA-256:

**`559743b093ac94590078e021cd85d8d2b80de2d59edc3a44e90d2b7e5a4b43fd`**

and records its receiving repository head as exactly `9928680758b0c44435dd83eb4a8e537aacd42c9c`.

Current scoped result:

**`PASS_GODOT_DISCRETE_SAMPLE_PLAYBACK_PROOF_HOST`**

## Exact target-host motion evidence

The retained payload carries the exact 40 visible authored frames into Godot as:

- `840` vertices per frame;
- `4,800` indices / `1,600` triangles per frame;
- `34` distinct authored surface digests across the symmetric raised-cosine cycle.

Pinned Godot `4.7.2` then exercised:

- **2 complete cycles** of samples `0..39`;
- one exact final wrap to sample `0`;
- **81 total sample applications**;
- exact sequence order: PASS;
- exact final wrap sample: `0`;
- all `34` distinct authored surface identities observed;
- maximum Godot vertex readback error against payload: **`0.0 m`**;
- `readback_matches_payload: true`.

One real Godot process frame is yielded after each sample application so the engine actually consumes every pose. This proves **sample application/readback**, not wall-clock scheduling. No real-time `40 Hz` pacing claim is made.

## Direct retained visual observation

The final artifact retains fixed 800x600 Godot renders for:

- neutral sample `0`;
- peak sample `20`;
- last-visible sample `39`;
- wrapped neutral sample `0` after two complete cycles.

Machine-measured render deltas:

- neutral -> peak: **701 / 120,000 sampled pixels = 0.58417%**;
- last-visible -> wrapped neutral: **4 / 120,000 = 0.00333%**;
- initial neutral -> wrapped neutral: **0 / 120,000 = 0.0%**.

I directly inspected the downloaded neutral, peak and wrapped-neutral renders. Within this proof presentation:

- the lower-limb articulation is visibly different at the peak;
- the broad body silhouette remains anchored while the driven limb shapes move;
- the wrapped neutral returns to the same retained silhouette as the initial neutral.

That is direct target-host motion sanity evidence. It is **not** an Art Direction / Visual Observer judgement of timing, weight, personality, pinching or biological quality.

## Evidence repair history

The first otherwise-green Godot proof run on intermediate head `3735a04ac88d4c1891f6d356e514cf23816abba5` exposed a provenance weakness: on a `pull_request` event, default `actions/checkout` may build GitHub's synthetic merge ref even though the workflow run reports the PR head separately. Its artifact was therefore **not** adopted as final exact-head evidence.

The repair changed only evidence binding:

- checkout now explicitly targets `${{ github.event.pull_request.head.sha || github.sha }}`;
- the workflow records `git rev-parse HEAD` as `EXACT_HEAD_SHA`;
- the generated payload stores the exact receiving Git head;
- CI requires the stored head to equal the exact checked-out head;
- the retained artifact name is keyed by that exact head.

The Animal source, rig, clip, weighting, sample surfaces, proof renderer behavior and acceptance thresholds were not changed to make the rerun pass.

## Why no retime, weighting swap or new clip was added

Current coordination evidence still leaves the perceptual direction unresolved:

- Visual Observer explicitly lists Animal PR #5 as a high-value next QA surface for cadence, silhouette, paw/limb oddity and seam review;
- Art Direction likewise has not approved the pulse's motion direction or timing;
- Rigging's alternate `ease-out-power-0p75-v1` weighting remains visually unaccepted;
- Object hinge motion still lacks visual/form usefulness acceptance;
- Character lacks an accepted rig.

Changing the pulse now would mix authored-motion change with an unresolved independent visual gate. The target-host proof instead closes a concrete technical HOLD while preserving the exact candidate reviewers still need to judge.

## Truth boundary / non-claims

This PASS establishes only:

> the exact existing Animal source + repaired rig + `smoothstep-v0` weighting + unchanged 1.0 s / 40 Hz authored pulse can be converted through the explicit proof-only axis bridge into real Godot triangle geometry, stepped through two complete **discrete authored-sample** cycles plus wrap, read back without vertex drift, and rendered with a visible peak plus exact visual neutral roundtrip in the pinned Godot 4.7.2 proof host.

It does **not** establish:

- continuous interpolation between authored samples;
- real-time `40 Hz` engine frame pacing;
- an `AnimationPlayer`, skeleton, skin or exported animation-clip transport contract;
- runtime controller or state-machine integration;
- input, collision or gameplay acceptance;
- biological gait, locomotion, foot planting, root motion or balance;
- final timing, weight, personality, acting or Art Director acceptance;
- shaded production deformation quality, volume preservation or dynamic self-intersection freedom;
- acceptance of `ease-out-power-0p75-v1`;
- behavior on Animal connected-topology PR #4;
- target-device FPS/GPU/memory/resource-lifecycle acceptance;
- production runtime acceptance;
- a generic UC animation engine, Profession Fabric promotion, CANON, production readiness or Animation mastery.

## Root gate

- **Truth:** the final retained evidence is bound to one exact Animal Git head, exact source/rig/clip/weighting identities, exact payload digest, pinned Godot build and explicit no-interpolation/no-real-time-pacing boundary. The earlier merge-ref artifact remains superseded rather than relabelled exact-head evidence.
- **Agency / non-domination:** Animation owns clip/sample evidence only. Rigging owns deformation, Geometry owns topology, Art Direction owns visual direction, Visual Observer owns independent perceptual QA, Runtime owns performance, and gameplay/controller owners keep their own gates.
- **Continuity:** work stayed in existing Animal PR #5; prior temporal/seam evidence remains valid; no Wreckline, Object, Nature, Weather, Map, UC or coordination product code was rewritten.
- **Wisdom before speed:** a named target-engine evidence gap was closed before retiming an unreviewed clip, adopting an unaccepted weighting profile, opening another motion lane or centralizing an organic animation abstraction into UC.

## Handoffs

- **Visual Observer / QA:** review artifact `10433418841`, especially the retained Godot neutral / peak / last-visible / wrapped-neutral frames together with prior 40-frame sampled playback. Judge cadence, silhouette, pinching, paw/limb oddities and visible seam without inferring interpolation or real-time pacing.
- **3D Art Director:** judge whether the unchanged `18° / 14°` raised-cosine articulation pulse is directionally useful before Animation changes amplitude, phase or timing.
- **Rigging / Deformation:** keep `smoothstep-v0` and `ease-out-power-0p75-v1` separate. If the latter receives visual acceptance, compare this same clip across profiles so only deformation changes.
- **Geometry / Topology:** connected-topology PR #4 receives no inherited Animation PASS and still needs its own deformation/motion observation if adopted.
- **Technical Art / UC:** no shared organic animation engine is requested. The useful reusable lesson is proof-host evidence binding: exact source-head checkout -> exact authored payload -> pinned renderer -> readback -> retained fixed renders -> explicit non-claims.
- **Capability Cartographer:** the Wreckline donor pattern now has a second materially different use of pinned Godot motion observation, but the motion semantics remain source-local. Any shared extraction should be limited to genuinely repeated evidence plumbing, not domain motion logic.

## Next Animation pass

1. Consume independent Visual Observer / Art Director review of this exact Animal motion before changing timing, phase or amplitude.
2. If they identify a specific cadence, pose, paw, silhouette or seam defect, repair only that bounded issue and retain matched before/after target-host evidence.
3. If this pulse is accepted directionally, the next motion change should be evidence-driven: either compare the same clip against an independently accepted weighting candidate or add a second bounded motion primitive supported by the exact rig.
4. Do not claim interpolation, real-time engine pacing, controller/state-machine behavior or gameplay until those paths are directly exercised and independently gated.
