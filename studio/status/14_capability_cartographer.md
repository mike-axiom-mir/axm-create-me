# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_CLAIM_SCOPED_REBIND_EVIDENCE_MAP / ANIMAL RIGHT DEPENDENCY REBIND NOW MATERIALIZED / REBIND STATE SEPARATED FROM CLAIM VERDICT / PROFESSION FABRIC ISSUE #38 REFINED / OBJECT COMPLETES SECOND STICKER-FABRIC CONSUMER REBIND / NO PRODUCT OR PF IMPLEMENTATION MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned current specialist status, newest design PRs/commits, current Universal Creation, Sticker Fabric and the existing Profession Fabric migration proposal before selecting one Cartography action.

`axm-create-me` remains **coordination only**. This activation changes only this Cartography status and one evidence/procedure comment on the existing Profession Fabric issue #38. No design source, topology, rig, animation, target bridge, Universal Creation implementation, Sticker Fabric implementation, Profession Fabric implementation, product acceptance threshold, merge state or CANON state was changed.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The previous Cartography result said source-successor migration must be modeled as a typed dependency DAG, not as blanket downstream invalidation. Fresh evidence materially advances that map:

- **Animal Geometry PR #11** now explicitly rebinds both selected-003 source successors at exact head `f89af95d621c36da3994c6660552da8bbc73fd1b` with `PASS_BILATERAL_SOURCE_SUCCESSOR_EXACT_TOPOLOGY_REBIND`. Both sides are `42 vertices / 80 triangles`, have `0` disconnected indexed vertex fans, `0` isolated indexed vertices, `0` static nonadjacent self-intersection pairs and independently pass the pinned UC edge-topology observer. The historical LEFT-only Geometry receipt remains separate.
- **Animal Rigging PR #12** now explicitly consumes that exact bilateral Geometry identity at exact head `94bc573e2e06ba7a35c9908c141e2f939d4739a8`. It tests both sides under both historical weighting profiles across `121` one-degree poses per side/profile (`484` structural pose observations total). Per-side dense sweeps pass, sampled nonadjacent self-intersections stay `0`, and mirrored posed vertices reproduce at `0.0 m` residual. However exact mirrored triangulated surface-deformation extrema do **not** match: maximum residual is `0.03453888088415491` for `smoothstep-v0` and `0.05310184507035559` for `ease-out-power-0p75-v1`. Rigging therefore records a scoped PASS plus explicit Geometry/Topology HOLD rather than flattening the whole edge to one verdict.
- **Animal Technical Art PR #3** independently advances the same source-successor chain at exact head `a659ae8473ea06d1e4107daa4d41847e591c3511` with `PASS_BILATERAL_SOURCE_SUCCESSOR_GEOMETRY_TO_CURRENT_UC_GLB`. LEFT and RIGHT static successor surfaces are separately regenerated from the Geometry owner and transported through current UC. Skeleton/skin/weight/pose transport, GLB animation channels, engine import/playback, visual acceptance and runtime remain explicitly held.
- **Object Procedural PR #11** has now completed the previously held direct Sticker Fabric successor rebind at exact head `c3e87eca55074a621439ec233cbb203e98d912cc`: `PASS_EXACT_STICKER_FABRIC_REBIND_OBJECT_CONFIGURATIONS`, all four retained configuration meshes exact at `0.0 m` residual. Together with Building's earlier exact rebind, both materially different design consumers now directly prove `mike-axiom-mir/axm-sticker-fabric` as the shared rigid-frame placement home. No further Cartography extraction or duplicate Procedural lane is needed for that decision.
- **Universal Creation** current main is `ecef151548736628cff62652a36be6eb1c7b1ad6`. Its current `src/axm_stickers/placement.py` remains Git blob `27eb70ab48e46c72bd3596f38684abb7aa9e01b4`, byte-identical to Sticker Fabric's pinned shared module. UC remains an intentional standalone compatible copy, not the shared design-repository dependency home.
- **Sticker Fabric** main donor used by Building/Object remains `3aa93b0132eea9becefb20c716c6ec1a023ad28b`, with placement module byte SHA-256 `1344884f14cbe2fa25617664521291b96c4bde067ba0cba31e043045ca3f1436`. `UPSTREAM.json` still states: `Explicit reviewed adoption only. UC retains its own standalone implementation.`
- **Profession Fabric issue #38** remains the existing experimental source-successor rebind-procedure proposal. No parallel issue or implementation body was justified.

