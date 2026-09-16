# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_HINGE_PIN_BORE_CLEARANCE_REVIEW_ENVELOPE / OBJECT PR #25 EXACT HEAD VERIFIED / CURRENT SOLID PIN-KNUCKLE OVERLAP CHARACTERIZED / DERIVED BORE CANDIDATE ONLY / HOST SOURCE UNCHANGED / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the previous Hard-Surface status, newest specialist state, current source files and open design PRs before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation lives in `mike-axiom-mir/axm-object-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Building current-source panel rebind remains preserved in Git history at exact Building PR #5 head `c9fdb50c2a94476eff8bf3272ee8ee2b79b1d42c`, workflow `35127265373`, artifact `10459334853`, SHA-256 `50cbd5488eec8070d59bc319dfff22248e0217c6152a8cff8d0d04baf4da3ed9`. This pass did not extend that Building consumer lane.

## Fresh constellation / duplication scan

- **Weapon:** still no implementation-ready manufactured source/consumer requirement; no speculative weapon was invented to create activity.
- **Armor:** no independent stable fitted-hardware source surface yet; active Character geometry/deformation remains the stronger prerequisite.
- **Character:** newest work remains organic/geometry/rigging-owned; no manufactured shell or plate boundary justified a Hard-Surface takeover.
- **Unit:** no source asset or exact mechanical handoff stronger than current Character prerequisites.
- **Animal:** active Organic/Geometry/Rigging work is source-owning and rebinding the elbow/body chain; no manufactured lane was duplicated.
- **Building:** Hard Surface has already source-owned the closed/outward topology, named producer result and header segmentation; Procedural, Materials and Map are actively consuming/rebinding those results. No new pavilion cleanup or consumer migration was opened.
- **Nature:** current issues remain procedural/environment/visual-runtime concerns rather than manufactured geometry.
- **Weather:** current work remains VFX/runtime-owned.
- **Map:** current work is actively receiving Building/Weather/Object outputs through Environment, Technical Art, VFX and Runtime lanes; no Map-owned hard-surface source was invented.
- **Object:** dense with specialist work, so existing latch, animation, materials, UC transport and runtime lanes were left alone. A distinct unowned manufactured construction fact remained in the exact source builder: five solid closed hinge-knuckle cylinders and the coaxial solid hinge-pin cylinder occupy the same radial volume. Earlier Rigging/Hard-Surface evidence explicitly did not claim a bored knuckle or full-component collision, so this is a fresh bounded construction gap rather than a retroactive failure.
- **Misc:** still no evidence-backed manufactured requirement stronger than the Object hinge construction gap.

The previous instruction not to automatically continue Building or Object was therefore respected: Object was selected only after direct current-source inspection exposed a concrete unowned solid-geometry contradiction that matters if the hinge proof is ever promoted toward real manufactured geometry.

## Selected bounded improvement

Repository:

`mike-axiom-mir/axm-object-design`

New stacked draft PR:

**#25 — `Hard Surface: bound hinge pin bore-clearance envelope`**

Branch:

`studio/hard-surface-hinge-pin-bore-clearance-001`

Exact base:

Hard-Surface PR #24 head:

`9582cd72d69a7fd7b7fc220f40f3d4781d9d03ed`

Exact PR #25 head:

**`e790eac8d9f9e40d77d7ffe944fb036ccb6cf4e5`**

PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

## Gap and source observation

Exact unchanged Object host source:

- asset: `modular-equipment-case-001`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- hinge axis: `+X`;
- derived hinge-line origin: `[0.0, 0.252, 0.306] m`;
- five knuckles, each `0.10 m` long;
- knuckle outer radius: `0.021 m`;
- hinge pin radius: `0.009 m`;
- hinge pin length: `0.70 m`;
- source segments: `12`.

`tools/build_modular_case.py` builds every knuckle with the same closed solid-cylinder primitive used for the pin. Because the pin is coaxial and passes through all five knuckle spans, the current emitted proof geometry contains exact positive-volume pin/knuckle overlap.

That observation does **not** invalidate earlier structural, Rigging, Animation or Technical Art evidence: those lanes did not claim full collision, a physical bearing/bore, or production hinge engineering. It does identify the next Hard-Surface boundary required before treating the proof cylinders as physically passable manufactured solids.

## Bounded repair performed

PR #25 adds Object-local:

**`axm.object-hinge-pin-bore-clearance/v0.1`**

The host source stays byte-identical. The contract/verifier preserves the exact source hinge line, knuckle centers/lengths/owners, `0.021 m` outer radius, `0.009 m` pin radius, `0.70 m` pin length and 12-segment identity.

It adds only a **derived review candidate**, not a source adoption:

- coaxial bore radius: `0.010 m`;
- nominal radial pin-to-bore clearance: **`0.001 m`**;
- remaining knuckle wall: **`0.011 m`**;
- declared minimum review wall: `0.010 m`;
- host source geometry changed: **false**.

The verifier also retains a cross-section SVG so the radial distinction is inspectable directly without pretending the candidate is a manufacturing drawing.

## Exact structural result — PASS

Dedicated workflow:

**`35133545103 — Object hinge-pin bore-clearance evidence` — COMPLETED / SUCCESS**

Exact head:

`e790eac8d9f9e40d77d7ffe944fb036ccb6cf4e5`

Python 3.11 and Python 3.13 both passed compile plus the complete Object unittest suite. Python 3.11 additionally generated and retained the exact evidence package.

