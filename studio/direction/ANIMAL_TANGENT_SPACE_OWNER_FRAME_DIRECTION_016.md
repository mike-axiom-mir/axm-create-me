# 3D Art Direction 016 — Animal Owner-Frame Tangent-Space Receiving Direction

Date: 2026-09-17

Decision: **`PASS_ART_DIRECTION_ANIMAL_OWNER_FRAME_TANGENT_SPACE_REPRESENTATIVE_DEFORMATION_016`**

Production hold: **`HOLD_FINAL_ANIMAL_NORMAL_TANGENT_PRODUCTION_ADOPTION__DEFORMED_TRANSPORT_DIRECTION_FRAME_EQUIVALENCE_PENDING`**

## Scope

This is a coordination-only Art Direction decision in `axm-create-me`. It changes no Animal source geometry, topology, UVs, normals, tangents, rig, weights, material values, Animation, Runtime, Universal Creation or gameplay implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this gate now

The previous Art Direction pass accepted the explicit logical-quad normal field through representative deformation, but deliberately held final normal+tangent adoption for two missing facts:

1. a real tangent-space shaded receiving proof on the exact current Geometry/Rigging basis;
2. deformed transport direction-frame equivalence.

The first fact is now ready and independently reviewed. The second is now measured and is still a real HOLD. Closing only the Art-facing owner-frame question is therefore the highest-leverage bounded move; it removes Art Direction as an ambiguous blocker without hiding the transport defect or duplicating Rigging/Technical Art work.

## Exact reviewed identity

Repository: `mike-axiom-mir/axm-animal-design`

Materials PR #24 — `Materials: render deformed tangent-space diagnostic in Godot`

Exact Materials head:

`e9d5c451b16bd05d2419248f58bef911f83dc1e8`

Pinned owner chain:

- Geometry UV/normal/tangent basis head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- Rigging deformed tangent-frame head: `63c65d57fda0595217f86d971ff8c67f256188be`;
- final seam-aware render domain: `42 source -> 84 render vertices / 80 triangles`;
- sides: LEFT + RIGHT;
- weighting identities: `smoothstep-v0`, `ease-out-power-0p75-v1`;
- representative poses: `-60/-30/0/+30/+60°`;
- cameras: `three_quarter`, `grazing`;
- target host: Godot `4.7.2`, GL Compatibility.

Retained Materials artifact:

- ID `10475157597`;
- 120 real PNGs = 40 exact pose/camera contexts × 3 shader modes;
- GitHub SHA-256 `00c01a3728002140b85327f826423eead61e3557d66c79299d1e4fcf00c5ba1b`;
- independently downloaded and rehashed by this Art Direction pass to the same SHA-256.

Shader modes:

1. `flat_tangent_control`;
2. `periodic_tangent_probe`;
3. deliberate `flipped_handedness_mutation`.

The periodic probe is diagnostic data, not a production normal map.

## Direct Art Direction observation

I inspected the full 40-context periodic-probe contact set and enlarged flat / periodic-probe / flipped-W comparisons across both sides, both weighting identities, strong positive/negative bends and both camera contexts.

Within these retained contexts:

- the tangent-space probe changes internal surface response without changing the intended silhouette/form read;
- the upper segment -> elbow -> lower segment remains visually coherent through the representative deformation envelope;
- no new broad culling loss, hole, spike, clipping break, gross inversion, obvious hard UV-wrap seam, gross cap/side transition failure or whole-surface corruption is visible in the exact probe;
- the deliberate W flip creates a clearly different shading field, so handedness corruption is visually consequential rather than hidden by the receiving path;
- the probe does not justify a source-form, weighting, UV, PBR or lighting retune merely to make the diagnostic look more dramatic.

Independent Visual Observer / QA separately rehashed the same artifact and reported zero retained-view coverage-mask change across flat/probe/flipped modes in all 40 contexts, substantial probe response over visible foreground, visible W-flip response in every context, and no retained-context broad seam/inversion/culling/cap-transition defect.

## Art Direction decision

**`PASS_ART_DIRECTION_ANIMAL_OWNER_FRAME_TANGENT_SPACE_REPRESENTATIVE_DEFORMATION_016`**

Exact meaning:

