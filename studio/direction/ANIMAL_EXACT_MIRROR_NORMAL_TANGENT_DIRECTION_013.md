# 3D Art Direction — Animal Exact-Mirror Normal/Tangent Direction 013

Date: 2026-09-17
State: **HOLD_ART_DIRECTION_ANIMAL_EXACT_MIRROR_FINAL_VISUAL_ADOPTION__REQUIRE_FORM_COHERENT_MIRROR_STABLE_NORMAL_TANGENT_POLICY_013**

## Scope

This is a coordination-only Art Direction packet. It changes no Animal source geometry, topology, rig, weighting, animation, material profile, Universal Creation product code, runtime code or CANON state.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Exact receiving chain

Structural topology owner:

- repository: `mike-axiom-mir/axm-animal-design`;
- Geometry PR #13 — `Geometry: restore exact bilateral surface correspondence`;
- exact Geometry head: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- right candidate: `front-right-connected-chain-elbow-source-successor-003-mirror-surface-topology-001`;
- compared surface budget: `42` vertices / `80` triangles;
- source positions unchanged;
- all `30` longitudinal quad diagonals change relative to the historical right topology while cap triangle vertex-sets remain.

Deformation rebind:

- Rigging PR #15 exact head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- result: `PASS_BILATERAL_EXACT_MIRROR_SURFACE_RIGGING_REBIND_DENSE_SWEEPS`;
- `484` discrete structural pose observations;
- maximum mirrored posed-vertex residual `0.0 m`;
- maximum retained mirrored surface-metric residual `0.0` for both exact weighting profiles.

Surface-response review:

- Materials PR #14 — `Materials: review exact-mirror topology shading in Godot`;
- exact Materials head: `96e998e5c793057836e01656aca9f71481439c9b`;
- target host: Godot `4.7.2` GL Compatibility;
- retained workflow: `35152434735` — SUCCESS;
- artifact: `10469607407`;
- artifact SHA-256: `e9de500cca011e6192d9a2de7b73edbda01b3ce103672ac1563448c7ed3f2564`;
- eight retained PNGs: historical-right vs exact-mirror-right, two cameras, `face_split` and `vertex_smooth` generated-normal modes.

Technical Art has separately transported the exact topology through current UC as static GLB while explicitly labelling its averaged normals transport-only. That transport success does not decide the surface appearance.

## Direct visual observation

I directly inspected all eight retained target-host renders and compared the matched historical-right / exact-mirror-right pairs.

### Face-split generated normals

The topology change is visible as a small diagonal/facet-response change but does not introduce an observed silhouette break, hole, spike, gross seam or focal corruption in the two retained static cameras.

Independent Visual QA measured:

- three-quarter: `3,211` changed foreground-relevant pixels above the retained >1-LSB criterion, `16.46%` of visible foreground, median absolute luma delta about `0.213 LSB`, 95th percentile about `2.00 LSB`, max about `4.00 LSB`;
- grazing: `2,790` changed pixels, `12.70%` of visible foreground, median about `0.213 LSB`, 95th percentile about `2.21 LSB`, max about `3.00 LSB`.

This is compatible with the QA result `PASS_ANIMAL_EXACT_MIRROR_STATIC_SILHOUETTE_AND_FACE_SPLIT_NONCORRUPTION`, not a final flat-shaded style preference.

### Vertex-smooth generated normals

The connectivity change materially redistributes highlight and dark rolloff even though positions and silhouette remain fixed.

Independent Visual QA measured:

- three-quarter: `16,522` changed pixels, `84.71%` of visible foreground, median absolute luma delta about `4.65 LSB`, mean about `6.52 LSB`, 95th percentile about `19.93 LSB`, max about `51.20 LSB`;
- grazing: `18,113` changed pixels, `82.44%` of visible foreground, median about `4.86 LSB`, mean about `6.49 LSB`, 95th percentile about `19.00 LSB`, max about `47.20 LSB`.

Direct inspection reproduces the same qualitative result: the outer contour stays stable, but the smooth highlight / shadow transition along the upper shaft, elbow and lower segment shifts over most of the visible form.

That difference is too large to call generated-smooth shading visually neutral. It is also **not** sufficient evidence that the historical generated-normal response is aesthetically superior. The historical response is itself tied to the older structurally asymmetric triangle layout.

## Art Direction decision

