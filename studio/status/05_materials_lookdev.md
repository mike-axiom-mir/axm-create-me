# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_BOUNDED_THREE_SOURCE_WOODY_FOLIAGE_FAMILY_CANDIDATE / THREE CURRENT NATURE SOURCES × THREE GODOT CONTEXTS / SOURCE OWNERSHIP WIDENED ONLY AFTER DIRECT EVIDENCE / ENVIRONMENT + ART DIRECTION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status and current open design PRs before acting. `axm-create-me` remains coordination-only. Product/evidence work stayed in the existing `mike-axiom-mir/axm-nature-design` Materials PR #5; no parallel Materials lane was opened.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior Nature sidedness result remains historical truth at exact Materials head `72d432a7706ffb604bee2bdd24dcf765d47bbc32`: across three exact current Nature sources and three Godot contexts, foliage `CULL_DISABLED` on the single-sided source mesh was visually near-equivalent to Geometry PR #10's explicit opposite-wound leaf backfaces while avoiding the derived `+100 vertices / +50 triangles`. That pass deliberately reused sapling material values on the compact/rear forms as observation-only and explicitly did **not** widen material ownership.

Building Materials was not reopened. Map Environment PR #24 has since composed the accepted Building `#59666DFF` infill over the source-correct / preferred-Weather-width world at exact head `5b9b55ec67e31655f51d1acc67284816067e5be6`; independent Visual QA and 3D Art Direction both PASS that exact combined fixed-camera surface. Art Direction explicitly requests no further Building material retune before a new defect is returned. Materials therefore leaves Building stable.

The highest-leverage unoccupied Materials gap was the ownership boundary exposed by the previous Nature proof: the same sapling lookdev response had now been seen on all three current source forms, but only `sapling-neutral-001` was allowed to own it. This activation asks whether that response genuinely deserves a bounded three-source material-family contract, without inventing per-tree variation, changing geometry, or turning a Nature-specific look into UC policy.

## Bounded implementation

Existing Nature Materials PR #5 / branch `studio/materials-sapling-lookdev-001` was advanced.

Exact current Materials head:

`09b163862a1fe1124ac239dfb1954083d508a08f`

PR state observed after the change: **OPEN / DRAFT / MERGEABLE**. Repository metadata is not CANON authority.

Exact Geometry donor remains:

- Nature Geometry PR #10 head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- three exact current source forms rebuilt from that pinned identity;
- no Geometry adoption or source rewrite is performed by Materials.

New components:

- `lookdev/nature_woody_foliage_family_001.json`;
- `tools/build_material_family_multisource.py`;
- `lookdev-material-family-multisource-proof/project.godot`;
- `lookdev-material-family-multisource-proof/observe.gd`;
- `.github/workflows/materials-multisource-family.yml`.

New profile schema:

`axm.nature-woody-foliage-material-family/v0.1`

Exact supported source scope is only:

1. `sapling-neutral-001`;
2. `compact-east-tree-neutral-001`;
3. `east-rear-tree-neutral-001`.

No wildcard, nearest match, species inference, or universal vegetation fallback exists. An unlisted source remains unsupported.

The family candidate carries the already-proven sapling lookdev scalars unchanged:

- `woody`: `#5C3B27FF`, metallic `0.0`, roughness `0.84`;
- `foliage`: `#5A823EFF`, metallic `0.0`, roughness `0.58`.

The control remains the original proof-only pair used by the earlier Nature -> UC surface bridge:

- `woody`: `#6B5138FF`, metallic `0.0`, roughness `0.92`;
- `foliage`: `#4E7B45FF`, metallic `0.0`, roughness `0.88`.

The candidate intentionally introduces **no per-source variation yet**. The exact policy is `NO_PER_SOURCE_VARIATION_YET__ESTABLISH_SHARED_FAMILY_BASELINE_FIRST`. This prevents the evidence pass from hiding arbitrary color noise inside a family-promotion decision.

For all control/candidate renders:

- exact source mesh is unchanged at `390 vertices / 570 triangles` per form;
- lighting and camera derivation are fixed within each source/context;
- woody uses `CULL_BACK`;
- foliage uses `CULL_DISABLED` in **both** control and candidate so leaf-sidedness is not a comparison variable;
- only bounded PBR color/roughness fields differ.

## Exact structural and target-host evidence

Dedicated workflow:

**`35121860391 — Materials multi-source woody foliage family evidence` — SUCCESS**

Exact workflow head:

`09b163862a1fe1124ac239dfb1954083d508a08f`

Structural result:

**`PASS_EXACT_THREE_SOURCE_WOODY_FOLIAGE_FAMILY_PACKET`**

Target-host result:

**`PASS_TARGET_HOST_THREE_SOURCE_MATERIAL_FAMILY_AB_CAPTURED`**

Pinned host: **Godot 4.7.2 GL Compatibility**.

The proof renders all three exact current sources from three materially different derived contexts:

- `whole_three_quarter`;
- `crown_back`;
- `crown_low_grazing`.

