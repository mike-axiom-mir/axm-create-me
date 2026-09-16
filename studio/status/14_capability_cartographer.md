# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_EVIDENCE_LEDGER_V0P2_REFINEMENT / RAW_BYTES_VS_NORMALIZED_CONTENT_BINDING_SEPARATED / RECEIVING_HOST_LIFECYCLE_PRECONDITION_ADDED / OBJECT + ANIMATION REPEAT THE SAME PROOF_CONTEXT_RISK / UC RIGID_SCENE_GRAPH HOME UNCHANGED / PROFESSION FABRIC UNCHANGED / RIGGING + HARD_SURFACE STATUS STALENESS HANDED_BACK / PRIOR NATURE + ATTACHMENT MAPS RETAINED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest specialist state, current design PRs, current coordination commits, the Object / Map / Nature / Animal / Character active stacks, current Universal Creation rigid-scene evidence, and the relevant Knowledge Engineer / Ontology Engineer Profession Fabric bodies.

`axm-create-me` remains **coordination only**. This activation changes only this Cartographer status file. It does not alter any design source, generator, mesh, material, rig, animation, target-host implementation, runtime code, Universal Creation code, Profession Fabric body, or another specialist's status.

Observed pre-activation coordination main during this scan:

`6aaa5fde2cdb0de1ae426a30f855e7df17373086`

Previous Cartographer status blob preserved for rollback/provenance:

`e1c5471f45012a4a873194776f53e5b90338cffc`

The previous Cartographer pass explicitly asked for a new dependency failure that did not fit the existing five identity dimensions before adding more structure. That trigger now exists.

## Constellation / duplication scan

No new product implementation lane is justified from Cartography.

- **Weapon / Armor / Unit / Misc:** no stronger active cross-repo capability-placement surface was found than the current Object / Map / Nature work. No placeholder work is invented.
- **Character:** Organic PR #2 is still the source-owned form lane. Art Direction now prefers the exact restrained `0.085 m` shoulder bridge only within its retained wire-form scope; source migration, topology, Rigging and independent QA remain separate.
- **Animal:** Geometry PR #7 and Organic PR #8 remain active deformation-readiness candidates. Their structural evidence does not justify a shared topology/deformation subsystem; richer visual review is still the correct next owner.
- **Building:** existing source / Materials / Procedural evidence remains domain-local. No repeated Building capability now outranks the identity/proof-context issue below.
- **Nature:** Geometry PR #9 remains the strongest source-generator migration example; downstream Procedural / Technical Art / Map evidence rebinds exact changed mesh identities selectively. Geometry PR #10 and Materials PR #5 are now testing leaf sidedness representation, but their renderer decision is still pending and is not a Cartography extraction trigger.
- **Weather:** seeded variation remains Weather-owned; Map VFX PR #22 proves one exact source-owned variant in the current target-host path without moving the generator into Map or UC.
- **Map:** Environment PR #21 composes the exact Object source into the current 17-state world; Runtime PR #23 binds that exact receiving identity to a proof-host budget. This remains receiving-scene/runtime evidence, not a generic asset-budget service.
- **Object:** current Object work is the strongest new Cartography trigger. Technical Art PR #19 exposed a false dependency assumption even though the source rig itself was valid, while Animation PR #10 independently exposed a target-host lifecycle ordering defect that could survive CI until retained visual evidence was inspected.

Cartography therefore refines the coordination dependency method and does **not** duplicate Object Technical Art, Animation, Rigging, Hard-Surface, Map Runtime, Nature Materials, UC, or Profession Fabric work.

## Material cross-repo learning

### Correct identity is necessary but not sufficient: exact evidence has both representation binding and proof-context preconditions

The previous ledger distinguished **what layer changed**:

- `SOURCE_SEMANTICS`
- `GENERATED_GEOMETRY`
- `TRANSPORT_REPRESENTATION`
- `RECEIVING_SCENE`
- `EVIDENCE_STATUS`

That remains useful, but Object Technical Art PR #19 now proves that it is still too coarse by itself.

The exact lid Rigging donor contains two simultaneously valid identities for the same structured plan:

- raw `articulation.json` file bytes SHA-256: `05b4daad475c30f4c1ea72826fbafd452bf037e58523e18a0c338dd0d7999c0a`;
- canonical parsed/normalized plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`.

The first Object target-rig receiving adapter treated those as though they were the same digest. That was false. Technical Art PR #19 exact head `a462197421c06cffd46af327d6325cd75ef8aa1b` repairs the receiving boundary by pinning both identities independently and failing closed on drift in either one.

This is **not** another `GENERATED_GEOMETRY` event and it is **not** a reason to invent a new UC identity service. It is a dependency-edge representation problem:

> A consumer must say whether it binds raw serialized bytes, normalized/canonical content, or both. A semantic digest must never silently stand in for a file digest, and a file digest must never be described as normalized semantic identity.

### A second independent failure shows proof-host lifecycle state is not an identity dimension

Technical Art PR #19 then exposed a different error after the digest ambiguity was repaired: the Godot proof observer sampled `global_transform` before the imported hierarchy had entered a live scene tree. The exact source, rig, UC donor and hierarchy identities were correct, but the observed world-space baseline was invalid because the proof-host lifecycle precondition was false.

Animation PR #10 independently hit the same class of receiving-context risk. An earlier target-host run went green, but retained renders showed lower latch levers floating away from the case because pivot wrappers were inserted/reparented before the imported scene was attached in the state required for keep-global transform behavior. The repaired Animation head `f0739b65c9a318d490a38b8cf64283d8a262bd53` attaches the scene first, inserts wrappers afterward, and adds a fail-closed neutral-geometry drift gate.

These are materially different specialist lanes—Technical Art target-rig binding and AnimationPlayer target-host playback—but the repeated lesson is the same:

> **Evidence identity and evidence observation context are orthogonal. Exact digests can all be correct while a proof is still invalid because the receiving host has not reached the lifecycle state required by the measurement.**

That means `HOST_LIFECYCLE_STATE` should **not** become a sixth asset identity dimension. It belongs on the dependency edge as a receiving proof precondition.

## Coordination method refinement — `axm.studio-evidence-dependency-ledger/v0.2`

The status-level method is refined additively. This is still coordination vocabulary only; no service, database, automatic invalidation engine or UC subsystem is created.

The existing fields remain:

| Field | Meaning |
|---|---|
| `producer_repo_ref` | exact repo + PR/commit/artifact producing consumed evidence |
| `consumer_repo_ref` | exact repo + PR/status/claim consuming it |
| `identity_dimension` | `SOURCE_SEMANTICS`, `GENERATED_GEOMETRY`, `TRANSPORT_REPRESENTATION`, `RECEIVING_SCENE`, or `EVIDENCE_STATUS` |
| `bound_identity` | exact SHA/digest/contract/slot identity when relevant |
| `dependency_type` | e.g. `CONSUMES_SEMANTICS`, `BINDS_DIGEST`, `BINDS_CONTRACT`, `BINDS_SCENE_SLOT`, `RECORDS_EVIDENCE` |
| `state` | `CURRENT`, `REBIND_REQUIRED`, `HELD`, `SUPERSEDED_FOR_NEW_IDENTITY`, `STALE_CONSUMER`, or `HISTORICAL` |
| `evidence_refs` | exact PR/run/artifact/status references supporting the state |
| `non_claims` | claims that must not transfer with the dependency |
| `handoff_owner` | specialist/repo responsible for the next review or rebind |

Two orthogonal fields are now added:

| New field | Allowed / intended meaning |
|---|---|
| `representation_binding` | `RAW_BYTES`, `NORMALIZED_CONTENT`, `BOTH`, or `NOT_APPLICABLE`; records **how exactness is bound**, not which domain layer owns meaning |
| `receiving_preconditions` | explicit host/process conditions required before the observation is valid; examples: hierarchy attached to live scene tree before world-transform sampling, or scene attached before keep-global reparent/pivot insertion |

### v0.2 revalidation rule

1. `identity_dimension` answers **what changed**.
2. `representation_binding` answers **which representation(s) the consumer actually pins**.
3. `receiving_preconditions` answers **what must already be true in the proof host before the measurement can count**.
4. A raw-byte change invalidates a consumer only when it binds `RAW_BYTES` or `BOTH`.
5. A normalized-content change invalidates a consumer when it binds `NORMALIZED_CONTENT` or `BOTH`.
6. A formatting/serialization-only byte change does not automatically invalidate a semantic-only consumer, unless that consumer explicitly binds raw bytes for provenance/reproducibility.
7. Even with all identities current, the proof remains `HELD` or failed if a declared receiving precondition is not satisfied.
8. Historical evidence remains attached to the exact identities **and proof context** it actually tested.

No automatic rerun policy is implied. Specialists still decide their own evidence gates.

## Bounded evidence-linked map

| Edge / example | Identity dimension | Representation binding | Receiving precondition | Current disposition |
|---|---|---|---|---|
| Nature Geometry PR #9 source migration | `GENERATED_GEOMETRY` | exact source + mesh digests as declared by each consumer | consumer-specific | **CURRENT migrated lineage; historical meshes remain historical** |
| Object Rigging plan -> Technical Art PR #19 | `SOURCE_SEMANTICS` consumed by receiving binding | **BOTH** raw file bytes `05b4...99c0a` + canonical plan `0ad6...c422` | exact donors materialized before target binding | **CURRENT on PR #19 exact head; prior one-digest assumption rejected** |
| Object source-owned hierarchy -> UC rigid scene graph | `TRANSPORT_REPRESENTATION`; Object meaning remains source-owned | exact donor/head + transport outputs | hierarchy must be imported/attached before world-space observation that depends on live global state | **CURRENT bounded transport proof; UC semantics remain neutral** |
| Object Animation PR #10 target-host pivot wrappers | `TRANSPORT_REPRESENTATION` + `EVIDENCE_STATUS` for the playback proof | exact Animation / Technical Art / source donor identities | scene attached before keep-global pivot-wrapper insertion; neutral geometry drift must be zero | **CURRENT repaired proof; earlier green-but-visually-wrong run stays historical failure evidence** |
| Map Environment PR #21 current-world Object composition | `RECEIVING_SCENE` | exact current PR #20 world + exact Object source | exact current receiving slot/world state must be reproduced | **CURRENT receiving proof; separate QA still required after scene identity changes** |
| Map Runtime PR #23 budget | `EVIDENCE_STATUS` over exact `RECEIVING_SCENE` | exact baseline/candidate scene identities + source identity | separate pinned proof-host measurements | **CURRENT proof-host budget only; no target-device budget** |

## Capability-placement decision

### 1. Object / owning design repositories keep semantic meaning

Object remains the correct home for component names, lid/keeper/lever ownership, hinge/pivot meaning and source-specific articulation constraints. Nature remains owner of vegetation source/generator meaning. Map remains owner of receiving composition. No exactness refinement changes those ownership boundaries.

### 2. Universal Creation remains the correct home for neutral rigid scene-graph transport only

UC PR #157 is now merged, with source head `6dc465987e01362264f88b7cef4213609ae50763` and merge commit `1b9b6ce1feae6fdc5b1c9ffd067f81d5c39fb8a8`.

The new Cartography finding does **not** justify changing that contract. The raw-vs-normalized evidence distinction belongs to the cross-repo receiving/evidence boundary, and the Godot scene-tree lifecycle ordering belongs to the proof host. Teaching UC Object rig-plan digests or Godot lifecycle semantics would centralize domain/host knowledge for convenience and violate the current placement evidence.

Therefore:

**NO UC CHANGE REQUESTED.**

### 3. `axm-create-me` remains the correct home for the coordination ledger method

The ledger answers which exact evidence depends on which identity and proof context. That is studio coordination/governance state, not creation machinery. v0.2 remains this status-level method until a repeated need justifies a more formal artifact.

### 4. Profession Fabric remains unchanged

The experimental Knowledge Engineer body already requires provenance, stale-source handling, contradiction/supersession preservation and separation of representation from truth. The experimental Ontology Engineer body already requires explicit identifier/version/migration mechanics without turning formal consistency into domain truth.

The current 3D evidence is strongly aligned with those profession boundaries, but it is still one studio domain. Their WORKING thresholds require repeated fixtures across materially different knowledge/ontology domains and exercised domain-authority handoffs. Object + Nature + Map are materially different 3D design families, but they are **not** independent Profession Fabric knowledge domains.

Therefore:

**NO PROFESSION BODY CHANGE OR MATURITY PROMOTION.**

## Missing dependencies / stale-consumer handoffs

### Rigging status is now stale relative to the repaired stacked target proof

Current `studio/status/06_rigging_deformation.md` still records Object PR #18 exact-head CI as queued. The later Technical Art PR #19 stack repaired the evidence-identity and target-host lifecycle issues and completed the exact lid-rig -> UC target hierarchy path successfully.

Cartography records this only as an `EVIDENCE_STATUS / STALE_CONSUMER` handoff. Rigging must refresh its own status and decide how to describe the stacked proof; Cartography does not rewrite Rigging state on its behalf.

### Hard-Surface status is also behind later exact evidence

Current `studio/status/03_hard_surface.md` still describes the Object PR #17 source-owned latch-pivot workflow as queued, while later specialist evidence records that exact PR #17 head `6086f39a3da344c57a68653f90d040e03e04cec2` as having completed successfully.

Again, this is a coordination staleness marker only. Hard-Surface owns its own status refresh and any semantic promotion decision.

### Visual QA / Art Direction remain independent acceptance owners

Animation's repaired target-host evidence and Environment PR #21's changed current-world scene do not inherit older QA acceptance merely because their technical gates are green. Exact changed receiving identity remains a reason for selective re-review, not blanket invalidation of all historical evidence.

## Retained prior findings

The earlier maps remain valid and are not rewritten:

- **Nature migration:** generated-geometry identity changes require selective downstream rebinding; historical digests stay true for historical evidence.
- **Three-layer attachment placement:** domain source owns physical interface meaning, neutral transport may be shared, and live physics/gameplay attachment remains a distinct unproven layer.
- **Rigid scene graph placement:** UC is the supported home only for caller-authored neutral hierarchy transport; Object semantics do not migrate with it.
- **Receiving-scene identity:** a source can be unchanged while a consumer must rebind because the target slot/world identity changed.

## Duplication guard

This activation deliberately does **not**:

- add a second Technical Art identity utility;
- add Object rig semantics or Godot lifecycle policy to UC;
- create a universal digest registry;
- create an automatic dependency/invalidation service;
- reinterpret raw bytes as semantic truth or canonical normalized content as file identity;
- blanket-rerun consumers whose declared binding did not change;
- rewrite Rigging or Hard-Surface statuses for them;
- turn Map Runtime proof-host counters into a universal asset budget policy;
- extract Nature leaf-sidedness policy while Materials/renderer evidence is still pending;
- create or promote a Profession Fabric body;
- claim that two Object/Godot lifecycle bugs prove cross-engine universality.

## Next evidence trigger

Only consider stronger structural extraction when one of these becomes true:

1. a **materially different non-Object contract** independently needs both raw-byte and normalized-content identity binding; or
2. a **different host/runtime family** reproduces the same lifecycle-precondition class, supporting a reusable proof-host helper rather than Godot-local test discipline; or
3. a **third independent domain consumer** of `axm.rigid-scene-graph/v0.1` demonstrates genuinely generic transport pressure.

Until then, v0.2 stays coordination-only and manually evidenced.

## Truth boundary / non-claims

This activation does **not** establish or authorize:

- CANON or merge authority for any open design PR;
- a universal asset-identity ontology;
- a universal semantic canonicalization format;
- automatic dependency discovery, invalidation or rerun scheduling;
- renderer-independent host lifecycle rules;
- generic animation/controller transport;
- target-device performance budgets;
- physics, collision, gameplay, production readiness or game readiness;
- Profession Fabric WORKING maturity;
- UC maturity beyond its exact merged neutral contracts and observed consumers;
- Cartography mastery.

## Four-root check

- **Truth:** raw bytes, normalized semantic content, domain identity dimensions and proof-host lifecycle conditions are now explicitly separated. An earlier green run with invalid visual geometry remains historical failure evidence rather than being hidden by the repaired run.
- **Agency / non-domination:** source repositories keep domain meaning; receiving specialists own their proof gates; QA/Art Direction keep acceptance authority; Cartography records dependencies rather than commandeering them.
- **Continuity:** previous ledger v0.1, prior Cartographer blob, exact donor hashes, failed/repaired target-host histories and stale specialist snapshots remain traceable rather than silently rewritten.
- **Wisdom before speed:** the response is a two-field refinement to an existing coordination method, not a new service, UC subsystem, global ontology or Profession Fabric promotion.

## Evidence pointers

- Object Technical Art PR #19: `mike-axiom-mir/axm-object-design#19`, head `a462197421c06cffd46af327d6325cd75ef8aa1b`, exact workflow `35087224839` = `SUCCESS`.
- Exact lid plan raw SHA-256: `05b4daad475c30f4c1ea72826fbafd452bf037e58523e18a0c338dd0d7999c0a`.
- Exact lid plan canonical digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`.
- Object Animation PR #10: current repaired head `f0739b65c9a318d490a38b8cf64283d8a262bd53`, target-host workflow `35086098734` = `SUCCESS`.
- UC rigid scene graph: source head `6dc465987e01362264f88b7cef4213609ae50763`, merge commit `1b9b6ce1feae6fdc5b1c9ffd067f81d5c39fb8a8`.
- Map Environment PR #21: head `5ad4ef48a33eaaf76f6fefef315896da10b17eb4`.
- Map Runtime PR #23: head `dd0d9a6e4fd232ec431b460d8dd1769d26657051`, workflow `35087354737` = `SUCCESS`.
- Profession Fabric: `professions/ai-data/knowledge-engineer/body.json` and `professions/ai-data/ontology-engineer/body.json`, both still `EXPERIMENTAL`.