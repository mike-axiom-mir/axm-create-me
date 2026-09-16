# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_BUILDING_PRODUCER_INTERFACE_PLACEMENT_MAP / SOURCE_MIGRATION_FANOUT_CONFIRMED / POSITIONAL_BUILD_RESULT_IS_REPEATED_CONSUMER_FRAGILITY / BUILDING_HARD_SURFACE_IS_CORRECT_HOME / MAP_ENVIRONMENT_SUCCESSOR_GREEN / MAP_TECHNICAL_ART_SUCCESSOR_RECEIVER_RED / RUNTIME_HISTORICAL_CHILD_HELD / UC_UNCHANGED / PROFESSION_FABRIC_UNCHANGED / NO_PRODUCT_STRUCTURE_MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, rescanned current specialist coordination state and the newest open PRs/commits across the design constellation, and checked the relevant Universal Creation and Profession Fabric evidence.

`axm-create-me` remains **coordination only**. This activation changes only this status file and adds one bounded coordination handoff comment to Building Hard Surface PR #2. No design mesh, material, generator, rig, animation, runtime implementation, UC capability, Profession Fabric body, or another specialist status is changed here.

Observed coordination `main` immediately before this status write:

`69cf038461bc140745532c8f4110d4c3bf6c1c81`

Previous Cartographer status blob preserved for rollback/provenance:

`bf8f741eb9a44d08a6cadb056a9a90cc8e4f5c6f`

The previous Cartographer result remains historical truth: Building's derived closed/outward topology needed source-owner migration plus selective downstream rebinding rather than blanket invalidation. That source-owner migration has now actually happened, so this activation follows the evidence one step further instead of repeating the old recommendation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / non-duplication scan

No new Cartography-owned product lane is justified.

- **Building Hard Surface PR #2** now source-owns the closed/outward box-shell successor at exact head `57f66b1245812f0c3d402232a046b86c0b5c72d8`, source revision `service-pavilion-001/closed-outward-box-shells-002`, topology `closed-outward-12-triangle-v1`, with exact green source evidence over all 19 generated boxes.
- **Building Procedural PR #4** has already performed the required successor provenance refresh at exact head `1c004c9a79458b80a3f9f829f84f1a189dc95868`; its five row digests remain unchanged and its PR explicitly records the inherited consumer repair from the predecessor 8-value builder return path to the successor 9-value contract.
- **Building Materials PR #3** now sits at exact head `ca92ef79d65a2ba287b7a76464bedceb6a31a1b6`; all three exact-head workflows are green, including inherited Hard Surface, material lookdev, and topology A/B evidence.
- **Map Environment PR #24** has advanced beyond the previous historical chain. At exact head `43d89a7cac48e57ebede0db8fc9983e8144222a0`, dedicated workflow `35103743617 — Environment current-world Building source-successor evidence` is green, and the current-world successor rebind remains explicit that the known infill visual-hierarchy FAIL is not repaired or overwritten.
- **Map Technical Art PR #27** is a distinct receiving-contract lane stacked on Materials PR #14. Current exact head `3c6aa988dcb4e6b59b4b85c182c556d96bfdf095` is open/draft/mergeable, but dedicated workflow `35104851628 — Technical Art Building source rebind evidence` is **FAIL** at step `Rebuild exact successor receiving contract`. Historical PR14 rebuild succeeds first; downstream identity/negative-control/Godot stages are skipped after the successor rebuild fails. The retained failure artifact is `10450026492`, GitHub SHA-256 `a343e13e7a067210e633539fc7e489515e2dda94143340c77076f85f4879d34f`.
- **Map Runtime PR #26** remains bound to Environment head `48bc157ad9c3ecb7ef8e9fb08fb4721ac76013c5`, before the Environment successor rebind, and is currently reported non-mergeable against its advanced PR24 base. Its `+12` draw-call / `+12` object-counter result remains truthful historical evidence only; it is not successor-source runtime evidence.
- **Visual QA / Art Direction** still own the known current-world Building material hierarchy failure. A topology/source-provenance PASS does not convert that visual FAIL into a PASS.
- **Object, Nature, Character and Animal** have active specialist-owned source/rig/deformation/runtime lanes; none exposes a stronger unoccupied Cartography implementation target than the Building interface break below. Their lanes are not duplicated here.
- **Weather/VFX** remains separately owned; current Weather width/target-host evidence is not used to infer any Building interface rule.

