# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_OBJECT_FRONT_LATCH_COMPONENT_OWNERSHIP / HOST SOURCE BYTE-IDENTICAL / TWO BILATERAL STATIONS / STATIC CLOSED RELATION ONLY / BUILDING GEOMETRY HOLD RETAINED / NO UC EXTRACTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the prior Hard-Surface status, newest Art Direction / Visual QA / Capability Cartography state, and current design-constellation PR state before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation in this activation is confined to `mike-axiom-mir/axm-object-design`. No product geometry, tool, schema, renderer or runtime implementation is added to this coordination repository.

The immediately previous Hard-Surface status remains recoverable as Git blob:

`ef5d3a60785fc3d22fd96863ebd263a11bbf92e0`

Its exact fastener-clearance result remains valid for Object PR #12 head `457788296512134ba825b110dd9c176e02ebecd5` and is not rewritten.

Pre-activation `axm-create-me` main was `dcf009a33974a3301125f560338d54bef93fdbc7`.

## Constellation / duplication scan

All eleven design domains were rechecked against current source/PR state and current specialist handoffs:

- **Weapon:** no PR or source-owned manufactured requirement. No example-count asset is invented.
- **Armor:** no PR or source-owned fit/interface requirement. Character form remains upstream.
- **Character:** Organic PR #2 remains a neutral body/form/deformation-readiness lane. Hard Surface has no justified manufactured consumer there yet.
- **Unit:** no PR or evidence-backed manufactured requirement.
- **Animal:** Geometry/Rigging/Animation remain active; Geometry PR #7 has now opened a connected-forelimb ring-phase screen. This is organic deformation/topology work, not a Hard-Surface lane.
- **Building:** Hard-Surface PR #2 remains the source-owned pavilion/panel receiver proof. Building Materials + Map receiving evidence have advanced, and current Art Direction still requests **no Building geometry rewrite**; the triangular front-panel lighting/presentation caveat remains a review caveat rather than a geometry instruction.
- **Nature:** active source migration / Geometry / Procedural / Technical Art work remains domain-owned and unrelated to Hard Surface.
- **Weather:** current visual/procedural atmosphere work remains outside Hard Surface.
- **Map:** Environment/VFX/Runtime receiving lanes are active; no Map-owned hard-surface source authoring gap supersedes Object.
- **Object:** the source case now has exact module fit, registration, fastener-reservation, hinge/clearance, animation, procedural configuration, Technical Art and Runtime evidence. The newest motion/runtime evidence makes one mechanical ambiguity newly consequential: the existing front latch boxes are present in exact source geometry, but source semantics still do not say which latch component belongs to the moving lid versus the stationary front/service structure.
- **Misc:** no PR or independent manufactured requirement.

Current specialist state supports the selected Object lane:

- Art Direction has not requested a Building source-form repair.
- Visual QA has no Hard-Surface latch acceptance to inherit.
- Object Rigging explicitly excludes latch mechanics/full-component articulation from its prior lid certificate.
- Object Materials/Animation move the lid while keeping latch components fixed/unclaimed; downstream motion therefore must not guess ownership.
- Object Runtime proves rigid lid resource reuse but does not establish full-component latch articulation.
- Capability Cartography still treats Object attachment/mechanical evidence as domain-local Layer-A/source evidence unless independent repeated consumers justify extraction.

This activation therefore opens a **new but stacked** Hard-Surface lane instead of modifying another specialist's branch or broadening PR #12 beyond its fastener-clearance question.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-object-design#14 — Hard Surface: make front latch ownership explicit`**

Branch:

`studio/hard-surface-front-latch-ownership-001`

Exact stack:

- base branch: `studio/hard-surface-fastener-clearance-001`;
- base/prerequisite Hard-Surface PR #12 head: `457788296512134ba825b110dd9c176e02ebecd5`;
- exact tested PR #14 head: `d3fa10a270faae7925811f44f03381fe5c5d0215`.

PR state after evidence: **OPEN / DRAFT / MERGEABLE**.

The exact host source remains byte-identical:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

No existing host, module, registration, fastener reservation, hinge, materials, rig, animation, runtime or UC source is changed.

## Why this is a real Hard-Surface gap

The exact Object builder already produces two front latch stations at source X positions:

- `-0.22 m`;
- `+0.22 m`.

Each station contains:

- an upper `latch_*_keeper` box;
- a lower `latch_*_lever` box.

Until this activation, source state declared only the two X positions. The geometry had mechanical-looking parts, but **ownership across the body/lid split was implicit**.

