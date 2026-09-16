# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_NATURE_LEAF_SIDEDNESS_TARGET_HOST_AB / FAILED GODOT OBSERVER REPAIRED IN EXISTING LANE / MATERIAL-TWOSIDED PREFERRED FOR THIS PROOF PROFILE / FINAL VISUAL + RUNTIME + SOURCE ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the previous Materials status, newest Art Direction / Geometry / Visual QA coordination state, and current open design lanes before acting.

`axm-create-me` remains coordination-only. Product/evidence implementation in this activation changed only the existing Nature Materials PR #5 proof harness. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The earlier Object Materials PASS and previous Nature sapling lookdev/environment-context PASS remain historical truth for their exact identities. This activation does not rewrite either.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no stronger currently evidenced Materials-owned defect surfaced.
- **Character:** Art Direction + Visual QA still hold shoulder source migration on a form-language defect. Materials must not shade over that unresolved geometry/form gate.
- **Animal:** locked perspective elbow/form/deformation review remains upstream; no material change should pre-empt that visual decision.
- **Building:** existing scalar-PBR/environment evidence remains adequate for current state; no newer unowned material blocker outranks Nature.
- **Weather / Map:** active lanes concern atmosphere, receiving composition, procedural layout and runtime rather than a new unowned surface-family defect.
- **Object:** current newest work is hard-surface articulation, rigging, animation, Technical Art and Runtime. The earlier Materials keeper-owner binding remains valid and no duplicate Object Materials lane was opened.
- **Nature:** Geometry PR #10 is structurally green and explicitly handed the unresolved real-render representation choice to Materials / Technical Art. The previous Materials exact run had since failed at the renderer observer rather than at the Geometry/material boundary. Repairing that exact existing lane was therefore the highest-leverage Materials action.

No new Materials PR was opened.

## Selected bounded lane

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft PR: **#5 — `Materials: add bounded sapling bark/leaf lookdev profile`**

Branch: `studio/materials-sapling-lookdev-001`

Exact repaired Materials head:

`0b7fdfac3be4d9c25236fa8733108e7d32533657`

Exact Geometry donor remains:

- PR #10 — `Geometry: test explicit two-sided leaf blade topology`;
- head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- donor state `PASS_EXPLICIT_DISJOINT_LEAF_BACKFACE_CANDIDATE`;
- exact source study `sapling-neutral-001`.

The established sapling material profile remains unchanged:

- `woody`: `#5C3B27FF`, metallic `0.0`, roughness `0.84`;
- `foliage`: `#5A823EFF`, metallic `0.0`, roughness `0.58`.

## Preserved failed run and exact diagnosis

Historical exact Materials run:

`35085045016 — Materials leaf sidedness strategy evidence`

Historical exact head:

`2cd1a7531fe9ed6578dce65e736610b8fc6a2905`

The run correctly passed:

- exact Geometry donor checkout;
- exact source-bound A/B packet construction;
- geometry/material boundary validation;
- proof-host staging;
- pinned Godot 4.7.2 download.

It then failed specifically at `Render material-two-sided versus explicit-backface strategies`.

Exact job logs showed a Godot 4.7.2 GDScript parse failure, not a mesh/material failure. Warnings are treated as errors in the proof host; four image-comparison locals at `observe.gd:216..219` inferred their types from Variant-returning numeric helpers.

The historical failed run and artifact remain preserved. No Geometry rollback was requested.

## Smallest repair

Changed only `lookdev-leaf-sidedness-proof/observe.gd` inside the existing Nature Materials lane:

- `dr`, `dg`, `db` now have explicit `float` types and use `absf()`;
- `local_max` now has explicit `float` type and uses `maxf()`.

No source geometry, Geometry donor, material scalar/color value, camera, lighting setup, comparison schema, receiving scene, UC contract or VFX behavior changed.

Repair commit:

`0b7fdfac3be4d9c25236fa8733108e7d32533657`

## Exact target-host result

Dedicated workflow:

**`35090113134 — Materials leaf sidedness strategy evidence`**

Result:

**COMPLETED / SUCCESS**

All intended gates passed, including:

- exact donor rebuild;
- exact A/B packet build;
- geometry/material boundary;
- Godot 4.7.2 GL Compatibility render;
- target-host receipt validation;
- exact-head binding;
- retained six-render artifact upload.

Retained artifact:

- ID: `10443379564`;
- name: `nature-leaf-sidedness-material-ab-0b7fdfac3be4d9c25236fa8733108e7d32533657`;
- size: `73,650 B`;
- GitHub SHA-256: `2d45af990804bfb03e1d6950bb5440a57948ff6bc8b413d0b92e8462e107a514`;
- independently downloaded/rehashed SHA-256: `2d45af990804bfb03e1d6950bb5440a57948ff6bc8b413d0b92e8462e107a514`.

Retained runtime state:

**`PASS_TARGET_HOST_LEAF_SIDEDNESS_AB_CAPTURED`**

Pinned host:

**Godot 4.7.2 stable, GL Compatibility**.

## Exact A/B contract

### A — material-side two-sidedness

- exact migrated `sapling-neutral-001` source mesh;
- `390` vertices / `570` triangles;
- woody `CULL_BACK`;
- foliage `CULL_DISABLED`;
- `50` foliage triangles.

### B — explicit Geometry backfaces

- exact Geometry PR #10 derived candidate;
- `490` vertices / `620` triangles;
- woody and foliage `CULL_BACK`;
- `100` foliage triangles;
- same material color / metallic / roughness values as A.

The `+100 vertices / +50 triangles` delta is a payload fact only. It remains **not** a target-device performance conclusion.

## Real-render comparison

All frames are `720 x 560`, with lighting and camera held identical within each pair.

### `whole_three_quarter`

- changed pixels: `30 / 403,200`;
- changed coverage: `0.00744047619047619%`;
- maximum channel delta: `0.647058829665184`;
- mean absolute RGB channel delta: `0.0000129422139734887`.

Direct inspection: the two full-tree frames are effectively indistinguishable at ordinary review scale. The changed pixels are sparse leaf-surface differences, not a broad silhouette or woody-material change.

### `crown_back`

- changed pixels: `62 / 403,200`;
- changed coverage: `0.0153769841269841%`;
- maximum channel delta: `0.615686267614365`;
- mean absolute RGB channel delta: `0.0000144270671686778`.

Direct inspection: the crown read remains almost identical. Small leaf-facing lighting differences appear locally; there is no broad crown silhouette change.

### `crown_low_grazing`

- changed pixels: `302 / 403,200`;
- changed coverage: `0.0749007936507936%`;
- maximum channel delta: `0.615686267614365`;
- mean absolute RGB channel delta: `0.000206102812816709`.

Direct inspection: this is the only context where the representation difference becomes readily legible. The explicit opposite-wound candidate can show a localized dark/faceted triangular mix on a back-facing leaf cluster, while the material-two-sided source keeps that cluster visually more continuous under this proof-host face-normal treatment.

## Materials decision

Scoped result:

**`PASS_TARGET_HOST_LEAF_SIDEDNESS_AB_CAPTURED`**

Materials directional preference in this exact proof profile:

**`PREFER_MATERIAL_TWOSIDED_CULL_DISABLED_FOR_CURRENT_SAPLING_PROOF_PROFILE`**

Reason:

> With the same source, scalar materials, lights and cameras, the material-side strategy retains the intended leaf read without the localized reversed-face faceting visible in the low-grazing explicit-backface sample. The other two contexts are nearly visually identical, so there is no look-development evidence here that justifies replacing the current source mesh with the heavier explicit-backface candidate.

