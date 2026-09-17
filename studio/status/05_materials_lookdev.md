# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_OBJECT_FRONT_SERVICE_PANEL_SOURCE_BOUND_ISOTROPIC_UV_TARGET_HOST_DIAGNOSTIC / 0.05 M PER UV UNIT CANDIDATE + 3X V-DENSITY NEGATIVE DISTINGUISHED IN 3 REAL VIEWS / SOURCE GEOMETRY + MATERIAL SCALARS UNCHANGED / PRODUCTION UV-TEXTURE-DECAL + ART-QA + IMPORT-RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, Art Direction, Environment, Visual QA, Technical Art and the newest open design lanes before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact evidence for this activation live in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The complete preceding Building compact-v2 Materials status remains rollbackable at coordinator content blob **`f2579cc600d37597e6d524d6436567d5f6dbe06d`**. Its exact result remains historical truth and is not relabeled by this activation.

## Fresh constellation / duplication scan

The scan did not justify another Building or Nature material pass by habit:

- Building compact-v2 already has exact five-family Materials continuity evidence; current adoption blockers live with world/runtime/transport owners, not a scalar retune.
- Nature's current active work is timing/world review after the shaded-backface diagnostic; no fresh unowned Materials defect outranked the other lanes.
- Animal already has active Materials normal/tangent receiver work; duplicating it would violate lane discipline.
- Character remains structurally blocked upstream.
- Map already owns its Building-transfer Materials lane.
- Object Materials PR #6 remains the single active Object Materials lane. Its base scalar-PBR family is already established, while UV/texture/decal/wear work remains explicitly unclaimed.

The strongest bounded fresh Materials gap was therefore an exact **UV-density/orientation review on the source-owned `front_service_panel` component**, without inventing source face semantics or retuning the existing material family.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials lane:

**PR #6 — `Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

Exact Materials head tested:

**`04c521a5a7e31bef54093c818108fd6c2080ca0e`**

Pinned unchanged identities:

- host source SHA-256: **`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`**;
- Object material-profile SHA-256: **`dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`**;
- target component: `front_service_panel`;
- target role: `service_panel`;
- existing material: `service_dark`;
- exact source dimensions: **`0.468 × 0.018 × 0.156 m`**;
- reviewed source-local min-Y face area: **`0.073008 m²`**.

Important ownership boundary:

- the **component** is source-owned;
- the selected face is only a Materials review selector: `source_local_min_y_face`;
- `source_surface_identity_owned = false`;
- `source_material_slot_authored = false`.

No new source semantic is invented from visual convenience.

## UV candidate and negative control

Bounded planar candidate:

- `+U = source +X`;
- `+V = source +Z`;
- origin = source face `min-X / min-Z`;
- physical scale = **`0.05 m / UV`** in U and V;
- exact UV span = **`9.36 × 3.12`**;
- physical-density anisotropy = **`1.0`**.

Deliberate negative control:

- U remains `0.05 m / UV`;
- V becomes **`0.0166666667 m / UV`**;
- exact span becomes `9.36 × 9.36`;
- physical-density anisotropy = **`3.0`**.

The visual probe is a **procedural checker generated from UV coordinates only**. No texture file, decal art, production unwrap, normal map, AO map, or PBR scalar change is introduced.

## Added exact evidence machinery

Added in Object PR #6:

- `lookdev/front_service_panel_uv_review_001.json`;
- `tools/build_object_front_service_panel_uv_evidence.py`;
- `lookdev-proof/front_service_panel_uv_observe.gd`;
- `.github/workflows/object-front-service-panel-uv-review.yml`.

The builder fail-closes on exact source/profile digests, target component identity, dimensions, role/material mapping, physical UV scale, and truth-boundary flags. A negative contract that changes the target component to `body_shell` is rejected as intended.

The Godot observer renders four states:

1. historical `BoxMesh` uniform `service_dark`;
2. split-face uniform `service_dark` control;
3. isotropic UV checker candidate;
4. deliberate 3× V-density checker defect.

This makes observer-representation neutrality testable before interpreting the UV result.

## Exact CI + real-render evidence

Dedicated workflow:

**`35181859228 — Object front service-panel UV review evidence` — SUCCESS**

- Python 3.11: PASS;
- Python 3.13: PASS;
- complete Object test suite: PASS in both matrix jobs;
- exact source-bound UV packet: PASS;
- target-component drift negative: fails as intended;
- target renderer: **Godot 4.7.2 / GL Compatibility / Xvfb-X11**.

Three retained contexts:

1. `front_service`;
2. `three_quarter`;
3. `grazing_service`.

