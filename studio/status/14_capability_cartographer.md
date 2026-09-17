# Capability Cartographer Status

- Scan started: `2026-09-17T11:57:33Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_DIRECTION_FRAME_CHAIN_IDENTITY_MAP / CHARACTER RIGGING->TECH_ART->UC PALETTE FRAME BRIDGE PASSES BUT TARGET-HOST NEUTRAL SHADED FRAME REMAINS HOLD / ANIMAL STATIC POSITION+UV+HANDEDNESS AND ORTHOGONALITY PASS BUT DEFORMED NORMAL+TANGENT DIRECTION EQUIVALENCE REMAINS HOLD / PF #38 REFINED WITH EXPLICIT DIRECTIONAL FRAME-CHAIN IDENTITIES / NO GENERIC UC DEFORMED-NORMAL-TANGENT API OR CORRECTION YET / UC #184 MERGED AND #187 ACTIVE BOUNDED OBSERVER SO NO DUPLICATE TOPOLOGY LANE / NO PRODUCT OR FRAMEWORK CODE MOVE`

## Selected material cross-repo learning

Fresh Character and Animal evidence now supports a stronger reusable provenance rule:

> **Directional evidence is a chain, not one `direction-frame PASS`. Exact positions, exact or near-exact NORMAL/TANGENT payloads, a mathematically correct upstream deformation operator, or restored orthogonality can each pass independently while downstream direction identity or target-host shaded interpretation still fails.**

The reusable capability is therefore an **evidence/provenance relationship between directional payload, coordinate frame, deformation operator, direction-transform convention, transport basis, receiver application and observation space**. The actual deformation/shading algorithms remain domain- and receiver-owned.

The strongest supported placement is **Profession Fabric #38 for the experimental evidence vocabulary only**. This scan does **not** support a generic UC deformed-normal/tangent API, one canonical tangent correction, or automatic receiver repair: Character and Animal currently expose different unresolved parts of the frame chain.

## Evidence chain

### 1. Character proves the owner deformation frame reaches the current UC palette

Character Technical Art PR #21 remains open/draft/mergeable at exact current head:

`c007c327f2613989581192602338435b67b748d7`

It consumes Rigging PR #17 exact owner-frame head:

`a218b2cf2727482a78db8ab21afcf1bb72637bcc`

with exact local affine reference:

- deformation gradient: `D=(1-w)I+wR(theta)`;
- normal reference: `inverse_transpose(D)`.

Technical Art reconstructs the effective 3×3 map from the actual current UC skin palette plus the existing Character JOINTS/WEIGHTS and compares both the deformation gradient and inverse-transpose normal matrix after the explicit Character Z-up → glTF Y-up basis conversion.

Across 30 bounded side/pose/group comparisons:

- maximum effective-gradient component delta: `3.6292873706322837e-09`;
- maximum inverse-transpose normal-matrix component delta: `3.6292873706322837e-09`;
- gate: `5e-6`;
- helper-disabled negative: `0.0015838176012039184`, rejected;
- prior 321-key current-UC position proof reproduces at `8.161784431363273e-08 m` maximum residual.

Scoped result remains:

`PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_AND_RIG_GRADIENT_PALETTE_TRANSPORT_TO_CURRENT_UC__HOLD_TARGET_ENGINE_DIRECTION_FRAME`

This is a real internal frame-transport PASS. It is not target-engine direction-frame or shaded equivalence.

### 2. Character target-host evidence proves the next frame edge is still unresolved

Materials PR #18 consumes the exact current transport GLB in real Godot 4.7.2 GL Compatibility.

Unshaded target/reference position coverage is nearly exact: only `0–4` XOR pixels per `630k` frame. Yet at exact neutral sample `160 / 0°`, where the accepted pose-recomputed and frozen-neutral reference normals coincide, the target already has a large shaded mismatch:

- front: `33,065 / 33,640` foreground pixels changed;
- three-quarter: `28,767 / 29,597`;
- grazing: `15,990 / 17,641`.

Materials therefore holds:

`HOLD_CHARACTER_REVIEW006_CURRENT_TARGET_DIRECTION_FRAME__NEUTRAL_SHADED_BASELINE_MISMATCH`

Visual QA independently keeps the neutral target-host direction-frame baseline failed/blocked. This means later ±30° shaded differences cannot yet be attributed specifically to deformation.

The important Cartography distinction is that **the Character owner-frame → UC-palette edge is green while the real receiver frame-application/shaded edge is not**.

### 3. Animal independently proves static transport and orthogonality are not deformed direction identity

