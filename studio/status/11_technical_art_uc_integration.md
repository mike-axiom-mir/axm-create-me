# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_BILATERAL_EXACT_MIRROR_SURFACE_TO_CURRENT_UC_GLB / EXPLICIT_SOURCE-ID_TO_PORTABLE-UC-ID_PROJECTION / CURRENT_UC_PROCEDURAL_BLOB_UNCHANGED / HOLD_FINAL_NORMAL_TANGENT_VISUAL_ACCEPTANCE / HOLD_ANIMATION_REBIND_OWNER / HOLD_SKELETON_SKIN_WEIGHT_POSE_TRANSPORT / HOLD_ENGINE_IMPORT / HOLD_RUNTIME_GAMEPLAY / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art status, newest Geometry / Rigging / Animation / Materials evidence and current `axm-universal-creation` before changing implementation evidence.

`axm-create-me` remains **coordination only**. Product code and retained evidence remain in the owning design repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Prior Animal Technical Art evidence remains historical truth: disconnected-form transport, connected static transport, LEFT selected-003 transport, bilateral selected-003 transport, and sampled-motion/current-UC clock proofs are not rewritten or relabelled by this activation.

## Fresh constellation / duplication scan

The highest-leverage unclosed Technical Art boundary was created by the newest Animal topology successor:

- Geometry PR #13 exact head `bdbb51303bd1b96866b06a71730ccc328bf4f2f6` owns `PASS_BILATERAL_EXACT_MIRROR_SURFACE_TOPOLOGY_REPAIR`;
- the established LEFT selected-003 candidate remains digest `ace2366d8cd14c00df670b5fe1f0780ab2d01992482455ad5f7c4c9cadffeeba`;
- the historical RIGHT selected-003 candidate remains digest `262f536e0e522fd3e102cb16464c3757985fbb1dfcb3001df3b1f27b623b0115`;
- Geometry #13 keeps the same 42 source-owned RIGHT positions but replaces longitudinal triangle connectivity with exact mirror correspondence, producing RIGHT candidate digest `086ffe6f48af0cc3506871a4754b7395ba4c1fa3155eb4f420854a37e92181db`;
- the successor remains `42 vertices / 80 triangles`, flips the diagonal on 30 longitudinal quads, replaces 60 unoriented triangle sets, leaves 20 cap triangle sets unchanged, and retains exact 80/80 mirrored triangle correspondence;
- Rigging PR #15 separately owns deformation rebind evidence against Geometry #13;
- Animation PR #5 remains a separate owner lane and must perform its own rebind rather than inheriting this static Technical Art PASS;
- Materials PR #14 separately owns target-host shading review and has already shown that the 30 diagonal flips are **not generated-normal visually neutral**;
- no duplicate Technical Art, Materials, Rigging or Animation lane was opened.

The existing Animal Technical Art PR #3 remains the correct implementation home.

## Selected bounded gap

Question:

> Can Geometry PR #13's exact-mirror static successor cross the current UC portable-surface/GLB boundary while preserving the full Geometry-owned source identity, exact positions/indices and provenance — including when the source candidate name itself is too long for UC's portable receiver ID contract?

This activation is static transport only. It does not own topology adoption, authored normals/tangents, Rigging, Animation, target-engine integration, runtime acceptance or visual judgment.

## Current UC inspected

Current `axm-universal-creation` main at proof time:

**`bb090c470379542d38d24eea403832400c84a7b4`**

Consumed generic module:

`src/axm_uc/procedural_3d.py`

Git blob:

**`cdb654d4d0f68a4ca7539d98a985d7a70cf7ee36`**

That blob is byte-identical to previous proven surface UC `ecef151548736628cff62652a36be6eb1c7b1ad6`. UC's existing `axm.surface-3d/v0.1`, `publish_glb()` and `verify_glb()` machinery remains sufficient. **No UC product code changed and no Animal semantics were promoted into UC.**

UC's generic surface receiver intentionally requires material-group IDs matching `^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$`.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art head:

**`ad77f25025c92c830ce13bd4df2a21e5d469bc20`**

PR remains open / draft / mergeable. No duplicate Technical Art PR was opened.

## First exact run — retained failure

The first exact-mirror workflow attempt:

**`35154120971 — UC bilateral mirror-surface topology bridge evidence` — FAILURE**

All exact producer regeneration steps passed, but current UC rejected the RIGHT transport surface with:

`surface group IDs must be unique portable identifiers`

The cause was not geometry corruption. Geometry #13's authoritative source candidate ID is:

`front-right-connected-chain-elbow-source-successor-003-mirror-surface-topology-001`

That domain-owned name exceeds UC's generic 80-character portable group-ID boundary.

The failure remains historical evidence. Technical Art did **not** rename the Geometry source candidate, weaken its digest gate, enlarge UC for one Animal case, or centralize Animal naming policy into UC.

## Smallest reusable repair

Technical Art added a narrow receiver-boundary projection in Animal's integration layer:

- `src/axm_animal_design/uc_transport_identity.py`;
- `tests/test_uc_transport_identity.py`;
- `tools/run_uc_bilateral_mirror_surface_bridge_evidence.py`;
- retained exact-mirror bridge builder and workflow remain in the existing PR #3 lane.

Contract:

1. verify the exact Geometry-owned candidate hash first;
2. deep-copy the candidate only for transport;
3. project only the receiver-local group ID to a valid UC portable identifier;
4. keep source candidate ID, positions and indices unchanged and separately retained;
5. record source ID -> portable receiver ID explicitly in evidence;
6. fail closed on invalid portable IDs, source geometry drift, stale topology and UC module drift.

Exact mappings used:

- LEFT source `front-left-connected-chain-elbow-source-successor-003` -> UC group `animal-selected003-left`;
- RIGHT source `front-right-connected-chain-elbow-source-successor-003-mirror-surface-topology-001` -> UC group `animal-selected003-right-mirror`.

The retained receipt states `source_identity_rewritten=false`, `geometry_rewritten=false`, and separately records `positions_preserved=true` / `indices_preserved=true` for both sides.

This is Technical Art transport plumbing, not a source naming rewrite and not a UC product feature.

## Exact successful result

Scoped result:

**`PASS_BILATERAL_EXACT_MIRROR_SURFACE_TO_CURRENT_UC_GLB`**

Dedicated workflow:

**`35154464437 — UC bilateral mirror-surface topology bridge evidence` — SUCCESS**

Same-head companion workflows also completed successfully:

- `35154464412 — Tests`;
- `35154464496 — UC bilateral source-successor surface bridge evidence`;
- `35154464532 — UC surface bridge evidence`;
- `35154464327 — Weighting refinement evidence`.

Exact retained findings:

- Technical Art head: `ad77f25025c92c830ce13bd4df2a21e5d469bc20`;
- Geometry owner head: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- LEFT source digest: `ace2366d8cd14c00df670b5fe1f0780ab2d01992482455ad5f7c4c9cadffeeba`;
- historical RIGHT digest: `262f536e0e522fd3e102cb16464c3757985fbb1dfcb3001df3b1f27b623b0115`;
- exact-mirror RIGHT digest: `086ffe6f48af0cc3506871a4754b7395ba4c1fa3155eb4f420854a37e92181db`;
- exact-mirror RIGHT positions equal historical RIGHT positions: `true`;
- exact-mirror RIGHT indices differ from historical RIGHT indices: `true`;
- LEFT UC verification: `80` triangles;
- RIGHT UC verification: `80` triangles;
- LEFT GLB SHA-256: `6ad99c85dda51a00c28e200dde1cf1eb8129d8070cc9e7e5f652c7d051505845`;
- RIGHT GLB SHA-256: `d06bf1ef37d5adecd78e74644294be17621f937bf9154c090337ae9a29fb5244`;
- current UC: `bb090c470379542d38d24eea403832400c84a7b4`;
- previous proven UC: `ecef151548736628cff62652a36be6eb1c7b1ad6`;
- previous/current `procedural_3d.py` blob: `cdb654d4d0f68a4ca7539d98a985d7a70cf7ee36` in both revisions;
- UC product code changed by this lane: `false`.

