# Character review-006 — target-host winding reference Direction 028

Date: 2026-09-17

State: **PASS_ART_DIRECTION_CHARACTER_REVIEW006_NEUTRAL_HOST_EQUIVALENT_REFERENCE_028 / HOLD_DEFORMED_DIRECTION_FRAME_VISUAL_PREFERENCE__MATERIALS_RERUN_AND_INDEPENDENT_QA_PENDING**

## Scope

This is a **3D Art Direction review/comparator decision only**. `axm-create-me` remains coordination-only. No Character product geometry, topology, rig, animation, material scalar, renderer implementation, Runtime policy, Universal Creation product code, or source/CANON state is changed here.

The internal merge gate remains the four AXM roots:

1. Truth.
2. Agency / non-domination.
3. Continuity.
4. Wisdom before speed.

## Why this gate is selected now

Direction 027 correctly held Character deformed shaded-direction interpretation because the imported target already disagreed strongly with the then-used owner reference at neutral `0°`, even though unshaded coverage aligned.

Fresh Technical Art PR #21 and independent Visual QA now close that exact neutral contradiction for the pinned Godot receiver without retuning the Character. The newly available evidence is therefore higher leverage than another visual mutation: it repairs the **review frame itself** so future deformation comparisons can become meaningful.

No duplicate Character Art lane is opened. Existing owner lanes remain responsible for their own implementation/evidence.

## Exact evidence reviewed

Repository: `mike-axiom-mir/axm-character-design`

Technical Art PR #21 exact head:

`a61f96d2cf8c33b153d17810ad18ca48074b81d2`

Scoped producer result:

`PASS_CHARACTER_REVIEW006_GODOT_GLTF_TO_ARRAYMESH_WINDING_REFERENCE_BRIDGE__HOLD_DEFORMED_DIRECTION_FRAME`

Dedicated workflow:

`35223534620 — Technical Art Character review006 target-host winding bridge` — SUCCESS

Retained artifact:

- ID: `10497935879`;
- size: `337,879 B`;
- expected SHA-256: `66ba641637b1cacd817d93c2b3b4d5579c537152630530b3f422293895aa5dd4`;
- Art Direction independently downloaded size: `337,879 B`;
- Art Direction independently rehashed SHA-256: **same exact digest**.

Pinned renderer receiver:

- Godot `4.7.2`;
- GL Compatibility;
- retained front / three-quarter / grazing views.

Exact imported neutral audit:

- `184` positions;
- `184` normals;
- `1080` indices;
- `360` triangles;
- imported POSITION maximum component delta versus owner: `0.0`;
- imported NORMAL maximum component delta versus owner: `0.000101476907730103`;
- owner-order index mismatches: `720 / 1080`;
- explicit per-triangle `[a,b,c] -> [a,c,b]` candidate mismatches: `0 / 1080`;
- exact candidate triangles: `360 / 360`;
- imported global transform: identity, determinant `1.0`.

A deliberately partial candidate leaves two mismatched indices and is rejected rather than being waved through.

## Direct visual observation

Art Direction directly inspected the retained imported-static, native-owner-order, winding-adapted-owner, unshaded and inverted-normal images across all three views.

Observed at retained scale:

- **imported target vs winding-adapted owner reference:** visually coincident broad shading and silhouette in front, three-quarter and grazing;
- **imported target vs native owner-order comparator:** the old large appearance contradiction is plainly visible; the native comparator is much darker and carries a different light-facing response despite matching spatial coverage;
- **inverted-normal negative:** remains clearly different, so the observer is not rendered insensitive by the reference adaptation;
- there is no visible geometry-placement or silhouette change introduced by the adapted comparator.

Exact imported-target -> winding-adapted-owner image metrics support that observation:

| view | >1-LSB changed pixels | mean abs normalized RGB-channel delta | unshaded coverage XOR |
|---|---:|---:|---:|
| front | `0` | `0.000000582872976682227` | `0` |
| three-quarter | `0` | `0.000000662516790633535` | `0` |
| grazing | `0` | `0.000000370497552454252` | `0` |

The old native-order control remains deliberately bad:

- front mean delta `0.32404366400883`;
- three-quarter `0.290860630665814`;
- grazing `0.138486067939144`.

## Art Direction decision

**PASS_ART_DIRECTION_CHARACTER_REVIEW006_NEUTRAL_HOST_EQUIVALENT_REFERENCE_028**

For this exact Character GLB + Godot 4.7.2 review receiver, the **winding-adapted owner ArrayMesh is the valid neutral shaded comparator** for Art/QA evaluation.

The direct native-owner face order must **not** be used as though it were a visually equivalent Godot shaded comparator for this receiver.

This is a comparator/reference decision. It is **not** an instruction to reverse Character source triangles, rewrite source topology, change source normals, alter Rigging, change UC, or encode a universal Godot rule.

Direction 027 is preserved as historical truth: its neutral mismatch was real for the old native-order comparator. Direction 028 changes the supported attribution and supplies the valid bounded replacement comparator; it does not erase the earlier evidence.

## Deformed shading remains held

**HOLD_DEFORMED_DIRECTION_FRAME_VISUAL_PREFERENCE__MATERIALS_RERUN_AND_INDEPENDENT_QA_PENDING**

Direction 026's qualitative north star remains preserved: the posed surface should ultimately read as a surface responding to its posed form rather than silently carrying stale neutral-light relationships.

But the older `4/6` pose-following versus `2/6` frozen-like target-host vote remains non-authoritative because it was judged against the now-invalid native-owner-order shaded comparator.

The next smallest useful proof belongs to Materials PR #18:

1. keep the exact current source form, Geometry, Rigging, Animation clip, Technical-Art transport, material scalars, lights, cameras and UC fixed;
2. at exact current-motion `-30° / 0° / +30°` samples, build both owner shaded references with the **same receiver-local host-equivalent face-order bridge**;
3. compare the actual imported target against:
   - pose-recomputed smooth-normal host-equivalent owner reference;
   - frozen-neutral-normal host-equivalent owner negative;
4. retain native-owner-order and inverted-normal controls as sensitivity/history controls, not as preferred comparators;
5. preserve unshaded spatial controls;
6. return exact retained frames and receipts for independent Visual QA;
7. do not retune material, light, pose, geometry or rig to force a preferred answer.

Only after that exact corrected deformed comparison exists should Art choose whether the real target receiver visually follows the accepted pose-response direction.

## Handoffs

### Materials / LookDev — Character PR #18

Consume the exact Technical Art #21 winding bridge as a **reference-frame correction only** and rerun the bounded current-motion direction-frame comparison. Do not change look values or source/rig/motion to improve the vote.

### Technical Art / UC Integration — Character PR #21

Art accepts the neutral host-equivalent comparator visually for this exact receiver. Keep the bridge receiver-local and do not centralize a universal Godot winding policy in UC from this one success.

### Visual Observer / QA

Independently reproduce the future Materials deformed rerun against the host-equivalent reference. The neutral reference PASS does not transfer deformed normal/tangent acceptance automatically.

## Explicit non-claims

Direction 028 does **not** establish:

- a universal Godot glTF winding convention;
- a source-topology rewrite requirement;
- deformed target-engine vertex-normal correctness;
- tangent transport or tangent-space normal-map correctness;
- final skin/material quality;
- full-body shaded motion quality;
- arbitrary-camera/pose correctness;
- target-device Runtime/performance acceptance;
- source adoption;
- CANON;
- production/game readiness;
- Character mastery;
- Technical Art mastery;
- Materials mastery;
- Visual QA mastery;
- Art Direction mastery.

One repaired comparator is one bounded success, not mastery.
