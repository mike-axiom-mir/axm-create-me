# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_EXACT_42_TO_84_RENDER_DOMAIN_PRESERVED_BY_UC_INDEX_ELIGIBILITY_OBSERVER / UC_PR_178_DRAFT / ANIMAL_TECH_ART_PR_3_DRAFT / OBSERVER_ONLY / NO_AUTO_REINDEX / VISUAL_RUNTIME_ADOPTION_HELD / DEFORMED_DIRECTION_FRAME_HOLD_PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art / Art Direction / Visual QA / Runtime / Capability Cartography status, the existing Animal Technical Art lane, UC issue #170, and current `axm-universal-creation` before selecting work.

`axm-create-me` remains **coordination only**. No product implementation or retained execution artifact was placed here. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The highest-leverage shared gap was the already-proposed UC issue #170: multiple domains now have exact evidence that safe indexed representation decisions require **attribute-aware eligibility**, not position-only welding and not an automatic mutating reindexer.

Fresh evidence reinforced the gap:

- Building Runtime's compact-v2 post-normal indexing shows strong structural storage reduction but still carries nonzero raster delta and does not justify automatic UC adoption.
- Animal Geometry's UV/tangent basis deliberately expands **42 source vertices / 80 triangles** into **84 render vertices / 80 triangles** for seam/island/tangent identity.
- Nature has already demonstrated that protected position-coincident splits can also be topological/non-attribute identity.
- Runtime, Art Direction and Visual QA still own product-specific cost and acceptance decisions.

Before opening work, current UC main was inspected at **`32fe27fa8f244839ee4c6a10c6219adcef2c065f`**. No open UC PR or branch implemented issue #170, so a new bounded UC implementation lane was justified. Existing Animal Technical Art PR #3 was reused for the exact cross-repo consumer proof; no duplicate Technical Art lane was opened.

## Selected bounded gap

Question:

> Can UC provide one neutral, fail-closed **indexed-surface eligibility observer** that preserves source-vs-render vertex-domain lineage and all declared render attributes / protected split identity, without mutating the surface or deciding adoption for product owners?

This is deliberately smaller than a generic reindex/weld tool.

## Smallest reusable UC repair

UC draft PR **#178 — `Add fail-closed indexed surface eligibility observer`** was opened from current main.

Exact UC PR head:

**`3601688dc15fb752fcd51bb536722db2f1267a8f`**

Exact observer blob:

**`2cbcafd21c2d8d44cf53ba67120f35ff5bd06bc5`**

New neutral contracts:

- input: `axm.indexed-surface-lineage/v0.1`;
- report: `axm.indexed-surface-eligibility-report/v0.1`.

The observer is read-only. It keeps source and render domains separate; requires explicit source→render lineage when the render domain is expanded/remapped; evaluates exact supported tuples for `POSITION`, `NORMAL`, `TEXCOORD_0`, `TANGENT`, `COLOR_0`, `JOINTS_0`, and `WEIGHTS_0`; and includes caller-owned protected split identity in candidate keys.

Fail-closed states include:

- `HOLD_ATTRIBUTE_SEAM_AMBIGUITY` when an expanded/remapped render domain omits an explicit protected-split declaration;
- `NOT_EVALUATED_UNSUPPORTED_CHANNEL` when a present channel is outside the bounded supported set.

The observer separately reports `RENDER_DOMAIN_SPLIT_REQUIRED` so a valid source→render expansion is not treated as duplication debt simply because positions coincide. It never emits a replacement mesh and never authorizes adoption.

## UC self-proof

Dedicated workflow:

**`35183476969 — Indexed surface eligibility evidence` — SUCCESS**

Full UC `Tests` on the same exact head also completed **SUCCESS**, along with the other triggered general UC verification workflows.

Retained neutral evidence artifact:

- ID: **`10480993046`**;
- size: **10,909 B**;
- archive SHA-256: **`3f7e8bc84026b66e93023aa4f3b0f847be111a993822084e8995eeea08ade9f8`**;
- independently downloaded / rehashed SHA-256: **same value**;
- exact evidence head: **`3601688dc15fb752fcd51bb536722db2f1267a8f`**;
- observer file SHA-256: **`158218188f324952da29ac5996909837f176897054452f319f8e6405b19a9e9d`**.

The retained neutral cases prove source-index preservation, exact full-tuple dedup candidacy, UV seam preservation, explicit non-attribute protected split preservation, missing-split HOLD, and unsupported-channel fail-closed behavior.

## Exact cross-repo Animal proof

The existing Animal Technical Art PR #3 was advanced rather than opening another lane.

Exact Technical Art head:

**`9708203c216b0aaa8e996745a3a5cc0af20a608c`**

Exact Geometry owner:

- Geometry UV/tangent head: **`ca4bb8a2f144231f8755eacc980785d1807b79db`**;
- Geometry basis module blob: **`ba0b4e620f132413606177358e47bd32ae4d4965`**;
- source domain: **42 vertices / 80 triangles**;
- render domain: **84 vertices / 80 triangles**.

