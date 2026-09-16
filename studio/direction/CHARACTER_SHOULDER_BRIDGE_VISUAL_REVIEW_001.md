# Character Shoulder Bridge Visual Review 001

Date: 2026-09-16
Owner: 3D Art Director
Scope: coordination / visual direction only

`axm-create-me` remains the 3D Studio control room. This packet does not change Character source geometry, topology, rigging, materials, animation, runtime, gameplay or Universal Creation.

## Exact review identity

Receiving design lane:

- repository: `mike-axiom-mir/axm-character-design`
- PR: `#2 — Organic Form: add first character neutral A-rest study`
- exact current PR head: `f7cbabbdc1bff949c58b2276ab2d660f80cc29c4`
- exact successful workflow: `35073357069 — Character organic form baseline`
- retained artifact: `10436978348 — character-neutral-a-001-evidence`
- artifact SHA-256: `4d6980a2aa1bcd96107b603df46693b2f3f643f94635aa1f8dac86a21186cc6d`
- retained `exact-head.txt`: `f7cbabbdc1bff949c58b2276ab2d660f80cc29c4`

The archive was independently downloaded and rehashed before this review; the digest reproduced exactly.

Three exact retained form states were compared from the same evidence packet in front / side / top wire views:

### A — baseline

- study: `character-neutral-a-001`
- source digest: `64c39965e6638154b70727c29690ce4bd8e992c1400bc003d6a25dcbe73a56b6`
- mesh digest: `32adddbc9dab22d989869cdc64db24d0d89985a505f26483e7c6b27209f97dbe`
- 472 vertices / 880 triangles

### B — prior shoulder bridge

- study: `character-neutral-a-shoulder-bridge-001`
- source digest: `efa9b7d93cb6101a7f1c59d30e88f88ceeb124c37b44140b21771420c4365a61`
- mesh digest: `6a1792607906a1d72822d96e72f86b0b6e0b108d2e242c42fcd40c5811f004e7`
- bilateral bridge anchor radius: `0.100 m`
- bridge distal radius / upper-arm root radius: `0.075 m / 0.075 m`
- proximal bridge-ring samples inside/on ribcage: `6 / 10` per side
- 516 vertices / 960 triangles

### C — restrained shoulder bridge review variant

- variant: `character-neutral-a-shoulder-bridge-001-r0p085`
- source digest: `ca3f117b23ec41c6571cadbfe5f798a6982f228d12663aa07860d3e83fd9f236`
- mesh digest: `160698abaeeca8323e1b12c237f023dbc1c8a46fb4b5d0493336ad0789fd6798`
- only modeled parameter changed from B: bilateral bridge anchor radius `0.100 m -> 0.085 m`
- absolute reduction: `0.015 m`; relative reduction: `15%`
- bridge distal radius / upper-arm root radius remains `0.075 m / 0.075 m`
- proximal bridge-ring samples inside/on ribcage: `8 / 10` per side
- 516 vertices / 960 triangles
- whole-body bounds and A-rest angle remain unchanged

## Direct visual observations

The exact retained views support one bounded direction decision.

### Baseline A

The broad ribcage / pelvis / head hierarchy is readable, but both upper arms begin as visibly separate tapered pieces. In the front and top views the shoulder transition reads like a disconnected plug/gap rather than one continuous stylized upper-body mass.

### Prior bridge B — `0.100 m`

The bridge does solve the gross visual discontinuity: the arm no longer appears to start as abruptly from empty space. However, at the proof resolution the added shoulder transition becomes too dominant. In the front view it reads as a circular/bulbous knot around each shoulder, and in the top view it adds a visibly heavy local ring around the ribcage-to-arm junction. That local emphasis competes with the intended larger hierarchy of ribcage first, limb second.

This is not a structural FAIL of the candidate. It remains valid evidence for a broader shoulder bridge. It is simply not the preferred visual direction among the currently retained choices.

### Restrained bridge C — `0.085 m`

The restrained variant keeps the useful continuity introduced by B while reducing the local shoulder knot. The front view reads less overbuilt at the arm root, and the top view shows a narrower, less intrusive transition envelope. The side-view change is intentionally subtle rather than introducing a new torso-depth statement.

Within this exact wire-form scope, C better preserves the broad body hierarchy while still addressing A's disconnected shoulder read. It is therefore the preferred next form direction.

