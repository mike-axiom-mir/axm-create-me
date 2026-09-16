# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_DISCRETE_SAMPLED_PLAYBACK_SEAM / EXACT 40-FRAME SEQUENCE RASTERIZED / INTERPOLATION + TARGET-ENGINE + AESTHETIC + RUNTIME-CONTROLLER + GAMEPLAY HOLD**

## Current activation

Animation stayed inside the existing source-owned Animal PR #5 rather than opening a duplicate motion lane or retiming an unreviewed clip.

The constellation scan still leaves two materially different existing Animation proofs:

1. **Mechanical — Wreckline PR #4:** bounded harpoon aim/recoil/recover evidence in a Godot proof host remains the existing mechanical motion lane.
2. **Organic — Animal PR #5:** the exact repaired quadruped rig carries the studio's first bounded non-locomotion articulation pulse and is explicitly named by current Art Direction / Visual Observer status as one of the strongest ready review surfaces.

Other current motion-adjacent work does not displace that lane:

- **Object:** Rigging PR #3 now has a continuous body/lid shell-clearance certificate across the exact `0..110°` structural hinge range, but its own status still withholds Animation timing/style, runtime and visual acceptance. Hard-Surface receiving-module work is separate. Opening an Object clip before form/range usefulness is visually accepted would duplicate an unresolved downstream gate.
- **Character:** the first body still has no accepted animation-ready rig; its flex zones remain upstream evidence only.
- **Animal Geometry:** connected-topology PR #4 has stronger static structural evidence but remains visually/deformation unaccepted and receives no inherited Animation PASS.
- **Nature / Map / Weather:** current motion belongs to VFX / Environment / Runtime receiving lanes rather than this specialist.
- **Animal Rigging weighting:** `ease-out-power-0p75-v1` remains numerically promising but still lacks the requested direct shaded/perspective acceptance against `smoothstep-v0`.

Art Direction and Visual Observer still have not accepted the quadruped pulse's perceptual timing or motion direction. The correct bounded step was therefore to make the **existing exact samples honestly replayable as a repeatable evidence sequence**, not to change the clip while its visual gate is open.

