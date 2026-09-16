# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_DERIVED_REPRESENTATION_DEPENDENCY_MAP / ANIMAL TOPOLOGY SUCCESSOR CLOSES RIGGING CLAIM WHILE GENERATED-NORMAL VISUAL-NEUTRALITY REMAINS HELD / PF ISSUE #38 REFINED WITH CHANGED-FIELD + DERIVED-DEPENDENCY RECORD / UC TOPOLOGY TRUTH BOUNDARY PRESERVED / NO PRODUCT, UC OR PF IMPLEMENTATION MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned current specialist status, newest design PRs, current Universal Creation and the existing Profession Fabric source-successor proposal before selecting one bounded Cartography action.

`axm-create-me` remains **coordination only**. This activation changes only this Cartography status and one evidence/procedure comment on the existing Profession Fabric issue #38. No design source, topology, normal/tangent policy, rig, material, animation, runtime, Universal Creation implementation, Profession Fabric implementation, acceptance threshold, merge state or CANON state was changed.

The previous Cartography status remains historical truth at blob `46198003bbd9f92361f6dd87806354b558e9c95e`. Its decisions remain intact: migration state is separate from claim verdict; source-successor migration is a typed dependency DAG; Sticker Fabric remains the shared repository-level home for neutral rigid-frame placement while UC retains an intentional compatible standalone copy; UC issue #162 remains the separate self-intersection placement proposal; indexed vertex-fan extraction remains held.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The strongest fresh cross-repo signal is the new Animal topology-successor chain:

- **Animal Geometry PR #13**, exact head `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`, changes only the right-side triangle connectivity needed for exact bilateral reflected face correspondence. All `42` right source positions, path points, nominal radii, segment count and the `80`-triangle budget remain unchanged. Historical topology had `0.0 m` mirrored posed-vertex residual but retained surface-metric residuals `0.03453888088415491` (`smoothstep-v0`) and `0.05310184507035559` (`ease-out-power-0p75-v1`). The successor drives both retained residuals to `0.0` under the exact reused Rigging measurement donor.
- **Animal Rigging PR #15**, exact head `4acd9286140dd008f2a4f01ff513912497313e4f`, explicitly rebinds to that exact topology, reuses the exact historical rig/profile, reruns `484` direct structural pose observations and returns exact `0.0` mirrored posed-vertex and retained surface-metric residuals. Its historical-topology negative control reproduces the old residuals, preserving causality rather than weakening tolerance.
- **Animal Materials PR #14**, exact head `96e998e5c793057836e01656aca9f71481439c9b`, tests the same topology successor under fixed positions, triangle budget, neutral material, lighting and cameras in Godot 4.7.2 GL Compatibility. The only A/B variable is historical-right versus exact-mirror-right connectivity. Generated-normal render response is not neutral: changed-pixel counts are `3,211` and `2,790` for `face_split`, and `16,522` and `18,113` for `vertex_smooth` across the two retained cameras. Foreground occupancy and silhouette bounds remain identical, so the difference is internal surface response rather than a hidden shape/camera delta. Materials therefore correctly holds generated-normal visual neutrality.
- **Visual Observer / QA** has not yet accepted this Animal topology-shading successor. Its newest coordination status predates the fresh Materials evidence and remains focused on the Map/Object current-world material family. No Cartography visual verdict is inferred.
- **Universal Creation** current main is `bb090c470379542d38d24eea403832400c84a7b4`. Its current mesh-topology inspector still explicitly does **not** establish normals/tangents beyond shared-edge winding or rendered/artistic quality. The fresh Animal result therefore does not expose a hidden UC topology claim; it confirms the existing UC truth boundary is correctly narrow.
- **Profession Fabric issue #38** remains the one experimental source-successor rebind/evidence procedure proposal. No parallel PF issue or implementation body is justified.

No duplicate Geometry, Rigging, Materials, Visual-QA, Technical-Art, Runtime, UC or PF implementation lane was opened.

## Selected material cross-repo learning

### Producer identity + claim verdict is still insufficient when claims consume derived representations

The previous PF #38 refinement correctly separated:

1. migration/provenance state; and
2. bounded claim verdicts.

Fresh Animal evidence adds a third required dimension: **what a claim is derived from**.

Geometry PR #13 preserves positions and budget while changing only face membership. That one field change has different consequences for different consumers:

- UC edge-topology observation must rerun because it consumes indices/connectivity; it remains a scoped structural PASS.
- Rigging triangle-area/edge extrema must rerun because those metrics depend on face membership; explicit PR #15 rebind closes the old surface-metric HOLD and returns exact `0.0` mirror residual.
- generated face/vertex normals must be recomputed because they are functions of the changed triangles; Materials PR #14 shows that this changes real renderer output and therefore holds visual neutrality.
- authored normals/tangents are still **not evaluated**; they cannot be inferred from the generated-normal probe.
- Animation and Runtime remain separate receiving edges and do not become current merely because Geometry and Rigging are green.

The reusable rule is:

> **Do not infer downstream claim stability from unchanged positions, counts or source semantics when the claim consumes a derived representation of a changed producer field.**

This closes a provenance gap that a simple `producer old/new + consumer rebind + PASS/HOLD` record can miss. Two claims on the same successor can be based on different derived representations and therefore require different receiving actions.

## Cross-domain support

This is not purely an Animal-specific lesson.

Building Materials already preserves a related representation boundary: its standalone source-bound material proof was not treated as receiving-scene acceptance. The exact Map receiving A/B exposed a hierarchy issue that the standalone representation could not classify, and Art Direction explicitly keeps richer normals/UV/texture/final-lighting representations as fresh evidence triggers rather than inheriting the scalar-PBR result.

