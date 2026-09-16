# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **MAP COMPLETE / SECOND DESIGN→UC BOUNDARY CONFIRMED / THREE-LAYER PLACEMENT CLARIFIED / NO STRUCTURAL MOVE**

## Scope inspected

This activation read:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/14_capability_cartographer.md`;
- newest coordination commits and specialist status relevant to the live 3D constellation;
- current open design-repository PRs, including the animal, nature, map, weather and Wreckline lanes;
- current Universal Creation surface/GLB machinery and open UC PRs;
- Profession Fabric's existing `knowledge-engineer` and `ontology-engineer` bodies plus the active EXPERIMENTAL `3d-game-asset-specialist` PR #35.

The newest studio wave materially changed the previous map:

- Rigging repaired the exact quadruped downstream-paw transform defect on `axm-animal-design` PR #2 at head `eea127689635e1a6c85bc08940a59ee0cdbe6685`, with exact structural evidence; Visual Observer has not yet rerun the repaired head, so the old visual FAIL remains historical before-evidence rather than silently disappearing.
- Nature now has a real source-owned sapling, bounded wind response, seeded branch/crown variation, a real environment placement, and its own Technical Art → UC bridge.
- Wreckline has active hard-surface, animation, materials and runtime/LOD lanes, but these remain separate from the portable source-surface question selected here.

Current UC main used by the newest Nature bridge is `49ef11ca42b2079dffbd595daa8ea8626b99d2ab`. Its live `procedural_3d.py` already owns the strict `axm.surface-3d/v0.1` target grammar plus `publish_glb()` and `verify_glb()`. Current open UC PRs #140 and #141 are Physics and evolution/aftertouch lanes respectively; neither is a competing source-surface integration lane.

`axm-create-me` remains coordination-only. No product implementation was added here.

## Selected material cross-repo learning

### The repeated capability is a **portable surface handoff boundary**, not a universal source adapter

Two materially different source repositories have now independently crossed into the same UC GLB target:

1. **Animal Design → UC** — `mike-axiom-mir/axm-animal-design#3`, exact head `30bf8658c76402402ec4a2fbd0232bdce47e56bc`.
2. **Nature Design → UC** — `mike-axiom-mir/axm-nature-design#3`, exact head `9cab2df43d33effcc4fef3173d233f5a7fb00790`.

Both discovered the same important architectural fact: sharing the label `axm.surface-3d/v0.1` does **not** mean a source repository already satisfies UC's actual wire contract.

### What truly repeats across both bridges

Both source-owned bridges now perform the same evidence sequence:

1. bind the exact source identity and source contract;
2. state the source coordinate system and units explicitly;
3. perform an explicit source → UC axis/handedness conversion;
4. repair triangle winding when the transform changes handedness;
5. provide normals in the receiving frame;
6. translate source material representation into UC's bounded target material representation;
7. produce a strict named `axm.surface-3d/v0.1` packet;
8. pin an exact UC commit;
9. call the real UC `publish_glb()` path rather than copying the GLB writer;
10. reopen the emitted bytes through UC `verify_glb()`;
11. retain source/target/output identities and a bounded truth statement together.

That repetition is material. It is no longer a one-repository integration anecdote.

### What does **not** repeat

The actual source adaptation logic is materially different and therefore should not be centralized merely because the final destination is shared.

**Animal Design** owns:

- source coordinates `+X forward, +Y left, +Z up`;
- map `[x_forward,y_left,z_up] -> [-y_left,z_up,x_forward]`;
- existing source normals and optional vertex colors;
- linear RGBA → bounded UC hex material conversion;
- animal-local evidence/source schema validation.

**Nature Design** owns:

- source coordinates `+X right/east, +Y forward/north, +Z up`;
- map `[x_right,y_forward,z_up] -> [x_right,z_up,y_forward]`;
- face-normal reconstruction from its source triangle body;
- source region ownership split into `woody` / `foliage` proof groups;
- the current explicit planar-leaf backface workaround because UC has no proven sidedness field;
- Nature-local source/mesh validation.

The shared destination is real; the source meaning is not interchangeable.

