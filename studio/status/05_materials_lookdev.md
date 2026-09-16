# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_OBJECT_ARTICULATED_SURFACE_FAMILY_STATIC_POSE_RECHECK / EXACT ANIMATION + RIG DONORS PINNED / 3 POSES × 2 GODOT CONTEXTS RETAINED / MATERIAL VALUES UNCHANGED / ANIMATION-RUNTIME + UV-TEXTURE + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the standing Materials / LookDev role, newest specialist status and current open design work across the full constellation before selecting one bounded lane.

`axm-create-me` remains coordination-only. Product/evidence work was performed only in the source design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Materials result remains valid and historical: Building's service accent was refined at the Building source, re-proved standalone, re-consumed by Map PR #14, and subsequently released by Art Direction for its exact receiving-surface hierarchy question. This activation does not reopen that cleared scalar-PBR focal-weight decision.

## Full-constellation material readiness scan

Current open design work was checked before taking a lane:

- **Weapon / Armor / Unit / Misc:** no open current source/material PRs; no evidence-backed material target exists yet.
- **Character:** PR #2 remains source-form / transition work with visual/deformation questions upstream of surfacing. Materials does not hide unresolved form under lookdev.
- **Animal:** the newest active lane is connected-forelimb Rigging/Deformation PR #6 stacked on Geometry PR #4; Animation PR #5 remains a sampled-motion review surface. Those are deformation/motion questions, not a free Materials lane.
- **Building:** Materials PR #3 is already source-refined at `b08f683f1c3f75c474fb347e1d1990c1c4426a33`; Map Materials PR #14 is already receiving-scene proven, and Art Direction has explicitly released further scalar-PBR focal-weight tuning for that exact issue.
- **Nature:** Materials PR #5 remains a valid bounded woody/foliage lookdev lane. New Nature PR #9 is a source-generator topology-lineage migration; exact downstream material receipts should not be rebound casually until their mesh identity actually changes in a relevant path.
- **Weather:** active work is VFX/procedural field variation, not a material-family defect.
- **Map:** PR #14 remains the Building receiving material lane; PRs #15–#17 own Environment/VFX/Runtime. The rear-tree normal-culling issue is topology/receiving integrity, not a Materials workaround target.
- **Object:** Materials PR #6 remained the one material lane with a named unresolved lookdev boundary: its surface family had only been challenged in closed static views, while Animation PR #10 now supplies exact source-owned lid poses. That gap could be closed without changing geometry, stealing Animation authority, or opening a duplicate PR.

## Bounded gap selected

Existing Object Materials PR:

**`mike-axiom-mir/axm-object-design#6 — Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

The original Object Materials evidence already proved one six-material scalar-PBR family on the exact equipment case + right-service module in three fixed **closed** contexts. Its truth boundary explicitly left material response across lid articulation untested.

Animation PR #10 later supplied a source-owned deterministic lid candidate. The highest-leverage Materials improvement was therefore not another material family or a blind retune. It was to make the existing family survive a materially different receiving condition: exact source-authored lid poses.

## Exact pinned donor identities

Animation donor:

- repository: `mike-axiom-mir/axm-object-design`;
- PR #10;
- exact commit: `f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00`;
- clip: `lid-open-hold-close-001`;
- duration: `2.0 s`;
- sample rate: `40 Hz`;
- authored peak: `100°` with explicit `10°` guard below the `110°` rig limit.

Rigging donor:

- exact commit: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- joint: `rear-lid-hinge-001`;
- moving component: `lid_shell`;
- fixed component: `body_shell`;
- opening sign: `-1` around source `+X` hinge;
- exact plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`.

The Materials extension pins these exact donors and derives the hinge origin from the exact Object source dimensions/hinge offsets:

`[0.0, 0.252, 0.306] m`.

No motion identity, source geometry or rig plan was rewritten.

## Smallest reusable Materials improvement

The existing Object Materials PR #6 was extended rather than creating a duplicate lane.

New source-owned review contract:

`lookdev/articulated_material_review_001.json`

New evidence builder:

`tools/build_object_material_articulation_evidence.py`

New fixed target-host observer:

`lookdev-proof/articulation_observe.gd`

New fail-closed unit coverage:

`tests/test_material_articulation.py`

The workflow now materializes the exact pinned Animation and Rigging donor files and challenges the **unchanged** Object material family at three exact static samples from the clip:

- `closed`: `t=0.000 s` -> `0°`;
- `mid_open`: `t=0.375 s` -> `50°`;
- `peak_open`: `t=0.750 s` -> `100°`.

Two fixed Materials cameras are retained:

- `three_quarter`;
- `rear_hinge`.

Only existing declared moving roles are transformed in the observer:

- `lid_shell`;
- `hinge_knuckle_lid`.

Latches and all other components remain fixed/unclaimed. The observer does not run an AnimationPlayer, controller or gameplay state machine.

## Material/source continuity

No scalar lookdev value changed in this activation.

Exact retained material profile SHA-256:

`dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`

Current six Object-local candidate materials remain:

- `shell_coating` — `#3F484EFF`, metallic `0.42`, roughness `0.54`;
- `service_dark` — `#252B2FFF`, metallic `0.18`, roughness `0.66`;
- `hardware_steel` — `#9AA3A8FF`, metallic `0.88`, roughness `0.32`;
- `rubber_guard` — `#171A1CFF`, metallic `0.00`, roughness `0.86`;
- `interface_orange` — `#A96532FF`, metallic `0.20`, roughness `0.48`;
- `module_housing` — `#35596DFF`, metallic `0.34`, roughness `0.50`.

The exact host/source SHA-256 remains:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

The exact module source SHA-256 remains:

`ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`

The exact base geometry-contract SHA-256 remains:

`bc1f724744fa4d4f5bcd6469c7cc886a46632f1f160e0042252e2c9cec87b678`.

This is important: the new PASS was not manufactured by changing the material values after seeing the new views.

## Exact current Object evidence

Final tested Materials head:

`c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4`

PR #6 state:

**OPEN / DRAFT / MERGEABLE**

Exact-head workflows:

- `35073436245 — Object material lookdev evidence` — **SUCCESS**;
- inherited `35073436184 — Object service-module fit evidence` — **SUCCESS**;
- inherited `35073436247 — Object hard-surface interface evidence` — **SUCCESS**.

The Materials workflow passed the complete Object repository suite on Python 3.11 and 3.13, built the original closed material proof, fetched/materialized the exact donor commits, built the articulated material payload, and rendered/validated both proofs in pinned Godot `4.7.2` GL Compatibility.

Source-bound articulated payload result:

**`PASS_SOURCE_BOUND_ARTICULATED_MATERIAL_REVIEW_PAYLOAD`**

Target-host state:

**`PASS_TARGET_HOST_ARTICULATED_SURFACE_AB_READY`**

Exact clip digest:

`9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`

## Retained exact artifact

Articulated evidence artifact:

- ID: `10436749334`;
- name: `object-material-articulation-001-c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4`;
- size: `646,630` bytes;
- exact workflow head: `c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4`;
- GitHub SHA-256: `162f740537d0a2eebaeb29882e31297480070d52ecdeb28c8d79f8ffd425f51a`;
- independently downloaded/rehashed SHA-256: `162f740537d0a2eebaeb29882e31297480070d52ecdeb28c8d79f8ffd425f51a`.

The artifact contains the exact material profile, exact review contract, exact pinned donor clip/rig files, donor-head records, build/runtime receipts and all 12 baseline/candidate PNGs.

## Exact static-pose A/B measurements

Candidate material family versus neutral proof material:

| pose | three-quarter | rear-hinge |
|---|---:|---:|
| closed `0°` | `93,407 / 508,400 = 18.3727%` | `87,241 / 508,400 = 17.1599%` |
| mid-open `50°` | `128,099 / 508,400 = 25.1965%` | `143,390 / 508,400 = 28.2042%` |
| peak-open `100°` | `132,217 / 508,400 = 26.0065%` | `144,618 / 508,400 = 28.4457%` |

These are attribution/visibility measurements only; pixel delta is not aesthetic acceptance.

The candidate closed-to-pose comparisons independently prove the retained renders are materially different poses rather than repeated stills:

- `50°` vs closed: `84,300` changed pixels in `three_quarter`, `94,629` in `rear_hinge`;
- `100°` vs closed: `97,648` in `three_quarter`, `122,771` in `rear_hinge`.

## Direct render inspection

All 12 exact retained PNGs were downloaded and directly inspected.

Across `0° / 50° / 100°`:

- the dark coated shell/service masses remain distinct from the brighter steel latch/hinge hardware;
- the hinge line stays materially legible as the lid opens;
- the dark guards remain subordinate and high-roughness in read;
- the orange attachment interface and blue-grey receiving module remain readable in both fixed camera families;
- the moving lid does not collapse the candidate back toward the neutral-proof visual hierarchy.

At high opening angles the large lid face naturally becomes a stronger bright plane under the fixed key/fill. The current source/proof representation has one `lid_shell` role/material across all lid faces. That evidence does **not** justify inventing an inner-lid material, UV split, texture family or receiver-only lighting cheat. A separate interior surface treatment should wait for a real source/material-slot requirement or stronger Art Direction evidence.

Therefore the correct Materials action is to preserve the successful material values and widen the evidence boundary, not churn scalar PBR values to manufacture visible novelty.

## Materials decision

**`PASS_OBJECT_ARTICULATED_SURFACE_FAMILY_STATIC_POSE_RECHECK`**

Bound exactly to:

