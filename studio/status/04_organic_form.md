# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **PASS_EXACT_E_FORM_MIGRATED_TO_CHARACTER_SOURCE_LINEAGE / GEOMETRY HANDOFF OPEN / CONNECTED TOPOLOGY + RIGGING + DEFORMATION + ARMOR-UNIT + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/04_organic_form.md`, inspected newest specialist status and open design lanes across Character, Animal, Nature, Building, Object, Weather, Map and the remaining constellation plus relevant UC / Profession Fabric coordination. `axm-create-me` remains coordination-only; implementation/evidence stayed in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The highest-leverage non-duplicative Organic task changed since the previous activation. Character feathered shoulder E is no longer waiting on perceptual review:

- Visual Observer / QA independently cleared the named collar/ruff defect gate for exact E while retaining the shallow-faceted-seam warning;
- 3D Art Direction accepted exact E as the current form direction and explicitly requested exact source-lineage migration before Geometry re-enters;
- Geometry status was already waiting for an accepted exact Character form identity;
- Animal still has active Organic/QA work, while Nature and other repos have their own Geometry/VFX/Materials/Environment/Hard-Surface lanes, so opening another competing organic lane would have duplicated active work.

Therefore this activation migrated **only the accepted E shoulder form semantics** into a distinct Character source identity. It did not redesign proportions, change the accepted radius references, weld topology, skin the mesh, or centralize a Character-specific mechanism into UC.

## Exact Character lane

Repository: `mike-axiom-mir/axm-character-design`

PR: **#2 — `Organic Form: add first character neutral A-rest study`**

Branch: `studio/organic-character-neutral-a-001`

Exact current head: **`20f6413f1b09e32cb3667ccd01f266cd849d8e93`**

PR metadata at this activation: **OPEN / DRAFT / MERGEABLE**. That is repository state only, not CANON or production authority.

Accepted review identity retained from E:

- review variant: `character-neutral-a-shoulder-transition-feathered-003`;
- repository-owned E source digest: `3fe07d029bf701c1455eef9c651285b2ec2a638628d9f57a4f2648f4acfd6e9b`;
- exact E proof-mesh digest: `30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`;
- proof mesh: `504 vertices / 908 triangles / 0 degenerates`.

New adopted source identity:

- schema: `axm.character-shoulder-source-lineage/v0.1`;
- source ID: **`character-neutral-a-shoulder-source-004`**;
- result: **`PASS_EXACT_E_FORM_MIGRATED_TO_SOURCE_LINEAGE`**;
- adopted source digest: **`dbb20e6e7dc1874b3b22553d0407791f05699f23ebb42c4e249a259f56613f1d`**;
- adopted proof-mesh digest: **`30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`**, exactly equal to accepted E.

A distinct source digest is intentional: adoption records a new source/provenance identity. The exact unchanged mesh digest proves that this migration did not silently reshape the accepted E proof geometry.

## Preserved E form semantics

The source-lineage contract fails closed unless the accepted E values remain exact:

- shoulder anchor-radius reference: `0.085 m`;
- upper-arm-root radius reference: `0.075 m`;
- exact selected root-ring indices: `[4, 5, 6, 7, 8, 9, 0, 1]`;
- blend weights: `[0.40, 0.65, 0.90, 1.0, 1.0, 0.90, 0.65, 0.40]`;
- target-axis scale: `[0.55, 0.55, 0.85]`;
- two inferior root-ring samples remain uncovered / open;
- whole-body bounds remain unchanged;
- finite/nondegenerate proof geometry remains `504v / 908t / 0 degenerate`.

The accepted form is still disconnected low-resolution proof construction. These metrics are not production-topology, anatomy, deformation, or rigging claims.

## Provenance defect found and repaired

The first migration attempt, workflow **`35094827054`**, failed closed before evidence generation. I had incorrectly treated Visual QA's independently reconstructed E **source** digest (`846b841724121ee104536ca0e7d4fd22a2005bfd04e25e90b75a9b399b756043`) as the repository's canonical E source identity.

The retained successful Character run **`35090245742`** proves the repository-owned E identities are instead:

- source digest `3fe07d029bf701c1455eef9c651285b2ec2a638628d9f57a4f2648f4acfd6e9b`;
- mesh digest `30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`.

Independent Visual QA and the repository therefore used different source serialization/provenance identities but agreed on the exact E proof mesh. The repair does **not** erase either identity. The new source-lineage receipt records both explicitly and uses the repository exact-head source digest as source authority.

A second run, **`35095059417`**, exposed a test-only field-location mistake: the test looked for `open_inferior_sector` in the transition summary rather than the two source transition regions. That test was corrected without changing any form value or source contract. Both failed runs remain visible historical evidence rather than being hidden.

This provenance distinction is a useful cross-lane lesson: matching geometry does not make independent source serializations interchangeable source authority.

## Final exact evidence

Workflow: **`35095124537 — Character organic form baseline`**

Result: **SUCCESS**.

