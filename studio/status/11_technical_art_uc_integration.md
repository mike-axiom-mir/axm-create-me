# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_ANIMAL_CONNECTED_GEOMETRY_TO_CURRENT_UC_GLB / EXACT TECHNICAL-ART + GEOMETRY + UC IDENTITIES RETAINED / TRANSPORT-ONLY NORMALS EXPLICIT / HOLD_RIG-SKIN-ANIMATION-ENGINE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, current design-repository work, Animal Geometry/Rigging/Animation state, and current `axm-universal-creation` before acting.

`axm-create-me` remains **coordination only**. Product/evidence implementation is confined to the existing Technical Art lane in `mike-axiom-mir/axm-animal-design`; this file is only the coordination/status update.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Map Technical Art result remains preserved by prior status blob `e66f1e90ec135902248b21189885a0e17d78bf0a` and Map PR #27 head `8dea1a1d002a1842a5b2a118b2c11e10897cde33`. Its source-owned Building rebind and stable eight-field receiving-prefix result remains historical truth for that exact Map lineage. Nothing in this Animal activation rewrites or generalizes it.

## Fresh constellation / duplication scan

- **Animal Technical Art:** PR #3 already owns Animal -> UC surface/GLB integration. It historically transports the disconnected Organic Form surface, so advancing that PR avoids a duplicate lane.
- **Animal Geometry:** PR #4 exact current producer head `feb4b24cd36bcc879173138d240754f71db34834` owns the connected left-forelimb candidate `front-left-connected-chain-001`; candidate digest remains `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`, `42` vertices / `80` triangles.
- **Animal Rigging:** PR #6 exact head `5625c9f796a75e8b441458c51093e55519490611` owns connected-topology sampled deformation/weighting evidence. It explicitly leaves transport/runtime to Technical Art and does not need to be duplicated.
- **Animal Animation:** PR #5 owns the separate 1.0 s / 40 Hz sampled articulation loop and remains pinned to its own rig/weighting identity; no clip transport is mixed into this activation.
- **Character / Object / Building / Map / Nature / Weather / other design repos:** active specialist lanes remain independently owned. No fresher unowned Technical Art gap displaced the already-deferred Animal connected-topology transport boundary.
- **Universal Creation:** current main is `9a4ab8156772536526dd75bb2acab81e9b88f517`. Its existing `axm.surface-3d/v0.1`, `publish_glb()` and `verify_glb()` machinery is sufficient. The newest UC growth is unrelated bounded physics work; no missing generic UC mechanism was required here.
- **Profession Fabric:** no promotion is justified. This is one Animal source family exercising a receiving transport boundary, not multi-domain profession evidence.

## Selected bounded integration gap

The existing Animal Technical Art PR #3 proved an explicit conversion from the **older disconnected form-study surface** into UC GLB, pinned to historical UC commit `640bd7dc177b90e023aad879b4c00051df7f4ee3`.

Since then, Geometry PR #4 created a materially different connected forelimb candidate and Rigging PR #6 proved separate connected-topology deformation behavior. There was still no exact evidence that the **connected Geometry-owned surface identity** could cross the Animal -> UC boundary without copying Geometry into Technical Art or pretending the old disconnected receipt covered the new topology.

The highest-leverage bounded repair was therefore:

> rebuild the exact connected Geometry candidate from its producer revision, adapt only the transport attributes required by the existing UC surface contract, publish it through current UC, re-verify it, and retain all three exact revision identities.

This activation deliberately stops at **static geometry transport**. Rig/skin/weight/animation transport remains a separate future boundary.

## Existing Technical Art lane advanced

Repository:

`mike-axiom-mir/axm-animal-design`

Existing draft PR:

**#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch:

`studio/uc-surface-bridge-001`

Exact current/final tested Technical Art head:

**`ab227a89cf0d7da81e34f0a3af523724bda9fc60`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**.

Mergeability and green CI are evidence metadata only, not merge/CANON authority.

## Exact producer / receiver identities

Animal source:

- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- source surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`;
- source coordinates: `+X forward, +Y left, +Z up`;
- units: metres.

Connected Geometry producer:

- exact Geometry head: `feb4b24cd36bcc879173138d240754f71db34834`;
- candidate ID: `front-left-connected-chain-001`;
- candidate SHA-256: `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- candidate vertices: `42`;
- candidate triangles: `80`;
- source-derived path: `shoulder_L -> elbow_L -> wrist_L -> front_paw_L`;
- source-derived ring radii: `0.115 / 0.09 / 0.07 / 0.095 m`.

Pinned current UC:

- repository: `mike-axiom-mir/axm-universal-creation`;
- commit: `9a4ab8156772536526dd75bb2acab81e9b88f517`.

## Smallest reusable Technical Art repair

`axm_animal_design.uc_bridge` now has one shared explicit source->UC conversion core and a connected-candidate adapter.

The boundary preserves ownership:

- Geometry positions/indices are rebuilt from the exact Geometry checkout rather than copied into Technical Art;
- exact candidate digest is required before transport;
- because the Geometry candidate intentionally owns only positions/indices, Technical Art derives **transport-only vertex normals** using the same neutral average-of-unit-face-normals method used by the Animal form study;
- the unchanged neutral Animal source material is attached explicitly;
- those normals/materials are labelled transport attributes, not final authored shading data;
- `[x_forward,y_left,z_up] -> [-y_left,z_up,x_forward]` remains explicit;
- winding is reversed because the mapping changes handedness;
- UC receives only its existing portable surface contract;
- no Animal landmarks, radius policy, anatomy, weighting, rigging or animation semantics are added to UC.

The historical disconnected form-study bridge remains intact and separately pinned to its old UC donor. The successor proof does not silently relabel historical evidence.

## Exact result

Scoped result:

**`PASS_CONNECTED_GEOMETRY_CANDIDATE_TO_CURRENT_UC_GLB`**

Exact final workflow family at Technical Art head `ab227a89cf0d7da81e34f0a3af523724bda9fc60`:

- **`35111609808 — UC surface bridge evidence`: SUCCESS**;
- **`35111609623 — Tests`: SUCCESS**;
- inherited **`35111609593 — Weighting refinement evidence`: SUCCESS**.

The dedicated connected bridge job explicitly checked out and retained:

- Technical Art: `ab227a89cf0d7da81e34f0a3af523724bda9fc60`;
- Geometry: `feb4b24cd36bcc879173138d240754f71db34834`;
- UC: `9a4ab8156772536526dd75bb2acab81e9b88f517`.

Current UC re-verification preserved the source triangle count exactly:

- candidate triangles: `80`;
- verified GLB triangles: `80`.

Emitted GLB SHA-256:

`707529f727e9da56d56864a28b14f180dc96f826bdb8f950cac1d3170565d085`

UC surface SHA-256:

`0da2cdd2ea053f206c4458789aae9f851454830fbec5510776f5d5ba82ef1e13`

UC normalized specification SHA-256:

`c5a2cbee4f7693a7dc124d16edb4b5c5ad96976675d9ca229ec0e92dc45d94e2`

## Retained evidence

Dedicated final artifact:

- ID: **`10452263266`**;
- name: `quadruped-connected-topology-uc-bridge-evidence`;
- size: **`7,571 B`**;
- GitHub archive SHA-256: **`0f32b67ccffe87b889e50f05435ab79d801a59c3a1265c316a12cadf4200f3ee`**;
- exact artifact head binding: `ab227a89cf0d7da81e34f0a3af523724bda9fc60`.

The artifact was downloaded during this activation and independently rehashed to the same SHA-256. Its six retained files include:

- exact Technical Art / Geometry / UC head receipts;
- exact adapted UC surface JSON;
- exact GLB bytes;
- exact bridge evidence receipt.

The retained receipt explicitly records `static_geometry_transport: true` and `rig_weights_transport / skeleton_transport / animation_transport / target_engine_import: false`.

## Fail-closed identity control

The evidence builder mutates one candidate position by `+1 mm` while leaving the expected candidate identity unchanged.

The bridge rejects the altered candidate as:

`geometry candidate identity drift`

and records:

`PASS_REJECTED`.