## Bounded capability-placement map

| Layer | Correct current home | Repeated evidence | Must stay out |
|---|---|---|---|
| Source semantic adapter | each design repository | exact source schema, coordinates/units, material meaning, region ownership, source-specific compatibility repair | UC must not absorb animal/nature semantics |
| Portable target contract + GLB publication/verification | `axm-universal-creation` | strict `axm.surface-3d/v0.1`, bounded target material grammar, `publish_glb()`, `verify_glb()` | source anatomy, vegetation policy, source-region meaning, final art policy |
| Cross-repo handoff procedure / evidence discipline | **Profession Fabric candidate, not yet moved** | source identity → explicit mapping → target identity → receiving verification → retained non-claim packet | executable domain adapter code and domain truth |
| Studio dependency/placement map | `axm-create-me/studio/status` | which source owns semantics, which shared layer owns target machinery, promotion conditions | product/runtime implementation |

### Placement decision

**No structural move is justified this activation.**

The two bridges are enough to establish a stable *boundary shape*, but not enough to prove that their source-adaptation code has one reusable implementation.

Moving either adapter into UC now would mix source-specific meaning into the shared target generator and would erase exactly the differences that the two proofs exposed.

Copying the same handoff procedure into another design repository without mapping it would also be wasteful. The repeated part should now be treated as an explicit capability candidate so the next bridge can test whether a truly generic shell exists.

## Why the shared procedure points toward Profession Fabric rather than UC

Profession Fabric's existing `knowledge-engineer` body explicitly separates representation from truth claim, preserves provenance/scope, and requires domain adjudication to remain with the owning profession/domain. Its `ontology-engineer` body similarly owns mappings/alignment and versioned formal boundaries while refusing to convert formal consistency into domain truth.

That matches the repeated handoff lesson better than putting source interpretation inside Universal Creation:

- source repositories decide what their coordinates/materials/regions *mean*;
- a cross-repo procedure can require those meanings to be declared and mapped explicitly;
- UC can remain the executable target verifier/publisher;
- the procedure can preserve source/target versions, transformation declaration, retained evidence and non-claims without deciding domain semantics.

However, **no Profession Fabric edit or promotion is made now**.

The active `3d-game-asset-specialist` PR #35 is still correctly marked **EXPERIMENTAL / NO PROMOTION** and is grounded primarily in one Wreckline hard-surface vehicle family and one bounded Godot proof host. It has strong provider-boundary/evidence discipline, but it has not yet itself executed the Animal + Nature source-surface handoff as a repeated professional task. Cartography should not manufacture profession maturity from adjacent studio evidence.

## Candidate reusable handoff packet — proposal only

If the next materially different source repository needs the same path, the smallest reusable **procedure/evidence** packet should contain fields equivalent to:

- source repository + exact commit/head;
- source schema/body identity + digest;
- source coordinate convention + units;
- explicit source → target component/matrix mapping;
- handedness-change declaration;
- winding action;
- normal-generation/transform method;
- material-field mapping and any intentionally unsupported fields;
- domain-specific compatibility workaround, named as source-owned;
- target UC repository + exact commit;
- target surface digest;
- emitted artifact digest;
- receiving `verify_glb()` result;
- explicit non-claims and downstream acceptance still required.

This is a **map/proposal**, not a new schema, API, profession capability or UC contract yet.

## Promotion / extraction trigger

Revisit horizontal structure only when a third materially different source family — for example weapon, armor, building, object or another independent asset body — crosses into the portable UC surface path.

At that point, ask two separate questions rather than one:

### A. Is there reusable executable machinery?

Promote only the part that is literally domain-neutral across the real bridges. A likely candidate would be a tiny transform/validation helper **only if** multiple repositories can use the same explicit input contract without hiding source semantics.

If every source still needs different interpretation, keep adapters local and do not create a universal adapter for cosmetic deduplication.

### B. Is there reusable professional procedure?

If a Technical Art / 3D asset specialist repeatedly executes the same source-boundary workflow across multiple asset classes or executors, then Profession Fabric can absorb the evidence procedure separately from code.

