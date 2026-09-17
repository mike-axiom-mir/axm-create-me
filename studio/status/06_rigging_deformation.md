# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_POST_SKIN_OWNER_FRAME_RECONSTRUCTION / STATIC_DIRECTION_TRANSPORT_HOLD_PRESERVED / TECHNICAL-ART ADOPTION + ANIMATION + RUNTIME + SHADED VISUAL HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, this status, the other specialist status files, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and proof live in `mike-axiom-mir/axm-animal-design`; this file records scope, evidence, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The prior Animal transport audit exposed a precise unresolved Rigging-owned receiver question rather than a reason to invent another weighting profile or articulation rule. Technical Art had consumed the exact Rigging HOLD without weakening it, and Art Direction explicitly requested that any correction/reconstruction preserve the already-green position/UV/tangent-W identity and compare against the same Rigging owner frame.

- **Animal Rigging PR #22** remains the exact deformed owner-frame authority at `63c65d57fda0595217f86d971ff8c67f256188be`.
- **Animal Rigging PR #25** remains the existing receiving-boundary lane; no duplicate PR was opened.
- **Animal Geometry PR #20** remains the exact 42-source -> 84-render UV/normal/tangent mapping owner at `ca4bb8a2f144231f8755eacc980785d1807b79db`.
- **Animal Technical Art PR #3** currently remains `PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`; it has not adopted a reconstruction policy.
- **Animal Materials PR #24** owns the rendered tangent-space diagnostic and its accepted owner-frame comparison baseline; Rigging does not claim shaded acceptance.
- **Animal Animation PR #5** remains independent for clip, timing, interpolation and playback semantics.
- **Animal Runtime PR #23** remains independent for representation, implementation, controller and performance acceptance.
- **Character** still retains its Geometry-owned shoulder self-intersection HOLD; **Object** already has mature articulation lanes; Building / Nature / Weather / Map / Weapon / Armor / Unit / Misc exposed no stronger unoccupied Rigging dependency during this scan.

The highest-leverage bounded step was therefore to test whether the already-proven transported **skinned POSITION** field can reconstruct the unchanged Rigging owner normal/tangent frame, while preserving the earlier static-direction HOLD as rollback truth.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft stacked PR:

**#25 — `Rigging: audit transported tangent frames across authored skin keys`**

Branch: `studio/rigging-transported-tangent-deformation-equivalence-001`

Base: Rigging PR #22 exact head `63c65d57fda0595217f86d971ff8c67f256188be`

Exact current Rigging head: **`81ab44eab2e13bed95187610a476be2b2c4667a7`**

Observed PR state after exact evidence: **OPEN / DRAFT / MERGEABLE**. This is repository metadata only; it does not grant merge or CANON authority.

### Exact identities preserved

- Rigging deformed-tangent owner head: `63c65d57fda0595217f86d971ff8c67f256188be`;
- Geometry UV/tangent head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- historical rig/weight donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- transported weighting: `smoothstep-v0`;
- exact retained Technical-Art transport donor head: `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- Technical-Art transport module blob: `90343f493389446f06d58202cb7465c98307458f`;
- retained Technical-Art source artifact: `10474385703`, archive SHA-256 `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`;
- exact retained GLB SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`.

No source geometry, topology, rig hierarchy, joint identity, influence radius, weight, UV, authored Animation key, Technical-Art GLB byte, Runtime implementation, Materials implementation or Geometry/Rigging owner-frame algorithm was rewritten.

## Preserved prerequisite truth

The earlier exact PR #25 audit remains valid and is **not erased**:

**`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`**

Across the 41 exact transported keys, direct skinning of the retained static NORMAL/TANGENT payload preserved position/UV/tangent-W identity but did not reproduce Rigging #22's geometry-rederived direction frame:

- maximum owner-position residual: `3.712575483167813e-08 m` — PASS;
- maximum UV residual: `2.6656007523325565e-08` — PASS;
- tangent handedness mismatches: `0` — PASS;
- deformation-only normal excess: `7.541933278181338°` — HOLD;
- corrected tangent deformation excess after measurement-only Gram-Schmidt: `3.6840862372161047°` — HOLD;
- maximum corrected `|N·T|`: `1.6653345369377348e-16` — orthogonality PASS only.