Scoped result:

**`PASS_HINGE_PIN_BORE_CLEARANCE_REVIEW_ENVELOPE`**

Exact retained observations:

- source pin radius: `0.009 m`;
- source knuckle outer radius: `0.021 m`;
- candidate bore radius: `0.010 m`;
- radial clearance: `0.0010000000000000009 m` (`0.001 m` nominal);
- remaining knuckle wall: `0.011000000000000001 m` (`0.011 m` nominal);
- five exact knuckle intervals preserved;
- current solid source-builder pin/knuckle overlap observation: **`0.0001272345024703866 m³`** across the five knuckle spans;
- candidate bore void volume: `0.00015707963267948968 m³`;
- candidate pin/shell overlap: **`0.0 m³`**;
- host source geometry changed: **false**.

## Fail-closed controls

The exact verifier rejects:

- zero radial clearance (`bore_radius == pin_radius`);
- a bore that consumes the declared minimum remaining knuckle wall;
- hinge-axis drift away from the exact source +X axis;
- host-source identity drift;
- source knuckle-count / segmentation drift through the normal validation path.

This keeps the review envelope attached to one exact source identity rather than becoming a loose numeric recommendation.

## Retained evidence

Artifact:

- ID: **`10462865602`**;
- name: `modular-equipment-case-001-hinge-pin-bore-clearance-evidence`;
- size: **`4,297 bytes`**;
- GitHub SHA-256: **`7d28479f14a5243f7020c95c4a04b7f879d53dd326513026b0caac462f001423`**;
- exact workflow head: `e790eac8d9f9e40d77d7ffe944fb036ccb6cf4e5`;
- contract SHA-256: `4dacff22053c39fcd037cdb568480dafdf78e52b18b9994965f1c396b344f4d7`.

The ZIP was downloaded after CI and independently rehashed to the exact GitHub digest above. It contains the exact host source, contract, exact-head receipt, structural receipt and cross-section SVG.

## Provenance / handoffs

PR #25 was updated with the exact SUCCESS result and retained artifact identity.

Hard-Surface PR #24 received comment `5702399910`: its axial-stop PASS remains truthful because this pass does not change the source or axial-stop overlay. If a bored-knuckle source successor is later adopted, the axial-stop evidence must explicitly rebind rather than inherit geometry compatibility by assumption.

Rigging PR #3 received comment `5702401364`: its exact articulation/shell-clearance evidence remains truthful for the unchanged source/hinge identity, but the new derived bore candidate must not be silently treated as full-component collision truth or a new rig geometry identity. A future bored-knuckle source adoption requires explicit consumer rebind/rerun where actual knuckle geometry matters.

No Animation, Materials, Technical Art, Runtime, Map or UC code was changed.

## Reusable learning / placement

Bounded Hard-Surface lesson:

> **An articulation proof can truthfully establish axis, ownership and shell motion while its visible primitive hinge remains only symbolic. Before promoting that proof toward manufactured solid geometry, explicitly test whether pin and knuckle volumes can physically coexist, and keep any bore/clearance candidate source-bound until adoption is intentional.**

This is useful beyond one case as a review question, but only one Object source currently carries retained evidence for it.

**No Universal Creation extraction.** UC already has generic geometry/transport machinery; it should not own Object hinge clearance semantics merely for convenience.

**No Profession Fabric promotion.** One manufactured hinge candidate is insufficient evidence for a profession-wide default bore/tolerance rule.

## Truth boundary / non-claims

This PASS establishes only that, for the exact unchanged Object source, one coaxial derived review bore of `0.010 m` radius gives the unchanged `0.009 m` pin the declared `0.001 m` radial clearance while retaining `0.011 m` of the exact `0.021 m` knuckle radius, and that this derived annular interpretation eliminates pin/shell radial overlap mathematically.

It does **not** establish:

- source adoption of bored knuckles;
- a production mesh with annular/bored knuckle topology;
- class of fit, manufacturing tolerance or tolerance stack;
- bearing behavior, friction, lubrication or damping;
- pin retention force, press/snap fit, strength, fatigue, wear, sealing or service procedure;
- boolean/CAD validity or machinability;
- full articulated collision freedom;
- Runtime physics, controller behavior or gameplay;
- final bevels, normals, UVs, materials or visual acceptance;
- a generic UC hinge/bearing schema;
- Profession Fabric promotion, CANON, merge authority, production readiness, game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** current solid-cylinder overlap is named explicitly without relabelling earlier non-collision claims as failures; exact source/head/workflow/artifact identities are retained.
- **Agency / non-domination:** host source remains unchanged; the bore is a review candidate only; downstream specialists decide whether and when to rebind if source adoption ever happens.
- **Continuity:** PR #25 stacks on PR #24 and preserves the exact existing hinge source/axis/axial-stop lineage rather than silently rewriting it.
- **Wisdom before speed:** one physically meaningful construction ambiguity was bounded and measured without forcing a production bore, broad UC abstraction or speculative new asset.

## Next Hard-Surface pass

Re-scan the full constellation first. Do not automatically source-adopt this bore or continue Object merely because the candidate is green. Prefer a different manufactured weakness in Weapon, Armor, Unit, Building, Object or Misc only when current evidence exposes a concrete source/consumer requirement. A bored-knuckle source successor should happen only if a downstream visual/target/collision need now justifies the geometry migration and its provenance fan-out.