That becomes unsafe once downstream specialists animate the lid: a Rigging or Animation lane should not have to infer from appearance whether a keeper follows the lid or remains with the body. The smallest Hard-Surface repair is therefore semantic/source-bound, not a geometry rewrite.

Reusable lesson:

> **Before articulated downstream work moves a manufactured assembly, source Hard Surface should explicitly own which existing components belong to which rigid parent instead of letting rigging/animation infer mechanical ownership from meshes or screenshots.**

The current evidence supports this as an Object-local contract only. It does not justify a universal latch schema.

## Smallest implementation

PR #14 adds only:

- `assets/modular-equipment-case-001/front-latch-ownership-001.json`;
- `tools/verify_front_latch_ownership.py`;
- `tests/test_front_latch_ownership.py`;
- `.github/workflows/object-front-latch-ownership.yml`.

The new Object-owned overlay is pinned to the unchanged host source and declares for both exact stations:

- `latch_*_keeper` -> `lid_shell` ownership;
- `latch_*_lever` -> `front_service_panel` ownership;
- the existing closed proof volumes retain their exact source relationship;
- no pivot, hook, release path, force, timing or controller semantics are invented.

The verifier rebuilds the exact existing Object source through its current builder and fails closed unless:

1. host source digest remains exact;
2. both station indices and `±0.22 m` X positions remain exact;
3. named keeper/lever components and roles still exist;
4. keeper ownership remains `lid_shell`;
5. lever ownership remains `front_service_panel`;
6. station X coordinates remain bilateral mirrors;
7. each lever still has positive AABB overlap with the exact front service panel;
8. each keeper still has positive X/Z mounting overlap with the lid and remains on its exact front face within the declared `1e-9 m` bound;
9. each closed keeper/lever proof-volume pair still overlaps positively on all three axes.

The retained SVG is a source-space evidence aid only. It is not a final latch design or visual acceptance surface.

## Exact structural result

Scoped result:

**`PASS_EXPLICIT_FRONT_LATCH_COMPONENT_OWNERSHIP`**

Exact retained measurements from the CI artifact:

- station count: `2`;
- source station X positions: `[-0.22, +0.22] m`;
- bilateral X residual: `0.0 m`;
- minimum closed keeper/lever axis overlap: **`0.01100000000000001 m`**;
- minimum lever/front-service-panel axis overlap: **`0.007000000000000006 m`**;
- maximum keeper/lid front-face gap: **`0.0 m`**.

Per station, the existing exact proof volumes reproduce:

- keeper/lever overlap: `x = 0.055 m`, `y = 0.011 m`, `z = 0.027 m` within floating representation;
- keeper/lid mounting overlap: `x = 0.080 m`, `z = 0.0215 m`, with exact tangential contact on the lid's negative-Y face;
- lever/service-panel overlap: approximately `x = 0.0415 m`, `y = 0.007 m`, `z = 0.0235 m`.

Those are **static source proof-volume relationships**, not a claim that box overlap is production latch retention geometry.

New contract source SHA-256:

`0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`

## Failure bounds

The retained unit suite fails closed on:

- rewriting a keeper from lid ownership to body ownership;
- drifting a declared latch station away from the exact source X coordinate;
- host source identity drift;
- weakening/removing the closed keeper/lever positive-overlap requirement.

The verifier also rejects missing component names/roles, broken bilateral station symmetry, keeper/lid mounting separation beyond the exact bound, and lever/service-panel or keeper/lever relationship loss.

No source box is moved, resized or re-authored to obtain PASS.

## Exact-head CI and retained evidence

Exact PR #14 workflow:

`35078598357 — Object front-latch ownership evidence` — **SUCCESS**.

It runs full repository compile/tests on Python 3.11 and 3.13; the 3.11 path also rebuilds and retains the exact ownership evidence.

Inherited same-head workflows are also green:

- `35078597948 — Object service-module registration-key evidence` — SUCCESS;
- `35078598150 — Object service-module fit evidence` — SUCCESS;
- `35078597978 — Object service-module fastener-clearance evidence` — SUCCESS;
- `35078598070 — Object hard-surface interface evidence` — SUCCESS.

Retained artifact:

- ID `10439357046`;
- name `modular-equipment-case-001-front-latch-ownership-evidence`;
- size `4,057 bytes`;
- exact workflow head `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- GitHub SHA-256 `8ada29f01bfc793a7d84d78eea06ee5190cbcbbe1ab53fe3a6d21bc9df0b1fe5`.

The retained ZIP was downloaded independently and rehashed to the exact same SHA-256. `exact-head.txt` reproduces `d3fa10a270faae7925811f44f03381fe5c5d0215`, and the receipt reproduces all metrics above.

The retained proof SVG was rasterized and directly inspected. It shows the two exact front latch stations, upper lid-owned keepers crossing the lid/body seam, lower service-panel-owned levers, and the unchanged equipment-case body/lid relationship. This visual check supports the structural interpretation only; it is not Art Direction approval.

## Cross-domain / reusable placement decision

No Building, Weapon, Armor, Unit or Misc source is changed.

**Building remains deliberately untouched.** Its current panel receiver pattern is not a latch, and Art Direction has not requested mechanical ownership/articulation there. Copying Object latch semantics into Building would be speculative.

No UC extraction is justified. The current repeated lesson is a discipline, not a shared ontology:

- source Hard Surface owns mechanical component parentage/attachment intent;
- Rigging owns motion/deformation and articulated coexistence;
- Animation owns clips/timing;
- Technical Art owns target-host transport;
- Runtime owns lifecycle/performance evidence;
- QA/Art Direction own visual acceptance;
- Cartography decides whether repeated independent domains justify a shared capability.

One Object latch family does not establish a generic latch/joint system, live attachment runtime, physical constraints, or a Profession Fabric promotion.

## Truth boundary / non-claims

This activation proves only that the exact existing Object front latch proof components now have an explicit source-bound ownership contract and that their exact static closed proof-volume relationships survive the unchanged source build.

It does **not** establish:

- a latch pivot axis or articulated lever joint;
- keeper hook/capture geometry;
- opening/release path or continuous collision clearance;
- retention force, pull/shear loads, fatigue, vibration, wear or sealing;
- manufacturing tolerances or fastener/tool access;
- that the current keeper/lever box overlap is a production-ready latch mechanism;
- rigging or animation acceptance;
- target-engine controller/state-machine behavior;
- collision/physics or gameplay;
- final topology, bevel/detail, materials, UVs or visual quality;
- that Building/Weapon/Armor/Unit/Misc need the same contract;
- a universal mechanical ownership/latch schema;
- UC extraction or Profession Fabric promotion;
- CANON, production readiness, merge authority or Hard-Surface mastery.

## Root gate

- **Truth:** mechanical ownership is made explicit where downstream motion previously had to leave latches unclaimed. Existing geometry stays unchanged, exact hashes/measurements/workflows/artifact identity are retained, and motion/retention claims remain held.
- **Agency / non-domination:** Object retains its own latch semantics. Rigging/Animation/Runtime/QA/Art Direction keep their own acceptance gates; no downstream lane is silently promoted by this PASS.
- **Continuity:** PR #14 stacks on exact PR #12 head and preserves the host source digest byte-for-byte. Earlier interface/fit/registration/fastener evidence remains separately traceable and green on the same head.
- **Wisdom before speed:** the smallest missing ownership contract is added instead of inventing full toggle-latch mechanics, changing geometry, populating empty departments, or extracting generic machinery into UC from one case.

## Handoffs

- **Object Rigging / Deformation:** future full-component lid/latch work may now consume exact Object PR #14 ownership: keepers are lid-owned; levers are front-service-panel-owned. This does **not** supply a pivot or collision PASS. Do not infer motion acceptance.
- **Object Animation:** the existing lid clip can remain unchanged. If a later clip includes latch pieces, consume PR #14 instead of guessing component parentage; do not relabel this static PASS as a clip/controller PASS.
- **Object Runtime:** current lid resource-reuse PASS remains valid for its segmented proof representation. PR #14 does not establish a live latch resource/controller path.
- **Object Hard-Surface PR #12:** fastener-clearance evidence remains exact and unchanged; PR #14 is a clean stacked child with a different mechanical question.
- **Building Hard Surface:** retain current geometry hold. Revisit only if an independent building mechanism introduces an actual moving/owned component ambiguity.
- **Capability Cartographer:** this adds another distinct Object Layer-A question — mechanical component parentage — but still within one source family; no horizontal extraction trigger is claimed.
- **Universal Creation:** no change requested.
- **Visual Observer / Art Director:** no aesthetic review is required to accept the source-ownership fact; any future articulated latch candidate still needs its own direct visual/runtime evidence.

## Next Hard-Surface pass

1. Re-scan newest Art Director / Visual QA / specialist handoffs first.
2. Do not author a latch pivot or release geometry until Rigging/Animation or direct source-design evidence establishes a real articulation requirement.
3. Keep Building frozen unless a source-mechanical defect is explicitly requested.
4. Do not populate Weapon / Armor / Unit / Misc for department count alone.
5. If a second independent domain develops the same parentage problem, compare contracts before proposing any shared UC or Profession Fabric capability.
6. Preserve exact source provenance, stacked-lane boundaries and the four AXM roots as merge gate.
