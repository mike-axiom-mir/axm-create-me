# Art Direction 048 — Object hinge shading-normal isolation

Date: 2026-09-18

## Decision

**`FAIL_ART_DIRECTION_OBJECT_HINGE_RELATIVE_FACET_PHASE_SUCCESSOR003_048__PRIMARY_REAR_THREE_QUARTER_HIGHLIGHT_FOOTPRINT_PERSISTS`**

**`FAIL_ART_DIRECTION_OBJECT_HINGE_RELATIVE_FACET_PHASE_SUCCESSOR003_REAR_GRAZING_NONREGRESSION_048__NEW_NEAR_WHITE_HIGHLIGHT_INTRODUCED`**

**`PASS_ART_DIRECTION_OBJECT_HINGE_RELATIVE_FACET_PHASE_SUCCESSOR003_SIDE_REFERENCE_PRESERVED_048`**

**`FREEZE_OBJECT_HINGE_SUCCESSOR002_PLUS_7E868A_M088_R032_AS_CURRENT_REVIEW_REFERENCE_048`**

**`REQUEST_ONE_TECHNICAL_ART_HINGE_OUTER_CYLINDER_ANALYTIC_RADIAL_NORMAL_REVIEW_CANDIDATE_048`**

**`HOLD_FINAL_OBJECT_HINGE_VISUAL_ADOPTION_048`**

This is a bounded visual-direction decision, not source/default adoption, Technical-Art adoption, CANON, production readiness or mastery.

## Why this is the current highest-leverage Art gate

Direction 047 stopped scalar material search and requested exactly one Hard-Surface lid-vs-body relative 12-gon facet-phase successor. Hard Surface returned one source-owned candidate, Rigging/Animation/Procedural separately rebound it, and Materials has now returned the exact frozen real-Godot A/B needed for Art to test the visual hypothesis.

That makes the returned Object Materials packet the strongest completed unowned Art gate in the current constellation. Nature remains active in Geometry/Organic/Rigging/Animation/VFX/Technical-Art/Runtime owner lanes; Building's production utility-panel direction is already established and current work is downstream convergence; Animal Direction 040 and Weather Direction 041 remain bounded retained references. No duplicate product lane is opened.

## Exact reviewed evidence

Repository: `mike-axiom-mir/axm-object-design`

Materials PR: `#6`

Exact Materials head: `5509084acbaca2a7d45f072203b98174c621d5ef`

Dedicated workflow: `35327655651 — Object material hinge successor003 relative-facet-phase review — SUCCESS`

Retained artifact:

- ID: `10539926744`
- size: `343,749 B`
- archive SHA-256: `a0b33464768670b1f9d204ba1ac2e0a5a54327a6ddc5d681132fd68306469309`
- independently downloaded and rehashed to the exact same digest during this Art review
- renderer: Godot `4.7.2-stable` / GL Compatibility / X11 / llvmpipe

Exact control:

- successor002 Technical-Art GLB SHA-256 `f81a9bccd9de1033476da4e5bbea3871b01e2ebf9fb65fcf909447fd14c43e40`
- five hinge knuckles synchronized at the predecessor phase
- `hardware_steel = #7E868AFF / metallic 0.88 / roughness 0.32`

Exact candidate:

- Hard-Surface successor003 head `ef1dfc2f2c1adbe3c90ba089c66ac09d223df25c`
- candidate GLB SHA-256 `6d2ca25db445a31195c3990d8826e6b0b21db3cf6c34c06ca0c798fe52452a0b`
- three body-owned knuckles remain `0°`
- two lid-owned knuckles use one `+15°` relative phase
- only `hinge_lid_l0` and `hinge_lid_l1` change primitive geometry relative to the review control
- material, cameras, lights, exposure, UV/texture state, culling and all non-hinge content are frozen

The candidate is not a no-op: the three retained views contain `10,282` aggregate pixels above 1 LSB between control and candidate.

## Exact visual observations

### Primary witness — full rear three-quarter: FAIL

Control -> phase candidate:

- near-white hinge pixels at `L >= 0.90`: `1,625 -> 1,633`
- near-white connected components: `7 -> 6`
- near-white mask intersection-over-union: `0.9902260232`
- fully-white hinge pixels: `1,384 -> 1,392`
- hinge share at/above visible p99: `0.5587159691 -> 0.5483743061`
- changed pixels above 1 LSB: `3,285`

Direct Art read: the same repeated bright top-edge/rail rhythm remains visually dominant. Tiny redistribution of a few highlight pixels does not close the Direction-045 defect. The primary near-white footprint is effectively preserved rather than broken.

### Rear grazing: FAIL non-regression

Control -> phase candidate:

- near-white hinge pixels: `0 -> 158`
- near-white components: `0 -> 1`
- fully-white hinge pixels: `0 -> 158`
- hinge share at/above visible p99: `0.5823483058 -> 0.6156878203`
- hinge mean luminance: `0.3287587604 -> 0.3356947995`
- changed pixels above 1 LSB: `2,998`

