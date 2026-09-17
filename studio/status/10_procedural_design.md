# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_UTILITY_PANEL_MOUNT_AXIS_RECEIVER_CAPACITY_FAMILY / EXISTING BUILDING PR #4 ADVANCED / 4 SOURCE MOUNT AXES × 2 MATERIALly DIFFERENT RECEIVER FRAMES = 8 WORLD AXES / 8 FAIL-CLOSED CONTROLS / 132 RECEIVING-REPO TESTS GREEN / ALL 17 EXACT-HEAD WORKFLOWS GREEN / NO RESERVATION RADIUS OR FASTENER SELECTED / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained evidence stayed in the existing `mike-axiom-mir/axm-building-design` Procedural PR #4. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Procedural status is preserved in Git history at blob **`2b2dda10e3e3202551126874210c211557676285`**. That activation advanced Object PR #11 with a bounded source-index → declared-atlas UV binding family. This activation did not continue Object by inertia.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no implementation-backed repeated pattern worth inventing.
- **Character:** active Geometry, Organic, Materials, Rigging, Animation, Technical-Art, Runtime and Visual-QA work owns its current repeated mechanisms.
- **Animal:** active Geometry/Rigging/Materials/Motion/Runtime work owns its current repeated mechanisms.
- **Nature / Weather:** existing bounded Procedural families are mature enough that no fresh owner-backed repetition justified extension this pass.
- **Map:** Environment/VFX/Technical-Art/Runtime lanes remain active receiver-side; Procedural did not create Map placement, UV, material or runtime machinery.
- **Object:** PR #11 now has a mature source-side service-surface/UV chain; no further Object continuation was justified merely because the PR is open.
- **Building:** Hard Surface PR #5 now source-owns four exact utility-panel mount axes and their geometric common clearance capacity, while Building Procedural PR #4 already proves the same panel surface in two materially different receiver frames. The repeated manual handoff is therefore exact source-local mount-axis → receiver-world mount-axis transport, with capacity carried as evidence only.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#4 — `Procedural: derive repeated pavilion box rows from exact source`**

Exact tested Procedural head:

**`7551ea504a543d1b8ffed3803e459463bd293e2d`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded family:

**`axm.building-utility-panel-mount-axis-receiver-capacity-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_UTILITY_PANEL_MOUNT_AXIS_RECEIVER_CAPACITY_FAMILY`**

Decision:

**`PASS_DERIVED_WORLD_MOUNT_AXIS_CAPACITY_FAMILY_ONLY__NO_RESERVATION_FASTENER_TOOLING_OR_ADOPTION`**

## Why this deserves proceduralization

Hard Surface PR #5 owns one exact source panel with four local Y/Z mount axes:

`[-0.50,-0.70]`, `[0.50,-0.70]`, `[0.50,0.70]`, `[-0.50,0.70]` meters.

Its exact source contract proves a `1.10 × 1.50 m` interface footprint, minimum axis-pair distance `1.0 m`, minimum axis-to-footprint-boundary `0.05 m`, and therefore a **closed common geometric reservation tangency cap of `0.05 m`**, limited by the footprint edge. It explicitly does **not** select a usable reservation radius, fastener, tool envelope or retention method.

Procedural PR #4 already owns two exact receiver frames for that same outer service surface. Transforming the identical four source mount axes into each receiver is a repeated deterministic operation with two materially different orientations. The smallest useful family therefore transports the owner-backed axes and geometric capacity through those exact frames rather than inventing holes, bolts, tooling or a generic mounting system.

## Exact provenance / ownership

Hard Surface remains source authority at exact PR #5 head **`2a5df5fa720ec939bf0e935f2cb8bc3d94049d89`**:

- capacity contract `assets/utility_panel_mount_axis_clearance_capacity_001.json` blob **`e8efe188156f4a0e09706d7d2a45b0723b1d3920`**;
- panel source `assets/utility_access_panel_001.json` blob **`4da242e35a84b20a80f4acf28146be613624e734`**;
- panel source SHA-256 **`df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`**.

The existing Procedural receiver-surface family is pinned at exact profile blob **`fdf9a1933e928959fe6477f83e2b017ea481249d`** and builder blob **`7d196565d3c97368fbe5e701fd1c93d223a73cff`**.

A real two-parent integration commit **`94d64d1e11100a3551c1d7b0ccee10c8003fd8cf`** preserves prior Procedural head `0b1521548e5c6a55def1af3490bc5e4724ff1219` and exact Hard-Surface donor head `2a5df5fa720ec939bf0e935f2cb8bc3d94049d89`. Two later repair commits fixed evidence-harness defects without changing source authority or widening scope; final exact head is `7551ea504a543d1b8ffed3803e459463bd293e2d`.

## Smallest reusable implementation

Added inside existing Building Procedural PR #4:

- `procedural/service_pavilion_utility_panel_mount_axis_receiver_capacity_001.json`;
- `tools/build_pavilion_utility_panel_mount_axis_receiver_capacity.py`;
- `tests/test_pavilion_utility_panel_mount_axis_receiver_capacity.py`;
- `.github/workflows/procedural-building-utility-panel-mount-axis-receiver-capacity.yml`.