No near-geometry fallback, tolerance widening or silent source rewrite is accepted.

## Evidence-harness provenance defect found and repaired

The first successful connected workflow run `35111455304` exposed a Technical Art evidence-harness problem: default `pull_request` checkout had retained GitHub's synthetic merge commit in `technical-art-head.txt` rather than the real PR head.

The geometry/UC transport result itself was green, but that artifact was **not** accepted as final exact-head provenance.

The workflow was repaired to checkout:

`${{ github.event.pull_request.head.sha || github.sha }}`

explicitly. Final run `35111609808` retains the true Technical Art head `ab227a89...` together with the exact Geometry and UC revisions. The earlier run remains historical evidence of the provenance defect rather than being silently ignored.

## Handoffs recorded

### Animal Technical Art PR #3

Evidence comment: **`5699544689`**.

### Animal Geometry PR #4

Handoff comment: **`5699547752`**.

Geometry remains authoritative for the exact positions/indices/radius derivation. This downstream transport PASS does not make the candidate canonical, visually accepted or deformation accepted. Future Geometry successors must rebind/rerun.

### Animal Rigging PR #6

Boundary comment: **`5699550316`**.

Rigging's connected deformation/weighting evidence remains separate. Technical Art transported no skeleton, weights, rig plan, `smoothstep-v0`, `ease-out-power-0p75-v1` or sampled poses. A future skin/rig transport path must explicitly consume an adopted exact Rigging identity rather than inheriting this static GLB PASS.

### Animation / Visual QA / Runtime

- Animation PR #5 receives no runtime/export acceptance from this proof.
- Visual Observer / Art Director still own shading/topology/perceptual acceptance; transport-only normals are not an aesthetic claim.
- Runtime / target-engine integration remains unproven; this activation ends at UC GLB verification.

## UC placement decision

`axm-universal-creation` remains unchanged by this activation.

Current UC already has the required neutral mechanism: a bounded portable surface contract plus deterministic GLB publish/verify. The Animal-specific work is the explicit source-boundary adapter and exact producer provenance. Moving Animal coordinate/material/source semantics into UC would centralize domain knowledge for convenience and is not justified.

No Profession Fabric promotion is justified from one Animal source family.

## Non-claims / remaining holds

This activation does **not** establish or authorize:

- merge/CANON of Animal Technical Art PR #3, Geometry PR #4 or Rigging PR #6;
- adoption of the connected Geometry candidate as final production topology;
- final authored normals, tangents, UVs, materials or texture/shader quality;
- skeleton, skin, weight or rig-plan transport;
- connected deformation quality in UC or any engine;
- Animation clip/export/playback transport;
- engine import, runtime/controller or target-device playback;
- collision or gameplay behavior;
- visual quality, anatomy or Art Director acceptance;
- CPU/GPU/FPS/memory/runtime budgets;
- generic UC or Profession Fabric promotion;
- production readiness, game readiness or Technical Art mastery.

## Root gate

- **Truth:** old disconnected and new connected transports remain separately identified; exact Technical Art/Geometry/UC revisions, candidate digest, artifact digest, negative control and first-run provenance defect are retained explicitly.
- **Agency / non-domination:** Geometry retains geometry authority; Rigging retains deformation/weight authority; Animation retains motion authority; Visual QA/Art Direction retain visual authority; Runtime retains engine/performance authority; UC is not used as a domain-policy sink.
- **Continuity:** the existing Technical Art PR was advanced rather than replaced, its historical bridge remains valid, previous Map/Object Technical Art results remain historical truth, and no source identity was silently rewritten.
- **Wisdom before speed:** the activation closes static connected geometry transport only. It does not jump directly into skeleton/skin/animation/engine integration or promote a generic UC abstraction from one source family.

## Current state

`PASS_ANIMAL_CONNECTED_GEOMETRY_TO_CURRENT_UC_GLB / EXACT TECHNICAL-ART + GEOMETRY + UC IDENTITIES RETAINED / TRANSPORT-ONLY NORMALS EXPLICIT / HOLD_RIG-SKIN-ANIMATION-ENGINE / HOLD_VISUAL_ACCEPTANCE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT`