Animal Rigging PR #25 remains open/draft/mergeable at exact current head:

`e4ce8c1f4c3deb55220cf962206d51013d0cfe73`

Across its exact retained 41-key transported GLB:

- position max residual: `3.712575483167813e-08 m` — PASS;
- UV max residual: `2.6656007523325565e-08` — PASS;
- tangent-W mismatches: `0` — PASS;
- NORMAL deformation excess versus geometry-rederived owner frame: `7.541933278181338°` — HOLD;
- corrected TANGENT deformation excess: `3.6840862372161047°` — HOLD.

A post-skin Gram–Schmidt witness restores tangent⊥normal to:

`|n·t| <= 1.6653345369377348e-16`

but still does not restore owner-frame direction equivalence.

So Animal demonstrates another independent non-transfer rule: **frame-constraint correctness can PASS while directional identity remains HOLD**.

Its later normalized-u16 weight rebind keeps the same historical direction-frame HOLD intact while position differences stay bounded, further proving the storage/weight representation question and the direction-frame question are separate obligations.

## Cross-domain map

The two domains expose different edges of one reusable evidence graph:

`direction payload identity`
→ `source coordinate-frame identity`
→ `deformation-operator identity`
→ `direction-transform convention`
→ `transport coordinate transform`
→ `receiver frame-application identity`
→ `observation-space / shaded-response claim`

Character is currently green through the UC-palette deformation-map edge but held at the real target receiver/shaded edge.

Animal is green for static payload/position/UV/handedness and orthogonality, but held because its transported static directional fields do not reproduce the geometry-rederived owner directions under deformation.

A single `direction_frame_pass=true/false` record would collapse materially different evidence and could silently transfer a PASS across an unproven edge.

## Profession Fabric placement — refine existing #38, no new framework

Cartography refined existing `mike-axiom-mir/axm-profession-fabric` issue #38 in comment:

`5714023815`

Proposed experimental evidence identities:

- `direction_payload_identity` — exact directional payload plus handedness/sign semantics;
- `source_coordinate_frame_identity` — exact source basis/handedness/units;
- `deformation_operator_identity` — exact owner deformation map or skin-palette identity;
- `direction_transform_identity` — exact semantic transform for the directional quantity, including normalization/orthogonalization convention;
- `transport_coordinate_transform_identity` — explicit source→transport basis conversion;
- `receiver_frame_application_identity` — exact importer/engine evaluation path;
- `observation_space_identity` — exact space in which equivalence is asserted;
- independent obligation verdicts for static payload transport, deformation-map equivalence, direction-frame constraints, receiver application and shaded/visual response.

Suggested evidence-only binding state:

`BOUND_EXACT | BOUND_DIVERGENT | BINDING_MISSING | NOT_EVALUATED`

Core non-transfer rules:

- POSITION PASS does not imply NORMAL/TANGENT PASS;
- exact/near-exact neutral direction payload does not imply deformed direction equivalence;
- orthogonality/normalization PASS does not imply owner-direction equivalence;
- deformation-matrix/palette PASS does not imply target-engine frame application or shaded equivalence;
- a neutral receiver baseline mismatch blocks attributing later shaded differences specifically to deformation.

PF remains evidence/provenance procedure only. It does not own normal generation, tangent reconstruction, skinning, importer behavior, shaders, target-host correction or visual acceptance.

## Returns to active product lanes

Cartography returned the placement boundary to Character Technical Art PR #21 in comment:

`5714026806`

The return preserves the exact current palette-frame PASS and target-engine HOLD. It explicitly requests no Character-specific direction policy in UC and no Materials/lighting/Rigging/Animation retune to force agreement.

Cartography returned the second-domain interpretation to Animal Rigging PR #25 in comment:

`5714029091`

The return preserves the measured NORMAL/TANGENT direction HOLD and explicitly does not promote the Gram–Schmidt constraint witness into an adopted correction.

No product code was changed by Cartography.

## Why no new UC direction-frame lane was opened

There is now enough evidence for a **shared provenance distinction**, but not yet enough for one neutral mechanism-level correction/API:

- Character can reconstruct the exact owner affine frame through the current UC palette, but the real receiver already disagrees at neutral shaded baseline; exact cause remains unresolved.
- Animal's static transported directional attributes diverge from its geometry-rederived owner frame under deformation; orthogonalization fixes a constraint but not the intended direction.

Those are not yet one proven reusable receiver algorithm. Opening a UC `deform_normals_and_tangents()` or automatic tangent correction now would choose semantics before the evidence supports them.