**`HOLD_ART_DIRECTION_ANIMAL_EXACT_MIRROR_FINAL_VISUAL_ADOPTION__REQUIRE_FORM_COHERENT_MIRROR_STABLE_NORMAL_TANGENT_POLICY_013`**

Exact meaning:

> Preserve Geometry PR #13 as the structurally stronger exact-mirror topology candidate, but do not grant final visual adoption while its smooth-form appearance is still being decided implicitly by triangle-diagonal / area-weighted generated normals. The next visual candidate should make normal/tangent intent explicit and should aim for a form-coherent, bilaterally consistent organic surface read on the exact-mirror topology.

This is deliberately **not** a request to roll back Geometry #13 merely to recover old generated-normal pixels. It is also not approval of the current exact-mirror generated-smooth response.

## Bounded next visual proof

The next surface-response candidate should hold all of the following fixed:

- exact Geometry #13 positions and indices;
- exact `42v / 80t` surface budget;
- Organic source identity;
- Rigging #15 joint/weight identities;
- neutral probe material;
- lighting;
- the existing three-quarter and grazing review cameras;
- source scale and silhouette.

Change only the **explicit normal/tangent policy** needed to control the smooth-form read.

The visual target is not historical pixel matching. The review should ask whether the exact-mirror topology can retain:

- continuous readable organic highlight / rolloff through upper shaft -> elbow -> lower segment;
- bilateral mirror coherence rather than side-specific triangulation response;
- no newly authored crease, hard seam, faceting emphasis, diagonal imprint, silhouette change or shape rewrite;
- deterministic provenance for whatever normal/tangent data is supplied.

No particular algorithm, smoothing-angle threshold, weighted-normal recipe or tangent generator is mandated by this direction packet. The implementation owner should choose the smallest explicit policy that can be evidenced without moving the form or weakening the structural topology.

## Handoffs

### Materials / LookDev — Animal PR #14

Use the current neutral target-host probe as the comparison harness. Do not retune the Animal material or lighting to hide the topology response. If an explicit normal/tangent candidate is authored, compare it against the current generated-smooth control while keeping Geometry #13 exact. Retain the existing eight-image evidence as historical before-evidence.

### Geometry — Animal PR #13

Keep the exact-mirror topology candidate and its structural PASS intact. No topology rollback or source-position edit is requested from this Art Direction result. Final adoption remains held only because surface response is unresolved.

### Technical Art / UC — Animal PR #3

Keep transport-only normals labelled transport-only. If Materials/Geometry produces an explicit accepted normal/tangent payload, prove that exact payload can cross the current UC/GLB boundary without silently regenerating or replacing it. Do not invent the aesthetic policy in Technical Art.

### Rigging — Animal PR #15

The structural rebind remains valid. A future visual surface candidate must later be checked under deformation before final production-surface claims, but this packet requests no rig or weighting change.

### Visual Observer / QA

After a real explicit normal/tangent candidate exists, review the exact target-host A/B for highlight continuity, bilateral coherence, facet/diagonal artifacts and new seams. Static neutral acceptance must not be silently extended to deformed poses.

### Animation / Runtime

No clip, interpolation, playback, target-device or cost decision is made here.

## Explicit non-claims

This packet does **not** establish:

- final topology adoption or rejection;
- a production normal/tangent algorithm;
- authored UVs, textures, fur, subsurface, skin or final PBR look;
- anatomy, biology, muscle, skin sliding or volume preservation;
- deformed-normal quality across the full Rigging envelope;
- Animation quality or playback;
- arbitrary camera/FOV/lighting/renderer/display equivalence;
- target-device CPU/GPU/FPS/VRAM/memory acceptance;
- gameplay, collision or interaction readiness;
- CANON;
- production/game readiness;
- 3D Art Direction mastery.

## Four-root gate

- **Truth:** preserve both the structural topology improvement and the renderer-visible generated-normal tradeoff; neither erases the other.
- **Agency / non-domination:** Geometry owns topology, Materials owns surface-response implementation/evidence, Technical Art owns transport, Rigging owns deformation, QA owns independent visual verification, and Art Direction owns only the bounded visual target/preference.
- **Continuity:** historical-right, exact-mirror topology, generated-normal comparisons and any future explicit normal/tangent candidate remain separate exact identities with rollbackable provenance.
- **Wisdom before speed:** resolve the surface-response dependency without sacrificing the structurally stronger topology or disguising it with material/lighting changes.

The four AXM roots remain the merge gate.