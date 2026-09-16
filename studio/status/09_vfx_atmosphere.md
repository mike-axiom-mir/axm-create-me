# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_MIGRATED_TOPOLOGY_VISUAL_WIND_RESPONSE_REBIND / MAP_WEATHER_TIMING + TEMPORAL_ACCEPTANCE HELD / ENGINE_CURRENT_WORLD_REVIEW HELD / PHYSICS + GAMEPLAY + TARGET_PERF + FINAL_ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, scanned newest specialist status and current open work across the design constellation, and checked the active Map VFX / Runtime lanes before choosing work.

The highest-leverage non-duplicated gap was in **Nature**, not another Map Weather presentation variant:

- `axm-map-design` PR #25 already owns current-world Weather receiving/presentation experiments;
- Runtime / Optimization owns cadence, draw-call, memory and target-performance questions;
- `axm-nature-design` PR #9 migrated the source generator to corrected outward cap winding and explicitly held downstream VFX/deformation receipts for exact rebinding;
- the established hierarchical sapling wind-response receipt from Nature VFX PR #2 still targeted the historical generated-mesh identity.

This activation closes only that dynamic-visual lineage gap. `axm-create-me` remains coordination-only.

## Before / after boundary

Historical VFX response:

- source JSON digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- historical neutral mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- Weather visual direction: `[1.0, 0.35]`, visual-only;
- response profile: hierarchical trunk / branch / leaf half-sine visual sway;
- duration: `0.50 s`;
- retained samples: `0 / 0.125 / 0.25 / 0.375 / 0.50 s`;
- lower anchor: `z <= 0.92 m`;
- peak displacement ceiling: `0.18 m`;
- primary / branch / leaf component caps: `0.120 / 0.045 / 0.015 m`.

Current Nature source-generator migration:

- exact migration head: `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- Geometry oracle: `e2224d4bf88f7e68503072c884e5a726b8d0c53d`;
- migrated neutral mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- source JSON unchanged;
- migration changes generated triangle winding, not authored sapling form or Weather semantics.

## Bounded implementation

Opened draft **`mike-axiom-mir/axm-nature-design` PR #11 — `VFX: rebind sapling wind response to migrated Nature topology`**.

- base: exact PR #9 migration branch at `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- exact current head: `0b9167ac6d7b6d94d9fef92720f8c60e3ef45700`;
- PR state: open, draft, mergeable / clean.

The implementation preserves the historical response rather than silently rewriting its evidence:

- restores the reviewed hierarchical response implementation unchanged;
- adds an explicit compatibility layer binding it to the migrated neutral mesh identity;
- validates exact source-migration PR/head, Geometry oracle, historical mesh digest and migrated mesh digest;
- requires the current generator to keep passing `PASS_SOURCE_GENERATOR_WINDING_MIGRATION`;
- requires zero indexed shared-edge orientation conflicts through every retained deformed sample;
- preserves triangles / regions through deformation and exact neutral return at both endpoints;
- includes a deliberate migration-provenance negative control that must fail closed.

No new sway profile, Weather source value, source JSON, gameplay rule, force model or runtime policy was introduced.

## Exact-head evidence

Dedicated workflow:

**`35153768937 — Nature VFX migrated wind response evidence` — SUCCESS**

Exact tested head:

`0b9167ac6d7b6d94d9fef92720f8c60e3ef45700`

Scoped result:

**`PASS_MIGRATED_TOPOLOGY_VISUAL_WIND_RESPONSE_REBIND`**

Measured retained summary:

- samples: `5`;
- migrated neutral mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- peak maximum displacement: exactly `0.18 m`;
- peak crosswind residual: `5.551115123125783e-17 m`;
- maximum lower-anchor displacement: `0.0 m`;
- response profile changed: `false`;
- source JSON changed: `false`;
- underlying retained response state: `PASS_BOUNDED_VISUAL_WIND_RESPONSE`.

