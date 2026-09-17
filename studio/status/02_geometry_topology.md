# 02 — Geometry & Topology Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_RIGID_SHELL_SOURCE_EXTERIOR_SEMANTIC_REBIND / OBJECT_PR33_HEAD_031D0720 / HISTORICAL_CANDIDATE_606D8189_PRESERVED / HARD_SURFACE34_EXACT_812_OF_812 / POSITIVE_SIGN_FRAME_BOUND_NOT_OUTWARD / CANDIDATE_BYTES_UNCHANGED / DEDICATED_CI_GREEN_PY311_313 / UC200_STILL_OPEN_UNMERGED / SOURCE_ADOPTION_RENDERER_RUNTIME_GAMEPLAY_HOLD / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the immediately preceding Geometry status, current specialist status, recent design-repository PRs, current Universal Creation work, and the newest cross-domain Object handoffs before choosing work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product implementation in this activation lives only in `mike-axiom-mir/axm-object-design`. No product code was added to this coordination repository.

The exact immediately preceding Geometry status is preserved and rollback-addressable at blob:

`f291e35e24c4e5f83f333e820afb237aead9c188`

That predecessor contains the complete UC PR #200 closed-component orientability / signed-orientation observer activation at exact UC head `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`. Nothing in this activation deletes, rewrites, merges, or claims product consumption of that shared candidate.

The four AXM roots remain the merge gate: **Truth; Agency / non-domination; Continuity; Wisdom before speed**.

## Fresh constellation / duplicate-lane scan

The design constellation was rescanned before implementation.

- Character and Animal already have Geometry-owned topology/self-intersection lineages plus active downstream Rigging, Materials, Technical Art, Animation, Runtime, Art and QA receivers. No new measured source defect justified another mutation.
- Building retains its Geometry shell/UV lineage and active Hard Surface / Materials / Procedural / receiver work. Its next directional-density step still requires an exact receiving asset rather than speculative Geometry work.
- Nature / Weather / Map remain dominated by Environment, VFX, Technical Art, Runtime and receiving evidence; no fresher mesh-topology defect outranked the Object truth-boundary issue.
- Weapon / Armor / Unit / Misc had no sufficiently grounded active source demanding a new Geometry mutation.
- Profession Fabric had no missing profession/process primitive for this pass.
- Universal Creation PR #200 remains **OPEN / DRAFT / UNMERGED / MERGEABLE** at exact head `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`. It already encodes the neutral shared rule that algebraic signed volume is frame-bound and must not be relabelled as universal `outward`. Because it is unmerged, Object may not claim a shared-observer product rebind from it yet.
- Object produced the highest-leverage returned evidence. Geometry PR #33 had a coherent winding-only candidate, Hard Surface PR #34 subsequently established exact source-owned exterior semantics independently of triangle winding / renderer policy, and Technical Art PR #16 separately demonstrated a handedness-changing source-to-target transport where algebraic signed-volume sign reverses while intended exterior remains the same.

That constellation made the highest-leverage unoccupied Geometry task a **semantic evidence repair**, not another mesh mutation and not a sibling UC implementation.

## Selected reusable pattern

**`COHERENT_WINDING_REQUIRES_EXACT_SOURCE_EXTERIOR_BIND__SIGNED_VOLUME_IS_FRAME_BOUND_DIAGNOSTIC`**

Rule:

1. preserve a structurally coherent historical winding candidate byte-for-byte unless new structural evidence requires mutation;
2. do not infer semantic exterior/outward solely from the sign of algebraic signed volume;
3. bind the candidate to an exact source-owner exterior-intent receipt when such owner evidence exists;
4. require exact face-order compatibility, not visual analogy or semantic similarity;
5. keep algebraic signed volume as a declared-frame diagnostic because handedness-changing transport may reverse its sign;
6. leave target-host parity/front-face adaptation with Technical Art / renderer receivers;
7. leave source adoption with the product source owner;
8. preserve historical evidence rather than silently relabelling the earlier PASS.

## Product implementation lane

Repository:

`mike-axiom-mir/axm-object-design`

Existing Geometry draft PR:

**#33 — `Geometry: bind rigid-shell orientation candidate to source exterior intent`**

Branch:

`studio/geometry-object-rigid-shell-orientation-001`

Current exact tested head:

`031d0720197698906b54ee8d327f272950aa758d`

Observed state after current evidence:

**OPEN / DRAFT / UNMERGED / MERGEABLE**.

Historical Geometry candidate provenance is retained at exact head:

`606d8189a3bf4502141d8038f08d35d421829dde`

Historical candidate identity remains:

- source: `modular-equipment-case-001`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- `468` vertices;
- `812` triangles;
- `31` rigid groups;
- source shared-edge orientation conflicts: `304`;
- candidate shared-edge orientation conflicts: `0`;
- candidate winding reversals: `508 / 812` faces;
- vertex positions unchanged;
- exact triangle vertex membership unchanged;
- triangle order unchanged;
- rigid-group partition unchanged;
- source adoption remains false.

This activation does **not** alter that candidate geometry.

## Exact source-owner semantic donor

Object Hard Surface PR #34:

**`Hard Surface: source-own rigid-shell exterior intent`**

Exact donor head:

`77a4058b305fab7fd04dab94781b9460f089727e`

Exact contract:

`assets/modular-equipment-case-001/rigid-shell-exterior-intent-001.json`

Exact contract Git blob:

`a9f3c40868f7d77c524738155178af51c91b947e`

Canonical source-exterior face-order digest:

`3a28b04f065cd58a21a310588ab4cecce54878c67b41793439d358c837647d63`

Hard Surface establishes exterior intent for this exact deterministic manufactured source family using source-owned primitive-interior references. It explicitly does not rewrite stored triangle winding, adopt Geometry, or choose renderer front-face policy.

Historical Geometry PR #33's candidate had already been independently compared by Hard Surface at 812/812 face matches and 0 mismatches. This activation now makes that exact owner bind an executable Geometry requirement rather than relying on narrative continuity.

## New bounded evidence files

Current PR #33 adds only the semantic-rebind evidence layer:

- `assets/modular-equipment-case-001/rigid-shell-source-exterior-rebind-001.json`;
- `tools/verify_rigid_shell_source_exterior_rebind.py`;
- `tests/test_rigid_shell_source_exterior_rebind.py`;
- `.github/workflows/object-geometry-rigid-shell-source-exterior-rebind.yml`.

The new verifier deliberately reuses the historical Geometry candidate builder/verifier rather than reimplementing it. CI independently checks out Hard Surface PR #34 at its exact donor head in a separate worktree and runs the Hard-Surface-owned verifier against the rebuilt unchanged candidate.

Current scoped result:

**`PASS_DERIVED_RIGID_SHELL_SOURCE_EXTERIOR_COHERENT_ORIENTATION_CANDIDATE`**

Required exact evidence:

- Hard Surface donor head is exactly `77a4058b305fab7fd04dab94781b9460f089727e`;
- Hard Surface contract blob is exactly `a9f3c40868f7d77c524738155178af51c91b947e`;
- candidate source-exterior face matches: `812 / 812`;
- candidate face mismatches: `0`;
- candidate face-order digest equals `3a28b04f065cd58a21a310588ab4cecce54878c67b41793439d358c837647d63`;
- historical candidate winding-conflict result remains `0`;
- historical flipped-face count remains `508`;
- source geometry changed: false;
- candidate geometry changed: false;
- source adopted: false;
- Technical Art transport adopted: false;
- renderer front-face selected: false;
- Materials / Art / QA accepted: false;
- Runtime adopted: false;
- gameplay/collision adopted: false.

## Signed-volume truth-boundary correction

Historical Geometry evidence observed all 31 coherent candidate groups as positive algebraic signed volume in the Object source frame. That remains a valid numeric observation of the candidate in that declared frame.

It is **not** retained as semantic outward authority.

Current policy explicitly requires:

`positive_signed_volume_defines_outward = false`

Reason: Object Technical Art PR #16 at current exact head `7fa10bff981e49c9ea3396b83c4c6d731a90d146` owns source-to-target coordinate/parity transport. Its receiving evidence demonstrates that a handedness-changing transport can legitimately reverse algebraic signed-volume sign while preserving the same intended exterior surface. Geometry therefore treats sign as a frame-bound diagnostic only.

Hard Surface owns source exterior/interior semantics. Geometry owns coherent topology representation and exact semantic binding. Technical Art owns coordinate/parity transport and target-host front-face adaptation. Materials / Art / independent QA own rendered shading/culling acceptance.

## Exact-head structural verification

Dedicated current workflow:

**`35285542085 — Object Geometry rigid-shell source-exterior rebind evidence`**

Exact head:

`031d0720197698906b54ee8d327f272950aa758d`

Result:

**SUCCESS**.

Matrix:

- Python `3.11` — SUCCESS;
- Python `3.13` — SUCCESS.

The workflow:

- compiles structural tools/tests;
- runs the complete Object regression suite on both Python versions;
- fetches exact Hard Surface PR #34 head `77a4058b...`;
- places that donor in a separate detached worktree;
- rebuilds the unchanged historical Geometry candidate and receipt;
- runs the exact Hard-Surface-owned source-exterior verifier against that candidate;
- builds the new Geometry source-exterior semantic-rebind receipt;
- checks the exact canonical face digest and 812/812 match state;
- independently computes and checks the Hard Surface contract Git blob;
- retains exact evidence from the Python 3.11 lane.

Historical Object Geometry workflow at the same current head:

**`35285542063 — Object Geometry rigid-shell orientation evidence` — SUCCESS**.

This confirms the semantic rebind did not break the original structural candidate evidence.

## Retained current evidence

Artifact ID:

`10523648540`

Artifact name:

`object-geometry-rigid-shell-source-exterior-031d0720197698906b54ee8d327f272950aa758d`

Size:

`16,750 B`

GitHub-reported SHA-256:

`de0302fa277a92c1e49656f8d1ee1b78120316b256c80f105851825ba4a9871c`

No independent local archive rehash is claimed in this activation. GitHub artifact metadata is the evidence for that digest.

Historical Geometry artifact `10519918043` at historical exact head `606d8189...` remains provenance and is not deleted or silently relabelled by this activation.

## Handoffs recorded

Current handoffs:

- Object Geometry PR #33: comment `5722442346` — exact current head, current CI/artifact, 812/812 donor bind, sign-boundary correction, no geometry/adoption retune.
- Object Hard Surface PR #34: comment `5722443718` — exact owner evidence consumed without transfer of Hard-Surface authority.
- Object Technical Art PR #16: comment `5722444408` — no transport retune requested; Geometry now explicitly permits transport-induced sign reversal without losing source-exterior identity.
- UC PR #200: comment `5722445480` — product evidence reinforces the shared observer's sign-not-outward rule, but no Object shared-observer rebind is claimed because UC #200 remains unmerged.

No handoff asks Materials, Art, QA, Runtime, physics or gameplay to accept this candidate.

## UC continuity

UC PR #200 remains:

- OPEN;
- DRAFT;
- UNMERGED;
- MERGEABLE;
- exact head `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`.

The shared observer already keeps signed orientation neutral and frame-declared. This product activation did not duplicate that shared implementation.

If UC #200 later merges, Object may claim shared-observer coverage only after pinning the exact merged UC identity and rerunning product-local evidence. The current Object PASS does not transfer automatically into that future receiver.

## Provenance / rollback

Product rollback layers remain explicit:

- historical Geometry candidate exact head: `606d8189a3bf4502141d8038f08d35d421829dde`;
- current semantic-rebind Geometry head: `031d0720197698906b54ee8d327f272950aa758d`;
- exact Hard Surface semantic donor: `77a4058b305fab7fd04dab94781b9460f089727e`;
- Technical Art current transport owner observed: `7fa10bff981e49c9ea3396b83c4c6d731a90d146`;
- UC neutral observer candidate remains separate at `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`.

Coordination rollback target for the complete immediately preceding Geometry status:

`f291e35e24c4e5f83f333e820afb237aead9c188`

That blob preserves the full preceding UC #200 activation and its earlier rollback chain. This current status does not attempt to rewrite that historical record.

## Four-root gate

- **Truth:** coherent winding, source-exterior semantics, algebraic signed-volume sign and renderer front-face policy are now explicitly separate facts. Geometry no longer lets a positive source-frame sign silently stand in for semantic outward.
- **Agency / non-domination:** Hard Surface retains source semantic authority; Geometry does not self-authorize adoption; Technical Art retains transport/front-face authority; receiver owners remain free to accept or reject downstream use.
- **Continuity:** historical candidate head/result/artifact are preserved; exact donor head/blob/digest, current head, current CI, artifact digest, comments and predecessor status blob are explicit and rollbackable.
- **Wisdom before speed:** the candidate mesh was not rebuilt merely because stronger semantic evidence arrived. The smallest sufficient repair was to bind existing structural evidence to the exact owner semantics and correct the claim boundary.

The four AXM roots remain the merge gate.

## Explicit non-claims / next trigger

This activation does **not** establish source adoption, automatic winding repair, a universal signed-volume/outward rule, target-host renderer front-face/culling policy, final normals/tangents/UV/material quality, Technical Art transport adoption, self-intersection freedom beyond already-owned evidence, physical/collision/manufacturing certification, Runtime/device acceptance, gameplay suitability, CANON, production readiness, game readiness or Geometry mastery.

Do not change the Object candidate again by cadence. A legitimate next Object Geometry trigger requires a new measured structural defect, an explicit source-owner adoption request, or a future exact merged-UC observer identity that warrants a product-local rebind/rerun.
