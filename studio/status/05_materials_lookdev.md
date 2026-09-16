# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **NATURE_LEAF_SIDEDNESS_MATERIAL_AB_IMPLEMENTED / EXACT GEOMETRY_PR10_DONOR_STRUCTURALLY_GREEN / SAME_PROFILE_CULL_DISABLED_VS_EXPLICIT_BACKFACES / GODOT_4P7P2_TARGET_RUN_QUEUED / VISUAL_EQUIVALENCE + PREFERENCE + RUNTIME + SOURCE_ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current specialist status, and active work across the design constellation. `axm-create-me` remains coordination-only; implementation/evidence changes in this activation live only in the existing Nature Materials lane. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Materials result, `PASS_OBJECT_SOURCE_OWNED_KEEPER_SURFACE_OWNER_BINDING`, remains true for its exact Object PR #6 identity and is preserved in Git history. It is not rewritten or demoted by this Nature activation.

## Constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no stronger currently evidenced material/UV defect.
- **Character:** shoulder form selection remains upstream; Materials should not shade over unresolved form.
- **Animal:** connected-forelimb geometry/deformation still awaits richer visual review; no material lane should pre-empt that gate.
- **Building:** existing source/Map material evidence already covers the current pavilion scalar-PBR question.
- **Weather / Map:** active work is atmosphere, receiving composition and QA rather than an unowned surface-family defect.
- **Object:** the previous keeper-owner Materials result remains active evidence; current newest Object work is primarily Rigging/Animation/Technical-Art/Runtime integration, so no second Object Materials micro-lane was opened.
- **Nature:** Geometry PR #10 exposed the strongest new Materials-owned question: explicit disjoint opposite-wound leaf geometry versus a two-sided material/culling strategy in an actual renderer. Geometry explicitly left that representation-policy decision to Materials/Technical Art.

No duplicate Materials PR was opened. Work extends existing Nature Materials PR #5.

## Selected bounded gap

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft PR: **#5 — `Materials: add bounded sapling bark/leaf lookdev profile`**

Branch: `studio/materials-sapling-lookdev-001`

Exact current Materials head after this activation:

`2cd1a7531fe9ed6578dce65e736610b8fc6a2905`

Exact Geometry donor:

- PR #10 — `Geometry: test explicit two-sided leaf blade topology`;
- head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- source migration prerequisite `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- exact dedicated Geometry run `35083603910` has now completed **SUCCESS** on that donor head.

Geometry structurally proves, for all three established Nature studies, a review-only candidate that keeps the migrated source mesh as an exact prefix and adds one disjoint opposite-wound side per leaf. Materials consumes that donor; it does not own or rewrite the candidate.

## Why only the sapling is compared here

The established Materials profile is explicitly scoped to `sapling-neutral-001`. It remains:

- `woody`: `#5C3B27FF`, metallic `0.0`, roughness `0.84`;
- `foliage`: `#5A823EFF`, metallic `0.0`, roughness `0.58`.

Those values are unchanged. They are **not** silently generalized to the compact-east or east-rear trees merely because Geometry tested the structural pattern across three bodies.

## Smallest Materials improvement

Added to the existing Nature Materials branch:

- `tools/build_leaf_sidedness_material_ab.py` — exact donor-bound A/B packet builder;
- `lookdev-leaf-sidedness-proof/project.godot` — bounded Godot GL Compatibility proof host;
- `lookdev-leaf-sidedness-proof/observe.gd` — real renderer observer and direct pixel comparator;
- `.github/workflows/materials-leaf-sidedness.yml` — exact-head retained-evidence workflow.

The comparison holds material scalar values, lighting and camera constant and changes only leaf-sidedness representation:

### A — material-side two-sidedness

- exact migrated `sapling-neutral-001` source mesh;
- `390` vertices / `570` triangles;
- woody remains normal `CULL_BACK`;
- foliage uses `CULL_DISABLED`;
- no added opposite-wound leaf geometry.

### B — explicit Geometry backfaces

- exact Geometry PR #10 derived candidate;
- `490` vertices / `620` triangles;
- woody and foliage use normal `CULL_BACK`;
- same scalar PBR values as A;
- exactly `+100` vertices / `+50` triangles relative to A, or `+8.771929825%` triangles relative to the 570-triangle source body.

That count difference is a payload fact only, **not** a measured performance verdict.

## Real target-render comparison contract

Pinned renderer: **Godot 4.7.2 GL Compatibility**.

Fixed contexts:

1. `whole_three_quarter`;
2. `crown_back`;
3. `crown_low_grazing`.

