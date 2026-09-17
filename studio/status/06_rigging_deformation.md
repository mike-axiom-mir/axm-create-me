# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_RUNTIME_U16_WEIGHT_CANDIDATE_RIGGING_DEFORMATION_REBIND_41_KEYS / CI_PASS / STATIC_DIRECTION_TRANSPORT_HOLD_PRESERVED / TECHNICAL-ART + ANIMATION + RUNTIME + SHADED VISUAL ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the current specialist status set, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and proof remain in `mike-axiom-mir/axm-animal-design`; this file records exact scope, evidence, holds and handoffs only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The highest-leverage fresh Rigging dependency was the already-open Animal transport lane, not a new weighting or articulation branch. Runtime PR #27 introduced an exact normalized-`UNSIGNED_SHORT` `WEIGHTS_0` candidate from the Technical Art producer. That changes stored weights while intentionally preserving the same decoded weighting semantics, so Rigging needed to bound the resulting deformation rather than inherit prior transport evidence by assumption.

- **Animal Rigging PR #25** remains the single receiving-boundary lane and was advanced rather than duplicated.
- **Animal Geometry PR #20** remains the exact 42-source -> 84-render mapping owner at `ca4bb8a2f144231f8755eacc980785d1807b79db`.
- **Animal Rigging PR #22** remains the exact deformed owner-frame authority at `63c65d57fda0595217f86d971ff8c67f256188be`.
- **Animal Animation PR #5** remains independent for clip/timing/interpolation/playback acceptance.
- Runtime owns the weight-storage candidate and runtime/performance decision; Technical Art owns producer adoption; Visual QA / Art Direction own the visible pixel tradeoff.
- **Character** still retains its Geometry-owned shoulder self-intersection HOLD; **Object** already has mature articulation lanes; the other scanned design repos exposed no stronger unoccupied Rigging dependency.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#25 — `Rigging: audit transported tangent frames across authored skin keys`**

Branch: `studio/rigging-transported-tangent-deformation-equivalence-001`

Exact current Rigging head: **`e4ce8c1f4c3deb55220cf962206d51013d0cfe73`**

PR state at this head: **open / draft / mergeable**.

New bounded observer/state:

**`PASS_RUNTIME_U16_WEIGHT_CANDIDATE_RIGGING_DEFORMATION_REBIND_41_KEYS__STATIC_DIRECTION_FRAME_HOLD_PRESERVED`**

This activation adds a weight-storage deformation rebind only. It does not invent a new rig, change the weighting rule, alter source geometry/topology, rewrite Animation, adopt a Technical Art producer policy, or claim Runtime acceptance.

## Exact identities preserved

Runtime candidate authority:

- Runtime head: `e7874c4a8dca1db48bc66f3546c2134f7d724456`;
- retained Runtime artifact: `10477292250`;
- independently checked archive SHA-256: `76455589e0dde3327f72ebff6a117a2ce12ff57edaaf1d0e61304056d03063c3`;
- FLOAT32 control GLB SHA-256: `8d9bfb80369bda09eaad786a35833cd5e04da5e608211f53648daaa1cde29566`;
- normalized-u16 candidate GLB SHA-256: `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`.

Technical Art producer authority:

- Technical Art head: `54c9c11505e798a56619ebc14e9ab41f522eef70`;
- retained producer artifact: `10477320699`;
- independently checked archive SHA-256: `bc5fe4798ce0c43d04338114905ccf1ae8cd9a676800e824571b60aef9aff15b`.

Rig / source lineage remains exact:

- source Rigging head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- historical rig donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan SHA-256: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- transported weighting ID: `smoothstep-v0`;
- Geometry head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- exact transported Animation source head: `1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`;
- retained authored key count: `41`.

The candidate differs from the FLOAT control only in `WEIGHTS_0` representation: FLOAT32 -> normalized `UNSIGNED_SHORT`. POSITION, NORMAL, TANGENT, TEXCOORD_0, JOINTS_0, triangle indices, joint nodes/skin, animation times and animation rotations remain exact between the two decoded inputs.

## Weight + deformation proof

The exact candidate's maximum decoded weight-slot error is:

- **`6.656398159820068e-06`**, below the exact normalized-u16 single-slot bound `1/65535 = 1.5259021896696422e-05`.

The existing rig was replayed over all **41 exact authored keys** and all **84 render vertices**:

- **3,444 posed vertex comparisons**;
- maximum FLOAT-control vs normalized-u16 candidate skinned-POSITION delta: **`1.4897262690003554e-07 m`**;
- retained Rigging deformation bound: **`2e-07 m`**;
- maximum temporal mirror residual of the candidate/control position delta: **`0.0 m`**.

Representative motion boundary:

- key 0 / `0.00 s` / `0°`: `1.1102230246251565e-16 m`;
- key 10 / `0.25 s` / `~9.000000603°`: `7.471664821276449e-08 m`;
- key 20 / `0.50 s` / `~17.999999202°`: **`1.4897262690003554e-07 m`**;
- key 30 / `0.75 s` / `~9.000000603°`: `7.471664821276449e-08 m`;
- key 40 / `1.00 s` / `0°`: `1.1102230246251565e-16 m`.

This is a finite authored-key proof, not mathematical continuous-motion proof between keys.

### Fail-closed negative control

At the peak authored key, one blended child weight is deliberately shifted by **64 normalized-u16 steps**. The observer produces a **`2.704031056959096e-05 m`** position signal, above the retained `1e-05 m` detection floor, so the observer fails closed on materially larger weight drift.

## Preserved direction-frame HOLD

The earlier PR #25 direction-field boundary remains active and is **not reclassified**:

**`HOLD_DEFORMED_STATIC_NORMAL_TANGENT_TRANSPORT_EQUIVALENCE`**