Each frame is **820 × 620 = 508,400 pixels**.

### Observer neutrality

Historical BoxMesh vs split-face uniform representation:

- `front_service`: **0 changed pixels**;
- `three_quarter`: **0 changed pixels**;
- `grazing_service`: **0 changed pixels**.

Therefore the face-isolation review representation itself is pixel-identical in all retained contexts before UV diagnostic shading is applied.

### Candidate visibility

Isotropic checker vs split-uniform:

| Context | Changed pixels | Full-frame fraction |
|---|---:|---:|
| `front_service` | **30,366 / 508,400** | **5.972856%** |
| `three_quarter` | **9,617 / 508,400** | **1.891621%** |
| `grazing_service` | **4,887 / 508,400** | **0.961251%** |

### Negative-control visibility

3× V-density defect vs isotropic candidate:

| Context | Changed pixels | Full-frame fraction |
|---|---:|---:|
| `front_service` | **9,502 / 508,400** | **1.869001%** |
| `three_quarter` | **3,114 / 508,400** | **0.612510%** |
| `grazing_service` | **1,595 / 508,400** | **0.313729%** |

Direct inspection of the retained PNGs shows the candidate's equal physical U/V density as square/equal-scale checker cells on the panel, while the deliberate negative visibly compresses the pattern vertically to the expected 3× V density in all three views.

## Materials decision

**`PASS_OBJECT_FRONT_SERVICE_PANEL_SOURCE_BOUND_ISOTROPIC_UV_TARGET_HOST_DIAGNOSTIC`**

Exact meaning:

> A deterministic 0.05 m/UV source-local planar candidate can be bound to the exact `front_service_panel` review face without changing source geometry or the established `service_dark` PBR family. The target-host observer is representation-neutral before diagnostic shading, and real Godot renders clearly distinguish the isotropic candidate from a deliberate 3× V-density defect in all retained contexts. This validates the bounded UV-density/orientation review method; it does not promote the candidate to source-authored or production UVs.

## Retained artifact

Artifact:

- ID **`10480478823`**;
- name `object-front-service-panel-uv-review-001-04c521a5a7e31bef54093c818108fd6c2080ca0e`;
- size **`612,378 B`**;
- GitHub SHA-256 **`d9664846a427f4aa95c5854b78d7b3062166c701aa529a9fe17a7fe0f4fe4ca4`**;
- independently downloaded and rehashed to the exact same digest;
- retains source/profile/review contracts, build/runtime receipts and 12 real PNG renders.

Object PR #6 received the exact handoff as comment **`5708544813`**.

## Reusable learning

Bounded reusable lesson:

> **Before authoring texture content, prove a physical UV-density/orientation candidate with a source-bound face selector, a representation-neutral control, and a deliberately bad anisotropic negative. A real renderer should be able to distinguish the defect before the workflow is trusted. Keep component ownership, face semantics, material values and production adoption separate.**

This is a reusable evidence pattern. It is **not** yet a universal unwrap/atlas policy: one planar manufactured panel does not justify automatic promotion into UC or Profession Fabric.

## Explicit non-claims

This activation does **not** establish:

- a source-owned semantic face ID or material slot for the reviewed panel face;
- production UV authoring/adoption;
- arbitrary-surface automatic unwrap or atlas packing;
- final texel density for production textures;
- texture, decal, wear, normal-map, AO-map or baked-detail content;
- normal/tangent transport correctness for texture-space shading;
- final Object import/GLB equivalence;
- Runtime shader, draw, memory or target-device cost acceptance;
- physically measured coating correctness;
- final Art Direction or Visual-QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the face is explicitly a review selector rather than falsely promoted to source-owned semantics; exact digests, UV dimensions, real-render deltas and artifact hash are retained.
- **Agency / non-domination:** Materials owns only the bounded lookdev UV candidate/evidence. Hard Surface owns source surface semantics, Technical Art owns transport, Runtime owns performance, and Art Direction / Visual QA retain final visual acceptance.
- **Continuity:** existing Object Materials PR #6 is advanced instead of duplicated; the established PBR family and earlier Object evidence stay unchanged and rollbackable; the previous Building status is pinned by its coordinator blob.
- **Wisdom before speed:** no texture art or material retune was authored before proving that the UV review representation is neutral and can actually detect a known density defect in the target renderer.

## Next Materials pass

Re-scan the full constellation first. Do not keep expanding this panel by habit. Continue Object UV work only if a source owner or downstream consumer exposes a concrete UV/texture/decal defect or explicitly adopts a production face/slot identity. Otherwise choose the strongest fresh material, UV, texture, shader or surface-family gap elsewhere.