`axm-create-me` remains coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`.

## Exact lane and identity preserved

Repository:
`mike-axiom-mir/axm-animal-design`

Existing draft PR:
**#5 — Animation: prove first bounded quadruped articulation loop**

Branch:
`studio/animation-quadruped-articulation-loop-001`

Stacked base:
Rigging PR #2 exact head `04760112deb81a8d145226fe7ee02923107c9916`.

Current exact Animation head:
`d7c2c8b7b296cdb6907886ddf9bb2e49b76416f7`

PR state at end of activation: **OPEN / DRAFT / MERGEABLE**.

Exact preserved identities:

- Organic source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- neutral surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting profile: `smoothstep-v0`.

The authored clip remains unchanged:

- truth label: `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`;
- duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- source sample count: `41` including endpoints;
- curve: raised cosine `neutral -> peak -> neutral`;
- front elbows: `0 -> +18° -> 0`;
- hind knees: `0 -> +14° -> 0`;
- bilateral pairs remain matched.

The implementation still calls the exact existing Rigging deformation machinery for each sampled pose. No second rig/weight solver, timing retune, amplitude change, phase offset or new weighting profile was introduced.

## Prior gate retained — all-sample temporal continuity

Previous exact head:
`b5e6d3832459614044d6f8c0be316341b4366353`

Prior scoped result:
**`PASS_LOOP_TEMPORAL_CONTINUITY`**

Retained prior artifact:

- `quadruped-articulation-loop-001-temporal-evidence`;
- artifact ID `10430538721`;
- archive SHA-256 `4a69709a7538b323efe18c1837bc81d782ffe96adc0fd88569fac988ec79bc76`.

That evidence remains valid history for the unchanged clip: all 41 exact samples have stable topology, uniform `0.025 s` spacing, exact neutral closure, mirrored rise/fall geometry and angles, monotonic driven tracks, nonzero adjacent motion and a bounded maximum adjacent step. Its nine-sample board was directly inspected previously.

It did not establish repeat playback, interpolation or aesthetic quality.

## Selected improvement — discrete sampled-playback seam contract

Added Animal-local contract:

`axm.animal-animation-sampled-playback/v0.1`

Playback mode:

`DISCRETE_AUTHORED_SAMPLES_NO_INTERPOLATION`

This contract does not author or interpolate motion. It consumes the exact existing temporal PASS and maps the endpoint-inclusive authored sample set into a repeatable display cycle.

For the current 1.0 s / 40 Hz clip:

- source remains `41` endpoint-inclusive samples (`0.000 .. 1.000 s`);
- visible cycle uses exact samples `0..39` (`0.000 .. 0.975 s`);
- source endpoint sample `40` is deliberately not displayed as a second frame because it is the exact neutral duplicate of sample `0`;
- exact cycle boundaries deterministically map to sample `0`;
- the visible seam step `0.975 -> 0.000 s` must equal the authored final adjacent step `0.975 -> 1.000 s` within an explicit `1e-12 m` position tolerance;
- explicit index probes cover start, last interval, just-before-wrap, exact wrap, one interval after wrap and the second exact wrap;
- negative tests reject a non-endpoint-inclusive sample count, negative playback time and a clip whose final retained keyframe no longer closes at the exact clip endpoint.

The evidence builder also retains a self-contained animated side/front SVG. It switches only between the exact 40 authored visible samples at the exact 40 Hz cadence using discrete SMIL opacity changes. It generates no intermediate poses.

The SVG is XML-parsed before upload, preserving the earlier lesson that a numerically green evidence path must not silently retain an invalid visual artifact.

## Exact final CI and retained evidence

Exact-head workflow runs on `d7c2c8b7b296cdb6907886ddf9bb2e49b76416f7`:

- `Tests` run **35059866027** — **SUCCESS** on Python 3.11 and 3.13;
- the Python 3.11 job built/uploaded the original evidence families plus the new sampled-playback evidence;
- inherited `Weighting refinement evidence` run **35059866021** — **SUCCESS**.

Retained current artifact:

- name: `quadruped-articulation-loop-001-playback-evidence`;
- artifact ID: **10431893686**;
- exact workflow-head binding: `d7c2c8b7b296cdb6907886ddf9bb2e49b76416f7`;
- size: `732,635 bytes`;
- archive SHA-256: **`290b0725f3fca44c68581ec58de0c4d9aef8850695d97fb6d03eb677934fdc68`**.

The artifact was downloaded after CI and independently rehashed to the exact GitHub digest. Its retained JSON parses and its 5.4 MB animated SVG independently XML-parses.

Current scoped gate:

**`PASS_DISCRETE_SAMPLED_PLAYBACK_SEAM`**

Exact metrics:

- source endpoint-inclusive sample count: `41`;
- displayed frames per cycle: `40`;
- display cadence: `40 Hz`;
- display interval: `0.025 s`;
- display cycle duration: `1.0 s`;
- exact endpoint seam: `true`;
- visible wrap step (`0.975 -> 0.000 s`): `0.000944288595739695 m`;
- authored final adjacent step (`0.975 -> 1.000 s`): `0.000944288595739695 m`;
- wrap-step residual: `0.0 m` against tolerance `1e-12 m`;
- playback index probes: PASS;
  - `0.000 -> 0`;
  - `0.975 -> 39`;
  - just-before-wrap -> `39`;
  - exact `1.000 -> 0`;
  - `1.025 -> 1`;
  - exact `2.000 -> 0`.

This closes one specific truth gap from the previous pass: repeating the exact discrete sequence no longer requires guessing how to treat the duplicate endpoint or seam.

## Direct motion sanity observation

The hosted environment blocked Chromium navigation to both local file URLs and localhost evidence URLs, so direct browser-runtime playback could not be honestly observed here. That limitation remains explicit; no browser, target-engine or frame-pacing PASS is claimed.

A separate local validation path was therefore used only as a motion sanity check:

1. the exact retained SVG was parsed;
2. all `40` exact frame groups were rasterized independently without interpolation;
3. the resulting PNG sequence was encoded at exactly `40 fps` into a `1.000 s`, `40`-frame MP4;
4. selected exact samples at `0.000 / 0.250 / 0.500 / 0.750 / 0.975 s` were directly inspected side/front.

Local proof-video SHA-256:
`c73c88db1fad59b903bcd8fb0fc00e17aaea3517ce2cf9348f1845bd7d196c24`

Within those exact sampled images:

- the lower-limb/paw pulse advances visibly into the `0.500 s` midpoint;
- the later samples return toward the neutral read by `0.975 s`;
- front-view bilateral matching remains visible across the inspected samples;
- the sampled sequence does not reintroduce the historical detached-paw visual defect.

This is **local sampled-sequence sanity evidence**, not independent Art Direction / Visual Observer acceptance and not proof of interpolation between 25 ms samples.

## Why no retime or Object clip was added

Current coordination evidence still says:

- Art Direction lists Animal PR #5 as a strongest next ready visual surface and has not yet approved its direction/timing;
- Visual Observer likewise identifies Animal PR #5 as a high-value next independent QA surface;
- Rigging's `ease-out-power-0p75-v1` Animal candidate remains blocked on matched shaded/perspective visual review;
- Object's `0..110°` hinge range now has stronger continuous structural clearance evidence, but Rigging explicitly withholds motion style, Animation and runtime acceptance;
- Character lacks an accepted rig;
- Nature/Weather dynamic work remains owned by their existing VFX/Environment/Runtime lanes.

Changing amplitude, timing or adding a second clip now would mix authored-motion change with an unresolved visual gate. Opening Object Animation now would similarly move ahead of its unresolved form/range/style decision.

## Evidence repair history remains visible

The earlier temporal-evidence intermediate head `8cb3b23986b3a7525cd69132a107a7f1072551c0` had green numeric CI but retained malformed SVG XML because a literal `<` appeared in footer text. That artifact remains historical, not current evidence.

The existing temporal builder repair XML-parses its review board before retention. The new sampled-playback builder independently applies the same validity discipline to its animated SVG.

No failed or superseded evidence has been silently relabelled current.

## Truth boundary / non-claims

The current Animation PASS establishes only:

> for this exact Animal source, exact repaired rig, exact `smoothstep-v0` weighting and exact 1.0 s / 40 Hz authored pulse, the endpoint-inclusive source samples can be mapped into a deterministic 40-frame repeated **discrete** display cycle whose wrap step exactly matches the authored final adjacent step, without duplicating the neutral endpoint.

It does **not** establish:

- interpolation quality between the authored 25 ms samples;
- browser/engine frame pacing or continuous renderer playback;
- biological anatomy, gait or locomotion;
- foot planting, root motion, balance, contact or acting quality;
- perceptual animation quality, weight, personality or final timing;
- shaded/perspective deformation quality, volume preservation or dynamic self-intersection freedom;
- acceptance of Rigging's `ease-out-power-0p75-v1` candidate;
- production skinning or behavior on Animal Geometry PR #4;
- exported animation/skeleton transport;
- target-engine or target-device playback;
- runtime-controller or state-machine integration;
- collision, gameplay acceptance or input behavior;
- target performance/resource acceptance;
- a generic UC animation organ, Profession Fabric promotion, CANON, production readiness or Animation mastery.

## Root gate

- **Truth:** source/rig/clip/weighting identities remain exact; prior temporal evidence, current discrete-playback evidence, local raster/video sanity evidence and blocked browser-runtime observation are kept distinct.
- **Agency / non-domination:** Animation owns clip timing/evidence only. Rigging owns deformation, Geometry owns topology, Art Direction owns visual direction, Visual Observer owns independent perceptual QA, Runtime owns performance, and gameplay/controller owners keep their own acceptance gates.
- **Continuity:** work stayed in existing Animal PR #5, preserved the exact clip and previous evidence history, and did not overwrite the separate Wreckline mechanical lane or Object structural hinge lane.
- **Wisdom before speed:** the seam/playback evidence gap was closed before changing an unreviewed motion, adding a second clip, adopting an unaccepted weighting profile, or building a generic animation system.

## Handoffs

- **Visual Observer / QA:** inspect exact current artifact `10431893686`. It is a repeatable 40-frame sampled-playback evidence surface. Judge visible seam, cadence, pinching, paw oddities and sampled continuity; do not infer interpolation or target-engine timing.
- **3D Art Director:** judge whether the unchanged 18°/14° raised-cosine pulse is directionally useful before Animation retimes, adds phase offsets or expands amplitude.
- **Rigging / Deformation:** keep `smoothstep-v0` and `ease-out-power-0p75-v1` separate. If the latter receives visual acceptance, compare this **same exact clip** across profiles so only deformation changes.
- **Geometry / Topology:** connected-topology PR #4 remains separate and receives no Animation PASS. If it clears visual review, it needs its own deformation/motion validation.
- **Object / Hard Surface / Rigging:** preserve the new continuous shell-clearance result, but do not infer clip timing/style. Animation should enter only after Art Direction / QA retains the source/range or identifies a real articulation need.
- **Technical Art / UC:** no organic playback abstraction is requested from one source. The endpoint/seam mapping is an evidence-method candidate, not a UC motion engine.
- **Capability Cartographer:** possible reusable learning is `endpoint-inclusive authored samples -> omit duplicate endpoint in display cycle -> exact seam-step equivalence -> retained animated evidence -> independent perceptual review`. Do not centralize from one source.

## Next Animation pass

1. Consume Visual Observer / Art Director review of exact artifact `10431893686` before changing amplitude, phase or timing.
2. If a specific visible seam/cadence/pose defect is identified, repair only that bounded issue on the same source/rig/clip lane and retain before/after evidence.
3. If the current pulse is accepted directionally, choose the next evidence-directed step: compare the same clip on an independently accepted weighting candidate, or add a second bounded motion primitive only if the rig honestly supports it.
4. Do not claim continuous interpolation, target-engine/controller behavior or gameplay acceptance until those paths are directly tested.
