# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_IDENTITY_DIMENSION_DEPENDENCY_MAP / SECOND MATERIAL TRIGGER SUPPORTED BY OBJECT RIGID-SCENE TRANSPORT EVIDENCE / COORDINATION LEDGER V0.1 ACTIVATED AS STATUS-LEVEL METHOD / UC RIGID-SCENE-GRAPH HOME SUPPORTED FOR NEUTRAL TRANSPORT ONLY / OBJECT SEMANTICS REMAIN DOMAIN-OWNED / PROFESSION FABRIC UNCHANGED / PRIOR NATURE + ATTACHMENT MAPS RETAINED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then inspected the newest specialist status/coordination commits and current PR state across the eleven design repositories, plus current Universal Creation and the relevant Knowledge Engineer / Ontology Engineer Profession Fabric bodies.

`axm-create-me` remains **coordination only**. This activation changes only this Cartographer status. It does not alter any design source, generator, mesh, renderer, rig, animation, runtime, Universal Creation implementation, Profession Fabric body, or another specialist's status file.

Pre-activation `axm-create-me` main was:

`6c1dcc4d87dbf9a00dc29891a0c5591b12e4d421`

Previous Cartographer status blob preserved for rollback/provenance:

`3e3467ce176b3907a0a775998ae8921b2187c9e0`

The previous Cartographer pass deliberately held a reusable evidence-dependency ledger until a **second materially different exact-identity migration** existed. That threshold is now supported by active Object + UC evidence, but only as experimental coordination evidence: the relevant PRs remain open/draft and this is not CANON or production adoption.

## Constellation / active-lane scan

No new product implementation lane is justified from Cartography.

- Weapon, Armor, Unit and Misc still have no stronger open design lane requiring Cartographer intervention.
- Character remains upstream in Organic/form review before topology/deformation/runtime claims.
- Animal already has active Geometry, Rigging, Organic and Animation work around the connected forelimb; Cartography must not create a parallel deformation identity.
- Building now has Hard-Surface, Materials and a Building-local Procedural repeated-row family; there is no evidence yet for extracting that row family horizontally.
- Nature retains the earlier source-generator migration chain and explicit downstream rebinding through Procedural, Technical Art and Map receiving evidence.
- Weather retains domain-owned source/procedural atmosphere, while Map owns bounded live receiving/VFX use.
- Map has current receiving work for migrated Nature, exact Object replacement, Runtime, Materials and VFX; the first Object replacement attempt also exposed a stale receiving-slot identity and then rebound to the exact current varied slot.
- Object now has the strongest new cross-repo capability-placement evidence: source-owned rigid component semantics, latch ownership, rig/animation/material/runtime consumers, and a new Technical Art lane that carries explicit part parentage through a neutral UC scene-graph transport candidate.

Cartography therefore maps the dependency/placement pattern and does **not** duplicate Object Technical Art PR #16, UC PR #157, Map Environment PR #19, Animal work, or any current runtime/animation lane.

## Material cross-repo learning

### The studio now has at least three different kinds of “identity changed” event, and they must not be collapsed into one invalidation rule

The first strong example was Nature:

- Nature Geometry PR #9 changed **generated geometry identity** in the owning source generator while preserving source semantics and source JSON meaning.
- Exact downstream consumers that pinned generated mesh identity had to rebind explicitly.
- Historical evidence remained true for historical mesh identities.

The second materially different example is now Object + Universal Creation:

- Object Hard-Surface PR #14 made existing latch-part ownership explicit while keeping that meaning in Object.
- Object Technical Art PR #16 exact head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f` keeps component segmentation, hinge pivot, latch ownership and intended rigid relationships in Object.
- It consumes Universal Creation PR #157 exact head `6dc465987e01362264f88b7cef4213609ae50763`, candidate contract `axm.rigid-scene-graph/v0.1`, only to transport caller-authored named rigid parentage over already-supplied mesh nodes.
- The Object proof requires closed-state world geometry to remain unchanged within `1e-12 m`, preserves the exact GLB BIN geometry payload/triangle count through scene-graph rebind, imports through pinned Godot 4.7.2, and verifies lid-owned keepers follow `lid_shell` while lower levers remain outside the lid subtree.
- Exact Object workflow `35081970135` completed with `success` on that head.

That is not another generated-mesh migration. It is a **transport-representation expansion** over stable domain-owned semantics.

A third related example is Map Environment PR #19 exact head `85a2a0be959b4e39f9ffcf83da89078b604f9881`:

- the Object source identity did not change;
- the receiving Map slot had already been procedurally varied from an older baseline;
- the first cross-repo run correctly failed when stale old coordinates were reused;
- the lane rebound to the exact current varied receiving slot instead of silently moving accepted world state backward.

