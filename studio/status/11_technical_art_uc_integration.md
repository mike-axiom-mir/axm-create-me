# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_BUILDING_EXACT_GODOT_INDEX_GROUPING_MATCHES_UC_CROSS_SOURCE_TUPLE_CANDIDATE / HOLD_GODOT_NORMAL_REPACK_EXACTNESS_AND_INDEPENDENT_VISUAL_REVIEW / UC_PR_179_DRAFT / MAP_TECH_ART_PR_40_DRAFT / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art / Runtime / Art Direction / Visual QA status, the design constellation, and current `axm-universal-creation` before selecting work.

`axm-create-me` remains **coordination only**. No product implementation or retained execution artifact was placed here. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The previous UC indexed-surface observer is now merged on UC main at exact commit **`8c3e3b7690bd54711fd3b674b012aa876c7ae755`**. Its conservative source-lineage behavior is correct for Animal-style source→render expansion, but it cannot observe a different real receiving pattern already proven by Runtime: an unindexed triangle-corner domain whose exact post-normal render tuples are indexed locally by the target receiver.

The highest-leverage live case is Building Runtime PR #39. Runtime already owns the real Godot storage/performance evidence and has merged the bounded receiver path, so Technical Art did **not** open another optimizer lane. Building Hard Surface and Materials remain the semantic owners; Art Direction / Visual QA retain appearance acceptance; Environment retains adoption.

## Selected bounded gap

Question:

> Can UC truthfully observe receiver-local indexing across distinct source/corner identities when exact declared render attributes and caller-owned split identity permit it, while keeping the conservative source-lineage policy as default and without teaching UC Building-specific semantics?

This required one small generic observer extension plus one exact cross-repo Technical Art proof.

## Smallest reusable UC repair

UC draft PR **#179 — `Extend indexed-surface observer with explicit cross-source tuple mode`** remains open and draft.

Exact UC head:

**`237ea786a56a0b5c6fa3647ed302c3a8f04fcbed`**

Exact observer file SHA-256 from retained proof:

**`8bb619ffdd7ab04b17f15fc0f63db263e142ff7236186de689578f90dcafbe20`**

The existing default policy remains:

- `SOURCE_VERTEX_AND_ATTRIBUTES` — source vertex identity participates in every candidate key.

The new explicit diagnostic policy is:

- `ATTRIBUTES_AND_PROTECTED_SPLITS` — distinct source/corner identities may share a structural candidate only when every supported declared render attribute and caller-owned protected split identity are exactly equal.

Cross-source mode requires an explicit `protected_split_ids` declaration for every render vertex, including explicit `null` where the caller declares no additional non-attribute split identity. Missing declaration returns **`HOLD_CROSS_SOURCE_SPLIT_DECLARATION_REQUIRED`** with no candidate. Cross-source candidate groups are reported separately so storage eligibility cannot masquerade as source-topology equivalence.

UC still emits no replacement mesh, performs no automatic weld, decides no product adoption, and contains no Building material/topology policy.

### UC self-proof

Exact-head workflows are green, including:

- **`35187135798 — Indexed surface eligibility evidence` — SUCCESS**;
- full UC **Tests — SUCCESS**;
- Actual Godot target verification and triggered generic candidate/profession workflows — SUCCESS.

Retained neutral evidence artifact:

- ID: **`10482801951`**;
- size: **18,120 B**;
- GitHub SHA-256: **`f82390e346a6dfa87270f00a9d43dcdb0fd82d7a66a32fa11a9758455d6fbae6`**;
- independently downloaded / rehashed SHA-256: **same value**.

The neutral evidence proves backward-compatible source-lineage behavior, explicit cross-source tuple candidacy, protected-split preservation, missing-split HOLD, unsupported-channel fail-closed behavior, and deterministic receipts.

## Exact Building → Godot → UC cross-repo proof

A bounded Technical Art branch was opened in `axm-map-design`, stacked on the current Environment branch and reusing the exact merged Runtime receiver rather than duplicating it.

Draft PR:

**Map PR #40 — `Technical Art: prove Building post-normal indexing against UC observer`**

Exact final Technical Art head:

**`e4105697802fad082b31da21a22a8dd1a944dedd`**

Exact owners consumed:

- Runtime index receiver: **`8d5860c308c244d314ede5b79021e46f35c4040d`**;
- Building Hard Surface: **`93f22e4eeb9bb32516d4b11f8d8bcf47d9792910`**;
- Building Materials: **`4179aa1401f5a9114399e2f998c96809d4b8ed2e`**;
- representation: `boundary-only-planar-role-rectangle-render-001`;
- UC observer head: **`237ea786a56a0b5c6fa3647ed302c3a8f04fcbed`**.

Technical Art captures the real Godot arrays immediately before and after the existing `SurfaceTool.index()` path. Each of the five final material partitions is evaluated separately so UC cannot cross Building material roles.

Scoped result:

**`PASS_BUILDING_EXACT_GODOT_INDEX_GROUPING_MATCHES_UC_CROSS_SOURCE_TUPLE_CANDIDATE__HOLD_GODOT_NORMAL_REPACK_EXACTNESS_AND_VISUAL_REVIEW`**

Exact structural identity:

- **5** material surfaces;
- **336** triangles;
- **1,008** unindexed triangle corners;
- **312** real Godot indexed vertices;
- **1,008** real Godot indices;
- **312** UC cross-source candidates;
- UC and Godot form the **same partition of triangle corners into indexed vertex groups under bijective relabeling** on every surface;
- decoded **POSITION** corner streams remain exact on every surface;
- UC exactly retains the pre-index **NORMAL** corner stream used for its grouping decision;
- conservative UC source-lineage mode preserves all **1,008** source/corner identities;
- cross-source mode without explicit split declarations fails closed.

Raw index IDs and stored vertex order are explicitly **not** claimed equal: independent indexers may label the same grouping differently.

### Receiver-side normal transport HOLD

The proof surfaced a real target-receiver detail rather than hiding it. The pinned Godot `create_from -> index -> commit` path repacks some normals after the grouping decision:

- changed decoded corner normals: **120 / 1,008**;
- all changed corners: **`frame_galvanized`**;
- max absolute component delta: **`0.00011304020881702792`**;
- max angular delta: **`0.006869404718583788°`**;
- the other four material surfaces retain exact normal rows.

This is a **Technical Art transport-exactness HOLD**, not a visual failure and not visual acceptance. Art Direction / Visual QA own that decision. No Building-specific tolerance was added to UC.

## Failed proofs retained rather than erased

Two failed exact runs materially improved the contract:

1. **`35187426451`** required raw index numbering / stored vertex order to match exactly between independent indexers. That was over-constrained; index IDs are local labels, so the contract was repaired to compare exact grouping identity.
2. **`35187694131`** then required exact decoded POSITION+NORMAL equality after Godot indexing. That correctly exposed the receiver-side normal repack above. Its retained failure artifact is **`10483070009`**, 16,425 B, SHA-256 **`165759bd78008a512b418b93c6513cd48e739597629acb56b8ddebb17b5a6d9e`**, independently rehashed.

The final proof separates the exact structural grouping PASS from the normal-transport HOLD instead of weakening either boundary.

## Final retained evidence

Final dedicated workflow:

**`35188074026 — Technical Art Building planar-role UC index bridge evidence` — SUCCESS**

Its fail-closed mutation swaps two real Godot corner indices and is correctly rejected.

Retained final artifact:

- ID: **`10483020277`**;
- name: `technical-art-building-planar-role-uc-index-bridge-e4105697802fad082b31da21a22a8dd1a944dedd`;
- size: **57,918 B**;
- GitHub archive SHA-256: **`34ce988749547430caf86b36bbba53a1711a9ec4a484005027214c41cea79e55`**;
- independently downloaded / rehashed SHA-256: **same value**.

The archive retains the exact Godot before/after surface bundle, retained Runtime report, per-surface UC input/report pairs, Technical Art/UC identity pins, receipt, manifests, and Godot log.

## Coordination handoffs

Evidence was returned to:

- Map Technical Art PR #40: comment **`5709719769`**;
- UC PR #179: comment **`5709721329`**;
- Runtime PR #39: comment **`5709722610`**;
- Building Hard Surface PR #11: comment **`5709724061`**.

## Authority / truth boundary

- **Building Hard Surface / Materials** own representation semantics and material partition identity.
- **Runtime** owns measured storage/performance evidence and runtime representation tradeoffs.
- **Technical Art** owns the exact cross-repo grouping/transport proof and receiver observations.
- **UC** owns only neutral observer machinery; no Building, Map, Animal or other product semantics are centralized there.
- **Art Direction / Visual QA** own whether the measured normal/raster deltas are visually acceptable.
- **Environment** owns whether the indexed Building representation is adopted in its current-world product path.

This result does **not** establish automatic reindexing, exact post-index NORMAL transport, independent visual acceptance, target-device CPU/GPU/FPS/VRAM behavior, residual primitive acceptance, arbitrary UV/tangent/custom/deformation safety, Environment adoption, CANON, Profession Fabric promotion or production readiness.

## Four-root gate

- **Truth:** both failed proofs are retained; exact structural grouping is separated from measured NORMAL drift instead of being flattened into one optimistic PASS.
- **Agency / non-domination:** product owners keep representation, performance, visual and adoption decisions; UC observes only the bounded generic structure requested by callers.
- **Continuity:** merged Runtime #39 and Building owner evidence are consumed directly; no duplicate optimizer or Building semantic copy was created.
- **Wisdom before speed:** the smallest observer extension is proven against the real receiver before any generic mutating reindexer or automatic adoption is considered.

## Current state

`PASS_BUILDING_EXACT_GODOT_INDEX_GROUPING_MATCHES_UC_CROSS_SOURCE_TUPLE_CANDIDATE / UC_PR_179_HEAD_237EA786_DRAFT / UC_WORKFLOW_35187135798_SUCCESS / UC_ARTIFACT_10482801951_SHA_F82390E3 / MAP_PR_40_HEAD_E4105697_DRAFT_MERGEABLE / MAP_WORKFLOW_35188074026_SUCCESS / MAP_ARTIFACT_10483020277_SHA_34CE9887 / 1008_CORNERS_TO_312_GROUPS_1008_INDICES_336_TRIANGLES_5_SURFACES / EXACT_POSITION_AND_GROUPING / GODOT_NORMAL_REPACK_120_OF_1008_MAX_COMPONENT_0.0001130402_MAX_ANGLE_0.0068694_DEG / HOLD_NORMAL_EXACTNESS_VISUAL_REVIEW_ENVIRONMENT_ADOPTION_TARGET_DEVICE_ARBITRARY_MESH_CANON_PRODUCTION_READINESS`