Technical Art rebuilds Geometry's exact owner evidence and presents only its exact source/render lineage, attributes, indices, mapping and source-owned semantic split identities to the pinned UC observer. Animal seam/tangent/topology semantics are not copied into UC.

Scoped result:

**`PASS_ANIMAL_EXACT_42_TO_84_RENDER_DOMAIN_PRESERVED_BY_UC_INDEX_ELIGIBILITY_OBSERVER`**

Dedicated workflow:

**`35183706491 — UC indexed surface observer evidence` — SUCCESS**

Every same-head Animal workflow also completed **SUCCESS**.

Exact observer result:

- source: **42 vertices / 80 triangles**;
- exact source+position-only unique identities: **42**;
- actual render domain: **84 vertices / 80 triangles**;
- UC candidate: **84 vertices / 80 triangles**;
- eligibility: **`PRESERVE_RENDER_DOMAIN_INDEXING`**;
- render-domain state: **`RENDER_DOMAIN_SPLIT_REQUIRED`**;
- `position_only_weld_safe`: **false**;
- position-coincident split groups: **24**;
- groups differing in `TEXCOORD_0`: **22**;
- groups differing in `TANGENT`: **24**.

This is the important negative result: a naïve source+position view can see only 42 identities, but the exact render contract requires all 84. UC therefore refuses the false 84→42 collapse.

Fail-closed controls on the same exact Animal lineage:

- omit protected split declarations → **`HOLD_ATTRIBUTE_SEAM_AMBIGUITY`**, no candidate;
- add a present unsupported channel → **`NOT_EVALUATED_UNSUPPORTED_CHANNEL`**, no candidate.

## Retained cross-repo evidence

Animal/UC observer artifact:

- ID: **`10481177916`**;
- name: `animal-uc-indexed-surface-observer-9708203c216b0aaa8e996745a3a5cc0af20a608c`;
- size: **20,400 B**;
- GitHub archive SHA-256: **`00431a31e1db08d4179bac802b2881234e526d7db5ff9520ad09b0f5457839fd`**;
- independently downloaded / rehashed SHA-256: **same value**.

The archive retains the exact Geometry owner receipt and right-side basis, Technical Art/Geometry/UC identity pins, exact lineage input, UC observer report, both fail-closed negative reports, receipt and SHA-256 manifest.

## Coordination handoffs

Evidence was returned to:

- UC issue #170: comment **`5708861539`**;
- UC PR #178: comment **`5708863492`**;
- Animal Technical Art PR #3: comment **`5708867022`**;
- Animal Geometry PR #20: comment **`5708869296`**.

## Authority / truth boundary

- **Geometry / product domains** own source topology, source→render mapping, UV/tangent/material/semantic split identity.
- **Technical Art** owns the cross-repo contract proof and transport/integration plumbing.
- **UC** owns only neutral eligibility observation; no Animal, Building, Map, Nature or product-specific semantics were centralized there.
- **Runtime** owns measured storage/performance tradeoffs and representation adoption evidence.
- **Art Direction / Visual QA / Materials** own visual/shading acceptance.
- **Rigging** retains the existing Animal deformed normal/tangent direction-frame HOLD.

This PASS does **not** establish a mutating reindexer, automatic dedup/adoption, byte-identical rendering, visual acceptance, runtime/memory/FPS benefit on a product, target-device acceptance, deformed tangent-frame correctness, CANON, Profession Fabric promotion or production readiness.

## Four-root gate

- **Truth:** exact source and render identities remain separate; unsupported/ambiguous cases return HOLD rather than optimistic collapse.
- **Agency / non-domination:** product owners retain their own seam/topology/visual/runtime adoption decisions; UC only reports neutral structural eligibility.
- **Continuity:** existing issue #170 and Animal Technical Art PR #3 are advanced instead of spawning duplicate lanes; exact owner revisions and artifacts are pinned.
- **Wisdom before speed:** a read-only observer is implemented before any mutating optimizer, and a strong apparent 84→42 position-only reduction is explicitly refused because it would destroy valid render identity.

## Current state

`PASS_ANIMAL_EXACT_42_TO_84_RENDER_DOMAIN_PRESERVED_BY_UC_INDEX_ELIGIBILITY_OBSERVER / UC_MAIN_32FE27FA / UC_PR_178_HEAD_3601688D_OBSERVER_BLOB_2CBCAFD2 / UC_WORKFLOW_35183476969_SUCCESS / UC_ARTIFACT_10480993046_SHA_3F7E8BC8 / ANIMAL_TECH_ART_PR_3_HEAD_9708203C / GEOMETRY_HEAD_CA4BB8A2_42_SOURCE_84_RENDER_80_TRIANGLES / ANIMAL_WORKFLOW_35183706491_SUCCESS / ANIMAL_ARTIFACT_10481177916_SHA_00431A31 / PRESERVE_RENDER_DOMAIN_INDEXING / RENDER_DOMAIN_SPLIT_REQUIRED / POSITION_ONLY_WELD_FALSE / NO_AUTO_REINDEX / VISUAL_RUNTIME_ADOPTION_HOLD / DEFORMED_DIRECTION_FRAME_HOLD / HOLD_CANON_PRODUCTION_READINESS`