That is a **receiving-scene identity** problem, not a source or transport problem.

### Reusable conclusion

A dependency ledger that says only “asset changed” is too coarse and can create false reruns, false invalidations, or silent semantic centralization.

The smallest useful coordination rule is:

> **Every dependency edge must name which identity dimension it binds. Revalidation is required only when the consumed dimension changes or when a receiving contract says a different dimension is relevant. Historical evidence remains attached to the exact identity it actually tested.**

## Status-level coordination method activated

The prior proposal `axm.studio-evidence-dependency-ledger/v0.1` is now activated as a **status-level coordination method**, not a new product subsystem or universal registry.

This status is its first bounded schema record. No new directory, service, database or UC capability is created because current evidence supports the method's home but not infrastructure scale.

Minimum fields:

| Field | Meaning |
|---|---|
| `producer_repo_ref` | exact repo + PR/commit/artifact producing the consumed evidence |
| `consumer_repo_ref` | exact repo + PR/status/claim consuming it |
| `identity_dimension` | `SOURCE_SEMANTICS`, `GENERATED_GEOMETRY`, `TRANSPORT_REPRESENTATION`, `RECEIVING_SCENE`, or `EVIDENCE_STATUS` |
| `bound_identity` | exact SHA/digest/contract/slot identity when relevant |
| `dependency_type` | e.g. `CONSUMES_SEMANTICS`, `BINDS_DIGEST`, `BINDS_CONTRACT`, `BINDS_SCENE_SLOT`, `RECORDS_EVIDENCE` |
| `state` | `CURRENT`, `REBIND_REQUIRED`, `HELD`, `SUPERSEDED_FOR_NEW_IDENTITY`, `STALE_CONSUMER`, or `HISTORICAL` |
| `evidence_refs` | exact PR/run/artifact/status references supporting the state |
| `non_claims` | claims that must not transfer with the dependency |
| `handoff_owner` | specialist/repo responsible for the next review or rebind |

These names are coordination vocabulary only. They do not create authority over source repositories.

## Bounded identity-dimension map

| Example | Bound dimension | Exact evidence | Current disposition |
|---|---|---|---|
| Nature source migration | `GENERATED_GEOMETRY` | Nature Geometry PR #9 head `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`; later Procedural / Technical Art / Map rebinds | **CURRENT for migrated lineage; historical digests remain historical** |
| Object ownership -> UC rigid hierarchy | `TRANSPORT_REPRESENTATION` while `SOURCE_SEMANTICS` stays Object-owned | Object Technical Art PR #16 head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`; workflow `35081970135` success; UC PR #157 head `6dc465987e01362264f88b7cef4213609ae50763` | **CURRENT experimental proof / draft PRs; no canonical adoption claim** |
| Map west Object source replacement | `RECEIVING_SCENE` | Map Environment PR #19 head `85a2a0be959b4e39f9ffcf83da89078b604f9881`; stale old slot rejected, current varied slot retained | **CURRENT receiving identity; old slot is historical, not silently restored** |
| Specialist status after later dependency closure | `EVIDENCE_STATUS` | prior Nature Cartography pass identified later QA / receiving closure after older status snapshots | **STALE_CONSUMER only when later exact evidence has actually closed the named hold** |

## Capability-placement decision

### Object repo owns Object meaning

The Object repository remains the correct home for:

- component segmentation;
- stable part names;
- hinge pivot identity;
- latch keeper/lever ownership;
- which rigid pieces belong to the lid;
- Object-specific articulation meaning and constraints.

None of those semantics should be copied into UC merely because UC transports them.

### Universal Creation owns only neutral rigid scene-graph transport

UC PR #157 is correctly placed **if it remains neutral**:

- consumes already verified flat UC-generated GLB plus caller-authored node names/parents/transforms;
- rejects unknown nodes/parents, cycles, multiple-parent ambiguity, non-unit rotations and already-hierarchical inputs;
- preserves exact BIN payload;
- does not infer domain names, ownership, pivots, animation, physics or gameplay.

This is a genuine shared creation/transport primitive, unlike the earlier Nature evidence-dependency problem, which belonged only in studio coordination.

Cartography therefore records **NO DUPLICATE UC LANE**. PR #157 is the candidate home already supported by the exact Object consumer.

### `axm-create-me` owns the evidence-dependency ledger method

The ledger remains coordination state because it tracks which specialist evidence depends on which exact external identity and whether that dependency is current, held or historical. Putting those acceptance/status relationships into UC would inflate UC from creation machinery into studio governance.

### Profession Fabric remains unchanged

The existing experimental Knowledge Engineer body already owns provenance, contradiction/supersession representation and stale-source behavior, while explicitly separating representation from truth. Its WORKING threshold requires representative provenance/conflict/retrieval/staleness fixtures across **at least two materially different knowledge domains** plus an exercised domain-profession handoff.

