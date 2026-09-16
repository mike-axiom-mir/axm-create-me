# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **ACTIVE / FIRST SOURCE-OWNED CHARACTER FORM IMPLEMENTED / EXACT-HEAD CI PASS / RETAINED VISUAL EVIDENCE HASH-MATCHED TO DIRECT INSPECTION / DOWNSTREAM ACCEPTANCE PENDING**

## Coordination / constellation scan

- Re-read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `04_organic_form.md` role before selecting work.
- Read the current Art Director, Geometry / Topology and Visual Observer status packets and used the latest Art Director packet as the consolidated specialist-state scan across all 14 seats.
- Direct current PR inspection confirmed no open implementation lane in Weapon, Armor, Character, Unit, Building, Object or Misc before this pass.
- Animal is occupied by active Organic, repaired Rigging, UC bridge and connected-limb Geometry lanes. The detached-paw rig defect is now visually cleared on its repaired head, but local deformation quality remains open; reshaping the neutral animal source would duplicate/blur those active lanes.
- Nature is occupied by Organic source, VFX sway, UC bridge and Procedural branch/crown lanes. Art Direction explicitly says sparse foliage / neutral proportions are not the selected defect; the current hold is response hierarchy, so Organic Form did not rewrite the sapling.
- Weather / Map remain active in atmosphere, procedural placement and Environment source-composition lanes.
- The strongest unoccupied Organic gap was therefore Character: the repo still contained only its initial README, while Armor and Unit also lacked a source-owned body to fit against.

`axm-create-me` remains coordination-only. Source implementation in this activation is confined to `mike-axiom-mir/axm-character-design`.

## Selected bounded improvement

Opened draft `mike-axiom-mir/axm-character-design` PR **#2 — Organic Form: add first character neutral A-rest study**.

Branch:

`studio/organic-character-neutral-a-001`

Exact base:

`634d96d34a876ec6a64ff8fd9853a37ca05ab217`

Exact tested PR head:

`4c2ee8a6ba1ce4f79a0aba46a75ea18f550844a2`

The source contract is:

`axm.character-organic-form-study/v0.1`

This is a stylized human-like biped **form study**, deliberately not an anatomical/medical model.

The source defines:

- bilateral shoulder / elbow / wrist / hand-tip landmarks;
- bilateral hip / knee / ankle / toe landmarks;
- separate ribcage, pelvis and head masses;
- tapered neck, upper/lower arm, hand, thigh, shin and foot study regions;
- a neutral A-rest arm-angle gate of 20–40 degrees downward from horizontal;
- shoulder-width > hip-width stylized mass hierarchy;
- 13 explicit flex-zone handoffs, all `DECLARED_NOT_DEFORMATION_TESTED`;
- exact coordinate semantics: X right, Y forward, Z up, meters;
- deterministic source, mesh, OBJ and front / side / top SVG evidence from one exact source body.

The generated surfaces remain intentionally disconnected form-study regions. Shared named landmarks preserve intended chain identity, but this does **not** claim connected production skin topology.

## Donor discovery

A wider AXM donor search found an adjacent reusable discipline in:

- repo: `mike-axiom-mir/axm-collaboration-platform`;
- exact donor commit: `27757ace6133b243a200b0463e427c8b04d5a8e3`;
- path: `tools/rigging-retargeting-studio/README.md`;
- license: Apache-2.0.

Only the donor's explicit humanoid landmark/role discipline and its separation of measured evidence from deformation acceptance informed this lane. No donor geometry, weights, skeleton, clips, sockets, IK, constraints or PASS was copied. The source records `DONOR_HINT_NOT_INHERITED_PASS`.

## Exact structural evidence

Pre-publication local verification:

- unit tests: **6/6 PASS**;
- generated vertices: **472**;
- generated triangles: **880**;
- degenerate triangles: **0**;
- A-rest shoulder→wrist downward angle: **32.550003492193404°**;
- flex zones: **13**, all still explicitly untested;
- generated bounds:
  - X: `-0.7848755667 .. +0.7848755667 m`;
  - Y: `-0.14 .. +0.1954734844 m`;
  - Z: `+0.0103693201 .. 1.84 m`;
- source digest: `64c39965e6638154b70727c29690ce4bd8e992c1400bc003d6a25dcbe73a56b6`;
- mesh digest: `32adddbc9dab22d989869cdc64db24d0d89985a505f26483e7c6b27209f97dbe`.

Negative controls prove that CI rejects:

- broken bilateral wrist symmetry;
- silent authored-height drift;
- silent flex-zone promotion from `DECLARED_NOT_DEFORMATION_TESTED`.

## Exact-head GitHub evidence

Exact-head workflow:

- run: **35051583456**;
- workflow: `Character organic form baseline`;
- conclusion: **SUCCESS**;
- Python 3.11: compile, tests, exact evidence build/upload PASS;
- Python 3.13: compile and tests PASS.

Retained artifact:

- name: `character-neutral-a-001-evidence`;
- artifact ID: **10429625345**;
- archive SHA-256: `f2f42e398869f3c493cb221991904e62107c1d8ca39e622178412f6735388f3d`;
- exact head binding: `4c2ee8a6ba1ce4f79a0aba46a75ea18f550844a2`.

Downloaded retained evidence rehashed exactly to GitHub's archive digest. Retained file hashes include:

- `evidence.json`: `2cac1fe10e4367c817a03f2cd43a920af0e6cd04955b6124777440fa4e1a0f49`;
- `source.json`: `7ec57cd9dbc207007c9ac8459a6838b1343ad2961086003e95e081d4b3531ec5`;
- `mesh.json`: `86d80b4eca769de339d67030fcc8a8a2a18d97e89744a42281fa9106d39e8c3c`;
- `character.obj`: `07c02b6a59ca5a79dee3ef88f5a72d977f5072d31538edab49b4998d52adcb11`;
- `front.svg`: `fae95621d30ec2cbec35d59fe3c818f3bbd0c06a54d360c07df0054e82b9637c`;
- `side.svg`: `b48008602da75c5fdd0569b3faeb628a4ddf2d115b3234800d0bccef163ec0ce`;
- `top.svg`: `fe0eba14b1c0300ee8fc19ee97a87a3bafa3ac7974c547d06c8c32593826af68`.

The retained SVG hashes match the locally generated SVGs that were directly rasterized and inspected before publication, so the visual observations below apply to the exact retained evidence body rather than a different local candidate.

## Direct Organic Form observation

Within the exact wire-form evidence scope:

- **front:** the A-rest silhouette is immediately readable; ribcage, pelvis and head remain separate visual masses; upper/lower limbs taper rather than reading as one constant-width bar; left/right stance is visibly balanced;
- **side:** the ribcage and pelvis retain visible depth instead of collapsing to a flat front-only mannequin; feet project forward and remain distinguishable from the vertical lower-leg chain;
- **top:** the shoulder/arm span and torso depth are explicit, and the body remains bilaterally balanced;
- the body reads as a deliberately simplified neutral mannequin, not a finished human character.

This is Organic Form observation only. Art Director / Visual Observer acceptance has **not** been granted.

## Truth boundary / non-claims

This activation does **not** prove:

- biological, medical or population-representative anatomy;
- sex, age, ethnicity or species correctness;
- final character style or production sculpt quality;
- connected skin topology, production edge flow or self-intersection freedom;
- joint clearance under motion or volume preservation;
- rig, skeleton, weights, constraints or deformation quality;
- animation / retarget quality;
- UVs, materials, textures, shaders or final rendering;
- Armor / Unit fit, socket compatibility or gameplay scale;
- collision, physics, engine import or runtime performance;
- CANON, production readiness, Character mastery or Organic Form mastery.

The 13 flex zones are handoff coordinates only. Their existence must not be silently read as a rig/deformation PASS.

## Root gate

- **Truth:** exact source/mesh identities, negative controls, retained artifact hashes and visual observations are separate from all downstream acceptance claims.
- **Agency / non-domination:** Character owns its source; Geometry owns topology acceptance; Rigging owns deformation; Art Director / Visual Observer own perceptual acceptance; Armor / Unit own their receiving-domain compatibility.
- **Continuity:** active Animal and Nature lanes remain untouched; the work opens a previously empty Character source lane rather than rewriting a busy department.
- **Wisdom before speed:** one bounded neutral body is falsified first; no character generator, species system, production retopo standard or UC humanoid abstraction is promoted from one example.

## Handoffs

- **3D Art Director / Visual Observer:** inspect artifact `10429625345` front/side/top views for mass hierarchy, A-rest readability, proportion defects and whether the side profile is sufficient before any downstream promotion.
- **Geometry / Topology:** if visually accepted, test one connected deformable transition (for example shoulder→elbow→wrist or hip→knee→ankle) without rewriting source semantics. Do not inherit Animal PR #4 topology PASS.
- **Rigging / Deformation:** consume only the exact landmarks/flex-zone identities after visual/topology review. No weights, constraints or pose limits are implied.
- **Armor / Unit:** this becomes a possible future fit target, but there is no current clearance/socket compatibility claim.
- **Materials / LookDev:** do not use shading detail to rescue weak form; wait for the neutral-body visual review.
- **Technical Art / UC Integration:** no UC adapter is requested from this single character example.
- **Capability Cartographer:** Organic Form now has Animal + Nature + Character source-owned domains. Track repeated source-landmark/flex semantics, but do not centralize them yet without another receiving-domain need.

## Next Organic Form pass

1. Read Art Director / Visual Observer response to Character PR #2 first.
2. If proportions / mass hierarchy are rejected, repair this same source with exact before/after evidence rather than opening a second character family.
3. If accepted, prefer one connected-topology or deformation challenge before adding face detail, hands, clothing, species variants or procedural character generation.
4. Keep Animal and Nature neutral sources stable unless new evidence identifies a true **form** defect owned by Organic Form.