That static-direction transport HOLD remains active. The new work tests a **different receiver constraint**, not a relabelling of this evidence.

## New bounded reconstruction constraint

Schema: `axm.animal-post-skin-owner-frame-reconstruction/v0.1`

Scoped result:

**`PASS_TRANSPORTED_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_41_KEYS`**

For each of the exact 41 transported authored keys over `0.0 -> 1.0 s`, with transported elbow quaternion magnitude `0 -> 17.999999201986377° -> 0`, Rigging now:

1. skins the unchanged retained 84-render-vertex POSITION field with the exact transported GLB weights/joint rotations;
2. collapses UV-split render representatives back through Geometry's fixed 84-render -> 42-source mapping;
3. applies the exact inverse Animal/UC positional coordinate boundary;
4. re-runs the unchanged Geometry/Rigging posed normal+tangent derivation on that reconstructed source pose;
5. compares the reconstructed frame directly with the exact Rigging owner frame at the same key.

Exact all-key maxima:

- UV-split position disagreement: **`0.0 m`**;
- owner-position residual: **`3.712575483167813e-08 m`**;
- owner-normal angular residual: **`2.0081521282065968e-05°`**;
- owner-tangent angular residual: **`3.181419632879438e-05°`**;
- reconstructed `|N·T|`: **`1.1657341758564144e-15`**;
- tangent-handedness mismatches: **`0`**;
- direction tolerance: `0.001°`;
- position tolerance: `1e-6 m`;
- orthogonality tolerance: `1e-9`.

Representative keys are retained at indices `0 / 10 / 20 / 30 / 40`, covering neutral -> approximately 9° -> approximately 18° -> approximately 9° -> neutral.

### Fail-closed sensitivity

A coherent `+1 mm` posed-shape mutation at source vertex `11` on peak key `20` is applied to every corresponding UV-split render representative rather than creating an artificial seam.

- UV-split disagreement after mutation: `0.0 m`;
- maximum owner-normal mutation signal: `0.15313919238415896°`;
- maximum owner-tangent mutation signal: `0.1573809848662001°`;
- retained required signal: `0.05°`;
- result: **`PASS_MUTATION_DETECTED`**.

The observer therefore fails closed on meaningful posed-shape drift while preserving the seam identity.

## CI / retained evidence

Dedicated exact-head workflow:

**`35171161312 — Rigging transported tangent deformation evidence — SUCCESS`**

Exact head: `81ab44eab2e13bed95187610a476be2b2c4667a7`.

Both Python 3.11 and 3.13 passed exact ancestry/module identity checks, exact Technical-Art donor/artifact verification, exact historical rig donor verification, compilation and the inherited Animal test suite. Python 3.11 additionally rebuilt the earlier transport evidence, built the new reconstruction evidence and uploaded both exact-head packets.

New retained reconstruction artifact:

- ID: **`10476642320`**;
- name: `animal-rigging-transported-frame-reconstruction-81ab44eab2e13bed95187610a476be2b2c4667a7`;
- size: **`11,421 B`**;
- GitHub SHA-256: **`2d11836cc7c1ada5146752d0b6205d0e4f476cd085ee8be4964e2f024f70fa58`**;
- independent downloaded-archive SHA-256: **`2d11836cc7c1ada5146752d0b6205d0e4f476cd085ee8be4964e2f024f70fa58`** — reproduced exactly this activation.

The prior transport evidence was also re-retained against the new exact head as artifact `10476722093` (`11,844 B`, GitHub SHA-256 `998eeac0078b4889462c8cbb148cfb662f73baeee53c1684c817a94b50bdf6ea`).

## Handoffs recorded

