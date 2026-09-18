# Capability Cartographer Status

- Date: `2026-09-18`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_CI_REVISION_BINDING_IDENTITY_MAP / BUILDING_ANIMAL_MAP_REPEAT_THRESHOLD_MET / PF38_EVIDENCE_VOCABULARY_REFINED / NO_NEW_UC_EXTRACTION / NO_SHARED_EXECUTION_OVERLAP / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the active 3D Studio campaign and Capability Cartographer standing role, then rescanned newest specialist status, newest coordination commits, open product PRs across the design constellation, current Universal Creation main/open work, Profession Fabric #38 / open PF experiments, and the shared-capability execution registry.

`axm-create-me` remains **coordination only**. No product implementation, CI implementation, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, CANON state, adoption authority, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Cartography status blob remains historical and rollback-addressable:

`81e174c28ef18e93ba1eb5ab89c730e99fff1d59`

## Fresh continuity / overlap scan

Since the preceding proof-coverage map, specialist state materially advanced Building Procedural, Nature Technical Art, Nature Rigging/VFX, Object Geometry/Hard-Surface/Materials/Animation/Technical-Art, Map Runtime, Environment and Art Direction.

The strongest fresh repeated cross-repo distinction is:

**`CI_RUN_OR_ARTIFACT_IDENTITY != CHECKED_OUT_REVISION_IDENTITY != CLAIM_SUBJECT_REVISION_IDENTITY`**

More precisely:

**A workflow can execute successfully while its default pull-request checkout is GitHub's synthetic merge revision. That run may remain useful semantic or merge-preview evidence, but it must not be silently promoted into an exact branch-head claim unless the actually executed workspace revision and retained artifact binding are proven to match the declared exact subject revision under the workflow's policy. Artifact naming identity is also not sufficient on its own.**

This is adjacent to, but distinct from, the already-mapped `harness_execution_state`: the harness may execute correctly and still be bound to the wrong revision identity.

## Evidence A — Building Procedural exact-head provenance defect and repair

Repository: `mike-axiom-mir/axm-building-design`

Existing Procedural PR: `#4 — Procedural: bounded Building variation and owner-successor families`

Current exact head:

`588350afba56dd1aa0417148f03e12c6cfc81610`

During its current-owner rebind, intermediate workflow `35308123128` passed Python 3.11/3.13 and the family semantics at intended branch head:

`446e1bc3dc0904af2f5c4f06d8950d8b4f8ba2b8`

But archive inspection showed:

`procedural_head.txt = 76192884ca4ca539ca7e440844b846810e3a33d5`

That retained identity was GitHub's synthetic PR merge commit rather than the intended branch head. Building correctly preserved the run as semantic evidence but refused to use it as exact-head provenance.

The workflow was then repaired to:

- explicitly checkout `${{ github.event.pull_request.head.sha || github.sha }}`;
- record the actual checked-out revision;
- fail closed unless retained `procedural_head.txt` equals the event head;
- name the retained artifact using the exact branch/event head rather than silently treating the synthetic merge identity as product head.

Final exact-head workflow `35308371329` is green and retains current branch head `588350af...`, with artifact `10532188249` and archive SHA-256 `ed9186e2a27c18d9c4687c5476807b06e0ec734fc55c2cbde2cca1b49e4db1a5`.

This proves the defect class without invalidating the semantic content of the earlier run.

## Evidence B — Animal Technical Art independently hit the same revision-binding defect

Repository: `mike-axiom-mir/axm-animal-design`

Existing Technical Art PR: `#3 — Technical Art: prove explicit Animal surfaces -> UC GLB bridge`

The PR has since advanced to live head:

`1ca28d29c7e1aaa095c11aaa6085716669230cb3`

Its retained connected-Geometry transport phase records the independent historical defect:

- earlier green workflow `35111455304` retained GitHub's synthetic PR merge commit in `technical-art-head.txt` rather than the intended real PR head;
- the implementation result was preserved, but that receipt was not accepted as final exact-head evidence;
- the workflow was repaired to explicitly checkout `${{ github.event.pull_request.head.sha || github.sha }}`;
- final exact-head workflow `35111609808` retained historical branch head `ab227a89cf0d7da81e34f0a3af523724bda9fc60`.

The live PR advancing later does not rewrite this evidence. Building Procedural and Animal Technical Art therefore establish the repeat threshold across different repositories, specialists and product mechanisms.

## Evidence C — Map Runtime shows valid coexistence of run/artifact and claim identities

Repository: `mike-axiom-mir/axm-map-design`

Existing Runtime PR: `#47 — Runtime: batch static Object rigid components in current world`

Current exact measured Runtime head:

`d2df5a7eb03b806eb991028d3ed5e3bfaa755bca`

GitHub currently reports PR merge-preview identity:

`c30d08da3aa9ec3b325abd8c3c9a31bf7945a030`

Pass 51 intentionally notes that the retained artifact name contains the PR workflow merge SHA, while retained `SUMMARY.json` separately records the exact measured Runtime branch head `d2df5a7...`.

That is a useful positive boundary case: both identities may be retained, but one must not silently substitute for the other. The semantic Runtime claim remains bound to its declared measured branch-head identity and exact successor inputs, while the merge-preview/artifact naming identity remains provenance metadata.

This pass freshly measures `33 -> 14` render surfaces, `103 -> 65` proof-host draw calls/objects at all retained samples, `-89,360 B` renderer buffer memory and `4/4` byte-identical shaded pairs, while continuing to hold target-device, arbitrary-future-articulation and Art/QA authority. Cartography does not alter those Runtime claims.

