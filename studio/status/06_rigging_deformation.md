# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_BILATERAL_EXACT_MIRROR_SURFACE_RIGGING_REBIND_DENSE_SWEEPS / EXACT_VERTEX + SURFACE MIRROR PASS / ANIMATION + VISUAL + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, current specialist status, newest design-repository PRs and the active Animal dependency chain before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation is in `mike-axiom-mir/axm-animal-design`; this file records scope, exact identities, evidence, failures, holds and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The strongest fresh Rigging handoff was Animal Geometry PR #13, not a new weighting experiment or another Character pass.

- **Animal Geometry PR #13** created an exact reflected right-side triangle-connectivity identity while preserving source positions and explicitly required a fresh Rigging rebind before deformation acceptance could transfer.
- **Animal Materials PR #14** already owns normal/tangent/shading and visual consequences of the topology change, so Rigging did not duplicate that lane.
- **Character** still has separate topology/collision history and no stronger fresh Rigging-owned dependency than this exact Animal handoff.
- **Other design repos / UC / Profession Fabric** did not justify moving Animal-specific rig semantics or opening a duplicate articulation lane.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Draft stacked PR:

**#15 — `Rigging: rebind bilateral elbow to exact mirror-surface topology`**

Branch: `studio/rigging-bilateral-mirror-surface-rebind-001`

Base: Geometry PR #13 exact head **`bdbb51303bd1b96866b06a71730ccc328bf4f2f6`**

Exact current Rigging head: **`4acd9286140dd008f2a4f01ff513912497313e4f`**

Observed PR state after evidence publication: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only; it is not merge/CANON authority.

## Why this was highest leverage

Previous bilateral Rigging PR #12 directly proved both elbow successors through 484 discrete poses, but correctly held exact mirrored **surface** deformation metrics because the accepted right triangle connectivity was not the reflected counterpart of the left surface. Geometry PR #13 now owns a distinct topology identity that closes that correspondence gap without moving source vertices or changing rig semantics.

The smallest truthful Rigging action was therefore to reuse the exact historical rig and weighting profile unchanged, consume Geometry #13 unchanged, rerun both sides directly, and ask whether the previous surface-metric HOLD closes on this exact topology. No source, topology, joint, influence radius, weighting function or pose rule was changed by Rigging.

## Exact source / rig identity preserved

Pinned lineage and contracts:

- bilateral Organic source head: `4df3024b4c459675422565501a46f622acf229a9`;
- previous bilateral Rigging head: `94bc573e2e06ba7a35c9908c141e2f939d4739a8`;
- Geometry exact-mirror surface head: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- exact rig-plan + weighting-profile donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- baseline weighting: `smoothstep-v0`;
- refined weighting: `ease-out-power-0p75-v1`, exponent `0.75`;
- joints: `front-elbow-L` and `front-elbow-R`;
- exact influence radius: `0.11 m`;
- dense tested envelope: every integer degree from `-60°` through `+60°`.

A weighting mutation `0.75 -> 0.74` fails closed as **`HOLD_WEIGHTING_PROFILE_IDENTITY_DRIFT`**.

## Bounded proof

Direct evidence reruns:

- left + right;
- both exact weighting profiles;
- `121` samples per side/profile;
- **`484` direct structural pose observations total**;
- representative retained OBJ poses at `-60/-30/0/+30/+60°` for both sides and both profiles.

Each side/profile retains the existing dense structural gate and the historical weighting-refinement boundary gate. The scoped result is:

**`PASS_BILATERAL_EXACT_MIRROR_SURFACE_RIGGING_REBIND_DENSE_SWEEPS`**

### Exact bilateral result

For both `smoothstep-v0` and `ease-out-power-0p75-v1` across all 121 same-angle comparisons:

- maximum mirrored posed-vertex residual: **`0.0 m`**;
- maximum residual across retained minimum/maximum triangle-area ratios and minimum/maximum edge-length ratios: **`0.0`**;
- exact mirror tolerance: `1e-9`.

Therefore this exact Geometry topology closes the previous Rigging surface-metric mirror HOLD without changing the rig or weighting profile.

### Historical-topology negative control

The evidence builder restores the previous right triangle connectivity while keeping the same source positions, rig and weights. It must reproduce the old HOLD rather than silently pass:

- mirrored posed-vertex residual remains `0.0 m`;
- `smoothstep-v0` maximum structural-metric residual: **`0.03453888088415491`**;
- `ease-out-power-0p75-v1` maximum structural-metric residual: **`0.05310184507035559`**;
- both fail the exact mirrored surface gate as expected.

This negative control preserves causality: the new PASS belongs to Geometry #13's exact topology identity, not to a weakened tolerance or silently changed rig.

## CI / retained failure / repair

Current exact head `4acd9286140dd008f2a4f01ff513912497313e4f` is green across all observed pull-request workflows, including:

- **`35152630847` — Rigging bilateral mirror-surface rebind evidence — SUCCESS** on Python 3.11 and 3.13;
- **`35152630779` — Tests — SUCCESS**;
- **`35152630832` — Geometry bilateral mirror-surface topology evidence — SUCCESS**;
- previous bilateral Rigging, topology, Organic, connected-chain and self-intersection workflows observed on the same head are also green.

The dedicated workflow ran **48 tests** on Python 3.11 and passed all 48 before building retained evidence.

An earlier head had one real generic `Tests` discovery failure because the new test file did not insert the repository `src` directory before importing `axm_animal_design`. That integration error was repaired by adding the same local test-path setup used by the repository's existing tests. No source geometry, rig, weighting, pose semantics or deformation gate changed. The failed run remains historical Actions evidence rather than being erased.

## Retained artifact

- artifact ID: **`10469079843`**;
- name: `animal-rigging-bilateral-mirror-surface-rebind-4acd9286140dd008f2a4f01ff513912497313e4f`;
- size: **`43,877 B`**;
- files uploaded: **`29`**;
- exact head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- GitHub SHA-256: **`2a1bc366b4c995ed5ed60f0acb63e462df1911621b2e622f871b1cc9386fadb9`**;
- independently downloaded and rehashed in this activation: **same SHA-256**.

The retained packet contains machine-readable lineage/evidence, the exact donor rig plan and weighting profile, Geometry prerequisite evidence, negative controls, and representative structural OBJ specimens.

## Handoffs recorded

- **Rigging PR #15:** evidence comment `5704810583` records exact current head, 484-pose result, closed surface mirror HOLD, CI, artifact, identity controls and non-claims.
- **Geometry PR #13:** comment `5704811782` records that the unchanged rig/profile now mirrors both posed vertices and retained surface metrics exactly on Geometry's new topology; no merge request or authority transfer is implied.
- **Materials PR #14:** comment `5704813382` explicitly preserves Materials / Visual QA / Art Direction authority over normals, tangent-space shading and visual read.
- **Animation PR #5:** comment `5704814503` requires an explicit clip/interpolation/timing/playback rebind to the exact source + Geometry #13 + Rigging #15 chain before any Animation acceptance claim.
- **Historical Rigging PR #12:** comment `5704815720` preserves the old surface-metric HOLD as exact truth for its historical topology and records why the successor differs.

## Truth boundary / explicit non-claims

This activation proves only a **bounded discrete structural Rigging rebind** of the existing exact Animal elbow rig and weights onto Geometry PR #13's exact mirror-surface topology.

It does **not** establish:

- mathematical continuous safety for every real-valued intermediate angle;
- anatomy, muscle behavior, volume preservation, skin sliding or production skin quality;
- final visual deformation or shading quality;
- Animation timing, interpolation, clip, playback or motion acceptance;
- exported skeleton/skin or engine/controller support;
- runtime/target-device playback, memory, FPS or performance acceptance;
- gameplay acceptance;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the old surface-metric HOLD remains preserved for the old topology; the new PASS is bound to a new exact Geometry identity and is supported by a negative control that reproduces the historical failure.
- **Agency / non-domination:** Organic retains source-form authority, Geometry retains topology authority, Materials / Visual QA / Art Direction retain visual/shading authority, Animation retains motion authority, and Technical Art / Runtime retain engine/playback authority.
- **Continuity:** source, Geometry #13, historical Rigging #12 and successor Rigging #15 remain separate exact evidence/rollback points; the test-discovery failure remains recorded.
- **Wisdom before speed:** the existing rig/profile was reused and remeasured before inventing new weights or altering source form merely to make a metric green.

## Prior Rigging lanes retained as historical truth

- Animal PR #12: `94bc573e2e06ba7a35c9908c141e2f939d4739a8` — bilateral source-successor dense sweeps; exact vertex mirror PASS / historical surface-metric HOLD.
- Animal PR #10: `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a` — left source-successor elbow rebind.
- Character PR #12: `329c485f567faeeb79198c7b1ebc2974b3c3db60` — stitch-edge shoulder rebind.
- Character PR #10: `e5b129ba936f252946f48921be5a3096d8c2f801` — diagonal-repair shoulder rebind.
- Character PR #8: `ef73f87e0ebe4ce101b2fe25a92441ada7837b83` — opening-repair shoulder rebind.
- Character PR #6: `62a60ee6b930d13898203d37b0cc9dab6b13d99d` — angle-conditioned shoulder release profile.

## Next Rigging & Deformation pass

1. Re-scan the full constellation; do not automatically continue Animal.
2. If Geometry changes this topology identity again, preserve PR #15 and explicitly rebind rather than transferring its PASS by equivalence.
3. If Animation consumes Geometry #13 + Rigging #15, require its own exact-head clip/playback proof before motion acceptance.
4. If Visual Observer / Art Direction identifies one precise deformation defect on the retained specimens, change only the smallest Rigging-owned variable and preserve this packet as control.
5. Keep continuous-motion proof, final visual quality, runtime/controller behavior, gameplay, CANON and mastery as independent gates.
