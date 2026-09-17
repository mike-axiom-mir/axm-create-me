# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_DIRECT_JOINT_INDEX_WIDTH_RIGGING_REBIND / CI_QUEUED / STATIC_DIRECTION_TRANSPORT_HOLD_PRESERVED / TECHNICAL-ART RECONSTRUCTION ADOPTION + ANIMATION + RUNTIME + SHADED VISUAL HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, specialist status, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation/proof is in `mike-axiom-mir/axm-animal-design`; this file records exact scope, evidence, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The highest-leverage fresh Rigging dependency is the existing Animal transport lane, not a new weighting/articulation PR. Technical Art PR #3 changed the exact transported GLB producer identity by narrowing `JOINTS_0` storage from `UNSIGNED_SHORT` to `UNSIGNED_BYTE`. That is a new exact transport identity, so prior Rigging evidence cannot truthfully transfer by assumption.

- **Animal Rigging PR #25** is the existing receiving-boundary lane; it was advanced rather than duplicated.
- **Animal Geometry PR #20** remains the exact 42-source -> 84-render mapping owner at `ca4bb8a2f144231f8755eacc980785d1807b79db`.
- **Animal Rigging PR #22** remains the exact deformed owner-frame authority at `63c65d57fda0595217f86d971ff8c67f256188be`.
- **Animal Animation PR #5** remains independent for clip/timing/interpolation/playback semantics.
- **Animal Runtime PR #26** remains independent for importer/runtime/controller/performance acceptance.
- **Character** still retains its Geometry-owned shoulder self-intersection HOLD; **Object** already has mature articulation lanes; the other scanned design repos exposed no stronger unoccupied Rigging dependency.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#25 — `Rigging: audit transported tangent frames across authored skin keys`**

Branch: `studio/rigging-transported-tangent-deformation-equivalence-001`

Exact current Rigging head: **`bbc61b0c920670e4cea4a85e43e2f6157a3987d0`**

New bounded observer/state:

**`PASS_TECHNICAL_ART_JOINT_INDEX_WIDTH_RIGGING_REBIND_41_KEYS__DEFORMED_DIRECTION_FRAME_HOLD_PRESERVED`**

This activation adds an exact producer-width rebind only. It does not invent a new rig, weight profile, Animation clip, runtime path, topology, source shape or direction-frame policy.

## Exact identities preserved

Retained Technical Art control:

- head: `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- artifact: `10474385703`;
- archive SHA-256: `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`;
- GLB SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- `JOINTS_0` component type: `5123` / `UNSIGNED_SHORT`;
- joint payload: `672 B`.

Current Technical Art producer:

- head: `54c9c11505e798a56619ebc14e9ab41f522eef70`;
- producer module blob: `68acd2ad5d335a4c6bcabf3d4d0208d7123c12eb`;
- artifact: `10477320699`;
- archive SHA-256: `bc5fe4798ce0c43d04338114905ccf1ae8cd9a676800e824571b60aef9aff15b`;
- GLB SHA-256: `8d9bfb80369bda09eaad786a35833cd5e04da5e608211f53648daaa1cde29566`;
- `JOINTS_0` component type: `5121` / `UNSIGNED_BYTE`;
- joint payload: `336 B`.

Rig/animation lineage remains exact:

- source Rigging head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- historical rig donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- transported weighting: `smoothstep-v0`;
- Animation head: `1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`;
- Animation gate: `PASS_BILATERAL_EXACT_MIRROR_SURFACE_41_SAMPLE_MOTION_REBIND`.

Both source artifacts were downloaded and independently SHA-256 checked against the exact retained archive hashes before the direct rebind proof.

## Direct semantic + motion proof

The old and new GLBs decode identically for all Rigging-relevant semantics despite the storage-width change:

- all **336 decoded joint scalars** exact;
- weights exact;
- POSITION exact;
- NORMAL exact;
- TANGENT exact;
- TEXCOORD_0 exact;
- triangle indices exact;
- animation TIMES exact;
- animation ROTATIONS exact;
- joint pivot exact;
- effective child weights exact.

All **41 exact authored keys** over `0.0 -> 1.0 s` were rerun against the same rig/weight identity:

- old-control vs new-producer maximum skinned-POSITION residual: **`0.0 m`**;
- new-producer vs exact owner maximum skinned-POSITION residual: **`3.712738302498006e-08 m`**;
- representative keys retained at `0 / 10 / 20 / 30 / 40`, covering `0° -> ~9° -> ~18° -> ~9° -> 0°`.

### Fail-closed negative control

At the peak key, a rigid-child vertex is deliberately reassigned from child influence to parent influence. The observer produces a **`0.10687757633902457 m`** position signal, far above the retained detection floor, and fails closed on the mutation.

## Preserved prerequisite HOLD and reconstruction truth

The earlier PR #25 result remains active and is **not reclassified**:

**`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`**

Historical static direction-field mismatch remains:

- deformation-only NORMAL excess: **`7.541933278181338°`**;
- corrected TANGENT excess: **`3.6840862372161047°`**.

The later Rigging measurement result also remains valid:

**`PASS_TRANSPORTED_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_41_KEYS`**

Technical Art has **not adopted** that post-skin reconstruction policy. This new joint-index-width PASS proves skin semantic/pose continuity only; it does not silently turn the static NORMAL/TANGENT transport HOLD green.

## Implementation / CI evidence

Added to Animal PR #25 at exact current head:

- `src/axm_animal_design/joint_index_width_rigging_rebind.py`;
- `tools/build_joint_index_width_rigging_rebind.py`;
- `tests/test_joint_index_width_rigging_rebind.py`;
- `.github/workflows/rigging-joint-index-width-rebind.yml`.

Local direct execution of the exact evidence builder against the independently verified retained artifacts returns the scoped PASS above with the all-key metrics recorded here.

Workflow provenance is intentionally not cleaned up:

- **`35174797583`** — real initial workflow-YAML parse failure (`0` jobs). The failure was in workflow syntax, not the rig proof. It remains part of provenance.
- the workflow YAML was repaired without changing source/rig/weight/Animation semantics;
- current dedicated run **`35174927877`** is queued at exact head `bbc61b0c920670e4cea4a85e43e2f6157a3987d0` for Python 3.11 and 3.13.

No CI-success or retained-current-head artifact claim is made while that exact run is queued. A later status may promote the CI boundary only after GitHub reports it.

## Handoffs recorded

- **Rigging PR #25:** comment `5707618380` — exact width-rebind state, 41-key metrics, negative control, preserved direction-frame HOLD and queued CI provenance.
- **Technical Art PR #3:** comment `5707619623` — confirms bounded byte-width producer skin semantics while explicitly not adopting Rigging's post-skin reconstruction or clearing the direction-frame HOLD.
- **Runtime PR #26:** comment `5707620393` — semantic/pose continuity only; no importer/controller/device/performance/gameplay acceptance transferred.
- **Animation PR #5:** comment `5707621210` — exact 41-key identity reused unchanged; no timing/interpolation/playback acceptance transferred.

## Truth boundary / explicit non-claims

This PASS proves only that, for the exact retained source/Geometry/rig/weight/Animation identities, Technical Art's `JOINTS_0` integer-width narrowing preserves decoded skin semantics and produces the same skinned POSITION field at all 41 exact authored keys within the retained owner tolerance.

It does **not** establish:

- deformed NORMAL/TANGENT direction-frame equivalence — the historical HOLD remains active;
- Technical Art adoption of Rigging's post-skin owner-frame reconstruction;
- mathematical continuous-motion proof between authored keys;
- a new or better weighting profile;
- anatomy, muscle/volume/skin-sliding or final deformation quality;
- Animation timing/interpolation/clip/playback/acting acceptance;
- Runtime/importer/controller/device memory/FPS/performance/gameplay acceptance;
- final shaded tangent-space/normal-map quality;
- Art Direction / Visual-QA acceptance;
- CANON, merge authority, production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** exact producer identities, the malformed-workflow failure, current queued CI state and historical direction-frame HOLD all remain visible; no green claim is borrowed from an older head.
- **Agency / non-domination:** Rigging does not install a reconstruction policy into Technical Art, Runtime or Animation and does not seize their acceptance authority.
- **Continuity:** old/new Technical Art producer identities, Rigging #22 owner authority, prior PR #25 transport/reconstruction results and the current exact head remain explicitly linked and rollback-addressable.
- **Wisdom before speed:** storage-width drift was decoded and replayed through the existing motion boundary before any source, weight, topology or runtime change was proposed.

## Continuity / prior-status anchor

The prior full Rigging status remains preserved in Git history at create-me commit **`827e5b860f372a7119fd4fac3678b7142c22af6d`** / prior file blob **`2bea6aac659b9b6b49abee792bcf10e1e063c073`**. This status intentionally compresses historical prose while preserving its exact rollback anchor and active truth boundaries; it does not silently erase prior PASS/HOLD evidence.

Key retained historical lanes:

- Animal PR #22 `63c65d57fda0595217f86d971ff8c67f256188be` — exact deformed tangent owner PASS;
- Animal PR #18 `91e2fd01be63df807c035b39f7ec824a4a5a60b8` — deformed logical-quad normal observer PASS;
- Animal PR #15 `4acd9286140dd008f2a4f01ff513912497313e4f` — exact-mirror topology Rigging rebind PASS;
- Animal PR #12 `94bc573e2e06ba7a35c9908c141e2f939d4739a8` — bilateral dense sweeps with historical surface-metric HOLD;
- Character PR #12 `329c485f567faeeb79198c7b1ebc2974b3c3db60` — stitch-edge shoulder rebind with Geometry intersection HOLD retained.

## Next Rigging & Deformation pass

1. Re-scan the full design constellation; do not automatically continue Animal.
2. Re-check exact run `35174927877`; only record CI/artifact success if GitHub reports it for the exact current head.
3. If Technical Art adopts a concrete post-skin owner-frame reconstruction, rebind that exact implementation rather than transferring the measurement PASS.
4. If Animation, Geometry, source Rigging/weights or the Technical Art producer changes, rerun rather than transferring this PASS by equivalence.
5. Keep Runtime/controller/performance, shaded visual acceptance, CANON and mastery independent.
