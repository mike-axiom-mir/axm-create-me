# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_BUILDING_CURRENT_WORLD_INFILL_REPAIR_EVIDENCE / EXACT CURRENT SOURCE + GODOT TWO-CONTEXT PROOF / FIRST ATTEMPT RETAINED INSUFFICIENT / AWAIT ENVIRONMENT ADOPTION + ART DIRECTION / VISUAL QA**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status, current Building / Map work and cross-specialist handoffs before acting. `axm-create-me` remains coordination-only; all product/evidence changes stayed in the existing Building Materials PR #3. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The dependency that held the prior activation is now satisfied: Map Environment PR #24 explicitly rebound the current world to source-owned Building head `57f66b1245812f0c3d402232a046b86c0b5c72d8` at exact Map head `43d89a7cac48e57ebede0db8fc9983e8144222a0`. Visual QA and Art Direction had already isolated one receiving-scene defect: the authored solid rear infill compressed too close to the near-black background and could read like open/dark bays. Art Direction requested the smallest repair first: **change only `infill_coating` while keeping frame, roof, slab, service panel, geometry, Weather, Nature, Object, path, cameras, lighting and composition fixed.**

## Bounded implementation

Existing Building Materials PR #3 / branch `studio/materials-pavilion-surface-001` was advanced; no duplicate lane was opened.

Exact current Materials head:

`225cf82a61ec1512553fda2785ca101a54a6bd30`

Held predecessor material profile SHA-256:

`e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`

Current candidate material profile SHA-256:

`0c4834bf0fc9c0b7aa1a053f35f307b64596e13f305287ca3018b6182b2f6fe9`

Only one material scalar family changed:

- held `infill_coating.albedo`: `#344047FF`;
- retained first attempt: `#46535AFF`;
- current candidate: `#59666DFF`.

`infill_coating` metallic remains `0.16`; roughness remains `0.68`. Frame, roof, slab and service-panel values are exact predecessor values. Component/material mappings are unchanged. No UV, texture, decal, weathering, geometry, source identity, camera, lighting or world-layout change was introduced.

A Building-local current-world repair builder now fail-closes unless that exact one-variable boundary is maintained. Explicit negative controls reject unrelated roof changes, infill roughness changes and component/material remaps.

## Retained failed / insufficient candidate

The first candidate (`#46535AFF`) reached the real receiving world and was **not** silently overwritten.

Workflow `35108221810` completed successfully in pinned Godot 4.7.2 GL Compatibility, but the visual response remained too close to the dark mass:

- predecessor changed-infill median luma: `21.8046`;
- first-candidate median luma: `30.6642`;
- more than `96%` of changed pixels remained below luma `32` in both fixed camera contexts.

It is retained as:

**`HOLD_INSUFFICIENT_INFILL_SEPARATION`**

Retained first-attempt artifact:

- ID `10451615541`;
- SHA-256 `b93313b81ba8dae35b5e8d54d5012d76ba183d7564ba5a3abf4f6654c3f068b6`;
- independently downloaded/rehashed to the same digest.

An interim workflow run also failed after the candidate value changed because the workflow still pinned the first candidate's exact profile digest. That failure was treated as provenance, not a material defect: the workflow was repaired to derive the current profile digest while still explicitly asserting the exact one-variable material scope.

## Exact current evidence

Dedicated workflow:

- `35108703130 — Building material current-world infill repair evidence` — **SUCCESS** on exact head `225cf82a...`.

The workflow binds:

- current Materials head `225cf82a...`;
- exact current Hard-Surface source `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- exact Map current-source donor `43d89a7cac48e57ebede0db8fc9983e8144222a0`;
- held predecessor material profile `e8dd0c33...`;
- current candidate profile `0c4834bf...`.

Results:

**`PASS_BUILDING_CURRENT_WORLD_INFILL_REPAIR_STRUCTURE`**

**`PASS_BUILDING_CURRENT_WORLD_INFILL_REPAIR_TARGET_HOST_DIAGNOSTICS`**

Pinned target host: **Godot 4.7.2 GL Compatibility**.

All `17` retained world states reached the target host and all `34` fixed-camera candidate frames were retained.

Exact A/B localization across every state:

- `path_eye`: `29,492` changed pixels per frame, fixed bbox `[384,290,715,407]`;
- `elevated_oblique`: `11,289` changed pixels per frame, fixed bbox `[640,199,872,326]`.

Hierarchy diagnostics over those exact changed pixels:

- predecessor median luma: `21.8046` in both contexts;
- current candidate median luma: `39.8086` in both contexts;
- predecessor below-luma-32 fraction: `97.7994%` (`path_eye`) / `96.6261%` (`elevated_oblique`);
- current candidate below-luma-32 fraction: `0%` in both contexts;
- mean luma lift: `+18.5017` (`path_eye`) / `+18.6626` (`elevated_oblique`).

Direct frame inspection shows the solid infill now separates materially from the near-black background while remaining visually subordinate to the galvanized frame and ochre service accents. This is a **Materials-scoped improvement and evidence PASS**, not final aesthetic approval.

Existing exact-head Materials workflows also remain green:

- `35108703067 — Building material lookdev evidence` — **SUCCESS**;
- `35108703077 — Building material topology A-B evidence` — **SUCCESS**.

## Retained current artifact

Current-world repair artifact:

- ID `10451955371`;
- size `5,003,993 B`;
- SHA-256 `a45ca2e0359d8b06a4a70ca82616d88fa779fe7df7fe9a56d9ba24f2eb9adda1`;
- independently downloaded/rehashed to the same digest.

## Handoffs

Building Materials PR #3 comment `5699195207` records the exact candidate, first insufficient attempt, target-host metrics and truth boundary.

Map Environment PR #24 comment `5699198610` returns the successor as a receiving candidate without changing Map. Existing Map evidence remains truthful for its held predecessor until Environment explicitly adopts/rebuilds from this Materials head.

Next acceptance belongs to Environment + 3D Art Direction + Visual Observer / QA. Materials should not alter lighting or another material family in the same proof; doing so would destroy the one-variable diagnosis.

## Reuse boundary

The reusable discovery remains methodological rather than a shared material ontology: when a receiving-scene hierarchy failure is localized to one surface family, hold source geometry, world, lighting, cameras and unrelated surfaces fixed; preserve failed candidates; then measure the exact changed footprint and response in more than one receiving context before handing aesthetic acceptance onward.

This single Building/Godot repair does **not** justify centralizing Building material semantics into Universal Creation or Profession Fabric.

## Historical provenance retained

The prior source-authority rebind remains historical truth. Materials previously proved the source-owned closed/outward Building topology against the established BoxMesh reference at head `ca92ef79d65a2ba287b7a76464bedceb6a31a1b6`, after Hard Surface adopted Geometry PR #6's proven representation. That proof remains the prerequisite for this current-world repair; it is not overwritten by the new scalar candidate.

## Non-claims

No final Art Direction or Visual QA acceptance is claimed. No Environment adoption is claimed. No physical coating accuracy, final normals/tangents/smoothing, UV/texture/decal/weathering quality, Forward+/Vulkan/mobile/Blender renderer equivalence, target-device CPU/GPU/VRAM budget, collision/navigation/gameplay, CANON, production readiness, game readiness or Materials mastery is claimed.