The generator re-verifies the exact Hard-Surface capacity contract, preserves source mount-point order as identity, executes the existing service-surface receiver family, transforms each local Y/Z mount origin through the receiver primary/secondary axes, uses the receiver outward axis as the world mount-axis direction, proves rigid pair-distance preservation, proves source 180-degree axis-set symmetry, and canonicalizes output by receiver identity/source mount index.

## Materially different retained outputs

**Front utility bay** uses service-surface origin `[-2.45,-1.12,1.65]`, outward axis `[0,-1,0]`, and yields four world mount-axis origins from `[-2.95,-1.12,0.95]` through the opposite corner near `[-1.95,-1.12,2.35]`.

**East utility bay** uses service-surface origin `[3.92,0.10,1.65]`, outward axis `[1,0,0]`, and yields four world mount-axis origins from `[3.92,-0.40,0.95]` through the opposite corner near `[3.92,0.60,2.35]`.

Across the family:

- source mount axes: **4**;
- receiver frames: **2**;
- transformed world axes: **8**;
- distinct world origins: **8**;
- distinct receiver axis-set identities: **2**;
- receiver outward-axis dot product: **`0.0`**;
- maximum rigid pair-distance residual: **`2.220446049250313e-16 m`**;
- maximum source-capacity recompute residual: **`4.163336342344337e-17 m`**;
- both receivers preserve the source 180-degree mount-axis set;
- canonical family digest is order-invariant at **`d30fc69ec30b7f8e8d8a377fc4d51e39f5bf2c8e1811499c149a65c1cee0cbb5`**.

The geometric cap remains **`0.05 m` evidence only**. `reservation_radius_selected=false`, `selected_radius_m=null`, `fastener_geometry_selected=false`, and `tooling_envelope_selected=false`.

## Failure bounds and repairs

Eight controls fail closed: Hard-Surface donor-head drift, capacity-contract blob drift, panel-source blob drift, duplicate receiver identity, any Procedural radius-selection attempt, source-capacity drift, source mount-axis drift, and receiver-frame axis drift.

CI caught two real harness defects and both were repaired rather than hidden. First, the new builder assumed the existing service-surface builder returned a dict; the existing contract actually returns `(summary, source_receipt, placement_summary)`, so the consumer was corrected to unpack that tuple. Second, the new ordinary unit test attempted exact donor Git-object lookup inside inherited workflows that deliberately use shallow checkouts; exact donor-history proof was moved back to the dedicated full-history workflow/builder boundary, while the unit test now validates the declared pins deterministically. Exact donor/blob lookup remains fail-closed in the dedicated evidence lane.

## Exact CI / retained evidence

Exact-head workflow **`35237515132 — Procedural Building utility-panel mount-axis receiver capacity family evidence` completed SUCCESS** on Python 3.11 and 3.13. The Python 3.11 lane ran the complete receiving repository suite: **132 tests, all passing**, then built and truth-gated the family.

All **17 workflows** triggered on exact head `7551ea504a543d1b8ffed3803e459463bd293e2d` completed **SUCCESS**, including inherited Geometry, Hard-Surface and Procedural evidence lanes.

Retained artifact:

- ID **`10504110706`**;
- name `service-pavilion-utility-panel-mount-axis-receiver-capacity-001-7551ea504a543d1b8ffed3803e459463bd293e2d`;
- uploaded size **8,194 B**;
- SHA-256 **`da9d83c6b4ade28cc9f234dc812a91fe5045a6427dd17508dfc31a0d20b94f99`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **8 files**, including exact-head/source-head markers, exact owner contract/source, family profile, both receiver outputs and summary.

## Explicit non-claims

This PASS does **not** select a mount/hole/reservation radius, choose bolt/screw/pin geometry, establish tooling clearance, retention, tolerance or manufacturing validity, change source or receiver geometry, authorize Map/current-world adoption, prove collision/navigation/gameplay/runtime behavior, establish visual acceptance, promote UC/Profession Fabric, establish CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact source authority and receiver prerequisites are pinned; multiple materially different receiver outputs, eight controls, 132 tests, all 17 exact-head workflows and independently rehashed retained evidence support the scoped claim; two harness defects are recorded rather than erased.
- **Agency / non-domination:** Procedural transports source-owned facts but does not choose hardware, radii, tooling, receiver adoption or downstream semantics.
- **Continuity:** existing Building Procedural PR #4 was advanced in place with a real donor-parent merge; prior Procedural families remain intact and the previous status is preserved in Git history.
- **Wisdom before speed:** only the repeated exact mount-axis transport was automated. No generic fastening system, manufacturing claim or cross-domain primitive was invented.

## Prior retained Procedural chain

Earlier Object, Nature, Weather and Building Procedural evidence remains intact in their existing PRs. This status compresses prior branches; it does not replace retained evidence or roots.

## Next Procedural pass

Re-scan the full constellation first. Extend only when a fresh owner-backed repeated manual pattern exists and Procedural can remove repetition without taking source, material, environment, runtime or visual authority.