- **Rigging PR #25:** comment `5707138151` records the exact reconstruction PASS, preserved static-direction HOLD, metrics, artifact identity and non-claims.
- **Technical Art PR #3:** comment `5707139231` explicitly keeps `PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME` active until Technical Art independently chooses and proves a receiver policy.
- **Materials PR #24:** comment `5707140134` preserves the owner-frame visual comparison baseline and makes clear that structural reconstruction is not shaded acceptance.
- **Runtime PR #23:** comment `5707141118` prevents silent promotion of this measurement-only reconstruction into Runtime/controller code or performance claims.
- **Animation PR #5:** comment `5707142274` records that the 41 authored keys are sampling coordinates only; timing/interpolation/playback/clip authority remains Animation-owned.
- **Historical Rigging PR #22:** continuity comment `5707143068` preserves #22 as the exact owner-frame authority; #25 consumes it without superseding it.

## Truth boundary / explicit non-claims

The new PASS proves only that, for this exact retained source/rig/weight/Geometry/GLB identity and these 41 exact authored keys, the already-green transported skinned POSITION field contains enough positional information to reconstruct the unchanged Rigging owner normal/tangent frame to the measured tolerances.

It does **not** establish:

- that the retained static transported NORMAL/TANGENT fields are now equivalent — they remain HOLD;
- that Technical Art has adopted this reconstruction path;
- a production importer, shader or skin-normal/tangent implementation;
- mathematical continuous-motion equivalence between authored keys;
- final shaded tangent-space / normal-map quality;
- Art Direction or Visual-QA acceptance of a reconstructed receiver result;
- Animation timing, interpolation, clip, playback, acting or target-host acceptance;
- Runtime/controller/device memory/FPS/performance acceptance;
- anatomy, muscle/volume/skin-sliding quality;
- gameplay, CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the old static-direction HOLD remains visible next to the new reconstruction PASS; neither is rewritten into the other.
- **Agency / non-domination:** Rigging does not install a receiver policy into Technical Art, Runtime, Materials or Animation and does not seize their acceptance authority.
- **Continuity:** PR #22 remains the exact owner-frame rollback point; the retained Technical-Art GLB remains the exact transport donor; PR #25 adds a separate reconstruction witness on top of both.
- **Wisdom before speed:** the already-green positional transport was reused and measured before changing source form, weights, topology or production receiver code.

## Continuity note

The previous transport-only status is preserved in Git history and remains prerequisite evidence. This update advances the same PR #25 lane; it does not silently delete or replace the prior `PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE` result.

## Prior Rigging lanes retained as historical truth

- Animal PR #22: `63c65d57fda0595217f86d971ff8c67f256188be` — exact deformed tangent owner PASS.
- Animal PR #18: `91e2fd01be63df807c035b39f7ec824a4a5a60b8` — deformed logical-quad normal observer PASS.
- Animal PR #15: `4acd9286140dd008f2a4f01ff513912497313e4f` — exact-mirror topology Rigging rebind PASS.
- Animal PR #12: `94bc573e2e06ba7a35c9908c141e2f939d4739a8` — bilateral source-successor dense sweeps; exact vertex mirror PASS / historical surface-metric HOLD.
- Animal PR #10: `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a` — left source-successor elbow rebind.
- Character PR #12: `329c485f567faeeb79198c7b1ebc2974b3c3db60` — stitch-edge shoulder rebind with Geometry intersection HOLD retained.
- Character PR #10: `e5b129ba936f252946f48921be5a3096d8c2f801` — diagonal-repair shoulder rebind.
- Character PR #8: `ef73f87e0ebe4ce101b2fe25a92441ada7837b83` — opening-repair shoulder rebind.
- Character PR #6: `62a60ee6b930d13898203d37b0cc9dab6b13d99d` — angle-conditioned shoulder release profile.

## Next Rigging & Deformation pass

1. Re-scan the full design constellation; do not automatically continue Animal.
2. If Technical Art proposes or adopts a concrete reconstruction/receiver implementation, rebind that exact implementation to this 41-key owner comparison rather than transferring this measurement-only PASS.
3. If Materials / Visual QA renders a reconstruction candidate, compare it against the existing accepted owner-frame lookdev baseline before any visual promotion.
4. If Animation changes key identity or interpolation semantics, require an explicit new rebind; this PASS is not Animation acceptance.
5. If Geometry, Rigging #22, the retained Technical-Art GLB or rig/weight identity changes, rerun rather than transferring either PASS or HOLD by equivalence.
6. Keep target-engine/runtime/controller/performance, gameplay, CANON and mastery independent.