That would strengthen the EXPERIMENTAL 3D profession with real cross-domain evidence without pretending a source adapter is universal machinery.

## Specific candidate still on HOLD: surface sidedness

Nature PR #3 exposes a real target-contract gap: planar leaves currently need explicit duplicated backface geometry because UC's bounded material contract has no sidedness field.

This is **not** promoted into UC yet.

Animal Design does not reproduce that need. Therefore sidedness remains one Nature consumer, not a repeated horizontal requirement.

Promotion trigger remains: a second materially different **non-Nature** consumer independently needs the same two-sided surface semantics, then Technical Art + Cartography can test whether an optional domain-neutral target field mapped to glTF `doubleSided` is smaller and more honest than repeated geometry duplication.

## Previous deformation map — current dependency state

The prior Cartographer activation correctly kept articulated-subtree repair local to Animal Design. That local structural repair now exists at head `eea127689635e1a6c85bc08940a59ee0cdbe6685` and preserves the old detached-paw failure as before-evidence.

The promotion trigger is still **not complete** because Visual Observer status 13 has not yet re-observed the repaired head. Therefore:

- do not clear the old visual FAIL by inference;
- do not release quadruped Animation from HOLD;
- do not promote an articulated-subtree rule into UC or Profession Fabric yet.

This dependency remains tracked, but it is no longer the highest-leverage Cartographer action because the new Animal + Nature UC boundary now gives the studio its first genuine two-domain portability pattern.

## Truth boundary / non-claims

This map does not establish:

- one universal design-source schema;
- that Animal and Nature adapters are code-compatible;
- that every 3D repository should emit UC surfaces directly;
- that UC should own source coordinate/material interpretation;
- target-engine import or renderer acceptance for either portable GLB;
- final materials, UVs, deformation, animation, gameplay, collision or runtime readiness;
- that explicit duplicated leaf backfaces are the final foliage representation;
- that UC needs `doubleSided` now;
- that Profession Fabric's `3d-game-asset-specialist` is mature or ready for promotion;
- that the Knowledge Engineer or Ontology Engineer bodies automatically become 3D Technical Art authorities;
- CANON, merge authority, production readiness or mastery.

## Root gate

- **Truth:** the map separates what actually repeats from source-specific differences; identical schema labels are not treated as proof of wire compatibility.
- **Agency / non-domination:** source repositories retain source semantics; UC remains a bounded target machinery provider; Profession Fabric is not granted domain authority by procedural reuse.
- **Continuity:** exact PR heads, UC commits, source/output identities and historical failures remain distinct; no source lane is moved or rewritten.
- **Wisdom before speed:** two real bridges justify mapping a pattern, but not centralizing code or promoting a profession before repeated execution proves the correct abstraction.

## Handoffs

- **Technical Art / UC Integration:** keep source adapters local. On the next materially different design→UC bridge, explicitly compare its source-specific code against Animal + Nature before proposing extraction.
- **Universal Creation:** no change requested. Keep the strict portable target surface/publish/verify path stable. Watch for genuine repeated target-contract needs such as sidedness, but do not absorb domain interpretation.
- **Profession Fabric:** no promotion requested. If the 3D specialist later executes cross-domain portability tasks, use Animal + Nature as external evidence candidates and preserve the distinction between professional procedure and executable source adapter.
- **Visual Observer / QA:** the repaired quadruped head still needs direct visual rerun; no Cartographer map clears that dependency.
- **Rigging / Animation:** retain current repaired-structural / visual-recheck-pending boundary; no horizontal promotion from one animal.
- **Future design-source bridge owner:** treat the next real bridge as the deciding experiment. Reuse the evidence sequence, but do not copy either Animal or Nature semantics blindly.

## Next Cartographer pass

First look for one of three events:

1. a third materially different design repository crosses the UC surface boundary;
2. a second non-Nature asset independently requires surface sidedness;
3. Profession Fabric's 3D specialist actually executes a cross-domain portability task.

If none occurs, do not manufacture an abstraction. Re-scan the constellation for the next material repeated gap, missing dependency or placement decision.