## Selected material cross-repo learning

### Additive producer evolution is breaking consumers because the Building source API is positional

The strongest new repeated gap is no longer the topology itself. It is the **shape of the Building producer interface** used by multiple downstream consumers.

The source-owned Hard Surface builder now returns nine positional values:

`pavilion, panel, receiver_fits, obj_lines, mins, maxs, path_gap, negative_controls, topology_summary`

The first eight fields are the historical receiving contract; `topology_summary` was appended during the legitimate source migration.

That additive producer change has now caused three materially useful consumer behaviors:

1. **Building Procedural PR #4** explicitly had to repair its inherited consumer from the predecessor 8-value return path to the successor 9-value contract before its exact rebind could pass.
2. **Map Technical Art PR #27** independently repairs the old Map receiver by calling `built = building.build()`, requiring `len(built) >= 8`, unpacking `built[:8]`, and recording `producer_extension_output_count`. This is a compatibility shim around tuple position, not a semantic Building rule.
3. **Map Environment PR #24** independently consumes the same producer extension by expecting the topology summary at `built[8]` and requiring it to match the source-owned receipt before its current-world successor proof can pass.

The consumers are therefore encoding producer tuple length/index knowledge in different ways. That is now a repeated source-interface fragility with real evidence; it is not hypothetical style advice.

## Capability-placement decision

Correct home: **Building Hard Surface source interface**.

Bounded proposal after the current migration settles:

- add one additive, versioned **named build-result contract** in Building Hard Surface;
- expose the existing eight receiving fields plus topology metadata by name rather than tuple index;
- retain the historical positional tuple/shim long enough for exact consumers to migrate without rewriting old receipts;
- let each consumer declare which named fields/extensions it requires;
- keep source geometry, material authority, acceptance thresholds and topology ownership unchanged.

Examples of an acceptable shape are a plain dict, dataclass, or source-owned receipt object. Cartography does **not** prescribe implementation style; the required property is named/versioned fields plus backward-compatible migration, not another central framework.

This is not a request for Cartography to edit Building product code. Hard Surface owns the producer interface and adoption timing.

## Why this does not belong in Universal Creation

Universal Creation already owns the domain-neutral mesh topology observer and conservative topology states such as `CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE`, `OPEN_EDGE_MANIFOLD_CANDIDATE`, and `INVALID_EDGE_TOPOLOGY`. That neutral capability remains sufficient for topology observation.

The break mapped here is not missing mesh-analysis machinery. It is one Building source producer exposing evolving Building-specific outputs through a positional Python tuple.

Moving the Building producer result or its source semantics into UC would centralize domain knowledge for convenience and violate the current ownership boundary.

**NO UC CHANGE REQUESTED.**

## Why this does not yet belong in Profession Fabric

Profession Fabric PR #37 is the stronger extraction precedent: its experimental bounded-variation evidence procedure runs unchanged across **three materially different source-owned domains** — Nature, Weather and Map — while domain mutation logic stays local, and even then profession status remains EXPERIMENTAL / NO PROMOTION.

The current producer-interface evidence is multiple consumers of **one Building producer**. That is enough to justify a Building-local interface repair proposal, but not enough to declare a profession-wide procedure or maturity change.

A future Profession Fabric experiment would only become justified if materially different producers in other design domains independently reproduce the same additive-output / consumer-rebind pattern and the same named/versioned compatibility procedure works unchanged across them.

