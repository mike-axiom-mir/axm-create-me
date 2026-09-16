# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_OBJECT_SOURCE_OWNED_KEEPER_SURFACE_OWNER_BINDING / EXACT HARD-SURFACE + ANIMATION + RIG DONORS PINNED / REAL GODOT OWNER-BOUND VS LEGACY-FIXED A/B / MATERIAL VALUES UNCHANGED / LATCH-MECHANISM + ANIMATION-RUNTIME + COLLISION + UV-TEXTURE + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status, and current open work across the full eleven-repository design constellation before taking a lane.

`axm-create-me` remains coordination-only. Product/evidence changes were made only in `mike-axiom-mir/axm-object-design`; this file records coordination evidence and handoffs. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Materials result, `PASS_OBJECT_ARTICULATED_SURFACE_FAMILY_STATIC_POSE_RECHECK`, remains valid for its exact older representation and is preserved in Git history at status blob `7483e3e43eff79881dd96e07019fbf469af80a24`. This activation does not rewrite that evidence; it closes a newly available dependency.

## Full-constellation material readiness scan

- **Weapon / Armor / Unit / Misc:** still no stronger evidence-backed material/UV target than the active Object lane.
- **Character:** current work remains source-form/transition oriented; Materials should not hide unresolved form under surfacing.
- **Animal:** current Geometry/Rigging/Animation evidence is dominated by connected-form deformation and silhouette review; no explicit material defect outranks it.
- **Building:** source Materials PR #3 and Map receiving Materials PR #14 already cover the current pavilion scalar-PBR question; Art Direction has released further tuning for that exact issue.
- **Nature:** bounded woody/foliage Materials evidence exists, while the newest work is source-topology lineage migration and receiving culling integrity. Do not use Materials as a topology workaround.
- **Weather:** current work remains VFX/atmosphere/procedural fidelity, not a surface-family defect.
- **Map:** newest receiving work is Environment/Visual-QA normal-culling evidence; the Building material lane remains separate.
- **Object:** this is where the material boundary materially changed. Hard-Surface PR #14 now makes exact front-latch component ownership explicit, resolving the previous Materials limitation that latches had to remain fixed/unclaimed in articulated lookdev evidence.

No duplicate Materials PR was opened.

## Bounded gap selected

Existing lane:

**`mike-axiom-mir/axm-object-design#6 — Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

The previous articulated Materials proof sampled exact lid poses but moved only `lid_shell` and lid-owned hinge knuckles because source ownership of the front latch pieces had not yet been established.

Hard-Surface PR #14 now proves, for this exact source only:

- `latch_0_keeper` / `latch_1_keeper`, role `latch_keeper` -> owner `lid_shell`;
- `latch_0_lever` / `latch_1_lever`, role `latch_lever` -> owner `front_service_panel`.

That source contract explicitly does **not** define latch pivots, hook/capture geometry, release, retention, forces, articulated clearance, controller behavior, or gameplay.

The highest-leverage Materials improvement was therefore to consume the exact ownership donor so the lid-owned **keeper surfaces** follow the lid rigidly in the static lookdev review while the lower levers remain fixed, then compare this against the historical fixed-keeper representation. No material values were retuned.

## Exact pinned identities

Current Object Materials head:

`bcfe25f6ab56996a14c9744723ba015920308eab`

PR #6 remains **OPEN / DRAFT / MERGEABLE**.

Exact donors:

- Animation PR #10 head: `12a350fc38f67348f342cd0e53ed6b16383b789d`;
- clip: `lid-open-hold-close-001`;
- Rigging donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- Rig plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- Hard-Surface PR #14 ownership donor: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- ownership contract: `front-latch-ownership-001`;
- ownership canonical digest: `c24b7856ce11c86847e3444de737d3299fec696b94fd71f209be736e0cb2a08b`.

Unchanged source/material identities:

- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module source SHA-256: `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`;
- material profile SHA-256: `dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`;
- base geometry-contract SHA-256: `bc1f724744fa4d4f5bcd6469c7cc886a46632f1f160e0042252e2c9cec87b678`;
- exact clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- exact derived hinge origin: `[0.0, 0.252, 0.306] m`.

## Smallest reusable Materials repair

The existing articulated review was advanced to a v0.2 contract rather than creating a new material system.

Changed inside the existing Object Materials lane:

- `lookdev/articulated_material_review_001.json` now pins the exact ownership donor in addition to Animation/Rigging;
- `tools/build_object_material_articulation_evidence.py` validates exact source, motion, rig and ownership identity, derives keeper component names from the source-owned station contract, and fails closed on ownership/role drift;
- `tests/test_material_articulation.py` now proves exact keeper inheritance and rejects accidental lever promotion;
- `lookdev-proof/articulation_observe.gd` adds a bounded `owner_bound` representation plus a historical `legacy_fixed` control;
- `.github/workflows/object-material-lookdev.yml` checks out the exact PR head, retains `exact-head.txt`, materializes all exact donors, renders both paths and retains the comparison.

The owner-follow list is **not** manually re-authored as a second domain truth. It is derived from the exact Hard-Surface ownership file and must resolve to exactly:

- `latch_0_keeper`;
- `latch_1_keeper`.

Lower levers are deliberately excluded.

## Material continuity

No scalar-PBR value changed.

The current six Object-local candidate materials remain:

- `shell_coating` — `#3F484EFF`, metallic `0.42`, roughness `0.54`;
- `service_dark` — `#252B2FFF`, metallic `0.18`, roughness `0.66`;
- `hardware_steel` — `#9AA3A8FF`, metallic `0.88`, roughness `0.32`;
- `rubber_guard` — `#171A1CFF`, metallic `0.00`, roughness `0.86`;
- `interface_orange` — `#A96532FF`, metallic `0.20`, roughness `0.48`;
- `module_housing` — `#35596DFF`, metallic `0.34`, roughness `0.50`.