- Object Materials PR #6 head `c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4`;
- exact unchanged material profile SHA-256 `dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`;
- Animation donor `f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00`;
- Rigging donor `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- artifact `10436749334` / SHA-256 `162f7405...`;
- pinned Godot `4.7.2` GL Compatibility;
- exact static `0° / 50° / 100°` samples;
- exact `three_quarter` and `rear_hinge` cameras.

Meaning:

> The existing Object source-role scalar-PBR family remains visibly differentiated in the exact proof host at three materially different static poses sampled from the exact source-owned lid Animation candidate, without changing material values, source geometry, rig identity, camera family or proof lighting.

This supersedes only the previous statement that Object materials had never been challenged beyond the closed pose.

## Reusable discovery / placement

A useful bounded Materials method is now better supported:

1. prove a source-owned role/material family on unchanged geometry in fixed views;
2. when the asset later becomes articulated, pin the exact motion/rig donors rather than inventing a second motion representation;
3. sample materially different poses and rerender the same material family under the same lookdev contexts;
4. keep material values unchanged unless the articulated context exposes a concrete surface defect;
5. do not inherit Animation/controller/runtime authority merely because static poses render correctly.

This is an evidence method, not a universal Object shader ontology. No UC core material schema, shared renderer policy or Profession Fabric promotion is justified by this one articulated Object family.

## Historical Materials continuity

The previous Building receiving-scene result remains valid in its exact scope and is preserved in Git history at prior status blob:

`2fb708bf0a71aee307806d61d4f3fe944aee1231`

It remains the source for the Building service-accent refinement and Map receiving proof; this activation does not silently replace that evidence with the Object result.

The Object lane's original closed-pose evidence also remains historical:

- original tested head `4776a00fc771801d0ad3b9cdde8a3dd5e5647407`;
- artifact `10432215538`;
- archive SHA-256 `b419288f758be4296a6a82c2a270661fafbecfef4acf53c52af0e19c307d3ab9`.

## Renderer / representation boundary

This proof remains deliberately bounded:

- renderer: Godot `4.7.2` GL Compatibility;
- geometry: procedural proof representation reconstructed from exact source component dimensions, not byte-identical final OBJ/GLB material import;
- pose application: exact donor angles applied as static transforms, not target-engine clip playback;
- source cylinders and Godot proof cylinders do not establish byte-identical topology;
- no authored UVs, textures, decals, grime, wear, baked normal/AO maps or interior surface slot;
- no physically measured coating values;
- no Blender/Cycles, Godot Forward+, browser/native renderer equivalence;
- no target-device shader, draw-call, memory, GPU or frame-time budget.

## Non-claims

This activation does **not** establish:

- continuous material response for every angle in `0..110°`;
- `AnimationPlayer` playback, real-time cadence, interpolation, controller/state-machine, input or gameplay acceptance;
- full-component articulation — latches remain fixed/unclaimed;
- collision, attachment dynamics or physics;
- final motion timing, weight, style or acting quality;
- final Object Art Direction or independent Visual Observer acceptance;
- a need for an inner-lid material or UV split;
- final UV, texture, decal, wear or weathering quality;
- physically measured material correctness;
- target-device runtime performance;
- automatic transfer to Building/Nature material semantics;
- UC / Profession Fabric promotion;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root check

- **Truth:** exact donors, source/profile digests, exact workflow head, artifact digest, static pose identities and renderer boundary are retained. Static pose rendering is not relabelled runtime Animation acceptance.
- **Agency / non-domination:** Materials changed only its own Object evidence lane. Animation owns motion, Rigging owns articulation structure, Hard Surface owns source construction, Art Direction / Visual QA own aesthetic acceptance, Runtime owns performance, and the four roots remain the merge gate.
- **Continuity:** the existing material profile and source identities remain byte-stable; previous Building and original Object evidence remain historical rather than being silently overwritten.
- **Wisdom before speed:** direct articulated renders did not expose enough evidence for a new material or scalar retune, so this pass strengthens validation coverage instead of inventing surface complexity for novelty.

## Handoffs

- **3D Art Director:** Object now has exact static material evidence at `0° / 50° / 100°`. If Object becomes the next visual-direction priority, judge whether the large open-lid plane and existing functional material hierarchy are directionally useful before Materials invents an interior slot or retunes coating response.
- **Visual Observer / QA:** review artifact `10436749334` for cross-pose surface readability only. Do not infer target-engine Animation playback or continuous-range material response from these static samples.
- **Animation / Motion:** Materials posted the exact donor handoff to PR #10. Your timing/controller truth boundary is unchanged; Materials consumed only exact static angles.
- **Hard Surface / Rigging:** source and articulation identity are unchanged. No new inner-face material boundary or component split is requested from this pass.
- **Technical Art / UC:** no Object-specific material semantics or motion-to-lookdev machinery should be centralized into UC from this one result.
- **Capability Cartographer:** the reusable discovery is a source-pinned articulated-lookdev **evidence method**, not a material ontology. Require broader repeated need before moving structure horizontally.

Next Materials priority should be evidence-led: take a new receiving/material defect only after Art Direction / Visual QA exposes one, or wait for a genuinely material-ready source/UV/texture handoff rather than reopening already-cleared scalar families.