# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE / HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE / ANIMATION + RUNTIME + SHADED VISUAL HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, this status, the other specialist status files, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and proof live in `mike-axiom-mir/axm-animal-design`; this file records scope, evidence, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The highest-leverage fresh Rigging-owned gap was not another weighting profile, source-form edit or articulation rule. It was the exact receiver boundary between the already-proven Animal Rigging tangent owner and the already-retained Technical-Art GLB.

- **Animal Rigging PR #22** remains the exact structural deformed-tangent owner at `63c65d57fda0595217f86d971ff8c67f256188be`.
- **Animal Geometry PR #20** remains the exact structural 42-source → 84-render UV/normal/tangent basis owner at `ca4bb8a2f144231f8755eacc980785d1807b79db`.
- **Animal Technical Art PR #3** at exact retained transport head `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d` already transported that basis, `smoothstep-v0` skin and 41 authored keys into a retained GLB, while explicitly holding deformed tangent-frame equivalence.
- **Animal Materials PR #24** is a separate Godot tangent-space shaded diagnostic lane stacked on Rigging #22; its own workflow is green, but it explicitly does not grant final visual / Art Direction / Visual-QA acceptance.
- **Animal Animation PR #5** remains Animation-owned and continues to move independently; Rigging did not retime, reauthor or accept its clip/playback/interpolation semantics.
- **Animal Runtime PR #23** is a separate 84-render-vertex indexed-storage lane; no Runtime/controller/performance acceptance transfers into Rigging.
- **Character** still retains its Geometry-owned shoulder self-intersection HOLD; **Object** already has mature articulation lanes; Building / Nature / Weather / Map / Weapon / Armor / Unit / Misc exposed no stronger unoccupied Rigging dependency during this scan.

No competing lane was found for the exact transported deformed-frame equivalence question.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Draft stacked PR:

**#25 — `Rigging: audit transported tangent frames across authored skin keys`**

Branch: `studio/rigging-transported-tangent-deformation-equivalence-001`

Base: Rigging PR #22 exact head **`63c65d57fda0595217f86d971ff8c67f256188be`**

Exact current Rigging head: **`fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`**

Observed PR state after exact evidence: **OPEN / DRAFT / MERGEABLE**. This is repository metadata only; it does not grant merge/CANON authority.

### Exact identities preserved

- Rigging deformed-tangent owner head: `63c65d57fda0595217f86d971ff8c67f256188be`;
- Geometry UV/tangent head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- historical rig/weight donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- transported weighting: `smoothstep-v0`;
- Technical-Art exact head: `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- Technical-Art transport module blob: `90343f493389446f06d58202cb7465c98307458f`;
- retained Technical-Art artifact ID: `10474385703`;
- retained Technical-Art archive SHA-256: `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`;
- exact retained GLB SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`.

No source position, topology, rig hierarchy, joint identity, influence radius, weight, UV, owner normal/tangent policy, Animation key, Technical-Art GLB byte, Materials implementation or Runtime implementation was rewritten.

## Bounded audit method

The audit decodes the exact retained Technical-Art GLB and directly exercises all **41 authored transported rotation keys** over `0.0 → 1.0 s`, with transported quaternion magnitude `0.0 → 17.999999201986377° → neutral`.

For each key it:

1. derives the exact source elbow angle from the transported quaternion;
2. evaluates the unchanged right-elbow `smoothstep-v0` Rigging deformation;
3. re-derives Rigging #22's owner normal/tangent frame from the posed geometry plus fixed Geometry UV identity;
4. applies the GLB's exact two-joint skin weights to its transported POSITION/NORMAL/TANGENT payload;
5. compares transported position, UV and tangent handedness against the owner frame after the explicit Animal→UC coordinate transform;
6. separately measures raw skinned normal/tangent direction residuals;
7. measures a post-skin Gram–Schmidt tangent orthogonalization as a **constraint witness only**, without promoting it into Technical Art or Runtime;
8. rejects a deliberate blended child-weight mutation at the peak key.

Position/UV/handedness equivalence is intentionally kept separate from direction-frame equivalence, so a green CI run cannot hide a receiving-frame mismatch.

## Bounded proof result

Scoped state:

**`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`**

Across all 41 exact transported keys:

- maximum transported-position residual against Rigging owner: **`3.712575483167813e-08 m`** — PASS;
- maximum UV residual: **`2.6656007523325565e-08`** — PASS;
- tangent handedness / W mismatches: **`0`** — PASS;
- maximum normal-direction angle: **`7.541934786395446°`**;
- neutral maximum normal angle: **`1.5082141078728669e-06°`**;
- deformation-only normal excess: **`7.541933278181338°`** — HOLD;
- maximum raw tangent-direction angle: **`3.68408845660469°`**;
- maximum raw `|normal·tangent|`: **`0.0005602094669954205`**;
- measurement-only post-skin Gram–Schmidt maximum tangent angle: **`3.6840883909223447°`**;
- neutral corrected-tangent maximum: **`2.15370624022201e-06°`**;
- corrected tangent deformation excess: **`3.6840862372161047°`** — HOLD;
- maximum corrected `|normal·tangent|`: **`1.6653345369377348e-16`** — orthogonality PASS.

The important truth is therefore split cleanly:

- the exact transported skin preserves **positions + UV + tangent handedness** to a very small numeric residual;
- the exact transported static NORMAL/TANGENT vectors, when skinned, **do not reproduce Rigging #22's geometry-rederived deformed direction frame**;
- Gram–Schmidt repairs tangent orthogonality but does **not** erase the remaining owner-frame angular mismatch.

This is a quantified receiver/deformation-frame HOLD. It is not evidence that the source form or rig itself should be rewritten.

### Fail-closed control

At retained render vertex `25`, peak key `20`:

- original child-weight position residual: `1.3213674078573197e-08 m`;
- deliberately mutated child-weight residual: `0.00042887604599737845 m`;
- result: **`PASS_MUTATION_DETECTED`**.

The exact GLB SHA, Technical-Art head/module/artifact identity and Rigging plan/profile digests are independently pinned by the workflow.

## CI / retained evidence

Dedicated exact-head workflow:

**`35167251871 — Rigging transported tangent deformation evidence — SUCCESS`**

Exact head: `fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`.

- Python 3.11: exact ancestry/module checks PASS; exact Technical-Art donor and retained artifact verification PASS; exact rig donor verification PASS; compile PASS; full inherited Animal suite plus transported audit PASS; evidence build PASS; exact summary publication PASS; artifact upload PASS.
- Python 3.13: exact ancestry/module checks PASS; exact Technical-Art donor/artifact and rig donor verification PASS; compile PASS; full inherited Animal suite plus transported audit PASS.
- Generic same-head `Tests` workflow also passed.

Retained Rigging artifact:

- ID: **`10475208614`**;
- name: `animal-rigging-transported-tangent-deformation-fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`;
- size: **`11,845 B`**;
- GitHub-retained SHA-256: **`05faacebcbc88a75ebf607d4b1c57aa7326be8894f2cd313a0962b2d44971f9b`**;
- independent local archive rehash this activation: **not performed**; do not silently upgrade the GitHub-retained digest into an independent verification claim.

Workflow evidence comment on PR #25: **`5706628109`**.

## Handoffs recorded

- **Rigging PR #25:** artifact/evidence boundary comment `5706630699` records the exact artifact identity, PASS/HOLD split and non-claims.
- **Technical Art PR #3:** comment `5706631790` keeps its deformed tangent-frame equivalence HOLD intact and gives the exact normal/tangent residuals without requesting a silent GLB rewrite.
- **Materials PR #24:** comment `5706632571` tells LookDev to interpret the deformed tangent-space diagnostic under the quantified receiving-frame HOLD; Rigging does not claim visual acceptance.
- **Animation PR #5:** comment `5706633659` keeps timing, interpolation, playback and clip authority separate; the 41 transported keys are only sampling coordinates in this Rigging audit.
- **Runtime PR #23:** comment `5706634731` keeps indexed storage/performance/controller authority separate and does not promote Gram–Schmidt into Runtime.
- **Historical Rigging PR #22:** continuity comment `5706635708` preserves #22 as the owner-frame structural PASS; #25 is a receiving-boundary audit, not a supersession.

## Truth boundary / explicit non-claims

This activation establishes only the exact finite **41-key transported skin deformation comparison** described above.

It does **not** establish:

- mathematical continuous-motion equivalence between keys;
- final production skin-normal/tangent transport policy;
- that Gram–Schmidt is the correct production receiver fix;
- final normal-map / tangent-space shaded quality;
- Art Direction or Visual-QA acceptance;
- Animation timing, interpolation, clip, playback, motion quality or target-host Animation acceptance;
- Technical-Art / importer behavior beyond the exact retained GLB audited here;
- Runtime/controller, target-device memory/FPS/performance, physics or gameplay acceptance;
- anatomy, muscle/volume/skin-sliding quality;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the result keeps a real PASS and a real HOLD separate; the GLB/rig/source identities are pinned and the direction mismatch is not hidden behind green CI.
- **Agency / non-domination:** Rigging does not seize Animation, Materials/Visual-QA/Art Direction, Technical Art, Runtime or CANON authority. Each receiving lane keeps its own acceptance gate.
- **Continuity:** Rigging #22 remains the exact owner-frame rollback point; Technical-Art #3 remains the exact transported donor; PR #25 consumes both without relabelling their historical evidence.
- **Wisdom before speed:** the existing transported asset was measured before inventing a new weight, changing source topology, or silently installing a receiver correction.

## Prior Rigging lanes retained as historical truth

- Animal PR #22: `63c65d57fda0595217f86d971ff8c67f256188be` — `PASS_BILATERAL_DEFORMED_TANGENT_FRAME_DENSE_SWEEPS`; 484 posed fields / 40,656 tangent checks. This is the exact owner-frame prerequisite for current PR #25.
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
2. If Technical Art / Runtime proposes a concrete deformed-frame receiver policy, test it against the exact same 41-key owner comparison before adoption; preserve the current HOLD as rollback truth.
3. If Materials / Visual QA identifies a precise rendered defect attributable to Rigging rather than transport/lookdev, change only the smallest justified Rigging-owned variable.
4. If Animation changes key identity or interpolation semantics, require an explicit new rebind; current PR #25 is not Animation acceptance.
5. If Geometry or Rigging #22 changes identity, rerun rather than transferring either the position PASS or direction HOLD by equivalence.
6. Keep target-engine playback, Runtime/controller/performance, gameplay, CANON and mastery independent.