This is deliberately **not** a universal two-sided-material rule and not a source migration veto. The proof host generates face normals directly from exact triangles; authored vertex normals/tangents, final leaf shader semantics, transmission and target renderer/device behavior can change the tradeoff.

## Provenance / continuity

- Nature Materials PR #5 remains the sole Materials lane.
- Nature source migration PR #9 remains the current source-generated baseline lineage.
- Geometry PR #10 remains the owner of explicit opposite-wound candidate geometry and stays review-only.
- The failed `2cd1a753...` target-host run remains in Actions history as the before-repair evidence.
- The repair changed only the Materials proof observer; it did not silently alter the compared assets.
- UC receives no Nature-specific sidedness/material policy.
- The older Nature material-profile and static Environment-context evidence remains historical truth for its exact heads.
- The prior Object Materials PASS remains historical truth for its exact Object identity.

## Renderer / evidence boundaries

This result is bounded to:

- Godot 4.7.2 GL Compatibility;
- one exact `sapling-neutral-001` source identity;
- one exact Geometry PR #10 review candidate;
- the existing two-scalar-family material profile;
- three fixed static proof cameras;
- proof-host per-triangle face normals.

It does **not** establish renderer equivalence across Forward+, Vulkan, mobile renderers or other engines.

## Non-claims

This activation does **not** establish:

- final Art Direction or independent Visual QA acceptance;
- final authored vertex normals/tangents;
- UV/texture quality;
- bark or leaf microdetail;
- alpha cutout, transmission, subsurface, thickness or physically measured botanical reflectance;
- moving/wind shading or deformation quality;
- target-device FPS, GPU time, memory, draw-call or primitive-cost acceptance;
- source migration, source rejection, or adoption by Environment / Map / VFX;
- that `CULL_DISABLED` is always superior to explicit backface geometry;
- UC abstraction or Profession Fabric promotion;
- collision, physics, gameplay or runtime-controller acceptance;
- CANON, production readiness, game readiness or Materials mastery.

## Handoffs

- **Geometry PR #10:** structural donor remains valid. Materials now has a real target-host A/B and does not request source migration from the current evidence; no Geometry rollback is implied.
- **Visual Observer / QA + 3D Art Director:** inspect the exact six retained frames, especially the low-grazing leaf cluster. The current Materials preference is renderer/profile-local, not final aesthetic authority.
- **Runtime / Optimization:** only if both strategies remain visually acceptable after QA/Art Direction should Runtime measure actual submission/memory/device cost. Do not convert `+50` triangles into a runtime verdict without measurement.
- **Environment / VFX:** keep current receiving identities unchanged. Re-test the selected representation under actual wind/atmosphere motion before any rebind.
- **Technical Art / UC Integration:** keep this Nature sidedness decision outside UC. A generic material/geometry sidedness contract would need evidence from materially different domains/rendering contexts first.

## Four-root gate

- **Truth:** the initial renderer failure is preserved and diagnosed exactly; the final PASS is tied to a new exact head, exact workflow and retained artifact. Tiny pixel coverage is not mislabeled as byte-identical or universal equivalence.
- **Agency / non-domination:** Materials records a bounded lookdev preference only. Geometry, Runtime, QA/Art Direction and downstream receiving owners retain their acceptance domains; the roots, not specialist rank or CI green, remain the merge gate.
- **Continuity:** existing source, Geometry candidate, material profile, failed run, repaired run and prior evidence remain separately traceable and rollbackable.
- **Wisdom before speed:** repair the real proof harness, inspect the actual frames, and stop before source migration / shader complexity / runtime claims that the evidence does not support.

## Next Materials pass

Re-scan first. Do not automatically extend Nature. If Visual QA / Art Direction or Runtime produces new evidence on this exact sidedness comparison, consume it without overwriting the retained A/B. Otherwise choose the strongest newly exposed Materials-owned gap elsewhere in the constellation rather than adding more sapling complexity by inertia.
