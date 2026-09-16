# AXM 3D Studio Campaign

Status: ACTIVE EXPERIMENT / COORDINATION ONLY

`axm-create-me` is the studio control room for this campaign. It is **not** the product build yet. Do not start assembling the eventual create-me system here until the design departments and shared machinery have materially stronger evidence.

## Roots / merge gate

All work is bounded by the AXM roots:

1. Truth — evidence before claims; no fake done.
2. Agency / non-domination — no hidden control or authority inflation.
3. Continuity — preserve working direction, provenance, repo identity, rollback and handoffs.
4. Wisdom before speed — prefer grounded capability growth over impressive-looking churn.

## Design constellation

Run these as one coordinated studio, not as isolated projects:

- `mike-axiom-mir/axm-weapon-design`
- `mike-axiom-mir/axm-armor-design`
- `mike-axiom-mir/axm-character-design`
- `mike-axiom-mir/axm-unit-design`
- `mike-axiom-mir/axm-animal-design`
- `mike-axiom-mir/axm-building-design`
- `mike-axiom-mir/axm-nature-design`
- `mike-axiom-mir/axm-weather-design`
- `mike-axiom-mir/axm-map-design`
- `mike-axiom-mir/axm-object-design`
- `mike-axiom-mir/axm-misc-design`

Supporting capability sources:

- `mike-axiom-mir/axm-universal-creation` — shared creation machinery / native visual tooling.
- `mike-axiom-mir/axm-profession-fabric` — reusable profession bodies and evidence status.
- `mike-axiom-mir/axm-create-me` — coordination and retained cross-repo state only for now.

## Operating model

Every specialist is cross-repo. A specialist may work in any design repo where its expertise is currently the highest-leverage gap. Discoveries are presumed potentially reusable across the constellation until evidence shows they are domain-specific.

Each run must:

1. Read this file and the specialist's role file under `studio/specialists/`.
2. Inspect current commits/PRs/state in relevant design repos plus other specialist status notes.
3. Avoid duplicating an active lane.
4. Select one bounded, high-leverage improvement inside the specialist's ownership.
5. Prefer real asset/runtime evidence over abstract scaffolding when the machinery is ready.
6. Improve shared UC machinery only when the improvement is demonstrably reusable; do not dump domain knowledge into UC without a contract.
7. Keep source assets, generated outputs, tests, renders and runtime observations distinguishable.
8. Record what was changed, what was actually observed, what remains unknown, and who should receive the next handoff.
9. Maintain a dedicated status file at `studio/status/<specialist-id>.md`; never overwrite another specialist's status file.
10. Do not claim a domain, asset, visual style, runtime path or profession is mastered from one successful example.

## Cross-repo learning loop

Baseline -> gap extraction -> shared machinery -> propagation -> domain specialization -> cross-domain composition -> runtime proof -> repeat.

Examples of deliberate cross-pollination:

- animal/character fur or skin systems may inform nature or armor trims;
- weapon attachment/socket grammar may inform armor, units and objects;
- building damage/modularity may inform units and props;
- weather wind/state may drive vegetation, cloth, particles and characters;
- map semantic zones may drive buildings, nature, animals and weather;
- optimization/LOD discoveries should propagate to every asset-producing department.

## Profession reuse and experimental overlays

Existing Profession Fabric bodies should be reused rather than duplicated whenever their ownership fits. Project-specific specialization overlays may narrow them for this campaign. Missing specialist bodies remain **EXPERIMENTAL** until repeated real tasks justify promotion into Profession Fabric.

No specialist rank grants merge authority. Evidence and the four roots are the gate.

## Initial specialist seats

1. 3D Art Director
2. Geometry & Topology Specialist
3. Hard-Surface Specialist
4. Organic Form Specialist
5. Materials / LookDev Specialist
6. Rigging & Deformation Specialist
7. 3D Animation & Motion Specialist
8. Environment / World Art Specialist
9. VFX / Atmosphere Specialist
10. Procedural Design Specialist
11. Technical Art / UC Integration Specialist
12. Runtime / Optimization Specialist
13. Visual Observer / QA Specialist
14. Capability Cartographer

Studio Direction is deliberately not automated yet. Direction will first run several manual rounds against specialist evidence, then may receive its own hourly task.