## Retained artifact

Artifact:

- ID: **`10470517543`**;
- name: `quadruped-bilateral-mirror-surface-current-uc-bridge-evidence`;
- size: **`33,385 B`**;
- GitHub archive SHA-256: **`ccf0ba7eb907912d280558c8742c72b066d08e1d2bf0045d4db77f38437928b4`**.

The archive was downloaded and independently rehashed to the same SHA-256. It retains exact Technical Art / Geometry / previous-current UC identities, both Geometry owner evidence sets, source candidates, explicit source-ID -> UC-ID projection, converted surfaces, both GLBs and fail-closed controls.

## Visual tradeoff / non-overlap

Technical Art does **not** claim the exact-mirror topology is visually neutral. Geometry #13 changes 30 longitudinal quad diagonals while positions remain fixed. Materials PR #14 has measured renderer-visible generated-normal differences, especially in vertex-smoothed shading, and holds generated-normal visual neutrality.

The UC bridge therefore labels its computed averaged normals **transport-only**. Final authored normal/tangent policy and visual acceptance remain with Materials, Art Direction and Visual QA. Static UC GLB success does not override that evidence.

Handoffs recorded:

- Technical Art PR #3 comment `5705084007`;
- Geometry PR #13 comment `5705086242`;
- Materials PR #14 comment `5705087582`.

## Truth boundary / explicit non-claims

This activation proves only that Geometry #13's exact source-owned LEFT selected-003 and RIGHT exact-mirror static candidates can be regenerated through the owning Geometry evidence paths, exact-hash gated, projected to receiver-local portable group IDs without rewriting source identity or geometry, converted through the established Animal -> UC coordinate/winding boundary, emitted by current UC as separate GLBs and re-verified at 80 triangles each.

It does **not** prove:

- topology adoption or rejection;
- final authored normals, tangents, UVs, textures or material look;
- skeleton, skin or weight transport;
- pose/deformation transport;
- GLB animation channels or Animation PR #5's pending owner-side rebind;
- target-engine import/playback, controller or state-machine integration;
- visual/anatomy acceptance;
- gameplay, collision, physics or target-device performance;
- UC promotion of Animal-specific semantics;
- CANON, merge authority, production/game readiness or Technical Art mastery.

## Four-root gate

- **Truth:** the failed long-ID receiving run remains evidence; the source candidate is not silently renamed, and the transport alias is explicit and separately retained.
- **Agency / non-domination:** Geometry keeps source/topology identity, Materials keeps shading evidence, Rigging keeps deformation, Animation keeps motion rebind, UC keeps its generic receiving contract, and Technical Art owns only the integration projection.
- **Continuity:** all previous Animal -> UC proofs remain distinct rollback/evidence points; this activation adds the exact-mirror successor boundary without relabelling older receipts.
- **Wisdom before speed:** a narrow adapter is used instead of widening UC or collapsing domain names, and visual neutrality stays held because target-host evidence says it should.

## Current state

`PASS_BILATERAL_EXACT_MIRROR_SURFACE_TO_CURRENT_UC_GLB / EXPLICIT_SOURCE-ID_TO_PORTABLE-UC-ID_PROJECTION / CURRENT_UC_PROCEDURAL_BLOB_UNCHANGED / GEOMETRY #13 SOURCE AUTHORITY RETAINED / MATERIALS #14 GENERATED-NORMAL VISUAL HOLD RETAINED / RIGGING #15 AUTHORITY RETAINED / HOLD_ANIMATION OWNER REBIND / HOLD_SKELETON_SKIN_WEIGHT_POSE_TRANSPORT / HOLD_GLB_ANIMATION_CHANNELS / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_FINAL_NORMAL_TANGENT_VISUAL_ACCEPTANCE / HOLD_RUNTIME_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT`
