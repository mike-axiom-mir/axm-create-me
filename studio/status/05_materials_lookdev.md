# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_ANIMAL_BILATERAL_TOPOLOGY_SHADING_REVIEW_CAPTURED / GENERATED-NORMAL VISUAL-NEUTRALITY CLAIM HELD / GEOMETRY + ART + QA + RUNTIME AUTHORITY PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status and active design-constellation PRs before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Object inner-lid source-identity rebind remains historical truth and was not retuned or duplicated. The fresh highest-leverage Materials gap was instead in `mike-axiom-mir/axm-animal-design`: Geometry PR #13 explicitly held target-renderer / generated-normal material behavior while changing the bilateral right-side triangle connectivity.

## Selected bounded gap

Geometry PR #13 exact donor:

- branch: `studio/geometry-bilateral-exact-mirror-surface-topology-001`;
- exact head: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- exact `bilateral_mirror_surface_topology.py` blob: `9a0ebcc6169445996756bb446a87e3baf8b9cc33`.

The structural candidate keeps the compared right-surface positions and index/triangle budget fixed while changing triangle connectivity to exact bilateral mirroring. Geometry correctly did not claim that this is visually/materially neutral when normals are generated from that connectivity.

The correct Materials move was therefore not to author an Animal look. It was to isolate whether topology alone changes neutral material response in a real target host.

## Bounded Materials lane

Repository: `mike-axiom-mir/axm-animal-design`

New stacked draft PR: **#14 — `Materials: review exact-mirror topology shading in Godot`**

Branch: `studio/materials-bilateral-mirror-topology-shading-001`

Base: Geometry PR #13 branch.

Exact current Materials head:

`96e998e5c793057836e01656aca9f71481439c9b`

PR remains open / draft / mergeable.

No Animal source geometry, production material assignment, rigging authority or CANON was moved into this branch.

## Evidence design

The review payload fail-closes on the exact Geometry donor head/blob and exact Rigging plan donor. Inside each A/B comparison it holds:

- source positions;
- index / triangle budget;
- neutral probe material (`albedo [0.46, 0.49, 0.53, 1]`, metallic `0`, roughness `0.5`);
- lighting;
- camera / FOV;
- renderer context.

Single changed variable: **historical-right versus exact-mirror-right triangle connectivity**.

Two generated-normal strategies are observed separately:

- `face_split` — per-face normals;
- `vertex_smooth` — area-weighted generated vertex normals.

Two camera contexts are retained:

- `three_quarter`;
- `grazing`.

Target host: **Godot 4.7.2 GL Compatibility**, rendered through Xvfb/X11 rather than treating a headless orchestration path as renderer evidence.

## Retained observer repair

The first target-host attempt at the earlier Materials head stalled while waiting on `RenderingServer.frame_post_draw` in GitHub-hosted headless GL Compatibility. That attempt is retained as observer/orchestration history and is not relabelled as a material/topology result.

The observer was repaired in two bounded steps:

1. remove the headless `frame_post_draw` wait and use completed engine frames;
2. align capture with the already-proven studio target-host pattern: Xvfb + X11 + Godot GL Compatibility, with an explicit command timeout and job timeout.

No topology or material scalar was changed during that repair.

## Exact successful target-host evidence

Dedicated workflow:

**`35152434735 — Materials bilateral topology shading review` — SUCCESS**

Python **3.11 and 3.13** inherited Animal suites pass; the 3.11 lane also completes real Godot capture, verification and retained artifact upload.

Target-host state:

`PASS_TARGET_HOST_BILATERAL_TOPOLOGY_SHADING_REVIEW_CAPTURED`

Renderer signal:

`MATERIAL_SHADING_DELTA_REQUIRES_REVIEW`

The retained payload reports `42` vertices / `80` triangles for each compared right-surface representation, with positions and index count identical.

### Exact paired render deltas

| normal generation | camera | changed pixels | full-frame fraction |
|---|---|---:|---:|
| face-split | three-quarter | `3,211 / 691,200` | `0.464554%` |
| face-split | grazing | `2,790 / 691,200` | `0.403646%` |
| vertex-smooth | three-quarter | `16,522 / 691,200` | `2.390336%` |
| vertex-smooth | grazing | `18,113 / 691,200` | `2.620515%` |