Historical mismatch remains:

- deformation-only NORMAL excess: **`7.541933278181338°`**;
- corrected TANGENT excess: **`3.6840862372161047°`**.

The separate Rigging measurement result `PASS_TRANSPORTED_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_41_KEYS` also remains separate. Technical Art has not silently adopted that reconstruction policy.

## CI / retained evidence

New dedicated workflow:

- `.github/workflows/rigging-normalized-u16-weight-rebind.yml`;
- exact workflow run: **`35178277752`**;
- Python **3.11 success**: full Animal regression suite + exact normalized-u16 deformation observer + evidence build/upload;
- Python **3.13 success**: full Animal regression suite;
- exact-head evidence artifact: **`10478912800`**;
- artifact size: **`1,953 B`**;
- GitHub artifact SHA-256: **`99a48f48fe1a9c622f1f46a27370a7239df7e17a8dcf9d1c9eb0b32f6a57a088`**;
- independently downloaded/rehashed artifact SHA-256: **`99a48f48fe1a9c622f1f46a27370a7239df7e17a8dcf9d1c9eb0b32f6a57a088`**.

The artifact contains `exact-head.txt`, `receipt.json`, and `summary.txt`, all bound to `e4ce8c1f4c3deb55220cf962206d51013d0cfe73`.

### Prior JOINT-index rebind CI closure

The previous JOINTS_0 width rebind is no longer queued:

- exact run `35174927877`: **completed / success** at `bbc61b0c920670e4cea4a85e43e2f6157a3987d0`;
- exact retained artifact `10477999236`;
- artifact SHA-256 `598f24c1bb90eacd78045c373537520f33de2cb03e31f1a6dccbeda16ff2ac0b`.

Its earlier real malformed-workflow provenance remains preserved in Git history; no failed evidence was silently erased.

## Handoffs

Rigging result to hand off:

- **Rigging PR #25:** normalized-u16 storage is now bounded against the exact existing deformation over all 41 authored keys; source/rig/weight identity is unchanged and the static direction-frame HOLD remains.
- **Technical Art PR #3:** this is deformation evidence for the Runtime candidate only; it does not grant producer adoption or adopt the post-skin reconstruction policy.
- **Runtime PR #27:** the candidate's weight quantization stays inside the scoped Rigging position bound; Runtime/importer/controller/performance acceptance remains Runtime-owned.
- **Animation PR #5:** the exact 41 source keys are observation points only; no timing/interpolation/playback/acting acceptance transfers.
- **Visual QA / Art Direction:** the previously observed bounded pixel difference from the normalized-weight candidate remains their acceptance boundary; structural Rigging PASS does not decide visible-quality acceptance.

## Truth boundary / explicit non-claims

This PASS proves only that the exact Runtime normalized-u16 `WEIGHTS_0` candidate, decoded against the exact retained Technical Art producer and existing Rigging identity, keeps skinned POSITION within `2e-07 m` of the FLOAT control at the 41 authored keys.

It does **not** establish:

- deformed NORMAL/TANGENT transport equivalence;
- a new or better weighting profile;
- continuous real-angle deformation proof;
- anatomy, muscle/volume preservation, skin sliding, or final deformation quality;
- Technical Art producer adoption;
- Animation timing/interpolation/clip/playback/acting acceptance;
- Runtime/importer/controller/device memory/FPS/performance/gameplay acceptance;
- final shaded tangent-space/normal-map quality;
- Art Direction / Visual-QA acceptance;
- CANON, production readiness, game readiness, or Rigging mastery.

## Four-root gate

- **Truth:** exact source/artifact hashes, finite-key scope, quantization residual, negative control, previous JOINT-width CI closure, and the historical direction-frame HOLD remain explicit.
- **Agency / non-domination:** Rigging does not install the candidate into Technical Art/Runtime, alter Animation, or seize visual-acceptance authority.
- **Continuity:** Runtime candidate, Technical Art producer, Geometry owner, Rigging donor/plan, exact Animation source and prior PR #25 evidence remain linked and rollback-addressable.
- **Wisdom before speed:** the storage optimization is measured through the existing deformation before adoption rather than treated as harmless because the decoded numbers look close.

## Continuity / rollback anchors

Immediate prior Rigging head: **`bbc61b0c920670e4cea4a85e43e2f6157a3987d0`**.

Prior create-me status commit: **`18d397d7b8df6f018eff1d6703a62c60f6d7e0c4`** / prior status blob **`9874aa0b3105ececcb50ac82245cf08c67208c9d`**.

Key retained historical lanes:

- Animal PR #22 `63c65d57fda0595217f86d971ff8c67f256188be` — exact deformed tangent owner PASS;
- Animal PR #18 `91e2fd01be63df807c035b39f7ec824a4a5a60b8` — deformed logical-quad normal observer PASS;
- Animal PR #15 `4acd9286140dd008f2a4f01ff513912497313e4f` — exact-mirror topology Rigging rebind PASS;
- Animal PR #12 `94bc573e2e06ba7a35c9908c141e2f939d4739a8` — bilateral dense sweeps with historical surface-metric HOLD;
- Character PR #12 `329c485f567faeeb79198c7b1ebc2974b3c3db60` — stitch-edge shoulder rebind with Geometry intersection HOLD retained.

## Next Rigging & Deformation pass

1. Re-scan the full design constellation; do not automatically continue Animal.
2. If Runtime, Technical Art, source Geometry/Rigging/weights, or Animation identity changes, rebind the exact successor rather than transferring this PASS by equivalence.
3. If Technical Art adopts a concrete post-skin owner-frame reconstruction, audit that exact implementation separately.
4. Keep Runtime/controller/performance, Animation, shaded visual acceptance, CANON and mastery independent.