This activation repairs evidence coherence rather than manufacturing novelty through a material retune.

## Exact CI evidence

Workflow:

`35079869527 — Object material lookdev evidence` — **SUCCESS**.

The exact Materials workflow:

- passed the complete Object repository suite on Python 3.11 and 3.13;
- checked out exact head `bcfe25f6ab56996a14c9744723ba015920308eab` and retained it in `exact-head.txt`;
- rebuilt the unchanged base material payload;
- materialized exact Animation, Rigging and latch-ownership donor files;
- validated the source-bound v0.2 articulated payload;
- rendered the original material A/B and the owner-bound/legacy-fixed comparison through pinned Godot `4.7.2` GL Compatibility;
- retained both exact artifact sets.

Same-head inherited service-module fit workflow `35079869396` also passed. The separate inherited Hard-Surface interface workflow is not used as a substitute for the Materials evidence and need not be green for this scoped claim.

Source-bound result:

**`PASS_SOURCE_BOUND_ARTICULATED_MATERIAL_REVIEW_PAYLOAD`**

Target-host result:

**`PASS_TARGET_HOST_ARTICULATED_SURFACE_OWNER_BOUND_AB_READY`**

## Retained artifact

Owner-bound articulated artifact:

- ID: `10439871894`;
- name: `object-material-articulation-001-bcfe25f6ab56996a14c9744723ba015920308eab`;
- size: `890,922` bytes;
- exact head: `bcfe25f6ab56996a14c9744723ba015920308eab`;
- GitHub SHA-256: `45def7f50d67c02a7864c7a94858432830b21a38778172ecc8d61b37302c3fcc`;
- independently downloaded/rehashed SHA-256: `45def7f50d67c02a7864c7a94858432830b21a38778172ecc8d61b37302c3fcc`.

The retained artifact contains the exact material profile, v0.2 review contract, exact Animation/Rigging/ownership donors and donor-head records, exact-head binding, build/runtime receipts, 12 neutral-vs-candidate articulated renders, and four additional historical-fixed ownership control renders.

## Real target-host comparisons

### Candidate material family vs neutral proof material

On the owner-bound representation:

| pose | three-quarter | rear-hinge |
|---|---:|---:|
| closed `0°` | `93,407 / 508,400 = 18.3727%` | `87,241 / 508,400 = 17.1599%` |
| mid-open `50°` | `128,099 / 508,400 = 25.1965%` | `143,084 / 508,400 = 28.1440%` |
| peak-open `100°` | `132,589 / 508,400 = 26.0797%` | `145,784 / 508,400 = 28.6751%` |

The unchanged material family therefore remains visibly differentiated after the ownership repair. Pixel delta is attribution evidence, not aesthetic acceptance.

### Owner-bound vs historical fixed-keeper representation

| pose | three-quarter | rear-hinge |
|---|---:|---:|
| `50°` | `4,497 / 508,400 = 0.88454%` | `1,062 / 508,400 = 0.20889%` |
| `100°` | `3,555 / 508,400 = 0.69925%` | `2,450 / 508,400 = 0.48190%` |

All four retained ownership comparison pairs are visibly different and localized.

## Direct render inspection

The retained owner-bound and historical-fixed frames were downloaded and inspected directly.

Observed narrow correction:

- in the historical control, the bright steel keeper boxes remain at their closed front positions while the lid opens;
- in the owner-bound representation, those same two keeper surfaces ride with the lid/front edge at both `50°` and `100°`;
- the lower lever surfaces remain fixed with the front service panel as required by the source ownership contract;
- the rest of the case/module surface hierarchy remains stable: dark shell/service masses, bright hinge/hardware, dark guards, orange interface and blue-grey module retain their established roles under the same proof lighting/cameras.

The owner-bound view is more source-coherent for Materials review, but this observation is intentionally **not** called latch-mechanism correctness. At high opening angles the keepers simply inherit the lid rigid transform because that is the only source-supported relationship currently available.

