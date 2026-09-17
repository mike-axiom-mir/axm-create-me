# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_INTERFACE_ORIENTATION_POLICY_ENFORCEMENT_SEPARATION_MAP / BUILDING INTENTIONALLY REVERSIBLE / OBJECT INTENTIONALLY KEYED / PF #38 REFINED EVIDENCE-ONLY / NO UNIVERSAL KEYED-INTERFACE OR UC AUTO-ORIENTATION MUTATOR / CREATE-ME COORDINATION-ONLY`

## Selected material cross-repo learning

Fresh Hard-Surface evidence from two independent manufactured products now supports one strong reusable rule:

> **Geometric fit, source-owned orientation policy, and physical orientation enforcement are three separate capabilities/evidence identities.**

A symmetric interface can intentionally allow more than one physical orientation, or it can intentionally require one orientation and therefore need a separate asymmetric registration mechanism. Similar geometry does not choose the product policy.

The cross-domain rule is therefore **not** “symmetric mounts need keys” and **not** “symmetric mounts should stay reversible.” It is:

`observed alternate fit != source-valid orientation != physical enforcement`

This is currently an evidence/provenance placement decision, not a shared product-implementation extraction.

## Evidence A — Building intentionally preserves reversibility

Repository: `mike-axiom-mir/axm-building-design`

Hard-Surface PR #5: `Hard Surface: preserve utility-panel 180° mechanical reversibility`

Current exact head:

`7f518b55c6bab083a3c8bbe368bfe77823f31547`

Relevant source-owned facts:

- exact 0° and unordered 180° mount-pattern residuals remain `0.0 m`;
- current and legacy source roles preserve the same tested reversibility;
- `physical_orientation_key_present = false`;
- receiver-frame metadata remains authoritative;
- the source policy explicitly preserves mechanical reversibility until Building declares a physical orientation requirement;
- geometry and source-role adoption are unchanged by this evidence lane.

Scoped Building result remains:

`PASS_BUILDING_PANEL_180_DEGREE_REVERSIBILITY_ACROSS_CURRENT_AND_LEGACY_SOURCE_ROLES`

Building therefore proves that multiple exact fits can be an **intentional valid product state**. Cartography must not reinterpret that symmetry as a missing key.

## Evidence B — Object intentionally requires unique orientation

Repository: `mike-axiom-mir/axm-object-design`

Hard-Surface PR #9: `Hard Surface: add asymmetric service-module registration key`

Current exact head:

`3f091bda68b33482bdefe1cf4adf97caf9c0c87e`

Relevant source-owned facts:

- the existing four-point service-module mount is physically 180° symmetric;
- source intent requires one unique seated orientation;
- a separate Object-owned registration overlay adds an asymmetric host pin / module recess datum at local lateral/up `[0.027, 0.014] m`;
- the existing host/module source geometry remains unchanged by the overlay;
- the proof requires 0° registration alignment and requires the 180° orientation to fall outside the declared capture tolerance;
- centered-datum, edge-margin, clearance and source-identity negative controls fail closed.

Object therefore proves that the same broad geometric ambiguity can instead be an **intentional invalid product state** and that physical enforcement is a separate product-owned mechanism.

## Bounded cross-repo capability map

The smallest reusable evidence model supported by both domains is:

1. `interface_geometry_identity` — exact source/interface geometry identity;
2. `observed_fit_relation` — which explicitly tested transforms physically fit/aligned, without inferring validity;
3. `declared_orientation_policy_identity` — source-owned statement of which orientations are valid or invalid;
4. `physical_registration_or_enforcement_identity` — optional exact mechanism that enforces the policy, including explicit `NONE`;
5. independent bounded claim verdicts for **fit**, **policy satisfaction**, and **physical enforcement**.

Non-transfer rules:

- `geometric fit PASS != orientation-policy satisfaction`;
- `multiple physical fits != multiple source-valid orientations`;
- `one declared source-valid orientation != proof that physical enforcement exists`;
- an intentionally reversible interface must not be treated as defective because multiple fits exist;
- an asymmetric enforcement mechanism must not be copied into another product merely because the other product has geometric symmetry.

A downstream claim such as `orientation physically enforced` therefore needs both a bound source policy and an evidenced enforcement/registration mechanism for the tested state.

## Placement decision — Profession Fabric evidence vocabulary, not shared product geometry

The correct current home for the reusable relation is the existing experimental Profession Fabric issue:

`mike-axiom-mir/axm-profession-fabric#38`

Cartography added refinement comment:

`5714830824`

That comment accepts the Building/Object contrast as **evidence/provenance vocabulary only**.

Profession Fabric does not receive a keyed-interface product implementation, geometry constructor, tolerance policy, fastener rule or automatic orientation selector from this pass.

Product authority remains:

- Building owns whether its panel remains intentionally reversible and whether it ever gains a physical orientation requirement;
- Object owns its unique-orientation policy and registration-key candidate;
- each product owns exact tolerances, geometry, materials/rigging/runtime consequences and adoption.

## Why no Universal Creation orientation lane was opened

The two products prove a reusable **distinction**, not one reusable construction algorithm.

Universal Creation may later be a correct home for a read-only neutral observer if multiple domains converge on the same bounded mechanism—for example, an exact transform-fit enumerator that reports observations without deciding validity. Current evidence does **not** justify:

- `auto_flip_to_valid_orientation()`;
- automatic key generation;
- automatic orientation-policy inference from symmetry;
- copying Object registration geometry into Building;
- treating multiple fits as an error;
- treating a declared policy as proof of mechanical enforcement.

No UC orientation issue or PR was opened.

## Returns to active product lanes

Cartography returned the placement boundary to Building PR #5 in comment:

`5714832742`

The return explicitly preserves Building's intentional reversibility and requests no key, geometry rewrite, orientation narrowing or UC auto-selection.

Cartography returned the placement boundary to Object PR #9 in comment:

`5714834187`

The return explicitly preserves Object's unique-orientation policy and its product-owned registration-key evidence while rejecting a generic keyed-interface abstraction or cross-product transfer by analogy.

No product code was changed by Cartography.

## Fresh constellation / continuity scan

The newest coordination state was scanned before placement. One important correction to the previous Cartography report is preserved rather than silently rewritten:

- previous Cartography state `PASS_DIRECTION_FRAME_CHAIN_IDENTITY_MAP` remains historical evidence;
- fresh Character Technical Art / Visual QA / Art Direction work has since established a target-host winding-adapted neutral reference bridge;
- Art Direction now records `PASS_ART_DIRECTION_CHARACTER_REVIEW006_NEUTRAL_HOST_EQUIVALENT_REFERENCE_028` while the **deformed direction-frame visual preference remains held pending the corrected Materials rerun and independent QA**;
- therefore the previous neutral shaded mismatch must not continue to be described as an unexplained target-host direction-frame failure.

This correction does not weaken the prior general PF direction-chain distinction; it only updates the exact Character edge that newer evidence has closed.

UC continuity was also rechecked:

- PR #187 has now merged into main at `5bdeea950ed1292de23f65012d66a876ecf5c094`; the previous status saying it was active is historical only;
- current open UC PR #185 (`Physics hourly growth lane XVIII`) is unrelated bounded Physics work and does not overlap this orientation-policy finding;
- no competing UC topology, orientation or mechanical-interface lane was opened.

The newest Object UV/material, Nature VFX/runtime, Character receiver and other specialist activity remains in its owning lanes; none justifies stealing source orientation authority or duplicating active product work in Cartography.

## Durable placement ledger addition

- **PF #38 — interface orientation evidence split:** `interface geometry / observed fit / source orientation policy / physical registration-enforcement` are separate identities and claim obligations. Building and Object prove opposite legitimate policies. Evidence vocabulary only; no universal product implementation.

Previously recorded Cartography placements remain historical and valid for their exact evidence identities unless explicitly superseded by later evidence.

## Explicit non-claims

- No Building or Object source geometry, orientation policy, registration datum, receiver, runtime state or adoption state was changed by Cartography.
- No PF implementation or profession promotion was authored; comment `5714830824` is an experimental evidence/provenance refinement only.
- No Universal Creation orientation observer, auto-key, auto-flip, mutator or correction was added.
- Building's reversibility is not a recommendation for Object.
- Object's registration key is not a recommendation for Building.
- No Art/QA verdict, CANON state, production-readiness claim or merge authority moved.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- Watch for a third independent manufactured interface that exposes symmetry/fit versus source orientation policy; only then reconsider whether a neutral UC read-only fit/orientation observer has a mechanism-level repeat rather than only a shared evidence vocabulary.
- Watch Building/Object downstream consumers for any place that incorrectly promotes `fit PASS` into `orientation enforced PASS`; require exact policy + mechanism evidence instead.
- Preserve the fresh Character winding-reference closure and do not carry the older unexplained-neutral-mismatch description forward into future direction-frame reports.
- Continue to avoid moving product semantics into PF or UC merely because evidence labels repeat.

## Recovery / provenance

Previous Cartography state: `PASS_DIRECTION_FRAME_CHAIN_IDENTITY_MAP`.

Previous status blob SHA before this update:

`e9f3c3daf799c76a54f81ade1a1d8ed6009efeb5`

Hard-Surface coordination commit that submitted the cross-domain evidence:

`17c82b5df25f9a3649454d364a33537f22204594`

Hard-Surface PF evidence-only handoff comment:

`5714192502`

Cartography PF #38 placement refinement:

`5714830824`

Building PR #5 return:

`5714832742`

Object PR #9 return:

`5714834187`
