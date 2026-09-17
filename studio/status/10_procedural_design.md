# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_BOUNDED_SOURCE_BOX_FACE_UV_METRIC_DOMAIN_REBIND_FAMILY / EXISTING OBJECT PR #11 ADVANCED / 2 SOURCE-OWNED METRIC DOMAINS × 2 MATERIALS DENSITY VARIANTS = 4 DISTINCT OUTPUTS / 0.0 UV-CORNER RESIDUAL / 7 FAIL-CLOSED CONTROLS / NO SOURCE UV OR MATERIALS ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence work stayed in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon:** no open design PR; no evidence-backed repeated pattern worth inventing.
- **Armor:** no open design PR; no evidence-backed repeated pattern worth inventing.
- **Character:** active Geometry/Rigging/Materials/Animation lanes are still resolving topology, deformation and shaded-response boundaries; Procedural did not automate unresolved form.
- **Unit:** no open design PR; no evidence-backed repeated pattern worth inventing.
- **Animal:** mature Geometry/Rigging/Animation/Materials/Technical-Art/Runtime work remains active; no duplicate Procedural lane was opened.
- **Building:** existing Procedural PR #4 already owns the bounded row/header/receiver chain and the newest hard-normal stress cohorts; this pass did not continue Building by inertia.
- **Nature:** existing Procedural PR #4 already owns bounded 3-family × 3-seed vegetation variation plus Geometry/VFX/Map compatibility evidence.
- **Weather:** existing Procedural PR #3 already owns bounded seeded field variation plus Map receiver-family evidence.
- **Map:** Environment, VFX, Technical Art and Runtime are actively resolving current-world receiver/timing/storage questions; receiver logic was not copied into Procedural.
- **Object:** Hard Surface PR #26 freshly source-owns exact metric domains for the same two service surfaces already consumed by Object Procedural UV evidence. This created a real repeated authority seam: the prior Procedural UV path still rediscovered physical spans from derived face geometry.
- **Misc:** no open design PR; no evidence-backed repeated pattern worth inventing.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — `Procedural: add bounded bilateral service-module configuration family`**

Exact tested Procedural head:

**`26a19e4d48936101a1957746a29d456b480b7784`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded contract:

**`axm.object-source-box-face-uv-metric-domain-rebind-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_SOURCE_BOX_FACE_UV_METRIC_DOMAIN_REBIND_FAMILY`**

Decision:

**`PASS_SOURCE_METRIC_DOMAIN_REBOUND_REVIEW_UV_FAMILY_ONLY__NO_SOURCE_UV_OR_MATERIALS_ADOPTION`**

## Why this deserves proceduralization

The previous Object Procedural chain already had:
1. exact source-face extraction;
2. Materials-owned planar UV density variants;
3. Hard-Surface-owned source-frame orientation rebind;
4. bounded atlas-layout review.

Hard Surface PR #26 now adds a new source-owned fact for the exact same two manufactured faces: their physical 2D metric domains. Continuing to derive the authoritative width/height from review geometry would duplicate source meaning.

The smallest repair therefore generates the expected rectangular UV corner sets directly from:
- the **Hard-Surface-owned metric bounds/extents**, and
- the **already-owned Materials density** carried through the previous Procedural family,

then requires all four existing review outputs to match before passing.

This does not replace the previous UV generator or invent arbitrary unwrap. It removes the authority ambiguity around physical extent.

## Exact provenance / authority

Pinned previous Procedural source-frame family:
- profile: `assets/modular-equipment-case-001/source-box-face-uv-source-frame-rebind-family-001.json`;
- profile Git blob: `0f57ebb01fc21e02f0d2123390e9562d39e86783`;
- required result: `PASS_BOUNDED_SOURCE_BOX_FACE_UV_SOURCE_FRAME_REBIND_FAMILY`.

Pinned Hard Surface metric authority:
- PR #26;
- head: `f7c64d08e4e2a0d6954291d8b4e064d7345ab658`;
- contract: `assets/modular-equipment-case-001/service-surface-metric-domains-001.json`;
- contract Git blob: `2b425e2a12c648c20c2ad948f44489c4ac1a51e6`;
- schema: `axm.object-hard-surface-service-surface-metric-domain/v0.1`.