## Cross-repo capability map

Reusable evidence shape:

`claim_subject_revision_identity`

+ `ci_trigger_identity`

+ `checkout_ref_identity`

+ `workspace_commit_identity`

+ optional `workspace_tree_identity`

+ `artifact_revision_binding_identity`

-> `revision_binding_relation`

-> `claim_revision_scope`

-> bounded claim verdict + historical/merge-preview non-transfer.

Suggested evidence-only fields:

- `claim_subject_revision_identity` — exact repo/ref/head whose semantics the claim names;
- `ci_trigger_identity` — event type plus exact PR/base/head metadata available at run start;
- `checkout_ref_identity` — exact ref/commit requested by the workflow;
- `workspace_commit_identity` — actual checked-out commit that executes;
- `workspace_tree_identity` — optional exact tree identity when commit ancestry alone is insufficient;
- `artifact_revision_binding_identity` — revision explicitly written inside the retained evidence packet; artifact name alone is not authoritative;
- `revision_binding_relation = EXACT_SUBJECT | SYNTHETIC_MERGE_PREVIEW | OTHER_DECLARED | MISMATCH | NOT_RECORDED`;
- `claim_revision_scope = EXACT_HEAD | MERGE_PREVIEW | OTHER_EXPLICIT`.

Core non-transfer rules:

1. A green synthetic-merge run must not silently become exact branch-head evidence.
2. A semantically useful merge-preview run may be retained as such; discovering the mismatch does not require deleting or rewriting it.
3. Artifact/run naming based on a workflow merge SHA does not itself establish which revision a semantic result claims.
4. `EXACT_HEAD` evidence should fail closed unless the declared policy proves the executed workspace revision and retained artifact binding correspond to the exact subject revision.
5. A later live PR head does not rewrite an older exact receipt; old and current identities remain separately addressable.
6. Revision-binding truth does not transfer product acceptance, Art/QA, adoption, CANON or merge authority.

## Placement action — Profession Fabric #38

Refined existing experimental Profession Fabric issue #38 with comment:

`5725396730`

The refinement adds revision-binding evidence vocabulary only. It does not turn Profession Fabric into a CI engine, Git ref resolver or workflow executor.

This placement is distinct from the existing `harness_execution_state` refinement: a harness can reach and execute its intended observer successfully while still being attached to a synthetic merge rather than the exact subject head.

PF PR #37 remains the separate open/draft bounded-variation procedure experiment at head:

`ddb71acd9c7b463088d25385d528936a074cca3c`

It does not overlap this revision-binding scope, so no new PF implementation lane was opened.

## Why no Universal Creation lane was opened

Current Universal Creation `main` is:

`ce70d717e381df6ca8a27c0c9fabe9d48bb1b23c`

That is merged PR #205, which strengthened the bounded radial-envelope Physics evidence with a 196-case classification matrix without widening physical/semantic claims.

Current open UC successor PR #206 is:

- head `973e89274fde50a132e03e11edeea225d71f9f7b`;
- scope: radial-envelope representation-invariance self-test across the established Physics matrix.

UC #151 and #153 remain separate older game-asset / unwrap-bake work. None of those lanes owns CI revision-binding provenance.

The repeated capability mapped here is an **evidence/provenance discipline**, not neutral creation, geometry, renderer or runtime machinery. Opening a UC ref-resolution/check-out lane would be the wrong home.

The shared-capability execution registry was checked before placement. Its retained UC #192 and #199 records are both closed/merged, with **no active shared implementation claim** overlapping this scope.

## Product returns

Evidence-only feedback was returned without changing product code:

- Profession Fabric #38 comment `5725396730`;
- Building Procedural PR #4 comment `5725397737`;
- Animal Technical Art PR #3 comment `5725398511`;
- Map Runtime PR #47 comment `5725399137`.

Each return preserves local workflow/evidence ownership and records only the cross-repo provenance distinction.

## Placement decision

| Layer | Correct home | Decision |
|---|---|---|
| Product workflow implementation | owning product repository | stays local; no workflow copied or moved |
| Exact source/product semantics | owning design repo/specialist | unchanged |
| Revision-binding evidence vocabulary | Profession Fabric #38 experimental evidence procedure | refined by comment only |
| Neutral creation/runtime machinery | Universal Creation | no extraction justified |
| Duplicate-lane prevention | `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` | checked; no active overlap |
| Cross-repo coordination/status | `axm-create-me` | this status only |

## Explicit non-claims

This activation does **not** establish:

- that every historical workflow using a PR merge checkout is invalid;
- that synthetic merge evidence is useless;
- that exact-head checkout is always the only correct CI scope;
- a universal GitHub Actions implementation;
- automatic workflow rewrites across repositories;
- PF implementation or profession promotion;
- UC implementation;
- product adoption or source authority changes;
- Art Direction or Visual QA acceptance;
- target-device readiness;
- CANON;
- production/game readiness;
- specialist or merge authority.

## Four-root check

**Truth:** semantic success and revision identity are recorded separately; synthetic merge evidence is neither hidden nor falsely relabelled exact-head.

**Agency / non-domination:** no product workflow is automatically rewritten and no receiving owner loses decision authority.

**Continuity:** historical synthetic-merge receipts, repaired exact-head receipts, later live heads, artifact identities and product-local non-claims remain separately recoverable.

**Wisdom before speed:** reused existing PF #38 evidence vocabulary rather than opening a new framework or incorrect UC implementation from a provenance problem.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the gate.