UC may become the correct home later for a **read-only neutral observer** or exact glTF/skin directional contract if multiple domains converge on the same mechanism and truth boundary. This activation holds that extraction.

## Fresh UC continuity — prior liveness placement merged, fan observer is already active

The previous Cartography placement for source-vertex liveness has progressed:

- UC PR #184 is **merged** at merge commit `fed35116c1aabe54789f1197b7b2423b3b516169`;
- it remains liveness-only and performs no pruning/repair.

A separate successor, UC PR #187, is already open/draft/mergeable at exact head:

`f47fa61d55220051619ab4414932d76a94a449d2`

It addresses exact-source vertex-fan connectivity after the earlier expansion was correctly rejected for potentially quadratic high-incidence behavior. The replacement builds bounded incidence and tests a `1,024`-triangle shared-edge case while keeping old edge-topology statuses unchanged. It remains observer-only and adds no prune/split/weld/repair operation.

This is correctly separated active UC work, so Cartography opened no duplicate topology issue or PR.

## Other fresh scan pressure intentionally not centralized

Building Hard Surface PR #15 now supplies a second manufactured service-surface identity/frame/metric-domain family after Object, but its own boundary correctly says downstream UV/material mechanism evidence is still needed before centralizing a source-surface abstraction. The previous spatial-field PF vocabulary already records the evidence relationship, so no competing UC/PF implementation was opened from Building alone.

Character Runtime PR #23 is testing one exact byte-identical bilateral scale-accessor deduplication. The existing PF logical-payload/storage-representation distinction already covers its evidence shape; one glTF accessor-alias mechanism is not enough reason to open a generic compactor lane.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178 / merged PR #179** — read-only attribute-aware indexed-surface eligibility observation including explicit cross-source attribute/protected-split grouping; no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity; producer quantization/adoption remains separate.
- **UC #182 / merged main `8eb2fafb...`** — explicit rectangular verified material-bundle representability; receiver capability only, not atlas right-sizing/packing/adoption.
- **UC #183 / merged PR #184** — source-array vertex-liveness observation; observer only, generic pruning/repair held.
- **UC #186 / active draft PR #187** — bounded exact-source vertex-fan observation; separate from edge status and liveness, no mutation authority.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG; migration vs bounded claim verdict; parallel representations; temporal/instrumentation identity; harness-vs-claim verdict; scoped obligations/applicability domains; logical payload vs storage/decode identity; field-domain + spatial-parameterization binding; **new proposed directional frame-chain identity and independent receiver/shaded obligations**.

## Explicit non-claims

- No Character source, topology, Rigging profile, Animation, material, transport GLB, UC skin-palette code or target-engine behavior was changed by Cartography.
- Character Technical Art's internal affine-frame/palette PASS is not target-engine direction-frame or shaded equivalence.
- No Animal source, rig, weights, UVs, static NORMAL/TANGENT payload, clip or transport GLB was changed.
- Animal Gram–Schmidt orthogonality evidence is not an adopted tangent reconstruction or owner-direction PASS.
- No generic UC deformed-normal/tangent API, correction, renderer rule or target-engine workaround was opened.
- No PF implementation was authored; comment `5714023815` is an experimental evidence/provenance refinement only.
- UC #184 merge and #187 active work do not authorize topology cleanup or product source changes.
- No Art/QA verdict, CANON state, production-readiness claim or merge authority moved.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch Character Technical Art / Materials for a neutral target-host frame-application explanation or exact receiver-side directional observer; require the neutral baseline to close before attributing deformed shaded behavior.
- Watch Animal Rigging / Technical Art / Materials for an explicit direction reconstruction candidate; preserve owner-frame equivalence separately from orthogonality and shaded preference.
- If Character and Animal converge on the same product-independent glTF/skin directional observation contract, reassess a read-only UC observer before any mutator/correction.
- Watch UC PR #187 for merge and require downstream consumers to explicitly rebind before claiming UC-backed source-index fan evidence.
- Do not centralize Building service-surface parameterization or Character GLB accessor deduplication until a second mechanism-level case supports a reusable implementation rather than only a shared provenance rule.

## Recovery / provenance

Previous Cartography coordination commit: `ef337c079de0a087ac26e4e735d7f88d3257773b`.
Previous status blob SHA before this update: `d97a588f357c9ffae82c054d5bb69b46eefeaa3c`.
PF #38 direction-frame refinement comment: `5714023815`.
Character Technical Art PR #21 return comment: `5714026806`.
Animal Rigging PR #25 return comment: `5714029091`.
