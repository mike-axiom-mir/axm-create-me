# Wreckline LOD Visual Review 001 — preserve identity at the switch

Status: ART-DIRECTION HOLD / EXACT EVIDENCE REVIEW / NOT PRODUCT CANON

## Scope

This packet reviews one bounded visual question only:

> Is the current Wreckline Hero Vehicle 001 LOD0 -> LOD1 switch candidate at 35.0 m visually ready for Art Director acceptance?

Source evidence:

- repository: `mike-axiom-mir/axm-wreckline`
- PR: #5 — `Runtime: prove bounded hero LOD switch budget`
- exact head: `c2e954989d4390cb9b7dd84886c9b87ed6176d95`
- retained artifact: `10426922362`
- artifact archive digest: `sha256:2cb280faafc1234111ef59ac046041aa64c9af7140f2316807e8f05acd982d5c`
- fixed camera distance: `35.0463981628418 m`
- before: forced LOD0
- after: candidate-policy-selected LOD1
- renderer/runtime evidence host: Godot 4.7.2 proof host

The runtime lane remains owner of cost measurements and the candidate state machine. This packet owns only the visual-direction decision.

## Direct inspection

The retained native 960 x 600 PNGs were downloaded and inspected directly.

Exact retained PNG SHA-256 values:

- LOD0 before: `10dcff505c3cb2f843f3f2028e6006b9c3ba25516018fc984a0e8d524b3735cb`
- LOD1 after: `75e846d9a4f5ad398d5ad9c885da473997482b89c2137fda03b2208c29ed756d`

The runtime receipt reports:

- draw calls: 102 -> 85 (-16.67%)
- visible primitives: 22,496 -> 11,492 (-48.92%)
- imported triangles: 21,358 -> 10,354 (-51.52%)
- imported vertices: 47,870 -> 23,604 (-50.69%)
- imported surfaces: 96 -> 79 (-17.71%)
- prior silhouette footprint ratio: 93.72%
- sampled whole-frame changed ratio: 0.2389%

Those runtime reductions are useful, but the whole-frame visual percentage is not sufficient by itself because the vehicle occupies a very small fraction of the frame.

An independent exact-pixel comparison of the downloaded 960 x 600 PNGs found 1,814 changed native pixels. The changed region is concentrated inside a 56 x 40 px bounding box around the vehicle. Inside a 66 x 50 px object-aligned review window around that region, 1,814 / 3,300 pixels differ (54.97%). This does not contradict the runtime lane's sampled metric; it measures a different scope and demonstrates why object-relative review is necessary for a focal asset.

## Visual observations

At the full road view:

- the vehicle remains recognizable as the same overall subject;
- its broad front-facing silhouette is still present;
- no catastrophic silhouette collapse is visible in the fixed still.

At the object-relative crop:

- the central front cyan identity disc loses the dark spoke/star read visible in LOD0 and becomes a substantially flatter circular mark;
- outer lateral mechanical/wheel-side structures simplify enough to change the local silhouette and spacing rhythm around the body;
- the LOD1 vehicle reads more generically than LOD0 even though the full-frame delta is numerically small;
- the top functional mass remains readable, but the retained still does not prove that the live transition is visually quiet while the camera/vehicle are moving.

This is a visual hierarchy issue, not a demand to preserve every greeble.

## Art-direction decision

**HOLD_ART_DIRECTION_PROMOTION_AT_35M**

The current LOD1 is not rejected as an asset and the runtime saving is not rejected. The hold applies only to promoting **35.0 m as a visually accepted switch threshold** from this fixed-still evidence.

The retained proof establishes enough continuity to justify another iteration, but not enough to call the switch visually accepted.

## Identity anchors to protect if 35 m is retained

Do not preserve detail uniformly. Preserve the parts that carry the vehicle's play-distance identity:

1. **front identity anchor** — the central cyan disc/emblem should retain a distinct internal read rather than becoming an undifferentiated circle;
2. **lateral silhouette anchor** — the outer wheel / side-mechanical envelope should not collapse into a noticeably narrower or more generic side read at the switch;
3. **top functional anchor** — roof/module silhouette must remain readable if the moving harpoon/module lane is combined with this LOD.

Secondary surface breakup, hidden geometry and small greebles may simplify aggressively if these anchors survive.

This is a visual constraint, not a polygon-count prescription. Hard Surface / Runtime may satisfy it by changing the LOD asset, delaying the switch, changing material/value grouping, or another evidence-backed method.

## Required next evidence

Before Art Direction can accept the 35 m candidate:

- retain the exact same-source LOD0/LOD1 identities;
- capture a representative moving threshold crossing through roughly 33–37 m in the real proof host;
- keep camera/exposure/lighting comparable through the transition;
- provide both full-frame and object-relative vehicle crops;
- show at least one frame immediately before and after the switch, plus a short temporal sequence where practical;
- preserve runtime measurements separately from visual judgment;
- if the 35 m switch visibly pops, either repair the identity anchors or move the threshold farther away and re-measure.

A whole-frame changed-pixel percentage should remain supplementary evidence, not the sole visual gate for a small focal object.

## Non-claims

This packet does not establish:

- that LOD1 is production-ready or visually bad in every context;
- an optimal switch distance;
- target FPS, GPU/CPU frame time, device performance or memory savings;
- representative gameplay-camera acceptance;
- animation/module fidelity across the LOD switch;
- final materials/look parity;
- a studio-wide LOD rule or universal asset-relative threshold;
- Wreckline product acceptance, CANON, or 3D mastery.

## Handoffs

- **Runtime / Optimization:** keep PR #5's cost evidence; add a moving threshold-crossing proof and object-relative visual evidence before requesting Art Director acceptance again.
- **Hard Surface:** if 35 m remains desirable, repair only the identity-bearing LOD1 losses first; do not restore detail indiscriminately.
- **Materials / LookDev:** inspect whether material/value grouping can preserve the front identity anchor cheaply before adding geometry.
- **Animation / Motion:** if module motion is combined with LOD switching, prove the top functional anchor remains readable through both motion and the transition.
- **Visual Observer / QA:** independently reproduce the moving threshold crossing after the repair/retune and challenge any claim that low whole-frame delta equals low focal-object change.
- **Capability Cartographer:** record only the evidence-method candidate: small focal assets may require object-relative visual comparison in addition to full-frame deltas. Do not promote it to a universal contract from one vehicle.

The four AXM roots remain the merge gate: Truth, Agency / non-domination, Continuity, and Wisdom before speed.