The proof host uses identical lighting and camera per A/B pair, retains all six PNGs, and computes direct per-pixel changed-pixel percentage plus channel-delta metrics. It deliberately does not auto-promote whichever representation produces fewer pixels or fewer triangles.

## Exact verification state

Dedicated workflow:

`35085045016 — Materials leaf sidedness strategy evidence`

Exact head:

`2cd1a7531fe9ed6578dce65e736610b8fc6a2905`

Current state at this status write:

**QUEUED / no runner assigned.**

Therefore this activation currently claims only:

**`NATURE_LEAF_SIDEDNESS_MATERIAL_AB_IMPLEMENTED_AND_EXACTLY_BOUND`**

It does **not** claim `PASS_TARGET_HOST...`, visual equivalence, a preferred strategy, or final material acceptance before the exact run executes and retained renders/receipt exist.

The queue is treated as a transient verification wait rather than evidence of failure. No local software-render substitute is being promoted as Godot evidence.

## Provenance / continuity

- Existing Nature Materials PR #5 remains the sole Nature Materials lane.
- The established sapling material profile is unchanged.
- Geometry PR #10 remains owner of explicit leaf-backface geometry.
- Nature source migration PR #9 remains the current source-generated baseline lineage.
- UC receives no Nature-specific sidedness rule.
- The older Nature Materials lookdev/environment-context evidence and the prior Object Materials PASS remain historical truth for their exact heads/artifacts.
- Comments were returned to both Nature Materials PR #5 and Geometry PR #10 with the exact queued state and non-claims.

## Renderer / evidence boundaries

Even if the target run succeeds, this proof is bounded to:

- Godot 4.7.2 GL Compatibility;
- one exact `sapling-neutral-001` source identity;
- the existing two-scalar-family sapling material profile;
- fixed static geometry and three proof cameras;
- proof-host face normals generated from exact triangles rather than final authored normal/tangent/UV assets.

It will not by itself prove renderer equivalence, alpha-cutout/transmission/subsurface behavior, final leaf thickness, authored vertex normals/tangents, UV/texture quality, moving/wind shading, final Environment hierarchy, or target-device cost.

## Non-claims

This activation does **not** establish:

- that disabled foliage culling is visually equivalent to explicit opposite-wound geometry;
- that either strategy is aesthetically better;
- that the 570-triangle representation is faster or cheaper on target hardware;
- source migration of the Geometry #10 candidate;
- rebind/adoption by Map, VFX, Procedural, Technical Art or Runtime;
- final leaf shader, UV, texture, normal-map, transmission, subsurface or alpha treatment;
- botanical/physical reflectance correctness;
- final Art Direction or independent Visual QA acceptance;
- UC or Profession Fabric promotion;
- CANON, game readiness, production readiness or Materials mastery.

## Handoffs

- **Geometry PR #10:** exact donor consumed without modification. The target-render result must answer only the representation comparison; Geometry remains source/candidate topology authority.
- **Runtime / Optimization:** if the two strategies become visually acceptable alternatives, measure actual renderer submissions/memory/device cost before any efficiency claim. The `+50` triangle difference is not a runtime PASS/FAIL.
- **Visual Observer / QA + 3D Art Director:** after exact retained Godot frames exist, inspect any backface-lighting/faceting difference rather than choosing from topology counts.
- **Technical Art / UC Integration:** keep Nature sidedness policy out of UC unless a generic renderer/material contract is demonstrated across domains. UC's current neutral transport remains separate from this Nature-specific decision.
- **Environment / VFX:** do not silently rebind accepted receiving scenes or wind sequences to either candidate until the representation decision and downstream evidence close.

## Four-root gate

- **Truth:** Geometry structural PASS, Materials implementation, and Materials target-render execution are recorded as three distinct evidence states; queued is not called PASS.
- **Agency / non-domination:** Materials proposes and measures a surface representation; Geometry, Runtime, QA/Art Direction and downstream receiving owners retain their own acceptance domains.
- **Continuity:** existing Nature profile, source lineage, Geometry candidate, previous Materials evidence and rollback boundaries remain independently traceable.
- **Wisdom before speed:** the studio compares the two smallest credible sidedness strategies before source migration, shader complexity, UV/texture work or cross-domain abstraction.

## Next Materials pass

Re-scan first. If `35085045016` completes, inspect the retained receipt and all six images directly before issuing a scoped Materials preference or HOLD. If it fails, preserve the failed exact run and repair only the demonstrated implementation/evidence defect. Do not infer a winner from triangle counts alone.
