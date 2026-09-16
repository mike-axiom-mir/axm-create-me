# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_ANIMAL_EXPLICIT_LOGICAL_QUAD_NORMAL_TARGET_HOST_REVIEW / TOPOLOGY SHADING DELTA REDUCED 53.9171% BUT NOT ELIMINATED / FINAL NORMAL-TANGENT VISUAL ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status, current Art Direction / Geometry / Visual-QA evidence and active design-constellation PRs before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Materials PR #14 result remains exact historical/current truth: Geometry PR #13's exact-mirror topology is not generated-smooth-normal visually neutral in the retained Godot contexts. This activation does not rewrite that evidence.

The fresh highest-leverage receiving dependency was Geometry PR #16, which answered the Art Direction / QA hold with one explicit Animal-local logical-quad normal-field candidate while correctly withholding visual acceptance.

## Constellation / duplication scan

The exact Animal chain now has a uniquely ready Materials handoff:

- Geometry PR #13 restores exact bilateral topology correspondence without moving the 42 source positions or changing the 80-triangle budget.
- Materials PR #14 + Visual QA prove area-weighted triangle-generated smooth normals change visibly under that connectivity change.
- Rigging PR #15 has already rebound the exact topology structurally and is not the current static Materials blocker.
- Art Direction explicitly requests a fixed-material/fixed-lighting target-host comparison for any real explicit normal/tangent candidate.
- Geometry PR #16 supplies that candidate at exact head `79e1667f6cc91e2ec8e41f01df18b6933c9c876d` and explicitly holds Materials / Art / QA acceptance.
- Building, Nature and Object already have active Materials evidence lanes; retuning those would duplicate or disturb cleaner accepted/review-ready variables.
- Character remains structurally blocked upstream; Weapon / Armor / Unit / Misc expose no fresher material-ready defect that outranks the Animal normal-response dependency.

No duplicate Geometry, Rigging, Technical-Art, Runtime, Art-Direction or QA implementation lane was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

New stacked draft PR:

**#17 — `Materials: render Geometry explicit logical-quad normals in Godot`**

Branch:

`studio/materials-explicit-logical-quad-normal-review-001`

Base:

Geometry PR #16 branch / exact head:

`79e1667f6cc91e2ec8e41f01df18b6933c9c876d`

Exact current Materials head:

**`a2cd0a6135a7c8502aef9572f7079a3dd2632103`**

Observed PR state after evidence completion: **OPEN / DRAFT / MERGEABLE**.

Pinned provenance:

- Geometry explicit-normal donor head `79e1667f6cc91e2ec8e41f01df18b6933c9c876d`;
- `bilateral_logical_quad_normals.py` blob `14a1ba3a1e4c96270197f4f449505113f7bf3e6e`;
- exact-mirror topology donor head `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- topology module blob `9a0ebcc6169445996756bb446a87e3baf8b9cc33`;
- generated-normal Materials baseline head `96e998e5c793057836e01656aca9f71481439c9b`.

## Evidence design

The review keeps the established neutral Materials harness:

- exact source positions held;
- exact 42-vertex / 80-triangle budget held;
- neutral probe material held: albedo `[0.46, 0.49, 0.53, 1]`, metallic `0`, roughness `0.5`;
- lighting held;
- camera / FOV held within each matched context;
- target host: Godot 4.7.2 GL Compatibility through Xvfb/X11;
- contexts: `three_quarter` and `grazing`.

It renders historical-right and exact-mirror-right under two normal modes:

1. `vertex_generated` — the prior area-weighted triangle-generated control;
2. `logical_quad_explicit` — Geometry PR #16's explicit logical-quad per-vertex normal field.

Before rendering, the payload fail-closes unless the historical-right and exact-mirror-right explicit normal vectors are numerically identical. Tangents remain exactly `NOT_DEFINED_NO_UV_BASIS`.

The primary question is intentionally narrower than final lookdev:

> If the same explicit per-vertex normal vectors are held across both topology variants, how much of the topology-dependent shading delta remains in the real renderer?

## Exact target-host evidence

Dedicated workflow:

**`35157381606 — Materials explicit logical-quad normal review` — SUCCESS**

- Python 3.11 / 3.13 inherited Animal suites pass;
- 3.11 completes real Godot capture, verification and retained artifact upload;
- target-host state: `PASS_TARGET_HOST_EXPLICIT_LOGICAL_QUAD_NORMAL_REVIEW_CAPTURED`;
- renderer signal: `EXPLICIT_NORMAL_FIELD_REDUCES_TOPOLOGY_SHADING_DELTA_IN_RETAINED_CONTEXTS`.

Retained artifact:

- ID `10471167088`;
- name `animal-materials-explicit-logical-quad-normal-review-a2cd0a6135a7c8502aef9572f7079a3dd2632103`;
- size `144,848 B`;
- GitHub SHA-256 `39407e0b2bbb638b5fec158c784f2d2fa10b5495b5ca3d8dcc1a3d714b2576cf`;
- independently downloaded and rehashed to the exact same digest;
- contains 8 real PNG renders plus exact source-pinned payload, telemetry and Materials receipt.

## Exact render result

The fresh generated-smooth control reproduces the previous PR #14 / Visual-QA result:

| mode | camera | changed pixels | full-frame fraction | visible foreground changed |
|---|---|---:|---:|---:|
| generated smooth | three-quarter | `16,522 / 691,200` | `2.390336%` | `84.71%` |
| generated smooth | grazing | `18,113 / 691,200` | `2.620515%` | `82.44%` |

With Geometry PR #16's **identical explicit per-vertex normal vectors** supplied to both historical and exact-mirror topology:

| mode | camera | changed pixels | full-frame fraction | visible foreground changed |
|---|---|---:|---:|---:|
| explicit logical-quad | three-quarter | `6,398 / 691,200` | `0.925637%` | `32.80%` |
| explicit logical-quad | grazing | `8,347 / 691,200` | `1.207610%` | `37.99%` |

Maximum full-frame topology-dependent changed-pixel fraction therefore falls from:

`2.620515% -> 1.207610%`

for a measured reduction of:

**`53.9171%`**.

The exact-mirror candidate itself also changes visibly when switching from generated to explicit normals:

- three-quarter: `10,918 / 691,200 = 1.579572%` full frame;
- grazing: `12,683 / 691,200 = 1.834925%` full frame.

Direct inspection shows the explicit field moderates the broad generated-normal redistribution, but the historical/exact images are still not visually identical around the bent shaft / lower transition.

## Material / shading learning

This activation exposes a second dependency layer that was not visible from Geometry's vector invariants alone:

> **Diagonal-invariant vertex-normal vectors do not guarantee diagonal-invariant rendered shading.**

The historical-right and exact-mirror-right surfaces receive the same explicit vertex-normal vectors, yet changed triangle diagonals still alter the renderer's interior interpolation field. The explicit candidate is therefore a real partial repair, not a complete topology-neutral shading policy.

This does **not** invalidate Geometry PR #16's structural PASS. Geometry proved that the explicit normal vectors themselves are diagonal-invariant and bilaterally mirrored. Materials proves that rasterized interpolation over different triangles still leaves a residual target-host shading dependency.

## Scoped Materials result

**`PASS_ANIMAL_EXPLICIT_LOGICAL_QUAD_NORMAL_TARGET_HOST_REVIEW_CAPTURED`**

with decision:

**`HOLD_FINAL_ANIMAL_NORMAL_TANGENT_VISUAL_NEUTRALITY__EXPLICIT_VERTEX_FIELD_REDUCES_BUT_DOES_NOT_REMOVE_TOPOLOGY_RESPONSE`**

Meaning:

> Keep Geometry #16 as a useful explicit normal-field candidate, but do not claim that it fully closes the exact-mirror topology's surface-response dependency. Art Direction / Visual QA should review the exact retained explicit-normal renders. Any future interpolation-level repair must remain a separate rollbackable candidate and must not be hidden through PBR retuning, topology rollback or source-form edits.

## Handoffs

### Materials PR #17

Comment `5705436602` records exact workflow, artifact digest, generated control reproduction, explicit-normal reduction, foreground fractions and the final Materials hold.

### Geometry PR #16

Comment `5705437742` returns the new dependency boundary: same explicit vertex vectors still leave triangle-interpolation sensitivity. Geometry's structural normal-field PASS remains intact; no rollback is requested.

### Materials PR #14

Comment `5705438487` preserves continuity: the generated-smooth baseline reproduces exactly at the retained metric level and remains valid evidence rather than being silently superseded.

### 3D Art Direction + Visual Observer / QA

Review the exact explicit-normal renders. Materials supplies the renderer evidence but does not turn a 53.9% reduction into aesthetic acceptance. The residual still touches about one-third of visible foreground in three-quarter and over one-third in grazing.

### Rigging / Deformation

Static normal response does not prove deformed-normal quality. If this candidate advances, Rigging must re-observe the exact explicit field under its deformation envelope.

### Technical Art / UC

No exact UC / GLB transport of this field is proven here. Current transport-only generated/averaged-normal evidence must not silently become an explicit-field transport PASS.

### Runtime

No target-device frame time, draw-call, shader, memory, interpolation cost or import-budget acceptance is claimed.

### Capability placement

No UC or Profession Fabric extraction is justified yet. The reusable learning is stronger than the prior Animal-only observation but still rests on one domain: **normal-vector invariance and rendered-interpolation invariance are separate claims**. Capability Cartography should only centralize machinery after materially different domains reproduce the dependency.

## Explicit non-claims

This activation does **not** establish:

- final Animal normal/tangent policy;
- final topology adoption or rejection;
- final Art Direction / Visual-QA acceptance;
- tangent-space readiness or UV correctness;
- texture, fur, skin, subsurface, decal or production PBR quality;
- deformed-normal correctness;
- UC/GLB transport of the exact field;
- target-device performance or runtime/import acceptance;
- arbitrary renderer/camera/HDR/display equivalence;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root gate

- **Truth:** a real 53.9% improvement is recorded without relabelling the remaining renderer delta as solved; the previous generated-normal failure remains intact.
- **Agency / non-domination:** Geometry owns the candidate field, Materials owns target-host surface evidence, Art Direction / QA own visual acceptance, Rigging owns deformed normals, Technical Art owns transport and Runtime owns cost.
- **Continuity:** PR #13 topology, PR #14 generated-normal evidence, PR #16 explicit vector field and PR #17 target-host receiving proof remain separate exact identities with rollback/provenance preserved.
- **Wisdom before speed:** do not add textures or compensate with PBR values while the more fundamental interpolation dependency is still open.

## Next Materials pass

Re-scan first. Do not keep iterating the same Animal neutral probe unless a genuinely new interpolation-level or transported explicit-normal candidate lands. Prefer either an Art/QA receiving judgment on PR #17, a fresh exact dependency created by another specialist, or a different material/UV/texture defect elsewhere in the constellation that is not already owned by an active lane.