Hard Surface owns source surface identity, source frame and physical metric domain. Materials owns UV density/origin/packing/lookdev. Procedural owns only deterministic bounded metric-to-review-UV generation and compatibility evidence.

## Smallest reusable implementation

Added inside existing Object Procedural PR #11:

- `assets/modular-equipment-case-001/source-box-face-uv-metric-domain-rebind-family-001.json`;
- `tools/build_source_box_face_uv_metric_domain_rebind_family.py`;
- `tests/test_source_box_face_uv_metric_domain_rebind_family.py`;
- `.github/workflows/object-source-box-face-uv-metric-domain-rebind-family.yml`.

The generator never discovers surfaces, guesses physical extents, picks a fallback or adopts source UVs. It consumes exactly two source-owned domains and exactly two retained Materials variants per surface.

## Materially different outputs

The family exercises **2 metric domains × 2 density variants = 4 outputs**:

- lid inner, source domain **0.78 × 0.48 m**, isotropic review: **15.6 × 9.6 UV**;
- lid inner, explicit 3× V-density control: **15.6 × 28.8 UV**;
- front service-panel outer, source domain **0.468 × 0.156 m**, isotropic review: **9.36 × 3.12 UV**;
- front service-panel outer, explicit 3× V-density control: **9.36 × 9.36 UV**.

The four metric-derived UV-corner-set digests are all distinct. All four reproduce the previous source-frame-rebound UV corner sets with **maximum residual `0.0`**.

Exact summary digest:

`eca14fdecb50f657225071a20ca36841daf1049a803114805a89248ba764d878`

## Failure bounds

Seven controls fail closed:

1. Hard-Surface metric donor-head drift;
2. duplicate metric-domain identity;
3. metric-unit drift;
4. metric-extent drift;
5. centered-bound/domain drift;
6. source metric-authority drift;
7. previous Procedural UV physical-span disagreement with the source-owned metric domain.

No hidden fallback, geometry-derived authority substitution, source rewrite, automatic source-UV adoption or universal promotion is permitted.

## Exact CI / retained evidence

New exact-head workflow:

- **`35212453341 — Object source box-face UV metric-domain rebind family evidence` — SUCCESS**;
- Python **3.11** and **3.13** both passed compile/full tests;
- Python 3.11 rebuilt exact source faces, prior UV family, source-frame rebound family, metric-domain rebound family, all seven negative controls, and retained evidence.

All eight inherited Object workflows triggered on the same exact head also completed **SUCCESS**, preserving the prior service-module, face extraction, UV projection, atlas-layout and source-frame-rebind chain.

Retained artifact:

- artifact ID: **`10493805122`**;
- name: `object-source-box-face-uv-metric-domain-rebind-family-001-evidence`;
- uploaded size: **32,680 B**;
- GitHub SHA-256: **`a2288ee0c55af564f6c4105bc6effe3565da5295772bb2b7eb38f1d25cd9363e`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **30 files** including prerequisite evidence, exact owner contract, four metric-bound outputs and the exact summary.

Evidence was returned to Procedural PR #11 and Hard Surface PR #26 without transferring authority.

## Explicit non-claims

This PASS does **not** author or adopt production UVs, perform arbitrary unwrap/seam discovery/packing search, choose final texel density or atlas dimensions, author textures/materials, alter Object source geometry or metric domains, prove target-engine/runtime behavior, establish final Art Direction/Visual-QA acceptance, promote UC/Profession Fabric, establish CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact owner head/blob identities are pinned; the source metric domains and four prior UV outputs are independently checked; retained artifact hash was reproduced.
- **Agency / non-domination:** Procedural does not redefine source dimensions, select Materials policy, adopt production UVs or make downstream visual/runtime decisions.
- **Continuity:** existing Object Procedural PR #11 was advanced in place; all inherited exact-head workflows remain green; earlier Procedural evidence is preserved.
- **Wisdom before speed:** only the newly owner-backed repeated metric-domain seam was repaired; no generic unwrap or universal surface-domain framework was invented.

## Prior retained Procedural chain

Earlier Object, Nature, Weather and Building Procedural evidence remains intact in their existing PRs. This status compresses prior branches; it does not replace retained evidence or roots.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Object merely because PR #11 is open. Extend only when another owner-backed repeated manual pattern exists and Procedural can add leverage without taking source, material, receiver, runtime or visual authority.
