# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_MULTI_SOURCE_NATURE_LEAF_SIDEDNESS_MATERIAL_STRATEGY_EVIDENCE / THREE CURRENT SOURCES × THREE GODOT CONTEXTS / MATERIAL-TWO-SIDED VISUALLY NEAR-EQUIVALENT TO EXPLICIT BACKFACES / RUNTIME + ENVIRONMENT + ART DIRECTION HELD / BUILDING INFILL HELD STABLE PENDING ENVIRONMENT COMPOSITION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status, current open design PRs and cross-specialist handoffs before acting. `axm-create-me` remains coordination-only. Product/evidence work stayed in the existing Nature Materials PR #5. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previously selected Building infill candidate at exact Building Materials head `225cf82a61ec1512553fda2785ca101a54a6bd30` was **not** retuned. Visual QA and 3D Art Direction have since accepted the exact donor-context `#59666DFF` infill repair and explicitly asked Materials to hold it stable until Environment composes it over the newer source-correct / preferred-Weather-width world. Current Map Environment PR #24 is still exact head `0d8b2279ecbba47b9696a951db9513883fbef6c5` and still carries the predecessor Building material profile, so changing Building again would duplicate or destroy that clean one-variable handoff.

The strongest unoccupied Materials question was therefore Nature leaf sidedness. Geometry PR #10 already proved an explicit opposite-wound backface candidate across three real Nature sources, but its own truth boundary correctly held whether duplicated geometry is preferable to a two-sided material/shader. The existing Nature Materials lane had only rendered that comparison on one sapling. This activation expands the renderer evidence to all three current source forms without migrating Geometry or widening material ownership.

## Bounded implementation

Existing Nature Materials PR #5 / branch `studio/materials-sapling-lookdev-001` was advanced; no second Materials lane was opened.

Exact current Materials head:

`72d432a7706ffb604bee2bdd24dcf765d47bbc32`

Exact Geometry donor:

- Nature Geometry PR #10 head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- candidate state `PASS_EXPLICIT_DISJOINT_LEAF_BACKFACE_CANDIDATE`.

New evidence components:

- `tools/build_leaf_sidedness_material_multisource.py`;
- `lookdev-leaf-sidedness-multisource-proof/observe.gd`;
- dedicated pinned-Godot workflow `materials-leaf-sidedness-multisource.yml`.

The three exact current source studies are:

- `sapling-neutral-001`;
- `compact-east-tree-neutral-001`;
- `east-rear-tree-neutral-001`.

For each exact source the A/B holds source form, scalar review material values, lighting and camera derivation fixed and compares only:

1. **material-two-sided strategy** — exact migrated single-sided source mesh, woody material `CULL_BACK`, foliage material `CULL_DISABLED`;
2. **explicit-backface strategy** — exact Geometry PR #10 disjoint opposite-wound leaf backfaces, woody and foliage material `CULL_BACK`.

Per source, material-two-sided remains `390 vertices / 570 triangles`; explicit backfaces are `490 / 620`, i.e. the Geometry candidate adds `100 vertices` and `50 triangles` (`+8.771929825%` triangles relative to the source mesh).

The existing `sapling_material_profile_001` values are reused unchanged only as a fixed renderer reference. Its `source_scope` remains **`sapling-neutral-001`**. Applying those scalar values to the compact/rear bodies inside this proof is observation-only and does **not** widen the profile's source ownership or claim cross-source material adoption.

## Exact target-host evidence

Dedicated workflow:

- `35115107305 — Materials multi-source leaf sidedness evidence` — **SUCCESS** on exact head `72d432a7...`.

Same-head inherited workflows also remain green:

- Nature organic form baseline `35115107290` — SUCCESS;
- UC Nature surface bridge `35115107413` — SUCCESS;
- original one-source Materials leaf-sidedness proof `35115107258` — SUCCESS;
- Materials Environment-context evidence `35115107253` — SUCCESS;
- Materials sapling lookdev evidence `35115107481` — SUCCESS.

Structural result:

**`PASS_EXACT_MULTI_SOURCE_LEAF_SIDEDNESS_MATERIAL_AB_PACKET`**

Target-host result:

**`PASS_TARGET_HOST_MULTI_SOURCE_LEAF_SIDEDNESS_AB_CAPTURED`**