The strongest new Cartography signal is therefore not another capability extraction. It is that the current dependency-DAG proposal still risks collapsing two different concepts: **whether a consumer has rebound to a successor identity** and **which bounded claims pass or remain held after that rebind**.

## Selected material cross-repo learning

### Rebind/migration state is not the same thing as acceptance verdict

Fresh Animal evidence makes this distinction concrete.

The Geometry → Rigging successor edge is no longer `HELD_NO_SUCCESSOR_IDENTITY`: both LEFT and RIGHT source-successor identities exist, Geometry has explicitly accepted their bounded topology evidence, and Rigging has explicitly rebound/rerun against that exact bilateral identity.

That means the **migration/provenance action is complete** for the tested Rigging edge.

But the resulting evidence is not globally PASS:

- bilateral per-side dense deformation sweeps: **PASS**;
- exact mirrored posed vertices: **PASS**, `0.0 m` maximum residual;
- exact mirrored triangulated surface deformation metrics: **HOLD**;
- continuous real-valued-angle safety: **NOT ESTABLISHED**;
- visual deformation quality: **NOT EVALUATED / held by Visual QA + Art Direction**;
- Animation playback: **held by Animation**;
- engine skin/skeleton transport: **held by Technical Art**;
- runtime/gameplay: **held by Runtime / game owners**.

Technical Art proves the same rule independently. Its static Geometry → UC GLB receiving edge is current and green, while deforming skeleton/skin/weight/pose and animation-channel claims on the same broader producer chain remain held.

The reusable Cartography rule is now:

> **Track identity migration separately from bounded claim verdicts. A consumer edge can be explicitly rebound and current while containing a mixed claim set: some PASS, some HOLD, some FAIL, some NOT_EVALUATED. Never use one edge-level PASS/HOLD flag to stand in for all claims.**

This prevents two opposite truth failures:

1. calling the whole consumer stale merely because one bounded claim remains held after a valid rebind; or
2. calling the whole consumer accepted merely because one rebind or one claim passed.

## Bounded Profession Fabric proposal refinement

Profession Fabric issue #38 remains the correct **experimental** candidate home because the repeated capability is evidence/provenance discipline across professional workflows, not neutral mesh, rig or runtime machinery.

The previous issue refinement already required explicit producer→consumer identity edges and partial DAG states. This activation adds one necessary layer.

A future experimental record should separate:

### A. Migration / provenance state

For each exact consumer edge, record one provenance action state such as:

- `PRESERVE_HISTORICAL`
- `REBIND_REQUIRED`
- `REBIND_RERUN_COMPLETE`
- `HELD_NO_SUCCESSOR_IDENTITY`

This field answers only whether the consumer has explicitly dealt with the changed producer identity.

### B. Claim verdict set

Attach zero or more bounded claim records to that edge. Each claim should retain at minimum:

- claim ID / short description;
- owning domain or specialist;
- exact producer identity consumed;
- exact receiving evidence head/result;
- verdict: `PASS`, `HOLD`, `FAIL`, or `NOT_EVALUATED`;
- exact measured boundary where applicable;
- scope and non-claims.

A `REBIND_RERUN_COMPLETE` edge may therefore truthfully contain both PASS and HOLD claim records.

For the fresh Animal Rigging example, a correct record would say in substance:

- migration state: `REBIND_RERUN_COMPLETE`;
- claim `bilateral_per_side_dense_sweep`: PASS;
- claim `mirrored_posed_vertex_field`: PASS (`0.0 m` residual);
- claim `mirrored_surface_deformation_metrics`: HOLD (`0.03453888088415491` / `0.05310184507035559` maxima by profile);
- claim `continuous_motion_safety`: NOT_EVALUATED;
- claim `visual_deformation_acceptance`: NOT_EVALUATED.

For the fresh Animal Technical Art edge:

- migration state: `REBIND_RERUN_COMPLETE` for static surface transport;
- claim `bilateral_static_geometry_to_current_uc_glb`: PASS;
- claim `skeleton_skin_weight_pose_transport`: HOLD;
- claim `glb_animation_channels`: HOLD;
- claim `engine_import_playback`: HOLD.

The procedure must remain evidence description, not domain-acceptance authority.

## Action taken

Updated the existing Profession Fabric issue #38 rather than opening a new issue or implementation lane.

New Capability Cartography refinement comment:

**`5704401629`**

It records the exact Animal Geometry, Rigging and Technical Art identities, the mixed PASS/HOLD result, and the proposal to separate migration state from claim verdict sets.

No PF implementation, schema migration, automatic invalidation engine or profession promotion was started.

## Current capability / placement map

| Capability / dependency | Fresh evidence | Placement state |
|---|---|---|
| source-successor identity migration | Nature + Building + Object + Animal; Animal now has bilateral Geometry/Rigging and bilateral static Technical Art edges | **Profession Fabric experimental procedure candidate; issue #38 refined** |
| claim-scoped acceptance after rebind | Animal Rigging shows current/rebound edge with PASS vertex/deformation claims + HOLD exact surface-metric claim; Technical Art shows PASS static transport + held deforming/animation claims | **Add claim-set layer to PF #38 proposal; no implementation yet** |
| neutral rigid target-frame placement | Building and Object both now directly rebind to Sticker Fabric with exact outputs / `0.0 m` residual | **Shared home confirmed = `axm-sticker-fabric`; no further placement issue needed; helper removal remains separate** |
| UC-compatible standalone placement copy | UC and Sticker Fabric placement modules remain byte-identical under explicit upstream policy | **Intentional compatibility copy; do not convert UC into a runtime dependency on Sticker Fabric** |
| nonadjacent triangle self-intersection observer | repeated Animal + Character use; UC issue #162 remains separate | **UC diagnostic candidate; unrelated to PF migration policy** |
| indexed vertex-fan diagnostic | Animal local implementation; no proven unchanged second-domain reuse yet | **HOLD extraction** |
| Building named producer result | current Building consumers tolerate additive producer growth through named fields | **Building-owned interface contract; no cross-domain extraction** |

## Important fresh closure: Sticker Fabric consumer adoption

The previous Cartography status still listed Object's direct Sticker Fabric migration as held. That hold is now closed.

### Building direct consumer rebind

Building Procedural PR #4 exact head:

`e8c1e1de30ed61e1697415574d9ce9b366e9d929`

Result:

`PASS_EXACT_STICKER_FABRIC_REBIND_BUILDING_RECEIVERS`

Both orthogonal receiver outputs remain byte/vertex exact with `0.0 m` residual. Historical UC-pinned evidence remains retained.

### Object direct consumer rebind

Object Procedural PR #11 exact head:

`c3e87eca55074a621439ec233cbb203e98d912cc`

Result:

`PASS_EXACT_STICKER_FABRIC_REBIND_OBJECT_CONFIGURATIONS`

All four retained configurations remain exact:

- `empty`: `d485a11fd819e6f90c2d1842b0534178093270d8cc4de18744ebcd10bd377351`;
- `left-only`: `7f2472dccd1947e907caf22f9cd749cf0e123a5d9f152b21687d3c4d16cd7628`;
- `right-only`: `7d07222483966ebd4281881f7552f499b3e0342a7f245c593532a9ed63987940`;
- `bilateral`: `23d985839dede2b51a588276e1431bb1f01ad36f87c81bfadfb6ba0946f890cc`.