## Art Direction decision

**`PASS_ART_DIRECTION_RESTRAINED_CHARACTER_SHOULDER_BRIDGE_DIRECTION`**

**`PREFER_REFINED_0P085_OVER_PRIOR_0P100_IN_EXACT_RETAINED_WIREFORM_SCOPE`**

**`RETAIN_BASELINE_A_AND_PRIOR_B_AS_ROLLBACK / COMPARATIVE_EVIDENCE`**

Meaning:

> For the exact retained Character PR #2 A/B/C comparison, the `0.085 m` restrained shoulder bridge is directionally preferred over the `0.100 m` bridge because it preserves the improved ribcage-to-arm continuity while reducing the visually overfull shoulder-ring read. The original baseline remains useful rollback/source truth, but its disconnected shoulder start is not the preferred finished form direction.

This decision does **not** migrate the Character source. Independent Visual Observer / QA review remains required before the Organic lane converts this preferred review direction into a source change.

## Direction constraints for the next bounded step

1. Do not increase shoulder bridge bulk beyond the current `0.085 m` review variant merely to improve overlap metrics.
2. Do not change A-rest arm angle, torso width, pelvis scale, head size or global body bounds as part of this shoulder decision.
3. Preserve the exact `0.075 m` distal bridge / upper-arm-root match unless a later source-form review explicitly changes that relationship.
4. Judge the shoulder primarily as a **transition hierarchy** problem: ribcage remains the primary mass, shoulder bridge is connective, upper arm is secondary.
5. Before source migration, independently check the exact A/B/C retained views for a new pinch, spike/tangent, or overly mechanical collar read. If one appears, fix only that named local issue rather than widening into a whole-character remodel.
6. Do not infer connected topology, skinning or deformation quality from the current overlap proxy or wire views.

## Explicit non-claims

This packet does not establish:

- human anatomy, medical or biological correctness;
- that `0.085 m` is a physically correct shoulder radius;
- accepted source migration or CANON;
- connected production topology or manifold skin;
- shoulder weighting, skinning, volume preservation, IK or deformation quality;
- animation quality or locomotion;
- UVs, materials, shading, textures or final rendered look;
- Armor or Unit fit/socket compatibility;
- target-engine import, runtime behavior or performance;
- collision, physics or gameplay;
- production readiness, game readiness or Art Direction / Organic Form mastery.

## Handoffs

- **Visual Observer / QA:** independently review the exact retained A/B/C Character artifact. Focus on the front/top shoulder knot, any new local pinch or tangent, and whether C actually retains the continuity benefit of B without importing a different visible defect. Do not infer deformation.
- **Organic Form / Character PR #2:** hold source migration until that independent visual review. If QA agrees, C is the preferred local form target; preserve A and B identities as historical/rollback evidence.
- **Geometry / Topology:** do not connect the shoulder yet solely from overlap counts. If the form direction is accepted, test one bounded connected shoulder transition while preserving the accepted source landmarks/radii truth.
- **Rigging / Deformation:** no weighting or shoulder-deformation acceptance transfers from this visual direction. Re-enter only against the exact adopted geometry if/when it exists.
- **Armor / Unit:** continue to hold fit decisions; the Character shoulder source is not yet adopted.
- **Materials / LookDev:** do not use shading/material tricks to hide the current form decision before source/geometry review resolves it.
- **Technical Art / UC / Capability Cartography:** keep this shoulder-transition meaning Character-owned. One stylized body review does not justify a generic UC shoulder/body rule or profession promotion.
- **Animal queue:** the connected-elbow phase / bend-plane candidates remain pending a richer shaded/perspective comparison; this Character decision does not settle or supersede them.

## Root gate

- **Truth:** exact current head, artifact digest and A/B/C identities remain distinct; the visual preference is bounded to retained wire evidence and does not masquerade as anatomy or deformation proof.
- **Agency / non-domination:** Organic owns source form, Geometry owns topology, Rigging owns deformation, Visual QA owns independent defect verification, and the four roots—not Art Director rank or PR mergeability—remain the merge gate.
- **Continuity:** baseline, prior bridge and restrained variant are all preserved as traceable identities; no historical evidence is silently rewritten.
- **Wisdom before speed:** the smallest already-prepared A/B/C decision is resolved before adding another Character variant or widening into Armor/Unit/rigging work.
