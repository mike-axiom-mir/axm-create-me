# AXM 3D Studio — Art Direction 047

Date: 2026-09-18

State:

**`PASS_ART_DIRECTION_OBJECT_HINGE_BASE_VALUE082_PARTIAL_REFERENCE_047`**

**`FAIL_ART_DIRECTION_OBJECT_HINGE_BASE_VALUE082_REAR_THREE_QUARTER_HIGHLIGHT_FOOTPRINT_CLOSURE_047`**

**`REQUEST_ONE_OBJECT_HARD_SURFACE_LID_VS_BODY_KNUCKLE_RELATIVE_FACET_PHASE_ONLY_SUCCESSOR_047__MATERIALS_FROZEN`**

**`HOLD_FINAL_OBJECT_HINGE_SUCCESSOR002_VISUAL_ADOPTION__SOURCE_REPROOF_RENDER_QA_RUNTIME_TARGET_DEVICE_PENDING`**

`mike-axiom-mir/axm-create-me` remains coordination-only. This packet changes no Object product geometry, material, transport, runtime representation, source/default adoption, merge state or CANON state.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this is the next bounded Art decision

Direction 046 rejected the one roughness-only `hardware_steel` repair (`0.32 -> 0.48`) and restored roughness `0.32`. It then authorized exactly one base-color VALUE-only successor while freezing metallic `0.88`, hue/chroma relation, geometry, Technical-Art transport/culling, UVs/textures, non-hinge materials, cameras/FOV/lights/exposure and the same three complete-object contexts.

Object Materials PR #6 returned exactly one such successor at head:

`134e9a7622868acbd184519eade15996ab20fbbe`

Exact candidate:

- control albedo: `#9AA3A8FF` = RGB8 `[154,163,168]`;
- successor albedo: `#7E868AFF` = RGB8 `[126,134,138]`;
- transform: round each control RGB8 channel × `0.82`;
- metallic: `0.88` unchanged;
- roughness: `0.32` unchanged;
- applies only to the five exact successor002 hinge knuckles;
- no second value candidate was tried.

Dedicated workflow `35319563489 — Object material hinge successor002 base-value successor` completed SUCCESS.

Retained artifact:

- ID `10536492694`;
- size `369,384 B`;
- archive SHA-256 `7f20f3285dff37dcb6d769870d687699bde0f9d579c8c453913a7308daa5756a`;
- renderer: Godot `4.7.2-stable` / GL Compatibility / X11 / Mesa llvmpipe;
- exact receiver: 31 visible mesh nodes / 1,052 triangles.

Independent Visual Observer / QA reviewed the same exact head/artifact and returned review `5245562753`.

## Exact Art observations

### Rear grazing — bounded repair works

Control `#9AA3A8 / m0.88 / r0.32` -> successor `#7E868A / m0.88 / r0.32`:

- hinge mean luminance: `0.400087 -> 0.333742`;
- hinge p95: `0.939880 -> 0.788606`;
- hinge share at/above visible p99: `0.736965 -> 0.582907`;
- fully-white hinge pixels: `0 -> 0`;
- QA near-white hinge pixels at `L >= 0.90`: `748 -> 55`.

Direct review: the rear-grazing hinge loses the broad glaring band created by the failed roughness experiment and remains readable as metal.

### Side three-quarter — retained reference preserved

- hinge mean luminance: `0.410350 -> 0.341283`;
- hinge p95: `0.512110 -> 0.423581`;
- hinge share at/above visible p99: `0.0 -> 0.0`;
- QA observes no hinge pixels at `L >= 0.90`.

Direct review: knuckle separation and a metallic response remain visible; the prior side-reference regression from roughness `0.48` is not reproduced.

### Rear three-quarter — original repeated highlight defect remains

Owner metrics move in the intended broad direction:

- hinge mean luminance: `0.499883 -> 0.450622`;
- hinge share at/above visible p99: `0.599410 -> 0.558716`;
- owner fully-white count reduces.

But independent QA isolates the actual repeated stripe and finds:

- hinge pixels at `L >= 0.90`: **`1,625 -> 1,625`**;
- control and successor `hinge ∩ L>=0.90` masks are **pixel-identical**;
- both remain the same **five connected knuckle highlight components**.

Direct Art inspection agrees: the darker value reduces surrounding/midtone pull but leaves the same synchronized five-part near-white top-edge rhythm. This is a real partial repair, not closure.

The `L>=0.90`, p95/p99 and connected-component observations are diagnostics for this exact receiver/context only. They are not AXM-wide aesthetic thresholds.

## Art decision

### 1. Freeze the Materials result as the current partial visual reference

Keep the exact reviewed hinge material candidate for the next comparison:

`#7E868AFF / metallic 0.88 / roughness 0.32`

Do **not** perform another base-value search, roughness change, metallic change, texture/normal/wear addition, camera move, lighting change or exposure change merely to force the rear-three-quarter stripe to disappear.

This candidate is a **review reference**, not source/default/final material adoption.

### 2. Change the next degree of freedom from material scalar to source-owned facet orientation

The remaining visible defect is highly localized: five near-white knuckle components remain spatially identical after a substantial base-value reduction, under frozen lighting and receiver state.

