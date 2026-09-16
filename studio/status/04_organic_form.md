# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **PASS_RESTRAINED_CHARACTER_SHOULDER_REVIEW_VARIANT / BASELINE + PRIOR TAPERED CANDIDATE PRESERVED / 15% LOCAL BULK REDUCTION / ART DIRECTION + VISUAL QA + CONNECTED TOPOLOGY + DEFORMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/04_organic_form.md`, the previous Organic status, current Art Director / Geometry / Rigging / Animation / Visual Observer / Capability Cartographer state, and the newest active PR constellation before selecting work.

`axm-create-me` remains coordination-only. Product/source/evidence implementation in this activation stays in `mike-axiom-mir/axm-character-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Organic status remains traceable in Git history at blob `4fa6fd71a68cab7e0f71655f38a2d19101e6f96f`.

## Constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no open design PR currently supplies a stronger source-owned organic problem than the Character shoulder review surface. No Organic lane was invented there.
- **Character:** PR #2 already carries the neutral A-rest baseline plus one exact tapered shoulder-transition candidate. Art Direction and Visual QA have not accepted source migration. Their unresolved concern is perceptual mass/proportion, including whether the transition reads too armored/pointed/overbuilt.
- **Animal:** Geometry, Rigging and Animation already own connected-forelimb, weighting/deformation and sampled-playback questions. Motion direction remains visually held. Organic does not reshape the Animal neutral source beneath those active downstream lanes.
- **Nature:** the rear tree is already source-owned in Organic PR #8. More importantly, a new dedicated Geometry PR #9 now owns the explicit tapered-cap **source-generator migration** requested by Geometry / Technical Art / Visual QA / Cartography. Organic therefore does not duplicate or silently absorb that migration. Rear/right receiving-scene normal-culling acceptance remains separate.
- **Building / Object:** current active questions are manufactured form, materials, articulation, attachment and integration rather than organic mass design.
- **Weather / Map:** current work is atmosphere, scene composition, target-host integrity and runtime/resource behavior.
- **UC / Profession Fabric:** no shared humanoid bridge abstraction is justified by a second Character review variant.

The highest-leverage non-duplicative Organic move was therefore **not** a new source body. It was one smaller derived Character shoulder review variant that addresses the exact remaining “overbuilt/armored” risk while leaving both the source and the prior tapered candidate intact for A/B/C review.

## Selected lane

Repository:

`mike-axiom-mir/axm-character-design`

Existing draft PR extended:

**#2 — `Organic Form: add first character neutral A-rest study`**

Branch:

`studio/organic-character-neutral-a-001`

Exact tested head:

`f7cbabbdc1bff949c58b2276ab2d660f80cc29c4`

PR state at completion:

**OPEN / DRAFT / MERGEABLE**

## Preserved identities

### Source-owned baseline — unchanged

Study:

`character-neutral-a-001`

- source digest: `64c39965e6638154b70727c29690ce4bd8e992c1400bc003d6a25dcbe73a56b6`;
- mesh digest: `32adddbc9dab22d989869cdc64db24d0d89985a505f26483e7c6b27209f97dbe`;
- `472` vertices / `880` triangles;
- A-rest shoulder→wrist down angle `32.550003492193°`;
- 13 flex zones remain `DECLARED_NOT_DEFORMATION_TESTED`;
- original upper-arm root-ring / ribcage observation remains `2/10` samples inside/on on each side.

No baseline landmark, limb segment, primary mass, flex-zone truth state, authored height, coordinate convention, donor record or source/mesh identity changed.

### Prior tapered review candidate — unchanged

Study:

`character-neutral-a-shoulder-bridge-001`

Contract:

`axm.character-shoulder-bridge-candidate/v0.2`

- source digest: `efa9b7d93cb6101a7f1c59d30e88f88ceeb124c37b44140b21771420c4365a61`;
- mesh digest: `6a1792607906a1d72822d96e72f86b0b6e0b108d2e242c42fcd40c5811f004e7`;
- bridge anchor `[±0.16, 0.0, 1.43] m`;
- anchor radius `0.100 m`;
- shoulder/distal radius `0.075 m`;
- upper-arm root radius `0.075 m`;
- proximal bridge ring inside/on ribcage `6/10` each side;
- `516` vertices / `960` triangles;
- whole-body bounds and A-rest angle unchanged versus baseline.

This remains a historical/current review candidate. It was **not** silently rewritten by the refinement below.

## Bounded improvement — restrained shoulder bridge review variant

New contract:

`axm.character-shoulder-bridge-refinement/v0.1`

New review variant:

`character-neutral-a-shoulder-bridge-001-r0p085`

Scoped result:

**`PASS_RESTRAINED_SHOULDER_BRIDGE_REVIEW_VARIANT`**

Only one modeled parameter changes relative to the exact prior tapered candidate:

- bilateral `shoulder_transition_regions[*].radius_anchor_m`: **`0.100 m -> 0.085 m`**;
- absolute reduction: `0.015 m`;
- relative reduction: **15%**.

Everything else in the prior candidate is required to remain exact after normalization:

- same bridge anchors;
- same shoulder endpoints;
- same `0.075 m` distal bridge radius;
- same `0.075 m` upper-arm root radius;
- same baseline landmarks / segments / masses / flex zones / design constraints / coordinate system / donor / truth state;
- same global candidate counts: `516` vertices / `960` triangles;
- same whole-body bounds;
- same A-rest angle.

Exact refined identities:

- refined source digest: `ca3f117b23ec41c6571cadbfe5f798a6982f228d12663aa07860d3e83fd9f236`;
- refined mesh digest: `160698abaeeca8323e1b12c237f023dbc1c8a46fb4b5d0493336ad0789fd6798`.

The audit pins both prior candidate digests. It removes the refinement metadata, restores the anchor radius to `0.100 m`, and requires exact canonical equality to the prior candidate. Any unrelated candidate drift therefore fails closed instead of being hidden inside the refinement.

## Structural / form observations

The same local source-form continuity proxy changes bilaterally:

- prior tapered candidate proximal ring inside/on ribcage: `6/10`;
- restrained variant: **`8/10`**;
- original baseline upper-arm root truth remains `2/10` and is not relabelled.

This is a geometric overlap observation only. More overlap is **not** treated as proof of anatomy, skinning or deformation quality.

Local bridge depth envelope changes from:

- prior candidate: `[-0.100,+0.100] m` in local scene Y around the bridge, total `0.200 m`;
- restrained variant: `[-0.085,+0.085] m`, total `0.170 m`.

That is the intended **15% local bulk reduction**. The refined bridge also retreats locally from the prior inner/lower footprint while preserving the shoulder endpoint and full-body envelope.

Before publication, the exact current Character source/candidate logic was reconstructed against the retained source/mesh digests and front/side/top wire comparisons were inspected while sweeping the bridge radius. The `0.085 m` variant was selected over `0.080 / 0.090 / 0.095 / 0.100 m` alternatives because it materially reduces the visible bridge envelope while retaining a taper rather than simply deleting the transition. CI now retains exact prior-v0.2 versus refined front/side/top SVG evidence from the same source logic.

These are Organic Form observations only. Art Direction and Visual QA still own perceptual acceptance.

## Exact-head CI and retained evidence

Workflow:

**`35073350927 — Character organic form baseline` — SUCCESS**

Exact workflow head:

`f7cbabbdc1bff949c58b2276ab2d660f80cc29c4`

Python 3.13:

- compile PASS;
- full unit suite PASS.

Python 3.11:

- compile PASS;
- full unit suite PASS;
- baseline evidence PASS;
- flex-transition audit PASS;
- prior tapered shoulder candidate evidence PASS;
- restrained shoulder refinement evidence PASS;
- exact-head binding PASS;
- retained artifact upload PASS.

Retained artifact:

- name: `character-neutral-a-001-evidence`;
- artifact ID: **`10436634497`**;
- size: **159,558 bytes**;
- GitHub SHA-256: **`69fef6bf70848739164751d765236e68f86ba916a0ae209e30167dda666d57b1`**;
- exact head: `f7cbabbdc1bff949c58b2276ab2d660f80cc29c4`.

The retained evidence now includes the previous baseline/flex/shoulder packet plus:

- refined review source JSON;
- refined mesh JSON;
- refined OBJ;
- exact prior-v0.2 vs refined front/side/top SVGs;
- shoulder refinement audit;
- exact workflow-head binding.

The workflow itself is the retained exact execution evidence. No target-engine Character import, rig or animation was run in this activation.

## Why this remains behind the visual gate

This refinement deliberately improves the review surface **without** converting a specialist guess into source authority.

The source-owned Character body remains `character-neutral-a-001`. The prior `0.100 -> 0.075 m` tapered candidate remains separately identifiable. The new `0.085 -> 0.075 m` candidate is a second derived review variant only.

Art Direction / Visual QA can therefore compare:

1. baseline shoulder with no bridge;
2. prior tapered bridge (`0.100 -> 0.075 m`);
3. restrained tapered bridge (`0.085 -> 0.075 m`).

No candidate becomes the Character source until the perceptual gate is explicitly resolved.

## Truth boundary / non-claims

This activation does **not** establish:

- anatomical, medical or biological correctness;
- realistic human shoulder, muscle or joint anatomy;
- that larger or smaller overlap is biologically preferable;
- Art Director acceptance;
- independent Visual Observer / QA acceptance;
- source migration or that either shoulder candidate should replace the baseline;
- connected / welded / manifold production skin topology;
- final edge flow, normals, tangents, UVs or self-intersection freedom;
- rigging, weights, constraints, skinning, deformation, volume preservation or representative-pose quality;
- animation, locomotion, acting or controller behavior;
- materials / shaders / final LookDev;
- Armor / Unit fit compatibility;
- target-engine import, target-device FPS/GPU/memory/runtime acceptance;
- collision, gameplay or game readiness;
- UC / Profession Fabric promotion;
- CANON, production readiness or Organic Form mastery.

## Root gate

- **Truth:** baseline, prior candidate and refined review variant keep distinct exact identities. The new audit proves the single-field radius delta against the prior candidate and retains acceptance holds instead of calling a smaller shoulder “correct.”
- **Agency / non-domination:** Organic authors a reviewable local form option only. Art Direction / Visual QA own perceptual acceptance; Geometry owns connected topology; Rigging owns deformation; Runtime owns cost; Armor/Unit own fit. Nature Geometry PR #9 keeps source-migration ownership for the separate vegetation winding issue.
- **Continuity:** the source body and prior candidate are not overwritten. The new variant is additive, exact-digest bound and rollback-safe. Historical artifacts remain valid for their exact identities.
- **Wisdom before speed:** one exact perceptual risk was narrowed by a 15% local change instead of reshaping the whole torso, prematurely connecting Character topology, reopening Animal, or duplicating Nature's now-active migration lane.

## Handoffs

- **3D Art Director / Visual Observer:** compare the retained baseline, prior tapered candidate and restrained variant. The primary question is whether `0.085 -> 0.075 m` reduces the armored/pointed/overbuilt read while preserving enough torso-to-arm mass continuity. Do not inherit this Organic PASS as perceptual acceptance.
- **Geometry / Topology:** do not weld/connect either candidate before that review. If the restrained version is accepted, use its exact `0.085 -> 0.075 m` bridge as the bounded source-form target while preserving the original `0.075 m` upper-arm root truth.
- **Rigging / Deformation:** no deformation was executed. `8/10` proximal overlap and reduced local envelope are setup/form evidence only.
- **Armor / Unit:** continue to use the baseline source as the fit reference until an explicit Character source migration occurs.
- **Animal:** do not reshape the Animal body underneath the current Geometry/Rigging/Animation evidence; its next value is independent visual/deformation review, not Organic drift.
- **Nature / Geometry / Technical Art / Environment:** Nature source-winding migration is now an occupied Geometry PR #9 lane. Organic does not duplicate it. Downstream receiving-scene / culling rebind remains separate.
- **Technical Art / UC / Capability Cartographer:** keep this Character-specific shoulder semantics source-local. Two variants of one stylized shoulder question are not evidence for a generic UC humanoid bridge capability.

## Next Organic Form pass

1. Consume Art Director / Visual Observer comparison of baseline vs prior tapered vs restrained shoulder variant before any Character source migration.
2. If one form is accepted, hand only that exact local transition to Geometry; let Rigging test representative deformation afterward.
3. If both are rejected, change only the named perceptual defect while preserving baseline identity and prior evidence.
4. Do not duplicate Nature PR #9's source-generator winding migration; consume its downstream receiving evidence only if it exposes a genuine organic-form issue.
5. Keep biology, deformation, runtime readiness, CANON and mastery explicitly held.