Pinned host: **Godot 4.7.2 GL Compatibility**.

Each source is rendered from three derived contexts:

- `whole_three_quarter`;
- `crown_back`;
- `crown_low_grazing`.

This retains 18 PNGs total: `3 sources × 3 contexts × 2 strategies`.

Exact changed-pixel results (`403,200` pixels per frame):

| source | whole 3/4 | crown back | low grazing |
|---|---:|---:|---:|
| sapling | `30 / 0.007440%` | `40 / 0.009921%` | `264 / 0.065476%` |
| compact east | `16 / 0.003968%` | `61 / 0.015129%` | `250 / 0.062004%` |
| east rear | `18 / 0.004464%` | `64 / 0.015873%` | `89 / 0.022073%` |

Across all nine A/B contexts the changed-pixel range is therefore only `16..264` pixels, or `0.003968%..0.065476%` of the frame. The largest difference is the sapling low-grazing crown at `264` pixels.

Direct inspection of all retained images shows the two strategies are visually near-identical in these exact contexts. Small differences concentrate on thin leaf edges / grazing views; no whole-form hierarchy or foliage-presence difference is visible that would materially require duplicated leaf geometry in this proof host.

This supports a **Materials-side candidate preference**, not a final renderer/runtime decision: carry foliage-level two-sided material rendering forward first because it preserves the exact source mesh and avoids the explicit `+100 vertices / +50 triangles` derivation while producing near-identical retained images here.

## Retained evidence

Artifact:

- ID `10455440693`;
- name `nature-leaf-sidedness-material-multisource-72d432a7706ffb604bee2bdd24dcf765d47bbc32`;
- size `213,784 B`;
- GitHub SHA-256 `ea0cf64bbc65032c81df22f68f85ce0201bfdd6f365625cce5dc987c48147456`;
- independently downloaded/rehashed to the exact same digest.

The archive retains the exact comparison packet, exact-head binding, target-host runtime receipt and all 18 PNGs.

## Handoffs

Nature Materials PR #5 comment `5700019170` records the exact three-source evidence and the bounded Materials-side candidate preference.

Nature Geometry PR #10 comment `5700021489` returns the renderer evidence without invalidating the explicit-backface candidate. Geometry's candidate remains a truthful structural alternative and must not be deleted or source-adopted merely from this Materials result.

Next gates:

- **Runtime / Optimization:** compare actual target-device cost of foliage `CULL_DISABLED` against explicit opposite-wound geometry. Fewer source triangles does not automatically mean cheaper GPU/fragment cost.
- **Environment / World Art:** only after the current Building one-variable composition gate is resolved, test the chosen Nature sidedness candidate in the real receiving scene without mixing unrelated lighting/material changes.
- **3D Art Direction + Visual Observer / QA:** retain final visual preference and receiving-scene acceptance.
- **VFX / Rigging / Animation:** wind/deformation shading on two-sided foliage remains unproven.

No UC or Profession Fabric change is justified. The sidedness decision is Nature/renderer integration knowledge; UC already provides neutral mesh/surface transport and should not absorb Nature-specific leaf policy for convenience.

## Building continuity preserved

The previous Building Materials result remains current and must not be silently rewritten:

- exact Building Materials head `225cf82a61ec1512553fda2785ca101a54a6bd30`;
- only `infill_coating.albedo` changed from `#344047FF` to `#59666DFF`;
- first retained insufficient candidate `#46535AFF` remains provenance;
- workflow `35108703130` SUCCESS;
- artifact `10451955371`, SHA-256 `a45ca2e0359d8b06a4a70ca82616d88fa779fe7df7fe9a56d9ba24f2eb9adda1`;
- direct donor-world Visual QA and Art Direction preference have cleared the material-side hierarchy hold;
- Environment still owns exact adoption over its newer current-world identity.

Materials should **not** retune Building until Environment returns the combined successor, because doing so would erase the clean attribution already established.

## Non-claims

No target-device CPU/GPU/VRAM/frame-time or fragment-cost acceptance is claimed. No final Nature shader, normals/tangents, alpha cutout, transmission, subsurface, UV/texture, botanical reflectance, wind/deformation response, Map integration, final Art Direction/Visual QA acceptance, CANON, production readiness, game readiness or Materials mastery is claimed.