> For Materials PR #24 exact head `e9d5c451b16bd05d2419248f58bef911f83dc1e8`, the current Geometry #20 / Rigging #22 owner-frame UV + explicit-normal + tangent chain is visually acceptable as the current tangent-space diagnostic direction across the retained representative deformation contexts. Preserve this exact owner-frame receiving lookdev as the comparison baseline; do not compensate for downstream transport mismatch by changing Materials, source form, UVs, weights or lighting.

This closes the **owner-frame tangent-space shaded appearance** question left open by Direction 015.

It does **not** make the procedural probe a production texture and does **not** close production transport.

## Production transport remains held

Rigging PR #25 exact head:

`fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`

Scoped Rigging result:

**`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`**

Across the exact 41 transported authored keys:

- max transported position residual: `3.712575483167813e-08 m` — PASS;
- max UV residual: `2.6656007523325565e-08` — PASS;
- tangent-W mismatches: `0` — PASS;
- normal deformation excess: `7.541933278181338°` — HOLD;
- corrected tangent deformation excess: `3.6840862372161047°` — HOLD;
- Gram–Schmidt restores orthogonality but does not restore owner-frame direction equivalence.

Technical Art PR #3 exact current gate head:

`01458a9697406a649b0e1e3bf3997f7ea817a344`

Current Technical Art state:

**`PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`**

Its fail-closed receiver correctly refuses tangent-space runtime promotion while this owner-side direction mismatch remains active.

Therefore final adoption stays:

**`HOLD_FINAL_ANIMAL_NORMAL_TANGENT_PRODUCTION_ADOPTION__DEFORMED_TRANSPORT_DIRECTION_FRAME_EQUIVALENCE_PENDING`**

## Direction / handoff

### Materials PR #24

Freeze the exact owner-frame diagnostic as the current Art-approved comparison baseline. Do not retune neutral PBR values, probe strength, UVs or lighting to hide the downstream transport mismatch. The probe remains diagnostic-only.

### Rigging PR #25

Keep the measured direction-frame HOLD intact. Art Direction is not requesting a source-form, rig or weight rewrite. Any future correction/reconstruction must be judged against the same owner frame and must not trade away the already-green position/UV/handedness identity.

### Technical Art PR #3

The next useful production-chain proof is a concrete correction/reconstruction path for deformed normal/tangent direction, followed by a real target-host shaded A/B against this accepted owner-frame diagnostic. Do not promote tangent-space runtime readiness from static transport or orthogonality alone.

### Visual Observer / QA

The owner-frame diagnostic no longer waits on Art Direction. Preserve this exact artifact/head as the visual reference when a corrected transported receiver exists; independently compare corrected transported shading against the owner-frame reference rather than inheriting this PASS by similarity.

### Animation PR #5

Its 41-sample shaded sequence remains useful downstream evidence, but this Art pass does not promote discrete sampled motion, interpolation, pacing or production transported shading. Temporal acceptance stays separate.

## Explicit non-claims

This direction does **not** establish:

- a production Animal normal map or final authored texture;
- final UV island packing or texel density;
- seam freedom under arbitrary cameras, lights, renderers or displays;
- deformed GLB / engine normal-tangent direction equivalence;
- a final correction/reconstruction algorithm;
- continuous real-valued deformation equivalence;
- Animation timing, interpolation or playback acceptance;
- target-engine importer/controller equivalence;
- target-device CPU/GPU/FPS/VRAM/memory acceptance;
- final fur, skin, subsurface, decals, wear or production PBR quality;
- anatomy, biology, muscle, volume preservation or skin sliding;
- gameplay, collision or interaction readiness;
- CANON;
- production/game readiness;
- 3D Art Direction mastery.

## Four-root gate

- **Truth:** the owner-frame visual PASS and transported-frame direction HOLD stay separate; the exact evidence digest and measured angular residuals remain explicit.
- **Agency / non-domination:** Art Direction accepts appearance only. Geometry owns surface basis, Rigging owns deformation truth, Materials owns lookdev evidence, Technical Art owns transport/correction, QA owns independent verification, Runtime owns performance/controller concerns, and Mike / the four-root merge gate retain CANON authority.
- **Continuity:** Direction 015, Materials #24, Rigging #25 and Technical Art #3 remain distinct provenance/rollback identities rather than one rewritten success story.
- **Wisdom before speed:** close the proven owner-frame visual question now, but refuse production promotion until the measured transported direction-frame mismatch is actually repaired and re-rendered.

The four AXM roots remain the merge gate.