Foreground occupancy and observed silhouette bbox remain identical for historical and exact-mirror variants inside each matched view. The changed pixels therefore describe internal shading response rather than a hidden camera, footprint or gross silhouette shift.

Maximum normalized mean absolute channel delta over the full frame is `0.0008750851034858388`. That global average is small because the subject occupies only about 2.8–3.2% of each frame; direct render inspection still shows a visible change in smooth-normal shading along the bent shaft / lower-foot region.

## Scoped Materials result

**`PASS_ANIMAL_BILATERAL_TOPOLOGY_SHADING_REVIEW_CAPTURED`**

with decision:

**`HOLD_GENERATED_NORMAL_VISUAL_NEUTRALITY_CLAIM_FOR_EXACT_MIRROR_TOPOLOGY`**

Meaning:

> The exact-mirror topology candidate is structurally valid enough to render, but triangle connectivity is not visually neutral under the generated-normal strategies tested. Materials therefore supplies the renderer evidence without accepting or rejecting Geometry's candidate. Explicit normal/tangent ownership plus Art Direction / Visual QA judgment must precede any claim that the topology change preserves final surface response.

This is not a demand to keep the historical topology. A better final path may be exact-mirror topology plus deliberate authored normal/tangent policy; that decision is not owned by this activation.

## Retained evidence

Artifact:

- ID `10469607407`;
- name `animal-materials-bilateral-topology-shading-review-96e998e5c793057836e01656aca9f71481439c9b`;
- size `99,798 B`;
- GitHub SHA-256 `e9de500cca011e6192d9a2de7b73edbda01b3ce103672ac1563448c7ed3f2564`;
- independently downloaded and rehashed to the exact same digest;
- contains eight real PNG renders, target-host telemetry, source-pinned payload and material-lookdev receipt.

## Handoffs

Materials PR #14 comment `5704780347` records the exact workflow, per-context pixel evidence, retained observer repair history, artifact digest and bounded hold.

Geometry PR #13 comment `5704782035` returns the material-response finding without requesting rejection, adoption or merge. Geometry retains topology authority.

### 3D Art Direction + Visual Observer / QA

Review the retained paired renders, especially the vertex-smooth comparisons. Materials does not convert the measured difference into an aesthetic verdict.

### Rigging / Deformation

No deformation acceptance is implied. If exact-mirror topology advances, generated/authored normals must also survive actual deformation rather than only this static neutral probe.

### Runtime / Technical Art

No target-device frame time, draw-call, shader, memory or import-budget acceptance is claimed. The topology pair has equal observed structural budget in this probe, but that is not a runtime benchmark.

### UC / Profession Fabric

No extraction is justified yet. This is one Animal-specific connectivity/normal-response review. The reusable learning is procedural: a topology-only structural change should not inherit a material-neutrality claim when normals are generated from that topology; target-host shading evidence should travel with the topology candidate until normal/tangent ownership is explicit.

## Explicit non-claims

This activation does **not** establish:

- a production Animal material or final PBR scalar set;
- authored normal/tangent correctness;
- UV, texture, trim, decal, alpha, subsurface or fur treatment;
- final topology adoption or rejection;
- deformation / rigging acceptance;
- Art Direction or independent Visual QA acceptance;
- target-device performance or production import equivalence;
- arbitrary renderer/camera/HDR/display equivalence;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root gate

- **Truth:** the renderer-visible delta is recorded instead of assuming equal positions/budget imply equal shading; the failed headless observer path remains historical evidence rather than being rewritten away.
- **Agency / non-domination:** Geometry owns topology, Materials owns the surface-response evidence, Rigging owns deformation, Runtime owns cost/import acceptance, and Art Direction / QA own final visual acceptance.
- **Continuity:** Geometry PR #13 remains the exact parent and its structural proof remains valid; PR #14 adds a bounded renderer edge rather than replacing that truth.
- **Wisdom before speed:** resolve normal/tangent behavior before layering textures or a final Animal material over a topology whose generated shading response is still materially different.

## Next Materials pass

Re-scan first. Do not retune this neutral probe into an Animal look. Prefer either an Art/QA receiving judgment on the retained topology-shading views, an explicit source-owned normal/tangent dependency if another specialist creates one, or a fresh material/UV/texture defect elsewhere in the constellation that is not already owned by an active lane.