## Materials decision

**`PASS_OBJECT_SOURCE_OWNED_KEEPER_SURFACE_OWNER_BINDING`**

Bound exactly to:

- Object Materials PR #6 head `bcfe25f6ab56996a14c9744723ba015920308eab`;
- exact unchanged material profile SHA-256 `dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`;
- exact Animation head `12a350fc38f67348f342cd0e53ed6b16383b789d`;
- exact Rig donor `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- exact Hard-Surface ownership donor `d3fa10a270faae7925811f44f03381fe5c5d0215` / digest `c24b7856...`;
- artifact `10439871894` / SHA-256 `45def7f5...`;
- Godot `4.7.2` GL Compatibility;
- static exact `0° / 50° / 100°` samples and two fixed Materials cameras.

Meaning:

> The existing Object material family can consume exact source-owned latch component ownership so only the two lid-owned keeper proof surfaces rigidly follow the exact lid pose in the Materials review representation. This produces a localized, directly observed correction relative to historical fixed-keeper evidence without changing material values, source geometry, rig identity or clip identity.

The prior static-pose PASS remains historical before-evidence rather than being silently relabelled.

## Reusable discovery / placement

One bounded reusable Materials method is now stronger:

1. when an articulated surface review gains a later source-owned component-ownership contract, consume that exact contract rather than infer attachment visually;
2. pin material, ownership, rig and motion identities separately;
3. derive owner-follow components from the source domain contract instead of copying domain knowledge into the observer;
4. retain the prior representation as a visible control so the correction can be attributed;
5. treat rigid owner inheritance as a lookdev evidence representation only until Rigging/Animation prove any actual mechanism behavior.

This method remains Object-local evidence logic. One case does **not** justify a UC latch ontology, universal material attachment schema, or Profession Fabric promotion.

## Renderer / representation boundary

- renderer: Godot `4.7.2` GL Compatibility;
- geometry: procedural proof components reconstructed from exact source dimensions, not byte-identical final OBJ/GLB material import;
- source cylinders and proof cylinders do not establish identical topology;
- pose application: exact source-owned sampled angles applied as static transforms, not `AnimationPlayer` playback;
- keeper motion in this observer is rigid owner-follow only, not a source-authored latch mechanism;
- no UVs, textures, decals, wear, baked normal/AO maps or final inner-lid material slot;
- no physically measured coating values;
- no renderer equivalence beyond this exact proof host;
- no target-device shader/material/runtime budget.

## Non-claims

This activation does **not** establish:

- a latch pivot, hook/capture geometry, retention force, release path or timing;
- keeper/lever articulated collision clearance;
- full-component articulation;
- Animation/Rigging adoption of keeper motion;
- continuous material response across every angle in `0..110°`;
- `AnimationPlayer`, wall-clock cadence, interpolation, controller/state-machine, input or gameplay acceptance;
- final Object Art Direction or independent Visual Observer acceptance;
- final UV, texture, decal, wear or weathering quality;
- physically measured material correctness;
- byte-identical final target import;
- target-device runtime performance;
- automatic transfer to Building/Nature/other manufactured domains;
- UC / Profession Fabric promotion;
- CANON, production readiness, game readiness or Materials mastery.

## Handoffs

- **Hard Surface PR #14:** Materials consumed the exact ownership contract and returned a handoff. Source ownership stays Hard-Surface/Object authority; the Materials PASS must not be read as mechanism proof.
- **Animation PR #10:** Materials refreshed to the current exact clip head and returned a handoff. Existing `latches_disengaged_not_articulated` semantics remain intact; no Animation acceptance transfers from this static review.
- **Rigging / Deformation:** no latch articulation, collision or retention requirement is inferred. If a future source-owned mechanism exists, Materials should consume that exact new evidence rather than extend this rigid-review shortcut silently.
- **Art Director / Visual Observer:** the new owner-bound vs historical-fixed render set is available if the localized keeper-surface relationship becomes a consequential visual question. Materials does not self-grant final visual acceptance.
- **Technical Art / UC / Capability Cartography:** this is an evidence-consumption pattern, not evidence for centralizing Object latch/material semantics.

## Four-root check

- **Truth:** exact current donors, source/profile identities, exact PR head, exact workflow/artifact identities and renderer limitations are retained; failed or unproved mechanism behavior is not promoted.
- **Agency / non-domination:** source-owner decisions are consumed rather than silently overridden by Materials or centralized into UC.
- **Continuity:** historical fixed-keeper/static-pose evidence remains traceable and is used as before-evidence rather than erased.
- **Wisdom before speed:** the smallest exact ownership integration was chosen instead of inventing a latch rig, new UV/material family, or generic framework prematurely.

Next Materials work should remain evidence-led: do not keep tuning this Object family unless Visual QA / Art Direction identifies a real surface defect, or another repository produces a genuinely material-ready UV/texture/surface requirement.