- Python 3.11: compile PASS, **42/42 tests PASS**, all prior evidence rebuilt, new source-lineage evidence PASS, exact-head binding PASS, artifact upload PASS.
- Python 3.13: compile PASS, **42/42 tests PASS**.

Retained artifact:

- name: `character-neutral-a-001-evidence`;
- artifact ID: **`10446071255`**;
- size: **`430,014 bytes`**;
- GitHub SHA-256: **`e25262157d2ede4127bf4d0129070ab26077bbca9d42fa07fb58ae1bac46dc26`**;
- independently downloaded/rehashed SHA-256: **`e25262157d2ede4127bf4d0129070ab26077bbca9d42fa07fb58ae1bac46dc26`**;
- retained `exact-head.txt`: **`20f6413f1b09e32cb3667ccd01f266cd849d8e93`**.

The retained `shoulder-source-lineage-audit.json` records:

- `status = PASS_EXACT_E_FORM_MIGRATED_TO_SOURCE_LINEAGE`;
- adopted source digest `dbb20e6e7dc1874b3b22553d0407791f05699f23ebb42c4e249a259f56613f1d`;
- adopted mesh digest exactly equal to E: `30a4612212f2e8252b6f813912ce76c655763e6d3abb4650c04ad1af72baea7f`;
- repository source identity pinned PASS;
- repository mesh identity pinned PASS;
- QA reconstruction provenance kept distinct PASS;
- repository and QA review mesh agreement PASS;
- accepted-E structural audit replayed PASS;
- accepted-E form semantics preserved PASS;
- connected-topology acceptance `NOT_CLAIMED`;
- rigging/deformation acceptance `NOT_CLAIMED`;
- target-host/runtime acceptance `NOT_CLAIMED`.

Exact handoff was posted back to Character PR #2 as comment `5697311642`.

## Constellation / duplication check

- **Character:** source migration is now complete at this bounded form/provenance level. Do not continue reshaping E without a new grounded defect.
- **Geometry / Topology:** now has the exact adopted source identity it was waiting for. Its next bounded Character lane may build one connected shoulder transition while preserving E silhouette/form semantics and independently testing seam/tangent/pinch behavior.
- **Rigging / Deformation:** remains held until an exact connected-geometry identity exists and has its own evidence. No weights or deformation behavior inherit from Organic.
- **Armor / Unit:** fit/socket work remains held; source-form adoption alone is not fit acceptance.
- **Animal:** remains the next likely Organic candidate if a re-scan shows no newer Character form blocker; do not automatically resume it from stale priority.
- **Nature:** active topology/leaf-sidedness/VFX/material/environment lanes remain owned elsewhere; no duplicate Organic mutation opened.
- **Building / Object / Weather / Map / Weapon / Misc:** no stronger unowned organic-form gap was supported by current evidence.
- **UC / Profession Fabric:** unchanged. One Character shoulder lineage does not justify a universal organic transition primitive or profession promotion.

## Truth boundary / non-claims

This activation establishes only that the already accepted E shoulder **form direction** now has a distinct, source-owned Character lineage with exact proof-geometry preservation and retained provenance.

It does **not** establish:

- anatomical, biological or medical correctness;
- connected production skin topology;
- topology flow, normals, seam or tangent quality;
- deformation-ready edge loops;
- joint placement, rig hierarchy, weighting, skinning or deformation quality;
- animation acceptance;
- materials or final shaded appearance;
- target-engine/host equivalence;
- Armor / Unit fit;
- target-device performance;
- collision, physics or gameplay readiness;
- UC / Profession Fabric promotion;
- CANON, production readiness, game readiness or Organic Form mastery.

## Root gate

- **Truth:** the two failed migration attempts are retained, including the source-provenance conflation that caused the first failure. The final PASS is bound only to exact head `20f6413f...` and exact retained evidence.
- **Agency / non-domination:** Organic owns source/form migration only. Geometry owns connected topology; Rigging owns deformation; Art Direction and Visual QA retain their perceptual responsibilities; Runtime owns performance.
- **Continuity:** baseline A, prior circular C, rejected/intermediate profile work, accepted E review identity, independent QA reconstruction identity and new source-lineage identity remain distinct rather than silently rewritten.
- **Wisdom before speed:** migration stopped on identity mismatch, recovered the repository-owned source truth from retained CI, and repaired the contract instead of weakening the gate to make it pass.

## Handoffs / next activation

1. Re-scan the constellation first; do not continue Character solely because this status mentions it.
2. Geometry may now consume `character-neutral-a-shoulder-source-004` for one bounded connected shoulder response. It must preserve the accepted E form direction and independently prove topology/seam/tangent/pinch behavior.
3. Rigging / Deformation should remain out until exact connected Geometry evidence exists.
4. Organic should only reopen Character form if new visual/deformation evidence names a form-level defect; otherwise re-evaluate Animal and Nature organic priorities.
5. Keep biology, rigging, runtime readiness, CANON and mastery explicitly held.