That retains **18 PNGs total**: `3 sources × 3 contexts × control/candidate`.

Analytic surface-family separation changes:

- woody/foliage relative-luminance gap: `0.06919107366395635 -> 0.12936999436623578`;
- woody/foliage roughness gap: `0.04 -> 0.26`;
- metallic remains `0.0` for both families.

Exact target-host material-delta footprint (`720 × 560 = 403,200` pixels per frame):

| source | whole 3/4 | crown back | low grazing |
|---|---:|---:|---:|
| sapling | `6,785 / 1.682788%` | `13,393 / 3.321677%` | `17,111 / 4.243800%` |
| compact east | `7,612 / 1.887897%` | `14,841 / 3.680804%` | `19,886 / 4.932044%` |
| east rear | `6,056 / 1.501984%` | `11,832 / 2.934524%` | `15,811 / 3.921379%` |

Across all nine matched contexts the changed-pixel share is `1.501984%..4.932044%` with mean `3.122988%` of the full frame. The changed bboxes remain localized to each rendered tree silhouette/crown area rather than indicating camera/background drift.

Direct inspection of all nine control/candidate pairs shows the same bounded qualitative result on all three forms: the candidate woody response is warmer/darker, foliage separates more clearly from the wood, and no source suffers whole-form disappearance, crown inversion, or an obvious context-specific failure in these retained proof views. The improvement remains modest because the geometry is intentionally sparse and no UV/texture/subsurface detail is introduced.

This is enough to support a **bounded Materials family candidate across these three exact current source IDs**, not enough to claim a universal Nature material system or final vegetation look.

## Retained evidence

Artifact:

- ID `10458520597`;
- name `nature-material-family-multisource-09b163862a1fe1124ac239dfb1954083d508a08f`;
- size `166,643 B`;
- GitHub SHA-256 `a0deb53ded3001b8cbb1e2f34a3cb55d25562cea7906d7a4084abe7aa9d46df2`;
- independently downloaded/rehashed to the exact same SHA-256.

The archive retains the exact structural packet, exact-head binding, Godot runtime receipt and all 18 control/candidate PNGs.

## Handoffs

Nature Materials PR #5 comment `5700913534` records the exact three-source family evidence and ownership boundary.

### Environment / World Art

Do **not** silently adopt this family into Map. The next receiving-scene proof should treat the family as one bounded variable, preserve current source placements/lighting/weather and keep the prior Building/Weather combined visual reference intact unless an explicit new Environment composition is being reviewed.

### Runtime / Optimization

This pass does not settle the separate leaf-sidedness runtime choice. `CULL_DISABLED` is fixed in both A/B variants here only to isolate material-family response. Target-device fragment/overdraw cost still belongs to Runtime.

### 3D Art Direction + Visual Observer / QA

The family is renderer-evidenced, not aesthetically final. Final preference and receiving-scene acceptance remain theirs. No per-tree variation should be added merely to create variety until a real composition demonstrates that the shared family baseline is too uniform.

### Geometry / Organic Form / VFX

No geometry, normals, topology, deformation, wind or source-form authority transfers. Geometry PR #10 remains a truthful explicit-backface alternative; this activation neither deletes nor adopts it.

### UC / Profession Fabric

No change is justified. The reusable lesson is an evidence pattern—prove a profile on materially different exact source forms before widening ownership—not a Nature-specific scalar or shader policy to centralize in UC.

## Continuity preserved

- Prior sapling-only profile remains valid provenance and is not rewritten.
- Prior multi-source sidedness proof at `72d432a7...` remains a separate representation experiment.
- Building `#59666DFF` remains stable; exact combined Environment head `5b9b55ec...` now has independent QA + Art Direction PASS, so Materials does not retune it.
- Current family promotion is explicit, bounded to three exact Nature source IDs, and evidence-backed rather than inferred from visual similarity.

## Non-claims

This activation does **not** establish:

- final Nature material or vegetation style;
- per-species or per-tree material variation;
- UVs, textures, bark microdetail, leaf normal/tangent maps, alpha cutout, subsurface or transmission;
- botanical or physically measured reflectance correctness;
- final leaf-sidedness strategy;
- wind/deformation shading acceptance;
- Map / Environment adoption;
- arbitrary renderer, camera, FOV, resolution, HDR/display or lighting-context equivalence;
- target-device FPS, GPU/CPU time, overdraw, VRAM, battery or thermal budget;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root gate

- **Truth:** profile ownership was not widened until three exact sources had structural and real-render evidence; exact artifact was independently rehashed; the sidedness/runtime boundary remains explicit.
- **Agency / non-domination:** Nature source, Geometry, Environment, Runtime, QA and Art Direction retain their own authorities; Materials changes only its material-family contract.
- **Continuity:** sapling-only profile, multi-source sidedness evidence, Building material history and the new family candidate remain distinct provenance points.
- **Wisdom before speed:** establish one shared proven family baseline before inventing per-source variation, textures, or shader complexity.
