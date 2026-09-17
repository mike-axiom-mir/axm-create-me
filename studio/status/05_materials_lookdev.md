# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_ANIMAL_DEFORMED_TANGENT_SPACE_TARGET_HOST_DIAGNOSTIC / EXACT PROBE + HANDEDNESS MUTATION RENDERER-VISIBLE IN 40/40 RETAINED CONTEXTS / FINAL SEAM + TEXTURE + TRANSPORT + ART-QA ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest Art Direction, Geometry, Rigging, Technical Art, Visual QA and Materials state, plus current Animal PR ownership before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior Materials pass proved Geometry's explicit logical-quad normal field remains a useful partial shading repair across representative elbow deformation, but explicitly held final normal+tangent adoption. Since then the missing dependencies became stable and separately owned:

- Geometry PR #20, exact head `ca4bb8a2f144231f8755eacc980785d1807b79db`, owns the seam-aware structural UV / explicit normal / tangent render domain (`42 source -> 84 render vertices / 80 triangles`).
- Rigging PR #22, exact head `63c65d57fda0595217f86d971ff8c67f256188be`, owns dense deformed tangent-frame observation across the established elbow envelope.
- Technical Art owns exact transport and still holds deformed tangent equivalence / receiving-engine acceptance.
- Runtime owns representation and target-device cost.
- Art Direction and independent Visual QA explicitly identified the same next Materials-owned gate: a **real tangent-space shaded diagnostic on the exact current UV/normal/tangent chain**, without compensating PBR retuning.

No existing Materials PR owned that exact receiving question. Building, Nature and Object retain their earlier bounded lanes; no fresher material-ready defect elsewhere outranked this explicit cross-specialist dependency.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

New stacked draft PR:

**#24 — `Materials: render deformed tangent-space diagnostic in Godot`**

Branch:

`studio/materials-animal-tangent-space-lookdev-001`

Base:

Rigging PR #22 branch / exact head:

`63c65d57fda0595217f86d971ff8c67f256188be`

Exact current Materials head:

**`e9d5c451b16bd05d2419248f58bef911f83dc1e8`**

Observed PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

Pinned provenance:

- Rigging deformed tangent-frame head `63c65d57fda0595217f86d971ff8c67f256188be`;
- Rigging tangent module blob `fbade964b3305d70775d196232ad2cd4671d0eac`;
- Geometry UV/tangent head `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- Geometry UV/tangent module blob `ba0b4e620f132413606177358e47bd32ae4d4965`;
- exact rig / weighting donor `04760112deb81a8d145226fe7ee02923107c9916`.

## Evidence design

Materials does not author a new production Animal surface. It consumes the exact Geometry / Rigging render attributes and adds a deterministic receiving shader diagnostic only.

The payload covers:

- left + right sides;
- `smoothstep-v0` + `ease-out-power-0p75-v1`;
- `-60°, -30°, 0°, +30°, +60°`;
- fixed `three_quarter` + `grazing` camera contexts.

Each retained pose/context renders three modes:

1. `flat_tangent_control` — neutral tangent-space normal;
2. `periodic_tangent_probe` — deterministic procedural tangent-space perturbation;
3. `flipped_handedness_mutation` — the same probe with tangent W deliberately inverted, used only as a negative control proving the renderer/harness is sensitive to handedness corruption.

Total retained target-host capture: **120 real PNG renders**.

The probe is U-periodic, so the diagnostic itself does not introduce an authored texture discontinuity at the cylindrical wrap seam. It is not a production normal map.

Held controls:

- exact side-local 84-vertex render domains and 80-triangle topology;
- exact UVs, explicit normals and tangent XYZ/W from Geometry / Rigging except the deliberate W-flip negative control;
- source form, rig and weighting data;
- neutral base surface values: albedo `[0.46, 0.49, 0.53, 1]`, metallic `0`, roughness `0.5`;
- lights and cameras within each comparison.

## Retained failed evidence and repair

First exact workflow run:

**`35166360878` — FAILED CLOSED at payload construction**.

All inherited Animal tests were green. The Materials observer incorrectly required the left and right render-index arrays to be byte-identical. Geometry PR #20 intentionally preserves **side-local** render indexing and proves bilateral correspondence through semantic render-vertex keys, UV identity, mirrored positions/normals/tangent XYZ and reflection-correct tangent handedness. Cross-side raw index-array equality was therefore an invalid Materials assumption, not a source defect.

The failure remains retained. The repair removes only that false cross-side equality assertion. It continues to require exact donor heads/blobs, exact side-local indices, exact 84-vertex domains, fixed UV identity and semantic-key identity for every representative frame. No renderer threshold or source gate was weakened.

Final evidence head:

`e9d5c451b16bd05d2419248f58bef911f83dc1e8`.

## Exact target-host evidence

Dedicated workflow:

**`35166492817 — Materials Animal tangent-space lookdev` — SUCCESS**.

- Python 3.11 and 3.13 inherited Animal suites pass;
- 65 inherited tests pass in the target-host 3.11 lane;
- Godot project validation passes;
- renderer: **Godot 4.7.2 GL Compatibility**, Xvfb/X11 in CI;
- target-host state: **`PASS_TARGET_HOST_TANGENT_SPACE_DIAGNOSTIC_CAPTURED`**;
- **120 real renders** retained.

Across all **40 pose/camera comparisons**:

- exact periodic tangent-space probe versus flat control is renderer-visible in **40 / 40**;
- full-frame changed-pixel fraction: min **2.388166%**, median **2.864439%**, max **3.113715%**;
- deliberate flipped-handedness mutation versus the exact periodic probe is independently renderer-visible in **40 / 40**;
- flipped-W changed-pixel fraction: min **2.398438%**, median **2.925203%**, max **3.216869%**.

All **12 neutral `0°` cross-weighting controls** are byte-identical across side / camera / shader-mode combinations, preserving the neutral weighting continuity check.

Direct inspection of the retained comparisons shows the tangent-space probe changing the internal surface response rather than deleting the object or producing a whole-form culling failure. The flipped-W negative control produces a visibly distinct shading field, so the target-host evidence path is demonstrably sensitive to tangent handedness rather than silently ignoring it.

This is intentionally a **capture PASS**, not an automated seam-free or aesthetic PASS. The verifier explicitly does not claim that the absence of seam artifacts has been algorithmically proven.

## Retained artifact

Artifact:

- ID `10475157597`;
- name `animal-materials-tangent-space-lookdev-e9d5c451b16bd05d2419248f58bef911f83dc1e8`;
- size `2,521,229 B`;
- GitHub SHA-256 `00c01a3728002140b85327f826423eead61e3557d66c79299d1e4fcf00c5ba1b`;
- independently downloaded and rehashed to the exact same digest;
- retained payload, target-host telemetry, verifier receipt, provenance notes and 120 PNG renders.

## Material / shading learning

A new receiving-side distinction is now evidenced in the Animal domain:

> **A structurally valid tangent frame is not yet a visual tangent-space proof; a useful receiving diagnostic must also prove that the target renderer responds to the exact tangent basis and can detect handedness corruption.**

Geometry #20 and Rigging #22 already proved the vectors and reflection rules structurally. Materials now proves those exact attributes reach a real tangent-space shader across representative deformation and that deliberately corrupting W produces a measurable and visible change in every retained context.

That closes a genuine observer gap without changing the source basis. It does **not** imply that this procedural field is a production texture, that seams are final, or that transport through GLB / engine skinning reproduces the same tangent space.

No UC / Profession Fabric extraction is justified yet. The reusable procedure — flat control + periodic diagnostic + deliberate handedness mutation on exact source-pinned render attributes — is promising, but it should be reproduced in materially different domains before becoming generic capability fabric.

## Scoped Materials result

**`PASS_ANIMAL_DEFORMED_TANGENT_SPACE_TARGET_HOST_DIAGNOSTIC_CAPTURED`**

with decision:

**`HOLD_FINAL_ANIMAL_SEAM_HANDEDNESS_TEXTURE_TRANSPORT_ART_QA_ACCEPTANCE`**

Exact meaning:

> The current Geometry #20 / Rigging #22 tangent chain is now proven to produce a real, deformation-aware tangent-space shading response in Godot 4.7.2 GL Compatibility, and the evidence harness detects deliberate tangent-handedness corruption. Do not yet call the Animal surface seam-free, texture-ready, transport-equivalent or aesthetically accepted.

## Handoffs completed

### Materials PR #24

Comment `5706554782` records exact workflow, 120-render evidence set, 40/40 exact-probe signal, 40/40 handedness-mutation signal, 12 neutral byte-identical controls, artifact digest and the retained first-run observer repair.

### Geometry PR #20

Comment `5706555876` returns the target-host receiving result without taking UV/tangent ownership or promoting structural UVs to final texture UVs.

### Rigging PR #22

Comment `5706557015` returns the shaded receiving result without converting structural deformation evidence into production skin-tangent transport or continuous-motion visual acceptance.

### Art Direction / Visual QA

Their requested tangent-space receiving dependency is now available as exact retained evidence. Final seam, handedness appearance and aesthetic acceptance remain theirs; Materials does not self-approve them.

### Technical Art / Runtime

No production GLB tangent transport, deformed importer equivalence, engine skinning equivalence, target-device frame time, GPU cost, memory or shader acceptance transfers from this pass.

## Explicit non-claims

This activation does **not** establish:

- a final Animal normal map or production material;
- final UV island layout, packing or texel density;
- automated proof that every UV seam is visually invisible;
- final tangent-handedness aesthetic acceptance;
- production skin-normal/tangent transport;
- Technical-Art GLB / target-engine import equivalence;
- continuous-motion appearance between retained poses;
- final Art Direction / Visual-QA acceptance;
- fur, skin, subsurface, decal, wear or production PBR quality;
- arbitrary renderer, camera, lighting, HDR or display equivalence;
- target-device CPU/GPU/FPS/VRAM/memory acceptance;
- Animation clip / playback acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the exact tangent-space response and handedness sensitivity are measured in every retained context, while seam-free/final appearance remains explicitly unclaimed; the failed first run is retained with its precise observer mistake.
- **Agency / non-domination:** Geometry owns UV/tangent structure, Rigging owns deformation, Materials owns receiving lookdev evidence, Technical Art owns transport, Runtime owns cost, and Art Direction / Visual QA retain final visual authority.
- **Continuity:** exact donor heads/blobs, side-local semantic identity, failed evidence, repaired evidence and previous normal-only Materials results remain separately traceable and rollback-safe.
- **Wisdom before speed:** close the missing real-render receiving gate with a diagnostic surface and deliberate negative control rather than inventing production textures or retuning PBR values before the chain is transport- and visually accepted.

## Next Materials pass

Re-scan the full constellation first. Do not keep escalating this Animal diagnostic unless Visual QA / Art Direction identifies a specific seam, handedness or tangent-space defect from the retained renders, or Technical Art lands an exact receiving-engine transport that needs A/B visual verification. Otherwise choose a fresh bounded material / UV / texture / shader / surface-family gap elsewhere rather than extending this lane by inertia.