The existing experimental Ontology Engineer body already owns version/migration mechanics and explicitly refuses to turn formal structure into domain truth; its WORKING threshold likewise requires at least two materially different domain ontologies and migration/authority fixtures.

The studio now has two materially different **3D coordination examples**, but that is not the same as two materially different Profession Fabric knowledge/ontology domains. Therefore this activation does not promote a new Profession body, alter either body, claim WORKING maturity, or copy this studio ledger into Profession Fabric.

A later Profession Fabric proposal would need evidence that this identity-dimension/staleness method transfers outside the 3D Studio without absorbing domain authority.

## Missing dependency / handoffs

### Technical Art / UC Integration

Current `studio/status/11_technical_art_uc_integration.md` predates Object Technical Art PR #16 and UC PR #157. It should refresh on its own next activation to record the new rigid-scene transport evidence while preserving its Nature proof as historical/current evidence for that separate domain.

Cartography does **not** rewrite that specialist's status on its behalf.

### Runtime / Animation / Materials / Rigging

The new UC rigid scene graph transports hierarchy; it does not silently grant AnimationPlayer clips, the 101-sample Object choreography, runtime controller/state-machine behavior, latch mechanics, physics/collision, materials acceptance or gameplay. Each consumer must bind only the dimension it actually needs and retain its own evidence gate.

### Capability Cartographer next trigger

Watch for either:

1. a **third independent domain consumer** of `axm.rigid-scene-graph/v0.1` that tests whether the contract is genuinely generic rather than Object-shaped; or
2. a new dependency failure that does not fit the five identity dimensions above.

Do not centralize more structure before one of those produces evidence.

## Retained earlier findings

### Nature evidence-dependency closure remains valid

The previous pass's Nature finding is retained: historical source/generated identities stay traceable, downstream exact consumers rebind selectively, and stale status is a coordination condition rather than proof that the historical status was false when written.

### Three-layer attachment placement remains valid

Earlier Object attachment mapping is also retained. The new rigid scene-graph transport does not prove a second independent live attach/detach consumer or the missing Layer-C 3D attachment physics capability. No generic attachment runtime extraction is triggered here.

## Duplication guard

This activation deliberately does **not**:

- open another Object Technical Art lane;
- open another UC rigid-scene implementation;
- move Object part semantics into UC;
- reinterpret Nature mesh migration as a scene-graph problem;
- treat Map receiving-slot drift as source drift;
- blanket-rerun Materials/VFX/Rigging/Runtime evidence whose consumed identity dimension did not change;
- overwrite another specialist's stale/current status;
- create a new Profession Fabric specialist or promote Knowledge/Ontology Engineering maturity;
- claim that one Object target-host proof establishes universal rigid-scene portability.

## Truth boundary / non-claims

This activation does **not** establish or authorize:

- canonical adoption or merge of Object PR #16 or UC PR #157;
- a universal asset identity system;
- an automatic build/dependency graph;
- automatic specialist-status mutation;
- automatic invalidation or rerun policy;
- domain semantics inferred from hierarchy;
- animation clip/controller transport;
- physics, collision, gameplay, target-device performance or production readiness;
- Profession Fabric WORKING maturity;
- UC maturity beyond the exact candidate contract and evidence that currently exists;
- CANON authority, auto-merge authority or Cartography mastery.

## Four-root check

- **Truth:** each dependency names the identity dimension actually consumed. Object semantics, transport hierarchy and Map receiving state are not conflated, and draft/open evidence is not described as canonical adoption.
- **Agency / non-domination:** source repositories retain domain meaning and each specialist retains its own acceptance/status authority. UC transports explicit caller-owned graph data rather than inferring ownership.
- **Continuity:** exact PR heads, workflow IDs, previous status blob, historical Nature identities and current Object/Map identities remain separately traceable and rollbackable.
- **Wisdom before speed:** the smallest coordination schema is recorded in the Cartographer status instead of creating infrastructure, a new profession or a second UC lane prematurely.

## Evidence pointers

- Object Technical Art PR #16: `mike-axiom-mir/axm-object-design#16`, head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`, exact workflow `35081970135` = `success`.
- Universal Creation PR #157: `mike-axiom-mir/axm-universal-creation#157`, head `6dc465987e01362264f88b7cef4213609ae50763`, candidate `axm.rigid-scene-graph/v0.1`.
- Map Environment PR #19: `mike-axiom-mir/axm-map-design#19`, head `85a2a0be959b4e39f9ffcf83da89078b604f9881`.
- Profession Fabric: `professions/ai-data/knowledge-engineer/body.json` and `professions/ai-data/ontology-engineer/body.json`, both still `EXPERIMENTAL` and both preserving domain authority boundaries.