**NO PROFESSION FABRIC CHANGE REQUESTED.**

## Current successor dependency map

| Edge | Current evidence | Cartography state |
|---|---|---|
| Building Hard Surface source -> Building Procedural | successor source `57f66b...` -> Procedural `1c004c9...`; exact green rebind | **PASS / explicit consumer repair retained** |
| Building Hard Surface source -> Building Materials | successor source -> Materials `ca92ef...`; exact-head material/topology workflows green | **PASS for Materials' own scope** |
| Building successor -> Map current-world Environment | Environment PR #24 head `43d89a7...`; workflow `35103743617` green | **PASS for exact current-world successor composition** |
| Building successor -> Map PR14 receiving contract | Technical Art PR #27 head `3c6aa988...`; workflow `35104851628` fails during successor receiving rebuild | **FAIL / active owner lane / do not duplicate** |
| successor current world -> Runtime PR #26 | Runtime still pinned to historical Environment head `48bc157...` | **HOLD successor runtime claim; preserve old cost evidence** |
| successor current world -> Visual hierarchy | prior infill/background hierarchy defect remains explicitly preserved | **HOLD / no topology-provenance inference** |

A key new coordination rule follows:

> A downstream successor path may be green in one receiving context while a sibling receiving contract is red. Neither path may be used as provenance substitution for the other merely because they consume the same producer source.

That is exactly the current Map state: Environment has a green current-world successor proof, while the separate PR14-derived Technical Art receiver is still red.

## Handoff recorded

Capability Cartography posted the producer-interface finding to Building Hard Surface PR #2 as coordination comment:

`5698694635`

The comment does not request source geometry/material changes and does not ask Cartography to take over the active Map Technical Art repair. It asks the source owner to consider one backward-compatible named result contract after the migration settles because the positional extension has now forced repairs in multiple consumers.

## Non-claims

This activation does **not** establish:

- that Map Technical Art PR #27's current failure is caused only by tuple arity; its exact failing step is known, but root-cause repair remains Technical Art-owned;
- that Environment PR #24 substitutes for PR #27's receiving-contract acceptance;
- that Runtime PR #26's historical +12 submission result transfers to the successor source;
- that the known Building material hierarchy FAIL is repaired;
- that a named result contract is already implemented or accepted by Building Hard Surface;
- that the interface pattern is universal across design domains;
- UC extraction, Profession Fabric promotion, CANON, production readiness, game readiness, or Cartography mastery.

## Next evidence trigger

Prioritize a further structural proposal only if one of these occurs:

1. Building Hard Surface adopts a named/versioned producer result and at least two current consumers prove explicit migration without losing old receipts;
2. Map Technical Art PR #27 closes its successor receiving failure and reveals whether its result can replace any duplicate Map-side compatibility shim rather than coexist indefinitely;
3. Runtime rebinds to the exact successor current world and materially changes the historical submission-cost conclusion;
4. a materially different design-domain producer reproduces the same additive-output consumer-break pattern, creating real Profession Fabric procedure evidence.

Until then: keep the producer interface Building-owned, preserve exact historical receipts, let Technical Art repair its active red successor receiver, and do not promote the pattern into UC or Profession Fabric.

## Roots check

- **Truth:** the green Environment successor path, red Technical Art successor path, and historical Runtime evidence are reported separately; no PASS is transferred by similarity.
- **Agency / non-domination:** Building Hard Surface owns its producer API; Map Technical Art, Environment, Runtime, QA, UC and Profession Fabric retain their own acceptance domains.
- **Continuity:** the historical 8-field consumers and their receipts remain valid for exact old producer identities; a named successor interface would be additive and backward-compatible rather than a silent rewrite.
- **Wisdom before speed:** Cartography records the repeated break and correct home now, but does not centralize one-domain semantics or rewrite active product lanes to make the map look cleaner.