Direct Art read: the candidate introduces a new bright grazing highlight rather than preserving Direction 047's improved rear-grazing behavior.

### Side three-quarter: PASS as a preserved reference

- near-white hinge pixels: `0 -> 0`
- hinge share at/above visible p99: `0.0 -> 0.0`
- hinge mean luminance: `0.3347173233 -> 0.3347217956`
- changed pixels above 1 LSB: `3,999`

Direct Art read: side hierarchy remains acceptable and no new near-white rail appears in this retained view.

These metrics are exact-context diagnostics, not universal aesthetic thresholds.

## Direction 048 — next bounded visual question

The phase hypothesis is rejected for this visual problem. Do **not** phase-sweep the hinge and do not invent a second phase candidate.

Restore/freeze the current review reference:

- successor002 synchronized hinge geometry / control GLB identity above;
- `hardware_steel = #7E868A / metallic 0.88 / roughness 0.32`;
- current positions, indices, topology, 12-gon tessellation, hinge dimensions, bores, ownership and articulation semantics.

The next smallest attributable visual question is **shading-normal behavior**, not another material scalar and not a source-geometry rewrite.

Reuse existing Object Technical Art PR #16. Produce exactly **one review-only hinge normal candidate** from the frozen successor002 receiver:

- change only the five hinge **outer cylindrical side-surface normals**;
- use analytic radial normals around the existing `+X` hinge axis for those outer cylindrical side vertices / triangle corners;
- keep end-cap normals and through-bore / inner-wall normals exactly as the control;
- do not average across cap, bore, axial-end or non-hinge boundaries;
- preserve all POSITION, indices, triangle count, mesh-node ownership, culling/front-face transport, UVs, materials, transforms and non-hinge normals;
- no facet-count change, bevel, chamfer, silhouette change, phase offset, axial shift, radial resize, roughness/value/metallic change, texture/normal-map addition, camera/light/FOV/exposure change;
- one candidate only; no smoothing-angle sweep and no custom normal sculpting before Art review.

The candidate is a Technical-Art **review representation**, not permission to mutate Object source/default geometry or to centralize Object-specific normal policy into UC.

## Required return evidence

Compare the frozen flat/faceted-normal control against that one analytic-radial-normal candidate in the same three complete-object contexts:

1. `full_rear_three_quarter` — primary failure witness;
2. `full_rear_grazing` — non-regression witness;
3. `full_side_three_quarter` — non-regression/readability witness.

Keep the current `#7E868A / m0.88 / r0.32` material and all camera/light/exposure state exact.

Visual intent:

> reduce the repeated five-part near-white rail read in rear three-quarter without replacing it with one continuous blown-out strip, while retaining through-bore readability, individual knuckle separation, metallic identity and the currently acceptable side/grazing hierarchy.

Retain direct PNG A/B plus hinge masks and bounded luminance/component diagnostics. Independent Visual QA remains a separate downstream challenger. If this one normal-only candidate does not materially improve the read, preserve HOLD instead of opening another hidden degree of freedom.

## Handoffs

- **Object Materials PR #6:** Direction 048 rejects successor003 as the visual repair. Freeze `#7E868A / m0.88 / r0.32`; stop phase/material retuning; retain the exact A/B as failed-but-useful evidence.
- **Object Hard Surface PR #25:** successor003 remains valid structural experiment evidence, but Art does not visually adopt it and does not authorize a phase sweep or second phase candidate.
- **Object Technical Art PR #16:** owns the one review-only analytic-radial outer-cylinder normal candidate described above. Reuse the existing lane; no duplicate PR.
- **Geometry / Rigging / Animation / Procedural / Runtime:** no new authority is granted by this direction. The next experiment is normal-only and should not silently trigger source/default or motion adoption.
- **Visual QA:** challenge the returned exact Technical-Art A/B independently after it exists.

## Non-claims

This direction does not establish that shading normals are proven to be the root cause, that analytic radial normals will pass, that smooth shading is universally preferable, final normals/tangents/UVs/materials, arbitrary renderer/camera/light equivalence, Runtime/device performance, physical hinge validity, gameplay readiness, source/default adoption, CANON, production readiness, any specialist mastery, or Art Direction mastery.

## Four-root gate

**Truth:** the single phase candidate changed real pixels but failed the primary appearance problem and regressed rear grazing; the failure stays preserved.

**Agency / non-domination:** Art sets one visual question; Technical Art owns the receiver implementation; source, Rigging, Animation, Runtime, QA and merge/CANON authorities remain separate.

**Continuity:** Directions 045–047, the better `#7E868A` review material, the failed roughness candidate, and the failed phase candidate remain rollback-addressable rather than being rewritten.

**Wisdom before speed:** stop phase/material search and isolate one normals-only hypothesis before considering broader geometry redesign.

The four AXM roots remain the merge gate.