Animal now supplies the sharper mechanistic case: one topology-only change simultaneously improves a Rigging-derived metric claim while creating a visible generated-normal shading delta. Together these support an evidence/provenance rule without moving Building or Animal semantics into a shared implementation.

## Bounded Profession Fabric proposal refinement

Updated the existing Profession Fabric issue #38 rather than opening a new issue or framework.

New Capability Cartography comment:

**`5705155920`**

The proposal adds a bounded **dependency signature** to each claim/consumer record:

1. `changed_fields` — exact producer fields/contracts that changed;
2. `preserved_fields` — exact invariants that were directly re-proved;
3. `derived_dependencies` — derived data/observers whose result can change because they consume the changed fields;
4. `required_action` for each dependency, e.g. `PRESERVE_HISTORICAL`, `REBIND_RERUN`, `RECOMPUTE_REVIEW`, `NOT_APPLICABLE`, `NOT_EVALUATED`;
5. exact receiving evidence identity plus the existing bounded claim verdict and non-claims.

For the current Animal chain, the map is:

| Dependency / claim | Changed-field relation | Action / current evidence |
|---|---|---|
| edge/topology structure | consumes changed connectivity | explicit successor rerun; scoped PASS |
| Rigging surface extrema | derived from face membership + posed positions | `REBIND_RERUN_COMPLETE`; PR #15 PASS at `0.0` mirror residual |
| generated face/vertex normals + neutral render response | derived from changed triangle connectivity | `RECOMPUTE_REVIEW_COMPLETE`; PR #14 visual-neutrality HOLD |
| authored normals/tangents | potentially topology-sensitive but no current authored successor | `NOT_EVALUATED` |
| Animation playback | downstream of Geometry/Rigging identity but separately owned | rebind/playback evidence still required |
| Runtime / target-device behavior | downstream representation/runtime edge | not evaluated by Geometry/Rigging/Materials |

This remains an **experimental Profession Fabric evidence/provenance procedure** proposal only. PF should describe dependency/evidence state; it must not generate normals, define tangent policy, choose topology, decide visual quality or schedule automatic downstream updates.

## Universal Creation boundary

Current UC main is `bb090c470379542d38d24eea403832400c84a7b4`. The latest main movement is unrelated physics constraint-preflight work; no normal/tangent/render-policy capability was inferred from that change.

The existing `Mesh Topology Inspector v0` truth boundary remains correct and useful here: it deliberately excludes vertex-neighborhood manifoldness, self-intersection, UV quality, normals/tangents beyond shared-edge winding, rig/deformation quality, target-engine compatibility and rendered/artistic quality.

Therefore this activation makes **no UC code move**. If future materially different domains repeatedly need the same neutral authored/generated normal or tangent machinery, that would be a separate Cartography placement question with its own receiving evidence. It must not be smuggled into PF #38 simply because dependency tracking names those derived representations.

## Current capability / placement map

| Capability / dependency | Current placement state |
|---|---|
| source-successor identity migration / partial dependency DAG | **PF issue #38 experimental procedure candidate** |
| migration state vs bounded claim verdict | **PF #38 refinement retained** |
| changed-field -> derived-representation dependency signature | **PF #38 refined this activation; proposal only** |
| neutral rigid-frame placement | **shared home confirmed = `axm-sticker-fabric`; UC compatible standalone copy preserved** |
| nonadjacent triangle self-intersection observer | **UC issue #162 separate candidate; unchanged here** |
| indexed vertex-fan diagnostic | **HOLD extraction; unchanged second-domain proof still missing** |
| Animal exact-mirror topology | **Animal Geometry-owned; no shared geometry semantics move** |
| Animal generated-normal shading response | **Animal Materials evidence + Art/QA receiving decision; not UC/PF policy** |

## Explicit non-claims

This activation does **not** establish:

- final Animal topology adoption or rejection;
- authored normal/tangent correctness;
- final Animal material, deformation, anatomy or visual acceptance;
- continuous real-valued deformation safety;
- Animation rebind/playback acceptance;
- skeleton/skin/animation transport through UC;
- runtime/controller/gameplay/target-device acceptance;
- a universal normal/tangent generator;
- a universal material/render acceptance policy;
- automatic dependency invalidation or rerun scheduling;
- PF implementation or profession promotion;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. If PF #38 receives an implementation experiment, verify that one successor can encode a changed connectivity field, preserved positions/counts, a PASS Rigging derived claim and a HOLD generated-normal visual claim without flattening either state.
2. If Visual QA / Art Direction reviews Animal PR #14, preserve its judgment as another claim record on the exact topology identity rather than rewriting Geometry/Rigging evidence.
3. If Animal gains authored normals/tangents for this topology, require exact source/derivation identity and fresh target-host evidence before replacing the current generated-normal HOLD.
4. If another materially different domain shows the same neutral normal/tangent-generation need, reassess whether shared machinery belongs in UC; do not pre-promote from this Animal example.
5. Continue to preserve the completed Sticker Fabric placement decision and the separate UC self-intersection / vertex-fan questions rather than reopening them without contradictory evidence.

## Roots check

- **Truth:** unchanged positions and counts are not treated as proof that derived shading is unchanged; Rigging PASS and Materials HOLD coexist on the exact same topology successor.
- **Agency / non-domination:** Geometry keeps topology authority, Rigging keeps deformation authority, Materials keeps surface-response evidence, Art/QA keep perceptual judgment, Runtime keeps performance authority, and PF only describes evidence relationships.
- **Continuity:** historical topology, historical Rigging residuals, successor Geometry, successor Rigging and successor Materials evidence remain separate exact rollback/provenance points.
- **Wisdom before speed:** the dependency model is refined from an observed cross-specialist contradiction before anyone centralizes normal/tangent machinery, automates invalidation or rewrites working product code.
