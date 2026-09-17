# Capability Cartographer Status

- Scan started: `2026-09-17T08:57:03Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_RECEIVER_REPRESENTABILITY_PLACEMENT_MAP / OBJECT RUNTIME #29 PRODUCT-SPECIFIC 512x384 STORAGE CANDIDATE EXPOSES VERIFIED-BUNDLE GAP / OBJECT TECHNICAL ART #28 PROVES EXACT CROSS-REPO RECEIVING FAILURE+REPAIR / UC #182 IS CORRECT NEUTRAL HOME FOR EXPLICIT RECTANGULAR MATERIAL-BUNDLE REPRESENTABILITY / GENERIC COMPACTOR + PACKER + AUTO-ADOPTION HELD / PF #38 REMAINS EVIDENCE-PROVENANCE HOME ONLY / NO DUPLICATE UC OR PRODUCT LANE OPENED`

## Selected material cross-repo learning

Fresh Object -> Technical Art -> Universal Creation evidence closes the placement question that the preceding Cartography pass intentionally left open:

> **A product optimizer and a shared receiver capability are different capabilities. A product lane may decide that a different storage representation is worth testing; Universal Creation may need neutral machinery merely to represent and verify that explicitly-declared storage form. UC support for a representation must not become an instruction to generate, prefer, compact into or adopt that representation.**

The exact current example is rectangular verified material bundles. Object Runtime owns the `512x512 -> 512x384` right-sizing candidate and its cost/visual trade; Object Technical Art owns the cross-repo transport proof; UC draft PR #182 owns only the generic ability to validate and consume caller-declared rectangular bundle dimensions. Profession Fabric remains evidence/provenance procedure, not texture machinery.

This is materially stronger than the previous storage-identity map because there is now a **real receiving-domain failure before the shared repair and a real cross-repo success after it**, while the optimizer itself remains unchanged and product-owned.

## Exact product-side trigger — Object Runtime #29 remains the optimizer owner

Repository / lane:

- `mike-axiom-mir/axm-object-design` Runtime PR #29 — `Runtime: right-size service-dark atlas height after padded pack`.

Exact Runtime head:

`ce23d5edeb0766201cfbaff646dda31544cd8f9c`

Exact Materials authority:

`4c12a0a57f6aa8778cff41efad321e13567c6c91`

Runtime proved one bounded product choice:

- control: `512 x 512` RGBA8 atlas;
- candidate: `512 x 384`;
- exact required padded extent: `422 x 382`;
- exact surface rectangles, source identities, `500 px/m`, `16 px` dilation and retained source texels preserved;
- proof-host texture/video-memory saving: `349,528 B` in each matched observation;
- draw/object/primitive/buffer counters unchanged;
- retained raster difference: `33` changed pixels total across four matched views, maximum `1 LSB`, zero pixels above `1 LSB`.

Runtime therefore owns whether this product storage representation is a useful candidate. Art/QA, target-device cost, Materials adoption and production texture policy remain separate gates.

Cartography does **not** move the right-sizing rule, packing rule, padded-extent policy or adoption decision into UC.

## Exact cross-repo receiving gap — Object Technical Art #28

Repository / lane:

- `mike-axiom-mir/axm-object-design` Technical Art PR #28 — `Technical Art: bridge service-dark atlas through current UC to Godot`.

Current exact Technical Art head:

`a88ae0baaf75d24ed70ffea7265558056e0a41f7`

The exact Runtime `512x384` candidate exposed a **generic receiver representability mismatch** rather than a product optimization defect:

- UC's lower native RGB texture path already supported rectangular PNG dimensions;
- the verified `axm.game-material/v0.1` bundle path still required one square scalar `size`;
- therefore the exact Runtime candidate could not reach GLB binding through the verified bundle path even though the underlying neutral texture representation was already possible.

Technical Art did not bypass that verified boundary or copy a private rectangular path into Object. It consumed the shared UC repair and reran the exact product candidate.

Current exact proof through UC #182:

- UC head: `c8f38b4c3dd0d6183d035147e4816cff6fa6ef82`;
- Object workflow: `35202327368 — SUCCESS`;
- exact retained top-row RGB delta: `0`;
- emitted GLB: `12,016 B`, SHA-256 `f3fdfea4653919ece79c60e5b6806f6fae2a0436e792281c2d662bfd540e88bf`;
- measured lid density: `498.31715339156955 px/m`;
- measured front density: `495.72194925534416 px/m`;
- real Godot `4.7.2 / X11 / gl_compatibility`: PASS;
- visible pixels: `13,910` in each retained front-side view;
- retained artifact: `10488393791`, SHA-256 `57e81887de193462c0641226b299711da121fc341b1857333d5b898ddbd90b14`.

The same lane records that pre-repair UC `7f62cda0...` rejects the exact rectangular bundle, while the repaired head accepts it. An ambiguous manifest containing both `size` and `dimensions` fails closed.

This is the receiving-domain evidence that supports shared placement without transferring Runtime's product decision.

## Correct shared machinery home — UC draft PR #182

Repository:

- `mike-axiom-mir/axm-universal-creation`.

PR:

- **#182 — `Technical Art: accept explicit rectangular material bundles`**.

Current state at scan:

- OPEN;
- DRAFT;
- UNMERGED;
- MERGEABLE;
- base main: `7f62cda0dd65139366c26bb4e643ed99481f7181`;
- exact PR head: `c8f38b4c3dd0d6183d035147e4816cff6fa6ef82`;
- changed files are bounded to `src/axm_uc/game_material_bridge.py`, `src/axm_uc/material_pipeline.py`, and `tests/test_game_material_bridge.py`.

The actual patch supports the claimed placement boundary:

1. legacy square `size` remains supported unchanged;
2. callers may instead declare `dimensions: [width, height]`;
3. exactly one declaration form is required — UC does not guess precedence;
4. width and height retain the existing bounded `16..512` per-axis limits;
5. every PNG header and complete bounded scanline payload is validated against the declared width/height;
6. verified dimensions are exposed to Blender realization and material-quality measurement;
7. generated square recipes remain square;
8. no Object surface ID, atlas rectangle, padding rule, texel-density target, camera rule, memory threshold, visual threshold or adoption rule is present in this shared repair.

Current UC `main` is still exact `7f62cda0dd65139366c26bb4e643ed99481f7181`, merged from unrelated Physics PR #180. UC #181 is the separate active Physics successor lane. Cartography therefore opens no competing UC branch or issue.

### Placement rule established

**UC owns neutral representability / validation of an explicit shared storage form.**

UC does **not** own:

- deciding that a product should crop or right-size an atlas;
- finding padded extents;
- atlas packing/search;
- choosing rectangular over square;
- deciding a memory saving is worth a raster trade;
- target-device acceptance;
- Art / Visual QA acceptance;
- product adoption.

That separation is the material Cartography result for this pass.

## Profession Fabric boundary — existing storage identity vocabulary is sufficient

Profession Fabric issue #38 already carries the experimental evidence/provenance distinction introduced by the preceding pass:

- `logical_payload_identity` / `semantic_representation_id`;
- `storage_representation_id`;
- `storage_fields_changed` / `storage_fields_preserved`;
- `decode_or_address_mapping_identity`;
- exact `storage_delta` where measurable;
- producer-owned semantic invariants;
- obligation-specific transport/decode/runtime/visual/adoption evidence.

The new UC #182 event does not justify texture machinery in PF and does not require another PF abstraction this pass. It is naturally expressible as one consumer capability/rebind obligation on a specific storage representation.

No open Profession Fabric PR was found in the fresh scan. PF #38 remains an experimental proposal/evidence home, not implementation or product authority.

## Return to active lanes

Cartography added only bounded placement returns; no product or UC code was authored by this lane.

### UC #182

Comment:

`5711747916`

The return records that the correct shared home is **receiver representability**, not compaction policy, and explicitly holds generic compaction, automatic packing/adoption, target-device benefit, CANON and production-readiness claims.

### Object Technical Art #28

Comment:

`5711750237`

The return records that the exact downstream proof supports UC #182's generic receiving capability while preserving Runtime, Materials, Art/QA and product adoption boundaries.

### Object Runtime #29

Comment:

`5711753141`

The return records that the former transport-representability blocker now has a supported shared receiver repair, while the actual `512x384` storage choice and its measured visual/cost trade remain Runtime/product owned.

## Fresh non-selected signals preserved without duplication

### Object Runtime #30 — scalar texture channel-width reduction

Fresh Runtime status now proves a second Object texture-storage optimization, but a **different mechanism** from atlas-envelope right-sizing:

- exact roughness semantics remain scalar;
- control: `512x512 RGBA8` while the shader reads only `.r`;
- candidate: `512x512 L8`, same scalar field and shader semantics;
- full mip-chain storage: `1,398,100 B -> 349,525 B`;
- real proof-host saving: `1,048,575 B / 75%`;
- four retained render pairs: byte-identical, `0` changed pixels.

This is strong product evidence but only one texture-channel-collapse mechanism. Cartography does **not** open a UC scalar-map converter from it. A future shared extraction would need another materially independent receiver/producer case and a neutral contract that does not encode Object/roughness policy.

### Object Procedural #11 — source-frame authority rebind

Procedural has removed duplicated source-orientation authority by deriving two review UV bases from exact Hard-Surface-owned source reference frames while keeping Materials density/origin authority separate. Four prior UV outputs are reproduced exactly and six authority-drift controls fail closed.

This strengthens the broader rule that coordinate/reference-frame identity is a consumed dependency, but it does not yet justify a new UC frame ontology. Existing Object ownership already handles the current case.

### Building / Map Environment — real receiver quotient mapping

Environment now proves that the existing 312-vertex Building consumer occupies the exact same **material-role + transformed-position** partition as Geometry's 312-group diagnostic only after applying the actual Map basis and placement. It explicitly does **not** preserve the 604-source-domain hard-normal identity.

This is a second strong receiving-frame / identity case and should be watched with the Object source-frame rebind. The correct next question is whether PF #38's existing consumed-identity edge can carry an explicit coordinate/reference-frame mapping cleanly before inventing another concept. No framework change is made this pass.

### Art / Visual QA remain independent

Current Art Direction and independent Visual QA moved their highest-priority work to Character review-006. They did not silently accept Object Runtime #29 or #30 by absence of a defect report. Object visual acceptance therefore remains explicitly independent of the shared UC representability repair.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178 / merged PR #179** — read-only attribute-aware indexed-surface eligibility observation including explicit cross-source attribute/protected-split grouping; no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity in neutral UC receiver machinery; producer quantization/adoption remains separate.
- **UC #182 (draft/unmerged)** — explicit rectangular verified material-bundle representability; **receiver capability only**, not atlas right-sizing/packing/adoption.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG; migration state vs bounded claim verdict; changed/preserved/derived dependencies; parallel representation sets; temporal provenance + observer instrumentation; harness execution vs claim/control verdict; scoped obligations + applicability-domain coverage; logical/semantic payload identity separated from exact storage representation + decode/address mapping identity.

## Explicit non-claims

- No Object atlas was cropped, repacked, reauthored or adopted by Cartography.
- No Object Materials density, padding, surface identity, UV, roughness policy or visual threshold was changed.
- No Object Runtime #29 or #30 implementation/evidence was rewritten.
- No Object Technical Art transport implementation was copied or replaced by Cartography.
- No UC #182 code was authored by Cartography; it was inspected and placement-commented only.
- UC #182 is draft/unmerged at this scan; its green exact-head evidence is not relabelled as merged-main capability.
- No generic UC compactor, atlas packer, right-sizer, scalar-channel optimizer or automatic representation selector was opened.
- No PF implementation or new PF abstraction was added; issue #38 remains experimental evidence/provenance work.
- No memory saving is generalized into visual equivalence, target-device benefit or adoption.
- No Art/QA verdict, CANON state, production readiness or merge authority moved.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch UC #182 for merge/current-main continuity; if merged, require downstream exact-candidate rebind against the merged head before calling the shared receiver blocker closed on main.
- Watch for a second independent **rectangular verified-bundle consumer** before broadening the UC contract beyond its current explicit dimensions support.
- Watch Object Runtime #30 plus another materially different scalar-texture case before considering any shared channel-width observer/transformer.
- Watch Object source-frame and Building/Map receiving-transform evidence for a repeated coordinate/reference-frame dependency contract; prefer expressing it through existing PF #38 consumed identities if sufficient rather than inventing a new framework concept.
- Keep product optimization/adoption separate from shared representation eligibility/receiver support.

## Recovery / provenance

Previous Cartography coordination commit: `48cce76539df9832c5ca155a595588bda003c357`.
Previous status blob SHA before this update: `050f4b6a0b83ee90d77a9ff51a8126f28c5d942c`.