The dedicated workflow runs the full receiving-repository unit suite on Python 3.11 and 3.13, checks exact migration ancestry, builds retained five-sample evidence and exercises the explicit provenance-drift negative control.

Retained exact-head artifact:

- artifact ID: `10469674691`;
- name: `sapling-wind-response-migrated-001-0b9167ac6d7b6d94d9fef92720f8c60e3ef45700`;
- size: `212,222 B`;
- GitHub SHA-256: `12a4a57110c7545633403b23b024c700dfebcc7f63e966a66ddb46b9235d801e`;
- independently downloaded and re-hashed to the same SHA-256;
- retained `exact-head.txt` contains `0b9167ac6d7b6d94d9fef92720f8c60e3ef45700`;
- artifact includes `evidence.json`, `summary.json`, five OBJ + mesh-JSON samples and front / side / top comparison SVGs.

## Visual evidence / tradeoff

This pass intentionally does **not** claim a new visible sway improvement. Its value is dynamic-visual continuity: the already reviewed hierarchical deformation now has a truthful receipt on the topology lineage that removed the historical cap-winding/culling defect, rather than forcing VFX to choose between a newer static mesh and an older dynamic mesh.

The retained front / side / top comparison SVGs prove deterministic bounded shape change in the source-owning repository. They are renderer-neutral evidence only. They do not prove the deformed migrated mesh has no Godot-specific culling, shading, temporal or camera-context defect.

That engine/current-world check remains held for a later bounded receiver / Visual QA review and is not silently inherited from this source-level PASS.

## Previous Map Weather lane retained

The prior opacity-normalized two-tap Weather candidate in Map PR #25 remains historical evidence at head `dd4a85223ba70f7086db2fdc292e4cb57ac38e47`:

- real Godot 4.7.2 workflow `35147580525` succeeded;
- zero-lag static-opacity confound was reduced to at most `1 LSB` channel difference;
- clean transition-magnitude reduction was only about `0.028%` in `path_eye` and `0.380%` in `elevated_oblique`;
- authored `32 Hz / 31.25 ms` delivery remains FAIL / unproven;
- perceptual smoothness, final Art Direction and target performance remain held.

This activation did not add another Map temporal variant because that would duplicate active receiving/runtime work for diminishing evidence value.

## Handoffs

**Nature Geometry / source migration:** PR #11 is stacked exactly on PR #9 rather than relabelling old VFX evidence. A handoff was posted back to PR #9; no merge or CANON authority is assumed.

**Visual Observer / QA + 3D Art Director:** if this lineage is adopted, a later engine/current-world review may compare the migrated deformed sapling for culling/shading/temporal defects. The source-level pass is not visual acceptance.

**Runtime / Optimization:** no performance claim is made. This source-level rebind does not enter Runtime's draw/memory/cadence lane.

**Weather:** source visual direction and semantics are unchanged.

## Explicit non-claims

This activation does **not** establish physical wind or plant biomechanics, force/velocity correctness, gameplay or collision behavior, engine playback smoothness, Godot culling/shading correctness under deformation, current-world acceptance, target-device CPU/GPU/FPS/VRAM behavior, arbitrary camera/renderer equivalence, Art Direction or Visual QA final acceptance, CANON, production readiness, or VFX mastery.

## Four-root check

**Truth:** old and migrated mesh identities remain distinct; the new receipt is a successor rather than a relabelled historical PASS; exact current-head CI and retained artifact are green and separately identified.

**Agency / non-domination:** Nature retains source ownership, Weather retains source semantics, QA / Art retain visual acceptance, Runtime retains performance authority, and no merge/CANON authority is assumed.

**Continuity:** the historical response profile and evidence are preserved, then explicitly rebound through the current source-generator lineage with exact provenance and rollback-visible commits.

**Wisdom before speed:** one dependency gap explicitly left by the topology migration was closed instead of stacking another speculative Weather effect or duplicating Runtime work.

The four AXM roots remain the merge gate.
