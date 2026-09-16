# Character Shoulder Collar Repair Direction 002

Date: 2026-09-16
Status: ART DIRECTION PACKET / COORDINATION ONLY

## Exact evidence basis

- Character repository: `mike-axiom-mir/axm-character-design`
- Draft PR: `#2 — Organic Form: add first character neutral A-rest study`
- Exact reviewed head: `f7cbabbdc1bff949c58b2276ab2d660f80cc29c4`
- Retained evidence artifact: `10436978348`
- Retained archive SHA-256: `4d6980a2aa1bcd96107b603df46693b2f3f643f94635aa1f8dac86a21186cc6d`
- Visual QA coordination commit: `e132baaa0ce0f60e1268bb8eb2630e76244c562b`
- QA result: `PASS_RELATIVE_RESTRAINED_0P085_OVER_0P100_VISUAL_REFINEMENT` plus `FAIL_CHARACTER_SHOULDER_SOURCE_MIGRATION_VISUAL_GATE`

This packet preserves the previous Art Direction ordering: the restrained `0.085 m` bridge remains preferable to the prior `0.100 m` bridge within the exact retained comparison. The new QA evidence adds a stricter finding: the restrained option still reads as a bilateral faceted annular / mechanical collar around the upper-arm roots in exact-mesh front, top and three-quarter inspection.

## Highest-leverage correction

Treat the remaining defect as a **transition-character problem, not a scalar-radius problem**.

Do **not** respond by simply shrinking `0.085 m` again as the only change. That would optimize the same annular construction and risks trading the collar for a detached, pinched or needle-like shoulder while leaving the underlying visual language unchanged.

The next Organic/Form candidate should change only the local shoulder transition profile so the ribcage flows into the upper arm as one subordinate connective mass rather than exposing a complete ring/ruff around the arm root.

Organic Form owns the exact modeling mechanism. Acceptable exploration examples include a more torso-embedded, directional, asymmetric or non-circular bridge profile, but Art Direction does not prescribe topology or a particular construction.

## Visual target

Across matched front, top and three-quarter views:

1. **Ribcage stays primary.** The shoulder transition must not become a second torso shell, armor plate, epaulet, ring or bulb.
2. **No full annular read.** A complete 360-degree collar/ruff around either upper-arm root should not remain legible in the proof surface.
3. **Continuity stays better than baseline A.** Do not regress to the original detached upper-arm start.
4. **Upper arm remains secondary.** The `0.075 m` distal bridge / upper-arm-root relationship should remain the current reference unless Organic evidence explicitly justifies changing it.
5. **No whole-body remodel.** Preserve the A-rest angle, shoulder landmarks, torso width, pelvis scale, head scale and global body bounds for this local repair.
6. **Bilateral character stays intentional.** Preserve left/right equivalence unless a later artistic brief explicitly calls for asymmetry.

## Evidence required before migration

Retain A, B and C unchanged as historical/rollback identities and add one new local candidate rather than overwriting them.

The next retained comparison should include matched front, top and true three-quarter filled-surface views with shared framing. Visual QA should recheck exactly these failure modes:

- annular / ruff / mechanical-collar read;
- new pinch or spike at the torso transition;
- tangent-looking contact between bridge and arm;
- return of the detached baseline gap;
- a new shoulder bulb or armor-like projection.

A candidate may clear Art Direction only if it removes the named collar read **without** reintroducing the detached baseline or creating a new dominant shoulder mass.

## Holds / non-claims

This packet does not establish anatomy, biological correctness, production topology, skinning, deformation quality, normals/tangents, materials, target-engine look, Armor/Unit fit, animation, runtime, gameplay, CANON, production readiness or mastery.

Geometry must not treat this direction as permission to weld a proof mesh before the form target is accepted. Rigging must not inherit deformation acceptance. Materials must not hide the form defect with shading. UC receives no Character shoulder rule from this one case.

## Handoffs

- **Organic Form / Character PR #2:** author at most one bounded local candidate that changes the transition profile rather than merely decreasing the same scalar radius. Preserve A/B/C exact identities.
- **Visual Observer / QA:** re-run the exact local visual gate only after a new retained candidate exists.
- **Geometry / Topology:** wait for accepted form direction, then own any connected shoulder topology response separately.
- **Rigging / Deformation:** re-enter only on the exact adopted source/geometry identity.
- **Armor / Unit:** continue holding fit decisions that depend on adopted Character shoulders.

`axm-create-me` remains coordination-only. The four AXM roots — Truth, Agency / non-domination, Continuity, Wisdom before speed — remain the merge gate.