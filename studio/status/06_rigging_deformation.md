# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_BILATERAL_DEFORMED_TANGENT_FRAME_DENSE_SWEEPS / FIXED-UV TANGENT-FRAME STRUCTURAL OBSERVER PASS / SHADED VISUAL + ANIMATION + TRANSPORT + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the newest specialist status, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and evidence stay in `mike-axiom-mir/axm-animal-design`; this file records exact scope, evidence, holds, failures and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The highest-leverage fresh Rigging-owned dependency was the deformed tangent-frame gap explicitly handed off by Animal Geometry PR #20, not another weighting, source-form or articulation change.

- **Animal Rigging PR #18** remains the exact deformed logical-quad normal-field authority at `91e2fd01be63df807c035b39f7ec824a4a5a60b8`; it proves 484 posed normal fields / 20,328 normals while explicitly holding tangents, shaded visual, Animation and Runtime.
- **Animal Geometry PR #20** at `ca4bb8a2f144231f8755eacc980785d1807b79db` adds the first exact source-preserving structural UV/tangent basis for this elbow chain. It keeps the 42-source-vertex / 80-triangle surface intact while making the render-domain split explicit at 84 vertices, and it explicitly hands deformed tangent observation to Rigging.
- **Character** still retains a Geometry-owned shoulder self-intersection HOLD; no new Character Rigging variable was justified by fresh evidence.
- **Object** already has mature articulation lanes; **Nature** dynamic response remains VFX/Runtime-owned where applicable; **Building / Map / Weather / Weapon / Armor / Unit / Misc** exposed no stronger unoccupied Rigging dependency.
- No competing Rigging implementation lane was found for this exact Animal tangent identity.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Draft stacked PR:

**#22 — `Rigging: prove tangent frames across elbow deformation`**

Branch: `studio/rigging-bilateral-deformed-tangent-frame-001`

Base: Geometry PR #20 exact head **`ca4bb8a2f144231f8755eacc980785d1807b79db`**

Exact current Rigging head: **`63c65d57fda0595217f86d971ff8c67f256188be`**

Observed PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**. Repository metadata does not grant merge/CANON authority.

## Why this was highest leverage

The current exact Animal chain already had source/topology, structural rig/weights, deformed normals and a static structural UV/tangent basis. The only missing Rigging-owned question was whether **that exact Geometry tangent identity remains structurally coherent through the already-proven elbow deformation envelope**.

The smallest truthful action was therefore an observer, not a new rig: reuse the exact existing solver and weight profiles, hold Geometry #20's UVs/render mapping fixed, re-derive Geometry #16's unchanged logical-quad normals on each posed surface, and re-derive the tangent frame from posed positions + fixed UVs + posed normals.

No source positions, topology, rig hierarchy, joint origin/axis, influence radius, weighting profile, UV layout, normal policy, material, Animation clip or Runtime implementation was changed.

## Exact identity preserved

Pinned identities:

- Geometry UV/tangent head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- previous Rigging deformed-normal head: `91e2fd01be63df807c035b39f7ec824a4a5a60b8`;
- exact rig/weight donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- Geometry UV/tangent module blob: `ba0b4e620f132413606177358e47bd32ae4d4965`;
- deformed-normal module blob: `b8df083310727dcd05e7476b2158a081a5c25c8f`;
- bilateral Rigging source module blob: `f0cdcd7bf2452e73070efc872f53274a5ae3bcba`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- weight profiles: `smoothstep-v0` and `ease-out-power-0p75-v1` with exact exponent `0.75`;
- joints: `front-elbow-L` and `front-elbow-R`;
- tested motion envelope: every integer angle from `-60°` through `+60°`.

The deliberate `0.75 -> 0.74` weighting mutation remains fail-closed.

## Bounded observer method

For each exact side × weighting profile × integer pose, the observer:

1. obtains posed source positions from the already-established Rigging solver;
2. preserves Geometry #20's exact structural UV coordinates and 42→84 render-source mapping unchanged;
3. re-derives Geometry #16's exact logical-quad normal field on the posed source surface;
4. expands posed positions/normals through the exact 84-vertex render mapping;
5. derives tangent/bitangent from posed render positions + unchanged UVs;
6. Gram-Schmidt orthogonalizes tangent XYZ against the posed explicit normal and retains reflection handedness in tangent `w`;
7. requires tangent unit error and |tangent·normal| within `1e-9`, exact zero UV drift, zero handedness drift against the static basis, exact neutral-frame reproduction within `1e-9`, and positive adjacent one-degree tangent-direction dot;
8. requires bilateral reflected positions, normals and tangent XYZ plus opposite reflection handedness to remain within the existing `1e-9` proof tolerance.

This is a finite **evidence observer**, not production skin/tangent transport.

## Bounded proof result

Scoped state:

**`PASS_BILATERAL_DEFORMED_TANGENT_FRAME_DENSE_SWEEPS`**

Directly exercised:

- 2 elbows;
- 2 exact weighting profiles;
- 121 integer-angle samples per side/profile;
- **484 posed tangent fields** total;
- 84 render tangents per posed field;
- **40,656 directly checked tangent vectors**.

Across all four side/profile sweeps:

- maximum tangent unit-length error: **`3.3306690738754696e-16`**;
- maximum `|tangent·normal|`: **`1.1934897514720433e-15`**;
- maximum UV drift: **`0.0`**;
- handedness drift count: **`0`**;
- neutral tangent reproduction residual: **`7.210895423038402e-13`**;
- neutral normal reproduction residual: **`0.0`**;
- minimum adjacent one-degree tangent XYZ dot: **`0.9998476962690883`**.

Bilateral results for both weight profiles:

- maximum reflected posed-position residual: **`0.0 m`**;
- maximum reflected normal residual: **`1.000088900582341e-12`**;
- maximum UV residual: **`0.0`**;
- maximum reflected tangent-XYZ residual: **`7.633310189221143e-13`**;
- tangent handedness mismatches: **`0`**.

This is a finite one-degree sampled proof; it is not a mathematical proof of every real-valued intermediate angle.

## CI / retained evidence

Dedicated workflow:

**`35162365467 — Rigging bilateral deformed tangent-frame evidence — SUCCESS`**

Exact head: `63c65d57fda0595217f86d971ff8c67f256188be`.

- Python 3.11: exact ancestry/module checks PASS; exact donor checkout PASS; compile PASS; full inherited Animal suite plus new observer tests PASS; retained evidence build PASS; artifact upload PASS.
- Python 3.13: exact ancestry/module checks PASS; exact donor checkout PASS; compile PASS; full inherited Animal suite plus new observer tests PASS.
- No rig rule, weight, tolerance, UV policy, normal policy or source geometry was weakened to obtain the PASS.

Retained artifact:

- ID: **`10473895531`**;
- name: `animal-rigging-bilateral-deformed-tangent-frames-63c65d57fda0595217f86d971ff8c67f256188be`;
- size: **`122,716 B`**;
- retained files: **8**;
- SHA-256: **`8ba40d9ea7017c01a059bf7c5eafc264dccaf4e35542d670277ee73518241a7e`**;
- archive downloaded and independently rehashed this activation: **same SHA-256**.

The packet retains the full machine-readable observer receipt, exact rig plan, exact weighting profile, exact current/dependency head records and summary.

## Handoffs recorded

- **Rigging PR #22:** evidence comment `5706040896` records exact numeric observer result, exact workflow, artifact digest and explicit non-claims.
- **Geometry PR #20:** comment `5706042280` records that its exact UV/tangent identity survives the bounded Rigging pose observer without changing Geometry ownership or final UV acceptance.
- **Historical Rigging PR #18:** continuity comment `5706043832` preserves its deformed-normal PASS as a separate exact prerequisite rather than rewriting it into tangent evidence.
- **Materials PR #17:** comment `5706044608` keeps deformed shaded tangent-space appearance explicitly unaccepted and Materials / Visual QA / Art Direction-owned.
- **Runtime PR #19:** comment `5706045518` records that the 42→84 tangent representation needs its own fresh Runtime storage/performance/transport measurement; prior normal-only budget does not transfer.
- **Animation PR #5:** comment `5706046476` explicitly keeps timing, interpolation, clip, playback and target-host channel acceptance separate.

## Truth boundary / explicit non-claims

This activation proves only a **bounded finite-sampled structural deformed-tangent-frame observer** over the exact existing Animal elbow rig and exact Geometry structural UV/tangent basis.

It does **not** establish:

- production skin/tangent transport or export semantics;
- mathematical continuous tangent behavior for every real-valued pose;
- tangent-space normal-map rendering or final texture/texel-density policy;
- final shaded deformation quality or Art Direction / Visual QA acceptance;
- anatomy, muscle behavior, volume preservation, skin sliding or production skin quality;
- Animation timing, interpolation, clip, playback or motion acceptance;
- exact Technical-Art / UC / GLB transport or importer regeneration/reorder safety;
- Runtime/controller, target-device memory/FPS/performance, physics or gameplay acceptance;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the PASS is bound to exact Geometry/Rigging heads, module blobs, rig/profile digests and measured finite pose samples; production transport, shaded visual, Animation and Runtime gates remain visibly open.
- **Agency / non-domination:** Geometry retains UV/normal/surface ownership; Materials / Visual QA / Art Direction retain visual acceptance; Animation retains clip/playback authority; Technical Art retains transport authority; Runtime retains storage/performance/controller authority; Mike / constitutional process retain CANON/merge authority.
- **Continuity:** Rigging #18 and Geometry #20 remain separate rollback/evidence points; PR #22 consumes them without relabelling historical PASS/HOLD states.
- **Wisdom before speed:** the exact new tangent identity was measured through the proven rig envelope before inventing another weighting profile, changing topology or promoting an Animal-specific observer into UC.

## Prior Rigging lanes retained as historical truth

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
2. If Materials / Visual QA produces a posed tangent-space shaded review and identifies a precise deformation defect, change only the smallest Rigging-owned variable justified by that evidence.
3. If Animation advances, require an explicit exact-head clip/interpolation/playback rebind; this tangent observer must not become silent Animation acceptance.
4. If Geometry changes UV, normal, render-domain or topology identity, preserve PR #22 and rerun instead of transferring its PASS by equivalence.
5. Keep production tangent transport, target-host import behavior, Runtime/controller cost, gameplay, CANON and mastery as independent gates.