Working visual hypothesis — **not established cause**:

> the five regular 12-gon knuckle shells may be presenting synchronized exterior facet normals to this rear-three-quarter key, so scalar darkening changes the surrounding response without moving the clipped five-part highlight footprint.

The next smallest attributable test therefore belongs to the existing Object Hard-Surface hinge source-successor lane, not another Materials scalar search.

## Bounded Hard-Surface handoff

Use existing `mike-axiom-mir/axm-object-design` Hard-Surface PR #25. Do not open a duplicate hinge lane.

Author exactly **one** source successor from successor002 with only this new source-owned degree of freedom:

**one shared relative 12-gon cross-section phase offset between the two lid-owned hinge knuckles and the three body-owned hinge knuckles.**

Hard Surface owns the exact offset angle. No phase sweep and no second phase candidate are authorized before Art review.

Freeze all of the following:

- successor002 five-knuckle identities and axial ordering;
- segment count `12`;
- hinge +X centerline;
- axial centers/spans/lengths;
- outer radius/circumradius and shell dimensions;
- successor002 bore dimensions;
- pin/stop envelopes;
- component ownership (`2` lid-owned, `3` body-owned);
- source positions outside the five knuckles;
- all non-hinge Object geometry;
- Materials review reference `#7E868A / m0.88 / r0.32` for the later render comparison;
- Technical-Art transport/front-face/culling policy;
- UV/texture state;
- cameras/FOV/lights/exposure.

The intended geometric test is relative facet **orientation only**. No radial growth/shrink, axial shift, segment-count change, bevel/smoothing rewrite, bore change, stop change, silhouette redesign or material change is authorized by this packet.

Hard Surface must preserve its own source authority and explicitly re-prove any exact source/clearance/capture constraints affected by the phase successor. Geometry, Rigging and Technical Art acceptance do **not** transfer automatically merely because existing successor002 envelopes were designed to be phase-tolerant.

If one exact phase-only successor cannot be authored/proven without violating those owner constraints, preserve the HOLD and return that fact. Do not silently open another geometry or material degree of freedom.

## Later visual receive — only after source-owner proof

When and only when the exact Hard-Surface successor is returned with its required owner evidence, the existing Materials lane should rebind that exact source successor and render one frozen A/B:

1. current synchronized-phase successor002 with `#7E868A / m0.88 / r0.32`;
2. the one phase-only source successor with the exact same material.

Use the same three full-object contexts:

- rear three-quarter — **primary failure witness**;
- rear grazing — non-regression witness;
- side three-quarter — non-regression witness.

Visual intent:

> break or materially reduce the five-part synchronized near-white rear-three-quarter stripe while preserving metallic identity, through-bore readability, knuckle separation, the rear-grazing improvement and the side-three-quarter hierarchy.

Art/QA should judge the returned render directly. No numeric p99/near-white threshold is promoted into a universal acceptance rule.

## Why other lanes are not duplicated

- Nature Geometry/Rigging/Animation/VFX/Technical-Art/Runtime/Environment are active on the current five-socket motion chain; current work remains source-space/receiver/performance evidence and has not returned a stronger completed unowned Art gate.
- Building utility-panel production-surface direction remains downstream-owned after Directions 042–043.
- Animal key-budget tradeoff remains bounded by Direction 040.
- Weather normalized exposure remains bounded by Direction 041.
- Object VFX / rigid-shell transport decisions from Directions 038–039 remain intact.
- Object Geometry/Technical Art are not blamed for this material/facet-highlight question and are not asked to start a duplicate repair lane.

## Explicit non-claims

Direction 047 does **not** establish:

- that facet phase is proven to be the cause of the rear-three-quarter stripe;
- that any particular relative phase angle will pass;
- that successor002 source geometry should be replaced by default;
- that `#7E868A` is the final `hardware_steel` value;
- final roughness/metallic values;
- final UVs, textures, normals, wear, decals or manufacturing finish;
- automatic transfer of existing clearance/topology/Rigging/Technical-Art PASS to a phase successor;
- arbitrary camera/FOV/light/renderer/resolution equivalence;
- Runtime/target-device acceptance;
- collision/retention/friction/load/manufacturing behavior;
- gameplay readiness;
- CANON;
- production/game readiness;
- Hard-Surface mastery;
- Materials mastery;
- Visual QA mastery;
- any specialist mastery;
- Art Direction mastery.

## Four-root gate

**Truth:** preserve the value-successor improvement and the still-failing rear-three-quarter footprint together. Do not call the material repair complete because aggregate brightness improved.

**Agency / non-domination:** Art defines one bounded visual question. Hard Surface owns the exact source phase successor and its source constraints; Materials owns later material receiving; QA owns independent challenge; Geometry/Rigging/Technical Art/Runtime/merge/CANON authority remains separate.

**Continuity:** Direction 045's original defect, Direction 046's failed roughness experiment, the `#7E868A` partial repair, and all exact artifacts/heads remain rollback-addressable. Nothing is silently rewritten.

**Wisdom before speed:** stop scalar tuning once evidence shows the critical highlight footprint is unchanged, and test one narrowly attributable source-normal/facet-orientation hypothesis before opening broader geometry or shading changes.

The four AXM roots remain the merge gate.