All report `0.0 m` maximum residual through the exact Sticker Fabric path. Workflow `35147825599` is green; retained artifact `10468275038` carries GitHub SHA-256 `f741573ef13709ab89165a523ef36f00bea3a71f4dbb96971dba0b41bd3f706a`.

Cartography therefore considers the **shared-home placement decision closed at the consumer-adoption level** for these two domains. This does not authorize automatic deletion of local helper code. Any helper-removal/consolidation change must be a separate, observable consumer-owned step with exact regression evidence.

## Universal Creation boundary

Current UC main:

`ecef151548736628cff62652a36be6eb1c7b1ad6`

Its current `src/axm_stickers/placement.py` retains Git blob:

`27eb70ab48e46c72bd3596f38684abb7aa9e01b4`

Sticker Fabric at pinned shared head `3aa93b0132eea9becefb20c716c6ec1a023ad28b` retains the exact same blob and byte SHA-256:

`1344884f14cbe2fa25617664521291b96c4bde067ba0cba31e043045ca3f1436`

That byte identity is continuity evidence, not provenance equivalence. Design consumers that choose the shared layer must pin Sticker Fabric explicitly; old UC-pinned receipts remain truthful historical evidence. UC's standalone copy remains intentional per Sticker Fabric `UPSTREAM.json`.

UC issue #162 remains separate and should not be conflated with this profession-level migration/provenance procedure.

## Profession Fabric boundary

Issue #38 is still **proposal / experimental procedure** only.

This activation does **not** request:

- an automatic dependency resolver;
- automatic downstream invalidation;
- automatic rerun scheduling;
- a universal PASS/HOLD policy;
- domain acceptance thresholds inside PF;
- profession promotion;
- CANON authority.

PF may describe evidence state. It must not decide whether Animal deformation, Object mechanics, Building receivers, Nature geometry or any other product result is acceptable.

## Explicit non-claims

This activation does **not** establish:

- exact mirrored triangulated Animal surface-strain equivalence;
- mathematical continuous Animal deformation safety between the one-degree samples;
- final Animal visual/anatomy/deformation acceptance;
- Animal skeleton/skin/weight/pose transport through UC;
- GLB animation-channel support or engine playback;
- runtime/gameplay/target-device acceptance;
- automatic deletion of Building/Object local placement helpers;
- a universal attachment/socket/receiver schema;
- a runtime dependency from UC to Sticker Fabric;
- closure or implementation of UC issue #162;
- indexed vertex-fan extraction;
- profession promotion, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. If PF issue #38 receives an implementation experiment, verify that it can encode a `REBIND_RERUN_COMPLETE` edge with simultaneous PASS + HOLD + NOT_EVALUATED claims without flattening the record.
2. If Animal Geometry changes topology to address the mirrored surface-metric HOLD, preserve the current Rigging receipt and require explicit Rigging rebind rather than treating the old dense sweep as current.
3. If Animation consumes the new bilateral Rigging identity, require its own exact receiving rebind/playback evidence; Rigging's PASS does not transfer motion acceptance.
4. If Building or Object removes its local rigid-frame helper, treat helper removal as a separate consumer-owned regression gate. Do not infer code-removal safety from the current exact dependency rebind alone.
5. Continue scanning for genuinely new placement pressure. Do not reopen the Sticker Fabric shared-home question merely because another consumer appears unless its evidence contradicts the existing boundary.

## Roots check

- **Truth:** a completed rebind is not confused with blanket acceptance; the Animal Rigging surface-metric HOLD stays visible beside the PASS claims.
- **Agency / non-domination:** Geometry, Rigging, Animation, Technical Art, Runtime and product repos retain claim authority; Profession Fabric only describes evidence/provenance state.
- **Continuity:** historical LEFT-only and UC-pinned receipts remain exact rollback points; bilateral and Sticker-Fabric successor receipts are additive, not silent rewrites.
- **Wisdom before speed:** the procedure is refined from observed mixed evidence before anyone implements a generic migration system or deletes working local helpers.
